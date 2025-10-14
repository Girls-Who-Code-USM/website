# Girls Who Code at USM — Website

Empuwering the next generation of female technologiest thorugh community, education and real-world coding experience.

This repository contains a simple front-end project (HTML, CSS, and JavaScript) used for workshops, portfolio demos, and community outreach.

## About

Girls Who Code USM is a student-led organization dedicated to closing the gender gap in technology by inspiring, educating, and equipping students with the computing skills needed to pursue 21st-century opportunities.

## Quick overview

- Project type: Static website (no build step required)
- Files of interest:
  - `index.html` — the main page
  - `style.css` — stylesheet
  - `script.js` — interactive behavior

## Features

- Minimal, easy-to-read code suitable for beginners
- Clear separation of structure (HTML), presentation (CSS), and behavior (JS)

## Quickstart — view locally

1. Clone the repository (if you haven't already):

	git clone https://github.com/Girls-Who-Code-USM/website.git

2. Open `index.html` in your browser. On Windows you can double-click the file or use a lightweight local server for better behavior (recommended when using fetch/XHR or routing):

	# Use Python's simple server (works with Python 3)
	python -m http.server 8000

Then open http://localhost:8000 in your browser.

## Development notes

- The project doesn't require Node, npm, or any other tooling. If you want to add a build step, consider adding a `package.json` and a simple dev server (for example, `live-server` or using Vite for faster reloads).
- Keep JS behavior unobtrusive: prefer feature detection and avoid global namespace pollution.

## Testing changes

- Manual testing: open `index.html` after edits and verify layout and interactions.
- Accessibility: use browser devtools Lighthouse and check color contrast, headings, and alt text for images.

## Contributing

We welcome contributions from everyone. For detailed contributor guidelines (branching, PRs, accessibility checklist), see `CONTRIBUTING.md`.

A simple workflow:

1. Fork the repository.
2. Create a branch for your change: `git checkout -b feat/my-change`
3. Make changes and add tests/doc updates if relevant.
4. Commit and push: `git push origin feat/my-change`
5. Open a pull request describing the change and its motivation.

Guidelines:

- Keep changes small and focused.
- Use semantic HTML and write clear commit messages.
- If you add dependencies, explain why and include minimal install instructions.

## Contributors

Current contributors include:

- Rashika Karmacharya
- Pratima Rajbanshi
- Sanjida Islam
- Bamidele-Sanni Oluwatamilore
- Sadia Zaman
- Ramiisa
- Binita Dkl

## License

This project is available under the MIT License. See LICENSE for details.

## Troubleshooting

- If the page looks broken after edits, check browser console for errors (right click → Inspect → Console).
- If styles don't update, try a hard-refresh (Ctrl+F5) or clear site cache.


