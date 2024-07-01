document.addEventListener('DOMContentLoaded', () => {
    // Display current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        document.getElementById('time').textContent = utcTime;
    }

    // Display current day of the week
    function updateDay() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const dayOfWeek = days[now.getUTCDay()];
        document.getElementById('day').textContent = dayOfWeek;
    }

    updateTime();
    updateDay();
    setInterval(updateTime, 1000); // Update time every second
});
