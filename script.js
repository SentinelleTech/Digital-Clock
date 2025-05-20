function updateClock() {
    const now = new Date();

    //Get the components
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds  = now.getSeconds().toString().padStart(2, '0');

    //AM/PM format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; //The hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, '0');

    //Update time with blinking separator
    document.getElementById('time').innerHTML = `${formattedHours}<span class="separator">:</span>${minutes}<span class="separator">:</span>${seconds} ${ampm}`;

    //Get the current day and highlight it in the days list
    const currentDayIndex = now.getDay(); //0(sunday) to 6(saturday)
    const daysList = document.querySelectorAll('.days-list li');

    //Remove active class from all days and add it to current
    daysList.forEach((day, index) => {
        if(index === currentDayIndex) {
            day.classList.add('active');
        } else {
            day.classList.remove('active');
        }
    });

    //Get Date
    const months = ['January', 'Febryary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    document.getElementById('date').textContent = `${month} ${date}, ${year}`;
}

//Update the clock immediately
updateClock();

//Update the clock after every second
setInterval(updateClock, 1000);