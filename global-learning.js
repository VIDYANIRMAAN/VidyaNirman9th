/* Vidya Nirman learning tracker. Additive only; does not alter existing lesson/quiz code. */
(() => {
 const page = location.pathname.split('/').pop() || 'index.html';
 const title = document.title || page;
 const localKey = 'vn-learning-v1';
 const now = () => new Date().toISOString();
 const readLocal = () => { try { return JSON.parse(localStorage.getItem(localKey) || '{"visits":[],"quiz":[],"ai":[],"notes":[]}'); } catch { return {visits:[],quiz:[],ai:[],notes:[]}; } };
 const saveLocal = d => { try { localStorage.setItem(localKey, JSON.stringify(d)); } catch {} };
 let data = readLocal();
 const add = (kind, item) => { data = readLocal(); data[kind] = Array.isArray(data[kind]) ? data[kind] : []; data[kind].unshift(item); data[kind] = data[kind].slice(0,200); saveLocal(data); window.dispatchEvent(new CustomEvent('vn-learning-updated')); };
 const isQuest = /quest/i.test(page);
 add('visits',{page,title,at:now()});
 // Capture AI study exchanges without blocking the site's existing chat flow.
 if (window.fetch) {
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (...args) => {
   const res = await originalFetch(...args);
   try {
    const req = args[0]; const url = typeof req === 'string' ? req : (req && req.url) || '';
    if (/\/api\/chat(?:\?|$)/.test(url) && args[1] && args[1].body) {
     const body = JSON.parse(args[1].body); const copy = res.clone();
     copy.json().then(result => {
      const question = body.message || body.prompt || body.question || body.text || '';
      const answer = result.reply || result.response || result.answer || result.message || '';
      if (question || answer) add('ai',{page,at:now(),question:String(question).slice(0,3000),answer:typeof answer==='string'?answer.slice(0,5000):JSON.stringify(answer).slice(0,5000)});
     }).catch(()=>{});
    }
   } catch {}
   return res;
  };
 }
 // Record interactions on quiz pages as activity, without guessing correctness or scores.
 if (isQuest) {
  document.addEventListener('click', e => {
   const b=e.target && e.target.closest && e.target.closest('button'); if(!b) return;
   const label=(b.innerText || b.getAttribute('aria-label') || b.title || 'Quiz interaction').trim().slice(0,180);
   if (!label || /sign in|sign out|dashboard/i.test(label)) return;
   add('quiz',{page,title,at:now(),action:label});
  }, true);
 }
 window.VN_LEARNING = {
  getData: () => readLocal(),
  saveNote: (text, subject='General') => { if(!String(text||'').trim()) return false; add('notes',{id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),subject:String(subject).slice(0,80),text:String(text).slice(0,12000),at:now()}); return true; },
  deleteNote: id => { data=readLocal(); data.notes=(data.notes||[]).filter(n=>n.id!==id); saveLocal(data); window.dispatchEvent(new CustomEvent('vn-learning-updated')); },
  clearHistory: kind => { data=readLocal(); if(['visits','quiz','ai'].includes(kind)) data[kind]=[]; saveLocal(data); window.dispatchEvent(new CustomEvent('vn-learning-updated')); }
 };
})();
