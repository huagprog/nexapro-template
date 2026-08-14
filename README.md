# NexaPro - Modern Enterprise Business Template

A premium, fully responsive HTML5 template designed for corporate, agency, and business websites. Built with pure HTML5, CSS3, and vanilla JavaScript — no heavy frameworks required.

**Live Demo: [http://nexapro-template.surge.sh](http://nexapro-template.surge.sh)**

![License](https://img.shields.io/badge/license-Commercial-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Responsive](https://img.shields.io/badge/responsive-yes-brightgreen)

---

## Features

- **4 Complete Pages**: Home, About, Services, Contact
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern Design**: Clean, professional UI with smooth animations
- **CSS Variables**: Change entire color scheme in seconds
- **Dark Mode**: Built-in dark mode support with localStorage persistence
- **Scroll Animations**: Elements fade in as you scroll (Intersection Observer)
- **Counter Animation**: Animated number counters for stats
- **Testimonial Slider**: Auto-rotating client testimonials
- **Contact Form**: With client-side validation
- **SEO Optimized**: Semantic HTML, meta tags, clean structure
- **Fast Loading**: No heavy frameworks, pure HTML/CSS/JS
- **Cross-Browser**: Works on Chrome, Firefox, Safari, Edge, Opera
- **Well Commented**: Clean, documented code for easy customization

## File Structure

```
enterprise-template/
├── index.html              # Homepage
├── about.html              # About Us page
├── services.html           # Services & Pricing page
├── contact.html            # Contact page with form & FAQ
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (with CSS variables)
│   └── js/
│       └── main.js         # All JavaScript interactions
├── LICENSE                 # License terms
└── README.md               # This file
```

## Quick Start

1. Download or clone this repository
2. Open `index.html` in your browser to preview the template
3. Edit the HTML files to replace placeholder content with your own
4. Customize colors in `assets/css/style.css` (see below)
5. Upload all files to your web hosting

## Customization Guide

### Change Brand Colors

Open `assets/css/style.css` and modify the CSS variables at the top:

```css
:root {
  --color-primary: #6366F1;        /* Main brand color */
  --color-primary-dark: #4F46E5;   /* Darker shade for hover */
  --color-primary-light: #818CF8;  /* Lighter shade */
  --color-secondary: #0EA5E9;       /* Secondary color */
  --color-accent: #F59E0B;         /* Accent color */
}
```

### Change Fonts

Modify the font variables and update the Google Fonts link in each HTML file:

```css
:root {
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

Update in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Change Logo

Replace the navbar brand text and icon:

```html
<a href="index.html" class="navbar-brand">
  <div class="logo-icon"><i class="bi bi-bounding-box-circles"></i></div>
  Your<span>Brand</span>
</a>
```

### Replace Placeholder Images

The template uses gradient backgrounds with Bootstrap Icons as placeholders.
To use real images, replace placeholder divs with `<img>` tags:

```html
<!-- Before (placeholder) -->
<div class="about-image">
  <i class="bi bi-building placeholder-icon"></i>
</div>

<!-- After (with image) -->
<div class="about-image" style="background: url('your-image.jpg') center/cover;">
</div>
```

### Add Google Maps

In `contact.html`, replace the map placeholder with your Google Maps embed:

```html
<iframe 
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  width="100%" height="400" style="border:0; border-radius: 24px;"
  loading="lazy">
</iframe>
```

### Connect Contact Form

The contact form uses client-side validation. To connect to a backend:

1. Edit the form submit handler in `assets/js/main.js`
2. Replace the simulated success message with your API call:

```javascript
contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const response = await fetch('your-api-endpoint', {
    method: 'POST',
    body: new FormData(this)
  });
});
```

### Enable Dark Mode Toggle

Add a toggle button in the navbar:

```html
<button class="theme-toggle btn btn-outline">
  <i class="bi bi-moon"></i>
</button>
```

The dark mode logic is already in `main.js`.

## Dependencies (CDN)

| Dependency | Type | URL |
|---|---|---|
| Google Fonts | Fonts | fonts.googleapis.com |
| Bootstrap Icons | Icons | cdn.jsdelivr.net/npm/bootstrap-icons |

No other dependencies required - pure HTML/CSS/JS.

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Opera (latest 2 versions)

## Performance Tips

1. Minify CSS and JS files for production
2. Optimize and compress images
3. Enable GZIP compression on your server
4. Use a CDN for static assets
5. Add `loading="lazy"` to images

## License

This template is licensed for commercial use. You may use it for personal and commercial projects. You may NOT resell or redistribute the template files as-is. See [LICENSE](LICENSE) for details.

## How to Buy

**Price: $15** (one-time payment, lifetime use)

### Instant Purchase via PayPal

Click the link below to pay $15 via PayPal:

**[Click here to pay $15](https://paypal.me/huagprog/15)**

After payment, email me at **1362490308@qq.com** with your PayPal transaction ID, and I'll send you the complete template files within 24 hours.

### Alternative: Email Order

1. Email me at: **1362490308@qq.com**
2. Subject: `NexaPro Template Purchase`
3. I'll send you the payment details
4. After payment, you'll receive the complete template files

## Support

- **Live Demo**: [http://nexapro-template.surge.sh](http://nexapro-template.surge.sh)
- **Buy**: [PayPal $15](https://paypal.me/huagprog/15) or email 1362490308@qq.com
- **Questions**: Open an issue on this repository

---

**Version**: 1.0.0  
**Last Updated**: 2026  
**Author**: NexaPro
