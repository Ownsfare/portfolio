# Quick Deploy Guide for GitHub Pages

## Option 1: Using GitHub Desktop (Easiest)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "File" → "Add Local Repository"
4. Select this folder (`D:\Shubham portfolio`)
5. Click "Publish repository" button
6. Name your repository (e.g., `portfolio`)
7. Check "Keep this code private" if needed
8. Click "Publish repository"
9. Go to GitHub.com → Your repository → Settings → Pages
10. Select "Deploy from a branch" → "main" → "/ (root)" → Save
11. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

## Option 2: Using Command Line

### If Git is installed:

```bash
# Navigate to the project folder
cd "D:\Shubham portfolio"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Enable GitHub Pages:
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: "main", Folder: "/ (root)"
5. Save

## Option 3: Manual Upload via GitHub Web Interface

1. Go to https://github.com/new
2. Create a new repository (e.g., `portfolio`)
3. After creating, click "uploading an existing file"
4. Drag and drop all files from this folder:
   - index.html
   - styles.css
   - script.js
   - 083A5786.JPG
   - README.md
   - .gitignore
5. Commit changes
6. Go to Settings → Pages
7. Select "Deploy from a branch" → "main" → "/ (root)"
8. Save

Your portfolio will be live in a few minutes!

## Important Notes

- The site URL will be: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- Changes may take a few minutes to appear
- Make sure `index.html` is in the root folder
- The profile image path should work correctly

