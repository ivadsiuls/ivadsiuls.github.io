(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const b="#fff",x=1,h=.2,u=100,v=(window.innerWidth+window.innerHeight)/8,m=document.querySelector("canvas"),r=m.getContext("2d");let d=1,s,c,p=[],i={x:0,y:0,tx:0,ty:0,z:5e-4};w();g();y();window.onresize=g;document.onmouseleave=I;function w(){for(let e=0;e<v;e++)p.push({x:0,y:0,z:h+Math.random()*(1-h)})}function z(e){e.x=Math.random()*s,e.y=Math.random()*c}function M(e){let o="z",a=Math.abs(i.x),l=Math.abs(i.y);if(a>1||l>1){let t;a>l?t=Math.random()<a/(a+l)?"h":"v":t=Math.random()<l/(a+l)?"v":"h",t==="h"?o=i.x>0?"l":"r":o=i.y>0?"t":"b"}e.z=h+Math.random()*(1-h),o==="z"?(e.z=.1,e.x=Math.random()*s,e.y=Math.random()*c):o==="l"?(e.x=-100,e.y=c*Math.random()):o==="r"?(e.x=s+u,e.y=c*Math.random()):o==="t"?(e.x=s*Math.random(),e.y=-100):o==="b"&&(e.x=s*Math.random(),e.y=c+u)}function g(){d=window.devicePixelRatio||1,s=window.innerWidth*d,c=window.innerHeight*d,m.width=s,m.height=c,p.forEach(z)}function y(){r.clearRect(0,0,s,c),L(),S(),requestAnimationFrame(y)}function L(){i.tx*=.96,i.ty*=.96,i.x+=(i.tx-i.x)*.8,i.y+=(i.ty-i.y)*.8,p.forEach(e=>{e.x+=i.x*e.z,e.y+=i.y*e.z,e.x+=(e.x-s/2)*i.z*e.z,e.y+=(e.y-c/2)*i.z*e.z,e.z+=i.z,(e.x<-100||e.x>s+u||e.y<-100||e.y>c+u)&&M(e)})}function S(){p.forEach(e=>{r.beginPath(),r.lineCap="round",r.lineWidth=x*e.z*d,r.globalAlpha=.5+.5*Math.random(),r.strokeStyle=b,r.beginPath(),r.moveTo(e.x,e.y);var o=i.x*2,a=i.y*2;Math.abs(o)<.1&&(o=.5),Math.abs(a)<.1&&(a=.5),r.lineTo(e.x+o,e.y+a),r.stroke()})}function I(){}console.log("wyd vro");document.querySelector("#app").innerHTML=`
<div id="main" class="main-fade-in">
        <img class="pfp" src="https://raw.githubusercontent.com/ivadsiuls/ivadsiuls.github.io/refs/heads/main/public/pfp.png" alt="pfpImage"  width="256px" height="256px">
        <p class="name-header" >Hey, I'm</p>
        <p class="name" ><b>ivadsiuls</b></p>
        <p class="desc-header">programming for <b style="  background-image: linear-gradient(rgb(255, 255, 255), rgb(0, 0, 255)); color: transparent; background-clip: text;">6 years</b></p>
        <p class="paragraph desc" >i'm a self-taught game dev/programmer
          <br>
          who occasionally makes fun and high-quality.
          <br>
          I use platforms like Godot and Roblox to make my games,
          <br>
          but I've recently expanded my reach into different engines.
          <br><br><br><br>
          It's pronounced EvadSIuls</p>
      </div>
      <div id="dev-icons">
        <a target="_blank" href="https://luau.org" ><img class="fade-in" src="https://luau.org/assets/images/luau-88.png" alt="Luau" width="64px" height="64px" ></a>
        <a target="_blank" href="https://go.dev/" ><img class="fade-in" src="https://skillicons.dev/icons?i=go" alt="Golang" width="64px" height="64px" ></a>
        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" ><img class="fade-in" src="https://skillicons.dev/icons?i=javascript" alt="Golang" width="64px" height="64px" ></a>
      </div>
      <div id="social-icons">
        <a target="_blank" href="https://github.com/ivadsiuls" class="github-icon" ><img class="fade-in" style="border-radius: 100%;" src="https://skillicons.dev/icons?i=github" alt="Github" width="64px" height="64px" ></a>
        <a target="_blank" href="https://youtube.com/@ivadsiuls" class="youtube-icon" ><img class="fade-in" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png" alt="Youtube" width="64px" height="64px" ></a>
        <a target="_blank" href="https://roblox.com/users/5048508312/profile" class="roblox-icon" ><img class="fade-in" style="border-radius: 100%;" src="https://imgs.search.brave.com/YGjqu3vGpPDkI8DD1nKoVQZ0DxMIVzjI5ziicuYckk0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNmL2Q1/L2I0LzNmZDViNGI4/ZmIyYzNiNmE4NDcz/ZDcyODg3ZDM3ZWE5/LmpwZw" alt="Roblox" width="64px" height="64px" ></a>
      </div>
`;
