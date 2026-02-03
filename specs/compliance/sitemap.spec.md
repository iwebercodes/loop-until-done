# Sitemap

A sitemap.xml file helps search engines discover and index all pages.

## Requirements

1. Discover all HTML pages in the project root
2. Generate or update sitemap.xml with all pages
3. Use proper XML sitemap format

## Site Details

- Domain: `https://loop-until-done.dev`
- Hosting: GitHub Pages
- URL format: Clean URLs without .html extension (e.g., `/impressum` not `/impressum.html`)

## Sitemap Format

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://loop-until-done.dev/</loc>
    <lastmod>2024-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://loop-until-done.dev/impressum</loc>
    <lastmod>2024-01-15</lastmod>
    <priority>0.5</priority>
  </url>
</urlset>
```

## Priority Guidelines

- index.html (homepage): 1.0
- Main content pages: 0.8
- Legal/secondary pages (impressum): 0.5

## Success Criteria

- [ ] sitemap.xml exists at project root
- [ ] All HTML pages are listed in sitemap
- [ ] Valid XML sitemap format
- [ ] Each URL has `<loc>`, `<lastmod>`, and `<priority>`
- [ ] No missing pages (agent must discover all .html files)
- [ ] No dead/removed pages listed

## Verification

```bash
# Discover all HTML pages
find . -maxdepth 1 -name "*.html" -type f

# Check sitemap exists
ls -la sitemap.xml

# Validate XML structure
xmllint --noout sitemap.xml 2>&1 || echo "XML validation failed"

# Check all HTML files are in sitemap
for f in *.html; do
  grep -q "$f" sitemap.xml && echo "$f: found" || echo "$f: MISSING"
done
```

## Notes

- Base URL is `https://loop-until-done.dev`
- Use clean URLs without .html extension (GitHub Pages supports this)
- lastmod should reflect actual file modification dates
- Agent should re-scan for pages each time to catch additions/removals
