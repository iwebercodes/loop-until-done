# Color Palette

The site uses a dark mode aesthetic inspired by GitHub dark mode, Vercel, and Linear.

**Reference:** See `specs/references/colors.md` for exact color values.

## Required Colors

All colors must be defined as CSS variables in `:root`:

| Purpose | Variable | Value |
|---------|----------|-------|
| Background | --bg-primary | #0D1117 |
| Surface/cards | --bg-surface | #161B22 |
| Primary accent (cyan) | --accent-cyan | #06B6D4 |
| Success/CTA (green) | --accent-green | #22C55E |
| Highlight (yellow) | --accent-yellow | #EAB308 |
| Special (magenta) | --accent-magenta | #D946EF |
| Text primary | --text-primary | #E6EDF3 |
| Text secondary | --text-secondary | #8B949E |
| Border | --border | #30363D |

## Success Criteria

- [ ] CSS uses :root variables for colors
- [ ] Background color is #0D1117 (or close variant)
- [ ] Surface/card color is #161B22 (or close variant)
- [ ] Cyan accent is #06B6D4 (or close variant)
- [ ] Green accent is #22C55E (or close variant)
- [ ] Yellow accent is #EAB308 (or close variant)
- [ ] Magenta accent is #D946EF (or close variant)
- [ ] Primary text is light (#E6EDF3 or similar)
- [ ] Secondary text is muted (#8B949E or similar)
- [ ] Borders use #30363D (or close variant)
- [ ] Dark mode aesthetic is consistent throughout

## Verification

```bash
# Check for CSS variables
grep -E '(--bg-|--accent-|--text-|--border)' css/style.css

# Check for color values
grep -E '#(0D1117|161B22|06B6D4|22C55E|EAB308|D946EF|E6EDF3|8B949E|30363D)' css/style.css
```
