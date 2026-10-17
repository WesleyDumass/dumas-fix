// ===== CONFIGURE AQUI =====
const WHATS="5511973170343"; // DDI + DDD + número
const BRANDS={samsung:{n:"Samsung",c:"#1428A0",l:"SS"},motorola:{n:"Motorola",c:"#E1140A",l:"M"},apple:{n:"Apple",c:"#4a5568",l:"A"},xiaomi:{n:"Xiaomi",c:"#FF6900",l:"Mi"},realme:{n:"Realme",c:"#C99A00",l:"R"},outros:{n:"Outras marcas",c:"#5B6980",l:"+"}};
const PHONES=[
{b:"apple",m:"Iphome X",s:"128 GB · 4 GB RAM",p:899,o:1099,cond:"Semi-Novo",promo:1,c:["#38BDF8","#6366F1"]},
/*{b:"samsung",m:"Galaxy S21",s:"128 GB · 8 GB RAM",p:1590,cond:"Seminovo · bateria 90%",c:["#A78BFA","#EC4899"]},*/
/*{b:"samsung",m:"Galaxy A54",s:"256 GB · 8 GB RAM",p:1799,o:2100,cond:"Seminovo · como novo",promo:1,c:["#34D399","#0EA5E9"]},*/
{b:"motorola",m:"Moto G7 Play",s:"256 GB · 8 GB RAM",p:949,cond:"Semi-Novo",promo:1,c:["#F97316","#EF4444"]}
/*{b:"motorola",m:"Moto G84",s:"256 GB · 8 GB RAM",p:1190,o:1399,cond:"Novo",promo:1,c:["#6366F1","#14B8A6"]},
{b:"motorola",m:"Moto E22",s:"64 GB · 4 GB RAM",p:520,cond:"Seminovo",c:["#64748B","#0F172A"]},
{b:"apple",m:"iPhone 11",s:"64 GB",p:1850,cond:"Seminovo · bateria 85%",c:["#22C55E","#064E3B"]},
{b:"apple",m:"iPhone 12",s:"128 GB",p:2490,o:2790,cond:"Seminovo · como novo",promo:1,c:["#3B82F6","#1E3A8A"]},
{b:"apple",m:"iPhone 13",s:"128 GB",p:3190,cond:"Seminovo · bateria 92%",c:["#F472B6","#9D174D"]},
{b:"xiaomi",m:"Redmi Note 13",s:"128 GB · 6 GB RAM",p:1050,o:1249,cond:"Novo",promo:1,c:["#FBBF24","#F97316"]},
{b:"xiaomi",m:"Poco X6",s:"256 GB · 8 GB RAM",p:1590,cond:"Novo",c:["#FACC15","#1F2937"]},
{b:"realme",m:"Realme C55",s:"128 GB · 6 GB RAM",p:790,cond:"Novo",c:["#FDE047","#CA8A04"]}*/];
// ==========================
const brl=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const wa=t=>`https://wa.me/${WHATS}?text=${encodeURIComponent(t)}`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const card=x=>{const bn=BRANDS[x.b].n;return `<article class="card rv">${x.promo?'<span class="badge">PROMOÇÃO</span>':''}
<div class="mini" style="--c1:${x.c[0]};--c2:${x.c[1]}"><div>${esc(bn)}</div></div>
<h3>${esc(bn)} ${esc(x.m)}</h3><p class="spec">${esc(x.s)}</p><p class="cond">${esc(x.cond)}</p>
<div class="price">${brl(x.p)}${x.o?`<span class="old">${brl(x.o)}</span>`:''}</div>
<a class="btn sm" target="_blank" rel="noopener" href="${wa(`Olá! Tenho interesse no ${bn} ${x.m} de ${brl(x.p)}.`)}">Quero este</a></article>`};
const crack=`<svg viewBox="0 0 100 200" preserveAspectRatio="none" aria-hidden="true"><g stroke="#fff" stroke-width=".8" fill="none" opacity=".9"><path d="M64 30L48 80L28 98M48 80L60 130L44 176M48 80L74 92L96 70M60 130L78 150M28 98L8 88M44 176L34 198M64 30L56 52L38 58M74 92L80 116"/></g></svg>`;
const SL=Array.from({length:7},(_,i)=>`<i class="sl" style="transform:translateZ(${-2-i*2}px)"></i>`).join("");
function home(){
const promos=PHONES.filter(x=>x.promo);
return `<div class="story" id="story"><div class="stage"><div class="fog"></div><div class="fog b"></div><div class="floor"></div>
<div class="scene"><div class="phone" id="phone">${SL}<div class="back"></div>
<div class="face"><div class="scr"><div class="clock"><small>DUMAS-FIX</small>09:41</div><div class="glow"></div><div class="sheen"></div>${crack}</div></div></div></div>
<div class="smoke"><i></i><i></i><i></i></div><div class="copy"><div id="t0"><div class="k">Celulares · Assistência técnica</div><h1>Uma nova era em celulares</h1><p>Novos, seminovos e conserto na hora. Tudo testado e com garantia.</p><a class="btn" href="#/" data-s="promo">Ver promoções</a></div>
<div id="t1"><div class="k">Aconteceu?</div><h1>Tela quebrada não é o fim.</h1><p>Trocamos tela, bateria e conector no mesmo dia.</p></div>
<div id="t2"><div class="k">Pronto</div><h1>Como novo.</h1><p>Seu aparelho de volta, ou um novo com preço justo.</p><a class="btn" href="#/" data-s="marcas">Escolher meu celular</a></div></div>
<div class="hint">ROLE PARA BAIXO</div></div></div>

<section id="promo"><div class="wrap"><div class="k rv">Ofertas</div><h2 class="rv">Celulares em promoção</h2><p class="sub rv">Preço reduzido por tempo limitado. Todos testados e com garantia.</p><div class="grid">${promos.map(card).join("")}</div></div></section>

<section id="antes" class="alt"><div class="wrap"><div class="k rv">Reparos</div><h2 class="rv">Antes e depois</h2><p class="sub rv">Arraste a linha: tela quebrada à esquerda, tela trocada à direita.</p>
<div class="cmp rv" id="cmp"><span class="tag l">Antes</span><span class="tag r">Depois</span>
<div class="side after"><div class="mini" style="--c1:#38BDF8;--c2:#6366F1"><div>COMO NOVO</div></div></div>
<div class="side before"><div class="mini" style="--c1:#334155;--c2:#0f172a;position:relative"><div>QUEBRADA</div></div>${crack}</div>
<div class="bar"></div><input type="range" min="0" max="100" value="50" aria-label="Comparar antes e depois do conserto"></div>
<p class="cap">Exemplo ilustrativo. Troque pelas fotos reais dos seus trabalhos.</p></div></section>

<section id="marcas"><div class="wrap"><div class="k rv">Catálogo</div><h2 class="rv">Escolha a marca</h2><p class="sub rv">Clique para ver os celulares disponíveis para venda.</p>
<div class="arrows"><button aria-label="Anterior" data-d="-1">‹</button><button aria-label="Próxima" data-d="1">›</button></div>
<div class="car rv" id="car">${Object.entries(BRANDS).map(([k,v])=>`<a class="brand" href="#/marca/${k}"><span style="background:${v.c};--bc:${v.c}">${v.l}</span><strong>${v.n}</strong><small>${PHONES.filter(p=>p.b===k).length} disponíveis</small></a>`).join("")}</div></div></section>

<section id="sobre" class="alt"><div class="wrap two"><div class="rv"><div class="k">Quem somos</div><h2>Bancada de técnico, preço justo.</h2>
<p class="sub">A Dumas-fix nasceu da bancada de um técnico que cansou de ver gente pagar caro por um conserto simples. Hoje consertamos e vendemos celulares com peça de qualidade e garantia por escrito.</p>
<p class="sub">Todo aparelho à venda passa por teste completo de tela, bateria, câmeras, som e sinal.</p>
<a class="btn" target="_blank" rel="noopener" href="${wa('Olá! Gostaria de falar com a loja.')}">Falar com a loja</a></div>
<div class="svc rv"><div><strong>Troca de tela</strong><span>Display original ou compatível, pronto no mesmo dia.</span></div><div><strong>Troca de bateria</strong><span>Seu celular durando o dia todo de novo.</span></div><div><strong>Conector de carga e alto-falante</strong><span>Limpeza e troca de peças.</span></div><div><strong>Software e desbloqueio</strong><span>Atualização, formatação e recuperação de dados.</span></div><div><strong>Venda de novos e seminovos</strong><span>Aparelhos testados, com garantia.</span></div></div></div></section>`;}
function brand(k){const b=BRANDS[k];if(!b)return home();const l=PHONES.filter(x=>x.b===k);
return `<div class="wrap"><a class="back-l" href="#/">‹ VOLTAR AO INÍCIO</a><div class="pagehead"><span style="background:${b.c};--bc:${b.c}">${b.l}</span><div><h2 style="margin:0">Celulares ${esc(b.n)}</h2><p class="spec">${l.length} aparelho(s) disponível(is)</p></div></div>
${l.length?`<div class="grid">${l.map(card).join("")}</div>`:`<div class="empty">Nenhum aparelho desta marca agora. <a href="${wa('Olá! Procuro um celular '+b.n)}" target="_blank" rel="noopener">Chame no WhatsApp</a> e avisamos quando chegar.</div>`}<div style="height:70px"></div></div>`;}

