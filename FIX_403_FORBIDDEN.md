# 🔧 Fix 403 Forbidden Error on Hostinger

## Problem
You're getting a 403 Forbidden error because Hostinger's web server is trying to serve the Next.js app as static files, but it needs to run as a Node.js application.

---

## ✅ Solution: Enable Node.js on Hostinger

### Step 1: Create Entry Point File

You need to create a **Node.js application starter** in your `public_html` folder.

Create a file named **`app.js`** in `public_html` root with this content:

```javascript
#!/usr/bin/env node

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
```

### Step 2: Configure Node.js Application in Hostinger

1. Go to **Hostinger Control Panel**
2. Navigate to **Node.js Applications** (or **Node.js Selector**)
3. Click **Create Application**
4. Configure:
   - **Application root**: `public_html`
   - **Application startup file**: `app.js`
   - **Application URL**: Your domain
   - **Node.js version**: 16.x or 18.x (latest available)

5. Click **Create**

### Step 3: Start the Application

- Click the **Start** button for your application
- Wait 1-2 minutes for it to start
- Your site should now be accessible!

---

## Alternative: Use PM2 (Recommended)

If the Node.js selector isn't available, use PM2:

### Step 1: Create `app.js` (same as above)

### Step 2: Via SSH Terminal

```bash
cd ~/public_html

# Install PM2 globally
npm install -g pm2

# Start the app with PM2
pm2 start app.js --name "dgtechinfra"

# Set PM2 to auto-start on server restart
pm2 startup
pm2 save

# Check status
pm2 status
```

### Step 3: Verify

```bash
# Check if running
pm2 list

# View logs
pm2 logs dgtechinfra

# Stop if needed
pm2 stop dgtechinfra
```

---

## ⚡ Quick Checklist

Before testing, verify:

- [ ] `.next/` folder is in `public_html`
- [ ] `node_modules/` folder is in `public_html`
- [ ] `package.json` is in `public_html`
- [ ] `.env.local` is in `public_html` with correct credentials
- [ ] `app.js` file created in `public_html`
- [ ] Node.js application started in Hostinger Control Panel OR PM2 started via SSH
- [ ] Port 3000 is accessible (or whatever port Hostinger assigns)

---

## 🚀 Testing After Setup

1. **Wait 2-3 minutes** for the application to fully start
2. **Clear browser cache**: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
3. **Reload your domain**: `https://yourdomain.com`
4. **You should see**: Your website homepage ✅

---

## ❌ Still Getting 403?

Try these troubleshooting steps:

### Check 1: File Permissions
```bash
# Via SSH Terminal, fix permissions:
cd ~/public_html
chmod 755 . -R
chmod 644 *.* 
```

### Check 2: .htaccess Issues
```bash
# Rename .htaccess to disable it
cd ~/public_html
mv .htaccess .htaccess.bak
```

### Check 3: Node.js Version
- Ensure Node.js 16+ is selected in Hostinger
- Check Hostinger support for Node.js availability on your plan

### Check 4: Port Configuration
- Some Hostinger plans use ports other than 3000 (like 8080, 8088, etc.)
- Check your application configuration in Control Panel

### Check 5: Environment Variables
```bash
# Verify .env.local exists
cat ~/public_html/.env.local
# Should show:
# EMAIL_USER=info@dgtechinfra.com
# EMAIL_PASSWORD=Vi9948146882
# NODE_ENV=production
```

---

## 📞 Still Not Working?

**Contact Hostinger Support and ask for:**
1. Node.js application support confirmation
2. Application startup logs
3. Port number assigned to your application
4. Whether PM2 is available

---

## 📋 File Structure After Setup

```
public_html/
├── app.js              ← NEW (Node.js entry point)
├── .env.local          ← Email config
├── .next/              ← Compiled app
├── public/             ← Assets
├── node_modules/       ← Dependencies
├── package.json
├── package-lock.json
├── next.config.ts
└── tsconfig.json
```

---

## ✨ Expected Result

✅ **Homepage loads** at https://yourdomain.com  
✅ **Contact form visible** and working  
✅ **Logo displays** correctly  
✅ **No 403 errors**  
✅ **Website is LIVE!** 🎉

---

**Status**: Fix in progress  
**Date**: April 20, 2026  
**Next Action**: Create `app.js` and configure Node.js in Hostinger
