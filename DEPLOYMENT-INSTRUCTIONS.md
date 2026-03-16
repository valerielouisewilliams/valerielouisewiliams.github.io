# GitHub Pages Deployment Instructions

## Step 1: Copy the workflow file
Copy the contents of `vite-github-pages-deploy.yml` and paste it into your GitHub repo at:
`.github/workflows/deploy.yml`

## Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **"GitHub Actions"** (NOT "Deploy from a branch")
4. Save

## Step 3: Push and Deploy
1. Commit the workflow file to your main branch
2. Push to GitHub
3. Go to the **Actions** tab to watch the deployment
4. Once complete, your site will be at: `https://yourusername.github.io/`

## Troubleshooting

### If you see a blank screen:
1. Open your browser's Developer Console (F12)
2. Look for errors in the Console tab
3. Check the Network tab to see if files are loading

### Common issues:
- **404 errors on assets**: Check that your base path in `vite.config.ts` is set to `'/'`
- **MIME type errors**: Make sure the `.nojekyll` file is in the `dist` folder (GitHub Actions should add this automatically)
- **Nothing loads**: Verify that `index.html` and `src/main.tsx` exist in your repo

### If deployment fails:
1. Check the Actions tab for error messages
2. Make sure your repo has Pages enabled in Settings
3. Verify the workflow file is exactly at `.github/workflows/deploy.yml`
