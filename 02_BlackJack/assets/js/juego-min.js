const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["A","J","Q","K"],l=[],a=document.querySelector("#btnPedir"),n=document.querySelector("#btnDetener"),s=document.querySelector("#btnNuevo"),d=document.querySelectorAll(".divCartas"),o=document.querySelectorAll("small"),i=(t=2)=>{e=u(),l=[];for(let r=0;r<t;r++)l.push(0);o.forEach(e=>e.innerText=0),d.forEach(e=>e.innerHTML=""),a.disabled=!1,n.disabled=!1},u=()=>{e=[];for(let l=2;l<=10;l++)for(let a of t)e.push(l+a);for(let n of t)for(let s of r)e.push(s+n);return _.shuffle(e)},c=()=>{if(0===e.length)throw"No hay mas cartas en el deck";return e.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},f=(e,t)=>(l[t]=l[t]+$(e),o[t].innerText=l[t],l[t]),h=(e,t)=>{let r=document.createElement("img");r.src=`assets/cartas/${e}.png`,r.classList.add("carta"),d[t].append(r)},b=()=>{let[e,t]=l;setTimeout(()=>{t===e?alert("Es un empate"):e>21?alert("Computadora gana"):t>21?alert("Jugador gana"):alert("Computadora gana")},100)},g=e=>{let t=0;do{let r=c();t=f(r,l.length-1),h(r,l.length-1)}while(t<e&&e<=21);b()};return a.addEventListener("click",()=>{let e=c(),t=f(e,0);h(e,0),t>21?(console.warn("Lo siento... perdiste"),a.disabled=!0,n.disabled=!0,g(t)):21===t&&(console.warn("Tines 21"),a.disabled=!0,n.disabled=!0,g(t))}),n.addEventListener("click",()=>{a.disabled=!0,n.disabled=!0,g(l[0])}),s.addEventListener("click",()=>{i()}),{nuevoJuego:i}})();







