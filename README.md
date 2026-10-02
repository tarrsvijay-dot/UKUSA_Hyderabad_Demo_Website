# UKUSA — Client Demo Website

A responsive static HTML/CSS/JavaScript demo for UKUSA, Jubilee Hills, Hyderabad.

## Files
- `index.html` — complete page
- `styles.css` — responsive styling and animations
- `script.js` — direct section navigation + reveal animations
- `favicon.svg` — simple demo mark

## Navigation fix
All internal navigation is handled by a single click handler:
- `href="#experience"` targets `id="experience"`
- the header offset is calculated dynamically
- no delayed navigation, page reload, timeout, GSAP/Lenis/Locomotive scroll, or duplicate handlers
- reveal animations only change opacity/transform and never change scroll position
- mobile navigation closes after a section is selected

## Client handoff
The supplied Instagram profile could not be directly fetched by the web tool, so this demo uses a visual direction based on publicly indexed descriptions of UKUSA and high-quality café imagery from Unsplash as placeholders. Replace the image URLs with the client's approved Instagram/Google/owned assets before production.

Publicly indexed business details used for the demo:
- UKUSA, Jubilee Hills, Hyderabad
- Plot 130, Road No. 10, Jubilee Hills
- Phone: +91 90524 62424
- Public listings describe café/coffee, Asian/Continental/South Indian options, indoor/outdoor seating, Wi-Fi and reservations.

The reservation WhatsApp button currently opens a pre-filled message. Replace with the client's actual reservation URL if provided.
