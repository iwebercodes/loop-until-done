# HTML Sections

index.html must contain exactly 7 sections in this order:

1. **Hero** - Main headline and primary CTA
2. **Pain Point** - Problems with current AI agents
3. **Solution** - How Ralph solves these problems
4. **How It Works** - 3-step process explanation
5. **Verification** - The 3x verification system
6. **Get Started** - Installation and quick start
7. **Footer** - Links and author credit

## Success Criteria

- [ ] Hero section exists with headline and CTA
- [ ] Pain Point section exists (id="problem" or similar)
- [ ] Solution section exists (id="solution" or similar)
- [ ] How It Works section exists (id="how-it-works" or similar)
- [ ] Verification section exists (id="verification" or similar)
- [ ] Get Started section exists (id="get-started" or similar)
- [ ] Footer exists with required links
- [ ] Sections appear in the correct order
- [ ] Uses semantic HTML5 elements (section, header, footer, main, nav)

## Verification

```bash
# Check for section IDs
grep -E 'id="(problem|solution|how-it-works|verification|get-started)"' index.html

# Check for semantic elements
grep -E '<(section|header|footer|main|nav)' index.html
```
