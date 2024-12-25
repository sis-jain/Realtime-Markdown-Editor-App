# Real-time Markdown Editor with Live Preview

## Overview
This project is a real-time Markdown editor built with React and Node.js. It allows users to write Markdown in a text editor, and instantly view the rendered HTML in a live preview pane. The backend processes Markdown to HTML conversion.

## Features
- Real-time Markdown editing and live HTML preview.
- Backend API for Markdown-to-HTML conversion.
- Responsive and user-friendly UI.

## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Node.js, Express, Marked.js
- **Styling**: Inline CSS (customizable)

## Folder Structure
```
realtime-markdown-editor/
├── backend/
│   ├── server.js              # Node.js server file
│   ├── package.json           # Backend dependencies
│   ├── package-lock.json      # Lockfile for backend
└── frontend/
    ├── public/
    │   ├── index.html         # Main HTML file
    ├── src/
    │   ├── App.js             # React app file
    │   ├── index.js           # React entry point
    │   ├── styles.css         # (Optional) CSS for the app
    ├── package.json           # Frontend dependencies
    ├── package-lock.json      # Lockfile for frontend
├── README.md                  # Instructions for setting up and running the project
├── .gitignore                 # Git ignore file
```

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sis-jain/Realtime-Markdown-Editor.git
   cd realtime-markdown-editor
   ```

2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```bash
   cd backend
   node server.js
   ```
   The backend will run on `http://localhost:3001`.

2. Start the frontend:
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

### Usage
- Open `http://localhost:3000` in your browser.
- Type Markdown syntax in the left text area.
- View the rendered HTML in the right preview pane.

## Troubleshooting
- **Error: Can't resolve 'marked'**: Ensure the `marked` library is installed in the backend:
  ```bash
  cd backend
  npm install marked
  ```

- **TypeError: marked is not a function**: Ensure the import in `server.js` is updated:
  ```javascript
  const { marked } = require('marked');
  ```

## Contributing
Feel free to fork the repository and submit pull requests.
