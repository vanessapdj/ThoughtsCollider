// Setting the default wedding date (6 months from now)
function addMonths(date, months) {
    date.setMonth(date.getMonth() + months);
    return date;
}

const now = new Date();
const defaultWeddingDate = addMonths(new Date(), 6);
const minDate = now.toISOString().split("T")[0]; // Set today's date as the minimum selectable date
document.getElementById("weddingDate").setAttribute("min", minDate);
document.getElementById("weddingDate").value = defaultWeddingDate.toISOString().split("T")[0];

// Update the countdown timer
function updateCountdown(weddingDate) {
    const targetDate = new Date(weddingDate).getTime();
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "It's your wedding day!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Initial countdown setup
updateCountdown(document.getElementById("weddingDate").value);

// Update countdown when a new wedding date is chosen
document.getElementById("weddingDate").addEventListener("change", (e) => {
    updateCountdown(e.target.value);
});
