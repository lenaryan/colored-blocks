(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);A&&A(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var A=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0238":function(e,t,s){e.exports=s.p+"./img/arrow-small-down.32a62238.svg"},1560:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAMAAABFyS02AAAANlBMVEUAAAAgIFAgIFAgJFQgIFAgI1MgI1IgJFQiIlIgJFQgIlIgIlQgI1MgI1MhIlMhI1MhI1MhI1O4aQ56AAAAEXRSTlMAECBAQFBgcH+AgI+QoM/f7+B37mgAAABKSURBVHjaRchBEoAgDEPRFEUFAc39L+vUgeavkgfstyGyKwOZHBYyyA2VbhJWoP8W0gGZBGhuKbk0zArJ5yVZ/MmmyCSyEHWca30PjQShv5/4FQAAAABJRU5ErkJggg=="},"2ca2":function(e,t,s){e.exports=s.p+"./img/menu-burger.c1722449.svg"},"3a21":function(e,t,s){e.exports=s.p+"./img/menu-cross.d79c0f6a.svg"},"3c61":function(e,t,s){},"3c85":function(e,t,s){e.exports=s.p+"./img/arrow-small-up.dd402ff5.svg"},"3f33":function(e,t,s){e.exports=s.p+"./img/arrow-link.6db90272.svg"},4643:function(e,t,s){e.exports=s.p+"./img/arrow-up.762c8114.svg"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),s("Main"),s("Footer")],1)},r=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"header"},[s("div",{staticClass:"wrapper header__wrapper"},[e._m(0),s("div",{staticClass:"mobile-wrap header__mobile-wrap"},[s("TopMenu"),s("SignUp",{attrs:{content:"Sign Up",classes:"sign-up sign-up--purple sign-up--big","btn-type":"button"}})],1),s("button",{staticClass:"burger header__burger header__menu-btn",on:{click:e.openMenu}},[e._m(1)]),s("button",{staticClass:"cross header__cross header__menu-btn",on:{click:e.closeMenu}},[e._m(2)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"header__logo",attrs:{href:"/"}},[a("picture",[a("source",{attrs:{srcset:s("b3e0")}}),a("img",{attrs:{src:s("b58e"),alt:"Logo"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("picture",[a("source",{attrs:{srcset:s("2ca2")}}),a("img",{attrs:{src:s("b100"),alt:"Open menu"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("picture",[a("source",{attrs:{srcset:s("3a21")}}),a("img",{attrs:{src:s("9ce0"),alt:"Close menu"}})])}],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"nav header__nav"},[a("ul",{staticClass:"menu-top"},[a("li",{staticClass:"menu-top__item"},[a("a",{staticClass:"menu-top__link",attrs:{href:"#"}},[e._v("About")])]),a("li",{staticClass:"menu-top__item menu-top__item--sub"},[a("a",{staticClass:"menu-top__link menu-top__link--sub"},[e._v("Help "),a("picture",[a("source",{attrs:{srcset:s("0238")}}),a("img",{staticClass:"menu-top__submenu-icon menu-top__submenu-icon--desk",attrs:{src:s("fcb0"),alt:"Submenu"}})]),a("picture",[a("source",{attrs:{srcset:s("3c85")}}),a("img",{staticClass:"menu-top__submenu-icon menu-top__submenu-icon--desk menu-top__submenu-icon--hidden",attrs:{src:s("74d2"),alt:"Submenu"}})]),a("picture",[a("source",{attrs:{srcset:s("4643")}}),a("img",{staticClass:"menu-top__submenu-icon menu-top__submenu-icon--mob",attrs:{src:s("1560"),alt:"Submenu"}})]),a("picture",[a("source",{attrs:{srcset:s("6ff5")}}),a("img",{staticClass:"menu-top__submenu-icon menu-top__submenu-icon--mob menu-top__submenu-icon--hidden",attrs:{src:s("b232"),alt:"Submenu"}})])]),a("ul",{staticClass:"submenu menu-top__submenu"},[a("li",{staticClass:"submenu__item"},[a("a",{staticClass:"submenu__link",attrs:{href:"#"}},[e._v("User Guide")])]),a("li",{staticClass:"submenu__item"},[a("a",{staticClass:"submenu__link",attrs:{href:"#"}},[e._v("Contact Support")])])])]),a("li",{staticClass:"menu-top__item"},[a("a",{staticClass:"menu-top__link",attrs:{href:"#"}},[e._v("Features")])])])])}],A=s("2877"),u={},p=Object(A["a"])(u,l,c,!1,null,null,null),m=p.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{class:e.classes,attrs:{type:e.btnType}},[e._v(e._s(e.content))])},g=[],d={props:["content","classes","btnType"]},f=d,h=Object(A["a"])(f,_,g,!1,null,null,null),b=h.exports,v={name:"app",components:{TopMenu:m,SignUp:b},methods:{openMenu:function(){document.querySelector(".mobile-wrap").style.display="flex",document.querySelector(".burger").style.display="none",document.querySelector(".cross").style.display="block"},closeMenu:function(){document.querySelector(".mobile-wrap").style.display="none",document.querySelector(".cross").style.display="none",document.querySelector(".burger").style.display="block"}}},I=v,C=Object(A["a"])(I,o,i,!1,null,null,null),w=C.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"main"},[s("div",{staticClass:"wrapper main__wrapper"},[s("h1",[e._v("Features")]),s("p",{staticClass:"main-text"},[e._v("Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.")]),s("Slider",{attrs:{features:e.features}})],1)])},B=[],y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"slider"},[s("div",{staticClass:"slider__wrapper"},[s("ul",{staticClass:"slider__slides"},e._l(e.features,(function(e){return s("Slide",{key:e.id,attrs:{feature:e}})})),1)]),s("ul",{staticClass:"slider__dots"},[s("li",{staticClass:"slider__dot"},[s("button",{staticClass:"slider__btn slider__btn--0 slider__btn--active",on:{click:function(t){return e.move(0)}}})]),s("li",{staticClass:"slider__dot"},[s("button",{staticClass:"slider__btn slider__btn--1",on:{click:function(t){return e.move(1)}}})]),s("li",{staticClass:"slider__dot slider__dot--mob"},[s("button",{staticClass:"slider__btn slider__btn--2",on:{click:function(t){return e.move(2)}}})]),s("li",{staticClass:"slider__dot slider__dot--mob"},[s("button",{staticClass:"slider__btn slider__btn--3",on:{click:function(t){return e.move(3)}}})])])])},S=[],E=(s("4160"),s("fb6a"),s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"slide slider__slide"},[s("span",{staticClass:"slide__num"},[e._v(e._s(e.feature.id))]),s("h2",{staticClass:"slide__title"},[e._v(e._s(e.feature.title))]),s("p",{staticClass:"slide__text"},[e._v(e._s(e.feature.text))]),e._m(0)])}),U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"slide__link",attrs:{href:"#"}},[e._v("Learn more "),a("picture",[a("source",{attrs:{srcset:s("3f33")}}),a("img",{staticClass:"slide__link-icon",attrs:{src:s("a407"),alt:"Learn more"}})])])}],k={props:["feature"]},F=k,O=Object(A["a"])(F,E,U,!1,null,null,null),x=O.exports,Q={name:"app",props:["features"],components:{Slide:x},methods:{move:function(e){var t;document.querySelectorAll(".slider__btn--active").forEach((function(e){return e.classList.remove("slider__btn--active")})),document.querySelector(".slider__btn--"+e).classList.add("slider__btn--active");var s=document.querySelector(".slider__slides").getAttribute("style");if(t=null==s?0:Math.abs(parseInt(document.querySelector(".slider__slides").getAttribute("style").slice(22,-3))),t<100*e)for(var a=t;a<=100*e;a++)document.querySelector(".slider__slides").style.transform="translateX("+-a+"%)";else if(t>100*e)for(var n=t;n>=100*e;n--)document.querySelector(".slider__slides").style.transform="translateX("+-n+"%)"}}},R=Q,V=Object(A["a"])(R,y,S,!1,null,null,null),G=V.exports,J={name:"app",components:{Slider:G},data:function(){return{features:[{id:1,title:"First Feature",text:"Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers."},{id:2,title:"Second Feature",text:"Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods."},{id:3,title:"Third Feature",text:"Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers."},{id:4,title:"Fourth Feature",text:"Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods."}]}}},Y=J,K=Object(A["a"])(Y,M,B,!1,null,null,null),j=K.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"wrapper footer__wrapper"},[e._m(0),s("BottomMenu"),s("Form")],1)])},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"footer__logo",attrs:{href:"/"}},[a("picture",[a("source",{attrs:{srcset:s("ac1f")}}),a("img",{attrs:{src:s("8e60"),alt:"Logo"}})])])}],N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"menu-bottom footer__menu-bottom"},[s("li",{staticClass:"menu-bottom__item"},[s("a",{staticClass:"menu-bottom__link",attrs:{href:"#"}},[e._v("About Us")])]),s("li",{staticClass:"menu-bottom__item"},[s("a",{staticClass:"menu-bottom__link",attrs:{href:"#"}},[e._v("Privacy Policy")])])])}],P={},L=Object(A["a"])(P,N,T,!1,null,null,null),q=L.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"form"},[s("input",{staticClass:"form__input",attrs:{type:"email",placeholder:"Enter your email"}}),s("SignUp",{attrs:{content:"Sign Up Now",classes:"sign-up sign-up--yellow sign-up--small form__btn","btn-type":"submit"}})],1)},Z=[],W={name:"app",components:{SignUp:b}},$=W,z=Object(A["a"])($,X,Z,!1,null,null,null),ee=z.exports,te={name:"app",components:{BottomMenu:q,Form:ee}},se=te,ae=Object(A["a"])(se,H,D,!1,null,null,null),ne=ae.exports,re={name:"App",components:{Header:w,Main:j,Footer:ne}},oe=re,ie=Object(A["a"])(oe,n,r,!1,null,null,null),le=ie.exports;s("3c61"),s("c847");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(le)}}).$mount("#app")},"6ff5":function(e,t,s){e.exports=s.p+"./img/arrow-open.8b47cf45.svg"},"74d2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGBAMAAAAI3hL1AAAAHlBMVEUAAACXaN+cauObaeGdauOcauGcaeGcaeKcaeKcaeLrjJkiAAAACXRSTlMAIG9wf8/P3+8FhLYwAAAAKUlEQVR42mNgYFBiAAKWmQ4MDAyenVOAzOmClQ4MloUM4pMZTAUYGJMBWoUFyGeXM/gAAAAASUVORK5CYII="},"8e60":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAQAAACXiyoHAAAAxklEQVR42u3Vyw3DIBRE0VeCS3MJlEAHdgd2J6QTSqAESrjZE38GPxaRkrMfjQBpsBGYiCQKAJlEsLGYqbTKwBo2ziw2AgtXNvMicGc2Hwp3KpPvDIroqUgoXr5rUhRPhehf8asVvZOMyDHJiByTjMgxyYgck4zIMcmIHJOMSJ5kT0VGUTwVoi+vKCiyteSk47nlJBFFsJaeZKI++uJ7kswPztCbZOfKage6k6yc2e3AoySBQqsebqwnSSCRASgkIpN96k6+AeAtZRZN7VmKAAAAAElFTkSuQmCC"},"9ce0":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAOVBMVEUAAAAgIFAgIFAgJVUgIFAgIFAgI1MgIFAgI1IiIlIgJFQiIlIgI1MhI1MgIlMhI1MhIlIhI1MhI1OPMHEvAAAAEnRSTlMAECAwMEBQUGB/gI+Qv8/f3+/JoxiOAAAAaElEQVR42t3RSQ7CMBQE0UoCBMwQ/O9/WIQlqxclcQBq+1athvMOuGVf4VR1w63vesKlhtrqANpQW98gaovapLKpMmnMGrPGrPcY1mnu8UVZNmSRrUdtW4vK/vcjrtOkByyvYdbe+NkHTAwN1iCc6xgAAAAASUVORK5CYII="},a407:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQBAMAAADgw5IVAAAALVBMVEUAAACfcN+XaN+aZd+ca+SaaOKaaN+dauObaOGdaeKcaOGcaeKcaeKcaeKcaeK9vcASAAAADnRSTlMAECAwX2Bgf4CPkL/f75hSSVoAAABESURBVHjaY4CCMwIMcHBuA4Kt8xLBZr5XgODkPUGwOd4aIDjrDjGcewcDb1DYcDDvEJzJjqTX7ymSXQ0IN7xCdRuymwHNByVgRxF1ngAAAABJRU5ErkJggg=="},ac1f:function(e,t,s){e.exports=s.p+"./img/logo-bottom.cac67a69.svg"},b100:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYBAMAAABglkJ9AAAAGFBMVEUAAAAgIFAiIlIgJFQgIlIhI1MhIlIhI1MVXDsqAAAAB3RSTlMAIH+AgN/fNeojXgAAAC1JREFUeNpjUC9HA0UM5RiAwbwcDRQzDAog4oIGHBnSy9FAKRYhbBoHBSA3OgCMzkrFYftLAAAAAABJRU5ErkJggg=="},b232:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAMAAAC6q9RHAAAAP1BMVEUAAAAgIFAgIFAgJFQgIFAgI1MgI1IgIlIiIlIgIlQgJFQgIlIiIlIgI1MgIlEiI1MgI1MhIlMhIlIhI1MhI1MKu+GQAAAAFHRSTlMAECBAQFBgcH9/gICPkJCfoM/f77XZ/n0AAABDSURBVHjaY2Bg4WSAAVYREX4Ym1sEwWEUBHJ4kDkcpHGYhIEcdihbCMhmQ6jhIoHJC2QAAR+QKcAAAcxAJsIDXDAWAERtBV+OkfsCAAAAAElFTkSuQmCC"},b3e0:function(e,t,s){e.exports=s.p+"./img/logo-top.7be3851b.svg"},b58e:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAjCAMAAAAKXBK+AAAAeFBMVEUAAADvYK+fcN/vY7acad/vYredaN+aaOLvYribaeGbZuHxYrmdauPvZLebaOHxZLnxYrmdaeLvY7jvY7acaOHwY7nwY7icaeLvY7ebaOHwY7nwY7icauGcaeOcaeHwY7jwYridaeKcaeLwY7nwYrmcaeLwY7icaeKUCTb3AAAAJnRSTlMAEBBQUGBgYHBwcH9/gICPj4+QkJCvr6+wsM/Pz8/P39/f3+/v7+IElFYAAADhSURBVHja5dTJDsIgEIBh7G7dt+JepHbm/d9QkxIFphk4ePM/knyZcJgR4SZVowAuTS4iSzswtXFmDVazCDADp1UQ5OCVhkTri24SGkGqeNFQceSFoqLlBYz07yKppUa8yjJWZD2adBklNmg1jxBzdNoERYFeWUhoX/QJLwokTXkhqTjx4kbFgxc40q+FpuDO7eB59Of8ntdUlB9RUZGLpPeBto505wP1fs3oiG8pHfFu74KlsNu6YDG8Lm2wF24LG+yEqdBo6jN6SRWYnvaZLuQdUcs6ESPlhwuAOlTDkX4BiqSJMjhpVDMAAAAASUVORK5CYII="},c847:function(e,t,s){},fcb0:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGBAMAAAAI3hL1AAAAHlBMVEUAAAAgIFAgJFQgIlIgJFQhIlMhI1MhIlIhI1MhI1POm1VrAAAACXRSTlMAIHBwgM/f3+9CUD7rAAAAK0lEQVR42mNQFWBgDGbQTGQQn8zAMk2w0oGBwXPGFAYGBpaZDgxAoMTAAABrygWWQ2lYyAAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.1da67483.js.map