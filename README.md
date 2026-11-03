# Kigali Tech Solutions Portal (KTS)

A responsive React prototype for the Kigali Tech Solutions student project scenario.

## Features

- Home page with the required welcome headline and three IT service cards.
- Repair request form (Company Name, Laptop Model and Problem Description).
- Repair status lookup with the sample ticket `KTS-001` showing **In Repair**.
- Contact page with the KTS Kigali address and a mock contact form.
- Responsive navigation bar with React Router and a mobile hamburger menu.

## Technology

- React 18
- Vite
- React Router DOM
- Tailwind CSS

## Run locally

1. Install Node.js (LTS recommended).
2. Clone this repository:
   ```bash
   git clone https://github.com/CREDO-2020/task.git
   cd task
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Prototype note

This is a front-end-only student prototype. Repair requests and contact messages show confirmation alerts but are not saved to a database. The status page uses the hardcoded demonstration ticket `KTS-001`.
