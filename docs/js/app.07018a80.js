(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vueapp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"20a4":function(e,t,a){"use strict";a("d3f3")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("main",{class:{"orange-green":e.themeSwitched}},[a("div",{staticClass:"app-container"},[a("header",{staticClass:"app-header dark-brown"},[a("h1",[e._v("My Pet Store")]),a("v-toolbar",[a("v-toolbar-items",[a("v-btn",{attrs:{to:"/"}},[e._v("Home")]),a("v-btn",{attrs:{to:"/pets"}},[e._v("Pets")])],1),a("v-spacer"),a("router-link",{attrs:{to:"/favorites"}},[a("v-badge",{attrs:{color:"grey lighten-1",overlap:"",content:e.favorites.length,value:e.favorites.length}},[a("v-icon",{attrs:{large:""}},[e._v("loyalty")])],1)],1)],1),a("v-btn",{on:{click:function(t){e.themeSwitched=!e.themeSwitched}}},[e._v("Switch theme")])],1),a("router-view"),a("footer",{staticClass:"app-footer dark-brown"},[a("p",[e._v("123 Main Street | Smithfield, RI 90987 | 345-456-5678")])])],1)])])},o=[],s=a("5530"),i=a("2f62"),l={name:"App",components:{},data:function(){return{themeSwitched:!1}},computed:Object(s["a"])({},Object(i["c"])(["favorites"]))},c=l,u=(a("5c0b"),a("2877")),p=a("6544"),d=a.n(p),m=a("7496"),v=a("4ca6"),h=a("8336"),f=a("132d"),b=a("2fa4"),g=a("71d9"),_=a("2a7f"),y=Object(u["a"])(c,r,o,!1,null,null,null),w=y.exports;d()(y,{VApp:m["a"],VBadge:v["a"],VBtn:h["a"],VIcon:f["a"],VSpacer:b["a"],VToolbar:g["a"],VToolbarItems:_["a"]});var j=a("f309");n["a"].use(j["a"]);var x=new j["a"]({}),k=a("8c4f"),V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"panel tall-panel light-mint"},[a("h2",[e._v("Pet Products")]),a("p",[e._v("Premium Puppy Chow")]),a("p",[e._v("Kibble, sale in bulk, $20/lb")]),a("img",{attrs:{src:"https://raw.githubusercontent.com/FrontEndFoxes/projects/main/petshop/images/food.png"}})]),a("div",{staticClass:"panel bisque"},[a("h2",[e._v("Donate")])]),a("div",{staticClass:"panel tall-panel light-brown"},[a("h2",[e._v("Adoptable Pets")]),a("p",[e._v("Fisher, Chihuahua, age 3")]),a("img",{attrs:{src:"https://raw.githubusercontent.com/FrontEndFoxes/projects/main/petshop/images/chihuahua.jpg"}})]),a("div",{staticClass:"panel bisque"},[a("h2",[e._v("Contact Us")])]),a("div",{staticClass:"panel tall-panel dark-mint"},[a("h2",[e._v("Pet of the Month")]),a("p",[e._v("Meet Stanley, A young French Bulldog")]),a("img",{attrs:{src:"https://raw.githubusercontent.com/FrontEndFoxes/projects/main/petshop/images/bulldog.jpg"}})]),a("div",{staticClass:"panel tall-panel light-mint"},[a("h2",[e._v("Success Stories")]),a("p",[e._v("Bennie found his forever home!")]),a("img",{attrs:{src:"https://raw.githubusercontent.com/FrontEndFoxes/projects/main/petshop/images/collie.jpg"}})]),a("div",{staticClass:"panel bisque"},[a("h2",[e._v("Special Events")])]),a("div",{staticClass:"panel bisque"},[a("h2",[e._v("Learn About Pet Ownership")])])])}],F={},O=F,S=Object(u["a"])(O,V,C,!1,null,null,null),P=S.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{wrap:""}},e._l(e.dogs,(function(e){return a("v-flex",{key:e.breed,attrs:{xs12:"",sm4:"",md3:""}},[a("app-dog",{attrs:{pet:e}})],1)})),1)],1)},$=[],T=[{name:"Max",breed:"husky",img:"https://images.dog.ceo/breeds/husky/n02110185_1469.jpg"},{name:"Rusty",breed:"shiba",img:"https://images.dog.ceo/breeds/shiba/shiba-13.jpg"},{name:"Rocco",breed:"boxer",img:"https://images.dog.ceo/breeds/boxer/n02108089_14112.jpg"},{name:"Zoey",breed:"beagle",img:"https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg"},{name:"Duke",breed:"doberman",img:"https://images.dog.ceo/breeds/doberman/n02107142_4653.jpg"},{name:"Lily",breed:"malamute",img:"https://images.dog.ceo/breeds/malamute/n02110063_1104.jpg"},{name:"Winston",breed:"pug",img:"https://images.dog.ceo/breeds/pug/n02110958_15626.jpg"},{name:"Angel",breed:"samoyed",img:"https://images.dog.ceo/breeds/samoyed/n02111889_4470.jpg"}],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"grey lighten-2"}},[a("v-img",{attrs:{src:e.pet.img,height:"170px",crossorigin:"anonymous"}}),a("v-card-title",[a("div",[a("h3",[e._v(e._s(e.pet.name))]),a("p",[e._v(e._s(e.pet.breed))])])]),a("v-btn",{on:{click:function(t){return e.addFavorites(e.pet)}}},[e._v("Add To Favorites")])],1)},M=[],I=a("bc3a"),L=a.n(I);L.a.defaults.baseURL="https://dog.ceo/api";var R=L.a,q={name:"Dog",props:{pet:{type:Object}},created:function(){var e=this;R.get("/breed/"+this.pet.breed+"/images/random").then((function(t){e.pet.img=t.data.message})).catch((function(e){console.log(e)}))},methods:Object(s["a"])({onClickFavorite:function(){}},Object(i["b"])(["addFavorites"]))},B=q,N=a("b0af"),D=a("99d9"),J=a("adda"),U=Object(u["a"])(B,A,M,!1,null,null,null),H=U.exports;d()(U,{VBtn:h["a"],VCard:N["a"],VCardTitle:D["a"],VImg:J["a"]});var K={name:"Pets",components:{appDog:H},data:function(){return{dogs:T}}},W=K,Y=a("a523"),Z=a("0e8f"),z=a("a722"),G=Object(u["a"])(W,E,$,!1,null,null,null),Q=G.exports;d()(G,{VContainer:Y["a"],VFlex:Z["a"],VLayout:z["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" Not Found ")])},ee=[],te={},ae=Object(u["a"])(te,X,ee,!1,null,null,null),ne=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-list",[e.favorites.length?a("div",[a("v-subheader",[e._v("My Favorites")]),e._l(e.favorites,(function(t,n){return a("v-list-item",{key:n},[a("v-list-item-avatar",[a("img",{attrs:{src:t.img,alt:"samoyed"}})]),a("v-list-item-content",[e._v(e._s(t.name))]),a("v-list-item-action",[a("v-icon",{on:{click:e.removeFavorite}},[e._v("delete")])],1)],1)})),a("v-btn",{attrs:{to:"/form"}},[e._v("Adopt")])],2):a("v-subheader",[e._v("Your favorites list is empty")])],1)],1)},oe=[],se={computed:{favorites:function(){return this.$store.state.favorites}},methods:{removeFavorite:function(){}}},ie=se,le=a("8860"),ce=a("da13"),ue=a("1800"),pe=a("8270"),de=a("5d23"),me=a("e0c7"),ve=Object(u["a"])(ie,re,oe,!1,null,null,null),he=ve.exports;d()(ve,{VBtn:h["a"],VIcon:f["a"],VList:le["a"],VListItem:ce["a"],VListItemAction:ue["a"],VListItemAvatar:pe["a"],VListItemContent:de["a"],VSubheader:me["a"]});var fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myform"},[e.submitted?a("div",{staticClass:"text-xs-center"},[a("h2",[e._v("Thank you for you interest")]),a("div",{staticClass:"details"},[a("h3",[e._v("Customer details")]),a("p",[a("strong",[e._v("Name:")]),e._v(" "+e._s(e.name)+" ")]),a("p",[a("strong",[e._v("Email:")]),e._v(" "+e._s(e.email)+" ")]),a("p",[a("strong",[e._v("Phone:")]),e._v(" "+e._s(e.phone)+" ")])])]):a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Name",rules:e.nameRules},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"(###) ###-####",expression:"'(###) ###-####'"}],attrs:{label:"Phone",rules:e.phoneRules},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),a("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("Submit")])],1)],1)},be=[],ge=a("3a60"),_e={directives:{mask:ge["mask"]},data:function(){return{name:"",email:"",phone:"",submitted:!1,valid:!0,nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length>2||"Name must be longer than 2 chars"}],emailRules:[function(e){return!!e||"Email is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Email must be valid"}],phoneRules:[function(e){return!!e||"phone is required"},function(e){return e.length>=7||"phone must be at least 7 digits"}]}},methods:{submit:function(){this.submitted=!0}}},ye=_e,we=(a("20a4"),a("4bd4")),je=a("8654"),xe=Object(u["a"])(ye,fe,be,!1,null,null,null),ke=xe.exports;d()(xe,{VBtn:h["a"],VForm:we["a"],VTextField:je["a"]});var Ve=[{path:"/",component:P},{path:"/pets",component:Q},{path:"/favorites",component:he},{path:"/form",component:ke},{path:"**",component:ne}],Ce=Ve;a("caad"),a("2532");n["a"].use(i["a"]);var Fe=new i["a"].Store({state:{favorites:[]},mutations:{addToFavorites:function(e,t){e.favorites.includes(t)||e.favorites.push(t)}},actions:{addFavorites:function(e,t){var a=e.commit;a("addToFavorites",t)}}});n["a"].use(k["a"]);var Oe=new k["a"]({routes:Ce});n["a"].config.productionTip=!1,new n["a"]({vuetify:x,router:Oe,store:Fe,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},d3f3:function(e,t,a){}});
//# sourceMappingURL=app.07018a80.js.map