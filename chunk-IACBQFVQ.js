import{a as ie,b as ne}from"./chunk-EKYBCTOC.js";import{n as re}from"./chunk-VS42UOB6.js";import{c as Jt,e as te,f as ee}from"./chunk-3YEGBNF2.js";import{a as Qt,d as Xt,e as Yt}from"./chunk-R7RN3L5Z.js";import{N as Zt,P as qt,Q as q,Ua as Kt,V as lt,Wa as U,X as ct,Xa as G,_ as Ut,ea as Ct,f as jt,ha as Gt,r as vt,rb as se,ua as yt,xb as ae,yb as oe}from"./chunk-F5QZV3QJ.js";import{$b as j,Aa as ft,Ba as f,Ca as b,Gb as F,Hb as m,Hc as at,I as V,Ia as u,Ib as X,Ja as Q,Jb as c,Kb as _t,L as J,Lb as w,Lc as ot,M as At,Ma as M,N as Et,Na as bt,Oc as _,Sa as Ot,Sb as y,Ub as tt,V as Rt,Vb as et,Wb as it,Xb as z,Y as Mt,Yb as g,Zb as W,_b as Y,bc as N,dc as Wt,ea as ut,ec as x,ga as R,gc as l,hc as Tt,ic as nt,kc as P,kd as Vt,l as $,lb as h,lc as D,ld as rt,mb as p,mc as v,na as Bt,nb as zt,nc as C,oc as Z,pa as Lt,pc as gt,q as K,qc as Pt,rc as $t,sa as O,t as kt,tb as k,u as Dt,ub as Ft,vb as B,w as H,y as pt,yc as Ht,zc as st}from"./chunk-CQROZHDL.js";function ye(n,r){if(n&1&&(Y(0),W(1,"span",1),j()),n&2){let t=r.$implicit;h(),c("nzType",t)}}var xe=()=>({minWidth:"46px"}),Ie=()=>({visible:!1});function Se(n,r){if(n&1&&(Y(0),gt(1),j()),n&2){let t=l().$implicit;h(),$t(" ",t.tab.label," ")}}function we(n,r){if(n&1){let t=N();z(0,"li",7),x("click",function(){let i=f(t).$implicit,s=l(2);return b(s.onSelect(i))})("contextmenu",function(i){let s=f(t).$implicit,a=l(2);return b(a.onContextmenu(s,i))}),m(1,Se,2,1,"ng-container",8),g()}if(n&2){let t=r.$implicit;w("ant-tabs-dropdown-menu-item-disabled",t.disabled),c("nzSelected",t.active)("nzDisabled",t.disabled),h(),c("nzStringTemplateOutlet",t.tab.label)("nzStringTemplateOutletContext",st(6,Ie))}}function Ne(n,r){if(n&1&&(z(0,"ul",4),et(1,we,2,7,"li",6,tt),g()),n&2){let t=l();h(),it(t.items)}}function ke(n,r){if(n&1){let t=N();z(0,"button",9),x("click",function(){f(t);let i=l();return b(i.addClicked.emit())}),g()}if(n&2){let t=l();c("addIcon",t.addIcon)}}var De=["navWarp"],Ae=["navList"],Ee=["*"];function Re(n,r){if(n&1){let t=N();z(0,"button",8),x("click",function(){f(t);let i=l();return b(i.addClicked.emit())}),g()}if(n&2){let t=l();c("addIcon",t.addIcon),X("tabindex",-1)}}function Me(n,r){}function Be(n,r){if(n&1&&(z(0,"div",7),m(1,Me,0,0,"ng-template",9),g()),n&2){let t=l();h(),c("ngTemplateOutlet",t.extraTemplate)}}var Le=["nz-tab-body",""];function Oe(n,r){}function Fe(n,r){if(n&1&&(Y(0),W(1,"span",1),j()),n&2){let t=r.$implicit;h(),c("nzType",t)}}var We=["contentTemplate"],Pe=[[["","nz-tab-link",""]],"*"],$e=["[nz-tab-link]","*"];function He(n,r){n&1&&nt(0)}function Ve(n,r){n&1&&nt(0,1)}var Qe=()=>({visible:!0});function Xe(n,r){if(n&1&&(Y(0),gt(1),j()),n&2){let t=l().$implicit;h(),Pt(t.label)}}function Ye(n,r){if(n&1){let t=N();z(0,"button",10),x("click",function(i){f(t);let s=l().$index,a=l(2);return b(a.onClose(s,i))}),g()}if(n&2){let t=l().$implicit;c("closeIcon",t.nzCloseIcon)}}function je(n,r){if(n&1){let t=N();z(0,"div",6),x("click",function(i){let s=f(t),a=s.$implicit,o=s.$index,d=l(2);return b(d.clickNavItem(a,o,i))})("contextmenu",function(i){let s=f(t).$implicit,a=l(2);return b(a.contextmenuNavItem(s,i))}),z(1,"button",7),m(2,Xe,2,1,"ng-container",8)(3,Ye,1,1,"button",9),g()()}if(n&2){let t=r.$implicit,e=r.$index,i=l(2);_t("margin-right",i.position==="horizontal"?i.nzTabBarGutter:null,"px")("margin-bottom",i.position==="vertical"?i.nzTabBarGutter:null,"px"),w("ant-tabs-tab-active",i.nzSelectedIndex===e)("ant-tabs-tab-disabled",t.nzDisabled),h(),c("id",i.getTabContentId(e))("disabled",t.nzDisabled)("tab",t)("active",i.nzSelectedIndex===e),X("tabIndex",i.getTabIndex(t,e))("aria-disabled",t.nzDisabled)("aria-selected",i.nzSelectedIndex===e&&!i.nzHideAll)("aria-controls",i.getTabContentId(e)),h(),c("nzStringTemplateOutlet",t.label)("nzStringTemplateOutletContext",st(19,Qe)),h(),y(t.nzClosable&&i.closable&&!t.nzDisabled?3:-1)}}function Ze(n,r){if(n&1){let t=N();z(0,"nz-tabs-nav",4),x("tabScroll",function(i){f(t);let s=l();return b(s.nzTabListScroll.emit(i))})("selectFocusedIndex",function(i){f(t);let s=l();return b(s.setSelectedIndex(i))})("addClicked",function(){f(t);let i=l();return b(i.onAdd())}),et(1,je,4,20,"div",5,tt),g()}if(n&2){let t=l();c("ngStyle",t.nzTabBarStyle)("selectedIndex",t.nzSelectedIndex||0)("inkBarAnimated",t.inkBarAnimated)("addable",t.addable)("addIcon",t.nzAddIcon)("hideBar",t.nzHideAll)("position",t.position)("extraTemplate",t.nzTabBarExtraContent),h(),it(t.tabs)}}function qe(n,r){}function Ue(n,r){if(n&1&&m(0,qe,0,0,"ng-template",11),n&2){l();let t=Z(4);c("ngTemplateOutlet",t)}}function Ge(n,r){}function Ke(n,r){if(n&1&&m(0,Ge,0,0,"ng-template",11),n&2){l(2);let t=Z(4);c("ngTemplateOutlet",t)}}function Je(n,r){if(n&1&&m(0,Ke,1,1,null,11),n&2){let t=l().$index,e=l(2);y(e.nzSelectedIndex===t?0:-1)}}function ti(n,r){}function ei(n,r){if(n&1&&m(0,ti,0,0,"ng-template",11),n&2){l(2);let t=Z(4);c("ngTemplateOutlet",t)}}function ii(n,r){if(n&1&&m(0,ei,1,1,null,11),n&2){let t=l(),e=t.$implicit,i=t.$index,s=l(2);y(s.nzSelectedIndex===i||e.hasBeenActive?0:-1)}}function ni(n,r){if(n&1&&W(0,"div",12),n&2){let t=l(),e=t.$implicit,i=t.$index,s=l(2);c("id",s.getTabContentId(i))("active",s.nzSelectedIndex===i)("content",e.content)("animated",s.tabPaneAnimated),X("aria-labelledby",s.getTabContentId(i))}}function si(n,r){if(n&1&&m(0,Ue,1,1,null,11)(1,Je,1,1)(2,ii,1,1)(3,ni,1,5,"ng-template",null,0,at),n&2){let t=r.$implicit,e=l(2);y(t.nzForceRender?0:e.nzDestroyInactiveTabPane?1:2)}}function ai(n,r){if(n&1&&et(0,si,5,1,null,null,tt),n&2){let t=l();it(t.tabs)}}var ht=(()=>{class n{constructor(t){this.elementRef=t,this.addIcon="plus",this.element=this.elementRef.nativeElement}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}static{this.\u0275fac=function(e){return new(e||n)(p(M))}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tab-add-button"],["button","nz-tab-add-button",""]],hostAttrs:["aria-label","Add tab","type","button",1,"ant-tabs-nav-add"],inputs:{addIcon:"addIcon"},decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,i){e&1&&m(0,ye,2,1,"ng-container",0),e&2&&c("nzStringTemplateOutlet",i.addIcon)},dependencies:[G,U,ct,lt],encapsulation:2})}}return n})(),le=(()=>{class n{get _animated(){return this.animationMode!=="NoopAnimations"&&this.animated}constructor(t,e){this.elementRef=t,this.ngZone=e,this.position="horizontal",this.animated=!0,this.animationMode=O(Ot,{optional:!0})}alignToElement(t){this.ngZone.runOutsideAngular(()=>{yt(()=>this.setStyles(t))})}setStyles(t){let e=this.elementRef.nativeElement;this.position==="horizontal"?(e.style.top="",e.style.height="",e.style.left=this.getLeftPosition(t),e.style.width=this.getElementWidth(t)):(e.style.left="",e.style.width="",e.style.top=this.getTopPosition(t),e.style.height=this.getElementHeight(t))}getLeftPosition(t){return t?`${t.offsetLeft||0}px`:"0"}getElementWidth(t){return t?`${t.offsetWidth||0}px`:"0"}getTopPosition(t){return t?`${t.offsetTop||0}px`:"0"}getElementHeight(t){return t?`${t.offsetHeight||0}px`:"0"}static{this.\u0275fac=function(e){return new(e||n)(p(M),p(Q))}}static{this.\u0275dir=B({type:n,selectors:[["nz-tabs-ink-bar"],["","nz-tabs-ink-bar",""]],hostAttrs:[1,"ant-tabs-ink-bar"],hostVars:2,hostBindings:function(e,i){e&2&&w("ant-tabs-ink-bar-animated",i._animated)},inputs:{position:"position",animated:"animated"}})}}return n})(),me=(()=>{class n{constructor(t){this.elementRef=t,this.disabled=!1,this.active=!1,this.el=t.nativeElement,this.parentElement=this.el.parentElement}focus(){this.el.focus()}get width(){return this.parentElement.offsetWidth}get height(){return this.parentElement.offsetHeight}get left(){return this.parentElement.offsetLeft}get top(){return this.parentElement.offsetTop}static{this.\u0275fac=function(e){return new(e||n)(p(M))}}static{this.\u0275dir=B({type:n,selectors:[["","nzTabNavItem",""]],inputs:{disabled:[2,"disabled","disabled",_],tab:"tab",active:[2,"active","active",_]},features:[F]})}}return n})(),xt=(()=>{class n{constructor(t,e){this.cdr=t,this.elementRef=e,this.items=[],this.addable=!1,this.addIcon="plus",this.addClicked=new u,this.selected=new u,this.menuOpened=!1,this.element=this.elementRef.nativeElement}onSelect(t){t.disabled||(t.tab.nzClick.emit(),this.selected.emit(t))}onContextmenu(t,e){t.disabled||t.tab.nzContextmenu.emit(e)}showItems(){clearTimeout(this.closeAnimationWaitTimeoutId),this.menuOpened=!0,this.cdr.markForCheck()}menuVisChange(t){t||(this.closeAnimationWaitTimeoutId=setTimeout(()=>{this.menuOpened=!1,this.cdr.markForCheck()},150))}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}ngOnDestroy(){clearTimeout(this.closeAnimationWaitTimeoutId)}static{this.\u0275fac=function(e){return new(e||n)(p(ot),p(M))}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tab-nav-operation"]],hostAttrs:[1,"ant-tabs-nav-operations"],hostVars:2,hostBindings:function(e,i){e&2&&w("ant-tabs-nav-operations-hidden",i.items.length===0)},inputs:{items:"items",addable:[2,"addable","addable",_],addIcon:"addIcon"},outputs:{addClicked:"addClicked",selected:"selected"},exportAs:["nzTabNavOperation"],features:[F],decls:7,vars:6,consts:[["dropdownTrigger","nzDropdown"],["menu","nzDropdownMenu"],["nz-dropdown","","type","button","tabindex","-1","aria-hidden","true","nzOverlayClassName","nz-tabs-dropdown",1,"ant-tabs-nav-more",3,"nzVisibleChange","mouseenter","nzDropdownMenu","nzOverlayStyle","nzMatchWidthElement"],["nz-icon","","nzType","ellipsis"],["nz-menu",""],["nz-tab-add-button","",3,"addIcon"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"ant-tabs-dropdown-menu-item-disabled","nzSelected","nzDisabled"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"click","contextmenu","nzSelected","nzDisabled"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-add-button","",3,"click","addIcon"]],template:function(e,i){if(e&1){let s=N();z(0,"button",2,0),x("nzVisibleChange",function(o){return f(s),b(i.menuVisChange(o))})("mouseenter",function(){return f(s),b(i.showItems())}),W(2,"span",3),g(),z(3,"nz-dropdown-menu",null,1),m(5,Ne,3,0,"ul",4),g(),m(6,ke,1,1,"button",5)}if(e&2){let s=Z(4);c("nzDropdownMenu",s)("nzOverlayStyle",st(5,xe))("nzMatchWidthElement",null),h(5),y(i.menuOpened?5:-1),h(),y(i.addable?6:-1)}},dependencies:[ct,lt,G,U,ht,ne,ee,te,Jt,ie],encapsulation:2,changeDetection:0})}}return n})(),oi=.1,ce=.01,dt=20,de=.995**dt,ri=(()=>{class n{constructor(t,e){this.ngZone=t,this.elementRef=e,this.lastWheelDirection=null,this.lastWheelTimestamp=0,this.lastTimestamp=0,this.lastTimeDiff=0,this.lastMixedWheel=0,this.lastWheelPrevent=!1,this.touchPosition=null,this.lastOffset=null,this.motion=-1,this.unsubscribe=()=>{},this.offsetChange=new u,this.tabScroll=new u,this.onTouchEnd=i=>{if(!this.touchPosition)return;let s=this.lastOffset,a=this.lastTimeDiff;if(this.lastOffset=this.touchPosition=null,s){let o=s.x/a,d=s.y/a,I=Math.abs(o),A=Math.abs(d);if(Math.max(I,A)<oi)return;let S=o,E=d;this.motion=window.setInterval(()=>{if(Math.abs(S)<ce&&Math.abs(E)<ce){window.clearInterval(this.motion);return}S*=de,E*=de,this.onOffset(S*dt,E*dt,i)},dt)}},this.onTouchMove=i=>{if(!this.touchPosition)return;i.preventDefault();let{screenX:s,screenY:a}=i.touches[0],o=s-this.touchPosition.x,d=a-this.touchPosition.y;this.onOffset(o,d,i);let I=Date.now();this.lastTimeDiff=I-this.lastTimestamp,this.lastTimestamp=I,this.lastOffset={x:o,y:d},this.touchPosition={x:s,y:a}},this.onTouchStart=i=>{let{screenX:s,screenY:a}=i.touches[0];this.touchPosition={x:s,y:a},window.clearInterval(this.motion)},this.onWheel=i=>{let{deltaX:s,deltaY:a}=i,o,d=Math.abs(s),I=Math.abs(a);d===I?o=this.lastWheelDirection==="x"?s:a:d>I?(o=s,this.lastWheelDirection="x"):(o=a,this.lastWheelDirection="y");let A=Date.now(),S=Math.abs(o);(A-this.lastWheelTimestamp>100||S-this.lastMixedWheel>10)&&(this.lastWheelPrevent=!1),this.onOffset(-o,-o,i),(i.defaultPrevented||this.lastWheelPrevent)&&(this.lastWheelPrevent=!0),this.lastWheelTimestamp=A,this.lastMixedWheel=S}}ngOnInit(){this.unsubscribe=this.ngZone.runOutsideAngular(()=>{let t=this.elementRef.nativeElement,e=V(t,"wheel"),i=V(t,"touchstart"),s=V(t,"touchmove"),a=V(t,"touchend"),o=new $;return o.add(this.subscribeWrap("wheel",e,this.onWheel)),o.add(this.subscribeWrap("touchstart",i,this.onTouchStart)),o.add(this.subscribeWrap("touchmove",s,this.onTouchMove)),o.add(this.subscribeWrap("touchend",a,this.onTouchEnd)),()=>{o.unsubscribe()}})}subscribeWrap(t,e,i){return e.subscribe(s=>{this.tabScroll.emit({type:t,event:s}),s.defaultPrevented||i(s)})}onOffset(t,e,i){this.ngZone.run(()=>{this.offsetChange.emit({x:t,y:e,event:i})})}ngOnDestroy(){this.unsubscribe()}static{this.\u0275fac=function(e){return new(e||n)(p(Q),p(M))}}static{this.\u0275dir=B({type:n,selectors:[["","nzTabScrollList",""]],outputs:{offsetChange:"offsetChange",tabScroll:"tabScroll"}})}}return n})(),li=typeof requestAnimationFrame<"u"?Dt:kt,he=150,It=(()=>{class n{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=vt(t);this._selectedIndex!==e&&(this._selectedIndex=t,this.selectedIndexChanged=!0,this.keyManager&&this.keyManager.updateActiveItem(t))}get focusIndex(){return this.keyManager?this.keyManager.activeItemIndex:0}set focusIndex(t){!this.isValidIndex(t)||this.focusIndex===t||!this.keyManager||this.keyManager.setActiveItem(t)}get showAddButton(){return this.hiddenItems.length===0&&this.addable}constructor(t,e,i,s,a){this.cdr=t,this.ngZone=e,this.viewportRuler=i,this.nzResizeObserver=s,this.dir=a,this.indexFocused=new u,this.selectFocusedIndex=new u,this.addClicked=new u,this.tabScroll=new u,this.position="horizontal",this.addable=!1,this.hideBar=!1,this.addIcon="plus",this.inkBarAnimated=!0,this.translate=null,this.transformX=0,this.transformY=0,this.pingLeft=!1,this.pingRight=!1,this.pingTop=!1,this.pingBottom=!1,this.hiddenItems=[],this.destroy$=new K,this._selectedIndex=0,this.wrapperWidth=0,this.wrapperHeight=0,this.scrollListWidth=0,this.scrollListHeight=0,this.operationWidth=0,this.operationHeight=0,this.addButtonWidth=0,this.addButtonHeight=0,this.selectedIndexChanged=!1}ngAfterViewInit(){let t=this.dir?this.dir.change.asObservable():pt(null),e=this.viewportRuler.change(150),i=()=>{this.updateScrollListPosition(),this.alignInkBarToSelectedTab()};this.keyManager=new se(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap(),this.keyManager.updateActiveItem(this.selectedIndex),yt(i),J(this.nzResizeObserver.observe(this.navWarpRef),this.nzResizeObserver.observe(this.navListRef)).pipe(R(this.destroy$),Et(16,li)).subscribe(()=>{i()}),J(t,e,this.items.changes).pipe(R(this.destroy$)).subscribe(()=>{Promise.resolve().then(i),this.keyManager.withHorizontalOrientation(this.getLayoutDirection())}),this.keyManager.change.pipe(R(this.destroy$)).subscribe(s=>{this.indexFocused.emit(s),this.setTabFocus(s),this.scrollToTab(this.keyManager.activeItem)})}ngAfterContentChecked(){this.selectedIndexChanged&&(this.updateScrollListPosition(),this.alignInkBarToSelectedTab(),this.selectedIndexChanged=!1,this.cdr.markForCheck())}ngOnDestroy(){clearTimeout(this.lockAnimationTimeoutId),clearTimeout(this.cssTransformTimeWaitingId),this.destroy$.next(),this.destroy$.complete()}onSelectedFromMenu(t){let e=this.items.toArray().findIndex(i=>i===t);e!==-1&&(this.keyManager.updateActiveItem(e),this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this.scrollToTab(t)))}onOffsetChange(t){if(this.position==="horizontal"){if(!this.lockAnimationTimeoutId&&(this.transformX>=0&&t.x>0||this.transformX<=this.wrapperWidth-this.scrollListWidth&&t.x<0))return;t.event.preventDefault(),this.transformX=this.clampTransformX(this.transformX+t.x),this.setTransform(this.transformX,0)}else{if(!this.lockAnimationTimeoutId&&(this.transformY>=0&&t.y>0||this.transformY<=this.wrapperHeight-this.scrollListHeight&&t.y<0))return;t.event.preventDefault(),this.transformY=this.clampTransformY(this.transformY+t.y),this.setTransform(0,this.transformY)}this.lockAnimation(),this.setVisibleRange(),this.setPingStatus()}handleKeydown(t){let e=this.navWarpRef.nativeElement.contains(t.target);if(!(Ut(t)||!e))switch(t.keyCode){case 37:case 38:case 39:case 40:this.lockAnimation(),this.keyManager.onKeydown(t);break;case 13:case 32:this.focusIndex!==this.selectedIndex&&this.selectFocusedIndex.emit(this.focusIndex);break;default:this.keyManager.onKeydown(t)}}isValidIndex(t){if(!this.items)return!0;let e=this.items?this.items.toArray()[t]:null;return!!e&&!e.disabled}scrollToTab(t){if(!this.items.find(i=>i===t))return;let e=this.items.toArray();if(this.position==="horizontal"){let i=this.transformX;if(this.getLayoutDirection()==="rtl"){let s=e[0].left+e[0].width-t.left-t.width;s<this.transformX?i=s:s+t.width>this.transformX+this.wrapperWidth&&(i=s+t.width-this.wrapperWidth)}else t.left<-this.transformX?i=-t.left:t.left+t.width>-this.transformX+this.wrapperWidth&&(i=-(t.left+t.width-this.wrapperWidth));this.transformX=i,this.transformY=0,this.setTransform(i,0)}else{let i=this.transformY;t.top<-this.transformY?i=-t.top:t.top+t.height>-this.transformY+this.wrapperHeight&&(i=-(t.top+t.height-this.wrapperHeight)),this.transformY=i,this.transformX=0,this.setTransform(0,i)}clearTimeout(this.cssTransformTimeWaitingId),this.cssTransformTimeWaitingId=setTimeout(()=>{this.setVisibleRange()},he)}lockAnimation(){this.lockAnimationTimeoutId||this.ngZone.runOutsideAngular(()=>{this.navListRef.nativeElement.style.transition="none",this.lockAnimationTimeoutId=setTimeout(()=>{this.navListRef.nativeElement.style.transition="",this.lockAnimationTimeoutId=void 0},he)})}setTransform(t,e){this.navListRef.nativeElement.style.transform=`translate(${t}px, ${e}px)`}clampTransformX(t){let e=this.wrapperWidth-this.scrollListWidth;return this.getLayoutDirection()==="rtl"?Math.max(Math.min(e,t),0):Math.min(Math.max(e,t),0)}clampTransformY(t){return Math.min(Math.max(this.wrapperHeight-this.scrollListHeight,t),0)}updateScrollListPosition(){this.resetSizes(),this.transformX=this.clampTransformX(this.transformX),this.transformY=this.clampTransformY(this.transformY),this.setVisibleRange(),this.setPingStatus(),this.keyManager&&(this.keyManager.updateActiveItem(this.keyManager.activeItemIndex),this.keyManager.activeItem&&this.scrollToTab(this.keyManager.activeItem))}resetSizes(){this.addButtonWidth=this.addBtnRef?this.addBtnRef.getElementWidth():0,this.addButtonHeight=this.addBtnRef?this.addBtnRef.getElementHeight():0,this.operationWidth=this.operationRef.getElementWidth(),this.operationHeight=this.operationRef.getElementHeight(),this.wrapperWidth=this.navWarpRef.nativeElement.offsetWidth||0,this.wrapperHeight=this.navWarpRef.nativeElement.offsetHeight||0,this.scrollListHeight=this.navListRef.nativeElement.offsetHeight||0,this.scrollListWidth=this.navListRef.nativeElement.offsetWidth||0}alignInkBarToSelectedTab(){let t=this.items&&this.items.length?this.items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e&&this.inkBar.alignToElement(e.parentElement)}setPingStatus(){let t={top:!1,right:!1,bottom:!1,left:!1},e=this.navWarpRef.nativeElement;this.position==="horizontal"?this.getLayoutDirection()==="rtl"?(t.right=this.transformX>0,t.left=this.transformX+this.wrapperWidth<this.scrollListWidth):(t.left=this.transformX<0,t.right=-this.transformX+this.wrapperWidth<this.scrollListWidth):(t.top=this.transformY<0,t.bottom=-this.transformY+this.wrapperHeight<this.scrollListHeight),Object.keys(t).forEach(i=>{let s=`ant-tabs-nav-wrap-ping-${i}`;t[i]?e.classList.add(s):e.classList.remove(s)})}setVisibleRange(){let t,e,i,s,a,o,d=this.items.toArray(),I={width:0,height:0,left:0,top:0,right:0},A=T=>{let L,mt=d[T]||I;return e==="right"?L=d[0].left+d[0].width-d[T].left-d[T].width:L=mt[e],L};this.position==="horizontal"?(t="width",s=this.wrapperWidth,a=this.scrollListWidth-(this.hiddenItems.length?this.operationWidth:0),o=this.addButtonWidth,i=Math.abs(this.transformX),this.getLayoutDirection()==="rtl"?(e="right",this.pingRight=this.transformX>0,this.pingLeft=this.transformX+this.wrapperWidth<this.scrollListWidth):(this.pingLeft=this.transformX<0,this.pingRight=-this.transformX+this.wrapperWidth<this.scrollListWidth,e="left")):(t="height",s=this.wrapperHeight,a=this.scrollListHeight-(this.hiddenItems.length?this.operationHeight:0),o=this.addButtonHeight,e="top",i=-this.transformY,this.pingTop=this.transformY<0,this.pingBottom=-this.transformY+this.wrapperHeight<this.scrollListHeight);let S=s;if(a+o>s&&(S=s-o),!d.length){this.hiddenItems=[],this.cdr.markForCheck();return}let E=d.length,wt=E;for(let T=0;T<E;T+=1){let L=A(T),mt=d[T]||I;if(L+mt[t]>i+S){wt=T-1;break}}let Nt=0;for(let T=E-1;T>=0;T-=1)if(A(T)<i){Nt=T+1;break}let fe=d.slice(0,Nt),be=d.slice(wt+1);this.hiddenItems=[...fe,...be],this.cdr.markForCheck()}getLayoutDirection(){return this.dir&&this.dir.value==="rtl"?"rtl":"ltr"}setTabFocus(t){}ngOnChanges(t){let{position:e}=t;e&&!e.isFirstChange()&&(this.alignInkBarToSelectedTab(),this.lockAnimation(),this.updateScrollListPosition())}static{this.\u0275fac=function(e){return new(e||n)(p(ot),p(Q),p(Gt),p(re),p(Ct))}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tabs-nav"]],contentQueries:function(e,i,s){if(e&1&&P(s,me,5),e&2){let a;v(a=C())&&(i.items=a)}},viewQuery:function(e,i){if(e&1&&(D(De,7),D(Ae,7),D(xt,7),D(ht,5),D(le,7)),e&2){let s;v(s=C())&&(i.navWarpRef=s.first),v(s=C())&&(i.navListRef=s.first),v(s=C())&&(i.operationRef=s.first),v(s=C())&&(i.addBtnRef=s.first),v(s=C())&&(i.inkBar=s.first)}},hostAttrs:[1,"ant-tabs-nav"],hostBindings:function(e,i){e&1&&x("keydown",function(a){return i.handleKeydown(a)})},inputs:{position:"position",addable:[2,"addable","addable",_],hideBar:[2,"hideBar","hideBar",_],addIcon:"addIcon",inkBarAnimated:"inkBarAnimated",extraTemplate:"extraTemplate",selectedIndex:"selectedIndex"},outputs:{indexFocused:"indexFocused",selectFocusedIndex:"selectFocusedIndex",addClicked:"addClicked",tabScroll:"tabScroll"},exportAs:["nzTabsNav"],features:[F,ft],ngContentSelectors:Ee,decls:9,vars:16,consts:[["navWarp",""],["navList",""],[1,"ant-tabs-nav-wrap"],["nzTabScrollList","","role","tablist",1,"ant-tabs-nav-list",3,"offsetChange","tabScroll"],["role","tab","nz-tab-add-button","",3,"addIcon"],["nz-tabs-ink-bar","",3,"hidden","position","animated"],[3,"addClicked","selected","addIcon","addable","items"],[1,"ant-tabs-extra-content"],["role","tab","nz-tab-add-button","",3,"click","addIcon"],[3,"ngTemplateOutlet"]],template:function(e,i){if(e&1){let s=N();Tt(),z(0,"div",2,0)(2,"div",3,1),x("offsetChange",function(o){return f(s),b(i.onOffsetChange(o))})("tabScroll",function(o){return f(s),b(i.tabScroll.emit(o))}),nt(4),m(5,Re,1,2,"button",4),W(6,"div",5),g()(),z(7,"nz-tab-nav-operation",6),x("addClicked",function(){return f(s),b(i.addClicked.emit())})("selected",function(o){return f(s),b(i.onSelectedFromMenu(o))}),g(),m(8,Be,2,1,"div",7)}e&2&&(w("ant-tabs-nav-wrap-ping-left",i.pingLeft)("ant-tabs-nav-wrap-ping-right",i.pingRight)("ant-tabs-nav-wrap-ping-top",i.pingTop)("ant-tabs-nav-wrap-ping-bottom",i.pingBottom),h(5),y(i.showAddButton?5:-1),h(),c("hidden",i.hideBar)("position",i.position)("animated",i.inkBarAnimated),h(),c("addIcon",i.addIcon)("addable",i.addable)("items",i.hiddenItems),h(),y(i.extraTemplate?8:-1))},dependencies:[ri,ht,le,xt,rt],encapsulation:2,changeDetection:0})}}return n})(),ci=(()=>{class n{constructor(){this.content=null,this.active=!1,this.animated=!0}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=k({type:n,selectors:[["","nz-tab-body",""]],hostAttrs:[1,"ant-tabs-tabpane"],hostVars:10,hostBindings:function(e,i){e&2&&(Wt("@tabSwitchMotion",i.active?"enter":"leave")("@.disabled",!i.animated),X("tabindex",i.active?0:-1)("aria-hidden",!i.active),_t("overflow-y",i.animated?i.active?null:"none":null),w("ant-tabs-tabpane-active",i.active)("ant-tabs-tabpane-hidden",i.animated?null:!i.active))},inputs:{content:"content",active:"active",animated:"animated"},exportAs:["nzTabBody"],attrs:Le,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(e,i){e&1&&m(0,Oe,0,0,"ng-template",0),e&2&&c("ngTemplateOutlet",i.content)},dependencies:[rt],encapsulation:2,data:{animation:[Kt]},changeDetection:0})}}return n})(),pe=(()=>{class n{constructor(){this.closeIcon="close"}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tab-close-button"],["button","nz-tab-close-button",""]],hostAttrs:["aria-label","Close tab","type","button",1,"ant-tabs-tab-remove"],inputs:{closeIcon:"closeIcon"},decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(e,i){e&1&&m(0,Fe,2,1,"ng-container",0),e&2&&c("nzStringTemplateOutlet",i.closeIcon)},dependencies:[G,U,ct,lt],encapsulation:2})}}return n})(),di=(()=>{class n{constructor(){this.templateRef=O(zt,{host:!0})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275dir=B({type:n,selectors:[["ng-template","nzTabLink",""]],exportAs:["nzTabLinkTemplate"]})}}return n})(),hi=(()=>{class n{constructor(t){this.elementRef=t,this.routerLink=O(Yt,{self:!0,optional:!0})}static{this.\u0275fac=function(e){return new(e||n)(p(M))}}static{this.\u0275dir=B({type:n,selectors:[["a","nz-tab-link",""]],exportAs:["nzTabLink"]})}}return n})(),mi=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275dir=B({type:n,selectors:[["","nz-tab",""]],exportAs:["nzTab"]})}}return n})(),ue=new Lt("NZ_TAB_SET"),pi=(()=>{class n{constructor(){this.nzTitle="",this.nzClosable=!1,this.nzCloseIcon="close",this.nzDisabled=!1,this.nzForceRender=!1,this.nzSelect=new u,this.nzDeselect=new u,this.nzClick=new u,this.nzContextmenu=new u,this.template=null,this.isActive=!1,this.hasBeenActive=!1,this.position=null,this.origin=null,this.closestTabSet=O(ue),this.stateChanges=new K}get content(){return this.template||this.contentTemplate}get label(){return this.nzTitle||this.nzTabLinkTemplateDirective?.templateRef}ngOnChanges(t){let{nzTitle:e,nzDisabled:i,nzForceRender:s}=t;(e||i||s)&&this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}setActive(t){this.isActive=t,t&&(this.hasBeenActive=!0)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tab"]],contentQueries:function(e,i,s){if(e&1&&(P(s,di,5),P(s,mi,5,zt),P(s,hi,5)),e&2){let a;v(a=C())&&(i.nzTabLinkTemplateDirective=a.first),v(a=C())&&(i.template=a.first),v(a=C())&&(i.linkDirective=a.first)}},viewQuery:function(e,i){if(e&1&&D(We,7),e&2){let s;v(s=C())&&(i.contentTemplate=s.first)}},inputs:{nzTitle:"nzTitle",nzClosable:[2,"nzClosable","nzClosable",_],nzCloseIcon:"nzCloseIcon",nzDisabled:[2,"nzDisabled","nzDisabled",_],nzForceRender:[2,"nzForceRender","nzForceRender",_]},outputs:{nzSelect:"nzSelect",nzDeselect:"nzDeselect",nzClick:"nzClick",nzContextmenu:"nzContextmenu"},exportAs:["nzTab"],features:[F,ft],ngContentSelectors:$e,decls:4,vars:0,consts:[["tabLinkTemplate",""],["contentTemplate",""]],template:function(e,i){e&1&&(Tt(Pe),m(0,He,1,0,"ng-template",null,0,at)(2,Ve,1,0,"ng-template",null,1,at))},encapsulation:2,changeDetection:0})}}return n})(),St=class{},ui="tabs",fi=0,bi=(()=>{class n{get nzSelectedIndex(){return this.selectedIndex}set nzSelectedIndex(t){this.indexToSelect=vt(t,null)}get position(){return["top","bottom"].indexOf(this.nzTabPosition)===-1?"vertical":"horizontal"}get addable(){return this.nzType==="editable-card"&&!this.nzHideAdd}get closable(){return this.nzType==="editable-card"}get line(){return this.nzType==="line"}get inkBarAnimated(){return this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.inkBar)}get tabPaneAnimated(){return typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.tabPane}constructor(t,e,i,s){this.nzConfigService=t,this.ngZone=e,this.cdr=i,this.directionality=s,this._nzModuleName=ui,this.nzTabPosition="top",this.nzCanDeactivate=null,this.nzAddIcon="plus",this.nzTabBarStyle=null,this.nzType="line",this.nzSize="default",this.nzAnimated=!0,this.nzTabBarGutter=void 0,this.nzHideAdd=!1,this.nzCentered=!1,this.nzHideAll=!1,this.nzLinkRouter=!1,this.nzLinkExact=!0,this.nzDestroyInactiveTabPane=!1,this.nzSelectChange=new u(!0),this.nzSelectedIndexChange=new u,this.nzTabListScroll=new u,this.nzClose=new u,this.nzAdd=new u,this.allTabs=new bt,this.tabs=new bt,this.dir="ltr",this.destroy$=new K,this.indexToSelect=0,this.selectedIndex=null,this.tabLabelSubscription=$.EMPTY,this.tabsSubscription=$.EMPTY,this.canDeactivateSubscription=$.EMPTY,this.router=O(Xt,{optional:!0}),this.tabSetId=fi++}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(R(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.tabs.destroy(),this.tabLabelSubscription.unsubscribe(),this.tabsSubscription.unsubscribe(),this.canDeactivateSubscription.unsubscribe()}ngAfterContentInit(){this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>this.setUpRouter())}),this.subscribeToTabLabels(),this.subscribeToAllTabChanges(),this.tabsSubscription=this.tabs.changes.subscribe(()=>{if(this.clampTabIndex(this.indexToSelect)===this.selectedIndex){let e=this.tabs.toArray();for(let i=0;i<e.length;i++)if(e[i].isActive){this.indexToSelect=this.selectedIndex=i;break}}this.subscribeToTabLabels(),this.cdr.markForCheck()})}ngAfterContentChecked(){let t=this.indexToSelect=this.clampTabIndex(this.indexToSelect);if(this.selectedIndex!==t){let e=this.selectedIndex==null;e||this.nzSelectChange.emit(this.createChangeEvent(t)),Promise.resolve().then(()=>{this.tabs.forEach((i,s)=>i.setActive(s===t)),e||this.nzSelectedIndexChange.emit(t)})}this.tabs.forEach((e,i)=>{e.position=i-t,this.selectedIndex!=null&&e.position===0&&!e.origin&&(e.origin=t-this.selectedIndex)}),this.selectedIndex!==t&&(this.selectedIndex=t,this.cdr.markForCheck())}onClose(t,e){e.preventDefault(),e.stopPropagation(),this.nzClose.emit({index:t})}onAdd(){this.nzAdd.emit()}clampTabIndex(t){return Math.min(this.tabs.length-1,Math.max(t||0,0))}createChangeEvent(t){let e=new St;return e.index=t,this.tabs&&this.tabs.length&&(e.tab=this.tabs.toArray()[t],this.tabs.forEach((i,s)=>{s!==t&&i.nzDeselect.emit()}),e.tab.nzSelect.emit()),e}subscribeToTabLabels(){this.tabLabelSubscription&&this.tabLabelSubscription.unsubscribe(),this.tabLabelSubscription=J(...this.tabs.map(t=>t.stateChanges)).subscribe(()=>this.cdr.markForCheck())}subscribeToAllTabChanges(){this.allTabs.changes.pipe(ut(this.allTabs)).subscribe(t=>{this.tabs.reset(t.filter(e=>e.closestTabSet===this)),this.tabs.notifyOnChanges()})}canDeactivateFun(t,e){return typeof this.nzCanDeactivate=="function"?Zt(this.nzCanDeactivate(t,e)).pipe(Mt(),R(this.destroy$)):pt(!0)}clickNavItem(t,e,i){t.nzDisabled||(t.nzClick.emit(),this.isRouterLinkClickEvent(e,i)||this.setSelectedIndex(e))}isRouterLinkClickEvent(t,e){let i=e.target;return this.nzLinkRouter?!!this.tabs.toArray()[t]?.linkDirective?.elementRef.nativeElement.contains(i):!1}contextmenuNavItem(t,e){t.nzDisabled||t.nzContextmenu.emit(e)}setSelectedIndex(t){this.canDeactivateSubscription.unsubscribe(),this.canDeactivateSubscription=this.canDeactivateFun(this.selectedIndex,t).subscribe(e=>{e&&(this.nzSelectedIndex=t,this.tabNavBarRef.focusIndex=t,this.cdr.markForCheck())})}getTabIndex(t,e){return t.nzDisabled?null:this.selectedIndex===e?0:-1}getTabContentId(t){return`nz-tabs-${this.tabSetId}-tab-${t}`}setUpRouter(){if(this.nzLinkRouter){if(!this.router)throw new Error(`${jt} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);this.router.events.pipe(R(this.destroy$),At(t=>t instanceof Qt),ut(!0),Rt(0)).subscribe(()=>{this.updateRouterActive(),this.cdr.markForCheck()})}}updateRouterActive(){if(this.router?.navigated){let t=this.findShouldActiveTabIndex();t!==this.selectedIndex&&this.setSelectedIndex(t),this.nzHideAll=t===-1}}findShouldActiveTabIndex(){let t=this.tabs.toArray(),e=this.isLinkActive(this.router);return t.findIndex(i=>{let s=i.linkDirective;return s?e(s.routerLink):!1})}isLinkActive(t){return e=>e?!!t?.isActive(e.urlTree||"",{paths:this.nzLinkExact?"exact":"subset",queryParams:this.nzLinkExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"}):!1}static{this.\u0275fac=function(e){return new(e||n)(p(qt),p(Q),p(ot),p(Ct))}}static{this.\u0275cmp=k({type:n,selectors:[["nz-tabset"]],contentQueries:function(e,i,s){if(e&1&&P(s,pi,5),e&2){let a;v(a=C())&&(i.allTabs=a)}},viewQuery:function(e,i){if(e&1&&D(It,5),e&2){let s;v(s=C())&&(i.tabNavBarRef=s.first)}},hostAttrs:[1,"ant-tabs"],hostVars:24,hostBindings:function(e,i){e&2&&w("ant-tabs-card",i.nzType==="card"||i.nzType==="editable-card")("ant-tabs-editable",i.nzType==="editable-card")("ant-tabs-editable-card",i.nzType==="editable-card")("ant-tabs-centered",i.nzCentered)("ant-tabs-rtl",i.dir==="rtl")("ant-tabs-top",i.nzTabPosition==="top")("ant-tabs-bottom",i.nzTabPosition==="bottom")("ant-tabs-left",i.nzTabPosition==="left")("ant-tabs-right",i.nzTabPosition==="right")("ant-tabs-default",i.nzSize==="default")("ant-tabs-small",i.nzSize==="small")("ant-tabs-large",i.nzSize==="large")},inputs:{nzSelectedIndex:"nzSelectedIndex",nzTabPosition:"nzTabPosition",nzTabBarExtraContent:"nzTabBarExtraContent",nzCanDeactivate:"nzCanDeactivate",nzAddIcon:"nzAddIcon",nzTabBarStyle:"nzTabBarStyle",nzType:"nzType",nzSize:"nzSize",nzAnimated:"nzAnimated",nzTabBarGutter:"nzTabBarGutter",nzHideAdd:[2,"nzHideAdd","nzHideAdd",_],nzCentered:[2,"nzCentered","nzCentered",_],nzHideAll:[2,"nzHideAll","nzHideAll",_],nzLinkRouter:[2,"nzLinkRouter","nzLinkRouter",_],nzLinkExact:[2,"nzLinkExact","nzLinkExact",_],nzDestroyInactiveTabPane:[2,"nzDestroyInactiveTabPane","nzDestroyInactiveTabPane",_]},outputs:{nzSelectChange:"nzSelectChange",nzSelectedIndexChange:"nzSelectedIndexChange",nzTabListScroll:"nzTabListScroll",nzClose:"nzClose",nzAdd:"nzAdd"},exportAs:["nzTabset"],features:[Ht([{provide:ue,useExisting:n}]),F],decls:4,vars:12,consts:[["tabpaneTmpl",""],[3,"ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],[1,"ant-tabs-content-holder"],[1,"ant-tabs-content"],[3,"tabScroll","selectFocusedIndex","addClicked","ngStyle","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],[1,"ant-tabs-tab",3,"margin-right","margin-bottom","ant-tabs-tab-active","ant-tabs-tab-disabled"],[1,"ant-tabs-tab",3,"click","contextmenu"],["type","button","role","tab","nzTabNavItem","","cdkMonitorElementFocus","",1,"ant-tabs-tab-btn",3,"id","disabled","tab","active"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["type","button","nz-tab-close-button","",3,"closeIcon"],["type","button","nz-tab-close-button","",3,"click","closeIcon"],[3,"ngTemplateOutlet"],["role","tabpanel","nz-tab-body","",3,"id","active","content","animated"]],template:function(e,i){e&1&&(m(0,Ze,3,8,"nz-tabs-nav",1),z(1,"div",2)(2,"div",3),m(3,ai,2,0),g()()),e&2&&(y(i.tabs.length||i.addable?0:-1),h(2),w("ant-tabs-content-top",i.nzTabPosition==="top")("ant-tabs-content-bottom",i.nzTabPosition==="bottom")("ant-tabs-content-left",i.nzTabPosition==="left")("ant-tabs-content-right",i.nzTabPosition==="right")("ant-tabs-content-animated",i.tabPaneAnimated),h(),y(i.nzHideAll?-1:3))},dependencies:[It,Vt,rt,me,oe,ae,G,U,pe,ci],encapsulation:2})}}return H([q()],n.prototype,"nzType",void 0),H([q()],n.prototype,"nzSize",void 0),H([q()],n.prototype,"nzAnimated",void 0),H([q()],n.prototype,"nzTabBarGutter",void 0),n})();var en=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=Ft({type:n})}static{this.\u0275inj=Bt({imports:[bi,It,xt,ht,pe]})}}return n})();export{pi as a,bi as b,en as c};
