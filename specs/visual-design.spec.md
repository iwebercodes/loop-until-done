# Visual Design

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

Complete visual design system covering colors, typography, interactions, responsiveness, and terminal aesthetic for the landing page.

**Reference:** See `specs/references/colors.md` for exact color values.

## Design Philosophy

The site should have developer/terminal vibes - think Vercel, Linear, GitHub dark mode. Minimal, functional design with dark backgrounds and subtle interactions.

## Color Palette

All colors must be defined as CSS variables in `:root`:

| Purpose | Variable | Value |
|---------|----------|-------|
| Background | --bg-primary | #0D1117 |
| Surface/cards | --bg-surface | #161B22 |
| Terminal background | --bg-terminal | #0A0F14 |
| Primary accent (cyan) | --accent-cyan | #06B6D4 |
| Success/CTA (green) | --accent-green | #22C55E |
| Highlight (yellow) | --accent-yellow | #EAB308 |
| Special (magenta) | --accent-magenta | #D946EF |
| Text primary | --text-primary | #E6EDF3 |
| Text secondary | --text-secondary | #8B949E |
| Border | --border | #30363D |

## Typography

### Inter Font (Self-Hosted)
- Source: Downloaded from Google Fonts
- Format: woff2 (modern, compressed)
- Required weights:
  - Regular (400) - body text
  - Medium (500) - emphasis  
  - Bold (700) - headings

### Monospace Font Stack
For code blocks and terminal output:
```css
font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
```

### Typography Guidelines
- Headings: Bold weight, larger sizes
- Body: Regular weight, good line height (1.5-1.6)
- Code: Monospace, slightly smaller size

## Terminal Aesthetic

### Dark Mode
- Dark background throughout
- Light text on dark backgrounds
- Subtle contrast between sections

### Code Blocks
Code blocks should look like terminal output:
- Dark background (darker than page background)
- Monospace font
- Slightly rounded corners
- Subtle border or shadow
- Syntax-appropriate styling

**Important**: When code blocks are wrapped in styled containers (like `.step-code`, `.terminal-output`), the container should handle visual styling (borders, backgrounds, padding) while the inner `<pre>` element should reset browser defaults to avoid double borders/padding.

### General Visual Principles
- Minimal and functional design
- No unnecessary decoration
- Professional developer aesthetic
- No bright/jarring colors that break the dark theme

## Interactions and Animations

### Smooth Scroll
Anchor links should scroll smoothly:
```css
html {
  scroll-behavior: smooth;
}
```

### Hover Effects
Interactive elements should have subtle hover effects:
- Links change color or opacity
- Buttons have background/border changes
- Transitions are smooth (200-300ms typical)

### Copy-to-Clipboard (Optional)
The installation command can have a copy button:
- JavaScript is optional for this feature
- Basic functionality works without JS
- If implemented, should provide visual feedback

## Responsive Design

### Breakpoints
Standard breakpoints:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: <= 480px

### Requirements
- Viewport meta tag in HTML head
- CSS media queries for responsive adjustments
- Flexbox/Grid for layout (no frameworks)
- No horizontal scrolling on mobile
- Touch-friendly tap targets (min 44px)
- Readable text without zooming
- Fixed-position elements (e.g., header) must not overlap or obscure main content at any viewport size

### Layout Integrity Requirements

**Content Visibility:**
- All primary content must be fully visible without being obscured by fixed elements
- The first meaningful content in each section should be completely visible above any fixed navigation/header
- Ensure adequate spacing between fixed elements and content they might overlap

**Dynamic Height Compensation:**
- When fixed elements change height (e.g., navigation wrapping on mobile), the content spacing must adjust accordingly
- Test with actual browser rendering at different viewports to verify no content is hidden
- Pay special attention to elements that may wrap or stack on smaller screens

## Success Criteria

