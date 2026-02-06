# Component Explanation

## server.js
- Loads environment variables with `dotenv`.
- Starts an Express server and serves the static frontend in `public/`.
- Provides a POST `/api/explain` endpoint that sends the prompt and user code to Gemini 2.5 Flash.
- Returns the model response as JSON to the browser.

## public/index.html
- Defines the page structure, input textarea, action button, and output area.
- Links the green theme CSS and the frontend JavaScript.

## public/styles.css
- Establishes the green color system, gradients, and typography.
- Styles the layout cards, button, and text areas.
- Adds a simple entrance animation and mobile responsiveness.

## public/app.js
- Handles the click event, calls `/api/explain`, and renders the result.
- Displays status messages and basic error feedback.

## .env.example
- Template for storing your `GEMINI_API_KEY` locally.

## README.md
- Setup, run instructions, and project overview.

## LINKEDIN_POST.txt
- Ready-to-post LinkedIn text describing the project.
