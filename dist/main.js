var Client;(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){if(console.log("::: Running checkForInput :::",t),""===t)return!1;/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(t)}async function o(t){t.preventDefault(),console.log("::: Form Submitted :::");let e=document.getElementById("txt").value;if(Client.checkForInput(e))try{await axios.get(`http://localhost:8080/sentimentAnalysis/${e}`).then((function(t){document.getElementById("results").innerHTML=`<div>confidence: ${t.data.confidence}<div>\n\t\t\t\t<div>agreement: ${t.data.agreement}<div>\n\t\t\t\t<div>irony: ${t.data.irony}<div>\n\t\t\t\t<div>model: ${t.data.model}<div>\n\t\t\t\t<div>score_tag: ${t.data.score_tag}<div>`}))}catch(t){console.log(t)}else alert("please enter a valid input")}t.r(e),t.d(e,{checkForInput:()=>n,handleSubmit:()=>o}),Client=e})();