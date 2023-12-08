"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79879,35012],{4784:function(e,n,t){t.d(n,{k:function(){return l}});var o=function(e){var n=e.musicSubscriptions,t=e.flexSubscriptions,o=n&&(null==n?void 0:n.length)<1||(null==n?void 0:n.length)===void 0,i=t&&(null==t?void 0:t.length)<1||(null==t?void 0:t.length)===void 0;return o&&i?{userHasPremiumMusicSub:!1,userHasMusicSubs:!1,userHasFlexSub:!1}:{userHasPremiumMusicSub:Boolean(n.find(function(e){var n;return/music_premium/g.test(null==e?void 0:null===(n=e.product)||void 0===n?void 0:n.name)})||!1),userHasMusicSubs:!o,userHasFlexSub:!i}},i=t(8149),a=t(95902),r=t(65532),s=t(44297),c=t(62767),l=function(e){var n=e.asset,t=(0,r.PE)().region,l=(0,c.av)().data,u=o(l||{musicSubscriptions:[],flexSubscriptions:[]}),d=u.userHasPremiumMusicSub,p=u.userHasFlexSub,f=u.userHasMusicSubs,m=(0,s.O)({track:n,useContentTier:!0})||!1,h=t===a.g7;return(null==n?void 0:n.type)!==i.jr||h||d||!l||p?{showMusicConversionPanel:!1,isLoading:!l}:m?{showMusicConversionPanel:(!d||!f)&&!p,isLoading:!l}:{showMusicConversionPanel:!f&&!p,isLoading:!l}}},39593:function(e,n,t){t.d(n,{B:function(){return c}});var o=t(70865),i=t(52322),a=t(62197),r=t(25709),s=(0,t(8740).ZL)()(function(e,n){var t=e.palette,i=e.tokens,a=i.fontSize,r=i.fontWeight,s=n.showDesignUpliftP32215;return{pricing:{display:"flex",flexWrap:"wrap",alignItems:"baseline",justifyContent:"center",gap:s?"0 2px":"0 5px"},priceValue:(0,o.Z)({},s&&{fontSize:"60px"}),pricingDetails:{fontSize:s?a.m:a.xl,fontWeight:r.normal},pricingDetailsAnnotation:{flexBasis:"100%",fontSize:a.s,fontWeight:r.normal,display:"block",color:t.action.active,whiteSpace:"pre-wrap"}}}),c=function(e){var n=e.productPrice,t=e.pricingDetails,o=e.pricingDetailsAnnotation,c=s({showDesignUpliftP32215:(0,r.u)().showDesignUpliftP32215}).classes;return(0,i.jsxs)(a.Z,{className:c.pricing,variant:"h4",align:"center",children:[(0,i.jsx)("span",{className:c.priceValue,children:n}),t&&(0,i.jsx)("span",{className:c.pricingDetails,children:" ".concat(t)}),o&&(0,i.jsx)("span",{className:c.pricingDetailsAnnotation,children:" ".concat(o)})]})};c.defaultProps={pricingDetails:null,pricingDetailsAnnotation:null}},24401:function(e,n,t){t.d(n,{i:function(){return e3}});var o=t(70865),i=t(96670),a=t(50930),r=t(52322),s=t(72841),c=t(47842),l=t(83415),u=t(41075),d=t(62197),p=t(79441),f=t(65532),m=t(26051),h=t(44297),v=t(87394),g=t(2784),b=t(19819),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.threshold,t=void 0===n?1/0:n,o=e.skip,i=void 0!==o&&o,a=e.initialStateValue,r=(0,v.Z)((0,g.useState)(void 0!==a&&a),2),s=r[0],c=r[1];return(0,g.useEffect)(function(){if(!i){var e=(0,b.Zc)(function(){window.pageYOffset>=t?c(!0):c(!1)});return window.addEventListener("scroll",e,{passive:!0}),function(){return e&&window.removeEventListener("scroll",e)}}},[t,i]),s},y=t(8655),x=t(43822),w=t(58487),P=t(94909),L=t(81166),Z=t(8740),I=t(26297),k=t(67550),S=t(46730),B=t(47999),A=t(59481),j=t(81034),N=t(9823),D=t(776),T=(0,Z.ZL)()(function(e){var n,t=e.breakpoints,o=e.palette,i=e.tokens,a=i.spacing,r=i.fontSize;return{root:(n={color:o.info.main,display:"flex",marginTop:a.s},(0,c.Z)(n,t.up("sm"),{marginTop:a.base}),(0,c.Z)(n,"& > *:not(:first-of-type)",(0,c.Z)({marginLeft:a.s},t.up("md"),{marginLeft:a.base})),n),buttonWrapper:{display:"flex"},buttonProgress:{position:"absolute"},actionLabel:(0,c.Z)({},t.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,c.Z)({},t.down("md"),{fontSize:r.icon})},startIcon:(0,c.Z)({},t.down("md"),{margin:0})}}),M=function(e){var n=e.hasIcon,t=e.withActionLabel;return n&&t?"contained":t?"text":void 0},R=function(e){var n=e.Icon,t=e.withActionLabel,o=!!n;return{color:o?"primary":"inherit",variant:M({hasIcon:o,withActionLabel:t}),startIcon:t?n:void 0,size:t?"medium":"small"}},F=function(e){var n=e.classesProps,t=e.buttons,a=e.withActionLabel,l=e.color,u=T(),d=u.classes,p=u.cx,f=(0,S.G)({color:l}).classes,m=a?B.z:A.h,h=(0,N.D)().isBrandSstk;return(0,r.jsx)(D.Mp,{value:j.Bh8,children:(0,r.jsx)(k.Z,{className:p(d.root,n.rootContainer),children:t.map(function(e){var t,l=e.label,u=e.href,v=e.onClick,g=e.isLoading,b=e.disabled,C=e.show,y=e.Icon,x=e.clickAnalyticsLabel,w=(0,I.Z)(e,["label","href","onClick","isLoading","disabled","show","Icon","clickAnalyticsLabel"]);return(void 0===C||C)&&(0,r.jsx)(k.Z,{className:d.buttonWrapper,children:(0,r.jsx)(m,(0,i.Z)((0,o.Z)({classes:{root:n.buttonRoot,iconSizeMedium:d.iconSizeMedium,startIcon:f.startIcon},className:p((t={},(0,c.Z)(t,f.buttonAnchor,!y),(0,c.Z)(t,f.buttonVariantFilter,!!y),t)),onClick:v,href:u,disabled:g||b,"aria-label":l,labelTrack:h?x:l},R({Icon:y,withActionLabel:a}),w),{children:a?(0,r.jsxs)(r.Fragment,{children:[g&&(0,r.jsx)(s.Z,{color:"inherit",size:18,className:d.buttonProgress}),(0,r.jsx)("span",{className:d.actionLabel,children:l})]}):y}))},l)})})})};F.defaultProps={classesProps:{},withActionLabel:!0};var _=t(38677),E=t(85801),O=(0,Z.ZL)()(function(e){var n=e.breakpoints,t=e.tokens,o=t.spacing,i=t.fontSize;return{actionRoot:(0,c.Z)({padding:o.s},n.up("md"),{padding:o.base,marginLeft:o.base}),actionLabel:(0,c.Z)({},n.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,c.Z)({},n.down("md"),{fontSize:i.icon})},startIcon:(0,c.Z)({},n.down("md"),{margin:0})}}),U=function(e){var n=e.buttonProps,t=e.IconComponent,a=e.labels,s=e.color,c=(0,S.G)({color:s}).classes,l=O(),u=l.classes,d=l.cx;return(0,r.jsx)(_.Z,(0,i.Z)((0,o.Z)({},n),{classes:{root:c.actionVariantRoot,iconSizeMedium:u.iconSizeMedium,startIcon:c.startIcon},className:d(c.buttonVariantFilter,n.className),color:"primary",variant:"contained",startIcon:(0,r.jsx)(t,{}),children:(0,r.jsx)("span",{className:u.actionLabel,children:a.share})}))},z=function(e){var n=e.buttonProps,t=e.IconComponent,a=e.isVariant,s=(0,S.G)({isVariant:a}).classes,c=O(),l=c.classes,u=c.cx;return(0,r.jsx)(E.Z,(0,i.Z)((0,o.Z)({},n),{classes:{root:u(l.actionRoot,n.className)},className:s.buttonVariantFilter,color:"primary",size:"small",children:(0,r.jsx)(t,{})}))},V=t(98788),G=t(45680),H=t(68052),W=t(44417),K=t(44699),q=t(73572),Y=t(37546),Q=t(48433),X=t(54112),J=t(78809),$=t(96109),ee=t(9694),en=t(75724),et=t(1774),eo=t(34273),ei=t.n(eo),ea=t(70314),er=t.n(ea),es=t(25237),ec=t.n(es),el=er()().publicRuntimeConfig.shutterstockBaseUrl,eu=ec()(function(){return t.e(51935).then(t.bind(t,51935)).then(function(e){return e.DynamicMenuDropdownContent})},{loadableGenerated:{webpack:function(){return[51935]}},ssr:!1}),ed="action-menu",ep=function(e){var n=e.asset,t=e.labels,o=e.onCloseHandler,i=e.productSharedAnalyticsEvent,a=e.shareLink,r=e.shouldTrackAnalytics,s=e.twitterCopy,c=e.setCopyLinkStatus,l=e.pageSection;return[{label:q.vq,Icon:ee.s,href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(a)),isLink:!0,hasDivider:!1,onClick:function(){r&&i({asset:n,shareVia:q.vq,pageSection:l}),o()}},{label:q.Ib,Icon:en.t,href:"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(a),"&text=").concat(void 0===s?"":s),isLink:!0,hasDivider:!1,onClick:function(){r&&i({asset:n,shareVia:q.Ib,pageSection:l}),o()}},{label:t.copy,Icon:et.C,isLink:!1,onClick:(0,V.Z)(function(){var e;return(0,G.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),[4,ei()(a)];case 1:return t.sent(),r&&i({asset:n,shareVia:"copyLink",pageSection:l}),c({status:K.MR,error:void 0}),[3,4];case 2:return e=t.sent(),c({status:K.pn,error:e}),[3,4];case 3:return o(),[7];case 4:return[2]}})}),hasDivider:!0}]},ef={share:"common:actions_share",email:"account:profile_email",copy:"common:actions_copy",copyToClipBoardSuccess:"developers:apps_copied_to_clipboard",copyToClipBoardWarning:"notifications:label_generic_failure"},em=function(e){var n=e.asset,t=e.ButtonComponent,a=e.classes,s=e.IconComponent,c=e.hasTooltip,l=e.iconContainerClassName,u=e.shouldTrackAnalytics,d=e.clickAnalyticsLabel,p=e.size,f=e.color,m=(0,D.yh)().analytics,h=d.pageSection,b=d.eventLabel,C=(0,X.D)({namespace:H.VQ6,translationKeys:ef}).labels,y=n.type,x=n.description,w=(0,J.M)(),P=(0,Y.Lr)(n),L=(0,v.Z)((0,$.r)((0,i.Z)((0,o.Z)({},P),{assetType:y,slug:w({description:x})})),1)[0],Z=(0,v.Z)((0,g.useState)(null),2),I=Z[0],k=Z[1],S=(0,v.Z)((0,g.useState)(!1),2),B=S[0],A=S[1],N=(0,v.Z)((0,g.useState)({status:"",error:void 0}),2),T=N[0],M=N[1],R=(0,Q.W)(),F=function(){B||A(!0)},_=function(e){F(),k(e)},E=function(){return _(null)},O=ep({asset:n,labels:C,onCloseHandler:E,productSharedAnalyticsEvent:R,setCopyLinkStatus:M,shareLink:"".concat(el).concat(L),shouldTrackAnalytics:u,twitterCopy:x,pageSection:j.df}),U=(0,i.Z)((0,o.Z)({size:p,"aria-label":C.share},B&&I&&{"aria-controls":ed}),{"aria-haspopup":"true",className:a.button,onClick:function(e){u&&m.click({pageSection:h||j.hTM,eventLabel:b||j.$cX}),_(e.currentTarget)},onMouseEnter:F});return(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)(t,{IconComponent:s,buttonProps:U,labels:C,color:f,hasTooltip:c}),B&&(0,r.jsx)(eu,{id:ed,anchorEl:I,menuOptions:O,onCloseHandler:E}),(0,r.jsx)(W.Y,{alertSeverity:T.status,error:T.error,handleSnackbarClose:function(){return M({status:""})},isOpen:!!T.status,message:T.status===K.MR?C.copyToClipBoardSuccess:C.copyToClipBoardWarning})]})};em.defaultProps={classes:{},clickAnalyticsLabel:{},hasTooltip:!1,shouldTrackAnalytics:!1,IconComponent:L.m,size:"small"};var eh=(0,Z.ZL)()(function(e,n){var t,i,a=e.breakpoints,r=e.tokens,s=r.size,l=r.spacing,u=n.flexBreakpoint,d=n.isCentered;return{root:(0,o.Z)({display:"flex",flexDirection:"column",justifyContent:"center",marginTop:l.base,minHeight:s.density.high},"md"===u?(0,c.Z)({},a.up("md"),{marginTop:0,flexDirection:"row"}):(t={},(0,c.Z)(t,a.up("md"),{marginTop:0,marginBottom:l.base}),(0,c.Z)(t,a.up(u),{flexDirection:"row"}),t)),container:(0,o.Z)({width:"100%"},d&&(0,c.Z)({},a.up("md"),{width:"auto"})),ctas:(0,o.Z)({color:"#FFFFFF",alignItems:"center"},"md"===u?(0,c.Z)({},a.up("md"),{marginLeft:l.base,display:"flex",justifyContent:"flex-end"}):(i={},(0,c.Z)(i,a.up(u),{marginLeft:l.s,display:"flex",justifyContent:"flex-end"}),(0,c.Z)(i,a.up("md"),{marginLeft:l.base}),i)),channelBanner:{marginRight:l.s},actionButtonRoot:(0,c.Z)({padding:l.s,marginBottom:0},a.up("md"),{padding:l.base}),actionIcons:{display:"flex",width:"auto"},actionRootContainer:{marginTop:0,alignItems:"center",display:"flex"},shareButtonContainer:(0,c.Z)({display:"flex",alignItems:"center"},a.down("md"),{marginLeft:l.s}),banner:(0,c.Z)({width:"100%",display:"flex",justifyContent:"space-between",marginBottom:l.s},a.up("sm"),{marginBottom:0})}}),ev=function(e){var n=e.asset,t=e.flexBreakpoint,i=e.clickAnalyticsLabels,a=e.CtaComponent,s=e.actionButtons,c=e.showShareButton,l=e.ctaComponentProps,u=e.isCentered,d=e.color,p=e.disableChannelBanner,f=eh({flexBreakpoint:t,isCentered:u}),m=f.classes,h=f.cx,v=!(0,P.d)({breakpoint:"sm"}),g=(null==s?void 0:s.length)||c;return(0,r.jsxs)("div",{className:h(m.root,m.container),children:[(!p||g)&&(0,r.jsxs)("div",{className:m.banner,children:[!p&&(0,r.jsx)(w.h,{classes:{root:m.channelBanner},asset:n,withLabel:!1}),g&&(0,r.jsxs)("div",{className:m.actionIcons,children:[s&&(0,r.jsx)(F,{classesProps:{rootContainer:m.actionRootContainer},buttons:s,withActionLabel:v,color:d}),c&&(0,r.jsx)(em,{asset:n,IconComponent:L.m,ButtonComponent:v?U:z,clickAnalyticsLabel:i.shareButton,iconContainerClassName:m.shareButtonContainer,shouldTrackAnalytics:!0,size:"medium",color:d})]})]}),a&&(0,r.jsx)("div",{className:m.ctas,children:(0,r.jsx)(a,(0,o.Z)({asset:n},l))})]})};ev.defaultProps={flexBreakpoint:"sm",actionButtons:null,CtaComponent:null,ctaComponentProps:{},isCentered:!1,clickAnalyticsLabels:""};var eg=function(e){var n,t,o=e.actionButtons,i=e.asset,a=e.clickAnalyticsLabels,s=e.CtaComponent,v=e.ctaComponentProps,g=e.showShareButton,b=e.disableChannelBanner,w=(0,f.PE)().locale,P=(0,p.L)({asset:i}).showLoggedOutConversionPanel,L=(0,y.g)({asset:i}).showImageConversionPanel,Z="#ffffff",I=i.aspect<1?"portrait":"landscape",k=(0,h.Am)(i),B=(0,m.G)({asset:i,language:w}),A=C({threshold:P||L?625:220,skip:(null==document?void 0:null===(n=document.documentElement)||void 0===n?void 0:n.clientWidth)<=x.w.breakpoints.values.sm}),j=(0,S.G)({bgColor:"#232835",textColor:Z}),N=j.classes,D=j.cx,T={portrait:N.assetDescriptionPortrait,landscape:N.assetDescriptionLandscape},M={portrait:N.iconPortrait,landscape:N.iconLandscape};return(0,r.jsx)(r.Fragment,{children:A&&(0,r.jsx)(l.Z,{direction:"down",in:A,children:(0,r.jsx)("div",{id:"top-nav-banner",className:D(N.topNav,(0,c.Z)({},N.topNavFixed,A)),children:(0,r.jsxs)(u.ZP,{className:N.root,children:[(0,r.jsxs)(u.ZP,{className:D(N.assetDescription,T[I]),children:[(0,r.jsx)("img",{className:D(N.icon,M[I]),src:k?i.previewImageUrl:i.src,alt:null!==(t=i.alt)&&void 0!==t?t:B}),(0,r.jsx)(d.Z,{className:N.title,children:k?B:i.title}),(0,r.jsx)(d.Z,{className:N.type,children:i.type})]}),(0,r.jsx)(u.ZP,{className:N.actionButtons,children:(0,r.jsx)(ev,{actionButtons:o,asset:i,clickAnalyticsLabels:a,CtaComponent:s,ctaComponentProps:v,isCentered:!0,showShareButton:g,color:Z,disableChannelBanner:void 0!==b&&b})})]})})})})},eb=t(80837),eC=t(98202),ey=t(9390),ex=t(91609),ew=t(73377),eP=t(17411),eL=t(59877),eZ=ey.r,eI=(0,Z.ZL)()(function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.breakpoints,i=t.palette,a=t.tokens,r=a.color,s=a.size,l=a.spacing,u=i.mode===ex.oc.DARK,d=u?r["white-96"]:r.gray["onyx-87"],p=u?i.common.black:i.common.white;return{root:(e={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:l.base,minHeight:s.density.high},(0,c.Z)(e,o.down("md"),{alignItems:"normal",flexWrap:"wrap"}),(0,c.Z)(e,o.up("md"),{marginTop:0,marginBottom:l.base,alignItems:"flex-start"}),(0,c.Z)(e,o.up("sm"),{flexDirection:"row"}),e),container:{width:"100%"},buttonProgress:{position:"absolute"},ctas:(n={alignItems:"center"},(0,c.Z)(n,o.up("sm"),{marginLeft:l.s,display:"flex",justifyContent:"flex-end"}),(0,c.Z)(n,o.up("md"),{marginLeft:l.base}),n),tooltip:{"&&":{color:p,backgroundColor:d}},tooltipContent:{display:"inline",cursor:"default"},banner:{width:"80%",display:"flex",justifyContent:"space-around",marginBottom:l.s},textLink:{color:i.info.main,"&:hover":{color:i.text.primary}}}}),ek=ec()(function(){return t.e(97415).then(t.bind(t,97415))},{loadableGenerated:{webpack:function(){return[97415]}},ssr:!1}),eS=function(e){var n,t=e.assetDownloadUrl,o=e.showDescription,i=e.color,a=e.variant,c=e.clickAnalyticsLabels,l=eI(),u=l.classes,d=l.cx,p=(0,v.Z)((0,g.useState)(!1),2),f=p[0],m=p[1],h=(n=(0,V.Z)(function(){return(0,G.__generator)(this,function(e){switch(e.label){case 0:if(!t||f)return[2];return m(!0),[4,(0,eP.S)(t)];case 1:return e.sent(),m(!1),[2]}})}),function(){return n.apply(this,arguments)}),b=c.dreamDownloadForFreeButton,C=c.dreamLearnMoreButton,y=(0,X.D)({namespace:H.Otp,translationKeys:{downloadForFree:"image:logout_adp_free_trial_download",standardLicenseDescription:"comparison_table_licenses_section:feature1:description",learnMore:"pricing_card_learn_more"}}),x=y.t,w=y.labels;return(0,r.jsxs)("div",{className:d(u.root,u.container),children:[o&&(0,r.jsx)("div",{className:u.banner,children:(0,r.jsxs)("span",{children:[(0,r.jsx)(eL.cC,{ns:H.Otp,i18nKey:"dream_campaign:free_download_description",components:{b:(0,r.jsx)("b",{}),i:(0,r.jsx)("i",{})},t:x}),"\xa0",(0,r.jsx)(ek,{disableInteractive:!0,title:(0,r.jsx)("span",{className:u.tooltipContent,children:w.standardLicenseDescription}),children:(0,r.jsxs)(eZ,{href:"/explore/dream",underline:!0,className:u.textLink,clickAnalyticsLabel:(0,ew.U_)(C),children:[w.learnMore,"."]})})]})}),(0,r.jsx)("div",{className:u.ctas,children:(0,r.jsxs)(B.z,{color:i,variant:a,disabled:f,fullWidth:!0,onClick:h,clickTrack:(0,ew.U_)(b),"aria-label":w.downloadForFree,children:[f&&(0,r.jsx)(s.Z,{size:24,color:"inherit",className:u.buttonProgress}),w.downloadForFree]})})]})};eS.defaultProps={assetDownloadUrl:null,showDescription:!1,color:"secondary",variant:"contained"};var eB=t(79866),eA=t(4784),ej=t(11265),eN=t(37211),eD=t(8149),eT=t(9814),eM=t(29292),eR=t(449),eF=t(84866),e_=function(e){var n;return(null==e?void 0:null===(n=e.contributor)||void 0===n?void 0:n.id)&&(0,eF.n_)({contributorId:e.contributor.id})?{downloadUrl:(0,eF.bI)(e)}:{}},eE=t(17604),eO=t(52309),eU=t(65094),ez=t(31037),eV=t(80672),eG=t(32545),eH=t(68034),eW=t(90154),eK=t(66832),eq=t(79454),eY=t(86097),eQ=t(5632),eX=t(43637),eJ=t(70008),e$=t(12649),e0=function(e){var n=e.asset,t=(0,e$.B)(),o=(0,P.d)(),i=(0,eJ.B)().isIndiaRegion,a=(0,h.aT)(n),r=(0,h.f8)(n),s=(0,h.PD)(n),c=(0,eX.k7)(n),l=(0,h.N3)(n);return{shouldRenderSDAQ336:!t&&a&&!l&&!r&&!s&&!c&&o&&!i}},e1=t(62767),e2=function(e){var n=e.asset,t=(0,P.d)(),o=(0,e1.V9)().data,i=(void 0===o?{}:o).totalNumSubscriptionsActive,a=(0,h.aT)(n)&&!(0,h.N3)(n),r=(0,h.PD)({channels:null==n?void 0:n.channels}),s=(0,h.f8)(n);return(0===i||void 0===i)&&!t&&a&&!r&&!s},e4=ec()(function(){return t.e(40117).then(t.bind(t,31360)).then(function(e){return e.ExperimentSDAQ336})},{loadableGenerated:{webpack:function(){return[31360]}},ssr:!0}),e7=ec()(function(){return t.e(152).then(t.bind(t,39610)).then(function(e){return e.ExperimentUTLZ375})},{loadableGenerated:{webpack:function(){return[39610]}},ssr:!0}),e3=function(e){var n=e.addToCollectionViewsHandler,t=e.asset,c=e.canOpenDrawerOnLoad,l=e.clickAnalyticsLabels,u=e.labels,d=e.redirectToCollectionDetailsPage,p=e.isTemplateAsset,f=e.isPaidUserConversionPanel,m=(0,eQ.useRouter)().asPath,v=(0,eE.t)({asset:t,isTemplateAsset:p,labels:u}),b=v.editorButtonHref,C=v.editorButtonLabel,x=v.isCreate,w=v.onClick,P=l.addToCollections,L=l.editButton,Z=l.tryButton,I=(0,eR.i)({asset:t,clickAnalyticsLabels:l}),k=I.tryButtonClickHandler,S=I.isActionInProgress,B=I.isMusicPreviewModalOpen,A=I.setIsMusicPreviewModalOpen,N=I.isSignUpModalOpen,D=I.setIsSignUpModalOpen,T=e_(t).downloadUrl,M=(0,eO.B)(B),R=(0,eU.E)({asset:t}),F=R.showSaveButton,_=R.showShareButton,E=R.showEditButton,O=R.showTryButton,U=R.showDownloadForFreeButton,z=R.showGenerateActionButtons,V=(0,eT.p)({asset:t}).isEligible,G=(0,y.g)({asset:t}),H=G.showImageConversionPanel,W=G.isLoading,K=e0({asset:t}).shouldRenderSDAQ336,q=e2({asset:t}),Y=(0,h.aT)(t)&&!(0,h.N3)(t),Q=(0,h.Am)(t)&&!(0,h.so)(t),X=(0,h.PD)({channels:null==t?void 0:t.channels}),J=(0,g.useMemo)(function(){return(0,a.Z)(F?[(0,o.Z)({label:u.save,onClick:function(){n({assets:[t],gridItems:[],redirectToCollectionDetailsPage:d,openModal:!0})},rel:"nofollow",Icon:(0,r.jsx)(eH.X,{}),clickAnalyticsLabel:null==P?void 0:P.eventLabel},X&&{brandCategory:(0,eM.f_)(t),productLine:(0,eM.Rz)(t)})]:[]).concat((0,a.Z)(O?[(0,o.Z)({label:u.try,onClick:function(){k()},rel:"nofollow",Icon:S?(0,r.jsx)(s.Z,{size:20}):(0,r.jsx)(eW.I,{}),clickAnalyticsLabel:null==Z?void 0:Z.eventLabel,"data-optimize":"download-watermark-cta"},X&&{brandCategory:(0,eM.f_)(t),productLine:(0,eM.Rz)(t)})]:[]),(0,a.Z)(E?[(0,i.Z)((0,o.Z)({label:C},x?{onClick:w}:{href:b}),{Icon:(0,r.jsx)(eK.M,{}),clickAnalyticsLabel:null==L?void 0:L.eventLabel,rel:"nofollow",target:"_blank"})]:[]),(0,a.Z)(z?[{clickAnalyticsLabel:j.VtA,label:u.variations,Icon:(0,r.jsx)(eq.b,{}),href:(0,ez.jq)({assetId:t.id,sourceAssetType:eV.J1.Creative})[0],rel:"nofollow",dataAutomation:"ActionButton_VariationsCreativeImagesButton"},{clickAnalyticsLabel:j.ScC,label:u.expand,Icon:(0,r.jsx)(eY.H,{}),href:(0,ez.U7)({assetId:t.id,sourceAssetType:eV.J1.Creative})[0],rel:"nofollow",dataAutomation:"ActionButton_ZoomOutCreativeImagesButton"}]:[]))},[F,u.save,u.try,u.variations,u.expand,null==P?void 0:P.eventLabel,X,t,O,S,null==Z?void 0:Z.eventLabel,E,z,n,d,k,C,x,w,b,null==L?void 0:L.eventLabel]),$=H||W?function(){return(0,r.jsx)(r.Fragment,{})}:eb.i,ee=U?eS:eb.i,en=(0,eA.k)({asset:t}),et=en.showMusicConversionPanel,eo=en.isLoading,ei=(0,eG.iP)(null==t?void 0:t.holding),ea=(0,eC.A)({asset:t,clickAnalyticsLabels:l,labels:u,assetIsLicensed:ei,shouldFetchEligibility:!ei}).hasExistingLicense;return(et&&!ea||f)&&($=null),K&&($=e4),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eN.X,{modalIsOpen:N,handleClose:function(){D(!1)}}),U&&(0,r.jsx)(eS,{showDescription:!0,assetDownloadUrl:T,canOpenDrawerOnLoad:c,clickAnalyticsLabels:l}),V&&!U&&(0,r.jsx)(e7,{actionButtons:J,asset:t,clickAnalyticsLabels:l,ctaComponentProps:{asset:t,canOpenDrawerOnLoad:c,clickAnalyticsLabels:l,hideConditionsAreLoading:(null==t?void 0:t.type)===eD.jr&&eo,hideCtaComponent:X},isCentered:!0,showShareButton:_,hideCtaComponent:X,isTemplateAsset:p,CtaComponent:$,isConversionPanel:H||f}),!V&&!U&&(0,r.jsx)(eB.e,{actionButtons:J,asset:t,clickAnalyticsLabels:l,ctaComponentProps:{asset:t,canOpenDrawerOnLoad:c,clickAnalyticsLabels:l,hideConditionsAreLoading:(null==t?void 0:t.type)===eD.jr&&eo,hideCtaComponent:X},isCentered:!0,showShareButton:_,hideCtaComponent:X,isTemplateAsset:p,CtaComponent:$}),(Y||Q)&&!p&&!q&&(0,r.jsx)(eg,(0,o.Z)({},{actionButtons:J,asset:t,clickAnalyticsLabels:l,disableChannelBanner:U,CtaComponent:ee,ctaComponentProps:{asset:t,assetDownloadUrl:T,showDescription:!1,campaignAssetDownloadURL:T,clickAnalyticsLabels:l,isScrollCTABar:!0},showShareButton:_,key:m})),M&&(0,r.jsx)(ej.D,{setIsDialogActive:A,isOpen:B,track:t})]})};e3.defaultProps={addToCollectionViewsHandler:null,asset:{},clickAnalyticsLabels:{},isTemplateAsset:!1,isPaidUserConversionPanel:!1}},46730:function(e,n,t){t.d(n,{G:function(){return r},I:function(){return a}});var o=t(47842),i=t(8740),a=87,r=(0,i.ZL)()(function(e,n){var t,i=e.palette,r=e.typography,s=e.breakpoints,c=e.tokens.spacing,l=n.bgColor,u=n.textColor;return{topNav:(0,o.Z)({display:"flex",width:"100%",zIndex:2,height:"".concat(a,"px"),boxShadow:"0px 16px 48px rgba(0, 0, 0, 12%)"},s.down("sm"),{display:"none"}),topNavFixed:{zIndex:10,position:"fixed",top:0,left:0,backgroundColor:l},root:(0,o.Z)({display:"flex",justifyContent:"space-between",width:"100%",margin:"0 auto",maxWidth:s.values.lg,padding:"0 ".concat(c.m)},s.up("md"),{padding:"0 ".concat(c.m," 0 ").concat(c["3xl"])}),assetDescriptionPortrait:{paddingLeft:"60px"},assetDescriptionLandscape:{paddingLeft:"90px"},assetDescription:{margin:"20px 0",paddingTop:"5px",position:"relative",overflow:"hidden"},actionButtons:(0,o.Z)({marginTop:"10px"},s.down("md"),{marginTop:0}),icon:{position:"absolute",top:0,left:0,zIndex:1},iconPortrait:{width:"40px"},iconLandscape:{width:"75px"},title:{whiteSpace:"nowrap",fontSize:"12px",fontWeight:700,color:u},type:{fontSize:"12px",color:u},buttonVariantFilter:{color:u,display:"block",width:"100%",height:"100%",backgroundColor:"inherit",border:0,minWidth:0,lineHeight:1.3,fontWeight:"normal",textAlign:"center",padding:"8px","&:hover":{border:0,backgroundColor:"inherit"}},buttonAnchor:(t={height:"auto",padding:0,minWidth:0,display:"inline-flex",fontWeight:r.fontWeightRegular,color:i.info.main},(0,o.Z)(t,s.up("sm"),{"&:hover":{backgroundColor:"inherit",color:i.text.primary},"&:focus":{backgroundColor:"inherit",color:i.text.primary}}),(0,o.Z)(t,"& .MuiTouchRipple-root",{display:"none"}),t),actionVariantRoot:(0,o.Z)({padding:c.s},s.up("md"),{padding:c.base,marginLeft:c.base}),startIcon:{margin:0}}})},95902:function(e,n,t){t.d(n,{Ps:function(){return i},RT:function(){return c},ZR:function(){return u},bm:function(){return o},g7:function(){return a},iR:function(){return l},mA:function(){return s},oy:function(){return r}});var o="BR",i="CA",a="IN",r="US",s="APAC",c=[r,i],l=["AS","AU","BD","BN","BT","BV","CC","CK","CN","CX","FJ","FM","GU","HK","HM","ID","IO","JP","KH","KI","KR","LA","LK","MH","MM","MN","MO","MP","MV","MY","NC","NF","NP","NR","NU","NZ","PF","PG","PH","PK","PN","PW","SB","SG","SY","TF","TH","TJ","TK","TO","TP","TV","TW","UM","UZ","VN","VU","WF","WS","TL","AF","AQ","KP"],u=["AG","AI","AR","AW","BB","BM","BO","BR","BS","BZ","CL","CO","CR","CU","DM","DO","EC","FK","GD","GF","GL","GP","GS","GT","GY","HN","HT","JM","KN","KY","LC","MQ","MS","MX","NI","PA","PE","PM","PR","PY","SR","SV","TC","TT","UY","VC","VE","VG","VI","BL","MF","BQ","CW","SX"]},38237:function(e,n,t){t.d(n,{Rf:function(){return o},S7:function(){return i},sK:function(){return a}});var o="premium",i="select",a="call_for_price"},32665:function(e,n,t){t.d(n,{RR:function(){return C},sZ:function(){return g}});var o,i=t(52322),a=t(89263),r=t(64106),s=t(70865),c=t(39593),l=function(e){var n=e.initialProps;return(0,i.jsx)(c.B,(0,s.Z)({},n))},u=t(47842),d=t(88849),p=t(2784),f=t(96670),m=t(87414),h=t(22921),v=(o={},(0,u.Z)(o,d.NM,function(e){var n=e.experiment,t=e.initialProps;return(0,p.useEffect)(function(){n.recordImpression()},[]),(0,i.jsx)(l,{initialProps:t})}),(0,u.Z)(o,d.vG,function(e){var n=e.experiment,t=e.initialProps;(0,p.useEffect)(function(){n.recordImpression()},[]);var o=t.product||{},a=o.prices,r=void 0===a?{}:a,c=o.pricesPerSeat,u=o.seatCount,d=(0,m.Yy)({prices:r,localeCurrency:"INR"}),v=r[null==d?void 0:d.toLowerCase()],g=(void 0===c?{}:c)[null==d?void 0:d.toLowerCase()],b=v;g&&u&&(b=v+g*u);var C=(0,f.Z)((0,s.Z)({},t),{productPrice:(0,h.P)(b,d)});return(0,i.jsx)(l,{initialProps:C})}),o),g={flagID:r.T,id:r.s,name:"INR Currency",treatments:v},b=function(){return(0,i.jsx)(i.Fragment,{})},C=function(e){return(0,i.jsx)(a.K,{config:g,initialProps:e,Portal:l,SkeletonLoader:b})}},64106:function(e,n,t){t.d(n,{T:function(){return o},s:function(){return i}});var o="p3-1920-INR",i="P3-1920"},86799:function(e,n,t){t.d(n,{hs:function(){return C},sZ:function(){return g}});var o,i=t(52322),a=t(89263),r=t(60538),s=t(70865),c=t(39593),l=function(e){var n=e.initialProps;return(0,i.jsx)(c.B,(0,s.Z)({},n))},u=t(47842),d=t(88849),p=t(2784),f=t(96670),m=t(87414),h=t(22921),v=(o={},(0,u.Z)(o,d.NM,function(e){var n=e.experiment,t=e.initialProps;return(0,p.useEffect)(function(){n.recordImpression()},[]),(0,i.jsx)(l,{initialProps:t})}),(0,u.Z)(o,d.vG,function(e){var n=e.experiment,t=e.initialProps;(0,p.useEffect)(function(){n.recordImpression()},[]);var o=t.product||{},a=o.prices,r=void 0===a?{}:a,c=o.pricesPerSeat,u=o.seatCount,d=(0,m.Yy)({prices:r,localeCurrency:"BRL"}),v=r[null==d?void 0:d.toLowerCase()],g=(void 0===c?{}:c)[null==d?void 0:d.toLowerCase()],b=v;g&&u&&(b=v+g*u);var C=(0,f.Z)((0,s.Z)({},t),{productPrice:(0,h.P)(b,d)});return(0,i.jsx)(l,{initialProps:C})}),o),g={flagID:r.T,id:r.s,name:"P3-2160 BRL currency",treatments:v},b=function(){return(0,i.jsx)(i.Fragment,{})},C=function(e){return(0,i.jsx)(a.K,{config:g,initialProps:e,Portal:l,SkeletonLoader:b})}},25709:function(e,n,t){t.d(n,{B:function(){return i},u:function(){return a}});var o=t(2784),i=(0,o.createContext)({showDesignUpliftP32215:!1}),a=function(){return(0,o.useContext)(i)}},16077:function(e,n,t){t.d(n,{y:function(){return o}});var o="Flat fee cancellation"},88692:function(e,n,t){t.d(n,{n:function(){return o}});var o="Flat fee cancellation v2"},35012:function(e,n,t){t.d(n,{Q:function(){return K}});var o=t(98788),i=t(47842),a=t(70865),r=t(96670),s=t(87394),c=t(45680),l=t(27739),u=t(44699),d=t(60591),p=t(43801),f=t(65532),m=t(75445),h=t(23490),v=t(88849),g=t(4122),b=t(87414),C=t(32665),y=function(e){var n=e.prices,t=void 0===n?{}:n,o=(0,g.a)(C.sZ).experiment,i=(0,h.N)().isGoodBot,a=(0,f.PE)(),r=a.region,s=a.currencyData.currency,c=void 0===s?m.a:s;return i||o.isInactiveForUser||o.isLoading?(0,b.Yy)({prices:t,localeCurrency:c}):o.variant.treatmentID===v.vG&&"IN"===r?(0,b.Yy)({prices:t,localeCurrency:"INR"}):(0,b.Yy)({prices:t,localeCurrency:c})},x=t(86799),w=function(e){var n=e.prices,t=void 0===n?{}:n,o=(0,g.a)(x.sZ).experiment,i=(0,h.N)().isGoodBot,a=(0,f.PE)(),r=a.region,s=a.currencyData.currency,c=void 0===s?m.a:s;return i||o.isInactiveForUser||o.isLoading?(0,b.Yy)({prices:t,localeCurrency:c}):o.variant.treatmentID===v.vG&&"BR"===r?(0,b.Yy)({prices:t,localeCurrency:"BRL"}):(0,b.Yy)({prices:t,localeCurrency:c})},P=t(16077),L=t(88692),Z=t(66970),I=t(12708),k=function(e){var n=e.couponCode,t=e.productName,o=null;return t===l.Pvj&&n===l.XdV?o=l.E65:t===l.fnR&&n===l.Q9B&&(o=l.Em3),o},S=t(44297),B=t(38419),A=t(18167),j=t(38367),N=t(59979),D=t(70008),T=t(40233),M=t(12649),R=t(25936),F=t(24114),_=t(38204),E=t(31683),O=t(34406).env.NODE_CONFIG_ENV,U=function(){var e=(0,E.u4)()?"production":"qa";switch(O||e){case"dev":return"65021";case"qa":return"12424";case"production":return"14156";default:return"NO_ENV_DEFINED"}},z=function(){var e=(0,E.u4)()?"production":"qa";switch(O||e){case"dev":return"65035";case"qa":return"19606";case"production":return"17383";default:return"NO_ENV_DEFINED"}},V=t(21805),G=t(5632),H=t(2784),W=function(e){var n,t=e.couponCode,o=e.displayInlineCancellationFlow,r=(0,G.useRouter)(),s=(0,p.v)(),c=!!(null==s?void 0:null===(n=s.current)||void 0===n?void 0:n.isPeacock);return(0,H.useCallback)(function(e){var n,s=e.orderId,l=(0,B.DW)({language:r.locale,relativePath:(0,_.U2)({queryParams:(0,a.Z)({orderId:s},(null==r?void 0:r.query)||{},c&&{isCreativeAiOrder:"true"},t?(n={},(0,i.Z)(n,d.d9,t),(0,i.Z)(n,d.Gp,t),n):{},o&&{display:"inlineCancellationFlow"})})});r.push(l)},[t,c,r,o])},K=function(e){var n=e.products,t=e.asset,i=e.assetSize,p=e.couponCode,m=e.productId,h=e.productType,v=void 0===h?d.Cs:h,g=e.productOverride,C=e.seatCount,x=e.setCreateOrderStatus,B=void 0===x?function(){}:x,_=e.setIsInvalidCoupon,E=void 0===_?function(){}:_,O=e.vatNumber,K=e.license,q=e.isLicenseDrawer,Y=void 0!==q&&q,Q=e.preset,X=void 0===Q?void 0:Q,J=e.eligibilityData,$=void 0===J?{}:J,ee=e.existingUserRedirectPath,en=e.selectedShadowsOption,et=e.shouldForceAsset,eo=e.subscriptionIdentifier,ei=e.cancellationReason,ea=(0,f.PE)().region,er=(0,D.B)().isIndiaRegion,es=(0,M.jy)().data,ec=(0,R.u)().data,el=(0,M.B)(),eu=(0,s.Z)((0,H.useState)(!1),2),ed=eu[0],ep=eu[1],ef=(0,s.Z)((0,F.QD)(t)||[],2)[1],em=$.eligibilityCurrency,eh=$.debitableIdentifier,ev=(0,H.useMemo)(function(){return null!=g?g:(0,a.Z)({},(0,b.$A)(n,m),C?{seatCount:C}:{})},[g,m,n,C]),eg=null==ev?void 0:ev.id,eb=y({prices:null==ev?void 0:ev.prices}),eC=w({prices:null==ev?void 0:ev.prices}),ey=er?eb:eC,ex=(0,j.Z)({shouldFetch:!!el}).data,ew=p||ev.couponCode,eP=k({couponCode:ew,productName:null==ev?void 0:ev.name}),eL=(0,N.Sl)({queryParams:(0,a.Z)({landing_page:(0,A.t)({couponCode:ew,productId:eg,vatNumber:O,seatCount:null==ev?void 0:ev.seatCount,doNotRedirect:!0,asset:er||void 0!==et&&et?t:void 0,existingUserRedirect:ee||ef,license:K})},X&&{preset:X}),signUpView:eP}),eZ=(0,G.useRouter)().asPath,eI=(0,H.useCallback)(function(){if(window){var e,n;V.Z.set("referer_page",eZ),null===(e=window.NREUM)||void 0===e||null===(n=e.addPageAction)||void 0===n||n.call(e,"UP3-1623 assign loggedOutHandler authRedirectPath to href",(0,r.Z)((0,a.Z)({},window.location||{}),{asPath:eZ,authRedirectPath:eL})),window.location.href=eL}},[eZ,eL]),ek=(0,I.F3)({paymentProfiles:ex}),eS=(0,H.useCallback)(function(e){var n,t,o={createTime:null==es?void 0:es.createTime,component:"useCreateOrder.js",errorCode:e.code,errorStatus:e.status,errorDetail:e.detail,errorMessage:e.message,errorStack:e.stack||"useCreateOrder",errorTitle:e.title,impersonatorId:ec.impersonatorId,msg:"UP1-2650 Order creation failed",organizationId:null==es?void 0:es.organizationId,referrerPath:window.location.pathname,referrerQuery:window.location.search,userId:null==es?void 0:es.id,username:null==es?void 0:es.username,isLicenseDrawer:Y};null===(n=window.NREUM)||void 0===n||null===(t=n.noticeError)||void 0===t||t.call(n,e,o)},[ec,es,Y]),eB=W({couponCode:ew,displayInlineCancellationFlow:[P.y,L.n].includes(ei)}),eA=(0,T.d)(),ej=(0,s.Z)((0,H.useState)({status:"",error:void 0}),2),eN=ej[0],eD=ej[1],eT=(0,H.useCallback)((0,o.Z)(function(){var e,n,o,s,p;return(0,c.__generator)(this,function(c){switch(c.label){case 0:if(c.trys.push([0,3,,4]),B({status:"",error:void 0}),eD({status:"",error:void 0}),ep(!0),er&&l.Tj5.includes(ew))throw Error("free trial offer not available in India");if(!ex)return[3,2];return e=t?{assets:[{asset:t,selectedAssetSize:(0,Z.DW)({assetType:(0,S.Tp)(t),assetSize:i})}]}:{},n=[],ei===P.y||ei===L.n?n.push({product:{id:ei===L.n?z():U(),type:"products"},cancellationReason:ei,subscriptionIdentifier:eo}):(n.push((0,r.Z)((0,a.Z)({},e),{product:ev,productType:v})),null!=ei&&null!=eo&&n.push({product:{id:U(),type:"products"},cancellationReason:ei,subscriptionIdentifier:eo})),[4,(0,I.LV)({country:ea,currency:em||ey,paymentProfileId:null==ek?void 0:ek.paymentId,orderItems:n,selectedShadowsOption:en,vatNumber:O,couponCode:ew,license:K,debitableIdentifier:eh})];case 1:o=c.sent().data,B({status:u.MR,error:void 0}),eD({status:u.MR,error:void 0}),ep(!1),eB({orderId:o.id}),eA({actionName:"convert - order creation success",customAttributes:{productName:ev.name,productType:v,country:ea,currency:em||ey,assetType:(0,S.Tp)(t),assetSize:i,license:K,isLicenseDrawer:Y}}),c.label=2;case 2:return[3,4];case 3:return s=c.sent(),B({status:u.cM,error:s}),eD({status:u.cM,error:s}),ep(!1),(null==s?void 0:null===(p=s.detail)||void 0===p?void 0:p.toLowerCase())===d.LQ&&E(!0),eS(s),[3,4];case 4:return[2]}})}),[B,er,ew,ex,t,i,ea,em,ey,null==ek?void 0:ek.paymentId,ev,v,O,K,eh,eB,eA,Y,eS,E,en,eo,ei]);return{createOrderHandler:el?eT:eI,isCreateOrderInProgress:ed,product:ev,orderStatus:eN}}},38367:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(81740),i=t(49670),a=t(9009),r=t(3255),s=function(e){var n=e.queryParams;return(0,o.cF)({queryParams:n}).formattedUrl},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.queryParams,t=e.shouldFetch;return(0,r.ZP)(void 0===t||t?s({queryParams:void 0===n?{}:n}):null,function(e){return i.uS.get(e).then(function(e){return(0,a.O)(e.data)})})}},77357:function(e,n,t){t.d(n,{L:function(){return d}});var o=t(70865),i=t(96670),a=t(81740),r=t(65532),s=t(49670),c=t(9009),l=t(3255),u=function(e){var n=e.queryParams;return(0,a.Xp)({queryParams:n}).formattedUrl},d=function(e){var n=e.queryParams,t=e.products,a=void 0===t?[]:t,d=e.shouldFetch,p=(0,r.PE)().region,f=(null==a?void 0:a.length)||!(void 0===d||d)?null:u({queryParams:(0,i.Z)((0,o.Z)({},n),{country:p})}),m=(0,l.ZP)(f,function(e){return s.uS.get(e).then(function(e){return(0,c.O)(e.data)})}).data;return(null==a?void 0:a.length)?a:m}},70008:function(e,n,t){t.d(n,{B:function(){return i}});var o=t(65532),i=function(){return{isIndiaRegion:"IN"===(0,o.PE)().region}}},8655:function(e,n,t){t.d(n,{g:function(){return s}});var o=t(44297),i=t(95775),a=t(94909),r=t(12649),s=function(e){var n,t,s=e.asset,c=(0,r.B)(),l=(0,a.d)(),u=(0,i.IP)({assets:[s]}),d=u.data,p=u.isLoading,f=(0,o.aT)(s)&&!(0,o.N3)(s),m=(null==d?void 0:null===(n=d.subscriptions)||void 0===n?void 0:n.length)>0,h=(null==d?void 0:null===(t=d.licenses)||void 0===t?void 0:t.length)>0;return{showImageConversionPanel:f&&!m&&d&&!h&&!l&&c,isLoading:p}}}}]);
//# sourceMappingURL=79879-ff382d44aaded8f2.js.map