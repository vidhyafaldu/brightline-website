
document.documentElement.classList.add('js');
const NIL=new Proxy(function(){},{get:(t,k)=>k==='classList'?{add(){},toggle(){},contains:()=>false}:k==='style'?{setProperty(){}}:NIL,set:()=>true,apply:()=>NIL});
const $=(s,r=document)=>r.querySelector(s)||NIL,$$=(s,r=document)=>[...r.querySelectorAll(s)];
const IMG={starter:'images/brightline-starter.svg',growth:'images/brightline-growth.svg',business:'images/brightline-business.svg',enterprise:'images/brightline-enterprise.svg'};
$('#hero').src=IMG.business;
const SV=[['🧭','Business Consulting','Strategy and planning to set clear direction and priorities.',['Market & process review','Growth roadmap','Technology advice']],
['🛠️','Web & App Development','Websites and mobile apps built to look great and work well.',['Custom websites','iOS & Android apps','E-commerce']],
['🎨','UI/UX Design','Simple, beautiful interfaces people enjoy using.',['User research','Wireframes & prototypes','Design systems']],
['📣','Digital Marketing','Reach the right customers with clear campaigns.',['SEO & content','Social media','Analytics & reporting']],
['☁️','Cloud Solutions','Secure, scalable infrastructure for your business.',['Cloud migration','Hosting & backups','Security monitoring']],
['🎧','Technical Support','Reliable help whenever you need it.',['Maintenance & updates','Monitoring','Helpdesk support']]];
const ND=[['🖥️','I need a Website',1],['📱','I need a Mobile App',1],['📈','I want More Customers',3],['🎨','I need UI/UX Design',2],['☁️','I need Cloud Solutions',4],['🛠️','I need Technical Support',5]];
const PK=[['Starter','New businesses','₹4,999',['5-page website','Mobile-friendly design','Basic SEO','Email support'],'Everything a new business needs to get online.'],
['Growth','Growing teams','₹12,999',['15-page website','Analytics dashboard','Marketing tools','Priority support'],'Tools to attract customers and track results.'],
['Business','Established companies','₹29,999',['Custom web or mobile app','Cloud hosting','Dedicated manager','Monthly reports'],'A complete solution across web, mobile and cloud.'],
['Enterprise','Large organizations','Custom quote',['Tailored solutions','Secure infrastructure','24/7 support','SLA guarantee'],'Large-scale custom systems with guaranteed support.']];
const PJ=[['Websites','Retail','FreshCart Store','E-commerce site with fast checkout and inventory sync.','Web · Payments · Analytics',0],
['Websites','Education','LearnLoop Academy','Course portal serving 10,000+ students.','Web · Video · CMS',1],
['Mobile Apps','Health','FitTrack App','Workout and nutrition tracking for iOS and Android.','iOS · Android · Cloud sync',2],
['Mobile Apps','Travel','RoamEasy','Trip planner with offline maps and bookings.','Mobile · Maps · Booking',1],
['Cloud','Logistics','RouteMaster Dashboard','Real-time fleet tracking and reporting.','Cloud · Dashboards · APIs',3],
['Business Solutions','Finance','InvoiceFlow','Automated billing and payment reminders.','Automation · Billing · Cloud',2]];
const TS=[['Priya Nair','Owner, FreshCart','Brightline delivered our store ahead of schedule and sales doubled in three months.'],
['Daniel Moore','Director, LearnLoop','Clear communication from day one. It felt like working with our own team.'],
['Sana Khan','Founder, FitTrack','The app design is beautiful and our users love it.'],
['Vikram Rao','COO, RouteMaster','Our dashboard saves us hours every day. A real game changer.'],
['Emily Clark','CEO, RoamEasy','Professional, honest and always there when we needed help.'],
['Arjun Mehta','CFO, InvoiceFlow','Fair pricing and excellent results. We will keep working together.']];
const FQ=[['How long does a project take?','Most websites take 3–6 weeks. Apps and custom solutions usually take 8–16 weeks depending on scope.'],
['How much does it cost?','Packages start at ₹4,999 per month. Custom work gets a fixed quote after a free consultation.'],
['Do you provide support after launch?','Yes. Every package includes support, and higher plans include priority or 24/7 help.'],
['Can I upgrade my package?','Absolutely. You can move to a higher plan at any time without losing your work.'],
['Who owns the final work?','You do. Once the project is paid for, all designs and code belong to you.'],
['How do I start?','Send us a message below and we will set up a free discovery call.']];
const IM=[IMG.starter,IMG.growth,IMG.business,IMG.enterprise];
const PKG=['Starter','Growth','Business','Enterprise'];
$('#sel').innerHTML=SV.map(s=>`<option>${s[1]}</option>`).join('');
{const q=new URLSearchParams(location.search);if(q.get('s')){$('#sel').value=q.get('s');if(q.get('m'))$('#ms').value=q.get('m')}}
$('#sv').innerHTML=SV.map(s=>`<div class="card"><div class="ico" aria-hidden="true">${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p><ul>${s[3].map(f=>`<li>${f}</li>`).join('')}</ul><button class="btn o" data-s="${s[1].replace(/&/g,'&amp;')}">Learn More</button></div>`).join('');
$('#nd').innerHTML=ND.map((n,i)=>`<button class="nd" aria-pressed="false" data-n="${i}"><span aria-hidden="true">${n[0]}</span>${n[1]}</button>`).join('');
$('#nd').onclick=e=>{const b=e.target.closest('[data-n]');if(!b)return;$$('.nd').forEach(x=>x.setAttribute('aria-pressed',x===b));const s=SV[ND[b.dataset.n][2]];
const p=$('#np');p.hidden=false;p.innerHTML=`<h3>${s[0]} ${s[1]}</h3><p>${s[2]}</p><ul>${s[3].map(f=>`<li>${f}</li>`).join('')}</ul><button class="btn" data-s="${s[1].replace(/&/g,'&amp;')}">Get a free quote</button>`;p.scrollIntoView({behavior:'smooth',block:'nearest'})};
$('#pk').innerHTML=PK.map((p,i)=>`<div class="card" data-p="${i}"><img class="pi" loading="lazy" src="${IM[i]}" alt="${p[0]} package illustration"><h3>${p[0]}</h3><p>For ${p[1].toLowerCase()}</p><div class="price">${p[2]}${i<3?'<small> /mo</small>':''}</div><ul>${p[3].map(f=>`<li>${f}</li>`).join('')}</ul><button class="btn${i==1?'':' o'}" data-s="Web &amp; App Development" data-m="I'm interested in the ${p[0]} package.">Choose ${p[0]}</button></div>`).join('');
$('#pp').innerHTML=PK.map((p,i)=>`<button class="chip" aria-pressed="false" data-c="${i}">${p[0]}</button>`).join('');
$('#pp').onclick=e=>{const b=e.target.closest('[data-c]');if(!b)return;const i=+b.dataset.c,p=PK[i];$$('#pp .chip').forEach(x=>x.setAttribute('aria-pressed',x===b));$$('#pk .card').forEach(c=>c.classList.toggle('pop',c.dataset.p==i));
$('#pd').innerHTML=`<b>${p[0]}</b> – ${p[4]} Best for ${p[1].toLowerCase()}. Includes: ${p[3].join(', ').toLowerCase()}.`};
let flt='All';const cats=['All','Websites','Mobile Apps','Cloud','Business Solutions'];
$('#pf').innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c=='All'}" data-f="${c}">${c}</button>`).join('');
function rp(){$('#pj').innerHTML=PJ.filter(p=>flt=='All'||p[0]==flt).map(p=>`<div class="card"><img class="pi" loading="lazy" src="${IM[p[5]]}" alt="${p[2]} project illustration"><span class="tag">${p[1]}</span><h3>${p[2]}</h3><p>${p[3]}</p><p><b>${p[4]}</b></p><a class="btn o" href="#contact">View Project</a></div>`).join('')}
$('#pf').onclick=e=>{const b=e.target.closest('[data-f]');if(!b)return;flt=b.dataset.f;$$('#pf .chip').forEach(x=>x.setAttribute('aria-pressed',x===b));rp()};rp();
$('#tm').innerHTML=TS.map(t=>`<div class="card"><p class="st" role="img" aria-label="5 out of 5 stars">★★★★★</p><p>“${t[2]}”</p><span class="av" aria-hidden="true">${t[0].split(' ').map(w=>w[0]).join('')}</span><b>${t[0]}</b><br><small>${t[1]}</small></div>`).join('');
$('#fq').innerHTML=FQ.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
$('#bs').oninput=e=>$('#ba').style.setProperty('--p',e.target.value+'%');
// Service finder
const FN=[['What type of business do you have?',['Retail','Education','Healthcare','Finance','Other']],['What do you need?',['Website','Mobile App','Marketing','Cloud','Design']],['What stage are you at?',['Starting','Growing','Established','Enterprise']]];
const NS={Website:'Web & App Development','Mobile App':'Web & App Development',Marketing:'Digital Marketing',Cloud:'Cloud Solutions',Design:'UI/UX Design'};
let st=0,ans=[];
function fr(){const f=$('#fd');
if(st<3){f.innerHTML=`<p class="eb">Step ${st+1} of 3</p><h3 tabindex="-1" id="fh">${FN[st][0]}</h3><div class="row" style="flex-wrap:wrap;overflow:visible">${FN[st][1].map(o=>`<button class="chip" aria-pressed="false" data-a="${o}">${o}</button>`).join('')}</div>${st?'<button class="btn o" data-b="1">Back</button>':''}`;}
else{const i=FN[2][1].indexOf(ans[2]),p=PK[i];f.innerHTML=`<p class="eb">Your recommended Brightline solution</p><h3 tabindex="-1" id="fh">${p[0]} package</h3><p>For a ${ans[0].toLowerCase()} business focused on ${ans[1].toLowerCase()} at the ${ans[2].toLowerCase()} stage, ${p[0]} is a great fit. ${p[4]}</p><ul>${p[3].map(x=>`<li>${x}</li>`).join('')}</ul><button class="btn" data-s="${NS[ans[1]].replace(/&/g,'&amp;')}" data-m="I'm interested in the ${p[0]} package.">Get Started</button><button class="btn o" data-r="1">Start over</button>`}
if(st||ans.length)$('#fh').focus({preventScroll:true})}
$('#fd').onclick=e=>{const a=e.target.closest('[data-a]');if(a){ans[st]=a.dataset.a;st++;fr()}
if(e.target.closest('[data-b]')){st--;fr()}if(e.target.closest('[data-r]')){st=0;ans=[];fr()}};fr();
// Go to contact with preselection
function go(s,m){if(!document.getElementById('contact')){location.href='contact.html?s='+encodeURIComponent(s.replace(/&amp;/g,'&'))+'&m='+encodeURIComponent(m||'');return}$('#sel').value=s.replace(/&amp;/g,'&');if(m)$('#ms').value=m;$('#contact').scrollIntoView({behavior:'smooth'});setTimeout(()=>$('#nm').focus({preventScroll:true}),500)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-s]');if(b){go(b.dataset.s,b.dataset.m);fp(false)}});
$('#cf').onsubmit=e=>{e.preventDefault();$('#ok').classList.add('on');e.target.reset();$('#sel').selectedIndex=0};
// Help panel
const fo=[['Website','Web & App Development'],['Mobile App','Web & App Development'],['Marketing','Digital Marketing'],['Cloud','Cloud Solutions'],['UI/UX','UI/UX Design'],['Support','Technical Support']];
$('#fo').innerHTML=fo.map(o=>`<button class="chip" data-s="${o[1].replace(/&/g,'&amp;')}" data-m="I'm interested in ${o[0]}.">${o[0]}</button>`).join('');
function fp(o){$('#fp').hidden=!o;$('#fb').setAttribute('aria-expanded',o)}
$('#fb').onclick=()=>fp($('#fp').hidden);$('#fc').onclick=()=>fp(false);
document.addEventListener('keydown',e=>{if(e.key=='Escape'){fp(false);nv(false)}});
// Mobile menu + active nav + reveal
function nv(o){$('#nav').classList.toggle('open',o);$('#mb').setAttribute('aria-expanded',o)}
$('#mb').onclick=()=>nv(!$('#nav').classList.contains('open'));$('#nav').onclick=e=>{if(e.target.tagName=='A')nv(false)};
if('IntersectionObserver' in window){
const ro=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');ro.unobserve(x.target)}}),{threshold:.1});
$$('section .card,section h2').forEach(x=>{x.classList.add('rv');ro.observe(x)});
}
