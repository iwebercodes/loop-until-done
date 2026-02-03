# External Links

All external links must be valid and have appropriate icons.

## Required External Links

| Link | URL | Icon Required |
|------|-----|---------------|
| GitHub | https://github.com/iwebercodes/ralph | GitHub octocat |
| LinkedIn | https://www.linkedin.com/in/ilja-weber-bb7135b5/ | LinkedIn "in" logo |
| Twitter/X | https://x.com/iwebercodes | X logo |

## Command Verification

Any mentioned command must be verified to work:
- `pipx install ralph-loop` - must be a valid installable package
- `ralph run` - referenced in how-it-works section

## Icon Requirements

All external platform links must have inline SVG icons:
- Icons must be inline SVG (not external files)
- Size: 16-20px
- Color: currentColor (inherits text color)
- Placed consistently (before or after link text)
- Include aria-hidden="true" for decorative icons

## Link Placement Guidelines

- Avoid duplicating the same link multiple times in close proximity
- GitHub link: Header nav and/or hero CTA (not both places AND footer)
- Social links: Footer author section
- Each link should appear with purpose, not redundantly

## Success Criteria

- [ ] GitHub link exists and returns 200 (or 301/302)
- [ ] LinkedIn link exists (may return 403/999 due to bot protection)
- [ ] Twitter/X link exists (may return 403 due to bot protection)
- [ ] All external links have inline SVG icons
- [ ] SVG icons use currentColor
- [ ] SVG icons have aria-hidden="true"
- [ ] No 404 errors on any link
- [ ] No unnecessary duplicate links
- [ ] `pipx install ralph-loop` command is valid (package exists on PyPI)
- [ ] NEVER rationalize away a 404 - broken links must be fixed

## Verification

```bash
# Extract and test all external URLs
grep -oE 'href="https://[^"]+' index.html impressum.html | cut -d'"' -f2 | sort -u | while read url; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$code $url"
done

# Check for SVG icons
grep -E '<svg.*viewBox' index.html

# Check aria-hidden on icons
grep -E 'aria-hidden="true"' index.html
```

## Link Status Codes

- 200 = OK
- 301/302 = Redirect (OK)
- 403/999 = Bot protection (verify manually in browser)
- 404 = BROKEN - must be fixed immediately
