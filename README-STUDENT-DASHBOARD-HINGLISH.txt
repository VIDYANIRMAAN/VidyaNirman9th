VIDYA NIRMAN — STUDENT PORTAL ADD-ON (HINGLISH)

IMPORTANT: Ye ZIP existing configured website se banaya gaya hai. Existing lesson pages, videos, quiz pages, logo, theme, AI endpoints aur assets ko replace/rewrite nahi kiya gaya. New student dashboard aur learning tracker add kiye gaye hain. Live website par koi change/deploy automatically nahi hua.

ZIP MEIN KYA ADD HAI
- dashboard.html: student dashboard, page visit summary, saved revision notes, quiz interaction history, AI chat history (jab existing API response compatible ho).
- global-learning.js: lightweight tracker; existing pages ka content change nahi karta.
- Dashboard link: signed-in users ko existing floating account pill par Dashboard link dikhega.
- Existing auth.html + global-auth.js integration retained.
- OPTIONAL-cloud-sync-schema.sql: future cloud sync ke liye optional database schema only; current dashboard local browser storage use karta hai.

PLEASE NOTE (honest limitation)
- Sign-in session same-origin pages par shared hai.
- Notes/history abhi usi browser/device ke localStorage mein save hote hain; dusre phone/laptop par automatic sync nahi hoga. Is ZIP mein cloud database sync claim nahi kiya gaya.
- Quiz tracker interactions log karta hai, marks/correctness guess nahi karta.
- AI history existing chat endpoint ke response format ke compatible hone par capture hoti hai.
- auth-config.js mein included browser publishable key public client key type hai; kabhi bhi Supabase service_role/sb_secret key publish mat karna. Agar is key ko secret key samajhkar kabhi share kiya ho to Supabase dashboard mein verify karo.

INSTALL (SABSE SAFE TAREEQA)
1. Pehle apni GitHub repository ka backup/download ZIP bana lo.
2. ZIP ko extract karo. Folder ke andar VidyaNirman9th-main kholna.
3. GitHub repo ke existing files ko delete mat karna. Pehle GitHub par branch bana sakte ho, ya original repo ka backup rakho.
4. Is ZIP ke folder se files upload karo. Ye original files ke updated copies + naye files hain. GitHub Pages mein files root par honi chahiye, extra nested folder nahi.
5. Commit ke baad deployment complete hone do. Pehle https://vidyanirman.online/auth.html par sign-in test karo, phir https://vidyanirman.online/dashboard.html kholo.
6. Existing Supabase URL Configuration mein Site URL https://vidyanirman.online aur Redirect URL https://vidyanirman.online/** confirm karo.
7. Agar GitHub upload ke baad kuch issue ho, backup se revert karo; live deployment automatic is ZIP se nahi hua.

CONFIG
auth-config.js mein project URL/key pehle se set hain. Agar tumhare Supabase project ka URL ya public publishable/anon key badal gaya ho, Notepad se file edit karo. JS file ko double-click karke run nahi karna.

FUTURE UPGRADE
Real cross-device notes/history ke liye database schema aur app sync functions ko enable/test karna hoga. SQL file is optional groundwork; ise run karne se current local dashboard apne aap cloud sync nahi banega.
