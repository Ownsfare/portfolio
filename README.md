# Shubham Jain - Portfolio

A modern, responsive portfolio website showcasing my work, skills, and experience.

## Features

- 🎨 Modern, clean design with smooth animations
- 🌓 Dark mode toggle with persistent theme preference
- 📱 Fully responsive layout
- ⚡ Fast and lightweight
- 🎯 Smooth scrolling navigation
- 🖼️ Featured projects with images from Unsplash

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla JS)
- Unsplash API for images

## Setup Instructions for GitHub Pages

### Prerequisites
- Git installed on your system
- GitHub account

### Steps to Deploy

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   ```

2. **Add all files**:
   ```bash
   git add .
   ```

3. **Create initial commit**:
   ```bash
   git commit -m "Initial commit: Portfolio website"
   ```

4. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it (e.g., `portfolio` or `shubham-portfolio`)
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

5. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

6. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Local Development

Simply open `index.html` in your web browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

- Update personal information in `index.html`
- Modify colors in `styles.css` CSS variables
- Add/remove projects in the projects section
- Update contact links and social media

## License

This project is open source and available for personal use.

