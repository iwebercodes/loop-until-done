# Impressum (German Legal Page)

German law requires an Impressum (legal notice) page for websites.

**Reference:** See `specs/references/author.md` for author details.

## Required Content

The impressum.html must contain:

1. **Author Information**
   - Name: Ilja Weber

2. **Contact Information**
   - LinkedIn: https://www.linkedin.com/in/ilja-weber-bb7135b5/
   - Twitter/X: https://x.com/iwebercodes

3. **Legal Sections**
   - "Angaben gemäß § 5 TMG" header
   - "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV" section
   - Liability disclaimer (Haftungsausschluss)
   - Copyright notice (Urheberrecht)
   - Privacy statement (Datenschutz)

## Success Criteria

- [ ] impressum.html exists
- [ ] Contains "Ilja Weber" as the responsible party
- [ ] Contains contact links (LinkedIn, X)
- [ ] Contains § 5 TMG reference
- [ ] Contains liability disclaimer section
- [ ] Contains copyright section
- [ ] Contains privacy/data protection statement
- [ ] Links back to index.html
- [ ] Uses German language for legal content

## Verification

```bash
# Check for required content
grep -E "(Ilja Weber|§ 5 TMG|Haftungsausschluss|Urheberrecht|Datenschutz)" impressum.html
```
