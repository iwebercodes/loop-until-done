# Solution Section

This section explains how Ralph solves the problems.

**Reference:** See `specs/references/context.md` for Ralph's value propositions.

## Core Concept: Context Rotation

Ralph uses "context rotation" - instead of one long conversation that gets polluted:
- Runs multiple short iterations
- Each iteration starts fresh
- Progress persists via file-based state
- Nothing is lost between rotations

## Key Value Propositions

1. **Stops premature completion**
   - Ralph doesn't trust "done"
   - Verifies completion multiple times

2. **Prevents context pollution**
   - Fresh context each rotation
   - No accumulated confusion

3. **Saves progress**
   - File-based state persistence
   - Work continues across rotations

## Visual Element

Consider including:
- Diagram showing the loop concept
- Can be ASCII/text-based
- Shows rotation flow visually

## Success Criteria

- [ ] Section clearly explains context rotation
- [ ] Mentions fresh context / clean slate concept
- [ ] Explains file-based persistence
- [ ] Addresses each pain point with a solution
- [ ] Language is accessible (not overly technical)
- [ ] Optional: includes visual/diagram of the loop

## Verification

```bash
# Check for solution section
grep -i -E "(solution|rotation|fresh|persist)" index.html
```
