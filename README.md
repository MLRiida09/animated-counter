# Animated Counter Dashboard

A simple and elegant animated counter dashboard that displays statistics with smooth counting animations. Built with pure HTML, CSS, and JavaScript.

## Features

- 🎯 **Smooth Counting Animation** - Numbers animate from 0 to target value
- 🎨 **Modern Design** - Clean gradient background with glassmorphism card
- 📱 **Responsive Layout** - Works perfectly on all device sizes
- ⚡ **Pure JavaScript** - No external libraries or frameworks required
- 🎭 **Interactive Elements** - Hover effects on icons and numbers
- 🌟 **Single File** - Everything contained in one HTML file

## Demo

The counter displays four key statistics:
- 💻 **4,000** Web Projects
- 📚 **1,000** Courses  
- 😊 **90,000** Happy Students
- 💡 **5,000** Learnings

## How It Works

The animation uses a simple mathematical approach:
- Calculates animation steps based on target value and speed
- Updates counter every 1ms for smooth animation
- Adds visual feedback during counting (scale and color change)
- Automatically stops when target is reached

## Getting Started

1. **Clone or Download** the HTML file
2. **Open** `index.html` in any modern web browser
3. **Enjoy** the smooth counting animation!

No installation or setup required - it works offline!

## Customization

### Changing Counter Values
Update the `data-target` attribute in the HTML:
```html
<div class="counter" data-target="5000">0</div>
```

### Modifying Animation Speed
Adjust the `animationSpeed` variable in JavaScript:
```javascript
const animationSpeed = 500; // Higher = slower animation
```

### Styling
All styles are contained in the `<style>` section. Key elements:
- `.wrapper` - Main card container
- `.counter-item` - Individual counter styling  
- `.counter` - Number styling and animation
- `.icon` - Emoji icon styling

## Browser Support

Works in all modern browsers including:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## File Structure

```
animated-counter/
│
├── script.js
├── style.css
├── index.html        
└── README.md        
```

## Technical Details

- **HTML5** semantic structure
- **CSS3** with flexbox layout and transitions
- **Vanilla JavaScript** with DOM manipulation
- **Mobile-first** responsive design
- **Accessibility** friendly with proper contrast

## License

This project is open source and available under the [MIT License](LICENSE).

## Connect

Created by **Rida Mellal**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rida-mellal-203989371/)

github live :
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://mlriida09.github.io/animated-counter/)

---

⭐ If you found this project helpful, please give it a star!
