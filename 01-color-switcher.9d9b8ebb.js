const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");console.dir(t);let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(r),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.9d9b8ebb.js.map