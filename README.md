# Account Access UI

A responsive sign-in and sign-up page built with HTML, CSS, and vanilla JavaScript. The interface features animated panel transitions on desktop and a compact toggle between forms on mobile.

## Features

- Sign-in and account-creation forms in one interface
- Animated sliding panels on larger screens
- Mobile-friendly form switching
- Direct links to Google, GitHub, and LinkedIn sign-in or sign-up pages
- Password recovery link
- Form submissions are prevented so the page can be previewed without reloading

## Run Locally

No build tools or dependencies are required. Clone or download the repository, then open `index.html` in a browser.

Alternatively, serve the project directory with a local static web server. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Project Files

```text
.
├── index.html   # Sign-in and sign-up page markup
├── style.css    # Layout, styling, transitions, and responsive rules
└── script.js    # Form-panel switching and hash synchronization
```

## Important Note

This is a front-end UI demo only. It does not create accounts, authenticate users, store credentials, or connect to an authentication service. The social buttons link to the providers' own websites; they are not OAuth integrations. Connect the forms to a secure backend or authentication provider before using this interface in a real application.

## Customization

- Edit the text and form markup in `index.html`.
- Adjust colors and responsive behavior in `style.css`.
- Update panel switching behavior in `script.js`.
