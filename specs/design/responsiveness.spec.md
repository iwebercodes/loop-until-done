# Responsive Design

The site must be mobile-friendly and work on all screen sizes.

## Breakpoints

Standard breakpoints:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: <= 480px

## Requirements

- Viewport meta tag in HTML head
- CSS media queries for responsive adjustments
- Flexbox/Grid for layout (no frameworks)
- No horizontal scrolling on mobile
- Touch-friendly tap targets (min 44px)
- Readable text without zooming

## Success Criteria

- [ ] HTML includes viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] CSS contains media query for 768px breakpoint
- [ ] CSS contains media query for 480px breakpoint
- [ ] Layout uses flexbox or grid (not floats)
- [ ] Page looks good on mobile (320px width)
- [ ] Page looks good on tablet (768px width)
- [ ] Page looks good on desktop (1200px+ width)
- [ ] No horizontal overflow on any screen size

## Verification

```bash
# Check viewport meta tag
grep 'viewport' index.html

# Check media queries
grep -E '@media.*768|@media.*480' css/style.css

# Check for flexbox/grid usage
grep -E '(display:\s*(flex|grid)|flex-|grid-)' css/style.css
```

## Visual Testing

Use Playwright MCP to verify responsiveness:

1. Start local server: `npx serve -p 8000 &`
2. Use Playwright to navigate to `http://localhost:8000`
3. Take screenshots at each viewport width (you can use ./scripts/responsive-check.js for it):
   - 320px (small mobile)
   - 768px (tablet)
   - 1440px (large desktop)
4. Verify no horizontal overflow by checking `document.documentElement.scrollWidth <= document.documentElement.clientWidth`
5. Visually inspect screenshots to confirm layout adapts properly 
6. Kill server: `pkill -f "serve -p 8000"`

If you have no access to playwright MCP, then just inspect the screenshots. If you can not inspect the screenshots, then just write ROTATE to status.