### Colors
- [ ] CSS uses :root variables for colors
- [ ] Background color is #0D1117 (or close variant)
- [ ] Surface/card color is #161B22 (or close variant)
- [ ] Terminal background is #0A0F14 (or close variant)
- [ ] Cyan accent is #06B6D4 (or close variant)
- [ ] Green accent is #22C55E (or close variant)
- [ ] Yellow accent is #EAB308 (or close variant)
- [ ] Magenta accent is #D946EF (or close variant)
- [ ] Primary text is light (#E6EDF3 or similar)
- [ ] Secondary text is muted (#8B949E or similar)
- [ ] Borders use #30363D (or close variant)
- [ ] Dark mode aesthetic is consistent throughout

### Typography
- [ ] fonts/ contains Inter-Regular.woff2
- [ ] fonts/ contains Inter-Medium.woff2
- [ ] fonts/ contains Inter-Bold.woff2
- [ ] CSS defines @font-face for Inter fonts
- [ ] CSS uses Inter as primary font-family
- [ ] CSS defines monospace font stack for code elements
- [ ] Line height is readable (1.5 or higher for body)
- [ ] Headings use bold weight
- [ ] Code blocks use monospace font

### Terminal Aesthetic
- [ ] Page has dark background
- [ ] Code blocks have terminal styling (dark bg, monospace)
- [ ] Code blocks are visually distinct from body text
- [ ] No redundant styling between container elements and their children (no double borders/padding)
- [ ] Overall aesthetic is minimal and professional
- [ ] No bright/jarring colors that break the dark theme

### Interactions
- [ ] Smooth scroll is enabled for anchor links
- [ ] Links have hover states
- [ ] Buttons have hover states
- [ ] Transitions use CSS (not jarring instant changes)
- [ ] No JavaScript required for basic navigation
- [ ] Optional: copy-to-clipboard for code blocks

### Responsiveness
- [ ] HTML includes viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] CSS contains media query for 768px breakpoint
- [ ] CSS contains media query for 480px breakpoint
- [ ] Layout uses flexbox or grid (not floats)
- [ ] Page looks good on mobile (320px width). You MUST use the Read tool to view screenshot-mobile-320px.png.
- [ ] Page looks good on tablet (768px width). You MUST use the Read tool to view screenshot-tablet-768px.png.
- [ ] Page looks good on desktop (1200px+ width). You MUST use the Read tool to view screenshot-desktop-1440px.png.
- [ ] You have used the Read tool to inspect ALL THREE screenshot files
- [ ] No horizontal overflow on any screen size
- [ ] Hero section's heading text is fully visible without being cut off by the header at all viewport sizes
- [ ] When navigation items wrap to multiple lines, the content below adjusts its spacing to prevent overlap
- [ ] The gap between the bottom of the fixed header and the start of main content is visually appropriate (no cramping or excessive space)
- [ ] You cleaned up any temporary files, like screenshots, that you've created. You MUST delete the screenshots.

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

### Automated Visual Testing

3. **Run comprehensive visual design tests:**
   ```bash
   # Run existing test suite covering all visual requirements
   npm test tests/visual-design.test.js
   ```

This test suite verifies:
- ✓ CSS color variables (all required colors defined)
- ✓ Dark theme application throughout
- ✓ Inter font loading (Regular, Medium, Bold)
- ✓ Typography hierarchy and monospace fonts
- ✓ Terminal aesthetic styling
- ✓ Smooth scroll behavior
- ✓ Hover states for links and buttons
- ✓ Responsive design (320px, 768px, 1440px)
- ✓ No horizontal overflow at any viewport
- ✓ Hero content visibility (no header overlap)
- ✓ Viewport meta tag presence

### Manual Visual Verification (Screenshots)

4. **Take screenshots for manual inspection:**
   ```bash
   # Create temporary screenshot script
   cat > screenshot-test.js << 'EOF'
   const { chromium } = require('playwright');
   
   (async () => {
     const browser = await chromium.launch();
     const page = await browser.newPage();
     
     const viewports = [
       { width: 320, height: 800, name: 'mobile' },
       { width: 768, height: 1024, name: 'tablet' },
       { width: 1440, height: 900, name: 'desktop' }
     ];
     
     for (const viewport of viewports) {
       await page.setViewportSize(viewport);
       await page.goto('http://localhost:8888');
       await page.waitForLoadState('networkidle');
       
       await page.screenshot({
         path: `screenshot-${viewport.name}-${viewport.width}px.png`,
         fullPage: true
       });
       console.log(`✓ Screenshot taken: ${viewport.name} (${viewport.width}px)`);
     }
     
     await browser.close();
     console.log('Screenshots saved. REMEMBER to delete them after inspection!');
   })();
   EOF
   
   # Run screenshot test
   node screenshot-test.js
   
   # Clean up script
   rm screenshot-test.js
   ```

5. **MANDATORY: Visually inspect screenshots:**
   ```bash
   # List generated screenshots  
   ls -la screenshot-*.png
   echo "📸 Screenshots generated. YOU MUST READ EACH SCREENSHOT FILE."
   ```

   **🚨 CRITICAL: You MUST use the Read tool to view each screenshot file:**
   
   **MANDATORY VERIFICATION STEPS - NO EXCEPTIONS:**
   
   Step 1: **Read and describe mobile screenshot**
   ```bash
   # You MUST use Read tool on this file and describe what you see
   # Read screenshot-mobile-320px.png
   # Then write: "Mobile (320px): I can see [describe layout, header position, text readability]"
   ```
   
   Step 2: **Read and describe tablet screenshot**
   ```bash
   # You MUST use Read tool on this file and describe what you see  
   # Read screenshot-tablet-768px.png
   # Then write: "Tablet (768px): I can see [describe layout, navigation, spacing]"
   ```
   
   Step 3: **Read and describe desktop screenshot**
   ```bash
   # You MUST use Read tool on this file and describe what you see
   # Read screenshot-desktop-1440px.png  
   # Then write: "Desktop (1440px): I can see [describe layout, content width, header]"
   ```

   **VERIFICATION PROOF REQUIRED:**
   For EACH screenshot you read, you must write a description proving you saw it:
   - Describe the hero heading position relative to the header
   - Describe the navigation layout (single line vs wrapped)  
   - Describe the overall color scheme and readability
   - Note any layout issues, overlaps, or horizontal scrolling
   
   **❌ HANDOFF CLAIMS ARE NOT SUFFICIENT:**
   Even if previous handoffs claim "screenshots verified", you MUST re-verify by reading the files yourself. Previous agents may have skipped this step.

6. **REQUIRED: Delete screenshots after visual inspection:**
   ```bash
   # Only delete AFTER you have read each screenshot file
   rm -f screenshot-*.png
   echo "✓ Screenshots cleaned up (ONLY delete after Read tool inspection)"
   ```

### Site Access
- **Homepage:** http://localhost:8888
- **Docker container:** Uses nginx:alpine serving static files

6. **Clean up and stop:**
   ```bash
   # Stop the webserver
   docker compose down
   ```

## Verification Summary

Visual design compliance requires BOTH automated AND visual verification:

1. **Automated tests** - Run `npm test tests/visual-design.test.js` for technical validation
2. **Screenshot inspection** - MANDATORY visual verification of responsive layout adaptation
3. **CSS review** - Read `css/style.css` for success criteria adherence

## 🚨 IMPORTANT: Handoff Verification Requirements

**DO NOT TRUST HANDOFF CLAIMS about screenshot verification.**

Even if previous handoffs state:
- ❌ "Manual screenshot verification completed"
- ❌ "Screenshots taken and visually verified" 
- ❌ "Visual inspection passed"

**YOU MUST STILL:**
- ✅ Take new screenshots at all three viewports
- ✅ Use Read tool to view each screenshot file
- ✅ Write descriptions proving you saw each layout
- ✅ Verify no layout issues, overlaps, or accessibility problems

**Handoff claims are insufficient proof.** Only your own Read tool usage and written descriptions count as verification.
