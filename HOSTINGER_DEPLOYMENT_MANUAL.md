# 🚀 Hostinger Deployment - Step-by-Step Guide

**Date**: April 20, 2026  
**Website**: Dhriti Global Technologies & Infrastructure  
**Status**: Ready for deployment ✅

---

## 📋 Pre-Deployment Checklist

Before deploying, verify you have:

- [x] Website tested locally ✅
- [x] Contact form working ✅
- [x] Build completed (`npm run build`) ✅
- [x] Hostinger account active
- [x] Email credentials verified (`info@dgtechinfra.com` / `Vi9948146882`)
- [x] Domain configured (or ready to configure)

---

## 🔧 What You'll Need

**From your local machine:**
```
Project Folder: /Users/vineethkondapally/dgtechinfra

Files to upload:
├── .next/              (entire folder - compiled code)
├── public/             (entire folder - images, assets)
├── node_modules/       (entire folder - dependencies)
├── package.json        (project config)
├── package-lock.json   (dependency lock)
├── next.config.ts      (Next.js config)
└── tsconfig.json       (TypeScript config)

DO NOT UPLOAD:
├── .env.local         (create fresh on server)
├── .git/              (version control)
└── Other local files
```

---

## 📝 Option A: Using FTP/SFTP (Recommended for Beginners)

### Step 1: Get Hostinger FTP Credentials

1. Login to **Hostinger Control Panel**
2. Navigate to **FTP Accounts** or **File Manager**
3. Get your FTP credentials:
   - FTP Host: `ftp.yourdomain.com` or IP address
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (standard) or 22 (SFTP - more secure)

### Step 2: Download FTP Client

Download one of these free FTP clients:
- **FileZilla** (Recommended): https://filezilla-project.org/
- **Cyberduck**: https://cyberduck.io/
- **WinSCP** (Windows only): https://winscp.net/

### Step 3: Connect via FTP

**Using FileZilla:**
1. Open FileZilla
2. File → Site Manager → New Site
3. Enter your FTP credentials:
   ```
   Host: ftp.yourdomain.com
   Username: your_ftp_username
   Password: your_ftp_password
   Port: 21
   Encryption: Use plain FTP (or SFTP if available)
   ```
4. Click **Connect**

### Step 4: Navigate to Public Directory

1. In the right panel (remote), navigate to `public_html` or `www`
2. This is your website root directory

### Step 5: Upload Project Files

**Delete existing files first** (if any):
1. Select all files in `public_html`
2. Right-click → Delete

**Upload new files:**
1. In the left panel (local), navigate to: `/Users/vineethkondapally/dgtechinfra`
2. Select these folders/files:
   ```
   - .next
   - public
   - node_modules
   - package.json
   - package-lock.json
   - next.config.ts
   - tsconfig.json
   ```
3. Drag and drop to the right panel (remote `public_html`)
4. Wait for upload to complete (this will take several minutes due to `node_modules` size)

### Step 6: Create .env.local on Server

1. In FileZilla, right-click in `public_html` → Create New File
2. Name it: `.env.local`
3. Right-click → View/Edit
4. Add this content:
   ```
   EMAIL_USER=info@dgtechinfra.com
   EMAIL_PASSWORD=Vi9948146882
   NODE_ENV=production
   ```
5. Save and close

---

## 📝 Option B: Using Hostinger's Terminal/SSH (Faster)

### Step 1: Get SSH Credentials

1. Login to **Hostinger Control Panel**
2. Go to **Advanced** → **SSH Access**
3. Get your credentials:
   ```
   Host: ssh.yourdomain.com or IP
   Username: your_ssh_username
   Password: your_ssh_password
   Port: 22
   ```

### Step 2: Download SSH Client

**Mac/Linux**: Already have Terminal ✅  
**Windows**: Download PuTTY: https://www.putty.org/

### Step 3: Connect via SSH (Mac Terminal)

```bash
ssh your_ssh_username@ssh.yourdomain.com
# Enter password when prompted
```

### Step 4: Navigate to Public Directory

```bash
cd public_html
# or
cd www
```

### Step 5: Delete Old Files

```bash
rm -rf *
# This removes all files in the directory
```

### Step 6: Upload Files Using SCP (from your Mac)

