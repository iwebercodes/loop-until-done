# Get Started Section

This section provides clear instructions to start using Ralph.

## Required Elements

### Installation Command

```bash
pipx install ralph-loop
```

- Must be in a code block
- Should be easy to copy
- pipx is the recommended installer

### Quick Start Steps

Brief steps to get running:
1. Install Ralph
2. Create PROMPT.md with your task
3. Run `ralph run`

### Documentation Link

- Link to full documentation on GitHub
- For users who want more details

## Success Criteria

- [ ] Section has clear "Get Started" or similar heading
- [ ] Shows `pipx install ralph-loop` command
- [ ] Command is in code block with terminal styling
- [ ] Provides quick start steps
- [ ] Links to GitHub for full documentation
- [ ] Section is near the bottom (natural flow after learning about Ralph)
- [ ] CTA is clear and actionable

## Verification

```bash
# Check for get started section
grep -i "get started" index.html

# Check for install command
grep "pipx install ralph-loop" index.html

# Check for documentation link
grep -i "documentation\|docs\|github" index.html
```
