(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,i="millisecond",n="second",s="minute",r="hour",a="day",o="week",l="month",d="quarter",u="year",c="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}},v=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},_={s:v,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+v(n,2,"0")+":"+v(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,l),r=i-s<0,a=e.clone().add(n+(r?-1:1),l);return+(-(n+(i-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:o,d:a,D:c,h:r,m:s,s:n,ms:i,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var g=function(t){return t instanceof D},b=function t(e,i,n){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),i&&($[r]=i,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;$[o]=e,s=o}return!n&&s&&(y=s),s||!n&&y},M=function(t,e){if(g(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new D(i)},T=_;T.l=b,T.i=g,T.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(T.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(h);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return T},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var i=M(t);return this.startOf(e)<=i&&i<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,i){return T.u(t)?this[e]:this.set(i,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var i=this,d=!!T.u(e)||e,f=T.p(t),h=function(t,e){var n=T.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return d?n:n.endOf(a)},p=function(t,e){return T.w(i.toDate()[t].apply(i.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return d?h(1,0):h(31,11);case l:return d?h(1,v):h(0,v+1);case o:var $=this.$locale().weekStart||0,g=(m<$?m+7:m)-$;return h(d?_-g:_+(6-g),v);case a:case c:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case n:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,d=T.p(t),f="set"+(this.$u?"UTC":""),h=(o={},o[a]=f+"Date",o[c]=f+"Date",o[l]=f+"Month",o[u]=f+"FullYear",o[r]=f+"Hours",o[s]=f+"Minutes",o[n]=f+"Seconds",o[i]=f+"Milliseconds",o)[d],p=d===a?this.$D+(e-this.$W):e;if(d===l||d===u){var m=this.clone().set(c,1);m.$d[h](p),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[T.p(t)]()},v.add=function(i,d){var c,f=this;i=Number(i);var h=T.p(d),p=function(t){var e=M(f);return T.w(e.date(e.date()+Math.round(t*i)),f)};if(h===l)return this.set(l,this.$M+i);if(h===u)return this.set(u,this.$y+i);if(h===a)return p(1);if(h===o)return p(7);var m=(c={},c[s]=t,c[r]=e,c[n]=1e3,c)[h]||1,v=this.$d.getTime()+i*m;return T.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=T.z(this),r=this.$H,a=this.$m,o=this.$M,l=i.weekdays,d=i.months,u=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].slice(0,r)},c=function(t){return T.s(r%12||12,t,"0")},h=i.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:T.s(o+1,2,"0"),MMM:u(i.monthsShort,o,d,3),MMMM:u(d,o),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,l,2),ddd:u(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:T.s(r,2,"0"),h:c(1),hh:c(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:T.s(a,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:s};return n.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(i,c,f){var h,p=T.p(c),m=M(i),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=T.m(this,m);return y=(h={},h[u]=y/12,h[l]=y,h[d]=y/3,h[o]=(_-v)/6048e5,h[a]=(_-v)/864e5,h[r]=_/e,h[s]=_/t,h[n]=_/1e3,h)[p]||_,f?y:T.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=b(t,e,!0);return n&&(i.$L=n),i},v.clone=function(){return T.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),w=D.prototype;return M.prototype=w,[["$ms",i],["$s",n],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",c]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=b,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,i=1e3,n=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:o,months:l,days:r,hours:s,minutes:n,seconds:i,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof y},f=function(t,e,i){return new y(t,i,e.$l)},h=function(t){return e.p(t)+"s"},p=function(t){return t<0},m=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?p(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function p(t,e,i){var n=this;if(this.$d={},this.$l=i,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*u[h(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){n.$d[h(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(d);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,i){return e+(t.$d[i]||0)*u[i]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/o),t%=o,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/n),t%=n,this.$d.seconds=m(t/i),t%=i,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var n=_(i,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3);var o=_(a,"S"),l=t.negative||e.negative||n.negative||s.negative||r.negative||o.negative,d=s.format||r.format||o.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+n.format+d+s.format+r.format+o.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return i.replace(a,(function(t,e){return e||String(n[t])}))},v.as=function(t){return this.$ms/u[h(t)]},v.get=function(t){var e=this.$ms,i=h(t);return"milliseconds"===i?e%=1e3:e="weeks"===i?m(e/u[i]):this.$d[i],0===e?0:e},v.add=function(t,e,i){var n;return n=e?t*u[h(e)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+n*(i?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}();return function(i,n,s){t=s,e=s().$utils(),s.duration=function(t,e){var i=s.locale();return f(t,{$l:i},e)},s.isDuration=c;var r=n.prototype.add,a=n.prototype.subtract;n.prototype.add=function(t,e){return c(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},n.prototype.subtract=function(t,e){return c(t)&&(t=t.asMilliseconds()),a.bind(this)(t,e)}}}()}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function e(t,e,i="beforeend"){e.insertAdjacentElement(i,t.getElement())}class n{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}var s=i(484),r=i.n(s);const a=200,o=["Paris","Amsterdam","Berlin","London","Chamonix","Geneva","Prague"],l=["is a city that never sleeps, vibrant with round-the-clock activity.","is a regional gem, offering a rich tapestry of cultural landmarks.","boasts an eclectic mix of historic charm and modern vitality.","is known for its stunning skyline and bustling streets.","is a haven for foodies, with a culinary scene as diverse as its population.","is the crossroads of tradition and innovation, home to renowned museums and cutting-edge galleries.","is a city of green spaces, from serene parks to lively recreation areas."],d=t=>t[Math.floor(Math.random()*t.length)],u=t=>Math.floor(Math.random()*t),c=()=>{let t=0;return function(){return t+=1,t}},f=t=>r()(t).format("DD/MM/YY HH:mm"),h=t=>r()(t).format("MMM DD").toUpperCase(),p=t=>r()(t).format("HH:mm"),m=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:60},{id:"2",title:"Upgrade to a maybach",price:200},{id:"3",title:"Drive slowly",price:70}]},{type:"bus",offers:[{id:"1",title:"Choose seats",price:5},{id:"2",title:"Add luggage",price:50},{id:"3",title:"Add meal",price:15}]},{type:"train",offers:[{id:"1",title:"Choose seats",price:5},{id:"2",title:"Add luggage",price:50},{id:"3",title:"Add meal",price:15}]},{type:"ship",offers:[{id:"1",title:"Switch to comfort",price:200},{id:"2",title:"Add luggage",price:50},{id:"3",title:"Add meal",price:50}]},{type:"drive",offers:[{id:"1",title:"Car insurance",price:80},{id:"2",title:"Upgrade to a maybach",price:500},{id:"3",title:"With automatic transmission",price:40},{id:"4",title:"With air conditioning",price:30}]},{type:"flight",offers:[{id:"1",title:"Upgrade to a business class",price:300},{id:"2",title:"Add luggage",price:100},{id:"3",title:"Choose seats",price:50}]},{type:"check-in",offers:[{id:"1",title:"Choose a time for check-in",price:80},{id:"2",title:"Welcome-drinks",price:5}]},{type:"sightseeing",offers:[{id:"1",title:"Choose a guide",price:40},{id:"2",title:"Map",price:5},{id:"3",title:"Night excursion",price:200}]},{type:"restaurant",offers:[]}];class v{constructor({point:t,destination:e,offers:i,checkedOffers:n}){this.point=t,this.destination=e,this.offers=i,this.checkedOffers=n}getTemplate(){return((t,e,i,n)=>{const{dateFrom:s,dateTo:r,type:a,basePrice:l}=t,{name:d,description:u}=e,{offers:c}=i,h=i&&c&&c.length>0,p=h?((t,e)=>t.map((t=>{const i=e.map((t=>t.id)).includes(t.id);return`\n      <div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t.id}" type="checkbox" name="event-offer-${t.id}" ${i?"checked":""}>\n        <label class="event__offer-label" for="event-offer-${t.id}">\n          <span class="event__offer-title">${t.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${t.price}</span>\n        </label>\n      </div>\n    `})).join(""))(i.offers,n):"";return`<form class="event event--edit" action="#" method="post">\n<header class="event__header">\n  <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-${c.id}">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/${a}.png" alt="Event ${a} icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${c.id}" type="checkbox">\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${m.map((t=>{return`\n  <div class="event__type-item">\n  <input id="event-type-${t.id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n  <label class="event__type-label  event__type-label--${t.type}" for="event-type-${t.id}">${e=t.type,e.charAt(0).toUpperCase()+e.slice(1)}</label>\n</div>\n    `;var e})).join("")}\n      </fieldset>\n    </div>\n  </div>\n  <div class="event__field-group  event__field-group--destination">\n    <label class="event__label  event__type-output" for="event-destination-${c.id}">\n      ${a}\n    </label>\n    <input class="event__input  event__input--destination" id="event-destination-${c.id}" type="text" name="event-destination" value="${d}" list="destination-list-${c.id}">\n    <datalist id="destination-list-${c.id}">\n      ${o.map((t=>`<option value="${t}"></option>`)).join("")}\n    </datalist>\n  </div>\n  <div class="event__field-group  event__field-group--time">\n    <label class="visually-hidden" for="event-start-time-${c.id}">From</label>\n    <input class="event__input  event__input--time" id="event-start-time-${c.id}" type="text" name="event-start-time" value="${f(s)}">\n    &mdash;\n    <label class="visually-hidden" for="event-end-time-${c.id}">To</label>\n    <input class="event__input  event__input--time" id="event-end-time-${c.id}" type="text" name="event-end-time" value="${f(r)}">\n  </div>\n  <div class="event__field-group  event__field-group--price">\n    <label class="event__label" for="event-price-${c.id}">\n      <span class="visually-hidden">Price</span>\n      &euro;\n    </label>\n    <input class="event__input  event__input--price" id="event-price-${c.id}" type="text" name="event-price" value="${l}">\n  </div>\n  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Delete</button>\n  <button class="event__rollup-btn" type="button">\n    <span class="visually-hidden">Open event</span>\n  </button>\n</header>\n<section class="event__details">\n${h?`\n<section class="event__section  event__section--offers">\n  <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n  <div class="event__available-offers">${p}</div>\n</section>\n`:""}\n  <section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${u}</p>\n  </section>\n</section>\n</form>`})(this.point,this.destination,this.offers,this.checkedOffers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}var _=i(646),y=i.n(_);r().extend(y());class ${constructor({point:t,destination:e,offers:i}){this.point=t,this.destination=e,this.offers=i}getTemplate(){return((t,e,i)=>{const{dateFrom:n,dateTo:s,type:a,basePrice:o,isFavorite:l}=t,{name:d}=e,u=(t=>t.length>0?t.map((t=>`<li class="event__offer">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </li>`)).join(""):"")(i),c=r().duration(r()(s).diff(r()(n))),f=`${c.days()>0?`${c.days()}D `:""}${c.hours()>0?`${c.hours()}H `:""}${c.minutes()}M`,m=l?"event__favorite-btn--active":"";return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${h(n)}">${h(n)}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event ${a} icon">\n    </div>\n    <h3 class="event__title">${a} ${d}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${p(n)}">${p(n)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="${p(s)}">${p(s)}</time>\n      </p>\n      <p class="event__duration">${f}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${o}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n    ${u}\n    </ul>\n    <button class="event__favorite-btn ${m}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`})(this.point,this.destination,this.offers)}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class g{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n<div class="trip-sort__item  trip-sort__item--day">\n  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n  <label class="trip-sort__btn" for="sort-day">Day</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--event">\n  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n  <label class="trip-sort__btn" for="sort-event">Event</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--time">\n  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n  <label class="trip-sort__btn" for="sort-time">Time</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--price">\n  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n  <label class="trip-sort__btn" for="sort-price">Price</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--offer">\n  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n  <label class="trip-sort__btn" for="sort-offer">Offers</label>\n</div>\n</form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const b=c(),M=new Array(7).fill(null).map((()=>{const t=d(o),e=d(l),i=u(4),n=[];for(let e=0;e<i;e++)n.push({src:`https://loremflickr.com/248/152?random=${u(100)}`,description:`${t}'s view`});return{id:b().toString(),name:t,description:`${t} ${e}`,pictures:n}})),T=c(),D=[{id:T(),basePrice:u(a),dateFrom:"2023-12-12T09:00:00.000Z",dateTo:"2023-12-12T09:30:00.000Z",destination:"1",isFavorite:!0,offers:["2","3"],type:"taxi"},{id:T(),basePrice:u(a),dateFrom:"2023-12-12T10:00:00.000Z",dateTo:"2023-12-12T10:50:00.000Z",destination:"2",isFavorite:!0,offers:["1","2","3"],type:"bus"},{id:T(),basePrice:u(a),dateFrom:"2023-12-12T11:00:00.000Z",dateTo:"2023-12-12T12:00:00.000Z",destination:"3",isFavorite:!0,offers:["1","3"],type:"train"},{id:T(),basePrice:u(a),dateFrom:"2023-12-12T13:00:00.000Z",dateTo:"2023-12-12T15:00:00.000Z",destination:"4",isFavorite:!0,offers:["1","2","3"],type:"ship"},{id:T(),basePrice:u(a),dateFrom:"2023-12-12T16:00:00.000Z",dateTo:"2023-12-12T16:30:00.000Z",destination:"5",isFavorite:!0,offers:["1","2","4"],type:"drive"},{id:T(),basePrice:u(a),dateFrom:"2023-12-12T17:00:00.000Z",dateTo:"2023-12-12T20:00:00.000Z",destination:"6",isFavorite:!0,offers:["3"],type:"flight"},{id:T(),basePrice:u(a),dateFrom:"2023-12-12T21:00:00.000Z",dateTo:"2023-12-12T21:30:00.000Z",destination:"7",isFavorite:!1,offers:[],type:"check-in"},{id:T(),basePrice:u(a),dateFrom:"2023-12-12T22:00:00.000Z",dateTo:"2023-12-12T23:30:00.000Z",destination:"1",isFavorite:!1,offers:["1","2","3"],type:"sightseeing"},{id:T(),basePrice:u(a),dateFrom:"2023-12-13T19:00:00.000Z",dateTo:"2023-12-13T21:00:00.000Z",destination:"2",isFavorite:!1,offers:[],type:"restaurant"}],w=()=>d(D),S=document.querySelector(".page-header"),O=document.querySelector(".trip-events"),P=S.querySelector(".trip-main"),k=S.querySelector(".trip-controls__filters"),x=new class{points=Array.from({length:4},w);offers=m;destinations=M;getPoints(){return this.points}getOffers(){return this.offers}getDestinations(){return this.destinations}getOfferByType(t){return this.getOffers().find((e=>e.type===t))}getOfferById(t,e){return this.getOfferByType(t).offers.filter((t=>e.find((e=>t.id===e))))}getDestinationById(t){return this.getDestinations().find((e=>e.id===t))}},F=new class{sortComponent=new g;editListComponent=new n;constructor({container:t,pointsModel:e}){this.container=t,this.pointsModel=e}init(){this.boardPoints=[...this.pointsModel.getPoints()],e(this.sortComponent,this.container),e(this.editListComponent,this.container),e(new v({point:this.boardPoints[0],destination:this.pointsModel.getDestinationById(this.boardPoints[0].destination),checkedOffers:[...this.pointsModel.getOfferById(this.boardPoints[0].type,this.boardPoints[0].offers)],offers:this.pointsModel.getOfferByType(this.boardPoints[0].type)}),this.editListComponent.getElement());for(let t=1;t<this.boardPoints.length;t++)e(new $({point:this.boardPoints[t],destination:this.pointsModel.getDestinationById(this.boardPoints[t].destination),offers:[...this.pointsModel.getOfferById(this.boardPoints[t].type,this.boardPoints[t].offers)]}),this.editListComponent.getElement())}}({container:O,pointsModel:x});e(new class{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n<div class="trip-info__main">\n  <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>\n\n  <p class="trip-info__dates">18&nbsp;—&nbsp;20 Mar</p>\n</div>\n\n<p class="trip-info__cost">\n  Total: €&nbsp;<span class="trip-info__cost-value">1230</span>\n</p>\n</section>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},P,"afterbegin"),e(new class{getTemplate(){return'\n  <form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},k),F.init()})()})();
//# sourceMappingURL=bundle.bc24ff90f3d379c308b4.js.map