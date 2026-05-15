# Gemini CLI - Project Instructions

## Tech Stack
- **Framework:** React (16.13.1)
- **UI Frameworks:** Bootstrap 4 (`react-bootstrap`), Material-UI (@material-ui/core)
- **Animation:** AOS (Animate on Scroll), React Particles, React Typed
- **Deployment:** GitHub Pages (`gh-pages`)

## Project Structure
- `src/components/`: React components for different sections of the portfolio.
- `src/data/`: JSON files containing the content (Education, Experience, Projects, Skills, Story).
- `public/assets/`: Static assets such as logos and profile images.
- `src/style/`: Contains utility scripts for styling/logic (e.g., `type.js`).

## Architecture & Conventions

### Data-Driven UI
The portfolio's content is abstracted into JSON files within `src/data/`. When updating content (e.g., adding a new project or skill), modify the corresponding JSON file rather than the component logic.

### Component Style
The project uses a mix of React Class components (e.g., `App.jsx`) and Functional components. Follow the existing style of the file you are modifying.

### Styling
- **Global Styles:** Managed in `src/App.css` and `src/index.css`.
- **Bootstrap:** Extensively used for layout and responsive design.
- **Material-UI:** Used for specific UI elements (check individual components for usage).

### Assets
- Store new images in `public/assets/` under appropriate subdirectories (`experience_logos/`, `skills_logos/`, `images/`).
- Reference assets using absolute paths (e.g., `/assets/images/my_image.jpg`).

### Node.js Compatibility
This project uses older versions of `react-scripts` and Webpack. If you are using Node.js 17 or later, you must use the `--openssl-legacy-provider` flag. This has been pre-configured in the `start` and `build` scripts in `package.json`.

## Common Workflows

### Updating Content
1. Navigate to `src/data/`.
2. Edit the relevant `.json` file.
3. Verify the changes by running `npm start`.

### Adding a New Skill
1. Add the logo image to `public/assets/skills_logos/`.
2. Update `src/data/myskills.json` by adding a new entry to the appropriate domain.

### Deployment
The project is configured for deployment to GitHub Pages.
- Run `npm run deploy` to build and push to the `gh-pages` branch.

## Approved Redesign Plan: "Awesome Portfolio" (Glassmorphism & Motion)
This plan was approved on May 14, 2026, to modernize the portfolio's aesthetic and interactivity.

### Objective
Transform the portfolio into a modern, high-impact web experience using "Glassmorphism" and smooth animations.

### Key Architectural Shifts
- **Theme:** Deep Slate (`#0f172a`) with translucent "Glass" surfaces (`backdrop-filter: blur()`).
- **Animation Library:** `framer-motion` for all scroll and hover interactions.
- **Typography:** Modern fonts (Inter/Montserrat).

### Implementation Roadmap
1. **Foundations:** Install `framer-motion`, define CSS variables for the new palette, and update fonts in `index.html`.
2. **Global Components:** Refactor `Navigation` into a floating glass navbar and update `Particles.jsx` for subtlety.
3. **Feature Sections:** 
   - `Introduction`: Center-aligned with staggered text animations.
   - `Skills`: Icon grid with hover tooltips.
   - `Experience/Education/Projects`: Transition from Bootstrap cards to custom Glassmorphic cards with `framer-motion` hover states.
4. **Polish:** Apply global scroll-reveal animations to all major sections.
