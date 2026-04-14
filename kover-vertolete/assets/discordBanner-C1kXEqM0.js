import"./html2canvas.esm-DZbuWhpW.js";import{m as y,x as w}from"./titleClipCore-froKsCI3.js";import{c as E,e as C,d as F}from"./gifExport-DlEZNaTM.js";const a=680,p=240,f=Math.round(w*10)/10;function b(){return new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>e())})})}function I(){const e=document.getElementById("root");if(!e)throw new Error("#root");e.innerHTML=`
    <div class="discord-tools-page">
      <header class="discord-tools-header">
        <a class="discord-tools-back" href="./">← Retour au jeu</a>
        <h1>Bannière animée Discord (680×240)</h1>
        <p>
          Aperçu de l’écran d’accueil (titre, explosions, étoiles, Hind qui tourne). Export GIF <strong>680×240 px</strong> (format bannière de profil Discord Nitro — ratio <strong>17∶6</strong>).
          Un tour complet du fuselage (yaw) dure <strong>~${f.toFixed(1)}&nbsp;s</strong> — durée par défaut ci‑dessous pour une boucle GIF sans saut sur l’hélico.
          <a href="./discord-avatar.html" style="color:#88aaff;margin-left:0.35rem">Outil avatar →</a>
        </p>
      </header>
      <div class="discord-tools-controls">
        <label>Durée (s) <input type="number" id="dur" min="1" max="90" step="0.5" value="${f.toFixed(1)}" /></label>
        <label>IPS <input type="number" id="fps" min="6" max="20" step="1" value="12" /></label>
        <button type="button" class="discord-tools-btn" id="export">Exporter le GIF</button>
      </div>
      <p class="discord-tools-status" id="status"></p>
      <p class="discord-banner-dim" aria-hidden="true">Cadre export : 680 × 240 px</p>
      <div class="discord-preview-wrap">
        <div class="discord-banner-scale" id="banner-scale">
          <div id="banner-stage"></div>
        </div>
      </div>
    </div>
  `;const n=e.querySelector("#banner-stage");n.className="discord-banner-stage";const{disposeHeli:h}=y(n,{showCredits:!1}),r=e.querySelector("#status"),i=e.querySelector("#export"),g=e.querySelector("#dur"),v=e.querySelector("#fps"),o=e.querySelector("#banner-scale"),c=()=>{const d=Math.min(window.innerWidth-24,a),s=Math.min(1,d/a);o.style.transform=`scale(${s})`};c(),window.addEventListener("resize",c),i.addEventListener("click",async()=>{const d=Math.max(.5,Number(g.value)||4),s=Math.max(6,Math.min(20,Math.round(Number(v.value)||12))),u=Math.max(1,Math.round(d*s));i.disabled=!0,r.textContent="Capture… (peut prendre un peu de temps)";const m=[],x=o.style.transform;try{o.style.transform="none",await b();for(let l=0;l<u;l++)r.textContent=`Capture ${l+1} / ${u}…`,await b(),m.push(await E(n,a,p,{scale:2}));r.textContent="Encodage GIF…";const t=C(m,{width:a,height:p,fps:s});F(new Blob([t],{type:"image/gif"}),"kover-vertolet-banner-discord.gif"),r.textContent="Terminé — fichier téléchargé."}catch(t){console.error(t),r.textContent=`Erreur : ${t instanceof Error?t.message:String(t)}`}finally{o.style.transform=x,i.disabled=!1}}),window.addEventListener("beforeunload",()=>{h()})}I();
