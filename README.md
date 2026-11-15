This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Automated dependency maintenance

Dependabot checks npm packages and GitHub Actions weekly, and GitHub security advisories can open security update pull requests. The CI workflow tests updates on Node.js 22 with `npm audit`, lint, TypeScript, and a production build. Dependabot pull requests are queued for auto-merge only after those checks pass.

To enable hands-off merging, allow auto-merge in the repository's **Settings → General → Pull Requests**. Also enable **Dependabot alerts** and **Dependabot security updates** under **Settings → Code security and analysis**. Major upgrades are auto-merged if the same checks pass; those checks cannot guarantee every runtime behavior.

## WhatsApp update notifications

The `WhatsApp notifications` workflow sends a message after CI completes for a push to `main`. It reports the commit title, branch, triggering GitHub user, CI result, short commit SHA, and commit link. It also supports a manual test from **Actions → WhatsApp notifications → Run workflow**.

This uses Meta's WhatsApp Cloud API and an approved template. Create the template in WhatsApp Manager with:

- Name: `dgtechinfra_code_update`
- Language: `English (US)` (`en_US`)
- Category: request `Utility`; Meta makes the final classification
- Body: `DG Techinfra code update. Change: {{1}}. Branch: {{2}}. By: {{3}}. CI: {{4}}. Commit: {{5}}. Details: {{6}}`
- Add sample values for all six variables when submitting for review, for example: `Website redesign`, `main`, `vineethkondapally`, `success`, `abc1234`, `https://github.com/vineethkondapally/dgtechinfra/commit/abc1234`.

### Meta setup and access token

1. Follow Meta's [Cloud API quickstart](https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started) to register as a developer and create an app using the WhatsApp use case. In the app's WhatsApp API Setup, connect a WhatsApp Business account and add/verify a sender. A test sender can only message recipients allowed in the test setup.
2. In WhatsApp Manager, create and submit the template above for approval. Ensure the recipient has opted in to receive these notifications from DG Techinfra, as required by [WhatsApp's opt-in policy](https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in).
3. In Meta Business Settings, create an **Employee** system user. Assign the app and grant it access to the relevant WhatsApp account and its linked Messaging account. Generate a **System User access token** for that app with the permissions listed in Meta's [access-token guide](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens): `business_management`, `whatsapp_business_management`, and `whatsapp_business_messaging`. Do not use the temporary token from the quickstart. Choose an expiration you can manage and rotate the token before it expires.
4. In the GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret** and add:
   - `META_WA_CREDENTIAL`: the system-user access token
   - `META_WA_PHONE_NUMBER_ID`: the sender's phone number ID shown in Meta API Setup (not the displayed phone number)
   - `META_WA_RECIPIENT`: the recipient number in international format, digits only (country code plus number; no `+`, spaces, or hyphens)
5. Run **Actions → WhatsApp notifications → Run workflow** to test. If the secrets are not present, the workflow safely skips sending. The workflow pins Graph API `v27.0`; update that endpoint version when migrating to a newer supported version.

Create and copy the access token only in Meta's dashboard, then paste it directly into the `META_WA_CREDENTIAL` GitHub Secret. Never put credentials in source code, workflow logs, issues, or chat. Restrict write access to the repository and protect `main`; the notification workflow does not check out or execute repository code.
