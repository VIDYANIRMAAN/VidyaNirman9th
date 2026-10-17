VIDYA NIRMAN GLOBAL SIGN-IN — SETUP (HINGLISH)

Is ZIP mein website pages ke saath shared Supabase login integration add ki gayi hai. Live website par kuch deploy nahi kiya gaya.

1) auth-config.js kholo.
2) VN_SUPABASE_URL mein Supabase Project URL paste karo.
3) VN_SUPABASE_ANON_KEY mein Supabase Publishable key (ya legacy anon public key) paste karo.
4) Service role / sb_secret key yahan KABHI mat paste karna.
5) Save karke poori VidyaNirman9th-main folder ki files GitHub repository ke root mein upload/commit karo. Existing files ko replace karne se pehle backup rakhna.
6) Supabase Authentication > URL Configuration mein Site URL https://vidyanirman.online aur Redirect URLs mein https://vidyanirman.online/** confirm karo. Google provider enabled hona chahiye.
7) GitHub Pages deploy hone ke baad https://vidyanirman.online/auth.html open karke email signup/login aur Google login test karo. Email confirmation on hai, isliye signup ke baad inbox/spam mein link check karo.

What was changed in this prepared ZIP:
- Added auth.html (email signup/sign-in, Google OAuth, password reset request).
- Added auth-config.js (placeholders; credentials are not included).
- Added global-auth.js (shared sign-in/sign-out pill).
- Added the shared auth script references to the site's existing HTML pages.
- Existing page content, logo, assets and Render AI endpoint were otherwise kept as-is.

Important: No GitHub commit or deployment was performed. The ZIP must be configured with your public Supabase URL/key before publishing. Password-reset completion flow may require a small follow-up screen depending on your current Supabase email template settings.
