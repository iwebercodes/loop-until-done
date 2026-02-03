# GitHub Pages Compatibility

The site must work as static files served by GitHub Pages.

## Requirements

- All files must be static (HTML, CSS, fonts)
- No server-side processing required
- No build step required
- JavaScript is optional (only for copy-to-clipboard enhancement)
- Basic functionality must work without JavaScript

## File Serving

GitHub Pages serves files directly:
- index.html at root
- Relative paths for CSS and fonts
- No .htaccess or server config needed

## Success Criteria

- [ ] Site works when served as static files
- [ ] No server-side dependencies
- [ ] No build/compile step required
- [ ] Basic functionality works without JavaScript
- [ ] All relative paths are correct for static hosting

## Verification

```bash
# Test with simple static server
npx serve -p 8000

# Or Python
python3 -m http.server 8000

# Site should work identically with either
```
