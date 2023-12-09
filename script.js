/*
        root.style.setProperty('--color1', '#CCB770');
        root.style.setProperty('--color2', '#999073');
        root.style.setProperty('--color3', '#FFD95A');
        root.style.setProperty('--color4', '#666257');
        root.style.setProperty('--color5', '#332F21');
*/

 
// changeColors.js
document.addEventListener('DOMContentLoaded', function () {
    // Get root element
    const root = document.documentElement;

    // Function to set CSS variables
    function setCSSVariables(color1, color2, color3, color4, color5) {
        root.style.setProperty('--color1', color1);
        root.style.setProperty('--color2', color2);
        root.style.setProperty('--color3', color3);
        root.style.setProperty('--color4', color4);
        root.style.setProperty('--color5', color5);
    }

    // Check if the page has a data attribute for colors
    const pageColors = document.body.dataset.colors;

    // Set colors based on the data attribute or use default colors
    if (pageColors) {
        const colors = pageColors.split(',');
        setCSSVariables(...colors);
    } else {
        // Default colors
        setCSSVariables('#8839B3', '#6A4280', '#9E1BE5', '#9E1BE5', '#312D33');
    }
});