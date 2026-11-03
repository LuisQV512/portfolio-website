# Agent notes

One page, one data file. Keep it that way.

- Copy lives only in `src/content.js`. Don't hardcode text in `App.jsx`.
- Styles live only in `src/index.css`. No CSS framework, no animation or icon libraries.
- Dependencies are `react` and `react-dom`. Adding one needs a clear reason.
- Content must match `public/Luis_QuirozViveros_Resume.pdf`. No metrics or claims that aren't on the resume.
- When content changes, update the JSON-LD and meta description in `index.html` if they're affected.
- No taglines, helper text, or decorative labels. If something needs a label to make sense, change the layout.
- Check light and dark mode, and a narrow (375px) viewport, before shipping.
- Run `npm run lint` and `npm run build` before pushing.
