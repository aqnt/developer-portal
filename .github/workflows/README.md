# GitHub Pages Deployment

This repository uses GitHub Actions to automatically build and deploy the Docusaurus site to GitHub Pages.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Configure Repository

The workflow is configured to deploy when:
- Code is pushed to `main` or `master` branch
- Workflow is manually triggered

### 3. Custom Domain (Optional)

If you're using a custom domain (like `aqnt.net`):

1. Add a `CNAME` file in the `static` folder with your domain:
   ```
   aqnt.net
   ```

2. Configure DNS:
   - Add a CNAME record pointing to `your-username.github.io` or `your-org.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. In repository settings → Pages, add your custom domain

### 4. Verify Deployment

After pushing to the main branch:
1. Go to the **Actions** tab in your repository
2. Check the workflow run status
3. Once complete, your site will be available at:
   - `https://your-username.github.io/developer-portal` (if using GitHub Pages subdomain)
   - `https://aqnt.net` (if using custom domain)

## Workflow Details

The workflow:
- Uses Node.js 20
- Installs dependencies with `npm ci`
- Builds the site with `npm run build`
- Deploys to GitHub Pages using the official GitHub Actions

## Troubleshooting

### Build Fails
- Check the Actions tab for error details
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Site Not Updating
- Clear browser cache
- Check GitHub Pages settings
- Verify the workflow completed successfully

### Custom Domain Issues
- Verify DNS records are correct
- Check CNAME file in static folder
- Allow 24-48 hours for DNS propagation

