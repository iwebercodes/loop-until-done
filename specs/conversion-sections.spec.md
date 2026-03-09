# Conversion Sections

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

Bottom-of-funnel content sections focused on converting visitors to users. Covers verification explanation and final call-to-action.

## Target Outcome

Users understand Ralph's reliability advantage and are equipped to start using it immediately.

## Content Sections

### 1. Verification Section

Explains Ralph's 3x verification system - a key differentiator that builds confidence.

**Core Concept:**
Ralph doesn't just trust when an agent says "done":
- Agent must signal DONE
- Ralph triggers verification cycle
- Must confirm completion 3 times consecutively
- If any check fails or changes are made, counter resets
- Only after 3 passes is task truly complete

**Key Messaging:**
- "Ralph doesn't just trust 'done'"
- Triple verification for confidence
- Catches issues agents miss
- No more premature completion

### 2. Get Started Section

Provides clear, actionable instructions to start using Ralph immediately.

**Required Elements:**

**Installation Command:**
```bash
pipx install ralph-loop
```
- Must be in a code block
- Should be easy to copy
- pipx is the recommended installer

**Quick Start Steps:**
Brief steps to get running:
1. Install Ralph
2. Create PROMPT.md with your task
3. Run `ralph run`

**Documentation Link:**
- Link to full documentation on GitHub
- For users who want more details

## Success Criteria

### Verification Section
- [ ] Section explains the 3x verification concept
- [ ] Mentions that DONE isn't trusted immediately
- [ ] Explains the consecutive confirmation requirement
- [ ] Conveys increased confidence/reliability
- [ ] Differentiates Ralph from just running the agent once

### Get Started Section
- [ ] Section has clear "Get Started" or similar heading
- [ ] Shows `pipx install ralph-loop` command
- [ ] Command is in code block with terminal styling
- [ ] Provides quick start steps
- [ ] Links to GitHub for full documentation
- [ ] Section is near the bottom (natural flow after learning about Ralph)
- [ ] CTA is clear and actionable

### General
- [ ] You MUST NOT write any automated tests to verify the success criteria. Just read the files directly.

## Verification

Read `index.html` and verify all success criteria are met. The file is small enough to review directly.

You must NOT create test scripts to verify the success criteria.
