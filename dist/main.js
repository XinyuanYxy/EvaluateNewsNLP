var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){console.log("::: Running checkForName :::",e);["Picard","Janeway","Kirk","Archer","Georgiou"].includes(e)&&alert("Welcome, Captain!")}async function o(e){e.preventDefault(),console.log("::: Form Submitted :::");let t=document.getElementById("name").value;Client.checkForName(t);try{await axios.get(`http://localhost:8080/sentimentAnalysis/${t}`).then((function(e){document.getElementById("results").innerHTML=`<div>confidence: ${e.data.confidence}<div>\n\t\t\t<div>agreement: ${e.data.agreement}<div>\n\t\t\t<div>irony: ${e.data.irony}<div>\n\t\t\t<div>model: ${e.data.model}<div>\n\t\t\t<div>score_tag: ${e.data.score_tag}<div>`}))}catch(e){console.log(e)}}e.r(t),e.d(t,{checkForName:()=>n,handleSubmit:()=>o}),Client=t})();