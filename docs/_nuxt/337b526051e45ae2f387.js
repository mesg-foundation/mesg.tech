(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{386:function(t,e,r){var content=r(394);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("b422884a",content,!0,{sourceMap:!1})},387:function(t,e,r){var content=r(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("48da0e6d",content,!0,{sourceMap:!1})},388:function(t,e,r){var content=r(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("99899bbe",content,!0,{sourceMap:!1})},389:function(t,e,r){"use strict";var n={name:"Card",props:{bordered:{type:Boolean,default:!1},thin:{type:Boolean,default:!1},noShadow:{type:Boolean,default:!1},borderBottomColor:{type:String,default:void 0},background:{type:String,default:"#fffff"}}},o=(r(393),r(3)),c=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card",class:{bordered:this.bordered,thin:this.thin,shadow:!this.noShadow},style:{borderBottomColor:this.borderBottomColor,backgroundColor:this.background}},[this._t("default")],2)}),[],!1,null,"c772b74a",null).exports;e.a=c},390:function(t,e,r){var content=r(406);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("30422fb3",content,!0,{sourceMap:!1})},391:function(t,e,r){"use strict";r(19);var n=r(29),o=r(84),c=r(389),d={components:{Container:o.a,Card:c.a,Button:n.a},props:{title:{type:String,required:!0},description:{type:String},icon:{type:String},links:{type:Array,default:function(){return[]}},externalLinks:{type:Array,default:function(){return[]}}}},l=(r(395),r(3)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"cta"},[r("Container",[r("Card",{staticClass:"card-cta",attrs:{p2:""}},[r("div",{attrs:{flex:"",row:"","align-center":"","space-between":"","mobile-column":""}},[t.icon?r("div",{staticClass:"icon"},[r("span",{attrs:{flex:"","align-center":""}},[r("i",{class:t.icon})])]):r("div",{staticClass:"icon-liteflow",attrs:{flex:"","align-center":""}},[r("span",[t._v("L")])]),t._v(" "),r("div",{staticClass:"content"},[r("h2",[t._v(t._s(t.title))]),t._v(" "),t.description?r("p",{attrs:{mt1:""}},[t._v(t._s(t.description))]):t._e()]),t._v(" "),r("nav",{attrs:{flex:"",column:"",quarter:""}},[t._l(t.links,(function(link,i){return r("Button",{key:i,attrs:{white:"",to:link.to,href:link.href,target:"_blank"}},[t._v(t._s(link.title))])})),t._v(" "),t._t("default")],2)])])],1)],1)}),[],!1,null,"239cc299",null);e.a=component.exports},392:function(t,e,r){"use strict";r(19);var n={props:{list:{type:Array,required:!0}}},o=(r(397),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{attrs:{flex:"",row:"",wrap:""}},t._l(t.list,(function(e,i){return r("a",{key:i,attrs:{href:e.to,target:"_blank",flex:"","align-center":"",half:""}},[r("span",{class:e.color,attrs:{flex:"","align-center":"",mr1:""}},[r("i",{staticClass:"text-center",class:e.icon})]),t._v(" "),r("p",[t._v(t._s(e.description))])])})),0)}),[],!1,null,"63714818",null);e.a=component.exports},393:function(t,e,r){"use strict";var n=r(386);r.n(n).a},394:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".card[data-v-c772b74a]{border-radius:6px;background-color:#fff;overflow:hidden;padding:20px}.card.shadow[data-v-c772b74a]{box-shadow:0 4px 10px 0 rgba(0,0,0,.2)}.card.bordered[data-v-c772b74a]{border:1px solid #bdafd6;border-bottom:6px solid #491e8c;box-shadow:none;-webkit-transition:.1s ease-in;transition:.1s ease-in}.card.bordered[data-v-c772b74a]:hover{-webkit-transform:scale(1.01);transform:scale(1.01);box-shadow:0 4px 10px 0 rgba(0,0,0,.2)}.card.bordered.thin[data-v-c772b74a]{border:1px solid #bdafd6;-webkit-transition:.1s ease-in;transition:.1s ease-in}.card.bordered.thin[data-v-c772b74a]:hover{-webkit-transform:scale(1.01);transform:scale(1.01);box-shadow:0 4px 10px 0 rgba(0,0,0,.2)}",""])},395:function(t,e,r){"use strict";var n=r(387);r.n(n).a},396:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,'.cta[data-v-239cc299]{position:relative}.cta[data-v-239cc299]:before{content:"";position:absolute;width:100%;height:calc(100% + 100px);background:#f2f0f7;-webkit-transform:translateY(30%) skewY(-8deg);transform:translateY(30%) skewY(-8deg);z-index:-1}.cta .card[data-v-239cc299]{background-image:-webkit-gradient(linear,left top,right top,from(#491e8c),to(#8350db));background-image:linear-gradient(90deg,#491e8c,#8350db)}.cta .card .icon span[data-v-239cc299]{min-width:80px;max-width:80px;min-height:80px;max-height:80px;border-radius:3px;background-color:#8350db}.cta .card .icon span i[data-v-239cc299]{text-align:center;font-size:40px;color:#e7d2f9}.cta .card .icon-liteflow[data-v-239cc299]{min-width:80px;max-width:80px;min-height:80px;max-height:80px;border-radius:3px;background-color:#8fabff}.cta .card .icon-liteflow span[data-v-239cc299]{text-align:center;font-weight:700;font-size:50px;color:#fff}.cta .card h2[data-v-239cc299]{color:#fff}.cta .card p[data-v-239cc299]{opacity:.85;color:#fff}.cta .card nav[data-v-239cc299]{min-width:220px}@media only screen and (min-width:1701px){.cta[data-v-239cc299]:before{-webkit-transform:none;transform:none;top:60px}}@media only screen and (max-width:1024px){.cta[data-v-239cc299]:before{height:calc(100% + 80px)}.container[data-v-239cc299]{padding-bottom:0}}@media only screen and (max-width:768px){.icon[data-v-239cc299]{width:100%}.icon span[data-v-239cc299]{width:100%}.content[data-v-239cc299],.icon span[data-v-239cc299]{margin-bottom:40px}}',""])},397:function(t,e,r){"use strict";var n=r(388);r.n(n).a},398:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"a[data-v-63714818]{margin-top:10px;margin-bottom:10px;-webkit-transition:.1s ease-in;transition:.1s ease-in}a:hover p[data-v-63714818]{font-weight:700;color:#0e061c}a:hover span[data-v-63714818]{opacity:1}a span[data-v-63714818]{min-width:50px;max-width:50px;min-height:50px;max-height:50px;border-radius:100%;opacity:.85}@media only screen and (max-width:414px){a[data-v-63714818]{margin-right:0}}",""])},399:function(t,e,r){var n=r(37),o=r(88),c=r(38),d=r(31),l=r(401);t.exports=function(t,e){var r=1==t,f=2==t,v=3==t,h=4==t,m=6==t,x=5==t||m,w=e||l;return function(e,l,_){for(var y,k,C=c(e),O=o(C),S=n(l,_,3),j=d(O.length),B=0,A=r?w(e,j):f?w(e,0):void 0;j>B;B++)if((x||B in O)&&(k=S(y=O[B],B,C),t))if(r)A[B]=k;else if(k)switch(t){case 3:return!0;case 5:return y;case 6:return B;case 2:A.push(y)}else if(h)return!1;return m?-1:v||h?h:A}}},400:function(t,e,r){"use strict";var n=r(8),o=r(399)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(87)("find")},401:function(t,e,r){var n=r(402);t.exports=function(t,e){return new(n(t))(e)}},402:function(t,e,r){var n=r(14),o=r(258),c=r(5)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},404:function(t,e,r){var content=r(417);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("55317794",content,!0,{sourceMap:!1})},405:function(t,e,r){"use strict";var n=r(390);r.n(n).a},406:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"img[data-v-a372e182]{height:50px;width:50px}",""])},407:function(t,e,r){"use strict";var n={props:{src:{type:String,required:!0},title:{type:String,required:!0},text:{type:String,required:!0}}},o=(r(405),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{mb2:""}},[r("img",{attrs:{mb1:"",src:t.src,alt:t.title}}),t._v(" "),r("h4",{attrs:{mb1:""}},[t._v(t._s(t.title))]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.text)}})])}),[],!1,null,"a372e182",null);e.a=component.exports},416:function(t,e,r){"use strict";var n=r(404);r.n(n).a},417:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".feature[data-v-c4549f6a]:last-child{margin-bottom:0!important}",""])},420:function(t,e,r){"use strict";var n={components:{Button:r(29).a},props:{src:{type:String},title:{type:String,required:!0},description:{type:String},to:{type:[String,Object]},href:{type:String},action:{type:String}}},o=(r(416),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature",attrs:{flex:"",row:"","space-between":"","align-center":"",wrap:""}},[r("div",{attrs:{half:"",p1:""}},[t.src?r("img",{attrs:{src:t.src}}):t._e(),t._v(" "),t._t("left")],2),t._v(" "),r("div",{attrs:{half:""}},[r("h3",{attrs:{mb1:""}},[t._v(t._s(t.title))]),t._v(" "),t.description?r("p",{domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t._t("right"),t._v(" "),t.to?r("Button",{attrs:{secondary:"",to:t.to,mt1:""}},[t._v(t._s(t.action))]):t._e(),t._v(" "),t.href?r("Button",{attrs:{secondary:"",href:t.href,target:"_blank",mt1:""}},[t._v(t._s(t.action))]):t._e()],2)])}),[],!1,null,"c4549f6a",null);e.a=component.exports},444:function(t,e,r){var content=r(507);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("ab7159a0",content,!0,{sourceMap:!1})},506:function(t,e,r){"use strict";var n=r(444);r.n(n).a},507:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"@media only screen and (max-width:768px){.intro[data-v-fd2fc0b0]{padding-bottom:0}.usecases[data-v-fd2fc0b0]{margin-bottom:40px!important}}",""])},533:function(t,e,r){"use strict";r.r(e);r(36),r(21),r(20),r(13),r(30),r(400);var n=r(10),o=r(19),header=r(86),c=r(29),d=r(84),l=r(391),f=r(392),v=r(407),h=r(420),m=r(85);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var w={components:{Header:header.a,Container:d.a,Button:c.a,CTA:l.a,ListSN:f.a,TextWithIcon:v.a,Feature:h.a},mixins:[Object(m.default)({title:"Services",description:"Reuse existing services to save time building applications. Publish on a decentralized registry to get rewarded anytime it is used."})],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(source,!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({products:"products",links:"links",externalLinks:"externalLinks",icons:"icons"}),{marketplace:function(){return this.products.find((function(t){return"marketplace"===t.id}))}})},_=(r(506),r(3)),component=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{image:r(260),title:t.title,description:t.description},scopedSlots:t._u([{key:"top",fn:function(){return[n("span",{staticClass:"label",attrs:{flex:""}},[t._v(t._s(t.marketplace.label))])]},proxy:!0}])}),t._v(" "),n("section",{attrs:{id:"features",mb3:""}},[n("Container",{attrs:{flex:"",row:"","space-between":"",wrap:""}},t._l(t.marketplace.features.secondary,(function(t,i){return n("TextWithIcon",{key:i,attrs:{src:t.src,title:t.title,text:t.description,third:""}})})),1)],1),t._v(" "),n("section",{attrs:{id:"presentation",mb3:""}},[n("Container",{staticClass:"intro text-center"},[n("h2",{attrs:{mb1:""}},[t._v("A decentralized registry of services")]),t._v(" "),n("p",{attrs:{mb2:""}},[t._v("Our decentralized registry of services and executions is a key part of our vision to create a decentralized network of services.")]),t._v(" "),n("Button",{attrs:{secondary:"",mb2:"",href:"/documents/decentralized-network-of-services.pdf",download:"",icon:"fal fa-file-download"}},[t._v("Whitepaper")])],1),t._v(" "),n("div",{staticClass:"outer-background"},[n("Container",t._l(t.marketplace.features.primary,(function(e,i){return n("Feature",t._b({key:i,attrs:{reverse:i%2==1,mb2:""}},"Feature",e,!1))})),1)],1)],1),t._v(" "),n("section",{attrs:{id:"use-cases",mb3:""}},[n("Container",[n("h2",{staticClass:"text-center",attrs:{mb2:""}},[t._v("Use Cases")]),t._v(" "),n("div",{staticClass:"usecases",attrs:{flex:"",row:"",wrap:"",mb1:""}},t._l(t.marketplace.usecase,(function(t,i){return n("TextWithIcon",{key:i,attrs:{half:"",src:t.src,title:t.title,text:t.description}})})),1),t._v(" "),n("div",{staticClass:"text-center",attrs:{mb3:""}},[n("Button",{attrs:{secondary:"",to:t.links.showcase}},[t._v("App Showcase")])],1)])],1),t._v(" "),n("section",[n("Container",{attrs:{flex:"",column:"","align-center":""}},[n("hr",{attrs:{mb3:""}})])],1),t._v(" "),n("section",{attrs:{id:"more-infos",mb3:""}},[n("Container",[n("div",{attrs:{flex:"",row:"","mobile-column":"","align-center":""}},[n("div",{attrs:{half:""}},[n("h3",{attrs:{mb1:""}},[t._v("Help & Guidance")]),t._v(" "),n("p",{attrs:{mb2:""}},[t._v("Have questions or not sure where to start? Head over to Discord to chat with the team, or browse the forum.")])]),t._v(" "),n("div",{attrs:{half:""}},[n("ListSN",{attrs:{list:[t.icons.discord,t.icons.forum]}})],1)])])],1),t._v(" "),n("CTA",{attrs:{title:"The Liteflow Framework",description:"Take a lighter approach with the Liteflow Framework. Build & ship secure, feature-rich applications with just a few lines of code.",links:[{title:"Build for free",href:t.externalLinks.liteflowCTABottom}],mb1:""}})],1)}),[],!1,null,"fd2fc0b0",null);e.default=component.exports}}]);