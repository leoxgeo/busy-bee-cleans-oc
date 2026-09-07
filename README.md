# Busy Bee Cleans OC - Static Website for Cloudflare Pages

Complete static web assets for Busy Bee Baby Gear Spa (Costa Mesa & Orange County, CA).

## How to Host for FREE on Cloudflare Pages

### Option 1: Via GitHub (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Cloudflare Pages"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link and push to GitHub:
   ```bash
   git remote add origin https://github.com/<YOUR_USER>/busy-bee-cleans-oc.git
   git branch -M main
   git push -u origin main
   ```
4. Go to **[Cloudflare Dashboard](https://dash.cloudflare.com/)** > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
5. Select your GitHub repository:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` (root)
6. Click **Save and Deploy**.

### Option 2: Direct Upload (No Git required)
1. Go to **[Cloudflare Dashboard](https://dash.cloudflare.com/)** > **Workers & Pages** > **Create application** > **Pages** > **Upload assets**.
2. Drag and drop all files from this folder (`Busy Bee Cleans OC`).
3. Click **Deploy Site**.

### Connect Custom Domain (`busybeecleansoc.com`)
1. In Cloudflare Pages project settings, go to the **Custom Domains** tab.
2. Click **Set up a custom domain** and enter `busybeecleansoc.com`.
3. If your domain's DNS is already on Cloudflare, it configures automatically. If registered elsewhere (e.g. GoDaddy/Namecheap), add the CNAME record provided by Cloudflare.
