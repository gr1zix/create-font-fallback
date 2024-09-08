## Fallback font creation based on System fonts for external to avoid CLS

1. Go to `main.js` and import your fonts from `import yourFont from '@capsizecss/metrics/your-font'`
2. Add each imported font to `createFontStack` array
3. Run `npm run dev` and check you browser console to receive generated fontFaces for each your font

#### Sources:
- https://www.aleksandrhovhannisyan.com/blog/perfect-font-fallbacks/
- https://github.com/seek-oss/capsize
- https://seek-oss.github.io/capsize/