const stocks = [
    {name: "TechCorp", price: 100},
    {name: "BioHealth", price: 80},
    {name: "AutoMotors", price: 120},
    {name: "GreenEnergy", price: 90},
    {name: "FinBank", price: 110}
];

const stockTable = document.getElementById('stockTable');
const simulateCrashBtn = document.getElementById('simulateCrash');
const updateIntervalInput = document.getElementById('updateInterval');

let crashScheduled = false;

// Funktion zum Anzeigen der Aktien
function renderStocks() {
    stockTable.innerHTML = '';
    stocks.forEach(stock => {
        const row = document.createElement('tr');
        row.className = stock.change > 0 ? 'positive' : stock.change < 0 ? 'negative' : '';
        row.innerHTML = `
            <td>${stock.name}</td>
            <td>${stock.price.toFixed(2)}</td>
            <td>${stock.change ? stock.change.toFixed(2) : '0.00'}</td>
        `;
        stockTable.appendChild(row);
    });
}

// Funktion für zufällige Preisänderungen
function updateStocks() {
    stocks.forEach(stock => {
        const change = (Math.random() - 0.5) * 2; // -1 bis +1
        stock.price += change;
        stock.change = change;
        if (stock.price < 0) stock.price = 0;
    });
    renderStocks();
}

// Funktion für Aktien-Crash
function triggerCrash() {
    stocks.forEach(stock => {
        stock.price *= 0.3; // Crash: Preise fallen auf 30%
        stock.change = -stock.price;
    });
    renderStocks();
    crashScheduled = false;
}

// Automatische Updates
let interval = setInterval(updateStocks, parseInt(updateIntervalInput.value));

updateIntervalInput.addEventListener('change', () => {
    clearInterval(interval);
    interval = setInterval(updateStocks, parseInt(updateIntervalInput.value));
});

// Crash-Button
simulateCrashBtn.addEventListener('click', () => {
    triggerCrash();
});

// Optional: Automatischer Crash nach 30 Sekunden
setTimeout(() => {
    triggerCrash();
    crashScheduled = true;
}, 30000);

renderStocks();
