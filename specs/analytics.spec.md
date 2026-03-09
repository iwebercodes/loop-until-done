# Analytics with Umami

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

Privacy-friendly analytics using Umami to track page visits and user interactions while maintaining GDPR compliance.

## Requirements

### Umami Script
- Script must be loaded from `https://cloud.umami.is/script.js`
- Must include `defer` attribute for non-blocking load
- Website ID: `e08bd4d4-3b2c-4e54-bf90-29814bc548d2`
- Script placement: before closing `</body>` tag

```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="e08bd4d4-3b2c-4e54-bf90-29814bc548d2"></script>
```

### Page View Tracking
- Automatic page view tracking (enabled by default)
- Track visits to all pages (index.html, impressum.html)

### Interaction Tracking
- Copy button clicks in code blocks
- External link clicks (GitHub, LinkedIn, X/Twitter)
- CTA button interactions ("Get Started", "Try Ralph Loop")

### Implementation Pattern
For custom event tracking, use Umami's `umami.track()` function:

```javascript
// Track copy button clicks
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    umami.track('copy-code');
  });
});

// Track external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const url = new URL(e.target.href);
    umami.track('external-link', { domain: url.hostname });
  });
});
```

## Privacy Compliance

### GDPR Requirements
- Umami is GDPR-compliant (no cookies, no personal data collection)
- No consent banner required
- Data processing is legitimate interest for website optimization
- Visitor IP addresses are not stored
- No cross-site tracking

### Data Collected
- Page views and referrers
- Browser and device information (anonymized)
- Custom events (button clicks, link clicks)
- Geographic location (country level only)

## Success Criteria

- [ ] Umami script loads without blocking page render
- [ ] Page views are tracked automatically
- [ ] Copy button clicks are tracked as custom events
- [ ] External link clicks are tracked with domain information
- [ ] No cookies are created by the analytics script
- [ ] Analytics dashboard shows data within 24 hours
- [ ] Script loads only once per page
- [ ] No JavaScript errors in console related to analytics

## Implementation/Verification

### Starting the Test Environment

This project includes a Docker setup for local testing. Before verifying analytics:

1. **Start the webserver:**
   ```bash
   docker compose up -d
   ```

2. **Verify the server is running:**
   ```bash
   curl -I http://localhost:8888
   ```
   Should return HTTP 200.

### Code Verification (Automated)

3. **Check Umami script presence:**
   ```bash
   # Verify script tag exists with correct website ID
   curl -s http://localhost:8888 | grep -q 'data-website-id="e08bd4d4-3b2c-4e54-bf90-29814bc548d2"' && echo "✓ Umami script found" || echo "✗ Umami script missing"
   
   # Check defer attribute
   curl -s http://localhost:8888 | grep -q 'defer.*cloud\.umami\.is' && echo "✓ Defer attribute found" || echo "✗ Defer attribute missing"
   
   # Verify script placement (before closing body tag)
   curl -s http://localhost:8888 | tail -20 | grep -q 'cloud\.umami\.is' && echo "✓ Script in footer" || echo "✗ Script not in footer"
   ```

4. **Check event tracking code:**
   ```bash
   # Verify copy button tracking
   curl -s http://localhost:8888 | grep -q "umami\.track.*copy-code" && echo "✓ Copy tracking found" || echo "✗ Copy tracking missing"
   
   # Verify external link tracking  
   curl -s http://localhost:8888 | grep -q "umami\.track.*external-link" && echo "✓ External link tracking found" || echo "✗ External link tracking missing"
   
   # Verify CTA tracking
   curl -s http://localhost:8888 | grep -q "umami\.track.*cta-click" && echo "✓ CTA tracking found" || echo "✗ CTA tracking missing"
   ```

### Site Access
- **Homepage:** http://localhost:8888
- **Impressum:** http://localhost:8888/impressum.html
- **Docker container:** Uses nginx:alpine serving static files

### Verification Checklist

Run these checks for both pages (homepage and impressum):

```bash
# Automated verification script
for page in "" "/impressum.html"; do
  url="http://localhost:8888$page"
  echo "Testing $url"
  
  # Script presence
  curl -s "$url" | grep -q 'cloud\.umami\.is' && echo "  ✓ Umami script" || echo "  ✗ Missing script"
  
  # Website ID
  curl -s "$url" | grep -q 'e08bd4d4-3b2c-4e54-bf90-29814bc548d2' && echo "  ✓ Correct website ID" || echo "  ✗ Wrong/missing ID"
  
  # Defer attribute
  curl -s "$url" | grep -q 'defer.*umami' && echo "  ✓ Defer attribute" || echo "  ✗ No defer"
  
  echo ""
done
```

10. **Clean up and stop:**
    ```bash
    # Stop the webserver
    docker compose down
    ```

### Manual Verification (Legacy)
For manual file inspection without webserver:
1. Read `index.html` and `impressum.html` directly to verify:
   - Umami script is present with correct website ID
   - No cookie-related code exists
   - Event tracking JavaScript is implemented

## Event Naming Convention

| Event Name | Description | Properties |
|------------|-------------|------------|
| `copy-code` | Code block copy button clicked | None |
| `external-link` | External link clicked | `domain` |
| `cta-click` | Call-to-action button clicked | `button` (button text) |
