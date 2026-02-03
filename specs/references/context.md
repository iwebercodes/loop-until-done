# Project Context

## What is Ralph?

Ralph is an autonomous development loop tool that supervises AI coding agents (like Claude Code).

It uses "context rotation" - instead of one long conversation that gets polluted with failed attempts, Ralph runs multiple short iterations. Each iteration starts fresh but continues from where the last left off via file-based state.

### Key Value Propositions

- Stops AI agents from declaring "done" prematurely
- Prevents context pollution in long conversations
- Verifies completion 3 times before marking truly done
- Saves progress between rotations so nothing is lost

## Target Audience (ICP)

"Vibe coders" aged 25-35, mostly male:
- Moderately technical, comfortable with CLI, not power users
- Use AI coding agents (Claude Code, Cursor) to build apps, MVPs
- Not professional developers - learning as they go
- Frustrated when agents lose context, declare "done" prematurely
- Want practical solutions, not academic explanations

## Content Tone

Based on the target audience:
- Practical, not academic
- Empathetic to frustrations
- Clear and direct
- Not condescending
- Developer-friendly but accessible

## Content Sources

- Tagline: "Stop cleaning up after your AI coding agent"
- Installation: `pipx install ralph-loop`
- GitHub: https://github.com/iwebercodes/ralph
