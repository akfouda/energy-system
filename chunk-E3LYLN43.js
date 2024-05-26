import{A as _,Gc as u,M as h,Ob as S,V as k,X as f,Y as y,Z as i,ea as w,ec as O,g as d,gc as b,h as p,i as g,r as v,wc as C,y as m}from"./chunk-RXZSH6MS.js";var E={store_key:"_token",token_invalid_redirect:!0,token_exp_offset:10,token_send_key:"token",token_send_template:"${token}",token_send_place:"header",login_url:"/login",refreshTime:3e3,refreshOffset:6e3,ignores:[/\/assets\//]};function A(e){return e.merge("auth",E)}function D(){return new l}var l=class{get(t){return JSON.parse(localStorage.getItem(t)||"{}")||{}}set(t,o){return localStorage.setItem(t,JSON.stringify(o)),!0}remove(t){localStorage.removeItem(t)}},I=new f("AUTH_STORE_TOKEN",{providedIn:"root",factory:D});function N(){return new R(i(u))}var R=(()=>{let t=class t{constructor(r){this.store=i(I),this.refresh$=new p,this.change$=new g(null),this._referrer={},this._options=A(r)}get refresh(){return this.builderRefresh(),this.refresh$.pipe(h())}get login_url(){return this._options.login_url}get referrer(){return this._referrer}get options(){return this._options}set(r){let n=this.store.set(this._options.store_key,r);return this.change$.next(r),n}get(r){let n=this.store.get(this._options.store_key);return r?Object.assign(new r,n):n}clear(r={onlyToken:!1}){let n=null;r.onlyToken===!0?(n=this.get(),n.token="",this.set(n)):this.store.remove(this._options.store_key),this.change$.next(n)}change(){return this.change$.pipe(h())}builderRefresh(){let{refreshTime:r,refreshOffset:n}=this._options;this.cleanRefresh(),this.interval$=m(r).pipe(v(()=>{let s=this.get(),c=s.expired||s.exp||0;if(c<=0)return null;let a=new Date().valueOf()+n;return c<=a?s:null}),_(s=>s!=null)).subscribe(s=>this.refresh$.next(s))}cleanRefresh(){this.interval$&&!this.interval$.closed&&this.interval$.unsubscribe()}ngOnDestroy(){this.cleanRefresh()}};t.\u0275fac=function(n){return new(n||t)(y(u))},t.\u0275prov=k({token:t,factory:t.\u0275fac});let e=t;return e})(),T=new f("DA_SERVICE_TOKEN",{providedIn:"root",factory:N});function $(e){return e!=null&&typeof e.token=="string"&&e.token.length>0}function M(e,t){let o=i(C),r=i(T),n=i(S);r.referrer.url=t||o.url,e.token_invalid_redirect===!0&&setTimeout(()=>{/^https?:\/\//g.test(e.login_url)?n.location.href=e.login_url:o.navigate([e.login_url])})}var U=new O(()=>!1);function j(e,t){if(e.context.get(U))return!0;if(Array.isArray(t.ignores)){for(let o of t.ignores)if(o.test(e.url))return!0}return!1}function L(e,t){return M(t),new d(o=>{let r="",n=new b({url:e.url,headers:e.headers,status:401,statusText:r});o.error(n)})}function F(e,t,o){let{token_send_template:r,token_send_key:n}=o,s=r.replace(/\$\{([\w]+)\}/g,(c,a)=>t[a]);switch(o.token_send_place){case"header":let c={};c[n]=s,e=e.clone({setHeaders:c});break;case"body":let a=e.body||{};a[n]=s,e=e.clone({body:a});break;case"url":e=e.clone({params:e.params.append(n,s)});break}return e}var G=(e,t)=>{let o=A(i(u));if(j(e,o))return t(e);let r=i(T).get();return $(r)?t(F(e,r,o)):L(e,o)};var x=function(e){return e[e.Store=0]="Store",e}(x||{});function J(e,t){return{\u0275kind:e,\u0275providers:t}}function q(e){return w([(e??H()).\u0275providers])}function H(){return J(x.Store,[{provide:I,useClass:l}])}export{T as a,G as b,q as c};