(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{283:function(t,e,n){},287:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h}));const i=/#.*$/,s=/\.(md|html)$/,o=/\/$/,c=/^(https?:|mailto:|tel:)/;function r(t){return c.test(t)}function l(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function d(t){if(r(t))return t;const e=t.match(i),n=e?e[0]:"",c=function(t){return decodeURI(t).replace(i,"").replace(s,"")}(t);return o.test(c)?t:c+".html"+n}function h(t,e,n){if(!t)return n;let i,s=e;for(;(s=s.$parent)&&!i;)i=s.$refs[t];return i&&i.$el&&(i=i.$el),i||n}},305:function(t,e,n){"use strict";n(283)},325:function(t,e,n){"use strict";n.r(e);var i=n(287),s={props:["stick","tag"],data:()=>({needFloat:!1,stickBottom:0}),watch:{stick(){this.unStick(),this.stickHandle()}},mounted(){this.stickHandle()},beforeDestroy(){this.unStick()},methods:{stickHandle(){if(!this.stick)return;const t=Object(i.b)(this.stick,this);t&&(this._stickerScroll=()=>{const e=this.$el.getBoundingClientRect(),n=document.body.scrollTop+document.documentElement.scrollTop;this.needFloat=document.body.offsetHeight-n-e.height<t.offsetHeight,this.stickBottom=t.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))},unStick(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},o=(n(305),n(4)),c=Object(o.a)(s,(function(){return(0,this._self._c)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null);e.default=c.exports}}]);