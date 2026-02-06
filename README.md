# Code Explanation Agent

A green, web-based Code Explanation Agent that uses Gemini 2.5 Flash to explain small snippets line-by-line.

## Features
- Clean HTML/CSS/JS frontend with a green visual theme
- Node/Express backend that keeps your API key in `.env`
- Line-by-line explanations with concise, numbered output

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create your `.env` file:
   ```bash
   copy .env.example .env
   ```
3. Add your Gemini API key to `.env`:
   ```env
   GEMINI_API_KEY=YOUR_KEY_HERE
   ```
4. Run the server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

## Notes
- The API key stays on the server and is never exposed to the browser.
- This project uses the REST `generateContent` endpoint for `gemini-2.5-flash`.
