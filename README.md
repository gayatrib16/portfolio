# Aditya Badgujar – Portfolio

A responsive React portfolio for Mechanical Engineering projects.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Project Structure

```
src/
├── App.jsx                  # Root with page routing logic
├── main.jsx                 # React entry point
├── index.css                # Full design system & styles
├── data/
│   └── projects.js          # All 13 project definitions ← EDIT THIS
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProjectsGrid.jsx
│   ├── ProjectCard.jsx
│   └── Footer.jsx
├── pages/
│   └── ProjectDetail.jsx    # Project detail view
└── assets/                  # Put your images here
    ├── profile.jpg
    ├── project1-cover.jpg
    ├── project1-img1.jpg
    └── ...
```

## Adding Your Content

### 1. Profile Photo
In `src/components/Hero.jsx`, replace the `<div className="photo-placeholder">` block with:
```jsx
import profilePhoto from '../assets/profile.jpg'
// ...
<img src={profilePhoto} alt="Aditya Badgujar" />
```

### 2. Project Images
In `src/data/projects.js`, for each project import and add images:
```js
// At top of file:
import p1Cover from '../assets/project1-cover.jpg'
import p1Img1 from '../assets/project1-img1.jpg'

// In the project object:
{
  id: 1,
  image: p1Cover,          // Card thumbnail
  images: [p1Img1, ...],   // Gallery in detail view
  ...
}
```

### 3. Update Text Content
Edit the `projects` array in `src/data/projects.js`:
- `title` – Project name
- `shortDesc` – One-line description (shows on hover)
- `description` – Full multi-paragraph description (use `\n\n` between paragraphs)
- `year` – Project year
- `tags` – Array of tech/category tags
- `skills` – Tools & skills list shown in sidebar
- `coverColor` – CSS hex color for detail page hero background

### 4. Update Contact Links
In `Navbar.jsx` and `Footer.jsx`, update:
- LinkedIn URL
- Email address

### 5. Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder — ready to deploy on Vercel, Netlify, or GitHub Pages.

## Design System Colors
- Sand: `#F5F0E8`
- Gold accent: `#C9A84C` / `#8B6914`
- Dark brown: `#2E1F14`
- Body font: DM Sans
- Display font: Playfair Display

