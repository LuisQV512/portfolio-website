# luisquirozviveros.com

Personal site. React + Vite, plain CSS, deployed on Vercel.

```
npm install
npm run dev     # local server
npm run build   # production build in dist/
npm run lint
```

## Structure

```
src/content.js   all copy: profile, links, experience, skills, education
src/App.jsx      the page
src/index.css    all styles (light and dark follow the system)
public/          resume PDF, avatar, favicon, social image, robots, sitemap
index.html       metadata and JSON-LD
```

To change what the site says, edit `src/content.js`.
