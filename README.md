# MOSDAC Clone Website

This project is a static clone of the MOSDAC (Meteorological & Oceanographic Satellite Data Archival Centre) homepage, built with HTML, CSS, and JavaScript. It is intended for educational and demonstration purposes.

## Overview

The website is a faithful front-end replication of the MOSDAC homepage, focusing on structure, layout, and client-side interactivity. It includes:

-   A responsive layout that adapts to different screen sizes.
-   Accessibility controls for adjusting font size and contrast.
-   Complex, multi-level navigation menus.
-   Dynamic tabbed sections for organizing content.
-   Various content sections for services, announcements, and footer information.

## File Structure

```
mosdac-clone/
│
├── index.html        # The main and only HTML file for the website.
│
├── css/
│   └── styles.css    # Contains all the styling, including layout, colors, and responsiveness.
│
├── js/
│   └── script.js     # Handles all client-side interactivity and dynamic features.
│
└── images/
    └── ...           # Contains all images, logos, and icons used on the site.
```

## How It Works

The project is built on three core web technologies:

1.  **HTML (`index.html`)**: Defines the complete structure and content of the webpage, from the header and navigation down to the footer. All text and images are laid out in this file.

2.  **CSS (`css/styles.css`)**: Provides the visual styling. This file controls the colors, fonts, spacing, and layout. It uses CSS variables for a consistent theme and media queries to ensure the site is responsive and looks good on both desktop and mobile devices.

3.  **JavaScript (`js/script.js`)**: Powers the interactive features of the site. The `script.js` file is responsible for:
    -   **Accessibility**: Changing font sizes and switching between high and normal contrast modes.
    -   **Navigation**: Making the dropdown menus work, especially on mobile devices.
    -   **Tabs**: Switching between different content and service tabs when a user clicks on them.
    -   **Fullscreen Mode**: Allowing the satellite image to be viewed in fullscreen.

## Key Features

-   **Accessibility Controls**: Users can click the controls in the top accessibility bar to increase, decrease, or reset the font size, and to toggle a high-contrast mode for better readability.
-   **Responsive Navigation**: The main navigation bar features complex, multi-level dropdown menus that are fully functional on desktop (on hover) and mobile (on click).
-   **Tabbed Content**: The "Satellite Images," "RADAR," "Weather," etc., tabs allow for switching between different content views without reloading the page. The "Services" section also uses tabs to neatly organize different service categories.
-   **Static Site**: The entire website is static, meaning it runs completely in the browser and does not require a backend server.

## Usage

To view the website, simply open the `index.html` file in any modern web browser.

## Customization

You can customize the website by:

-   Editing `index.html` to change the text, links, or structure.
-   Modifying `css/styles.css` to alter the visual appearance (e.g., colors, fonts).
-   Adding new interactive features in `js/script.js`.
-   Replacing the images in the `images/` directory.

---

*Disclaimer: This is a clone created for educational purposes and is not affiliated with the official MOSDAC website.*