# Terminal Aesthetic

The site should have developer/terminal vibes - think Vercel, Linear, GitHub dark mode.

## Visual Requirements

### Dark Mode
- Dark background throughout
- Light text on dark backgrounds
- Subtle contrast between sections

### Code Blocks
Code blocks should look like terminal output:
- Dark background (darker than page background)
- Monospace font
- Slightly rounded corners
- Subtle border or shadow
- Syntax-appropriate styling

### Interactive Elements
- Subtle hover effects on buttons/links
- Smooth transitions (not jarring)
- Clear visual feedback on interaction

### General
- Minimal and functional design
- No unnecessary decoration
- Professional developer aesthetic

## Success Criteria

- [ ] Page has dark background
- [ ] Code blocks have terminal styling (dark bg, monospace)
- [ ] Code blocks are visually distinct from body text
- [ ] Buttons/links have hover effects
- [ ] Transitions are smooth (use CSS transitions)
- [ ] Overall aesthetic is minimal and professional
- [ ] No bright/jarring colors that break the dark theme

## Verification

```bash
# Check for code block styling
grep -E '(pre|code|\.code)' css/style.css

# Check for transitions
grep 'transition' css/style.css

# Check for hover states
grep ':hover' css/style.css
```
