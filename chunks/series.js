(self.webpackChunk=self.webpackChunk||[]).push([["series"],{5070:(e,t,r)=>{var n=r(930),s=r(8759),i=r(7530);e.exports=function(e,t,r){var o,a;return i&&n(o=t.constructor)&&o!==r&&s(a=o.prototype)&&a!==r.prototype&&i(e,a),e}},2031:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},5773:e=>{var t=1..valueOf;e.exports=function(e){return t.call(e)}},7471:(e,t,r)=>{"use strict";var n=r(1695),s=r(6198).indexOf,i=r(2802),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0,l=i("indexOf");n({target:"Array",proto:!0,forced:a||!l},{indexOf:function(e){return a?o.apply(this,arguments)||0:s(this,e,arguments.length>1?arguments[1]:void 0)}})},5163:(e,t,r)=>{"use strict";var n=r(5283),s=r(2086),i=r(7189),o=r(1007),a=r(9606),l=r(5070),u=r(2071),c=r(1288),p=r(3677),f=r(62).f,h=r(4399).f,g=r(7826).f,d=r(5773),b=r(4080).trim,m="Number",y=s.Number,v=y.prototype,k=function(e){var t=c(e,"number");return"bigint"==typeof t?t:_(t)},_=function(e){var t,r,n,s,i,o,a,l,p=c(e,"number");if(u(p))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof p&&p.length>2)if(43===(t=(p=b(p)).charCodeAt(0))||45===t){if(88===(r=p.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(p.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+p}for(o=(i=p.slice(2)).length,a=0;a<o;a++)if((l=i.charCodeAt(a))<48||l>s)return NaN;return parseInt(i,n)}return+p};if(i(m,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var x,S=function(e){var t=arguments.length<1?0:y(k(e)),r=this;return r instanceof S&&p((function(){d(r)}))?l(Object(t),r,S):t},N=n?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),I=0;N.length>I;I++)a(y,x=N[I])&&!a(S,x)&&g(S,x,h(y,x));S.prototype=v,v.constructor=S,o(s,m,S)}},2759:(e,t,r)=>{var n=r(5283),s=r(2086),i=r(7189),o=r(5070),a=r(2585),l=r(7826).f,u=r(62).f,c=r(7994),p=r(4059),f=r(4276),h=r(4930),g=r(1007),d=r(3677),b=r(9606),m=r(3278).enforce,y=r(7420),v=r(211),k=r(2582),_=r(2910),x=v("match"),S=s.RegExp,N=S.prototype,I=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,M=/a/g,E=/a/g,O=new S(M)!==M,w=h.UNSUPPORTED_Y;if(i("RegExp",n&&(!O||w||k||_||d((function(){return E[x]=!1,S(M)!=M||S(E)==E||"/a/i"!=S(M,"i")}))))){for(var R=function(e,t){var r,n,s,i,l,u,h=this instanceof R,g=c(e),d=void 0===t,y=[],v=e;if(!h&&g&&d&&e.constructor===R)return e;if((g||e instanceof R)&&(e=e.source,d&&(t="flags"in v?v.flags:f.call(v))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),v=e,k&&"dotAll"in M&&(n=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),r=t,w&&"sticky"in M&&(s=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),_&&(i=function(e){for(var t,r=e.length,n=0,s="",i=[],o={},a=!1,l=!1,u=0,c="";n<=r;n++){if("\\"===(t=e.charAt(n)))t+=e.charAt(++n);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:I.test(e.slice(n+1))&&(n+=2,l=!0),s+=t,u++;continue;case">"===t&&l:if(""===c||b(o,c))throw new SyntaxError("Invalid capture group name");o[c]=!0,i.push([c,u]),l=!1,c="";continue}l?c+=t:s+=t}return[s,i]}(e),e=i[0],y=i[1]),l=o(S(e,t),h?this:N,R),(n||s||y.length)&&(u=m(l),n&&(u.dotAll=!0,u.raw=R(function(e){for(var t,r=e.length,n=0,s="",i=!1;n<=r;n++)"\\"!==(t=e.charAt(n))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),s+=t):s+="[\\s\\S]":s+=t+e.charAt(++n);return s}(e),r)),s&&(u.sticky=!0),y.length&&(u.groups=y)),e!==v)try{a(l,"source",""===v?"(?:)":v)}catch(e){}return l},B=function(e){e in R||l(R,e,{configurable:!0,get:function(){return S[e]},set:function(t){S[e]=t}})},T=u(S),A=0;T.length>A;)B(T[A++]);N.constructor=R,R.prototype=N,g(s,"RegExp",R)}y("RegExp")},9254:(e,t,r)=>{"use strict";var n=r(2331),s=r(6112),i=r(9586),o=r(2031),a=r(4059),l=r(2964),u=r(1189);n("search",(function(e,t,r){return[function(t){var r=i(this),n=null==t?void 0:l(t,e);return n?n.call(t,r):new RegExp(t)[e](a(r))},function(e){var n=s(this),i=a(e),l=r(t,n,i);if(l.done)return l.value;var c=n.lastIndex;o(c,0)||(n.lastIndex=0);var p=u(n,i);return o(n.lastIndex,c)||(n.lastIndex=c),null===p?-1:p.index}]}))},7617:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o}),r(2327),r(8010),r(1013),r(9217);var n=r(3486),s=r(7758);const i={name:"aleSeries",components:{aleSearch:r(1035).Z,lazy:s.Z},mixins:[n.Z],data:function(){return{collectionSource:"pageCollection",pageTitle:"Series",pageSubTitle:null,listReady:!1}},computed:{optionsOpenMargin:function(){return!!this.$store.state.searchOptOpenHeight&&{marginBottom:0}},galleryStyle:function(){return!!this.$store.state.searchOptOpenHeight&&{overflow:"hidden",height:this.$store.state.searchOptOpenHeight-2*this.$refs.wrapper.offsetTop+"px"}}},methods:{makeCollection:function(){var e=this,t=[],r=1,n=this.$store.state.library.series;_.eachRight(e.subPageSource.collection,(function(s){s.series&&_.each(s.series,(function(i){var o,a,l,u=_.find(t,{asin:i.asin}),c=!!n&&_.find(n,{asin:i.asin});if(u)u.books.push(s.title||s.shortTitle),e.subPageSource.library&&(u.minRating=_.min([u.minRating,s.myRating].map(_.toNumber).filter((function(e){return!_.isNaN(e)}))),u.allBooksMinusDupes=c.allBooksMinusDupes,u.missingLatest=l!==a);else{e.subPageSource.library&&(c.allBooksMinusDupes=e.removeDuplicates(c.allBooks),o=c.allBooksMinusDupes.filter((function(e){return c.books.some((function(t){return t===e.asin}))})),a=_.max(c.allBooksMinusDupes.map((function(e){return _.toNumber(e.bookNumbers)}))),l=_.max(o.map((function(e){return _.toNumber(e.bookNumbers)}))));var p={name:i.name,asin:i.asin,added:r,books:[s.title||s.shortTitle],authors:s.authors,narrators:s.narrators,publishers:s.publishers};e.subPageSource.library&&c?(++r,p.minRating=_.toNumber(s.myRating),p.allBooksMinusDupes=c.allBooksMinusDupes,p.missingLatest=l!==a,t.push(p)):e.subPageSource.wishlist&&(++r,t.push(p))}}))})),_.reverse(t),this.$store.commit("prop",{key:"pageCollection",value:t}),this.updateListRenderingOptions(),this.listReady=!0},updateListRenderingOptions:function(){var e,t,r=this,n={scope:[{active:!0,key:"name",tippy:"Search series by name"},{active:!0,key:"books",tippy:"Search series by book titles"},{active:!0,key:"authors.name",tippy:"Search series by authors"},{active:!0,key:"narrators.name",tippy:"Search series by narrators"},{active:!0,key:"publishers.name",tippy:"Search series by publishers"}],filter:[{active:!1,type:"filterExtras",label:"Number of books",key:"inSeries",range:[1,(e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length})),t?t.books.length:1)],rangeMinDist:0,rangeSuffix:"",rangeMin:function(){return 1},rangeMax:function(){var e=_.get(r.$store.state,r.collectionSource),t=_.maxBy(e,(function(e){if(e.books)return e.books.length}));return t?t.books.length:1},condition:function(e){if(e.books){var t=this.range[0],r=this.range[1];return e.books.length>=t&&e.books.length<=r}}},{excludeFromWishlist:!0,type:"divider",key:"divider1.0"},{excludeFromWishlist:!0,active:!1,type:"filterExtras",label:"Rating (min)",tippy:"Based on the book you rated lowest in the series",key:"min-rating",condition:function(e){return(e.minRating||0)>=this.range[0]},range:!0,rangeMin:function(){return 1},rangeMax:function(){return 5},rangeMinDist:0,rangeSuffix:"",tooltipFormatter:function(e){switch(e){case 1:return e+" (Not for me)";case 2:return e+" (It’s okay)";case 3:return e+" (Pretty good)";case 4:return e+" (It’s great)";case 5:return e+" (I love it)"}}},{excludeFromWishlist:!0,type:"divider",key:"divider1.1"},{excludeFromWishlist:!0,active:!1,type:"filterExtras",label:"Incomplete series",key:"series-incomplete",tippy:"Series where I don't own all the books",condition:function(e){return e.allBooksMinusDupes.length>e.books.length}},{excludeFromWishlist:!0,type:"divider",key:"divider1.2"},{excludeFromWishlist:!0,active:!1,type:"filterExtras",label:"Missing latest book",key:"missing-latest",condition:function(e){return e.missingLatest&&e.allBooksMinusDupes.length>e.books.length}}],sort:[{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"name",label:"Name",type:"sort",tippy:"Sort by series name"},{active:!1,current:!1,key:"amount",label:"Number of books",type:"sort"},{excludeFromWishlist:!0,active:!1,current:!1,key:"amountTotal",label:"Total number of books",type:"sort"},{excludeFromWishlist:!0,active:!1,current:!1,key:"missing",label:"Missing",tippy:"Number of missing books",type:"sort"}]};this.subPageSource.wishlist&&(n.filter=_.filter(n.filter,(function(e){return!e.excludeFromWishlist})),n.sort=_.filter(n.sort,(function(e){return!e.excludeFromWishlist}))),this.$setListRenderingOpts(n)},removeDuplicates:function(e){var t=_.clone(e),r=0;return _.each(t,(function(e){e.order=++r})),t=_.groupBy(t,"bookNumbers"),_.each(t,(function(e,r){if(1===e.length)t[r]=[e[0]];else{var n=_.filter(e,(function(e){return!e.notInLibrary}));n.length>0?t[r]=n:t[r]=[e[0]]}})),t=_.map(t,(function(e){return e})),t=_.flatten(t),t=_.orderBy(t,"order","asc")}}},o=(0,r(810).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$store.state.pageCollection&&e.$store.state.pageCollection.length&&e.listReady?r("div",{ref:"wrapper",staticClass:"box-layout-wrapper",style:e.optionsOpenMargin,attrs:{id:"ale-series"}},[r("ale-search",{attrs:{collectionSource:e.collectionSource,pageTitle:e.pageTitle,pageSubTitle:e.pageSubTitle}}),e._v(" "),r("div",{staticClass:"page-content",style:e.galleryStyle},e._l(e.$store.getters.collection,(function(t,n){return t.asin?r("lazy",{key:"series:"+t.asin,staticClass:"single-box",attrs:{"data-asin":t.asin}},[r("router-link",{attrs:{to:{name:"series",params:{series:t.asin},query:{subPageSource:e.subPageSource.name}}}},[r("h2",[e._v(e._s(t.name))]),e._v(" "),t.books&&t.books.length?r("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right"},expression:"{ placement: 'right' }"}],staticClass:"books-total",attrs:{content:"Total number of books I have in this series."}},[r("span",{class:{"my-books":t.allBooksMinusDupes&&t.allBooksMinusDupes.length}},[e._v(e._s(t.books.length))]),t.allBooksMinusDupes&&t.allBooksMinusDupes.length?r("span",[e._v(" of "+e._s(t.allBooksMinusDupes.length))]):e._e()]):e._e()])],1):e._e()})),1)],1):e._e()}),[],!1,null,"42564445",null).exports},7758:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const n={name:"lazy",props:["row","tag"],data:function(){return{observer:null,intersected:!1}},mounted:function(){this.$nextTick((function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.observer.disconnect())}),{threshold:0,rootMargin:"100px"}),this.observer.observe(this.$el)}))},destroyed:function(){this.observer&&this.observer.disconnect()}},s=(0,r(810).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tag?"td"===e.tag?r("td",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2):e._e():r("div",{class:{mounted:e.intersected}},[e.intersected?e._t("default"):e._e()],2)}),[],!1,null,null,null).exports}}]);