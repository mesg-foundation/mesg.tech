(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{390:function(t,e,r){var content=r(406);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("30422fb3",content,!0,{sourceMap:!1})},399:function(t,e,r){var n=r(37),o=r(88),c=r(38),l=r(31),d=r(401);t.exports=function(t,e){var r=1==t,f=2==t,m=3==t,v=4==t,h=6==t,x=5==t||h,_=e||d;return function(e,d,y){for(var w,k,O=c(e),C=o(O),S=n(d,y,3),j=l(C.length),M=0,P=r?_(e,j):f?_(e,0):void 0;j>M;M++)if((x||M in C)&&(k=S(w=C[M],M,O),t))if(r)P[M]=k;else if(k)switch(t){case 3:return!0;case 5:return w;case 6:return M;case 2:P.push(w)}else if(v)return!1;return h?-1:m||v?v:P}}},400:function(t,e,r){"use strict";var n=r(8),o=r(399)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(87)("find")},401:function(t,e,r){var n=r(402);t.exports=function(t,e){return new(n(t))(e)}},402:function(t,e,r){var n=r(14),o=r(258),c=r(5)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},404:function(t,e,r){var content=r(417);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("55317794",content,!0,{sourceMap:!1})},405:function(t,e,r){"use strict";var n=r(390);r.n(n).a},406:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"img[data-v-a372e182]{height:50px;width:50px}",""])},407:function(t,e,r){"use strict";var n={props:{src:{type:String,required:!0},title:{type:String,required:!0},text:{type:String,required:!0}}},o=(r(405),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{mb2:""}},[r("img",{attrs:{mb1:"",src:t.src,alt:t.title}}),t._v(" "),r("h4",{attrs:{mb1:""}},[t._v(t._s(t.title))]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.text)}})])}),[],!1,null,"a372e182",null);e.a=component.exports},408:function(t,e,r){var content=r(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("302eb4b2",content,!0,{sourceMap:!1})},409:function(t,e,r){var content=r(428);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("3001d75f",content,!0,{sourceMap:!1})},416:function(t,e,r){"use strict";var n=r(404);r.n(n).a},417:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".feature[data-v-c4549f6a]:last-child{margin-bottom:0!important}",""])},418:function(t,e,r){"use strict";var n,o=r(19),c=r(84),l=(r(24),r(4)),d={components:{Button:r(29).a},data:function(){return{email:""}},methods:{submit:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var data,e,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(data=new FormData).append("email",this.email),data.append("token","32bdd13cbff3931061eb3eca01321d84"),(e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("POST","https://app.sgwidget.com/v2/api/newsletter-signup",!1),e.onload=function(){var t=JSON.parse(e.responseText);200===e.status?(alert(t.message),r.email=""):alert(t.email[0])},e.send(data);case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},f=(r(425),r(3)),m=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{"data-token":"32bdd13cbff3931061eb3eca01321d84",flex:"",row:"","tablet-column":"",wrap:""},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"email",attrs:{flex:"",column:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Your email address",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"btn",attrs:{flex:"",column:"",third:""}},[r("Button",{attrs:{submit:"",primary:""}},[t._v("Sign up")])],1)])}),[],!1,null,"392e8ca9",null).exports,v={components:{Container:c.a,Newsletter:m},props:{title:{type:String},description:{type:String}},computed:Object(o.b)({links:"links"})},h=(r(427),Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"outline"},[r("Container",{attrs:{flex:"",column:"",p2:""}},[t._t("default"),t._v(" "),r("h3",{attrs:{mb1:""}},[t._v(t._s(t.title))]),t._v(" "),r("p",{attrs:{mb2:""}},[t._v(t._s(t.description))]),t._v(" "),r("Newsletter")],2),t._v(" "),r("Container",{staticClass:"bottom",attrs:{p2:""}},[r("p",{staticClass:"infos"},[t._v("\n      By submitting this form you agree to receive email updates. Find out how we process\n      "),r("nuxt-link",{staticClass:"link",attrs:{to:t.links.policy}},[t._v("your data")]),t._v(".\n    ")],1)])],1)}),[],!1,null,"7968dc89",null));e.a=h.exports},419:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},text:{type:String}}},o=r(3),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h4",{attrs:{mb1:""}},[this._v(this._s(this.title))]),this._v(" "),e("p",{domProps:{innerHTML:this._s(this.text)}})])}),[],!1,null,null,null);e.a=component.exports},420:function(t,e,r){"use strict";var n={components:{Button:r(29).a},props:{src:{type:String},title:{type:String,required:!0},description:{type:String},to:{type:[String,Object]},href:{type:String},action:{type:String}}},o=(r(416),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature",attrs:{flex:"",row:"","space-between":"","align-center":"",wrap:""}},[r("div",{attrs:{half:"",p1:""}},[t.src?r("img",{attrs:{src:t.src}}):t._e(),t._v(" "),t._t("left")],2),t._v(" "),r("div",{attrs:{half:""}},[r("h3",{attrs:{mb1:""}},[t._v(t._s(t.title))]),t._v(" "),t.description?r("p",{domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t._t("right"),t._v(" "),t.to?r("Button",{attrs:{secondary:"",to:t.to,mt1:""}},[t._v(t._s(t.action))]):t._e(),t._v(" "),t.href?r("Button",{attrs:{secondary:"",href:t.href,target:"_blank",mt1:""}},[t._v(t._s(t.action))]):t._e()],2)])}),[],!1,null,"c4549f6a",null);e.a=component.exports},425:function(t,e,r){"use strict";var n=r(408);r.n(n).a},426:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"form[data-v-392e8ca9]{position:relative}form .email[data-v-392e8ca9]{margin-right:20px}form .email input[type=email][data-v-392e8ca9]{max-height:50px;font-size:15px;padding:13px 20px;border:1px solid #bdafd6;border-radius:3px;background-color:#fff;color:#0e061c}form .email input[type=email][data-v-392e8ca9]:focus{outline:none;box-shadow:inset 0 0 0 1px #bdafd6}form button[data-v-392e8ca9]{padding-left:20px;padding-right:20px;border:none}form[data-v-392e8ca9]:hover{cursor:pointer}@media only screen and (max-width:1024px){.email[data-v-392e8ca9]{margin-right:0!important}.btn[data-v-392e8ca9]{width:100%;max-width:100%;margin-top:20px}}",""])},427:function(t,e,r){"use strict";var n=r(409);r.n(n).a},428:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".outline[data-v-7968dc89]{border-radius:6px;border:1px solid #bdafd6}.outline .bottom[data-v-7968dc89]{border-bottom-left-radius:6px;border-bottom-right-radius:6px;background-color:#f2f0f7}",""])},429:function(t,e,r){var content=r(480);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("013951d1",content,!0,{sourceMap:!1})},431:function(t,e,r){var content=r(484);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("782d3ce9",content,!0,{sourceMap:!1})},479:function(t,e,r){"use strict";var n=r(429);r.n(n).a},480:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"span[data-v-714a9198]{width:20px;height:20px;border-radius:3px;display:inline-block;margin-right:10px;vertical-align:middle}",""])},483:function(t,e,r){"use strict";var n=r(431);r.n(n).a},484:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,'.sub-text[data-v-c2a3f320]{font-size:17px!important}a img[data-v-c2a3f320]{height:25px!important;display:block}.logo[data-v-c2a3f320]{-webkit-transition:.1s ease-in;transition:.1s ease-in}.logo[data-v-c2a3f320]:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}#atd div[data-v-c2a3f320]{padding-top:40px}#distribution ul[data-v-c2a3f320]{list-style:none;margin-left:0}#cta[data-v-c2a3f320]{position:relative}#cta[data-v-c2a3f320]:before{content:"";position:absolute;width:100%;height:calc(100% + 100px);background:#f2f0f7;-webkit-transform:translateY(30%) skewY(-8deg);transform:translateY(30%) skewY(-8deg);z-index:-1}#cta .card[data-v-c2a3f320]{background-image:-webkit-gradient(linear,left top,right top,from(#491e8c),to(#8350db));background-image:linear-gradient(90deg,#491e8c,#8350db)}#cta .card h2[data-v-c2a3f320]{color:#fff}#cta .card img[data-v-c2a3f320]{margin:auto}@media only screen and (min-width:1701px){#cta[data-v-c2a3f320]:before{-webkit-transform:none;transform:none;top:60px}}@media only screen and (max-width:1024px){#cta[data-v-c2a3f320]:before{height:calc(100% + 80px)}#atd div[data-v-c2a3f320]{padding-top:0}}@media only screen and (max-width:768px){#cta div[data-v-c2a3f320]{margin-bottom:0!important}#cta div .btn--white[data-v-c2a3f320]{margin-bottom:40px!important}#cta div .btn--white[data-v-c2a3f320]:last-child{margin-bottom:0!important}#atd .container[data-v-c2a3f320]{padding-bottom:0}#more-infos .community[data-v-c2a3f320]{margin-top:60px}}@media only screen and (min-width:768px) and (max-width:1024px){.logo[data-v-c2a3f320]{width:calc((100% - 80px)/3);min-width:calc((100% - 80px)/3);max-width:calc((100% - 80px)/3)}}',""])},525:function(t,e,r){"use strict";r.r(e);r(36),r(21),r(20),r(13),r(30),r(400);var n=r(10),o=r(19),header=r(86),c=r(29),l=r(84),d=r(391),f=r(389),m=r(419),v=r(460),h=r(461),x=r(418),_=r(392),y=r(407),w=r(420),k={props:{items:{type:Array,required:!0}}},O=(r(479),r(3)),C=Object(O.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.items,(function(e,i){return r("li",{key:i},[r("span",{style:"background-color: "+e.color}),t._v("\n    "+t._s(e.title)+"\n  ")])})),0)}),[],!1,null,"714a9198",null).exports,S=r(462),j=r(85);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var P={components:{Header:header.a,Container:l.a,CTA:d.a,Button:c.a,Card:f.a,Titletext4:m.a,News:v.a,Partners:h.a,CardNewsletter:x.a,ListSN:_.a,TextWithIcon:y.a,Feature:w.a,ColoredList:C,Document:S.a},mixins:[Object(j.default)({title:"Economy",description:"Securely delegate application processing, task executions, and validations to network participants using the native token."})],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({products:"products",links:"links",externalLinks:"externalLinks",articles:"articles",exchanges:"exchanges",icons:"icons"}),{token:function(){return this.products.find((function(t){return"token"===t.id}))}})},E=(r(483),Object(O.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{image:r(262),title:t.title,description:t.description},scopedSlots:t._u([{key:"top",fn:function(){return[n("span",{staticClass:"label",attrs:{flex:""}},[t._v(t._s(t.token.label))])]},proxy:!0}])},[t._v(" "),n("div",[n("Button",{attrs:{href:t.externalLinks.tokenUtility,target:"_blank",primary:"",mt2:""}},[t._v("Learn more about the economy")])],1)]),t._v(" "),n("section",{attrs:{id:"features",mb3:""}},[n("Container",{attrs:{flex:"",row:"","space-between":"",wrap:""}},t._l(t.token.features.primary,(function(t,i){return n("TextWithIcon",{key:i,attrs:{src:t.src,title:t.title,text:t.description,third:""}})})),1)],1),t._v(" "),n("section",[n("Container",{attrs:{flex:"",column:"","align-center":""}},[n("hr",{attrs:{mb3:""}})])],1),t._v(" "),n("section",{attrs:{id:"documents",mb3:""}},[n("Container",[n("h2",{staticClass:"text-center",attrs:{mb2:""}},[t._v("MESG documents")]),t._v(" "),n("div",{attrs:{flex:"",row:"","space-between":"",wrap:""}},[n("Document",{attrs:{list:["whitepaper","implementation"]}})],1)])],1),t._v(" "),n("section",[n("Container",{attrs:{flex:"",column:"","align-center":""}},[n("hr",{attrs:{mb3:""}})])],1),t._v(" "),n("section",{attrs:{id:"more-infos",mb3:""}},[n("Container",[n("div",{attrs:{flex:"",row:"","mobile-column":"","align-center":""}},[n("CardNewsletter",{attrs:{title:"Newsletter",description:"Sign up for our monthly newsletter to receive updates about MESG, our roadmap, products, new releases and more.",half:""}}),t._v(" "),n("div",{staticClass:"community",attrs:{half:""}},[n("h3",{attrs:{mb1:""}},[t._v("Community")]),t._v(" "),n("p",{attrs:{mb2:""}},[t._v("Join the community of builders in our Telegram group, or head over to Discord to chat with the team.")]),t._v(" "),n("ListSN",{attrs:{list:[t.icons.telegram,t.icons.discord]}})],1)],1)])],1),t._v(" "),n("CTA",{attrs:{icon:"fal fa-coins",title:"Token Utility in the MESG Ecosystem",description:"Explore the native token, how it works in the builders' open economy and what it can mean for you.",links:[{title:"Read the article",href:t.externalLinks.tokenUtility}],mb1:""}})],1)}),[],!1,null,"c2a3f320",null));e.default=E.exports}}]);