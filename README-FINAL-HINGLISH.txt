VIDYA NIRMAN — FINAL ADDITIVE UPGRADE

Is package mein original website ke existing lesson/quiz pages, written content, images, logo, animations/videos aur AI integration preserve kiye gaye hain. Naye files/features add kiye gaye hain; original learning pages ko rewrite ya remove karne ka aim nahi hai.

NEW ADDITIONS
- study-hub.html: Study Hub with subject shortcuts, daily study plan, focus timer, quick revision flashcards, session checklist.
- manifest.webmanifest + vn-icon-192.png + vn-icon-512.png: installable web app metadata/icons.
- sw.js: small offline shell cache for main pages; large videos and third-party APIs are deliberately not cached.
- Existing HTML pages link the manifest and register the service worker.
- Shared account chip includes a Study Hub shortcut.
- Existing student dashboard, auth files and learning tracker remain included.

IMPORTANT REALITY CHECK
- This ZIP has not been deployed to GitHub Pages and live Google/email sign-in has not been verified from this package.
- Supabase URL/public browser key are in auth-config.js from the prior setup. Browser publishable/anon keys are designed to be public; NEVER place service_role or sb_secret keys in website files. If you no longer trust the key, rotate it in Supabase and update auth-config.js.
- Notes/study plan/activity use browser localStorage unless separate cloud-sync code is explicitly configured and tested. Local data does not automatically follow a learner to another device.
- A service worker/PWA install prompt depends on HTTPS, browser support, and cache availability. Offline mode is intentionally limited; the full AI and all videos will not work offline.
- Never delete the existing GitHub repository first. Create/download a backup, then upload files to the repository root and review the diff before committing.

DEPLOY CHECKLIST
1. Backup the existing GitHub repository.
2. Extract this ZIP; open the VidyaNirman9th-main folder. Upload its CONTENTS into the repository root (not the parent folder).
3. Review the changed-file list. Existing lesson HTML files include only additive manifest/service-worker tags plus the existing account/tracker integrations.
4. Commit and wait for GitHub Pages deployment.
5. Test: homepage, Biology, Physics, Chemistry, each quiz, AI chat, /auth.html, /dashboard.html and /study-hub.html on desktop and phone.
6. Test email signup, email confirmation, Google OAuth and password reset before announcing accounts to students. Confirm Supabase URL Configuration includes https://vidyanirman.online/auth.html and the appropriate redirect paths.
7. If a test fails, revert the commit from GitHub; keep your backup.

STUDENT PRIVACY
- Study plan, checklist, notes and activity are stored in the current browser by default. Do not store passwords or sensitive personal data in notes.
- Use an appropriate privacy notice before inviting students, and do not collect student personal data unnecessarily.
