# Site Structure

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

Complete technical structure specification covering file organization, HTML sections, and legal requirements.

**Reference:** See `specs/references/author.md` for author details.

## File Structure

The landing page must follow this exact file structure:

```
loop-until-done/
├── index.html              # Main landing page
├── impressum.html          # German legal page
├── css/
│   └── style.css           # Main stylesheet (inline CSS is also allowed)
├── fonts/
│   ├── Inter-Regular.woff2
│   ├── Inter-Medium.woff2
│   └── Inter-Bold.woff2
├── robots.txt              # SEO file
├── sitemap.xml             # SEO file
└── CNAME                   # GitHub Pages domain
```

## HTML Section Structure

index.html must contain exactly these sections in this order:

1. **Header/Navigation** - Logo and navigation elements
2. **Hero** - Main headline and primary CTA
3. **Pain Point** - Problems with current AI agents  
4. **Solution** - How Ralph solves these problems
5. **How It Works** - 3-step process explanation
6. **Verification** - The 3x verification system
7. **Get Started** - Installation and quick start
8. **Footer** - Links and author credit

### Semantic HTML Requirements
- Use semantic HTML5 elements (section, header, footer, main, nav)
- Include appropriate section IDs for navigation and analytics
- Maintain logical heading hierarchy (h1, h2, h3, etc.)

## Impressum (German Legal Page)

German law requires an Impressum (legal notice) page for websites.

### Required Content

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
   - Privacy statement (Datenschutz) - must mention Umami analytics compliance

## Success Criteria

### File Structure
- [ ] index.html exists at root
- [ ] impressum.html exists at root
- [ ] css/style.css exists and contains all styles
- [ ] fonts/ directory contains Inter-Regular.woff2
- [ ] fonts/ directory contains Inter-Medium.woff2
- [ ] fonts/ directory contains Inter-Bold.woff2
- [ ] robots.txt exists at root
- [ ] sitemap.xml exists at root
- [ ] CNAME exists at root (if using custom domain)
- [ ] Inline CSS is allowed in HTML files

### HTML Sections
- [ ] Header section exists with navigation
- [ ] Hero section exists with headline and CTA
- [ ] Pain Point section exists (id="problem" or similar)
- [ ] Solution section exists (id="solution" or similar)
- [ ] How It Works section exists (id="how-it-works" or similar)
- [ ] Verification section exists (id="verification" or similar)
- [ ] Get Started section exists (id="get-started" or similar)
- [ ] Footer exists with required links
- [ ] Sections appear in the correct order
- [ ] Uses semantic HTML5 elements (section, header, footer, main, nav)
- [ ] Section IDs are consistent and analytics-friendly

### Impressum Page
- [ ] impressum.html exists and is accessible
- [ ] Contains "Ilja Weber" as the responsible party
- [ ] Contains contact links (LinkedIn, X)
- [ ] Contains § 5 TMG reference
- [ ] Contains liability disclaimer section
- [ ] Contains copyright section
- [ ] Contains privacy/data protection statement mentioning Umami
- [ ] Links back to index.html
- [ ] Uses German language for legal content
- [ ] Follows same visual design as main site (just check the CSS classes/styles; pay attention to layout, margins and paddings)

### General
- [ ] You MUST NOT write any automated tests to verify the success criteria. Just read the files directly.

## Verification

Read the following files directly to verify all success criteria are met:
- `index.html` - Check section structure and semantic HTML
- `impressum.html` - Verify legal content and German compliance
- File system listing to confirm all required files exist

The files are small enough to review directly rather than using complex verification commands. Any scripts you create to verify the success criteria must be removed.
