# Footer Section

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

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

### General
- [ ] You MUST NOT write any automated tests to verify the success criteria. Just read the files directly.

## Verification

Read `index.html` and verify all success criteria are met. The file is small enough to review directly.

You must NOT create test scripts to verify the success criteria. Temprorary scripts are ok, but don't forget to delete them.
