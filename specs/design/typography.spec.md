# Typography

The site uses Inter font for body text and system monospace for code.

## Font Requirements

### Inter (Self-Hosted)
- Source: Downloaded from Google Fonts
- Format: woff2 (modern, compressed)
- Weights needed:
  - Regular (400) - body text
  - Medium (500) - emphasis
  - Bold (700) - headings

### Monospace (System Stack)
For code blocks and terminal output, use system monospace:
```css
font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
```

## Typography Guidelines

- Headings: Bold weight, larger sizes
- Body: Regular weight, good line height (1.5-1.6)
- Code: Monospace, slightly smaller size

## Success Criteria

- [ ] fonts/ contains Inter-Regular.woff2
- [ ] fonts/ contains Inter-Medium.woff2
- [ ] fonts/ contains Inter-Bold.woff2
- [ ] CSS defines @font-face for Inter fonts
- [ ] CSS uses Inter as primary font-family
- [ ] CSS defines monospace font stack for code elements
- [ ] Line height is readable (1.5 or higher for body)
- [ ] Headings use bold weight
- [ ] Code blocks use monospace font

## Verification

```bash
# Check font files exist
ls -la fonts/*.woff2

# Check @font-face declarations
grep -A5 '@font-face' css/style.css

# Check font-family usage
grep 'font-family' css/style.css
```
