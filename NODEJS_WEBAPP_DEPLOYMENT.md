# 🚀 Node.js Web App Deployment on Hostinger

**Selected Option**: Node.js Web App ✅

This is the **CORRECT** choice for your Next.js application!

---

## 📋 What is Node.js Web App?

**Node.js Web App** allows you to:
- Deploy Next.js applications directly
- Run Node.js runtime on the server
- Use custom `app.js` or `server.js` entry point
- Auto-restart application on server reboot
- Manage via Hostinger Control Panel

---

## 🎯 Deployment Steps

### Step 1: Select "Node.js Web App"

In Hostinger Control Panel:
1. Click **"Add website"** or **"New Application"**
2. Select **"Node.js Web App"**
3. Click **Next**

### Step 2: Configure Application

Fill in these settings:

| Setting | Value |
|---------|-------|
| **Application name** | dgtechinfra |
| **Application root** | public_html |
| **Application startup file** | app.js |
| **Node.js version** | 18.x or latest available |
| **Domain** | Your domain (e.g., dgtechinfra.com) |
| **SSL certificate** | Enable (automatic) |

### Step 3: Deploy from GitHub

Hostinger will ask: "Deploy from GitHub or upload files?"

**Option A: Deploy from GitHub (Automatic Updates)**
```
✅ Select: "Deploy from GitHub"
  - Repository: vineethkondapally/dgtechinfra
  - Branch: main
  - This will auto-deploy when you push to GitHub!
```

The Hostinger build runner installs production dependencies only. The project keeps the TypeScript compiler and type packages in `dependencies` so `npm run build` can complete there; the build script uses Webpack to avoid the Turbopack worker failure seen in Hostinger's build environment.

**Option B: Upload Files Manually**
```
Upload contents from your "Files to upload" folder:
- .next/
- public/
- node_modules/
- app.js
- .env.local
- package.json
- package-lock.json
- next.config.ts
- tsconfig.json
```

### Step 4: Set Environment Variables

In Hostinger Node.js App settings, add:
```
EMAIL_USER=info@dgtechinfra.com
EMAIL_PASSWORD=your-hostinger-app-password
NODE_ENV=production
```

Or keep them in `.env.local` file.

### Step 5: Start Application

Click **"Start"** or **"Deploy"** button

Wait 2-3 minutes for the application to start.

---

## ✅ What Hostinger Node.js Web App Provides

✅ Automatic process management (PM2 or similar)  
✅ Auto-restart on server reboot  
✅ Easy application control panel  
✅ Logs and monitoring  
✅ SSL certificate included  
✅ Port management (usually 3000 or assigned port)  
✅ GitHub integration for auto-deployment  

---

## 📁 Required Files in Your Deployment

All these files must be in `public_html`:

```
public_html/
├── app.js                  ← Node.js entry point
├── .next/                  ← Compiled Next.js build
├── public/                 ← Static assets
├── node_modules/           ← Dependencies
├── package.json
├── package-lock.json
├── .env.local              ← Environment variables
├── next.config.ts
└── tsconfig.json
```

---

## 🔐 Environment Configuration

### Option 1: Via Hostinger Control Panel
1. Go to your Node.js App settings
2. Add environment variables:
   - `EMAIL_USER`: info@dgtechinfra.com
   - `EMAIL_PASSWORD`: your-hostinger-app-password
   - `NODE_ENV`: production

### Option 2: Via .env.local File
Keep `.env.local` in `public_html` with:
```
EMAIL_USER=info@dgtechinfra.com
EMAIL_PASSWORD=your-hostinger-app-password
NODE_ENV=production
```

---

## 🧪 Testing After Deployment

1. **Wait 3-5 minutes** for the application to fully start
2. **Visit your domain**: https://yourdomain.com
3. **Verify**:
   - ✅ Homepage loads
   - ✅ Contact form visible
   - ✅ Logo displays
   - ✅ No 403 errors
   - ✅ Console shows no errors (F12)

### Test Contact Form:
1. Fill out the form
2. Submit
3. Check if email is received at the configured email address
4. Verify no errors in browser console

---

## 📊 Expected Result

```
✅ Website is LIVE at https://yourdomain.com
✅ All pages load correctly
✅ Contact form works and sends emails
✅ Logo and assets display properly
✅ No errors in browser console
✅ Node.js app running successfully
```

---

## 🔄 GitHub Integration (Recommended)

If you choose GitHub deployment option:

1. **Repository**: https://github.com/vineethkondapally/dgtechinfra
2. **Branch**: main
3. **Auto-Deploy**: When you push to GitHub, Hostinger automatically deploys
4. **Deployment Flow**:
   ```
   Local changes → Git push → GitHub → Hostinger auto-deploys
   ```

---

## 🛠️ After Deployment - Making Updates

### To update your website:

1. **Make changes locally**:
   ```bash
   cd /Users/vineethkondapally/dgtechinfra
   # Make your changes
   npm run build  # Test locally
   npm start      # Verify locally
   ```

2. **Commit to GitHub**:
   ```bash
   git add .
   git commit -m "Update: Description of changes"
   git push origin main
   ```

3. **Hostinger auto-deploys** (if using GitHub integration)

Or manually redeploy from Control Panel.

---

## ⚙️ Configuration Files Explained

| File | Purpose |
|------|---------|
| **app.js** | Node.js entry point that starts the Next.js server |
| **.next/** | Compiled production build of your website |
| **public/** | Static assets (logo, images, css, etc.) |
| **node_modules/** | All npm dependencies (packages) |
| **package.json** | Project configuration and dependencies list |
| **next.config.ts** | Next.js framework configuration |
| **tsconfig.json** | TypeScript configuration |
| **.env.local** | Secret environment variables (email credentials) |

---

## 🚨 Common Issues & Solutions

### 502 Bad Gateway
- Wait 2-3 minutes for app to start
- Check application logs in Hostinger
- Verify `app.js` file exists

### Contact form not sending emails
- Verify `.env.local` has correct credentials
- Restart the application
- Check SMTP settings

### Website still shows 403
- Ensure `app.js` is in `public_html`
- Verify Node.js application is started (not stopped)
- Check Hostinger logs for errors

### Domain not working
- Verify DNS points to Hostinger
- Wait 24-48 hours for DNS propagation
- Check domain settings in Hostinger

---

## 📞 Support Resources

**Hostinger Support**: https://support.hostinger.com/  
**Next.js Docs**: https://nextjs.org/docs  
**Node.js Docs**: https://nodejs.org/docs/  

---

## 🎉 You're Ready to Deploy!

Your Next.js application is production-ready and can be deployed using Hostinger's Node.js Web App option.

**Status**: ✅ READY FOR NODE.JS WEB APP DEPLOYMENT  
**Date**: April 20, 2026  
**Framework**: Next.js 16.2.3  
**Repository**: https://github.com/vineethkondapally/dgtechinfra
