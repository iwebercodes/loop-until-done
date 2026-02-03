# Footer Section

The footer contains legal links and author attribution.

**Reference:** See `specs/references/author.md` for author details and social links.

## Required Elements

### Legal Link
- Link to Impressum page (required for German law)
- No icon needed for this link

### Author Credit
- Text: "Built by Ilja Weber" or similar
- LinkedIn link with inline SVG icon
- Twitter/X link with inline SVG icon

### What NOT to Include
- Do NOT duplicate GitHub link here (it's already in header/hero)
- Avoid redundant links

## Success Criteria

- [ ] Footer exists
- [ ] Contains link to impressum.html
- [ ] Contains "Built by" or author credit
- [ ] Contains LinkedIn link: https://www.linkedin.com/in/ilja-weber-bb7135b5/
- [ ] LinkedIn link has inline SVG icon
- [ ] Contains Twitter/X link: https://x.com/iwebercodes
- [ ] Twitter/X link has inline SVG icon
- [ ] Does NOT duplicate GitHub link (if already prominent elsewhere)
- [ ] Footer is visually distinct from main content

## Verification

```bash
# Check footer content
grep -A20 '<footer' index.html

# Check for required links
grep -E "(impressum|linkedin|x\.com)" index.html

# Check for SVG icons in footer
grep -A2 'footer' index.html | grep '<svg'
```