const app=document.getElementById("app");let pending=null,io,cur=0;
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const trap=(p,a,b,c,d)=>cl((p-a)/(b-a))*cl((d-p)/(d-c));
function tick(){
const st=document.getElementById("story");if(!st)return;
const r=st.getBoundingClientRect(),tp=cl(-r.top/(st.offsetHeight-innerHeight));cur+=(tp-cur)*.06;if(Math.abs(tp-cur)<.0003)cur=tp;const p=cur,ph=document.getElementById("phone"),sm=innerWidth<820;
const ease=x=>x*x*(3-2*x);
ph.style.setProperty("--ry",(-30+ease(p)*390)+"deg");
ph.style.setProperty("--rx",(10-p*10+Math.sin(p*Math.PI*2)*4)+"deg");
ph.style.setProperty("--s",1+Math.sin(p*Math.PI)*.18);
ph.style.setProperty("--tx",sm?"0px":(Math.cos(p*Math.PI)*-1*22+22-(p>.5?0:0))+"vw");
ph.style.setProperty("--ck",1-cl((p-.5)/.15));
ph.style.setProperty("--gl",trap(p,.55,.72,.9,1)*.9);
ph.style.setProperty("--sh",(-100+cl((p-.6)/.35)*200)+"%");
st.style.setProperty("--hi",1-cl(p/.05));const sk=trap(p,.3,.46,.6,.8);st.style.setProperty("--sm",(sk*.85).toFixed(3));st.style.setProperty("--bl",(sk*6).toFixed(2)+"px");
const set=(id,o)=>{const e=document.getElementById(id);e.style.opacity=o;e.style.transform=`translateY(${(1-o)*20}px)`;e.style.pointerEvents=o>.5?"auto":"none"};
set("t0",1-cl((p-.08)/.1));set("t1",trap(p,.2,.3,.45,.55));set("t2",cl((p-.72)/.1));
}
function reveal(){io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".rv").forEach((e,i)=>{e.style.transitionDelay=(i%4)*70+"ms";io.observe(e)})}
function bind(){const c=document.getElementById("cmp");if(c){const i=c.querySelector("input");i.addEventListener("input",()=>c.style.setProperty("--p",i.value+"%"))}
document.querySelectorAll(".arrows button").forEach(b=>b.onclick=()=>document.getElementById("car").scrollBy({left:b.dataset.d*360,behavior:"smooth"}))}
function route(){const m=location.hash.replace(/^#\/?/,"").match(/^marca\/(\w+)/);
app.innerHTML=m?brand(m[1]):home();reveal();
if(m){scrollTo(0,0)}else{bind();tick();if(pending){const e=document.getElementById(pending);pending=null;e&&e.scrollIntoView()}else scrollTo(0,0)}}
document.addEventListener("click",e=>{const a=e.target.closest("[data-s]");if(!a)return;e.preventDefault();
if(!/marca\//.test(location.hash)){const t=document.getElementById(a.dataset.s);t&&t.scrollIntoView()}else{pending=a.dataset.s;location.hash="#/"}});
document.getElementById("wa-top").href=wa("Olá! Vim pelo site da Dumas-fix.");
(function L(){tick();requestAnimationFrame(L)})();
addEventListener("hashchange",route);route();
