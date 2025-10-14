Contributing to Girls Who Code USM Website

Thank you for your interest in contributing! This project is intentionally small and beginner-friendly. Below are simple guidelines to make contributions smooth and inclusive.

Table of contents
- How to contribute (PR workflow)
- Code style and accessibility
- Issue and branch naming
- Local testing
- Code of conduct

How to contribute (PR workflow)
1. Fork the repository.
2. Create a descriptive branch: `git checkout -b feat/short-description` or `git checkout -b fix/short-description`.
3. Make small, focused changes. One purpose per PR.
4. Commit with a clear message summarizing what and why.
   - Example: `feat(header): add accessible skip-link`
5. Push to your fork: `git push origin feat/short-description`
6. Open a Pull Request to the `main` branch.
   - In the PR description, include what you changed, why, and any manual test steps.
7. Wait for review. Respond to comments and update the PR if requested.

Code style and accessibility
- HTML
  - Use semantic elements (`<header>`, `<main>`, `<nav>`, `<footer>`).
  - Add `alt` text for images.
  - Use headings in logical order (H1 → H2 → H3).
- CSS
  - Use class names that describe purpose, not presentation (e.g., `.btn-primary` not `.red`).
  - Keep styles modular and avoid !important.
- JavaScript
  - Keep scripts small and unobtrusive.
  - Avoid global variables; wrap features in functions or modules.
- Accessibility checklist (minimum)
  - All interactive elements reachable by keyboard.
  - Sufficient color contrast (WCAG AA ideally).
  - Images have meaningful `alt` attributes.
  - Forms have accessible labels.

Issue and branch naming
- Issue: start with a short title and explain the problem and reproduction steps.
- Branches:
  - feat/<short-desc> for new features
  - fix/<short-desc> for bug fixes
  - chore/<short-desc> for maintenance

Local testing
- Open `index.html` in a browser for basic checks.
- Recommended: run a local server for assets/fetch tests:

```powershell
python -m http.server 8000
```

Code of conduct
- Be respectful and constructive.
- Open source contributions should be welcoming and inclusive.

Need help?
- If you're unsure where to start, open an issue with "good first issue" in the title and a maintainer will respond.

Thank you for helping improve this project!