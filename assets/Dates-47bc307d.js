import{E as e}from"./index-e5203b7d.js";let c;const a=new Uint8Array(16);function d(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(a)}const r=[];for(let n=0;n<256;++n)r.push((n+256).toString(16).slice(1));function y(n,t=0){return r[n[t+0]]+r[n[t+1]]+r[n[t+2]]+r[n[t+3]]+"-"+r[n[t+4]]+r[n[t+5]]+"-"+r[n[t+6]]+r[n[t+7]]+"-"+r[n[t+8]]+r[n[t+9]]+"-"+r[n[t+10]]+r[n[t+11]]+r[n[t+12]]+r[n[t+13]]+r[n[t+14]]+r[n[t+15]]}const D=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),i={randomUUID:D};function s(n,t,o){if(i.randomUUID&&!t&&!n)return i.randomUUID();n=n||{};const u=n.random||(n.rng||d)();if(u[6]=u[6]&15|64,u[8]=u[8]&63|128,t){o=o||0;for(let m=0;m<16;++m)t[o+m]=u[m];return t}return y(u)}class Y{static NewsDate(t){return e(t).format("DD-MM-YYYY")}static newTime(t){return e(t).format("HH:MM")}static Monthago(t){return e(t).fromNow()}static currentDate(t){return e(t).format("DD-MM-YYYY HH:mm")}static current(){return e().format("DD-MM-YYYY HH:mm")}static Date(t){return e(t).format("DD-MM-YYYY HH:mm")}static orderNow(){return e().format("yyyymmDD")}static Number(){const t=e().format("yyyyMMDD"),o=s().replace(/-/g,"").substring(0,8);return`${t}${o}`}}export{Y as D};
