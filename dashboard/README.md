# Dynamic Dashboard Builder (React + Redux Toolkit)

## What this project does
- Loads categories and widgets from a JSON file.
- Renders categories with their widgets.
- Add a widget to a category (or create a new category).
- Remove a widget from a category (via ✕ on widget).
- Manage categories: uncheck a widget in a category to remove it from that category.
- Search across all widgets by name or text.

## Run locally (recommended using Create React App)
1. Create a new React app (if you haven't):
   ```bash
   npx create-react-app dashboard-app
   cd dashboard-app
2.Replace package.json and the src/ folder contents with the files provided above.

3.Install dependencies:

npm install @reduxjs/toolkit react-redux

4.Start the app:

npm start

The app will open at http://localhost:3000.