Open a **NEW** Terminal window on your Mac (don't close the SSH connection):

```bash
# Copy entire project to server
scp -r /Users/vineethkondapally/dgtechinfra/.next your_ssh_username@ssh.yourdomain.com:~/public_html/
scp -r /Users/vineethkondapally/dgtechinfra/public your_ssh_username@ssh.yourdomain.com:~/public_html/
scp -r /Users/vineethkondapally/dgtechinfra/node_modules your_ssh_username@ssh.yourdomain.com:~/public_html/
scp /Users/vineethkondapally/dgtechinfra/package.json your_ssh_username@ssh.yourdomain.com:~/public_html/
scp /Users/vineethkondapally/dgtechinfra/package-lock.json your_ssh_username@ssh.yourdomain.com:~/public_html/
scp /Users/vineethkondapally/dgtechinfra/next.config.ts your_ssh_username@ssh.yourdomain.com:~/public_html/
scp /Users/vineethkondapally/dgtechinfra/tsconfig.json your_ssh_username@ssh.yourdomain.com:~/public_html/
```

### Step 7: Create .env.local on Server (in SSH terminal)

```bash
cat > ~/public_html/.env.local << 'EOF'
EMAIL_USER=info@dgtechinfra.com
EMAIL_PASSWORD=Vi9948146882
NODE_ENV=production
EOF
```

### Step 8: Install Dependencies (in SSH terminal)

```bash
cd ~/public_html
npm install --production
```

### Step 9: Start the Application

```bash
# Option 1: Direct start
npm start

# Option 2: Using PM2 (recommended for background process)
npm install -g pm2
pm2 start npm --name "dgtechinfra" -- start
pm2 startup
pm2 save
```

---

## ✅ Step-by-Step Summary (Option A - FTP)

**Timeframe**: 15-30 minutes

| Step | Action | Time |
|------|--------|------|
| 1 | Get FTP credentials from Hostinger | 2 min |
| 2 | Download FileZilla | 2 min |
| 3 | Connect to server via FTP | 2 min |
| 4 | Delete old files in `public_html` | 2 min |
| 5 | Upload `.next` folder | 5 min |
| 6 | Upload `public` folder | 2 min |
| 7 | Upload `node_modules` folder | 8 min |
| 8 | Upload JSON config files | 1 min |
| 9 | Create `.env.local` on server | 2 min |
| **Total** | | **~30 min** |

---

## ✅ Step-by-Step Summary (Option B - SSH)

**Timeframe**: 10-15 minutes (faster!)

| Step | Action | Time |
|------|--------|------|
| 1 | Get SSH credentials | 1 min |
| 2 | Connect via SSH | 1 min |
| 3 | Delete old files | 1 min |
| 4 | Upload files via SCP | 10 min |
| 5 | Create `.env.local` | 1 min |
| 6 | Install dependencies | 2 min |
| 7 | Start application | 1 min |
| **Total** | | **~17 min** |

---

## 🔍 Verification After Upload

### Check Files Uploaded

**Via FTP**: Open `public_html` in FileZilla and verify:
- ✅ `.next` folder exists
- ✅ `public` folder exists
- ✅ `node_modules` folder exists
- ✅ `package.json` file exists
- ✅ `.env.local` file exists

**Via SSH Terminal**:
```bash
ls -la ~/public_html/
# Should show: .next, public, node_modules, package.json, .env.local, etc.
```

### Test Website

1. Open browser and go to your domain: `https://yourdomain.com`
2. Verify homepage loads ✅
3. Test contact form:
   - Fill out form
   - Submit message
   - Check if email received
4. Check browser console for errors (F12)

---

## 🚨 Troubleshooting

### Problem: Website shows "404 Not Found"

**Solution**:
- Verify `.next` folder is in `public_html`
- Verify `package.json` is in `public_html`
- Restart the application

### Problem: "Cannot find module 'next'"

**Solution**:
```bash
# SSH into server and run
cd ~/public_html
npm install --production
```

### Problem: Contact form not sending emails

**Solution**:
- Verify `.env.local` has correct credentials
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` are correct
- Restart the application
- Check server logs for SMTP errors

### Problem: Logo not displaying

**Solution**:
- Verify `public/logo.png` exists in `public_html/public/`
- Check file permissions (should be readable)

### Problem: "Connection refused" or port errors

**Solution**:
- Verify port 3000 is open on server
- Ask Hostinger support about port availability
- Some hosts use different ports (3001, 8080, etc.)

---

## 📞 Hostinger Support

If you encounter issues:

1. **Hostinger Help Center**: https://support.hostinger.com/
2. **Contact Hostinger Support** through your Control Panel
3. **Common issues** they can help with:
   - Port configuration
   - Node.js version compatibility
   - SMTP settings
   - Domain configuration

---

## 🎯 Next Steps After Deployment

### 1. Monitor the Site
- Check that it stays online
- Monitor error logs
- Test contact form regularly

### 2. Set Up Auto-Restart
If the app crashes, set up PM2 auto-restart:
```bash
pm2 restart all --cron "0 0 * * *"  # Daily restart at midnight
```

### 3. Regular Updates
To update the website:
1. Update files locally
2. Test locally
3. Upload updated files to server
4. Restart application

### 4. Backup
- Regularly backup your Hostinger files
- Keep a backup of your `.env.local` credentials somewhere safe

---

## 📋 Deployment Checklist

Before going live, verify:

- [ ] Website tested locally ✅
- [ ] All files uploaded to Hostinger
- [ ] `.env.local` created on server with correct credentials
- [ ] Dependencies installed (`npm install --production`)
- [ ] Application started (or PM2 running)
- [ ] Domain points to hosting server
- [ ] Website accessible via domain
- [ ] Contact form tested and working
- [ ] Logo displays correctly
- [ ] SSL certificate active
- [ ] No browser console errors

---

## 🎉 You're Ready!

Your Dhriti Global website is ready to deploy to Hostinger. Choose either:

**Option A (FTP)** - Better for beginners, easier to use FileZilla GUI  
**Option B (SSH)** - Faster, more direct server access

Both will get your site live! 

**Questions?** Check the troubleshooting section above, or contact Hostinger support.

---

**Website Status**: Production Ready ✅  
**Last Updated**: April 20, 2026  
**Deployment Time**: 15-30 minutes estimated
