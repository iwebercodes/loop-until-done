# Verification Section

This section explains Ralph's 3x verification system - a key differentiator.

## Core Concept

Ralph doesn't just trust when an agent says "done":
- Agent must signal DONE
- Ralph triggers verification cycle
- Must confirm completion 3 times consecutively
- If any check fails or changes are made, counter resets
- Only after 3 passes is task truly complete

## Messaging

Key points to convey:
- "Ralph doesn't just trust 'done'"
- Triple verification for confidence
- Catches issues agents miss
- No more premature completion

## Success Criteria

- [ ] Section explains the 3x verification concept
- [ ] Mentions that DONE isn't trusted immediately
- [ ] Explains the consecutive confirmation requirement
- [ ] Conveys increased confidence/reliability
- [ ] Differentiates Ralph from just running the agent once

## Verification

```bash
# Check for verification section
grep -i -E "(verif|3.*times|triple|confirm)" index.html
```
