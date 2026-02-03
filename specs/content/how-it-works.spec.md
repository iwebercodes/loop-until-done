# How It Works Section

This section shows users how to use Ralph in practice.

## Required Elements

### Simple Process (3 Steps)

1. **Create PROMPT.md**
   - Explain what goes in the prompt file
   - Show example content

2. **Run Ralph**
   - Show the `ralph run` command
   - Explain what happens

3. **Ralph handles the rest**
   - Automatic rotations
   - Verification cycles
   - Completion detection

### Code Examples

Show practical examples:
- PROMPT.md file structure/content
- `ralph run` command execution
- Terminal output (optional)

## Success Criteria

- [ ] Section has clear "How It Works" or similar heading
- [ ] Explains the process in 3 (or similar) clear steps
- [ ] Shows PROMPT.md example or mentions it
- [ ] Shows `ralph run` command
- [ ] Code examples have terminal styling
- [ ] Steps are easy to follow for non-experts
- [ ] Builds confidence that Ralph is easy to use

## Verification

```bash
# Check for how it works section
grep -i "how it works" index.html

# Check for command examples
grep -E "(ralph run|PROMPT\.md)" index.html
```
