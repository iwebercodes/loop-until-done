# File Structure

The landing page must follow this exact file structure:

```
loop-until-done/
├── index.html              # Main landing page
├── impressum.html          # German legal page
├── css/
│   └── style.css           # All styles (no inline styles in HTML)
└── fonts/
    ├── Inter-Regular.woff2
    ├── Inter-Medium.woff2
    └── Inter-Bold.woff2
```

## Success Criteria

- [ ] index.html exists at root
- [ ] impressum.html exists at root
- [ ] css/style.css exists and contains all styles
- [ ] fonts/ directory contains Inter-Regular.woff2
- [ ] fonts/ directory contains Inter-Medium.woff2
- [ ] fonts/ directory contains Inter-Bold.woff2
- [ ] No inline styles in HTML files (all styles in style.css)
- [ ] Total page size < 500KB including fonts

## Verification

```bash
# Check all required files exist
ls -la index.html impressum.html css/style.css fonts/*.woff2

# Check for inline styles (should return nothing)
grep -E 'style="' index.html impressum.html

# Check total size
du -sh .
```
