# GDPR Compliance

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

The site must be fully GDPR-compliant with minimal external requests limited to GDPR-compliant services.

## Requirements

### Restricted External Resources
- NO CDN links (no cdnjs, unpkg, jsdelivr, etc.)
- NO Google Fonts (fonts must be self-hosted)
- NO external CSS frameworks
- NO external JavaScript libraries loaded from CDN
- NO external images or icons
- NO invasive analytics (Google Analytics, etc.)
- Privacy-friendly analytics (like Umami) are allowed from cloud.umami.is
- NO tracking pixels

### No Cookies
- NO cookies of any kind
- NO localStorage for tracking purposes
- NO session tracking

### Self-Hosted Assets
All assets must be served from the same domain:
- Fonts in fonts/ directory
- CSS in css/ directory
- Images inline (SVG) or in local directory
- Icons as inline SVG

### Privacy Statement
The site should state clearly that:
- No cookies are used
- No personal data is collected
- Only GDPR-compliant external resources are loaded (Umami analytics)

## Success Criteria

- [ ] No `<link>` tags pointing to external domains
- [ ] No `<script src="">` pointing to external domains (except cloud.umami.is)
- [ ] No `url()` in CSS pointing to external domains
- [ ] Fonts are self-hosted (fonts/*.woff2)
- [ ] Icons are inline SVG (not external icon fonts)
- [ ] No invasive analytics scripts (privacy-friendly analytics like Umami are allowed)
- [ ] No cookie consent banner needed (because no cookies)
- [ ] Privacy statement in Impressum confirms no tracking
- [ ] Network tab shows only allowed external requests (Umami analytics)

## Implementation/Verification

### Starting the Test Environment

This project includes a Docker setup for local testing:

1. **Start the webserver:**
   ```bash
   docker compose up -d
   ```

2. **Verify the server is running:**
   ```bash
   curl -I http://localhost:8888
   ```
   Should return HTTP 200.

### Code Analysis (Agent Review)

3. **Read and analyze files for GDPR violations:**
   
   **Step 1: Read index.html**
   
   Use Read tool to examine index.html for:
   - External CDN links (cdnjs, unpkg, jsdelivr, fonts.googleapis.com)
   - External script sources (except cloud.umami.is) 
   - External CSS links
   - External image sources
   
   Write findings: "Index.html analysis: [describe external resources found]"
   
   **Step 2: Read impressum.html** 
   
   Use Read tool to examine impressum.html for:
   - Same external resource violations
   - Privacy statement mentions Umami properly
   
   Write findings: "Impressum.html analysis: [describe external resources and privacy content]"
   
   **Step 3: Read css/style.css (if external)**
   
   Use Read tool to examine CSS for:
   - url() pointing to external domains
   - @import from external sources
   - External font references
   
   Write findings: "CSS analysis: [describe external URLs found]"


### Browser Testing (Real Network Monitoring)

4. **Test with browser network monitoring:**
   ```bash
   # Create network monitoring test
   cat > test-gdpr-compliance.js << 'EOF'
   const { chromium } = require('playwright');
   
   (async () => {
     const browser = await chromium.launch();
     const context = await browser.newContext();
     const page = await context.newPage();
     
     // Monitor all network requests
     const externalRequests = [];
     page.on('request', request => {
       const url = request.url();
       if (!url.startsWith('http://localhost:8888/')) {
         externalRequests.push(url);
       }
     });
     
     console.log('Testing homepage network requests...');
     await page.goto('http://localhost:8888');
     await page.waitForLoadState('networkidle');
     
     // Check cookies
     const cookies = await context.cookies();
     console.log('Cookies set:', cookies.length === 0 ? '✅ None' : `❌ ${cookies.length} found`);
     if (cookies.length > 0) {
       console.log('Cookie details:', cookies);
     }
     
     // Check localStorage/sessionStorage
     const storageData = await page.evaluate(() => {
       return {
         localStorage: Object.keys(localStorage).length,
         sessionStorage: Object.keys(sessionStorage).length
       };
     });
     console.log('LocalStorage items:', storageData.localStorage === 0 ? '✅ Empty' : `❌ ${storageData.localStorage} items`);
     console.log('SessionStorage items:', storageData.sessionStorage === 0 ? '✅ Empty' : `❌ ${storageData.sessionStorage} items`);
     
     // Analyze external requests
     console.log('External requests made:', externalRequests.length);
     const allowedDomains = ['cloud.umami.is'];
     const unauthorizedRequests = externalRequests.filter(url => {
       return !allowedDomains.some(domain => url.includes(domain));
     });
     
     if (unauthorizedRequests.length > 0) {
       console.log('❌ Unauthorized external requests:', unauthorizedRequests);
     } else {
       console.log('✅ Only authorized external requests (Umami analytics)');
     }
     
     // Test impressum page
     console.log('\\nTesting impressum page...');
     await page.goto('http://localhost:8888/impressum.html');
     await page.waitForLoadState('networkidle');
     
     // Check privacy statement mentions Umami
     const privacyText = await page.textContent('body');
     const mentionsUmami = privacyText.includes('Umami') || privacyText.includes('umami');
     console.log('Privacy statement mentions Umami:', mentionsUmami ? '✅ Yes' : '❌ No');
     
     await browser.close();
     console.log('\\nGDPR compliance testing completed.');
   })();
   EOF
   
   # Run the test
   node test-gdpr-compliance.js
   
   # Clean up
   rm test-gdpr-compliance.js
   ```

### Site Access
- **Homepage:** http://localhost:8888
- **Impressum:** http://localhost:8888/impressum.html
- **Docker container:** Uses nginx:alpine serving static files

5. **Clean up and stop:**
   ```bash
   # Stop the webserver
   docker compose down
   ```

### File-Based Verification (Legacy)

For manual file inspection without webserver:
- Read `index.html` - Check for external resources and Umami script
- Read `impressum.html` - Verify privacy statement mentions Umami  
- Read `css/style.css` - Confirm no external URLs, self-hosted fonts

### GDPR Compliance Summary

The Docker webserver verification proves GDPR compliance by:
- **Network monitoring** - Only Umami analytics requests are made externally
- **Cookie verification** - No cookies are set in browser environment
- **Storage checking** - No tracking data in localStorage/sessionStorage  
- **Asset verification** - All fonts, CSS, icons served from same domain
- **Privacy transparency** - Umami usage properly disclosed in impressum
