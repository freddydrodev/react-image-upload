function e(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(e){if(Array.isArray(e))return e}function r(t){if(Array.isArray(t))return e(t)}function n(e,t,r,n,a,i,o){try{var l=e[i](o);var u=l.value}catch(e){r(e);return}if(l.done){t(u)}else{Promise.resolve(u).then(n,a)}}function a(e){return function(){var t=this,r=arguments;return new Promise(function(a,i){var o=e.apply(t,r);function l(e){n(o,a,i,l,u,"next",e)}function u(e){n(o,a,i,l,u,"throw",e)}l(undefined)})}}function i(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function o(e,t){if(t!=null&&typeof Symbol!=="undefined"&&t[Symbol.hasInstance]){return!!t[Symbol.hasInstance](e)}else{return e instanceof t}}function l(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function u(e,t){var r=e==null?null:typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r==null)return;var n=[];var a=true;var i=false;var o,l;try{for(r=r.call(e);!(a=(o=r.next()).done);a=true){n.push(o.value);if(t&&n.length===t)break}}catch(e){i=true;l=e}finally{try{if(!a&&r["return"]!=null)r["return"]()}finally{if(i)throw l}}return n}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};var n=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(t){i(e,t,r[t])})}return e}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t){n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}r.push.apply(r,n)}return r}function p(e,t){t=t!=null?t:{};if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}else{m(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function d(e,t){if(e==null)return{};var r=g(e,t);var n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++){n=i[a];if(t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;r[n]=e[n]}}return r}function g(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var a,i;for(i=0;i<n.length;i++){a=n[i];if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function v(e,r){return t(e)||u(e,r)||y(e,r)||s()}function b(e){return r(e)||l(e)||y(e)||c()}function h(e){"@swc/helpers - typeof";return e&&typeof Symbol!=="undefined"&&e.constructor===Symbol?"symbol":typeof e}function y(t,r){if(!t)return;if(typeof t==="string")return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor)n=t.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}function w(e,t){var r,n,a,i,o={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),"throw":l(1),"return":l(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return u([e,t])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,n&&(a=i[0]&2?n["return"]:i[0]?n["throw"]||((a=n["return"])&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;if(n=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:o.label++;return{value:i[1],done:false};case 5:o.label++;n=i[1];i=[0];continue;case 7:i=o.ops.pop();o.trys.pop();continue;default:if(!(a=o.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){o=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(i[0]===6&&o.label<a[1]){o.label=a[1];a=i;break}if(a&&o.label<a[2]){o.label=a[2];o.ops.push(i);break}if(a[2])o.ops.pop();o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e];n=0}finally{r=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}}import*as j from"react";import x from"dropzone";import{useDropzone as I}from"react-dropzone";import{useMount as S}from"react-use";import{styled as O}from"@stitches/react";var E=O("div",{display:"flex",flexDirection:"column",border:"1px dashed #e0e0e0"}),k=O("div",{display:"flex",flexDirection:"column",gap:"15px",border:0,padding:0,variants:{isDisabled:{true:{cursor:"auto"},false:{cursor:"pointer"}}}}),C=O("h2",{fontWeight:700,fontSize:"2rem",lineHeight:"1em",textAlign:"center",margin:0,marginTop:"15px"}),P=O("p",{fontWeight:500,fontSize:"1rem",lineHeight:"1.3em",textAlign:"center",margin:0}),z=O("p",{fontSize:"0.75rem",lineHeight:"1.66",textAlign:"center",margin:0,color:"rgba(0, 0, 0, 0.5)",variants:{hasError:{true:{color:"#d32f2f",fontSize:"0.8rem"},false:{color:"inherit"}}}}),A=O("div",{display:"grid",maxHeight:380,gridTemplateColumns:"repeat(var(--grid-columns, 3), 1fr)",gap:"var(--image-gap, 10px)",variants:{gridColumns:{value:{"--grid-columns":"var(--grid-columns-value, 3)","--image-gap":"var(--image-gap-value, 10px)"}}},defaultVariants:{gridColumns:"value"}}),R=O("div",{position:"relative",width:"100%",height:"100%",borderRadius:"var(--image-border-radius-value, 15px)",overflow:"hidden","& img":{width:"100%",height:"100%",objectFit:"cover",borderRadius:"var(--image-border-radius-value, 15px)"},variants:{singleImage:{true:{maxWidth:"400px",margin:"0 auto"}}}}),M=O("button",{width:32,height:32,borderRadius:"50%",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0,boxShadow:"none",variants:{color:{default:{backgroundColor:"#f44336",color:"#ffffff"}}}}),W=O("div",{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",borderRadius:"15px",zIndex:10,position:"absolute",top:0,left:0,backgroundColor:"rgba(255,255,255,0)",backdropFilter:"blur(0)",transition:"all linear 0.25s",opacity:0,"&:hover":{backgroundColor:"rgba(255,255,255,0.25)",backdropFilter:"blur(5px)",opacity:1}});x.autoDiscover=!1;var D=function(e){return e?(typeof e==="undefined"?"undefined":h(e))=="object"&&"value"in e?{value:e.value,message:e.message}:{value:e}:{value:void 0}},L={maxSize:{value:5*1024*1024,message:"File size must be less than 5MB"},maxFiles:{value:1,message:"Maximum 1 file allowed"},accepted:{value:"image/*",message:"Only image files are accepted"}},F=function(e,t){var r=D(t.maxSize),n=r.value,a=r.message,i=D(t.accepted),o=i.value,l=i.message;if(n&&e.size>n)return a!==null&&a!==void 0?a:"File size must be less than ".concat((n/(1024*1024)).toFixed(1),"MB");if(o){var u;var s=Array.isArray(o)?o.map(function(e){return e.toLowerCase()}):[o.toLowerCase()],c=".".concat((u=e.name.split(".").pop())===null||u===void 0?void 0:u.toLowerCase()),f=e.type.toLowerCase();if(!s.some(function(e){return e==="image/*"?f.startsWith("image/"):e===c||e===f}))return l!==null&&l!==void 0?l:"File type not accepted. Accepted types: ".concat(s.join(", "))}return null},V=function(e){var t=e.images,r=t===void 0?[]:t,n=e.onImagesChanged,l=e.rules,u=l===void 0?L:l,s=e.label,c=s===void 0?"Images":s,m=e.description,g=e.validate,h=e.deleteIcon,y=e.deleteBtnColor,x=y===void 0?"#f44336":y,O=e.deleteIconColor,V=O===void 0?"#ffffff":O,G=e.renderImage,H=e.hideTitle,Z=H===void 0?!1:H,T=e.sectionGap,U=T===void 0?"15px":T,N=e.imageGap,Q=N===void 0?"10px":N,J=e.imageGridCount,_=J===void 0?3:J,X=e.imageBorderRadius,Y=X===void 0?"15px":X,q=e.style,$=e.className,K=e.message,ee=e.hasError,et=ee===void 0?!1:ee,er=d(e,["images","onImagesChanged","rules","label","description","validate","deleteIcon","deleteBtnColor","deleteIconColor","renderImage","hideTitle","sectionGap","imageGap","imageGridCount","imageBorderRadius","style","className","message","hasError"]);var en=D(u.maxFiles),ea=en.value,ei=en.message,eo=D(u.maxSize),el=eo.value,eu=eo.message,es=D(u.accepted),ec=es.value,ef=v(j.useState(r),2),em=ef[0],ep=ef[1],ed=v(j.useState([]),2),eg=ed[0],ev=ed[1],eb=v(j.useState(null),2),eh=eb[0],ey=eb[1],ew=v(j.useState(!1),2),ej=ew[0],ex=ew[1],eI=j.useCallback(function(){var e=em.map(function(e){if(typeof e=="string")return e;if(e.type&&e.type.startsWith("image/"))return URL.createObjectURL(e);{var t;var r=(t=e.name.split(".").pop())===null||t===void 0?void 0:t.toLowerCase(),n="image/jpeg";if(r)switch(r){case"jpg":case"jpeg":n="image/jpeg";break;case"png":n="image/png";break;case"gif":n="image/gif";break;case"webp":n="image/webp";break;case"svg":n="image/svg+xml";break;default:n="image/jpeg"}var a=new File([e],e.name,{type:n});return URL.createObjectURL(a)}});ev(e)},[em]);S(function(){eI()}),j.useEffect(function(){eI()},[em,eI]),j.useEffect(function(){return function(){eg.forEach(function(e){e.startsWith("blob:")&&URL.revokeObjectURL(e)})}},[eg]),j.useEffect(function(){if(!g)return;a(function(){var e,t;return w(this,function(r){switch(r.label){case 0:ex(!0);r.label=1;case 1:r.trys.push([1,3,4,5]);return[4,g(em)];case 2:e=r.sent();ey(e);return[3,5];case 3:t=r.sent();ey(o(t,Error)?t.message:"Validation failed");return[3,5];case 4:ex(!1);return[7];case 5:return[2]}})})()},[em,g]);var eS=I({accept:ec?typeof ec=="string"?i({},ec,[]):ec.reduce(function(e,t){var r=t;if(t.startsWith("."))switch(t.toLowerCase()){case".jpg":case".jpeg":r="image/jpeg";break;case".png":r="image/png";break;case".gif":r="image/gif";break;case".webp":r="image/webp";break;default:r=t}return p(f({},e),i({},r,[]))},{}):{"image/*":[]},minSize:0,maxSize:el,maxFiles:ea,multiple:ea!==1,onDropRejected:function e(e,t){var r=e.map(function(e){var t=e.file,r=e.errors[0];return r.code==="file-too-large"?eu!==null&&eu!==void 0?eu:"".concat(t.name," is too large. Maximum size is ").concat((el/1048576).toFixed(1),"MB"):r.code==="file-invalid-type"?"".concat(t.name," has an invalid type"):r.code==="too-many-files"?ei!==null&&ei!==void 0?ei:"Maximum ".concat(ea," file").concat(ea===1?"":"s"," allowed"):r.message}).filter(function(e,t,r){return r.indexOf(e)===t});ey(r.join("\n"))},onDrop:function(e){if(ey(null),ea&&em.length+e.length>ea){ey(ei!==null&&ei!==void 0?ei:"Maximum ".concat(ea," file").concat(ea===1?"":"s"," allowed"));return}var t=e.map(function(e){return F(e,u)}).filter(function(e){return e!==null});if(t.length>0){ey(t.join("\n"));return}var r=e.map(function(e){var t;if(e.type&&e.type.startsWith("image/"))return e;var r=(t=e.name.split(".").pop())===null||t===void 0?void 0:t.toLowerCase(),n="image/jpeg";if(r)switch(r){case"jpg":case"jpeg":n="image/jpeg";break;case"png":n="image/png";break;case"gif":n="image/gif";break;case"webp":n="image/webp";break;case"svg":n="image/svg+xml";break;default:n="image/jpeg"}return new File([e],e.name,{type:n})}),a=b(em).concat(b(r.filter(function(e){return em.filter(function(t){return typeof t=="string"?!1:t.name===e.name}).length===0})));ep(a),n&&n(a)}}),eO=eS.getRootProps,eE=eS.getInputProps;j.useEffect(function(){ep(r)},[r]);var ek=ea?em.length>=ea:!1,eC=115;var eP;return j.createElement(E,{className:$,style:q},j.createElement(k,p(f({},ek?{}:eO({className:"dropzone"})),{isDisabled:ek}),j.createElement("input",f({},eE())),!Z&&j.createElement(C,null,c),!ek&&j.createElement(P,null,m!==null&&m!==void 0?m:"Vous pouvez ajouter les images en cliquant ici."),em.length>0&&j.createElement(A,{gridColumns:"value",style:{"--grid-columns-value":_,"--image-gap-value":Q,"--image-border-radius-value":Y}},em.map(function(e,t){var r=typeof e=="string",a=eg[t]||(r?e:"");if(a==="")return null;var i={src:a!==null&&a!==void 0?a:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNhYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBQcmV2aWV3PC90ZXh0Pjwvc3ZnPg==",width:eC,height:eC,style:f({objectFit:"cover"},ea===1?{}:{width:"100%",height:"100%"}),alt:r?e:e.name};return j.createElement(R,{key:t.toString(),singleImage:ea===1},G?G(i):j.createElement("img",f({},i)),j.createElement(W,null,j.createElement(M,{color:"default",onClick:function(t){var a=b(em.filter(function(t){return(typeof t=="string"?t:t.name)!==(r?e:e.name)}));ep(a),n(a),t.stopPropagation()}},h!==null&&h!==void 0?h:j.createElement(B,null))))})),j.createElement(z,{hasError:!!eh||et},et?K!==null&&K!==void 0?K:"An error occurred":ej?"Validating...":(eP=eh!==null&&eh!==void 0?eh:K)!==null&&eP!==void 0?eP:"Files up to ".concat((el!==null&&el!==void 0?el:5*1024*1024)/(1024*1024),"MB, max ").concat(ea," files, accepted formats: ").concat(Array.isArray(ec)?ec.join(", "):ec))))},B=function(){return j.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-trash",viewBox:"0 0 16 16"},j.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),j.createElement("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"}))};import{getDownloadURL as G,ref as H,uploadBytesResumable as Z}from"firebase/storage";import{nanoid as T}from"nanoid";var U=/*#__PURE__*/function(){var e=a(function(e){var t,r,n,a,i,o,l,u,s,c,f,m,p;return w(this,function(d){switch(d.label){case 0:t=e.file,r=e.storage,n=e.isProd,a=n===void 0?!1:n,i=e.path,o=i===void 0?"Images":i;if(typeof t=="string")return[2,{url:t,fileId:""}];l=o.endsWith("/")?o.slice(0,-1):o;l.trim().length||(l="Images");u=t.name.split(".").pop(),s="".concat(a?"PROD":"DEV","/").concat(l,"/").concat(T(),".").concat(u),c=H(r,s),f=Z(c,t);return[4,f];case 1:d.sent();return[4,G(f.snapshot.ref)];case 2:m=d.sent(),p=f.snapshot.ref.fullPath;return[2,{url:m,fileId:p}]}})});return function t(t){return e.apply(this,arguments)}}();var N=V;export{V as ReactImagePicker,N as default,U as uploadImageToFirebase};//# sourceMappingURL=index.mjs.map