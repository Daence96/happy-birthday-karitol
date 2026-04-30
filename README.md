# Happy Birthday Karitol

Birthday slideshow made with love for Karitol.

## Project structure

- `index.html`: page content and slide structure.
- `assets/css/styles.css`: all visual styles and responsive behavior.
- `assets/js/main.js`: slideshow navigation logic (dots, scroll, keyboard).
- `assets/images/`: your photos (`foto1.jpg`, `foto2.jpg`, `foto3a.jpg`...`foto5.jpg`).

## Run locally

You can open `index.html` directly, but for best results run a local static server:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Share it with your girlfriend (phone + PC)

The best way is hosting it and sending her the public link.

### Option 1: GitHub Pages

1. Create a GitHub repository and upload this project.
2. Go to repository `Settings` -> `Pages`.
3. In **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` and folder `/ (root)`
4. Save and wait 1-2 minutes.
5. Share the generated link, usually:
   - `https://your-user.github.io/your-repo/`

### Option 2: Netlify Drop (fastest)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the project folder.
3. Netlify gives you a public URL instantly.
4. Send that URL to your girlfriend.

## Personalize before sharing

- Replace photos inside `assets/images/` using the same file names.
- Edit birthday texts in `index.html`.
- Change song link in the last slide.
