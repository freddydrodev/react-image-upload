function e(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(e){if(Array.isArray(e))return e}function r(t){if(Array.isArray(t))return e(t)}function n(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function o(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function i(e,t){var r=e==null?null:typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r==null)return;var n=[];var o=true;var i=false;var a,l;try{for(r=r.call(e);!(o=(a=r.next()).done);o=true){n.push(a.value);if(t&&n.length===t)break}}catch(e){i=true;l=e}finally{try{if(!o&&r["return"]!=null)r["return"]()}finally{if(i)throw l}}return n}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};var o=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}o.forEach(function(t){n(e,t,r[t])})}return e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t){n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,n)}return r}function f(e,t){t=t!=null?t:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}else{u(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function s(e,r){return t(e)||i(e,r)||p(e,r)||a()}function m(e){return r(e)||o(e)||p(e)||l()}function p(t,r){if(!t)return;if(typeof t==="string")return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor)n=t.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}import*as b from"react";import g from"dropzone";import{Fab as y,Stack as d,Typography as v}from"@mui/material";import{useDropzone as h}from"react-dropzone";import O from"@mui/icons-material/DeleteOutlineRounded";g.autoDiscover=!1;var j=function(e){var t=e.initImage,r=e.onImageChange,n=e.maxFiles,o=n===void 0?5:n,i=e.label,a=e.description;var l=s(b.useState(t!==null&&t!==void 0?t:[]),2),u=l[0],p=l[1],g=h({accept:{"image/*":[]},minSize:1024,maxFiles:o,multiple:o!==1,onDropRejected:function e(e,t){console.log(e,t);var r=e.length>1?"Fichiers ont \xe9t\xe9 r\xe9fus\xe9s":"Fichier a \xe9t\xe9 r\xe9fus\xe9";alert("".concat(e.length," ").concat(r,"."))},onDrop:function(e){var t=m(u).concat(m(e.map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}).filter(function(e){return u.filter(function(t){return typeof t=="string"?!1:t.name===e.name}).length===0})));p(t),r&&r(t)}}),j=g.getRootProps,w=g.getInputProps;b.useEffect(function(){return function(){u.forEach(function(e){return URL.revokeObjectURL(e.preview)})}},[u]),console.log(u);var x=u.length>=o,E="1fr 1fr 1fr",S=100;return o===1&&(E="1fr",S=200),o===2&&(E="1fr 1fr",S=160),b.createElement(d,{sx:{"& .dropzone":{border:0,p:0}}},b.createElement(d,f(c({},x?{}:j({className:"dropzone"})),{spacing:2,sx:{cursor:x?"auto":"pointer"}}),b.createElement("input",c({},w())),b.createElement(v,{fontWeight:700,fontSize:"2rem",lineHeight:"1em",textAlign:"center"},i!==null&&i!==void 0?i:"Images"),b.createElement(v,{fontWeight:500,fontSize:"1rem",lineHeight:"1.3em",textAlign:"center"},a!==null&&a!==void 0?a:x?"Vous avez ajout\xe9 le maximum d'Images possible":"Vous pouvez ajouter les images en cliquant ici."),b.createElement(d,{display:"grid",sx:{gridTemplateColumns:E,gap:"15px"}},u.map(function(e){var t=typeof e=="string"?{name:e,preview:e}:e,n=typeof t=="string"?t:t.preview;return b.createElement(d,{sx:{width:S,height:S,borderRadius:1,overflow:"hidden",position:"relative",margin:o===1?"auto":0},key:n},b.createElement("img",{src:n,width:S,height:S,style:{objectFit:"cover"},alt:typeof t=="string"?t:t.name}),b.createElement(d,{alignItems:"center",justifyContent:"center",sx:{width:S,height:S,borderRadius:1,zIndex:10,position:"absolute",top:0,left:0,bgcolor:"rgba(255,255,255,0)",backdropFilter:"blur(0)",transition:"all linear 0.25s",opacity:0,"&:hover":{bgcolor:"rgba(255,255,255,0.25)",backdropFilter:"blur(5px)",opacity:1}}},b.createElement(y,{size:"small",color:"secondary",sx:{boxShadow:"none"},onClick:function(e){var n=m(u.filter(function(e){return(typeof e=="string"?e:e.name)!==t.name}));p(n),r(n),e.stopPropagation()}},b.createElement(O,null))))})),b.createElement(v,{variant:"caption",textAlign:"center"},"Le nombre maximum d'image est ",o)))},w=j;export{w as default};//# sourceMappingURL=index.mjs.map