# Landing Page Content

> **Testing Guidelines**: When verifying this spec, follow the [QA guidelines](../references/qa.md)

The main content flow that converts visitors from awareness to action. This spec covers the narrative arc: hero → problem → solution → implementation.

**Reference:** See `specs/references/context.md` for Ralph's value propositions and target audience.

## Target Audience

"Vibe coders" aged 25-35:
- Moderately technical, comfortable with CLI
- Use AI coding agents (Claude Code, Cursor)
- Not professional developers
- Frustrated when agents fail them

## Content Flow

### 1. Hero Section

The hero is the first thing visitors see. It must immediately communicate what Ralph does.

**Required Elements:**
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

### 2. Pain Points Section

Establishes the problem Ralph solves with empathetic, problem-focused messaging.

**Required Pain Points:**
1. **Context Loss**
   - AI agents lose context in long conversations
   - They forget earlier decisions

2. **Premature Completion**
   - AI declares "done" when work isn't finished
   - User has to verify and push back

3. **Context Pollution**
   - Failed attempts pollute the conversation
   - Agent gets confused by previous mistakes

**Tone:** Empathetic, not condescending, sets up solution section.

### 3. Solution Section

Explains how Ralph solves the problems through context rotation.

**Core Concept: Context Rotation**
Ralph uses "context rotation" - instead of one long conversation that gets polluted:
- Runs multiple short iterations
- Each iteration starts fresh
- Progress persists via file-based state
- Nothing is lost between rotations

**Key Value Propositions:**
1. **Stops premature completion**
   - Ralph doesn't trust "done"
   - Verifies completion multiple times

2. **Prevents context pollution**
   - Fresh context each rotation
   - No accumulated confusion

3. **Saves progress**
   - File-based state persistence
   - Work continues across rotations

**Visual Element:** Consider including diagram showing the loop concept (can be ASCII/text-based).

### 4. How It Works Section

Shows users how to use Ralph in practice with a simple 3-step process.

**Required Elements:**
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

**Code Examples:** Show practical examples of PROMPT.md structure and `ralph run` command execution.

## Success Criteria

### Hero Section
- [ ] Headline matches or closely resembles "Stop cleaning up after your AI coding agent"
- [ ] Subheadline explains Ralph's purpose
- [ ] `pipx install ralph-loop` command is displayed
- [ ] Command is in a code block (monospace, terminal styling)
- [ ] GitHub link is present with inline SVG icon
- [ ] Visual hierarchy: headline > subhead > CTAs
- [ ] Hero section is above the fold on desktop

### Pain Points Section
- [ ] Section exists with clear heading
- [ ] Mentions Claude Code or AI coding agents
- [ ] Addresses context loss problem
- [ ] Addresses premature "done" problem
- [ ] Addresses context pollution problem
- [ ] Uses relatable language for target audience
- [ ] Sets up the solution section

### Solution Section
- [ ] Section clearly explains context rotation
- [ ] Mentions fresh context / clean slate concept
- [ ] Explains file-based persistence
- [ ] Addresses each pain point with a solution
- [ ] Language is accessible (not overly technical)
- [ ] Optional: includes visual/diagram of the loop

### How It Works Section
- [ ] Section has clear "How It Works" or similar heading
- [ ] Explains the process in 3 (or similar) clear steps
- [ ] Shows PROMPT.md example or mentions it
- [ ] Shows `ralph run` command
- [ ] Code examples have terminal styling
- [ ] Steps are easy to follow for non-experts
- [ ] Builds confidence that Ralph is easy to use

### General
- [ ] You MUST NOT write any automated tests to verify the success criteria. Just read the files directly.

## Verification

Read `index.html` and verify all success criteria are met. The file is small enough to review directly.

You must NOT create test scripts to verify the success criteria.
