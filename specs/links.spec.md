# External Links

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

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

## Implementation/Verification

### Starting the Test Environment

This project includes a Docker setup for local testing. Before verifying links:

1. **Start the webserver:**
   ```bash
   docker compose up -d
   ```

2. **Verify the server is running:**
   ```bash
   curl -I http://localhost:8888
   ```
   Should return HTTP 200.

### Link Extraction and Testing

**⚠️ WARNING**: The following steps create temporary .txt files that MUST be removed after testing!

3. **Extract all external URLs from served pages:**
   ```bash
   # Get URLs from live pages (includes any dynamically generated links)
   # IMPORTANT: These commands create temporary .txt files that MUST be cleaned up
   curl -s http://localhost:8888 | grep -oE 'href="https://[^"]+' | cut -d'"' -f2 | sort -u > external-links.txt
   curl -s http://localhost:8888/impressum.html | grep -oE 'href="https://[^"]+' | cut -d'"' -f2 | sort -u >> external-links.txt
   sort -u external-links.txt > unique-links.txt
   ```

4. **Test all external links:**
   ```bash
   echo "Testing external links..."
   while read url; do
     code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
     echo "$code $url"
   done < unique-links.txt
   ```

5. **Verify PyPI package:**
   ```bash
   # Check if ralph-loop package exists on PyPI
   curl -s -o /dev/null -w "%{http_code}" "https://pypi.org/project/ralph-loop/"
   echo "PyPI package check complete"
   
   # Test actual installation inside Docker container (avoids polluting host)
   docker run --rm python:3.11-slim bash -c "
     pip install pipx && 
     pipx install ralph-loop && 
     /root/.local/bin/ralph --version
   " || echo "Package installation failed"
   
   # Alternative: Test dry-run installation
   docker run --rm python:3.11-slim bash -c "
     pip install ralph-loop --dry-run 2>&1 | grep -q 'Would install' && 
     echo 'Package installable' || 
     echo 'Package not found'
   "
   ```

### Icon and Accessibility Verification

6. **Check SVG icons in served content:**
   ```bash
   # Check homepage for inline SVG icons
   curl -s http://localhost:8888 | grep -E '<svg.*viewBox' | wc -l
   echo "SVG icons found on homepage"
   
   # Check impressum for inline SVG icons  
   curl -s http://localhost:8888/impressum.html | grep -E '<svg.*viewBox' | wc -l
   echo "SVG icons found on impressum"
   ```

7. **Verify aria-hidden attributes:**
   ```bash
   curl -s http://localhost:8888 | grep -E 'aria-hidden="true"' | wc -l
   curl -s http://localhost:8888/impressum.html | grep -E 'aria-hidden="true"' | wc -l
   echo "aria-hidden attributes found"
   ```

8. **Clean up and stop:**
   ```bash
   # CRITICAL: Remove temporary files created during testing
   # These MUST be deleted to avoid cluttering the repository
   rm -f external-links.txt unique-links.txt
   
   # Stop the webserver
   docker compose down
   ```
   
   **⚠️ IMPORTANT**: The temporary files `external-links.txt` and `unique-links.txt` MUST be removed after verification is complete. Failing to clean up these files will leave unnecessary artifacts in the project directory.

### Site Access
- **Homepage:** http://localhost:8888
- **Impressum:** http://localhost:8888/impressum.html
- **Docker container:** Uses nginx:alpine serving static files

### Manual Browser Verification

For links returning 403/999 (bot protection):
1. Open http://localhost:8888 in browser
2. Click each external link manually
3. Verify they open correctly (GitHub, LinkedIn, X/Twitter)
4. Check that icons display properly

## Verification (Legacy - for direct file inspection)

```bash
# Extract and test all external URLs from files
grep -oE 'href="https://[^"]+' index.html impressum.html | cut -d'"' -f2 | sort -u | while read url; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "$code $url"
done

# Check for SVG icons in files
grep -E '<svg.*viewBox' index.html impressum.html

# Check aria-hidden on icons in files
grep -E 'aria-hidden="true"' index.html impressum.html
```

## Link Status Codes

- 200 = OK
- 301/302 = Redirect (OK)
- 403/999 = Bot protection (verify manually in browser)
- 404 = BROKEN - must be fixed immediately
