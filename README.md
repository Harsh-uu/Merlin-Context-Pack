# Merlin Prompt Suggestions – UI Concept

A product concept exploring **automatic prompt suggestions for Merlin AI based on the webpage a user is browsing.**

Instead of users thinking of prompts from scratch, Merlin could suggest **relevant prompts tailored to the page context**, helping users start faster and get better results.

---

# Overview

AI assistants are powerful, but many users struggle with **what prompt to write**.

While **Merlin already understands the context of the webpage**, users still need to manually think of prompts.

This project explores a simple UX improvement:

**What if Merlin suggested useful prompts automatically for the page you're on?**

For example:

### On LinkedIn

* Write a thoughtful comment on this post
* Turn this post into a carousel
* Extract the key insights

### On YouTube

* Summarize this video
* Extract actionable lessons
* Turn this video into a blog post outline

### On GitHub

* Explain this repository to a beginner
* Suggest improvements for this code
* Generate documentation

The goal is to reduce **prompt friction** and make AI assistants easier to use.

---

# Concept

### Current Workflow

User opens Merlin → thinks of a prompt → types it → runs AI.

### Proposed Workflow

User opens Merlin → sees suggested prompts → clicks one → prompt auto-fills → runs AI.

This transforms the experience from:

**Think → Type → Run**

to

**Click → Run**

---

# Context Packs

The concept introduces **Context Packs**.

A Context Pack is a **collection of prompts designed for a specific type of webpage or workflow.**

Examples:

| Website  | Context Pack Purpose                                |
| -------- | --------------------------------------------------- |
| LinkedIn | Comment writing, post analysis, content repurposing |
| YouTube  | Video summarization, key insights extraction        |
| GitHub   | Code explanation, documentation, improvements       |
| Articles | Summaries, insights, social media threads           |

When Merlin detects the current website, it can load the corresponding **Context Pack** and suggest relevant prompts.

---

# Features in this Prototype

* Prompt suggestions grouped by website context
* Prompt library UI
* One-click prompt usage
* Interactive demo of prompt selection
* Explanation of how contextual prompt suggestions could work

This prototype focuses on **user experience and product exploration**, not backend AI implementation.

---

# How It Works (Conceptual)

1. Merlin detects the website currently open in the browser.
2. The interface loads a relevant **Context Pack**.
3. Suggested prompts appear in the sidebar.
4. Clicking a prompt automatically fills the chat input.
5. The user runs the prompt instantly.

---

# Purpose of This Project

This is **not an official feature**.

It is a **product concept prototype inspired by the workflow of** Merlin AI.

The goal is to explore:

* AI product UX
* Prompt workflows
* Context-aware productivity tools

---

# Tech Stack

* Next.js
* React
* Tailwind CSS
* Vercel (deployment)

---

# Possible Future Improvements

If developed further, this idea could expand with features such as:

* AI-ranked prompt suggestions
* Community prompt packs
* Prompt performance scoring
* Dynamic prompts based on page content
* User-customizable prompt packs

---

# Author

Harsh

Product concept prototype exploring prompt suggestions for AI assistants.
