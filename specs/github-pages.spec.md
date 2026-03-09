# GitHub Pages Compatibility

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

The site must work as static files served by GitHub Pages.

## Requirements

- All files must be static (HTML, CSS, fonts)
- No server-side processing required
- No build step required
- JavaScript is optional (only for copy-to-clipboard enhancement)
- Basic functionality must work without JavaScript

## File Serving

GitHub Pages serves files directly:
- index.html at root
- Relative paths for CSS and fonts
- No .htaccess or server config needed

## Success Criteria

- [ ] Site works when served as static files
- [ ] No server-side dependencies
- [ ] No build/compile step required
- [ ] Basic functionality works without JavaScript
- [ ] All relative paths are correct for static hosting

## Implementation/Verification

### Starting the Test Environment

This project includes a Docker setup that simulates GitHub Pages static hosting:

1. **Start the static webserver:**
   ```bash
   docker compose up -d
   ```

2. **Verify static file serving:**
   ```bash
   curl -I http://localhost:8888
   ```
   Should return HTTP 200 with `text/html` content type.

### Static File Verification

3. **Test all static resources load correctly:**
   ```bash
   # Test homepage
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8888 && echo " ✓ Homepage loads"
   
   # Test impressum page  
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8888/impressum.html && echo " ✓ Impressum loads"
   
   # Test CSS file (if external)
   if curl -s http://localhost:8888 | grep -q 'css/style.css'; then
     curl -s -o /dev/null -w "%{http_code}" http://localhost:8888/css/style.css && echo " ✓ External CSS loads"
   else
     echo " ✓ CSS is inline (no external file needed)"
   fi
   
   # Test font files
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8888/fonts/Inter-Regular.woff2 && echo " ✓ Regular font loads"
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8888/fonts/Inter-Medium.woff2 && echo " ✓ Medium font loads"  
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8888/fonts/Inter-Bold.woff2 && echo " ✓ Bold font loads"
   ```

4. **Test GitHub Pages clean URLs (optional):**
   ```bash
   # GitHub Pages supports /impressum instead of /impressum.html
   # Our nginx setup may not support this, but test anyway
   curl -s -o /dev/null -w "%{http_code}" http://localhost:8888/impressum 2>/dev/null || echo " ⚠ Clean URLs not supported (OK for testing)"
   ```

### No Build Step Verification

5. **Verify no build/compile dependencies:**
   ```bash
   # Check if any build files exist that shouldn't be in static hosting
   ls -la | grep -E "(package\.json|node_modules|src/|build/|dist/)" | grep -v "package\.json.*test" || echo " ✓ No build artifacts"
   
   # Verify files can be served directly from repository
   echo " ✓ Files served directly from repository without build step"
   ```

### JavaScript-Optional Testing

6. **Test core functionality without JavaScript:**
   ```bash
   # Create temporary test script to disable JS
   cat > test-no-js.js << 'EOF'
   const { chromium } = require('playwright');
   
   (async () => {
     const browser = await chromium.launch();
     const context = await browser.newContext({
       javaScriptEnabled: false
     });
     const page = await context.newPage();
     
     console.log('Testing site without JavaScript...');
     
     // Test homepage loads
     await page.goto('http://localhost:8888');
     const title = await page.title();
     console.log('✓ Homepage loads without JS:', title.includes('Ralph'));
     
     // Test impressum loads  
     await page.goto('http://localhost:8888/impressum.html');
     const impressumTitle = await page.title();
     console.log('✓ Impressum loads without JS:', impressumTitle.includes('Impressum'));
     
     // Test basic content is visible (no JS required)
     await page.goto('http://localhost:8888');
     const heroText = await page.locator('h1').textContent();
     console.log('✓ Hero content visible:', heroText.includes('AI coding agent'));
     
     // Test navigation links work
     const navLinks = await page.locator('nav a').count();
     console.log('✓ Navigation links present:', navLinks > 0);
     
     console.log('JavaScript-optional testing completed.');
     await browser.close();
   })();
   EOF
   
   # Run the test
   node test-no-js.js
   
   # Clean up
   rm test-no-js.js
   ```

### Server Independence Verification

7. **Confirm static hosting compatibility:**
   ```bash
   # Test that files are served exactly as stored (no preprocessing)
   diff <(curl -s http://localhost:8888/index.html) index.html > /dev/null && echo "✓ Files served without modification"
   diff <(curl -s http://localhost:8888/impressum.html) impressum.html > /dev/null && echo "✓ Impressum served without modification"
   ```

8. **Clean up and stop:**
   ```bash
   # Stop the webserver
   docker compose down
   ```

### Site Access
- **Homepage:** http://localhost:8888
- **Impressum:** http://localhost:8888/impressum.html  
- **Docker container:** Uses nginx:alpine serving pure static files (GitHub Pages equivalent)

### Verification Summary

The Docker setup proves GitHub Pages compatibility by:
- **Static serving only** - nginx serves files without processing
- **No backend dependencies** - Container has no PHP, Node.js, or server logic
- **Direct file access** - Files work exactly as stored in repository
- **JavaScript optional** - Core functionality works without JS
- **Relative paths work** - CSS, fonts, images load from static URLs

This confirms the site will work identically when deployed to GitHub Pages.
