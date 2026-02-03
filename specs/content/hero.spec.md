# Hero Section

The hero is the first thing visitors see. It must immediately communicate what Ralph does.

**Reference:** See `specs/references/context.md` for Ralph's value propositions and target audience.

## Required Elements

1. **Headline**
   - Text: "Stop cleaning up after your AI coding agent"
   - Should be the most prominent text on the page

2. **Subheadline**
   - Brief explanation of what Ralph does
   - Should mention context rotation or supervision concept

3. **Primary CTA**
   - Installation command: `pipx install ralph-loop`
   - Displayed as a copyable code block
   - Visually prominent

4. **Secondary CTA**
   - Link to GitHub repository
   - Less prominent than primary CTA

## Success Criteria

- [ ] Headline matches or closely resembles "Stop cleaning up after your AI coding agent"
- [ ] Subheadline explains Ralph's purpose
- [ ] `pipx install ralph-loop` command is displayed
- [ ] Command is in a code block (monospace, terminal styling)
- [ ] GitHub link is present
- [ ] GitHub link has inline SVG icon
- [ ] Visual hierarchy: headline > subhead > CTAs
- [ ] Hero section is above the fold on desktop

## Verification

```bash
# Check for headline
grep -i "stop cleaning up" index.html

# Check for install command
grep "pipx install ralph-loop" index.html

# Check for GitHub link
grep "github.com/iwebercodes/ralph" index.html
```
