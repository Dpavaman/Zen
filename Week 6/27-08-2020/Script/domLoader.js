!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function c(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var i,o=[],c=document.createElement("div");c.classList.add("row","container-fluid","gradient","scrollable"),c.style.overflow="scroll",document.body.appendChild(c);var s=document.createElement("div");s.classList.add("col-12","col-sm-12","col-md-4","col-lg-3","sideBar"),c.appendChild(s);var l=document.createElement("div");l.classList.add("col-lg-9","container"),c.appendChild(l);var d=document.createElement("div");l.appendChild(d);var u=document.createElement("form");d.appendChild(u);var p=document.createElement("input");p.type="text",p.id="searchBar",p.classList.add("searchBar"),u.appendChild(p),d.appendChild(u);var m=document.createElement("div");m.classList.add("mt-5","ml-5"),l.appendChild(m);var h=document.createElement("i");h.id="searchHere",h.style.cursor="pointer",h.onclick=function(){i=0;var e=document.getElementById("searchBar").value.split(" ").join("%20");S.getSuggestions(e)},h.classList.add("fa","fa-search"),h.onmouseover=function(){document.getElementById("searchBar").style.visibility="visible",document.getElementById("searchBar").style.border="1px solid white",document.getElementById("searchBar").style.width="60%"},p.onmouseleave=function(){document.getElementById("searchBar").style.visibility="hidden",document.getElementById("searchBar").style.width="0"},u.appendChild(h);var f=document.createElement("div");f.classList.add("col","logo"),f.innerHTML='<i class="fas fa-compact-disc"> <p class= "appName"> Rhythms <i class="support">Powered By Shazam API</i></p>',s.appendChild(f);var y=document.createElement("div");y.classList.add("row","container-fluid","options"),s.appendChild(y);var v=document.createElement("a");v.id="option-home",v.href="index.html",v.classList.add("col-12","text-center"),v.innerHTML='<i class="fas fa-home"> Home</i>',y.appendChild(v);var b=document.createElement("a");b.id="option-search",b.addEventListener("click",(function(){document.getElementById("searchHere").style.visibility="visible",document.getElementById("searchBar").style.visibility="visible",document.getElementById("searchBar").style.border="1px solid white",document.getElementById("searchBar").style.width="60%"})),b.classList.add("col-12","text-center"),b.innerHTML='<i class="fas fa-search"> Seach</i>',y.appendChild(b);var g=document.createElement("div");g.classList.add("row","container-fluid","fixed-bottom","playerControlDiv"),document.body.appendChild(g);var E=document.createElement("div");E.classList.add("col-3","col-sm-3","col-md-3","col-lg-3"),g.appendChild(E);var w=document.createElement("img");w.classList.add("img-thumbnail"),w.id="playerThumbnail",E.appendChild(w);var B=document.createElement("div");B.classList.add("col-9","col-sm-9","col-md-9","col-lg-9"),g.appendChild(B);var x=document.createElement("audio");x.classList.add("player"),x.setAttribute("controls","true"),x.id="currentSong",x.src="",B.appendChild(x);var C=function(){function e(){}return e.prototype.getSuggestions=function(e){return a(this,void 0,void 0,(function(){var t,n,a=this;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("https://shazam.p.rapidapi.com/auto-complete?locale=en-US&term="+e,{method:"GET",headers:{"x-rapidapi-host":"shazam.p.rapidapi.com","x-rapidapi-key":"a020e34646msh96884fedb5984f9p133e23jsnc8431ca634ff"}})];case 1:return[4,r.sent().json()];case 2:return 0!==(t=r.sent()).hints.length?t.hints.forEach((function(e){a.search(e.term)})):alert("Oops.. ! No Data Found.."),[3,4];case 3:return n=r.sent(),alert("https://shazam.p.rapidapi.com/auto-complete?locale=en-US&term="+e+" responded with a status of 429 (Too Many Requests), "+n),[3,4];case 4:return[2]}}))}))},e.prototype.search=function(e){return a(this,void 0,void 0,(function(){var t,n;return r(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,fetch("https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term="+e,{method:"GET",headers:{"x-rapidapi-host":"shazam.p.rapidapi.com","x-rapidapi-key":"a020e34646msh96884fedb5984f9p133e23jsnc8431ca634ff"}})];case 1:return[4,a.sent().json()];case 2:return t=a.sent(),m.innerHTML="",t.tracks.hits.forEach((function(e){o.push(e.track.hub.actions[1].uri),L()})),[3,4];case 3:return n=a.sent(),alert("https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term="+e+" responded with a status of 429 (Too Many Requests), "+n),[3,4];case 4:return[2]}}))}))},e}(),L=function(){i++,l.appendChild(document.createElement("br"));var e=document.createElement("img");e.id=""+i,e.classList.add("card-img","p-4"),e.alt="Artist Image Not (Available Currently)",e.src="https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2018/08/The-20-Best-Royalty-Free-Music-Sites-in-2018.png",e.style.cursor="pointer",e.style.width="200px",e.style.height="200px",e.onclick=function(){x.src=""+o[e.id],x.play()},m.appendChild(e)},S=new C}]);