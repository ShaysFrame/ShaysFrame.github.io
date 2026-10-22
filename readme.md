# R. M. MAHAFUJ — Portfolio

The public, static portfolio for R. M. MAHAFUJ.

Live site: https://shaysframe.github.io/

## Local preview

No installation or build step is required. From this repository, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000. Stop the server with Ctrl+C.

Edit `index.html` for content, `styles.css` for layout, and `favicon.svg` for the icon. This public site intentionally contains no application drafts, application checklist, private source documents, or submission tools.

The previous Flutter portfolio remains in Git history. `flutter_service_worker.js` is a small retirement worker: it removes only the old Flutter cache names, unregisters itself, and refreshes controlled portfolio tabs. It does not install a new offline cache.

The repository root is the static publication directory. `.nojekyll` preserves direct static serving. No custom domain or DNS change is made by these files.
