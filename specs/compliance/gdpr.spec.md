# GDPR Compliance

The site must be fully GDPR-compliant with NO external requests.

## Requirements

### No External Resources
- NO CDN links (no cdnjs, unpkg, jsdelivr, etc.)
- NO Google Fonts (fonts must be self-hosted)
- NO external CSS frameworks
- NO external JavaScript libraries loaded from CDN
- NO external images or icons
- NO analytics (Google Analytics, Plausible, etc.)
- NO tracking pixels

### No Cookies
- NO cookies of any kind
- NO localStorage for tracking purposes
- NO session tracking

### Self-Hosted Assets
All assets must be served from the same domain:
- Fonts in fonts/ directory
- CSS in css/ directory
- Images inline (SVG) or in local directory
- Icons as inline SVG

### Privacy Statement
The site should state clearly that:
- No cookies are used
- No personal data is collected
- No external resources are loaded

## Success Criteria

- [ ] No `<link>` tags pointing to external domains
- [ ] No `<script src="">` pointing to external domains
- [ ] No `url()` in CSS pointing to external domains
- [ ] Fonts are self-hosted (fonts/*.woff2)
- [ ] Icons are inline SVG (not external icon fonts)
- [ ] No analytics scripts
- [ ] No cookie consent banner needed (because no cookies)
- [ ] Privacy statement in Impressum confirms no tracking
- [ ] Network tab shows ZERO external requests

## Verification

```bash
# Check for external URLs in HTML
grep -E '(href|src)="https?://' index.html impressum.html | grep -v 'github.com\|linkedin.com\|x.com'

# Check for external URLs in CSS
grep -E 'url\(.*https?://' css/style.css

# Check that fonts are local
grep '@font-face' css/style.css
```

## Manual Testing

1. Open browser dev tools
2. Go to Network tab
3. Load the page
4. Verify ALL requests are to localhost (no external domains)
