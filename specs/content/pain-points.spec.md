# Pain Points Section

This section establishes the problem Ralph solves.

**Reference:** See `specs/references/context.md` for target audience details.

## Target Audience Context

"Vibe coders" aged 25-35:
- Moderately technical, comfortable with CLI
- Use AI coding agents (Claude Code, Cursor)
- Not professional developers
- Frustrated when agents fail them

## Required Messaging

The section should address these pain points:

1. **Context Loss**
   - AI agents lose context in long conversations
   - They forget earlier decisions

2. **Premature Completion**
   - AI declares "done" when work isn't finished
   - User has to verify and push back

3. **Context Pollution**
   - Failed attempts pollute the conversation
   - Agent gets confused by previous mistakes

## Tone

- Empathetic (we understand the frustration)
- Not condescending
- Problem-focused (setup for solution)

## Success Criteria

- [ ] Section exists with clear heading
- [ ] Mentions Claude Code or AI coding agents
- [ ] Addresses context loss problem
- [ ] Addresses premature "done" problem
- [ ] Addresses context pollution problem
- [ ] Uses relatable language for target audience
- [ ] Sets up the solution section

## Verification

```bash
# Check for pain point section
grep -i -E "(problem|pain|frustrat|context)" index.html
```
