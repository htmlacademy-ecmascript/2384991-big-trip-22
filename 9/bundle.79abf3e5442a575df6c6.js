(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);i&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),e.push(c))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",d="quarter",c="year",u="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",_={};_[g]=m;var $=function(t){return t instanceof S},b=function t(e,n,i){var s;if(!e)return g;if("string"==typeof e){var r=e.toLowerCase();_[r]&&(s=r),n&&(_[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;_[a]=e,s=a}return!i&&s&&(g=s),s||!i&&g},C=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},M=y;M.l=b,M.i=$,M.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return C(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<C(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,d=!!M.u(e)||e,h=M.p(t),p=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return d?i:i.endOf(o)},f=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return d?p(1,0):p(31,11);case l:return d?p(1,v):p(0,v+1);case a:var _=this.$locale().weekStart||0,$=(m<_?m+7:m)-_;return p(d?y-$:y+(6-$),v);case o:case u:return f(g+"Hours",0);case r:return f(g+"Minutes",1);case s:return f(g+"Seconds",2);case i:return f(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,d=M.p(t),h="set"+(this.$u?"UTC":""),p=(a={},a[o]=h+"Date",a[u]=h+"Date",a[l]=h+"Month",a[c]=h+"FullYear",a[r]=h+"Hours",a[s]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[d],f=d===o?this.$D+(e-this.$W):e;if(d===l||d===c){var m=this.clone().set(u,1);m.$d[p](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(n,d){var u,h=this;n=Number(n);var p=M.p(d),f=function(t){var e=C(h);return M.w(e.date(e.date()+Math.round(t*n)),h)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===o)return f(1);if(p===a)return f(7);var m=(u={},u[s]=t,u[r]=e,u[i]=1e3,u)[p]||1,v=this.$d.getTime()+n*m;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},u=function(t){return M.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:c(n.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:u(1),hh:u(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,u,h){var p,f=M.p(u),m=C(n),v=(m.utcOffset()-this.utcOffset())*t,y=this-m,g=M.m(this,m);return g=(p={},p[c]=g/12,p[l]=g,p[d]=g/3,p[a]=(y-v)/6048e5,p[o]=(y-v)/864e5,p[r]=y/e,p[s]=y/t,p[i]=y/1e3,p)[f]||y,h?g:M.a(g)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return _[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),w=S.prototype;return C.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",c],["$D",u]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,S,C),t.$i=!0),C},C.locale=b,C.isDayjs=$,C.unix=function(t){return C(1e3*t)},C.en=_[g],C.Ls=_,C.p={},C}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,c={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},u=function(t){return t instanceof g},h=function(t,e,n){return new g(t,n,e.$l)},p=function(t){return e.p(t)+"s"},f=function(t){return t<0},m=function(t){return f(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},y=function(t,e){return t?f(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},g=function(){function f(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*c[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(d);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=f.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*c[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=y(this.$d.years,"Y"),e=y(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=y(n,"D"),s=y(this.$d.hours,"H"),r=y(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=y(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,d=s.format||r.format||a.format?"T":"",c=(l?"-":"")+"P"+t.format+e.format+i.format+d+s.format+r.format+a.format;return"P"===c||"-P"===c?"P0D":c},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/c[p(t)]},v.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/c[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*c[p(e)]:u(t)?t.$ms:h(t,this).$ms,h(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return h(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},f}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return h(t,{$l:n},e)},s.isDuration=u;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return u(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return u(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],d=i.base?l[0]+i.base:l[0],c=r[d]||0,u="".concat(d," ").concat(c);r[d]=c+1;var h=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=s(p,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),d=0;d<r.length;d++){var c=n(r[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),d=n(216),c=n.n(d),u=n(589),h=n.n(u),p=n(10),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=c(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const m="afterbegin";function v(t,e,n="beforeend"){if(!(t instanceof $))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function y(t,e){if(!(t instanceof $&&e instanceof $))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}function g(t){if(null!==t){if(!(t instanceof $))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}const _="shake";class ${#t=null;constructor(){if(new.target===$)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(_),setTimeout((()=>{this.element.classList.remove(_),t?.()}),600)}}class b extends ${get template(){return'<ul class="trip-events__list"></ul>'}}const C=["Paris","Amsterdam","Berlin","London","Chamonix","Geneva","Prague"],M=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],S=["1","2","3"],w=["Day","Event","Time","Price","Offers"],E=["is a city that never sleeps, vibrant with round-the-clock activity.","is a regional gem, offering a rich tapestry of cultural landmarks.","boasts an eclectic mix of historic charm and modern vitality.","is known for its stunning skyline and bustling streets.","is a haven for foodies, with a culinary scene as diverse as its population.","is the crossroads of tradition and innovation, home to renowned museums and cutting-edge galleries.","is a city of green spaces, from serene parks to lively recreation areas."],k={DAY:"day",TIME:"time",PRICE:"price"},D="VIEWING",T="EDITING";class P extends ${#e=null;constructor({onSortTypeChange:t}){super(),this.#e=t,this.element.addEventListener("change",this.#n)}get template(){return(()=>{const t=Object.keys(k).map((t=>k[t].toLowerCase()));return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  ${w.map((e=>{const n=e.toLowerCase(),i=t.includes(n);return`\n      <div class="trip-sort__item  trip-sort__item--${n}">\n        <input\n          id="sort-${n}"\n          class="trip-sort__input  visually-hidden"\n          type="radio"\n          name="trip-sort"\n          value="sort-${n}"\n          ${i?`data-sort-type="${n}"`:""}\n          ${i?"":"disabled"}\n          ${"day"===n?"checked":""} >\n        <label class="trip-sort__btn" for="sort-${n}">${e}</label>\n      </div>`})).join("")}\n</form>`})()}#n=t=>{"INPUT"===t.target.tagName&&(t.preventDefault(),this.#e(t.target.dataset.sortType))}}class A extends ${get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}var H=n(484),x=n.n(H);const O=t=>x()(t).format("DD/MM/YY HH:mm"),F=t=>x()(t).format("MMM DD").toUpperCase(),I=t=>x()(t).format("HH:mm"),L=t=>x()(t.dateTo).diff(x()(t.dateFrom)),B=(t,e)=>e.basePrice-t.basePrice,Y=(t,e)=>{const n=L(t);return L(e)-n},N=(t,e)=>x()(t.dateFrom).diff(x()(e.dateFrom));var j=n(646),U=n.n(j);x().extend(U());class W extends ${#i=null;#s=null;#r=null;#o=null;#a=null;constructor({point:t,destination:e,offers:n,onEditClick:i,onFavoriteClick:s}){super(),this.#i=t,this.#s=e,this.#r=n,this.#o=i,this.#a=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#d)}get template(){return((t,e,n)=>{const{dateFrom:i,dateTo:s,type:r,basePrice:o,isFavorite:a}=t,{name:l}=e,d=(t=>t.length>0?t.map((t=>`<li class="event__offer">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>`)).join(""):"")(n),c=x().duration(x()(s).diff(x()(i))),u=`${c.days()>0?`${c.days()}D `:""}${c.hours()>0?`${c.hours()}H `:""}${c.minutes()}M`,h=a?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${F(i)}">${F(i)}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${r}.png" alt="Event ${r} icon">\n    </div>\n    <h3 class="event__title">${r} ${l}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${I(i)}">${I(i)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="${I(s)}">${I(s)}</time>\n      </p>\n      <p class="event__duration">${u}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${o}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n    ${d}\n    </ul>\n    <button class="event__favorite-btn ${h}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`})(this.#i,this.#s,this.#r)}#l=t=>{t.preventDefault(),this.#o()};#d=t=>{t.preventDefault(),this.#a()}}class q extends ${_state={};updateElement(t){t&&(this._setState(t),this.#c())}_restoreHandlers(){throw new Error("Abstract method not implemented: restoreHandlers")}_setState(t){this._state=structuredClone({...this._state,...t})}#c(){const t=this.element,e=t.parentElement;this.removeElement();const n=this.element;e.replaceChild(n,t),this._restoreHandlers()}}const Z=t=>t[Math.floor(Math.random()*t.length)],z=t=>Math.floor(Math.random()*t),J=()=>Math.random()>=.5,R=()=>{let t=0;return function(){return t+=1,t}},V=t=>t.charAt(0).toUpperCase()+t.slice(1),X=(t,e)=>t.map((t=>t.id===e.id?e:t));class K extends q{#i=null;#s=null;#r=null;#u=null;#h=null;#p=null;#f=null;#m=null;#o=null;#v=null;constructor({point:t,destination:e,offers:n,checkedOffers:i,allDestinations:s,onFormSubmit:r,onEditClick:o,pointsModel:a}){super(),this._setState(K.parsePointToState(t)),this.#s=e,this.#r=n,this.#u=i,this.#h=s,this.#m=r,this.#o=o,this.#v=a,this._restoreHandlers()}get template(){return((t,e,n,i)=>{const{dateFrom:s,dateTo:r,type:o,id:a,basePrice:l}=t,{name:d,description:c,pictures:u}=e,{offers:h}=n,p=n&&h&&h.length>0,f=p?((t,e)=>t.map((t=>{const{id:n,title:i,price:s}=t;return`\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n}" type="checkbox" name="event-offer-${n}" ${e.map((t=>t.id)).includes(t.id)?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${n}">\n          <span class="event__offer-title">${i}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${s}</span>\n        </label>\n      </div>\n    `})).join(""))(n.offers,i):"";return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n<header class="event__header">\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-${a}">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/${o}.png" alt="Event ${o} icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${a}" type="checkbox">\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${m=o,M.map(((t,e)=>`\n    <div class="event__type-item">\n      <input id="event-type-${e}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}" ${t===m?"checked":""}>\n      <label class="event__type-label  event__type-label--${t}" for="event-type-${e}">${V(t)}</label>\n    </div>\n  `)).join("")}\n      </fieldset>\n    </div>\n  </div>\n  <div class="event__field-group  event__field-group--destination">\n  <label class="event__label  event__type-output" for="event-destination-${e.id}">\n  ${V(o)}\n  </label>\n    <input class="event__input  event__input--destination" id="event-destination-${e.id}" type="text" name="event-destination" value="${d}" list="destination-list-${e.id}">\n    <datalist id="destination-list-${e.id}">\n      ${C.map((t=>`<option value="${t}"></option>`)).join("")}\n    </datalist>\n  </div>\n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-${a}">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-${a}" type="text" name="event-start-time" value="${O(s)}">\n    &mdash;\n    <label class="visually-hidden" for="event-end-time-${a}">To</label>\n    <input class="event__input  event__input--time" id="event-end-time-${a}" type="text" name="event-end-time" value="${O(r)}">\n  </div>\n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-${a}">\n      <span class="visually-hidden">Price</span>\n      &euro;\n    </label>\n    <input class="event__input  event__input--price" id="event-price-${a}" type="number" name="event-price" value="${l}">\n  </div>\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Delete</button>\n  <button class="event__rollup-btn" type="button">\n    <span class="visually-hidden">Open event</span>\n  </button>\n</header>\n<section class="event__details">\n${p?`\n<section class="event__section  event__section--offers">\n  <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n  <div class="event__available-offers">${f}</div>\n</section>\n`:""}\n  <section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${c}</p>\n    <div class="event__photos-container">\n      <div class="event__photos-tape">\n      ${u.map((({description:t,src:e})=>`<img class="event__photo" src="${e}" alt="${t}">`)).join("")}\n      </div>\n    </div>\n  </section>\n</section>\n</form>\n</li>`;var m})(this._state,this.#s,this.#r,this.#u)}reset(t){this.updateElement(K.parsePointToState(t))}removeElement(){super.removeElement()}_restoreHandlers(){this.element.querySelector(".event--edit")?.addEventListener("submit",this.#y),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#l),this.element.querySelector(".event__input--price").addEventListener("input",this.#g),this.element.querySelector(".event__input--destination").addEventListener("change",this.#_),this.element.querySelector(".event__type-group").addEventListener("change",this.#$),this.element.querySelector(".event__available-offers")?.addEventListener("change",this.#b)}#y=t=>{t.preventDefault(),this.#m(K.parseStateToPoint(this._state))};#l=t=>{t.preventDefault(),this.#o()};#g=t=>{t.preventDefault(),this._setState({basePrice:t.target.value})};#_=t=>{if(t.preventDefault(),"INPUT"===t.target.tagName){const e=this.#h.find((e=>e.name===t.target.value));this.updateElement({...this._state,destination:e.id})}};#$=t=>{t.preventDefault();const e=t.target.value,n=this.#v.getOfferByType(e)?.offers||[];this.updateElement({...this._state,type:e,offers:n})};#b=t=>{"INPUT"===t.target.tagName&&(t.target.checked?this._setState({offers:[...this._state.offers,t.target.dataset.offerId]}):(this._setState({offers:this._state.offers.filter((e=>e!==t.target.dataset.offerId))}),this.updateElement(this._state.offers)))};static parsePointToState(t){return{...t}}static parseStateToPoint(t){return{...t}}}class G{#C=null;#v=null;#M=null;#S=null;#w=null;#E=null;#i=null;#k=D;constructor({container:t,pointsModel:e,onDataChange:n,onModeChange:i}){this.#C=t,this.#v=e,this.#M=n,this.#S=i}init(t){this.#i=t;const e=this.#w,n=this.#E;this.#w=new W({point:this.#i,destination:this.#v.getDestinationById(this.#i.destination),offers:[...this.#v.getOfferById(this.#i.type,this.#i.offers)],onEditClick:this.#D,onFavoriteClick:this.#a}),this.#E=new K({point:this.#i,destination:this.#v.getDestinationById(this.#i.destination),checkedOffers:[...this.#v.getOfferById(this.#i.type,this.#i.offers)],offers:this.#v.getOfferByType(this.#i.type),allDestinations:this.#v.destinations,onFormSubmit:this.#m,onEditClick:this.#T,pointsModel:this.#v}),null!==e&&null!==n?(this.#k===D&&y(this.#w,e),this.#k===T&&y(this.#E,n),g(e),g(n)):v(this.#w,this.#C)}destroy(){g(this.#w),g(this.#E)}resetView(){this.#k!==D&&(this.#E.reset(this.#i),this.#P())}#A(){y(this.#E,this.#w),document.addEventListener("keydown",this.#H),this.#S(),this.#k=T}#P(){y(this.#w,this.#E),document.removeEventListener("keydown",this.#H),this.#k=D}#H=t=>{(t=>"Escape"===t.key)(t)&&(t.preventDefault(),this.#E.reset(this.#i),this.#P(),document.removeEventListener("keydown",this.#H))};#a=()=>{this.#M({...this.#i,isFavorite:!this.#i.isFavorite})};#D=()=>{this.#A()};#T=()=>{this.#E.reset(this.#i),this.#P()};#m=t=>{this.#M(t),this.#P()}}const Q=R(),tt=C.map((t=>{const e=Z(E),n=z(4),i=[];for(let e=0;e<n;e++)i.push({src:`https://loremflickr.com/248/152?random=${z(100)}`,description:`${t}'s view`});return{id:Q().toString(),name:t,description:`${t} ${e}`,pictures:i}})),et=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:60},{id:"2",title:"Upgrade to a maybach",price:200},{id:"3",title:"Drive slowly",price:70}]},{type:"bus",offers:[{id:"1",title:"Choose seats",price:5},{id:"2",title:"Add luggage",price:50},{id:"3",title:"Add meal",price:15}]},{type:"train",offers:[{id:"1",title:"Choose seats",price:5},{id:"2",title:"Add luggage",price:50},{id:"3",title:"Add meal",price:15}]},{type:"ship",offers:[{id:"1",title:"Switch to comfort",price:200},{id:"2",title:"Add luggage",price:50},{id:"3",title:"Add meal",price:50}]},{type:"drive",offers:[{id:"1",title:"Car insurance",price:80},{id:"2",title:"Upgrade to a maybach",price:500},{id:"3",title:"With automatic transmission",price:40},{id:"4",title:"With air conditioning",price:30}]},{type:"flight",offers:[{id:"1",title:"Upgrade to a business class",price:300},{id:"2",title:"Add luggage",price:100},{id:"3",title:"Choose seats",price:50}]},{type:"check-in",offers:[{id:"1",title:"Choose a time for check-in",price:80},{id:"2",title:"Welcome-drinks",price:5}]},{type:"sightseeing",offers:[{id:"1",title:"Choose a guide",price:40},{id:"2",title:"Map",price:5},{id:"3",title:"Night excursion",price:200}]},{type:"restaurant",offers:[]}],nt=R(),it=()=>{const t=nt().toString(),e=Z(M),n=Z(tt),i=(t=>{const e=[];return t.forEach((t=>{J()&&e.push(t)})),e})(S),s=new Date(Date.now()+z(365)*z(24)*z(60)*z(60)*z(1e3)),r=new Date(s.getTime()+z(24)*z(60)*z(60)*z(1e3));return{id:t,type:e,destination:n.id,basePrice:z(200),dateFrom:s.toISOString(),dateTo:r.toISOString(),isFavorite:J(),offers:i}},st={everything:t=>[...t],future:t=>t.filter((t=>(t=>x()().isBefore(t.dateFrom))(t))),present:t=>t.filter((t=>(t=>x()().isAfter(t.dateFrom)&&x()().isBefore(t.dateTo))(t))),past:t=>t.filter((t=>(t=>x()().isAfter(t.dateTo))(t)))},rt=document.querySelector(".page-header"),ot=document.querySelector(".trip-events"),at=rt.querySelector(".trip-main"),lt=rt.querySelector(".trip-controls__filters"),dt=new class{#x=Array.from({length:4},it);#r=et;#O=tt;get points(){return this.#x}get offers(){return this.#r}get destinations(){return this.#O}getOfferByType(t){return this.#r.find((e=>e.type===t))}getOfferById(t,e){return this.getOfferByType(t).offers.filter((t=>e.find((e=>t.id===e))))}getDestinationById(t){return this.destinations.find((e=>e.id===t))}},ct=new class{#C=null;#v=null;#F=null;#I=new b;#L=new A;#B=[];#Y=new Map;#N=k.DAY;#j=[];constructor({container:t,pointsModel:e}){this.#C=t,this.#v=e}init(){this.#B=[...this.#v.points],this.#j=[...this.#v.points],this.#U(this.#N),this.#W()}#S=()=>{this.#Y.forEach((t=>t.resetView()))};#q=t=>{this.#B=X(this.#B,t),this.#j=X(this.#j,t),this.#Y.get(t.id).init(t)};#U(t){switch(t){case k.DAY:this.#B.sort(N);break;case k.PRICE:this.#B.sort(B);break;case k.TIME:this.#B.sort(Y)}this.#N=t}#e=t=>{this.#N!==t&&(this.#U(t),this.#Z(),this.#z())};#J(){this.#F=new P({onSortTypeChange:this.#e}),v(this.#F,this.#C,m)}#R(){v(this.#I,this.#C)}#V(t){const e=new G({container:this.#I.element,pointsModel:this.#v,onDataChange:this.#q,onModeChange:this.#S});e.init(t),this.#Y.set(t.id,e)}#Z(){this.#Y.forEach((t=>t.destroy())),this.#Y.clear()}#z(){this.#B.forEach((t=>{this.#V(t)}))}#X(){v(this.#L,this.#C)}#W(){0!==this.#B.length?(this.#J(),this.#R(),this.#z()):this.#X()}}({container:ot,pointsModel:dt}),ut=(ht=dt.points,Object.entries(st).map((([t,e])=>({type:t,count:e(ht).length}))));var ht;v(new class extends ${get template(){return'<section class="trip-main__trip-info  trip-info">\n<div class="trip-info__main">\n  <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n\n  <p class="trip-info__dates">18&nbsp;—&nbsp;20 Mar</p>\n</div>\n\n<p class="trip-info__cost">\n  Total: €&nbsp;<span class="trip-info__cost-value">1230</span>\n</p>\n</section>'}},at,m),v(new class extends ${#K=null;constructor({filters:t}){super(),this.#K=t}get template(){return`<form class="trip-filters" action="#" method="get">\n  ${this.#K.map(((t,e)=>((t,e)=>{const{type:n,count:i}=t;return`\n    <div class="trip-filters__filter">\n      <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${0===i?"disabled":""} ${e?"checked":""}>\n      <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n      </div>`})(t,0===e))).join("")}</form>`}}({filters:ut}),lt),ct.init()})()})();
//# sourceMappingURL=bundle.79abf3e5442a575df6c6.js.map