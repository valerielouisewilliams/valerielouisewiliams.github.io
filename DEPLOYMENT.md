# GitHub Pages Deployment Guide

This portfolio is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Create a GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/valerielouisewilliams/your-repo-name.git
git push -u origin main
```

### 2. Configure GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 3. Configure the Base Path (Important!)

If your site will be at `https://valerielouisewilliams.github.io/repo-name/`:
- Update `vite.config.ts` and change the base path:
  ```typescript
  base: process.env.GITHUB_ACTIONS ? '/repo-name/' : '/',
  ```

If your site will be at `https://valerielouisewilliams.github.io/` (using a repo named `valerielouisewilliams.github.io`):
- Keep the base as `'/'` (already configured)

### 4. Deploy
Once you push to the `main` branch, GitHub Actions will automatically:
1. Build your app
2. Deploy it to GitHub Pages

You can monitor the deployment progress in the **Actions** tab of your repository.

### 5. Access Your Site
After deployment completes (usually 1-2 minutes), your portfolio will be live at:
- `https://valerielouisewilliams.github.io/repo-name/` (for project repos)
- `https://valerielouisewilliams.github.io/` (for user/org repos)

## Manual Deployment
You can also trigger a manual deployment:
1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**

## Local Development
To run locally:
```bash
npm install
npm run dev
```

## Custom Domain (Optional)
To use a custom domain like `valeriewilliams.com`:
1. Add a `CNAME` file to the `/public` directory with your domain
2. Configure your domain's DNS settings
3. Enable custom domain in GitHub Pages settings

## Troubleshooting
- **404 errors**: Make sure the base path in `vite.config.ts` matches your repo name
- **Build fails**: Check the Actions tab for error details
- **Permissions error**: Ensure GitHub Actions has write permissions in Settings → Actions → General
