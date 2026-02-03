# Lighthouse Performance

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

## Verification

```bash
# Start local server
npx serve -p 8000 &

# Wait for server to start
sleep 2

# Run Lighthouse
lighthouse http://localhost:8000 --output=json --output-path=./lighthouse-report.json --chrome-flags="--headless"

# Check scores
cat lighthouse-report.json | jq '.categories | to_entries[] | "\(.key): \(.value.score * 100)"'

# Kill server
pkill -f "serve -p 8000"

# Clean up report file
rm -f lighthouse-report.json
```

## Fixing Common Issues

If scores are below 99, check:
1. All images have alt attributes
2. Color contrast meets WCAG AA (4.5:1 for normal text)
3. HTML lang attribute is set
4. Meta description exists
5. All interactive elements are keyboard accessible
