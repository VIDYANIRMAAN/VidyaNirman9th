/* Vidya Nirman shared sign-in widget. Supabase sessions persist on the same origin. */
(() => {
  const url = window.VN_SUPABASE_URL;
  const key = window.VN_SUPABASE_ANON_KEY;
  const configured = typeof url === 'string' && url.startsWith('https://') &&
    typeof key === 'string' && key.length > 20 && !key.includes('PASTE_YOUR_');
  const css = `
  #vn-auth-chip{position:fixed;z-index:99999;right:16px;top:16px;display:flex;align-items:center;gap:8px;max-width:calc(100vw - 32px);padding:9px 12px;border:1px solid rgba(212,175,55,.7);border-radius:999px;background:rgba(25,3,8,.95);color:#fff9e6;font:600 12px/1.2 Arial,sans-serif;box-shadow:0 8px 24px #0005;backdrop-filter:blur(10px)}
  #vn-auth-chip button,#vn-auth-chip a{border:0;border-radius:999px;padding:8px 12px;background:linear-gradient(135deg,#ffd700,#d4af37);color:#220308;text-decoration:none;font-weight:800;cursor:pointer;white-space:nowrap}
  #vn-auth-chip .vn-muted{background:transparent;border:1px solid #d4af37;color:#ffe9a0}
  #vn-auth-chip #vn-auth-name{max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  @media(max-width:480px){#vn-auth-chip{top:10px;right:10px;padding:6px 8px;gap:5px;font-size:11px}#vn-auth-chip #vn-auth-name{max-width:90px}#vn-auth-chip button,#vn-auth-chip a{padding:7px 9px}}
  `;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
  const chip = document.createElement('div'); chip.id='vn-auth-chip'; chip.setAttribute('aria-live','polite');
  chip.innerHTML = '<span id="vn-auth-name">Vidya Nirman</span><a id="vn-study-link" class="vn-muted" href="study-hub.html" title="Study Hub">Study Hub</a><a id="vn-dashboard-link" class="vn-muted" href="dashboard.html" title="Student dashboard">Dashboard</a><a id="vn-auth-action" href="auth.html">Sign in</a>'; 
  const dash = chip.querySelector('#vn-dashboard-link');
  document.body.appendChild(chip);
  const action = chip.querySelector('#vn-auth-action');
  const name = chip.querySelector('#vn-auth-name');
  const next = encodeURIComponent(location.pathname + location.search + location.hash);
  action.href = 'auth.html?next=' + next;
  if (!configured || !window.supabase || !window.supabase.createClient) {
    name.textContent = 'VN Account';
    action.textContent = 'Set up sign-in';
    action.title = 'Add Supabase project URL and publishable key in auth-config.js';
    return;
  }
  const client = window.supabase.createClient(url, key, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storage: window.localStorage }
  });
  window.VN_AUTH = client;
  async function render(session) {
    if (session && session.user) {
      dash.style.display = 'inline-block';
      name.textContent = session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email || 'Signed in';
      action.textContent = 'Sign out'; action.href='#';
      action.onclick = async (e) => { e.preventDefault(); action.textContent='Signing out…'; const {error}=await client.auth.signOut(); if(error){action.textContent='Retry sign out'; alert(error.message);} else { location.reload(); } };
    } else {
      dash.style.display = 'none';
      name.textContent='Vidya Nirman'; action.textContent='Sign in'; action.href='auth.html?next='+next; action.onclick=null;
    }
  }
  client.auth.getSession().then(({data})=>render(data.session));
  client.auth.onAuthStateChange((_event, session)=>render(session));
})();
