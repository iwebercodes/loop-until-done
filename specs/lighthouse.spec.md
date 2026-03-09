# Lighthouse Performance

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

All Lighthouse scores must be 99% or higher.

## Required Scores

| Category | Minimum Score |
|----------|---------------|
| Performance | 99 |
| Accessibility | 99 |
| Best Practices | 99 |
| SEO | 99 |

## Common Issues to Avoid

### Performance
- Large images (use optimized formats)
- Render-blocking resources
- Unused CSS
- Large font files

#### Speed Index Optimization

Speed Index measures how quickly visible content fills the viewport. A blank screen followed by sudden content appearance results in a poor Speed Index, even with good FCP/LCP scores.

**Problem:** External CSS is render-blocking. The browser shows a blank page until CSS downloads and parses. On GitHub Pages, this network roundtrip delays first paint.

**Solution:** Inline the entire stylesheet directly in `<head>`. For small sites (CSS under ~15KB), this is simpler than critical CSS extraction.

**Steps:**
1. Copy the entire contents of `css/style.css`
2. Paste into a `<style>` tag in `<head>` (after `<meta>` tags, before `</head>`)
3. Remove the `<link rel="stylesheet" href="css/style.css">` line
4. The external `css/style.css` file can remain for maintainability (edits go there, then copy to HTML)

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- ... other meta tags ... -->
  <style>
    /* Contents of css/style.css go here */
  </style>
</head>
```

This eliminates the render-blocking request and allows immediate painting.

**Additional optimizations:**
- Preload fonts with `<link rel="preload" as="font" crossorigin>`
- Ensure `font-display: swap` on all @font-face rules

### Accessibility
- Missing alt text on images
- Insufficient color contrast
- Missing form labels
- Missing ARIA attributes where needed
- Missing lang attribute on html

### Best Practices
- Using HTTP instead of HTTPS links
- Missing meta tags
- Console errors

### SEO
- Missing meta description
- Missing title tag
- Missing viewport meta
- Non-crawlable links

## Success Criteria

- [ ] Performance score >= 99
- [ ] Accessibility score >= 99
- [ ] Best Practices score >= 99
- [ ] SEO score >= 99
- [ ] No critical issues reported
- [ ] Generated reports are removed after evaluation so the project is not polluted

## Implementation/Verification

### Starting the Test Environment

This project includes a Docker setup for local testing. Before running Lighthouse audits:

1. **Start the webserver:**
   ```bash
   docker compose up -d
   ```

2. **Verify the server is running:**
   ```bash
   curl -I http://localhost:8888
   ```
   Should return HTTP 200.

3. **Run Lighthouse audit:**
   ```bash
   lighthouse http://localhost:8888 --output=json --output=html --output-path=./lighthouse-report
   ```

4. **Test both pages:**
   ```bash
   # Homepage
   lighthouse http://localhost:8888 --output=json --output-path=./lighthouse-homepage.json
   
   # Impressum page
   lighthouse http://localhost:8888/impressum.html --output=json --output-path=./lighthouse-impressum.json
   ```

5. **Clean up after testing:**
   ```bash
   # Remove generated reports (don't commit these)
   rm -f lighthouse-*.json lighthouse-*.html
   
   # Stop the webserver
   docker compose down
   ```

### Site Access
- **Homepage:** http://localhost:8888
- **Impressum:** http://localhost:8888/impressum.html
- **Docker container:** Uses nginx:alpine serving static files
- **Port mapping:** Host port 8888 → Container port 80

### Verification Steps
1. Start Docker webserver on port 8888
2. Run Lighthouse audits against localhost:8888
3. Check all scores are >= 99
4. Review any failing audits and fix issues
5. Clean up generated reports
6. Stop webserver

## Fixing Common Issues

If scores are below 99, check:
1. All images have alt attributes
2. Color contrast meets WCAG AA (4.5:1 for normal text)
3. HTML lang attribute is set
4. Meta description exists
5. All interactive elements are keyboard accessible
