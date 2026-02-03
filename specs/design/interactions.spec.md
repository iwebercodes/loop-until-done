# Interactions and Animations

The site should have smooth, subtle interactions.

## Smooth Scroll

Anchor links should scroll smoothly to their targets:
```css
html {
  scroll-behavior: smooth;
}
```

## Hover Effects

Interactive elements should have subtle hover effects:
- Links change color or opacity
- Buttons have background/border changes
- Transitions are smooth (200-300ms typical)

## Copy-to-Clipboard (Optional)

The installation command can have a copy button:
- JavaScript is optional for this feature
- Basic functionality works without JS
- If implemented, should provide visual feedback

## Success Criteria

- [ ] Smooth scroll is enabled for anchor links
- [ ] Links have hover states
- [ ] Buttons have hover states
- [ ] Transitions use CSS (not jarring instant changes)
- [ ] No JavaScript required for basic navigation
- [ ] Optional: copy-to-clipboard for code blocks

## Verification

```bash
# Check for smooth scroll
grep 'scroll-behavior' css/style.css

# Check for hover states
grep ':hover' css/style.css

# Check for transitions
grep 'transition' css/style.css
```
