# Digital Clock

A responsive web-based digital clock that displays the current time, date, and days of the week with the current day highlighted.

## Features

- Real-time digital clock with hours, minutes, and seconds
- 12-hour time format with AM/PM indicator
- Blinking time separators for a dynamic display
- Days of the week displayed in a horizontal list
- Current day automatically highlighted
- Full date display (month, day, year)
- Dark theme with modern styling
- Fully responsive design

## Technologies Used

- HTML5
- CSS3 (with animations)
- Vanilla JavaScript (no external libraries)

## Screenshot

![image](https://github.com/user-attachments/assets/3a75ec64-b5a9-48ec-8a01-9592b4306976)


## How It Works

The clock uses JavaScript's `Date` object to get the current time, which updates every second using `setInterval()`. The current day of the week is automatically detected and highlighted in the days list.

### Key Components:

1. **Time Display**: Shows hours, minutes, and seconds with blinking separator animations
2. **Days List**: Displays all seven days with the current day highlighted
3. **Date Display**: Shows the full current date

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/SentinelleTech/Digital-Clock.git
   ```
2. Open `index.html` in your web browser

## Customization

You can easily customize the clock by modifying the CSS variables:

- Change the background color by modifying the `body` background-color property
- Adjust the time color by changing the `#time` color property
- Modify the highlighted day appearance by editing the `.days-list li.active` styles

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

[MIT License](LICENSE)

## Author

John K. Macharia

---

Feel free to fork this project and customize it for your own use!
