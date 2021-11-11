/*! For license information please see landbot-3.0.0.js.LICENSE.txt */
  && {
    z-index: ${({theme:e})=>{var t;return null===(t=null==e?void 0:e.zIndex)||void 0===t?void 0:t.background}};
    pointer-events: none;

    ${({isNative:e})=>e?"position: fixed;\n       bottom: initial;\n       right: initial;\n       width: 100%;\n       height: 100vh;\n    ":"position: absolute;"}
  }
`,yi=gi(vi)`
  pointer-events: none;
  background-color: ${({theme:e})=>null==e?void 0:e.design.background_color_mask};
`,wi=gi(vi)`
  background-color: ${({theme:e})=>e.design.background_color};
`,_i=gi(vi)`
  background-image: linear-gradient(
    to bottom,
    var(--background_color_gradient_from) 6rem,
    var(--background_color_gradient_to)
  );
`,xi=gi(vi)`
  /* Image should cover the full screen. */
  background-size: cover;
  background-position: center;
`,ki=gi(vi)`
  /* Video should cover the full screen. */
  video {
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    display: block;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    max-width: initial;
    background-size: cover;
    transform: translateX(-50%) translateY(-50%);

    &::-webkit-media-controls {
      display: none;
    }
  }
`,Ei=e=>{const{background_type:t,background_image:n,background_image_mobile:r,background_video_webm:i,background_video_mp4:o,isNative:a}=e;switch(t){case Nn.SOLID:return Tn.jsx(wi,{className:"Background Background--color is-overlay",id:"Background",isNative:a},void 0);case Nn.GRADIENT:return Tn.jsx(_i,{className:"Background Background--gradient is-overlay",id:"Background",isNative:a},void 0);case Nn.IMAGE:return Tn.jsxs(Tn.Fragment,{children:[Tn.jsx(xi,{className:"Background Background--image is-overlay is-hidden-mobile",id:"Background",isNative:a,style:{backgroundImage:`url(${n})`}},void 0),Tn.jsx(xi,{className:"Background Background--image is-overlay is-hidden-tablet",id:"Background",isNative:a,style:{backgroundImage:`url(${r||n})`}},void 0),Tn.jsx(yi,{className:"Background--overlay is-overlay",isNative:a},void 0)]},void 0);case Nn.VIDEO:return Tn.jsxs(ki,Object.assign({className:"Background Background--video is-overlay",id:"Background",isNative:a},{children:[Tn.jsxs("video",Object.assign({autoPlay:!0,loop:!0,muted:!0,playsInline:!0},{children:[Tn.jsx("source",{src:o,type:"video/mp4"},void 0),Tn.jsx("source",{src:i,type:"video/webm"},void 0)]}),o),Tn.jsx(yi,{className:"Background--overlay is-overlay"},void 0)]}),void 0);default:return null}};Ei.defaultProps={background_type:Nn.SOLID,background_image:null,background_image_mobile:null,background_video_webm:null,background_video_mp4:null,isNative:!0};var Si=pn((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&e.push(a)}}else if("object"===o)if(i.toString===Object.prototype.toString)for(var s in i)t.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}));const Ci=({onClick:e,isVisible:t,isAnchor:n,href:r,isDisabled:i,children:o,className:a,label:s,ariaLabel:l,icon:c,type:u})=>t&&Tn.jsxs((e=>n?Tn.jsx("a",Object.assign({href:r,target:"_blank"},e),void 0):Tn.jsx("button",Object.assign({type:u},e),void 0)),Object.assign({className:Si({[a]:!0,button:!0}),onClick:e,"aria-label":l,disabled:i},{children:[o,!o&&c&&Tn.jsx("span",Object.assign({className:"icon"},{children:c}),void 0),!o&&Tn.jsx("span",Object.assign({className:"label is-unselectable"},{children:s}),void 0)]}),void 0);Ci.defaultProps={onClick:()=>{},isVisible:!0,isDisabled:!1,isAnchor:!1,children:null,className:"custom-button",label:"",ariaLabel:"",href:"",icon:null,type:"button"};const Ti=e=>{const{className:t}=e;return Tn.jsx(Ci,Object.assign({},e,{className:Si({[t]:!!t,"custom-button":!String(t).includes("input-button")})}),void 0)};Ti.defaultProps={className:""};const Oi=(e=>gi(e)`
  height: auto;
  line-height: 1.1;

  .label {
    font-size: ${e=>e.theme.header.font_size};
    color: inherit;
    font-weight: inherit;
  }

  .icon {
    transform: translateY(-3px);
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    .icon {
      transform: translateY(-6px);
    }
  }
`)(Ti),Pi=e=>{const{className:t}=e;return Tn.jsx(Oi,Object.assign({},e,{className:Si({[t]:!!t,"custom-button":!String(t).includes("input-button"),button:!0}),as:"button"}),void 0)};Pi.defaultProps={className:""};var Ii=zi,Ni=Ui,Mi=Bi,Di=Vi,Ai=Wi,ji=qi,Ri=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Li=["Su","Mo","Tu","We","Th","Fr","Sa"],Fi=["January","February","March","April","May","June","July","August","September","October","November","December"];function zi(e){return e.toDateString()}function Ui(e){return Fi[e.getMonth()]+" "+e.getFullYear()}function Bi(e){return Li[e]}function Vi(e){return Ri[e]}function Wi(){return 0}function qi(){return Fi}var Hi={formatDay:zi,formatMonthTitle:Ui,formatWeekdayShort:Bi,formatWeekdayLong:Vi,getFirstDayOfWeek:Wi,getMonths:qi},$i=Object.defineProperty({formatDay:Ii,formatMonthTitle:Ni,formatWeekdayShort:Mi,formatWeekdayLong:Di,getFirstDayOfWeek:Ai,getMonths:ji,default:Hi},"__esModule",{value:!0}),Yi=pn((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LEFT=37,t.UP=38,t.RIGHT=39,t.DOWN=40,t.ENTER=13,t.SPACE=32,t.ESC=27,t.TAB=9})),Gi=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ki=Xi(t),Qi=Xi($i);function Xi(e){return e&&e.__esModule?e:{default:e}}var Zi=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleKeyUp=t.handleKeyUp.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),Gi(n,[{key:"shouldComponentUpdate",value:function(e){return e.locale!==this.props.locale||e.classNames!==this.props.classNames||e.date.getMonth()!==this.props.date.getMonth()||e.date.getFullYear()!==this.props.date.getFullYear()}},{key:"handleKeyUp",value:function(e){e.keyCode===Yi.ENTER&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=e.classNames,n=e.date,r=e.months,i=e.locale,o=e.localeUtils,a=e.onClick;return Ki.default.createElement("div",{className:t.caption,role:"heading","aria-live":"polite"},Ki.default.createElement("div",{onClick:a,onKeyUp:this.handleKeyUp},r?r[n.getMonth()]+" "+n.getFullYear():o.formatMonthTitle(n,i)))}}]),n}();Zi.defaultProps={localeUtils:Qi.default};var Ji=Zi,eo=Object.defineProperty({default:Ji},"__esModule",{value:!0}),to={container:"DayPicker",wrapper:"DayPicker-wrapper",interactionDisabled:"DayPicker--interactionDisabled",months:"DayPicker-Months",month:"DayPicker-Month",navBar:"DayPicker-NavBar",navButtonPrev:"DayPicker-NavButton DayPicker-NavButton--prev",navButtonNext:"DayPicker-NavButton DayPicker-NavButton--next",navButtonInteractionDisabled:"DayPicker-NavButton--interactionDisabled",caption:"DayPicker-Caption",weekdays:"DayPicker-Weekdays",weekdaysRow:"DayPicker-WeekdaysRow",weekday:"DayPicker-Weekday",body:"DayPicker-Body",week:"DayPicker-Week",weekNumber:"DayPicker-WeekNumber",day:"DayPicker-Day",footer:"DayPicker-Footer",todayButton:"DayPicker-TodayButton",today:"today",selected:"selected",disabled:"disabled",outside:"outside"},no=Object.defineProperty({default:to},"__esModule",{value:!0}),ro=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),io=ao(t),oo=ao(no);function ao(e){return e&&e.__esModule?e:{default:e}}function so(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lo(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var co=function(e){function n(){var e,t,r;so(this,n);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r=lo(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),r.handleNextClick=function(){r.props.onNextClick&&r.props.onNextClick()},r.handlePreviousClick=function(){r.props.onPreviousClick&&r.props.onPreviousClick()},r.handleNextKeyDown=function(e){e.keyCode!==Yi.ENTER&&e.keyCode!==Yi.SPACE||(e.preventDefault(),r.handleNextClick())},r.handlePreviousKeyDown=function(e){e.keyCode!==Yi.ENTER&&e.keyCode!==Yi.SPACE||(e.preventDefault(),r.handlePreviousClick())},lo(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),ro(n,[{key:"shouldComponentUpdate",value:function(e){return e.labels!==this.props.labels||e.dir!==this.props.dir||this.props.showPreviousButton!==e.showPreviousButton||this.props.showNextButton!==e.showNextButton}},{key:"render",value:function(){var e=this.props,t=e.classNames,n=e.className,r=e.showPreviousButton,i=e.showNextButton,o=e.labels,a=e.dir,s=void 0,l=void 0,c=void 0,u=void 0,d=void 0,f=void 0;"rtl"===a?(s=this.handleNextClick,l=this.handlePreviousClick,c=this.handleNextKeyDown,u=this.handlePreviousKeyDown,f=r,d=i):(s=this.handlePreviousClick,l=this.handleNextClick,c=this.handlePreviousKeyDown,u=this.handleNextKeyDown,f=i,d=r);var p=d?t.navButtonPrev:t.navButtonPrev+" "+t.navButtonInteractionDisabled,h=f?t.navButtonNext:t.navButtonNext+" "+t.navButtonInteractionDisabled,m=io.default.createElement("span",{tabIndex:"0",role:"button","aria-label":o.previousMonth,key:"previous",className:p,onKeyDown:d?c:void 0,onClick:d?s:void 0}),b=io.default.createElement("span",{tabIndex:"0",role:"button","aria-label":o.nextMonth,key:"right",className:h,onKeyDown:f?u:void 0,onClick:f?l:void 0});return io.default.createElement("div",{className:n||t.navBar},"rtl"===a?[b,m]:[m,b])}}]),n}();co.defaultProps={classNames:oo.default,dir:"ltr",labels:{previousMonth:"Previous Month",nextMonth:"Next Month"},showPreviousButton:!0,showNextButton:!0};var uo,fo=co,po=Object.defineProperty({default:fo},"__esModule",{value:!0}),ho=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),mo=(uo=t)&&uo.__esModule?uo:{default:uo};function bo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function go(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var vo=function(e){function n(){return bo(this,n),go(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),ho(n,[{key:"shouldComponentUpdate",value:function(e){return this.props!==e}},{key:"render",value:function(){for(var e=this.props,t=e.classNames,n=e.firstDayOfWeek,r=e.showWeekNumbers,i=e.weekdaysLong,o=e.weekdaysShort,a=e.locale,s=e.localeUtils,l=e.weekdayElement,c=[],u=0;u<7;u+=1){var d=(u+n)%7,f={key:u,className:t.weekday,weekday:d,weekdaysLong:i,weekdaysShort:o,localeUtils:s,locale:a},p=mo.default.isValidElement(l)?mo.default.cloneElement(l,f):mo.default.createElement(l,f);c.push(p)}return mo.default.createElement("div",{className:t.weekdays,role:"rowgroup"},mo.default.createElement("div",{className:t.weekdaysRow,role:"row"},r&&mo.default.createElement("div",{className:t.weekday}),c))}}]),n}(),yo=Object.defineProperty({default:vo},"__esModule",{value:!0}),wo=Do,_o=Ao,xo=jo,ko=Ro,Eo=Lo,So=Fo,Co=zo,To=Uo,Oo=Bo,Po=Vo,Io=Wo,No=qo,Mo=Ho;function Do(e){return new Date(e.getTime())}function Ao(e){return e instanceof Date&&!isNaN(e.valueOf())}function jo(e,t){var n=Do(e);return n.setMonth(e.getMonth()+t),n}function Ro(e,t){return!(!e||!t)&&e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function Lo(e,t){return!(!e||!t)&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function Fo(e,t){return Do(e).setHours(0,0,0,0)<Do(t).setHours(0,0,0,0)}function zo(e,t){return Do(e).setHours(0,0,0,0)>Do(t).setHours(0,0,0,0)}function Uo(e){var t=new Date;return t.setHours(0,0,0,0),Fo(e,t)}function Bo(e){var t=new Date((new Date).getTime()+864e5);return t.setHours(0,0,0,0),e>=t}function Vo(e,t,n){var r=Do(e);return r.setHours(0,0,0,0),zo(r,t)&&Fo(r,n)||zo(r,n)&&Fo(r,t)}function Wo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{from:null,to:null},n=t.from,r=t.to;return n?n&&r&&Ro(n,r)&&Ro(e,n)?(n=null,r=null):r&&Fo(e,n)?n=e:r&&Ro(e,r)?(n=e,r=e):Fo(r=e,n)&&(r=n,n=e):n=e,{from:n,to:r}}function qo(e,t){var n=t.from,r=t.to;return n&&Ro(e,n)||r&&Ro(e,r)||n&&r&&Vo(e,n,r)}function Ho(e){var t=Do(e);return t.setHours(0,0,0),t.setDate(t.getDate()+4-(t.getDay()||7)),Math.ceil(((t-new Date(t.getFullYear(),0,1))/864e5+1)/7)}var $o,Yo={addDayToRange:Wo,addMonths:jo,clone:Do,getWeekNumber:Ho,isDate:Ao,isDayAfter:zo,isDayBefore:Fo,isDayBetween:Vo,isDayInRange:qo,isFutureDay:Bo,isPastDay:Uo,isSameDay:Ro,isSameMonth:Lo},Go=Object.defineProperty({clone:wo,isDate:_o,addMonths:xo,isSameDay:ko,isSameMonth:Eo,isDayBefore:So,isDayAfter:Co,isPastDay:To,isFutureDay:Oo,isDayBetween:Po,addDayToRange:Io,isDayInRange:No,getWeekNumber:Mo,default:Yo},"__esModule",{value:!0}),Ko=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo=Jo,Xo=ea,Zo=($o=no)&&$o.__esModule?$o:{default:$o};function Jo(e){return new Date(e.getFullYear(),e.getMonth(),1,12)}function ea(e){var t=Jo(e);return t.setMonth(t.getMonth()+1),t.setDate(t.getDate()-1),t.getDate()}var ta=Object.defineProperty({cancelEvent:function(e){e.preventDefault(),e.stopPropagation()},getFirstDayOfMonth:Qo,getDaysInMonth:Xo,getModifiersFromProps:function(e){var t=Ko({},e.modifiers);return e.selectedDays&&(t[e.classNames.selected]=e.selectedDays),e.disabledDays&&(t[e.classNames.disabled]=e.disabledDays),t},getFirstDayOfWeekFromProps:function(e){var t=e.firstDayOfWeek,n=e.locale,r=void 0===n?"en":n,i=e.localeUtils,o=void 0===i?{}:i;return isNaN(t)?o.getFirstDayOfWeek?o.getFirstDayOfWeek(r):0:t},isRangeOfDates:function(e){return!!(e&&e.from&&e.to)},getMonthsDiff:function(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())},getWeekArray:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,$i.getFirstDayOfWeek)(),n=arguments[2],r=ea(e),i=[],o=[],a=[],s=1;s<=r;s+=1)i.push(new Date(e.getFullYear(),e.getMonth(),s,12));i.forEach((function(e){o.length>0&&e.getDay()===t&&(a.push(o),o=[]),o.push(e),i.indexOf(e)===i.length-1&&a.push(o)}));for(var l=a[0],c=7-l.length;c>0;c-=1){var u=(0,Go.clone)(l[0]);u.setDate(l[0].getDate()-1),l.unshift(u)}for(var d=a[a.length-1],f=d.length;f<7;f+=1){var p=(0,Go.clone)(d[d.length-1]);p.setDate(d[d.length-1].getDate()+1),d.push(p)}if(n&&a.length<6)for(var h=void 0,m=a.length;m<6;m+=1){for(var b=(h=a[a.length-1])[h.length-1],g=[],v=0;v<7;v+=1){var y=(0,Go.clone)(b);y.setDate(b.getDate()+v+1),g.push(y)}a.push(g)}return a},startOfMonth:function(e){var t=(0,Go.clone)(e);return t.setDate(1),t.setHours(12,0,0,0),t},getDayNodes:function(e,t){var n=void 0;n=t===Zo.default?t.day+"--"+t.outside:""+t.outside;var r="."+t.day.replace(/ /g,".")+":not(."+n.replace(/ /g,".")+")";return e.querySelectorAll(r)},nodeListToArray:function(e){return Array.prototype.slice.call(e,0)},hasOwnProp:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},"__esModule",{value:!0}),na=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ra=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ia=aa(t),oa=aa(no);function aa(e){return e&&e.__esModule?e:{default:e}}function sa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function la(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function ca(e,t,n){if(e)return function(r){r.persist(),e(t,n,r)}}var ua=function(e){function n(){return sa(this,n),la(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),ra(n,[{key:"shouldComponentUpdate",value:function(e){var t=this,n=Object.keys(this.props),r=Object.keys(e);return n.length!==r.length||n.some((function(n){if("modifiers"===n||"modifiersStyles"===n||"classNames"===n){var r=t.props[n],i=e[n],o=Object.keys(r),a=Object.keys(i);return o.length!==a.length||o.some((function(e){return!(0,ta.hasOwnProp)(i,e)||r[e]!==i[e]}))}return"day"===n?!(0,Go.isSameDay)(t.props[n],e[n]):!(0,ta.hasOwnProp)(e,n)||t.props[n]!==e[n]}))}},{key:"render",value:function(){var e=this.props,t=e.classNames,n=e.modifiersStyles,r=e.day,i=e.tabIndex,o=e.empty,a=e.modifiers,s=e.onMouseEnter,l=e.onMouseLeave,c=e.onMouseUp,u=e.onMouseDown,d=e.onClick,f=e.onKeyDown,p=e.onTouchStart,h=e.onTouchEnd,m=e.onFocus,b=e.ariaLabel,g=e.ariaDisabled,v=e.ariaSelected,y=e.children,w=t.day;t!==oa.default?w+=" "+Object.keys(a).join(" "):w+=Object.keys(a).map((function(e){return" "+w+"--"+e})).join("");var _=void 0;return n&&Object.keys(a).filter((function(e){return!!n[e]})).forEach((function(e){_=na({},_,n[e])})),o?ia.default.createElement("div",{"aria-disabled":!0,className:w,style:_}):ia.default.createElement("div",{className:w,tabIndex:i,style:_,role:"gridcell","aria-label":b,"aria-disabled":g,"aria-selected":v,onClick:ca(d,r,a),onKeyDown:ca(f,r,a),onMouseEnter:ca(s,r,a),onMouseLeave:ca(l,r,a),onMouseUp:ca(c,r,a),onMouseDown:ca(u,r,a),onTouchEnd:ca(h,r,a),onTouchStart:ca(p,r,a),onFocus:ca(m,r,a)},y)}}]),n}();ua.defaultProps={tabIndex:-1},ua.defaultProps={modifiers:{},modifiersStyles:{},empty:!1};var da=ua,fa=Object.defineProperty({default:da},"__esModule",{value:!0}),pa=ma,ha=ba;function ma(e,t){return!!t&&(Array.isArray(t)?t:[t]).some((function(t){return!!t&&(t instanceof Date?(0,Go.isSameDay)(e,t):(0,ta.isRangeOfDates)(t)?(0,Go.isDayInRange)(e,t):t.after&&t.before&&(0,Go.isDayAfter)(t.before,t.after)?(0,Go.isDayAfter)(e,t.after)&&(0,Go.isDayBefore)(e,t.before):t.after&&t.before&&((0,Go.isDayAfter)(t.after,t.before)||(0,Go.isSameDay)(t.after,t.before))?(0,Go.isDayAfter)(e,t.after)||(0,Go.isDayBefore)(e,t.before):t.after?(0,Go.isDayAfter)(e,t.after):t.before?(0,Go.isDayBefore)(e,t.before):t.daysOfWeek?t.daysOfWeek.some((function(t){return e.getDay()===t})):"function"==typeof t&&t(e))}))}function ba(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(n,r){var i=t[r];return ma(e,i)&&n.push(r),n}),[])}var ga={dayMatchesModifier:ma,getModifiersForDay:ba},va=Object.defineProperty({dayMatchesModifier:pa,getModifiersForDay:ha,default:ga},"__esModule",{value:!0}),ya=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),wa=Ta(t),_a=Ta(yo),xa=Ta(fa),ka=Ca(va),Ea=Ca(ta),Sa=Ca(Go);function Ca(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ta(e){return e&&e.__esModule?e:{default:e}}function Oa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pa(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var Ia,Na=function(e){function n(){var e,t,r;Oa(this,n);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r=Pa(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),r.renderDay=function(e){var t=r.props.month.getMonth(),n=Ea.getModifiersFromProps(r.props),i=ka.getModifiersForDay(e,n);Sa.isSameDay(e,new Date)&&!Object.prototype.hasOwnProperty.call(n,r.props.classNames.today)&&i.push(r.props.classNames.today),e.getMonth()!==t&&i.push(r.props.classNames.outside);var o=e.getMonth()!==t,a=-1;r.props.onDayClick&&!o&&1===e.getDate()&&(a=r.props.tabIndex);var s=""+e.getFullYear()+e.getMonth()+e.getDate(),l={};return i.forEach((function(e){l[e]=!0})),wa.default.createElement(xa.default,{key:(o?"outside-":"")+s,classNames:r.props.classNames,day:e,modifiers:l,modifiersStyles:r.props.modifiersStyles,empty:o&&!r.props.showOutsideDays&&!r.props.fixedWeeks,tabIndex:a,ariaLabel:r.props.localeUtils.formatDay(e,r.props.locale),ariaDisabled:o||i.indexOf(r.props.classNames.disabled)>-1,ariaSelected:i.indexOf(r.props.classNames.selected)>-1,onClick:r.props.onDayClick,onFocus:r.props.onDayFocus,onKeyDown:r.props.onDayKeyDown,onMouseEnter:r.props.onDayMouseEnter,onMouseLeave:r.props.onDayMouseLeave,onMouseDown:r.props.onDayMouseDown,onMouseUp:r.props.onDayMouseUp,onTouchEnd:r.props.onDayTouchEnd,onTouchStart:r.props.onDayTouchStart},r.props.renderDay(e,l))},Pa(r,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),ya(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.classNames,r=t.month,i=t.months,o=t.fixedWeeks,a=t.captionElement,s=t.weekdayElement,l=t.locale,c=t.localeUtils,u=t.weekdaysLong,d=t.weekdaysShort,f=t.firstDayOfWeek,p=t.onCaptionClick,h=t.showWeekNumbers,m=t.showWeekDays,b=t.onWeekClick,g={date:r,classNames:n,months:i,localeUtils:c,locale:l,onClick:p?function(e){return p(r,e)}:void 0},v=wa.default.isValidElement(a)?wa.default.cloneElement(a,g):wa.default.createElement(a,g),y=Ea.getWeekArray(r,f,o);return wa.default.createElement("div",{className:n.month,role:"grid"},v,m&&wa.default.createElement(_a.default,{classNames:n,weekdaysShort:d,weekdaysLong:u,firstDayOfWeek:f,showWeekNumbers:h,locale:l,localeUtils:c,weekdayElement:s}),wa.default.createElement("div",{className:n.body,role:"rowgroup"},y.map((function(t){var i=void 0;return h&&(i=Sa.getWeekNumber(t[6])),wa.default.createElement("div",{key:t[0].getTime(),className:n.week,role:"row"},h&&wa.default.createElement("div",{className:n.weekNumber,tabIndex:b?0:-1,role:"gridcell",onClick:b?function(e){return b(i,t,e)}:void 0,onKeyUp:b?function(e){return e.keyCode===Yi.ENTER&&b(i,t,e)}:void 0},e.props.renderWeek(i,t,r)),t.map(e.renderDay))}))))}}]),n}(),Ma=Object.defineProperty({default:Na},"__esModule",{value:!0}),Da=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Aa=(Ia=t)&&Ia.__esModule?Ia:{default:Ia};function ja(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ra(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var La=function(e){function n(){return ja(this,n),Ra(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),Da(n,[{key:"shouldComponentUpdate",value:function(e){return this.props!==e}},{key:"render",value:function(){var e,t=this.props,n=t.weekday,r=t.className,i=t.weekdaysLong,o=t.weekdaysShort,a=t.localeUtils,s=t.locale;e=i?i[n]:a.formatWeekdayLong(n,s);var l;return l=o?o[n]:a.formatWeekdayShort(n,s),Aa.default.createElement("div",{className:r,role:"columnheader"},Aa.default.createElement("abbr",{title:e},l))}}]),n}(),Fa=Object.defineProperty({default:La},"__esModule",{value:!0}),za=pn((function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.ModifiersUtils=n.LocaleUtils=n.DateUtils=n.DayPicker=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=b(t),a=b(eo),s=b(po),l=b(Ma),c=b(Fa),u=m(ta),d=m(Go),f=m($i),p=m(va),h=b(no);function m(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function b(e){return e&&e.__esModule?e:{default:e}}var g=n.DayPicker=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.dayPicker=null,t.showNextMonth=function(e){if(t.allowNextMonth()){var n=t.props.pagedNavigation?t.props.numberOfMonths:1,r=d.addMonths(t.state.currentMonth,n);t.showMonth(r,e)}},t.showPreviousMonth=function(e){if(t.allowPreviousMonth()){var n=t.props.pagedNavigation?t.props.numberOfMonths:1,r=d.addMonths(t.state.currentMonth,-n);t.showMonth(r,e)}},t.handleKeyDown=function(e){switch(e.persist(),e.keyCode){case Yi.LEFT:"rtl"===t.props.dir?t.showNextMonth():t.showPreviousMonth(),u.cancelEvent(e);break;case Yi.RIGHT:"rtl"===t.props.dir?t.showPreviousMonth():t.showNextMonth(),u.cancelEvent(e);break;case Yi.UP:t.showPreviousYear(),u.cancelEvent(e);break;case Yi.DOWN:t.showNextYear(),u.cancelEvent(e)}t.props.onKeyDown&&t.props.onKeyDown(e)},t.handleDayKeyDown=function(e,n,r){switch(r.persist(),r.keyCode){case Yi.LEFT:u.cancelEvent(r),"rtl"===t.props.dir?t.focusNextDay(r.target):t.focusPreviousDay(r.target);break;case Yi.RIGHT:u.cancelEvent(r),"rtl"===t.props.dir?t.focusPreviousDay(r.target):t.focusNextDay(r.target);break;case Yi.UP:u.cancelEvent(r),t.focusPreviousWeek(r.target);break;case Yi.DOWN:u.cancelEvent(r),t.focusNextWeek(r.target);break;case Yi.ENTER:case Yi.SPACE:u.cancelEvent(r),t.props.onDayClick&&t.handleDayClick(e,n,r)}t.props.onDayKeyDown&&t.props.onDayKeyDown(e,n,r)},t.handleDayClick=function(e,n,r){r.persist(),n[t.props.classNames.outside]&&t.props.enableOutsideDaysClick&&t.handleOutsideDayClick(e),t.props.onDayClick&&t.props.onDayClick(e,n,r)},t.handleTodayButtonClick=function(e){var n=new Date,r=new Date(n.getFullYear(),n.getMonth());t.showMonth(r),e.target.blur(),t.props.onTodayButtonClick&&(e.persist(),t.props.onTodayButtonClick(new Date(n.getFullYear(),n.getMonth(),n.getDate()),p.getModifiersForDay(n,t.props.modifiers),e))};var r=t.getCurrentMonthFromProps(e);return t.state={currentMonth:r},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),i(n,[{key:"componentDidUpdate",value:function(e){if(e.month!==this.props.month&&!d.isSameMonth(e.month,this.props.month)){var t=this.getCurrentMonthFromProps(this.props);this.setState({currentMonth:t})}}},{key:"getCurrentMonthFromProps",value:function(e){var t=u.startOfMonth(e.month||e.initialMonth||new Date);if(e.pagedNavigation&&e.numberOfMonths>1&&e.fromMonth){var n=u.startOfMonth(e.fromMonth),r=u.getMonthsDiff(n,t);t=d.addMonths(n,Math.floor(r/e.numberOfMonths)*e.numberOfMonths)}else e.toMonth&&e.numberOfMonths>1&&u.getMonthsDiff(t,e.toMonth)<=0&&(t=d.addMonths(u.startOfMonth(e.toMonth),1-this.props.numberOfMonths));return t}},{key:"getNextNavigableMonth",value:function(){return d.addMonths(this.state.currentMonth,this.props.numberOfMonths)}},{key:"getPreviousNavigableMonth",value:function(){return d.addMonths(this.state.currentMonth,-1)}},{key:"allowPreviousMonth",value:function(){var e=d.addMonths(this.state.currentMonth,-1);return this.allowMonth(e)}},{key:"allowNextMonth",value:function(){var e=d.addMonths(this.state.currentMonth,this.props.numberOfMonths);return this.allowMonth(e)}},{key:"allowMonth",value:function(e){var t=this.props,n=t.fromMonth,r=t.toMonth;return!(!t.canChangeMonth||n&&u.getMonthsDiff(n,e)<0||r&&u.getMonthsDiff(r,e)>0)}},{key:"allowYearChange",value:function(){return this.props.canChangeMonth}},{key:"showMonth",value:function(e,t){var n=this;this.allowMonth(e)&&this.setState({currentMonth:u.startOfMonth(e)},(function(){t&&t(),n.props.onMonthChange&&n.props.onMonthChange(n.state.currentMonth)}))}},{key:"showNextYear",value:function(){if(this.allowYearChange()){var e=d.addMonths(this.state.currentMonth,12);this.showMonth(e)}}},{key:"showPreviousYear",value:function(){if(this.allowYearChange()){var e=d.addMonths(this.state.currentMonth,-12);this.showMonth(e)}}},{key:"focus",value:function(){this.wrapper.focus()}},{key:"focusFirstDayOfMonth",value:function(){u.getDayNodes(this.dayPicker,this.props.classNames)[0].focus()}},{key:"focusLastDayOfMonth",value:function(){var e=u.getDayNodes(this.dayPicker,this.props.classNames);e[e.length-1].focus()}},{key:"focusPreviousDay",value:function(e){var t=this,n=u.getDayNodes(this.dayPicker,this.props.classNames),r=u.nodeListToArray(n).indexOf(e);-1!==r&&(0===r?this.showPreviousMonth((function(){return t.focusLastDayOfMonth()})):n[r-1].focus())}},{key:"focusNextDay",value:function(e){var t=this,n=u.getDayNodes(this.dayPicker,this.props.classNames),r=u.nodeListToArray(n).indexOf(e);-1!==r&&(r===n.length-1?this.showNextMonth((function(){return t.focusFirstDayOfMonth()})):n[r+1].focus())}},{key:"focusNextWeek",value:function(e){var t=this,n=u.getDayNodes(this.dayPicker,this.props.classNames),r=u.nodeListToArray(n).indexOf(e);r>n.length-8?this.showNextMonth((function(){var e=7-(n.length-r);u.getDayNodes(t.dayPicker,t.props.classNames)[e].focus()})):n[r+7].focus()}},{key:"focusPreviousWeek",value:function(e){var t=this,n=u.getDayNodes(this.dayPicker,this.props.classNames),r=u.nodeListToArray(n).indexOf(e);r<=6?this.showPreviousMonth((function(){var e=u.getDayNodes(t.dayPicker,t.props.classNames);e[e.length-7+r].focus()})):n[r-7].focus()}},{key:"handleOutsideDayClick",value:function(e){var t=this.state.currentMonth,n=this.props.numberOfMonths,r=u.getMonthsDiff(t,e);r>0&&r>=n?this.showNextMonth():r<0&&this.showPreviousMonth()}},{key:"renderNavbar",value:function(){var e=this.props,t=e.labels,n=e.locale,r=e.localeUtils,i=e.canChangeMonth,a=e.navbarElement,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["labels","locale","localeUtils","canChangeMonth","navbarElement"]);if(!i)return null;var l={month:this.state.currentMonth,classNames:this.props.classNames,className:this.props.classNames.navBar,nextMonth:this.getNextNavigableMonth(),previousMonth:this.getPreviousNavigableMonth(),showPreviousButton:this.allowPreviousMonth(),showNextButton:this.allowNextMonth(),onNextClick:this.showNextMonth,onPreviousClick:this.showPreviousMonth,dir:s.dir,labels:t,locale:n,localeUtils:r};return o.default.isValidElement(a)?o.default.cloneElement(a,l):o.default.createElement(a,l)}},{key:"renderMonths",value:function(){for(var e=[],t=u.getFirstDayOfWeekFromProps(this.props),n=0;n<this.props.numberOfMonths;n+=1){var i=d.addMonths(this.state.currentMonth,n);e.push(o.default.createElement(l.default,r({key:n},this.props,{month:i,firstDayOfWeek:t,onDayKeyDown:this.handleDayKeyDown,onDayClick:this.handleDayClick})))}return this.props.reverseMonths&&e.reverse(),e}},{key:"renderFooter",value:function(){return this.props.todayButton?o.default.createElement("div",{className:this.props.classNames.footer},this.renderTodayButton()):null}},{key:"renderTodayButton",value:function(){return o.default.createElement("button",{type:"button",tabIndex:0,className:this.props.classNames.todayButton,"aria-label":this.props.todayButton,onClick:this.handleTodayButtonClick},this.props.todayButton)}},{key:"render",value:function(){var e=this,t=this.props.classNames.container;return this.props.onDayClick||(t=t+" "+this.props.classNames.interactionDisabled),this.props.className&&(t=t+" "+this.props.className),o.default.createElement("div",r({},this.props.containerProps,{className:t,ref:function(t){return e.dayPicker=t},lang:this.props.locale}),o.default.createElement("div",{className:this.props.classNames.wrapper,ref:function(t){return e.wrapper=t},tabIndex:this.props.canChangeMonth&&void 0!==this.props.tabIndex?this.props.tabIndex:-1,onKeyDown:this.handleKeyDown,onFocus:this.props.onFocus,onBlur:this.props.onBlur},this.renderNavbar(),o.default.createElement("div",{className:this.props.classNames.months},this.renderMonths()),this.renderFooter()))}}]),n}();g.defaultProps={classNames:h.default,tabIndex:0,numberOfMonths:1,labels:{previousMonth:"Previous Month",nextMonth:"Next Month"},locale:"en",localeUtils:f,showOutsideDays:!1,enableOutsideDaysClick:!0,fixedWeeks:!1,canChangeMonth:!0,reverseMonths:!1,pagedNavigation:!1,showWeekNumbers:!1,showWeekDays:!0,renderDay:function(e){return e.getDate()},renderWeek:function(e){return e},weekdayElement:o.default.createElement(c.default,null),navbarElement:o.default.createElement(s.default,{classNames:h.default}),captionElement:o.default.createElement(a.default,{classNames:h.default})},g.VERSION="7.4.10",g.DateUtils=d,g.LocaleUtils=f,g.ModifiersUtils=p,n.DateUtils=d,n.LocaleUtils=f,n.ModifiersUtils=p,n.default=g})),Ua=pn((function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.HIDE_TIMEOUT=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.OverlayComponent=c,n.defaultFormat=u,n.defaultParse=d;var o=s(t),a=s(za);function s(e){return e&&e.__esModule?e:{default:e}}var l=n.HIDE_TIMEOUT=100;function c(e){e.input,e.selectedDay,e.month;var t=e.children,n=e.classNames,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["input","selectedDay","month","children","classNames"]);return o.default.createElement("div",i({className:n.overlayWrapper},r),o.default.createElement("div",{className:n.overlay},t))}function u(e){return(0,Go.isDate)(e)?e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate():""}function d(e){if("string"==typeof e){var t=e.split("-");if(3===t.length){var n=parseInt(t[0],10),r=parseInt(t[1],10)-1,i=parseInt(t[2],10);if(!(isNaN(n)||String(n).length>4||isNaN(r)||isNaN(i)||i<=0||i>31||r<0||r>=12))return new Date(n,r,i,12,0,0,0)}}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.input=null,n.daypicker=null,n.clickTimeout=null,n.hideTimeout=null,n.inputBlurTimeout=null,n.inputFocusTimeout=null,n.state=n.getInitialStateFromProps(e),n.state.showOverlay=e.showOverlay,n.hideAfterDayClick=n.hideAfterDayClick.bind(n),n.handleInputClick=n.handleInputClick.bind(n),n.handleInputFocus=n.handleInputFocus.bind(n),n.handleInputBlur=n.handleInputBlur.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n.handleInputKeyDown=n.handleInputKeyDown.bind(n),n.handleInputKeyUp=n.handleInputKeyUp.bind(n),n.handleDayClick=n.handleDayClick.bind(n),n.handleMonthChange=n.handleMonthChange.bind(n),n.handleOverlayFocus=n.handleOverlayFocus.bind(n),n.handleOverlayBlur=n.handleOverlayBlur.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){var t={},n=this.props,r=n.value,i=n.formatDate,o=n.format,a=n.dayPickerProps;r===e.value&&a.locale===e.dayPickerProps.locale&&o===e.format||((0,Go.isDate)(r)?t.value=i(r,o,a.locale):t.value=r);var s=e.dayPickerProps.month;a.month&&a.month!==s&&!(0,Go.isSameMonth)(a.month,s)&&(t.month=a.month),e.dayPickerProps.selectedDays!==a.selectedDays&&(t.selectedDays=a.selectedDays),Object.keys(t).length>0&&this.setState(t)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.clickTimeout),clearTimeout(this.hideTimeout),clearTimeout(this.inputFocusTimeout),clearTimeout(this.inputBlurTimeout),clearTimeout(this.overlayBlurTimeout)}},{key:"getInitialMonthFromProps",value:function(e){var t=e.dayPickerProps,n=e.format,r=void 0;return e.value&&(r=(0,Go.isDate)(e.value)?e.value:e.parseDate(e.value,n,t.locale)),t.initialMonth||t.month||r||new Date}},{key:"getInitialStateFromProps",value:function(e){var t=e.dayPickerProps,n=e.formatDate,r=e.format,i=e.typedValue,o=e.value;return e.value&&(0,Go.isDate)(e.value)&&(o=n(e.value,r,t.locale)),{value:o,typedValue:i,month:this.getInitialMonthFromProps(e),selectedDays:t.selectedDays}}},{key:"getInput",value:function(){return this.input}},{key:"getDayPicker",value:function(){return this.daypicker}},{key:"updateState",value:function(e,t,n){var r=this,o=this.props,a=o.dayPickerProps,s=o.onDayChange;this.setState({month:e,value:t,typedValue:""},(function(){if(n&&n(),s){var t=i({disabled:a.disabledDays,selected:a.selectedDays},a.modifiers),o=(0,va.getModifiersForDay)(e,t).reduce((function(e,t){return i({},e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:true,enumerable:!0,configurable:!0,writable:!0}):e[t]=true,e}({},t))}),{});s(e,o,r)}}))}},{key:"showDayPicker",value:function(){var e=this,t=this.props,n=t.parseDate,r=t.format,i=t.dayPickerProps,o=this.state,a=o.value;if(!o.showOverlay){var s=a?n(a,r,i.locale):this.getInitialMonthFromProps(this.props);this.setState((function(e){return{showOverlay:!0,month:s||e.month}}),(function(){e.props.onDayPickerShow&&e.props.onDayPickerShow()}))}}},{key:"hideDayPicker",value:function(){var e=this;!1!==this.state.showOverlay&&this.setState({showOverlay:!1},(function(){e.props.onDayPickerHide&&e.props.onDayPickerHide()}))}},{key:"hideAfterDayClick",value:function(){var e=this;this.props.hideOnDayClick&&(this.hideTimeout=setTimeout((function(){e.overlayHasFocus=!1,e.hideDayPicker()}),l))}},{key:"handleInputClick",value:function(e){this.showDayPicker(),this.props.inputProps.onClick&&(e.persist(),this.props.inputProps.onClick(e))}},{key:"handleInputFocus",value:function(e){var t=this;this.showDayPicker(),this.inputFocusTimeout=setTimeout((function(){t.overlayHasFocus=!1}),2),this.props.inputProps.onFocus&&(e.persist(),this.props.inputProps.onFocus(e))}},{key:"handleInputBlur",value:function(e){var t=this;this.inputBlurTimeout=setTimeout((function(){t.overlayHasFocus||t.hideDayPicker()}),1),this.props.inputProps.onBlur&&(e.persist(),this.props.inputProps.onBlur(e))}},{key:"handleOverlayFocus",value:function(e){e.preventDefault(),this.overlayHasFocus=!0,this.props.keepFocus&&this.input&&"function"==typeof this.input.focus&&this.input.focus()}},{key:"handleOverlayBlur",value:function(){var e=this;this.overlayBlurTimeout=setTimeout((function(){e.overlayHasFocus=!1}),3)}},{key:"handleInputChange",value:function(e){var t=this.props,n=t.dayPickerProps,r=t.format,i=t.inputProps,o=t.onDayChange,a=t.parseDate;i.onChange&&(e.persist(),i.onChange(e));var s=e.target.value;if(""===s.trim())return this.setState({value:s,typedValue:""}),void(o&&o(void 0,{},this));var l=a(s,r,n.locale);if(!l)return this.setState({value:s,typedValue:s}),void(o&&o(void 0,{},this));this.updateState(l,s)}},{key:"handleInputKeyDown",value:function(e){e.keyCode===Yi.TAB?this.hideDayPicker():this.showDayPicker(),this.props.inputProps.onKeyDown&&(e.persist(),this.props.inputProps.onKeyDown(e))}},{key:"handleInputKeyUp",value:function(e){e.keyCode===Yi.ESC?this.hideDayPicker():this.showDayPicker(),this.props.inputProps.onKeyUp&&(e.persist(),this.props.inputProps.onKeyUp(e))}},{key:"handleMonthChange",value:function(e){var t=this;this.setState({month:e},(function(){t.props.dayPickerProps&&t.props.dayPickerProps.onMonthChange&&t.props.dayPickerProps.onMonthChange(e)}))}},{key:"handleDayClick",value:function(e,t,n){var r=this,i=this.props,o=i.clickUnselectsDay,a=i.dayPickerProps,s=i.onDayChange,l=i.formatDate,c=i.format;if(a.onDayClick&&a.onDayClick(e,t,n),!(t.disabled||a&&a.classNames&&t[a.classNames.disabled])){if(t.selected&&o){var u=this.state.selectedDays;if(Array.isArray(u)){var d=(u=u.slice(0)).indexOf(e);u.splice(d,1)}else u&&(u=null);return this.setState({value:"",typedValue:"",selectedDays:u},this.hideAfterDayClick),void(s&&s(void 0,t,this))}var f=l(e,c,a.locale);this.setState({value:f,typedValue:"",month:e},(function(){s&&s(e,t,r),r.hideAfterDayClick()}))}}},{key:"renderOverlay",value:function(){var e=this,t=this.props,n=t.classNames,r=t.dayPickerProps,s=t.parseDate,l=t.formatDate,c=t.format,u=this.state,d=u.selectedDays,f=u.value,p=void 0;if(!d&&f){var h=s(f,c,r.locale);h&&(p=h)}else d&&(p=d);var m=void 0;r.todayButton&&(m=function(){return e.updateState(new Date,l(new Date,c,r.locale),e.hideAfterDayClick)});var b=this.props.overlayComponent;return o.default.createElement(b,{classNames:n,month:this.state.month,selectedDay:p,input:this.input,tabIndex:0,onFocus:this.handleOverlayFocus,onBlur:this.handleOverlayBlur},o.default.createElement(a.default,i({ref:function(t){return e.daypicker=t},onTodayButtonClick:m},r,{month:this.state.month,selectedDays:p,onDayClick:this.handleDayClick,onMonthChange:this.handleMonthChange})))}},{key:"render",value:function(){var e=this,t=this.props.component,n=this.props.inputProps;return o.default.createElement("div",{className:this.props.classNames.container,style:this.props.style},o.default.createElement(t,i({ref:function(t){return e.input=t},placeholder:this.props.placeholder},n,{value:this.state.value||this.state.typedValue,onChange:this.handleInputChange,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onKeyDown:this.handleInputKeyDown,onKeyUp:this.handleInputKeyUp,onClick:n.disabled?void 0:this.handleInputClick})),this.state.showOverlay&&this.renderOverlay())}}]),t}(o.default.Component);f.defaultProps={dayPickerProps:{},value:"",typedValue:"",placeholder:"YYYY-M-D",format:"L",formatDate:u,parseDate:d,showOverlay:!1,hideOnDayClick:!0,clickUnselectsDay:!1,keepFocus:!0,component:"input",inputProps:{},overlayComponent:c,classNames:{container:"DayPickerInput",overlayWrapper:"DayPickerInput-OverlayWrapper",overlay:"DayPickerInput-Overlay"}},n.default=f}));function Ba(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Va(e){Ba(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function Wa(e){Ba(1,arguments);var t=Va(e);return!isNaN(t)}var qa={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Ha(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var $a={date:Ha({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Ha({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Ha({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Ya={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Ga(e){return function(t,n){var r,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,a=i.width?String(i.width):o;r=e.formattingValues[a]||e.formattingValues[o]}else{var s=e.defaultWidth,l=i.width?String(i.width):e.defaultWidth;r=e.values[l]||e.values[s]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function Ka(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function Qa(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function Xa(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;var a,s=o[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?Qa(l,(function(e){return e.test(s)})):Ka(l,(function(e){return e.test(s)}));a=e.valueCallback?e.valueCallback(c):c,a=n.valueCallback?n.valueCallback(a):a;var u=t.slice(s.length);return{value:a,rest:u}}}var Za={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof qa[e]?qa[e]:1===t?qa[e].one:qa[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:$a,formatRelative:function(e,t,n,r){return Ya[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Ga({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Ga({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Ga({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Ga({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Ga({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var i=r[0],o=t.match(e.parsePattern);if(!o)return null;var a=e.valueCallback?e.valueCallback(o[0]):o[0];a=n.valueCallback?n.valueCallback(a):a;var s=t.slice(i.length);return{value:a,rest:s}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Xa({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Xa({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Xa({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Xa({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Xa({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ja(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function es(e,t){Ba(2,arguments);var n=Va(e).getTime(),r=Ja(t);return new Date(n+r)}function ts(e,t){Ba(2,arguments);var n=Ja(t);return es(e,-n)}function ns(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var rs={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return ns("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):ns(n+1,2)},d:function(e,t){return ns(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return ns(e.getUTCHours()%12||12,t.length)},H:function(e,t){return ns(e.getUTCHours(),t.length)},m:function(e,t){return ns(e.getUTCMinutes(),t.length)},s:function(e,t){return ns(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return ns(Math.floor(r*Math.pow(10,n-3)),t.length)}};function is(e){Ba(1,arguments);var t=1,n=Va(e),r=n.getUTCDay(),i=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function os(e){Ba(1,arguments);var t=Va(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=is(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var a=is(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function as(e){Ba(1,arguments);var t=os(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=is(n);return r}function ss(e){Ba(1,arguments);var t=Va(e),n=is(t).getTime()-as(t).getTime();return Math.round(n/6048e5)+1}function ls(e,t){Ba(1,arguments);var n=t||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,o=null==i?0:Ja(i),a=null==n.weekStartsOn?o:Ja(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=Va(e),l=s.getUTCDay(),c=(l<a?7:0)+l-a;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function cs(e,t){Ba(1,arguments);var n=Va(e,t),r=n.getUTCFullYear(),i=t||{},o=i.locale,a=o&&o.options&&o.options.firstWeekContainsDate,s=null==a?1:Ja(a),l=null==i.firstWeekContainsDate?s:Ja(i.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,l),c.setUTCHours(0,0,0,0);var u=ls(c,t),d=new Date(0);d.setUTCFullYear(r,0,l),d.setUTCHours(0,0,0,0);var f=ls(d,t);return n.getTime()>=u.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function us(e,t){Ba(1,arguments);var n=t||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:Ja(i),a=null==n.firstWeekContainsDate?o:Ja(n.firstWeekContainsDate),s=cs(e,t),l=new Date(0);l.setUTCFullYear(s,0,a),l.setUTCHours(0,0,0,0);var c=ls(l,t);return c}function ds(e,t){Ba(1,arguments);var n=Va(e),r=ls(n,t).getTime()-us(n,t).getTime();return Math.round(r/6048e5)+1}function fs(e,t){var n=e>0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=r%60;if(0===o)return n+String(i);var a=t||"";return n+String(i)+a+ns(o,2)}function ps(e,t){return e%60==0?(e>0?"-":"+")+ns(Math.abs(e)/60,2):hs(e,t)}function hs(e,t){var n=t||"",r=e>0?"-":"+",i=Math.abs(e);return r+ns(Math.floor(i/60),2)+n+ns(i%60,2)}var ms={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return rs.y(e,t)},Y:function(e,t,n,r){var i=cs(e,r),o=i>0?i:1-i;return"YY"===t?ns(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):ns(o,t.length)},R:function(e,t){return ns(os(e),t.length)},u:function(e,t){return ns(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return ns(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return ns(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return rs.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return ns(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var i=ds(e,r);return"wo"===t?n.ordinalNumber(i,{unit:"week"}):ns(i,t.length)},I:function(e,t,n){var r=ss(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):ns(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):rs.d(e,t)},D:function(e,t,n){var r=function(e){Ba(1,arguments);var t=Va(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),i=n-r;return Math.floor(i/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):ns(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var i=e.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return ns(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var i=e.getUTCDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return ns(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),i=0===r?7:r;switch(t){case"i":return String(i);case"ii":return ns(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,i=e.getUTCHours();switch(r=12===i?"noon":0===i?"midnight":i/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,i=e.getUTCHours();switch(r=i>=17?"evening":i>=12?"afternoon":i>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return rs.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):rs.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):ns(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):ns(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):rs.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):rs.s(e,t)},S:function(e,t){return rs.S(e,t)},X:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();if(0===i)return"Z";switch(t){case"X":return ps(i);case"XXXX":case"XX":return hs(i);case"XXXXX":case"XXX":default:return hs(i,":")}},x:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return ps(i);case"xxxx":case"xx":return hs(i);case"xxxxx":case"xxx":default:return hs(i,":")}},O:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+fs(i,":");case"OOOO":default:return"GMT"+hs(i,":")}},z:function(e,t,n,r){var i=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+fs(i,":");case"zzzz":default:return"GMT"+hs(i,":")}},t:function(e,t,n,r){var i=r._originalDate||e;return ns(Math.floor(i.getTime()/1e3),t.length)},T:function(e,t,n,r){return ns((r._originalDate||e).getTime(),t.length)}};function bs(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function gs(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var vs={p:gs,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),i=r[1],o=r[2];if(!o)return bs(e,t);switch(i){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",bs(i,t)).replace("{{time}}",gs(o,t))}};function ys(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var ws=["D","DD"],_s=["YY","YYYY"];function xs(e){return-1!==ws.indexOf(e)}function ks(e){return-1!==_s.indexOf(e)}function Es(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Ss=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Cs=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ts=/^'([^]*?)'?$/,Os=/''/g,Ps=/[a-zA-Z]/;function Is(e){return e.match(Ts)[1].replace(Os,"'")}function Ns(e,t,n){Ba(2,arguments);var r=String(t),i=n||{},o=i.locale||Za,a=o.options&&o.options.firstWeekContainsDate,s=null==a?1:Ja(a),l=null==i.firstWeekContainsDate?s:Ja(i.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=o.options&&o.options.weekStartsOn,u=null==c?0:Ja(c),d=null==i.weekStartsOn?u:Ja(i.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var f=Va(e);if(!Wa(f))throw new RangeError("Invalid time value");var p=ys(f),h=ts(f,p),m={firstWeekContainsDate:l,weekStartsOn:d,locale:o,_originalDate:f},b=r.match(Cs).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,vs[t])(e,o.formatLong,m):e})).join("").match(Ss).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Is(n);var a=ms[r];if(a)return!i.useAdditionalWeekYearTokens&&ks(n)&&Es(n,t,e),!i.useAdditionalDayOfYearTokens&&xs(n)&&Es(n,t,e),a(h,n,o.localize,m);if(r.match(Ps))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return b}var Ms=pn((function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(za).default}}),Object.defineProperty(t,"DateUtils",{enumerable:!0,get:function(){return n(Go).default}}),Object.defineProperty(t,"LocaleUtils",{enumerable:!0,get:function(){return n($i).default}}),Object.defineProperty(t,"ModifiersUtils",{enumerable:!0,get:function(){return n(va).default}})}));function Ds(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function As(e,t,n){Ba(2,arguments);var r=n||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,a=null==o?0:Ja(o),s=null==r.weekStartsOn?a:Ja(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=Va(e),c=Ja(t),u=l.getUTCDay(),d=c%7,f=(d+7)%7,p=(f<s?7:0)+c-u;return l.setUTCDate(l.getUTCDate()+p),l}var js=/^(1[0-2]|0?\d)/,Rs=/^(3[0-1]|[0-2]?\d)/,Ls=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,Fs=/^(5[0-3]|[0-4]?\d)/,zs=/^(2[0-3]|[0-1]?\d)/,Us=/^(2[0-4]|[0-1]?\d)/,Bs=/^(1[0-1]|0?\d)/,Vs=/^(1[0-2]|0?\d)/,Ws=/^[0-5]?\d/,qs=/^[0-5]?\d/,Hs=/^\d/,$s=/^\d{1,2}/,Ys=/^\d{1,3}/,Gs=/^\d{1,4}/,Ks=/^-?\d+/,Qs=/^-?\d/,Xs=/^-?\d{1,2}/,Zs=/^-?\d{1,3}/,Js=/^-?\d{1,4}/,el=/^([+-])(\d{2})(\d{2})?|Z/,tl=/^([+-])(\d{2})(\d{2})|Z/,nl=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,rl=/^([+-])(\d{2}):(\d{2})|Z/,il=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function ol(e,t,n){var r=t.match(e);if(!r)return null;var i=parseInt(r[0],10);return{value:n?n(i):i,rest:t.slice(r[0].length)}}function al(e,t){var n=t.match(e);return n?"Z"===n[0]?{value:0,rest:t.slice(1)}:{value:("+"===n[1]?1:-1)*(36e5*(n[2]?parseInt(n[2],10):0)+6e4*(n[3]?parseInt(n[3],10):0)+1e3*(n[5]?parseInt(n[5],10):0)),rest:t.slice(n[0].length)}:null}function sl(e,t){return ol(Ks,e,t)}function ll(e,t,n){switch(e){case 1:return ol(Hs,t,n);case 2:return ol($s,t,n);case 3:return ol(Ys,t,n);case 4:return ol(Gs,t,n);default:return ol(new RegExp("^\\d{1,"+e+"}"),t,n)}}function cl(e,t,n){switch(e){case 1:return ol(Qs,t,n);case 2:return ol(Xs,t,n);case 3:return ol(Zs,t,n);case 4:return ol(Js,t,n);default:return ol(new RegExp("^-?\\d{1,"+e+"}"),t,n)}}function ul(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function dl(e,t){var n,r=t>0,i=r?t:1-t;if(i<=50)n=e||100;else{var o=i+50;n=e+100*Math.floor(o/100)-(e>=o%100?100:0)}return r?n:1-n}var fl=[31,28,31,30,31,30,31,31,30,31,30,31],pl=[31,29,31,30,31,30,31,31,30,31,30,31];function hl(e){return e%400==0||e%4==0&&e%100!=0}var ml={G:{priority:140,parse:function(e,t,n,r){switch(t){case"G":case"GG":case"GGG":return n.era(e,{width:"abbreviated"})||n.era(e,{width:"narrow"});case"GGGGG":return n.era(e,{width:"narrow"});case"GGGG":default:return n.era(e,{width:"wide"})||n.era(e,{width:"abbreviated"})||n.era(e,{width:"narrow"})}},set:function(e,t,n,r){return t.era=n,e.setUTCFullYear(n,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(e,t,n,r){var i=function(e){return{year:e,isTwoDigitYear:"yy"===t}};switch(t){case"y":return ll(4,e,i);case"yo":return n.ordinalNumber(e,{unit:"year",valueCallback:i});default:return ll(t.length,e,i)}},validate:function(e,t,n){return t.isTwoDigitYear||t.year>0},set:function(e,t,n,r){var i=e.getUTCFullYear();if(n.isTwoDigitYear){var o=dl(n.year,i);return e.setUTCFullYear(o,0,1),e.setUTCHours(0,0,0,0),e}var a="era"in t&&1!==t.era?1-n.year:n.year;return e.setUTCFullYear(a,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(e,t,n,r){var i=function(e){return{year:e,isTwoDigitYear:"YY"===t}};switch(t){case"Y":return ll(4,e,i);case"Yo":return n.ordinalNumber(e,{unit:"year",valueCallback:i});default:return ll(t.length,e,i)}},validate:function(e,t,n){return t.isTwoDigitYear||t.year>0},set:function(e,t,n,r){var i=cs(e,r);if(n.isTwoDigitYear){var o=dl(n.year,i);return e.setUTCFullYear(o,0,r.firstWeekContainsDate),e.setUTCHours(0,0,0,0),ls(e,r)}var a="era"in t&&1!==t.era?1-n.year:n.year;return e.setUTCFullYear(a,0,r.firstWeekContainsDate),e.setUTCHours(0,0,0,0),ls(e,r)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(e,t,n,r){return cl("R"===t?4:t.length,e)},set:function(e,t,n,r){var i=new Date(0);return i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0),is(i)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(e,t,n,r){return cl("u"===t?4:t.length,e)},set:function(e,t,n,r){return e.setUTCFullYear(n,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(e,t,n,r){switch(t){case"Q":case"QQ":return ll(t.length,e);case"Qo":return n.ordinalNumber(e,{unit:"quarter"});case"QQQ":return n.quarter(e,{width:"abbreviated",context:"formatting"})||n.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(e,{width:"wide",context:"formatting"})||n.quarter(e,{width:"abbreviated",context:"formatting"})||n.quarter(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,n){return t>=1&&t<=4},set:function(e,t,n,r){return e.setUTCMonth(3*(n-1),1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(e,t,n,r){switch(t){case"q":case"qq":return ll(t.length,e);case"qo":return n.ordinalNumber(e,{unit:"quarter"});case"qqq":return n.quarter(e,{width:"abbreviated",context:"standalone"})||n.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(e,{width:"wide",context:"standalone"})||n.quarter(e,{width:"abbreviated",context:"standalone"})||n.quarter(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,n){return t>=1&&t<=4},set:function(e,t,n,r){return e.setUTCMonth(3*(n-1),1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(e,t,n,r){var i=function(e){return e-1};switch(t){case"M":return ol(js,e,i);case"MM":return ll(2,e,i);case"Mo":return n.ordinalNumber(e,{unit:"month",valueCallback:i});case"MMM":return n.month(e,{width:"abbreviated",context:"formatting"})||n.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(e,{width:"wide",context:"formatting"})||n.month(e,{width:"abbreviated",context:"formatting"})||n.month(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,n){return t>=0&&t<=11},set:function(e,t,n,r){return e.setUTCMonth(n,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(e,t,n,r){var i=function(e){return e-1};switch(t){case"L":return ol(js,e,i);case"LL":return ll(2,e,i);case"Lo":return n.ordinalNumber(e,{unit:"month",valueCallback:i});case"LLL":return n.month(e,{width:"abbreviated",context:"standalone"})||n.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(e,{width:"wide",context:"standalone"})||n.month(e,{width:"abbreviated",context:"standalone"})||n.month(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,n){return t>=0&&t<=11},set:function(e,t,n,r){return e.setUTCMonth(n,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(e,t,n,r){switch(t){case"w":return ol(Fs,e);case"wo":return n.ordinalNumber(e,{unit:"week"});default:return ll(t.length,e)}},validate:function(e,t,n){return t>=1&&t<=53},set:function(e,t,n,r){return ls(function(e,t,n){Ba(2,arguments);var r=Va(e),i=Ja(t),o=ds(r,n)-i;return r.setUTCDate(r.getUTCDate()-7*o),r}(e,n,r),r)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(e,t,n,r){switch(t){case"I":return ol(Fs,e);case"Io":return n.ordinalNumber(e,{unit:"week"});default:return ll(t.length,e)}},validate:function(e,t,n){return t>=1&&t<=53},set:function(e,t,n,r){return is(function(e,t){Ba(2,arguments);var n=Va(e),r=Ja(t),i=ss(n)-r;return n.setUTCDate(n.getUTCDate()-7*i),n}(e,n,r),r)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,subPriority:1,parse:function(e,t,n,r){switch(t){case"d":return ol(Rs,e);case"do":return n.ordinalNumber(e,{unit:"date"});default:return ll(t.length,e)}},validate:function(e,t,n){var r=hl(e.getUTCFullYear()),i=e.getUTCMonth();return r?t>=1&&t<=pl[i]:t>=1&&t<=fl[i]},set:function(e,t,n,r){return e.setUTCDate(n),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,subPriority:1,parse:function(e,t,n,r){switch(t){case"D":case"DD":return ol(Ls,e);case"Do":return n.ordinalNumber(e,{unit:"date"});default:return ll(t.length,e)}},validate:function(e,t,n){return hl(e.getUTCFullYear())?t>=1&&t<=366:t>=1&&t<=365},set:function(e,t,n,r){return e.setUTCMonth(0,n),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(e,t,n,r){switch(t){case"E":case"EE":case"EEE":return n.day(e,{width:"abbreviated",context:"formatting"})||n.day(e,{width:"short",context:"formatting"})||n.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(e,{width:"short",context:"formatting"})||n.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(e,{width:"wide",context:"formatting"})||n.day(e,{width:"abbreviated",context:"formatting"})||n.day(e,{width:"short",context:"formatting"})||n.day(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,n){return t>=0&&t<=6},set:function(e,t,n,r){return(e=As(e,n,r)).setUTCHours(0,0,0,0),e},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(e,t,n,r){var i=function(e){var t=7*Math.floor((e-1)/7);return(e+r.weekStartsOn+6)%7+t};switch(t){case"e":case"ee":return ll(t.length,e,i);case"eo":return n.ordinalNumber(e,{unit:"day",valueCallback:i});case"eee":return n.day(e,{width:"abbreviated",context:"formatting"})||n.day(e,{width:"short",context:"formatting"})||n.day(e,{width:"narrow",context:"formatting"});case"eeeee":return n.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(e,{width:"short",context:"formatting"})||n.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(e,{width:"wide",context:"formatting"})||n.day(e,{width:"abbreviated",context:"formatting"})||n.day(e,{width:"short",context:"formatting"})||n.day(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,n){return t>=0&&t<=6},set:function(e,t,n,r){return(e=As(e,n,r)).setUTCHours(0,0,0,0),e},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(e,t,n,r){var i=function(e){var t=7*Math.floor((e-1)/7);return(e+r.weekStartsOn+6)%7+t};switch(t){case"c":case"cc":return ll(t.length,e,i);case"co":return n.ordinalNumber(e,{unit:"day",valueCallback:i});case"ccc":return n.day(e,{width:"abbreviated",context:"standalone"})||n.day(e,{width:"short",context:"standalone"})||n.day(e,{width:"narrow",context:"standalone"});case"ccccc":return n.day(e,{width:"narrow",context:"standalone"});case"cccccc":return n.day(e,{width:"short",context:"standalone"})||n.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(e,{width:"wide",context:"standalone"})||n.day(e,{width:"abbreviated",context:"standalone"})||n.day(e,{width:"short",context:"standalone"})||n.day(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,n){return t>=0&&t<=6},set:function(e,t,n,r){return(e=As(e,n,r)).setUTCHours(0,0,0,0),e},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(e,t,n,r){var i=function(e){return 0===e?7:e};switch(t){case"i":case"ii":return ll(t.length,e);case"io":return n.ordinalNumber(e,{unit:"day"});case"iii":return n.day(e,{width:"abbreviated",context:"formatting",valueCallback:i})||n.day(e,{width:"short",context:"formatting",valueCallback:i})||n.day(e,{width:"narrow",context:"formatting",valueCallback:i});case"iiiii":return n.day(e,{width:"narrow",context:"formatting",valueCallback:i});case"iiiiii":return n.day(e,{width:"short",context:"formatting",valueCallback:i})||n.day(e,{width:"narrow",context:"formatting",valueCallback:i});case"iiii":default:return n.day(e,{width:"wide",context:"formatting",valueCallback:i})||n.day(e,{width:"abbreviated",context:"formatting",valueCallback:i})||n.day(e,{width:"short",context:"formatting",valueCallback:i})||n.day(e,{width:"narrow",context:"formatting",valueCallback:i})}},validate:function(e,t,n){return t>=1&&t<=7},set:function(e,t,n,r){return(e=function(e,t){Ba(2,arguments);var n=Ja(t);n%7==0&&(n-=7);var r=1,i=Va(e),o=i.getUTCDay(),a=((n%7+7)%7<r?7:0)+n-o;return i.setUTCDate(i.getUTCDate()+a),i}(e,n,r)).setUTCHours(0,0,0,0),e},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(e,t,n,r){switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(e,{width:"abbreviated",context:"formatting"})||n.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(e,{width:"wide",context:"formatting"})||n.dayPeriod(e,{width:"abbreviated",context:"formatting"})||n.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,n,r){return e.setUTCHours(ul(n),0,0,0),e},incompatibleTokens:["b","B","H","K","k","t","T"]},b:{priority:80,parse:function(e,t,n,r){switch(t){case"b":case"bb":case"bbb":return n.dayPeriod(e,{width:"abbreviated",context:"formatting"})||n.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(e,{width:"wide",context:"formatting"})||n.dayPeriod(e,{width:"abbreviated",context:"formatting"})||n.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,n,r){return e.setUTCHours(ul(n),0,0,0),e},incompatibleTokens:["a","B","H","K","k","t","T"]},B:{priority:80,parse:function(e,t,n,r){switch(t){case"B":case"BB":case"BBB":return n.dayPeriod(e,{width:"abbreviated",context:"formatting"})||n.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(e,{width:"wide",context:"formatting"})||n.dayPeriod(e,{width:"abbreviated",context:"formatting"})||n.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,n,r){return e.setUTCHours(ul(n),0,0,0),e},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(e,t,n,r){switch(t){case"h":return ol(Vs,e);case"ho":return n.ordinalNumber(e,{unit:"hour"});default:return ll(t.length,e)}},validate:function(e,t,n){return t>=1&&t<=12},set:function(e,t,n,r){var i=e.getUTCHours()>=12;return i&&n<12?e.setUTCHours(n+12,0,0,0):i||12!==n?e.setUTCHours(n,0,0,0):e.setUTCHours(0,0,0,0),e},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(e,t,n,r){switch(t){case"H":return ol(zs,e);case"Ho":return n.ordinalNumber(e,{unit:"hour"});default:return ll(t.length,e)}},validate:function(e,t,n){return t>=0&&t<=23},set:function(e,t,n,r){return e.setUTCHours(n,0,0,0),e},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(e,t,n,r){switch(t){case"K":return ol(Bs,e);case"Ko":return n.ordinalNumber(e,{unit:"hour"});default:return ll(t.length,e)}},validate:function(e,t,n){return t>=0&&t<=11},set:function(e,t,n,r){return e.getUTCHours()>=12&&n<12?e.setUTCHours(n+12,0,0,0):e.setUTCHours(n,0,0,0),e},incompatibleTokens:["a","b","h","H","k","t","T"]},k:{priority:70,parse:function(e,t,n,r){switch(t){case"k":return ol(Us,e);case"ko":return n.ordinalNumber(e,{unit:"hour"});default:return ll(t.length,e)}},validate:function(e,t,n){return t>=1&&t<=24},set:function(e,t,n,r){var i=n<=24?n%24:n;return e.setUTCHours(i,0,0,0),e},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(e,t,n,r){switch(t){case"m":return ol(Ws,e);case"mo":return n.ordinalNumber(e,{unit:"minute"});default:return ll(t.length,e)}},validate:function(e,t,n){return t>=0&&t<=59},set:function(e,t,n,r){return e.setUTCMinutes(n,0,0),e},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(e,t,n,r){switch(t){case"s":return ol(qs,e);case"so":return n.ordinalNumber(e,{unit:"second"});default:return ll(t.length,e)}},validate:function(e,t,n){return t>=0&&t<=59},set:function(e,t,n,r){return e.setUTCSeconds(n,0),e},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(e,t,n,r){return ll(t.length,e,(function(e){return Math.floor(e*Math.pow(10,3-t.length))}))},set:function(e,t,n,r){return e.setUTCMilliseconds(n),e},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(e,t,n,r){switch(t){case"X":return al(el,e);case"XX":return al(tl,e);case"XXXX":return al(nl,e);case"XXXXX":return al(il,e);case"XXX":default:return al(rl,e)}},set:function(e,t,n,r){return t.timestampIsSet?e:new Date(e.getTime()-n)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(e,t,n,r){switch(t){case"x":return al(el,e);case"xx":return al(tl,e);case"xxxx":return al(nl,e);case"xxxxx":return al(il,e);case"xxx":default:return al(rl,e)}},set:function(e,t,n,r){return t.timestampIsSet?e:new Date(e.getTime()-n)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(e,t,n,r){return sl(e)},set:function(e,t,n,r){return[new Date(1e3*n),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(e,t,n,r){return sl(e)},set:function(e,t,n,r){return[new Date(n),{timestampIsSet:!0}]},incompatibleTokens:"*"}},bl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,vl=/^'([^]*?)'?$/,yl=/''/g,wl=/\S/,_l=/[a-zA-Z]/;function xl(e,t){if(t.timestampIsSet)return e;var n=new Date(0);return n.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),n.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),n}function kl(e){return e.match(vl)[1].replace(yl,"'")}function El(e,t,n,r){Ba(3,arguments);var i=String(e),o=String(t),a=r||{},s=a.locale||Za;if(!s.match)throw new RangeError("locale must contain match property");var l=s.options&&s.options.firstWeekContainsDate,c=null==l?1:Ja(l),u=null==a.firstWeekContainsDate?c:Ja(a.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=s.options&&s.options.weekStartsOn,f=null==d?0:Ja(d),p=null==a.weekStartsOn?f:Ja(a.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===o)return""===i?Va(n):new Date(NaN);var h,m={firstWeekContainsDate:u,weekStartsOn:p,locale:s},b=[{priority:10,subPriority:-1,set:xl,index:0}],g=o.match(gl).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,vs[t])(e,s.formatLong,m):e})).join("").match(bl),v=[];for(h=0;h<g.length;h++){var y=g[h];!a.useAdditionalWeekYearTokens&&ks(y)&&Es(y,o,e),!a.useAdditionalDayOfYearTokens&&xs(y)&&Es(y,o,e);var w=y[0],_=ml[w];if(_){var x=_.incompatibleTokens;if(Array.isArray(x)){for(var k=void 0,E=0;E<v.length;E++){var S=v[E].token;if(-1!==x.indexOf(S)||S===w){k=v[E];break}}if(k)throw new RangeError("The format string mustn't contain `".concat(k.fullToken,"` and `").concat(y,"` at the same time"))}else if("*"===_.incompatibleTokens&&v.length)throw new RangeError("The format string mustn't contain `".concat(y,"` and any other token at the same time"));v.push({token:w,fullToken:y});var C=_.parse(i,y,s.match,m);if(!C)return new Date(NaN);b.push({priority:_.priority,subPriority:_.subPriority||0,set:_.set,validate:_.validate,value:C.value,index:b.length}),i=C.rest}else{if(w.match(_l))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");if("''"===y?y="'":"'"===w&&(y=kl(y)),0!==i.indexOf(y))return new Date(NaN);i=i.slice(y.length)}}if(i.length>0&&wl.test(i))return new Date(NaN);var T=b.map((function(e){return e.priority})).sort((function(e,t){return t-e})).filter((function(e,t,n){return n.indexOf(e)===t})).map((function(e){return b.filter((function(t){return t.priority===e})).sort((function(e,t){return t.subPriority-e.subPriority}))})).map((function(e){return e[0]})),O=Va(n);if(isNaN(O))return new Date(NaN);var P=ts(O,ys(O)),I={};for(h=0;h<T.length;h++){var N=T[h];if(N.validate&&!N.validate(P,N.value,m))return new Date(NaN);var M=N.set(P,I,N.value,m);M[0]?(P=M[0],Ds(I,M[1])):P=M}return P}function Sl(e){const{from:t,to:n}=e;return t&&t.setHours(0,0,0,0),n&&n.setHours(23,59,59,59),{from:t,to:n}}const Cl=(e,t,n=null)=>{const r=n?El(e,t,new Date,{locale:n}):El(e,t,new Date);if(Ms.DateUtils.isDate(r))return r};class Tl{constructor(e){this.showDatePicker=!1!==(null==e?void 0:e.showDatePicker),this.enabledDaysOfWeek=(null==e?void 0:e.enabledDaysOfWeek)||null,this.enabledDateRanges=function(e){let t=null;if(e){const{enabledDatesType:n}=e,r=e.enabledCustomRanges&&e.enabledCustomRanges.filter(Boolean)||null;switch(n){case"past":{const e=new Date;e.setDate(e.getDate()-1),t=[Sl({from:null,to:e})];break}case"future":{const e=new Date;e.setDate(e.getDate()+1),t=[Sl({from:e,to:null})];break}case"custom":Array.isArray(r)&&(t=r.map((({from:e,to:t})=>({from:e?new Date(e):null,to:t?new Date(t):null}))).map(Sl))}}return t}(e),this.dateFormat=(null==e?void 0:e.format)||"YYYY/M/D"}getShowDatePicker(){return this.showDatePicker}getInitialMonth(e){return function(e=[],t=null){let n;return n=t||(e&&e.length>0?function(e){return e.reduce(((e,{from:t,to:n})=>{const r=t||n;return e&&e.getTime()<r.getTime()?e:r}),null)}(e):new Date),{month:n.getMonth(),year:n.getFullYear()}}(this.enabledDateRanges,e)}getDateFnsFormat(){return function(e){return e.replace(/Y/g,"y").replace(/D/g,"d")}(this.dateFormat)}applyDateFormat(e){return Ns(e,this.getDateFnsFormat())}parseDate(e){return Cl(e,this.getDateFnsFormat())}isValidDate(e){return function(e,t=[],n=[]){const r=Array.isArray(t)&&t.length>0,i=Array.isArray(n)&&n.length>0;return e&&(!r||function(e,t){return t.some((t=>function(e,t){const{from:n,to:r}=t,i=e.getTime();return n&&r?i>=n.getTime()&&i<=r.getTime():n?i>=n.getTime():!!r&&i<=r.getTime()}(e,t)))}(e,t))&&(!i||n.includes(e.getDay()))}(e,this.enabledDateRanges,this.enabledDaysOfWeek)}}function Ol(){return[0,1,2,3,4,5,6,7,8,9,10,11].map((e=>function(e,t="default"){return new Date(2e3,e,15).toLocaleString(t,{month:"long"})}(e)))}const Pl=gi.div`
  padding: 0 0.5rem;
  display: table-caption;
  text-align: left;
  margin-bottom: 0.5rem;
`,Il=gi.div`
  font-size: 1.15rem;
  font-weight: 500;
`,Nl=gi.div`
  position: relative;
  border-bottom: 1px solid #000000;
  display: inline-block;
  margin-right: 4px;
`,Ml=gi.select`
  padding: 0 0 4px;
  border: 0;
  outline: none;
  background: none;
  font-size: 16px;
  appearance: none;
  cursor: pointer;
  text-transform: capitalize;
`,Dl=({month:e,year:t,onChangeYear:n,onChangeMonth:r})=>{const i=Ol(),o=new Date(t,2,15).getFullYear(),a=Array(200).fill(0).map(((e,t)=>o+t-100)).map((e=>Tn.jsx("option",Object.assign({value:e},{children:e}),e)));return Tn.jsx(Pl,Object.assign({className:"DayPicker-Caption"},{children:Tn.jsxs(Il,Object.assign({className:"DayPicker-CaptionContent"},{children:[Tn.jsx(Nl,Object.assign({className:"DayPicker-CaptionItem"},{children:Tn.jsx(Ml,Object.assign({className:"DayPicker-CaptionMonth",onChange:e=>r(e.target.value),value:e},{children:i.map(((e,t)=>Tn.jsx("option",Object.assign({value:t},{children:e}),e)))}),void 0)}),void 0),Tn.jsx(Nl,Object.assign({className:"DayPicker-CaptionItem"},{children:Tn.jsx(Ml,Object.assign({className:"DayPicker-CaptionYear",onChange:e=>n(e.target.value),value:o},{children:a}),void 0)}),void 0)]}),void 0)}),void 0)};Dl.defaultProps={month:(new Date).getMonth().toString(),year:(new Date).getFullYear().toString(),onChangeYear:()=>{},onChangeMonth:()=>{}};var Al=Dl;const jl=Ua.__esModule?Ua.default:Ua;function Rl(e,t,n=null){return n?Ns(e,t,{locale:n}):Ns(e,t)}const Ll=({format:e,hasAutofocus:n,initialMonth:r,inputRef:i,isMobile:o,isInsideForm:a,modifiers:s,name:l,onChange:c,onDayPickerHide:u,onDayPickerShow:d,onKeyDown:f,placeholder:p,showDatePicker:h,value:m})=>{const b="string"==typeof m&&m?new Date(m):m,g=null!==r.month&&void 0!==r.month?r.month:(new Date).getMonth(),v=r.year||(new Date).getFullYear(),[y,w]=(0,t.useState)(g.toString()),[_,x]=(0,t.useState)(v.toString()),k={className:Si({input:!0,"js-auto-focus":n}),onKeyDown:f,readOnly:h&&o},E={fixedWeeks:!0,selectedDays:b,month:new Date(_,y,15),onDayClick:c,onMonthChange:e=>(e=>{w(new Date(e).getMonth().toString()),x(new Date(e).getFullYear().toString())})(e),captionElement:Tn.jsx(Al,{month:y,onChangeMonth:e=>w(e),onChangeYear:e=>x(e),year:_},void 0),modifiers:s,className:h?null:"is-hidden"};return Tn.jsxs("div",Object.assign({ref:i},{children:[Tn.jsx(jl,{dayPickerProps:E,format:e,formatDate:Rl,inputProps:k,keepFocus:!1,onDayChange:(t,n,r)=>{let i=t;if(!i){const t=function(e,t){const n=e.getInput().value||"";return Cl(n,t)}(r,e);t&&!Number.isNaN(t.getTime())&&(i=t)}i?(w(i.getMonth().toString()),x(i.getFullYear().toString()),c(i)):c(null)},onDayPickerHide:u,onDayPickerShow:d,parseDate:Cl,placeholder:a&&p||e,style:{display:"block"},value:b},void 0),a&&Tn.jsx("input",{type:"hidden",name:l,value:b?Rl(b,e):""},void 0)]}),void 0)};Ll.defaultProps={onChange:()=>{},onDayPickerHide:()=>{},onDayPickerShow:()=>{},onKeyDown:()=>{},placeholder:null,hasAutofocus:!1,inputRef:null,isMobile:!1,isInsideForm:!1,value:null,format:"",showDatePicker:!0,modifiers:null,initialMonth:{},name:null};const Fl=({className:e,defaultValue:t,max:n,min:r,minLength:i,maxLength:o,name:a,onBlur:s,onChange:l,onClick:c,onFocus:u,onKeyDown:d,onKeyUp:f,pattern:p,placeholder:h,inputRef:m,required:b,type:g,hasAutofocus:v,hasNoBorder:y,value:w})=>Tn.jsx("input",{className:Si({[e]:!!e,input:!0,"u-no-border":y,"js-auto-focus":v}),max:n,min:r,minLength:i,maxLength:o,name:a,onBlur:s,onChange:e=>l(e.target.value),onClick:c,onFocus:u,onKeyDown:d,onKeyUp:f,pattern:p,placeholder:h,ref:m,required:b,type:g,value:w,defaultValue:t},void 0);Fl.defaultProps={className:"",max:null,min:null,minLength:null,maxLength:null,name:null,onBlur:()=>{},onClick:()=>{},onChange:()=>{},onFocus:()=>{},onKeyDown:()=>{},onKeyUp:()=>{},pattern:null,placeholder:null,inputRef:null,required:!1,type:"text",value:void 0,defaultValue:void 0,hasAutofocus:!1,hasNoBorder:!1};var zl=__webpack_require__(3935),Ul=pn((function(e){function t(e,t){var n=e["page"+(t?"Y":"X")+"Offset"],r="scroll"+(t?"Top":"Left");if("number"!=typeof n){var i=e.document;"number"!=typeof(n=i.documentElement[r])&&(n=i.body[r])}return n}function n(e){return t(e)}function r(e){return t(e,!0)}function i(e){var t=function(e){var t,n,r,i=e.ownerDocument,o=i.body,a=i&&i.documentElement;return n=(t=e.getBoundingClientRect()).left,r=t.top,{left:n-=a.clientLeft||o.clientLeft||0,top:r-=a.clientTop||o.clientTop||0}}(e),i=e.ownerDocument,o=i.defaultView||i.parentWindow;return t.left+=n(o),t.top+=r(o),t}var o,a=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),s=/^(top|right|bottom|left)$/,l="left";function c(e,t){for(var n=0;n<e.length;n++)t(e[n])}function u(e){return"border-box"===o(e,"boxSizing")}"undefined"!=typeof window&&(o=window.getComputedStyle?function(e,t,n){var r="",i=e.ownerDocument;return(n=n||i.defaultView.getComputedStyle(e,null))&&(r=n.getPropertyValue(t)||n[t]),r}:function(e,t){var n=e.currentStyle&&e.currentStyle[t];if(a.test(n)&&!s.test(t)){var r=e.style,i=r[l],o=e.runtimeStyle[l];e.runtimeStyle[l]=e.currentStyle[l],r[l]="fontSize"===t?"1em":n||0,n=r.pixelLeft+"px",r[l]=i,e.runtimeStyle[l]=o}return""===n?"auto":n});var d=["margin","border","padding"];function f(e,t,n){var r,i={},o=e.style;for(r in t)i[r]=o[r],o[r]=t[r];for(r in n.call(e),t)o[r]=i[r]}function p(e,t,n){var r,i,a,s=0;for(i=0;i<t.length;i++)if(r=t[i])for(a=0;a<n.length;a++){var l;l="border"===r?r+n[a]+"Width":r+n[a],s+=parseFloat(o(e,l))||0}return s}function h(e){return null!=e&&e==e.window}var m={};function b(e,t,n){if(h(e))return"width"===t?m.viewportWidth(e):m.viewportHeight(e);if(9===e.nodeType)return"width"===t?m.docWidth(e):m.docHeight(e);var r="width"===t?["Left","Right"]:["Top","Bottom"],i="width"===t?e.offsetWidth:e.offsetHeight;o(e);var a=u(e),s=0;(null==i||i<=0)&&(i=void 0,(null==(s=o(e,t))||Number(s)<0)&&(s=e.style[t]||0),s=parseFloat(s)||0),void 0===n&&(n=a?1:-1);var l=void 0!==i||a,c=i||s;return-1===n?l?c-p(e,["border","padding"],r):s:l?c+(1===n?0:2===n?-p(e,["border"],r):p(e,["margin"],r)):s+p(e,d.slice(n),r)}c(["Width","Height"],(function(e){m["doc"+e]=function(t){var n=t.document;return Math.max(n.documentElement["scroll"+e],n.body["scroll"+e],m["viewport"+e](n))},m["viewport"+e]=function(t){var n="client"+e,r=t.document,i=r.body,o=r.documentElement[n];return"CSS1Compat"===r.compatMode&&o||i&&i[n]||o}}));var g={position:"absolute",visibility:"hidden",display:"block"};function v(e){var t,n=arguments;return 0!==e.offsetWidth?t=b.apply(void 0,n):f(e,g,(function(){t=b.apply(void 0,n)})),t}function y(e,t,n){if("object"!=typeof t){if(void 0===n)return o(e,t);"number"==typeof n&&(n+="px"),e.style[t]=n}else for(var r in t)y(e,r,t[r])}function w(e,t){for(var n in t)e[n]=t[n];return e}c(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);m["outer"+t]=function(t,n){return t&&v(t,e,n?0:1)};var n="width"===e?["Left","Right"]:["Top","Bottom"];m[e]=function(t,r){return void 0!==r?t?(o(t),u(t)&&(r+=p(t,["padding","border"],n)),y(t,e,r)):void 0:t&&v(t,e,-1)}}));var _=e.exports={getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return i(e);!function(e,t){"static"===y(e,"position")&&(e.style.position="relative");var n,r,o=i(e),a={};for(r in t)n=parseFloat(y(e,r))||0,a[r]=n+t[r]-o[r];y(e,a)}(e,t)},isWindow:h,each:c,css:y,clone:function(e){var t={};for(var n in e)t[n]=e[n];if(e.overflow)for(n in e)t.overflow[n]=e.overflow[n];return t},mix:w,scrollLeft:function(e,t){if(h(e)){if(void 0===t)return n(e);window.scrollTo(t,r(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(h(e)){if(void 0===t)return r(e);window.scrollTo(n(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},merge:function(){for(var e={},t=0;t<arguments.length;t++)_.mix(e,arguments[t]);return e},viewportWidth:0,viewportHeight:0};w(_,m)})),Bl=function(e,t,n){n=n||{},9===t.nodeType&&(t=Ul.getWindow(t));var r=n.allowHorizontalScroll,i=n.onlyScrollIfNeeded,o=n.alignWithTop,a=n.alignWithLeft;r=void 0===r||r;var s,l,c,u,d,f,p,h,m,b,g=Ul.isWindow(t),v=Ul.offset(e),y=Ul.outerHeight(e),w=Ul.outerWidth(e);g?(p=t,b=Ul.height(p),m=Ul.width(p),h={left:Ul.scrollLeft(p),top:Ul.scrollTop(p)},d={left:v.left-h.left,top:v.top-h.top},f={left:v.left+w-(h.left+m),top:v.top+y-(h.top+b)},u=h):(s=Ul.offset(t),l=t.clientHeight,c=t.clientWidth,u={left:t.scrollLeft,top:t.scrollTop},d={left:v.left-(s.left+(parseFloat(Ul.css(t,"borderLeftWidth"))||0)),top:v.top-(s.top+(parseFloat(Ul.css(t,"borderTopWidth"))||0))},f={left:v.left+w-(s.left+c+(parseFloat(Ul.css(t,"borderRightWidth"))||0)),top:v.top+y-(s.top+l+(parseFloat(Ul.css(t,"borderBottomWidth"))||0))}),d.top<0||f.top>0?!0===o?Ul.scrollTop(t,u.top+d.top):!1===o?Ul.scrollTop(t,u.top+f.top):d.top<0?Ul.scrollTop(t,u.top+d.top):Ul.scrollTop(t,u.top+f.top):i||((o=void 0===o||!!o)?Ul.scrollTop(t,u.top+d.top):Ul.scrollTop(t,u.top+f.top)),r&&(d.left<0||f.left>0?!0===a?Ul.scrollLeft(t,u.left+d.left):!1===a?Ul.scrollLeft(t,u.left+f.left):d.left<0?Ul.scrollLeft(t,u.left+d.left):Ul.scrollLeft(t,u.left+f.left):i||((a=void 0===a||!!a)?Ul.scrollLeft(t,u.left+d.left):Ul.scrollLeft(t,u.left+f.left)))},Vl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wl=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ql=zl.findDOMNode,Hl=["blur","checkValidity","click","focus","select","setCustomValidity","setSelectionRange","setRangeText"],$l=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={isOpen:!1,highlightedIndex:null},t._debugStates=[],t.ensureHighlightedIndex=t.ensureHighlightedIndex.bind(t),t.exposeAPI=t.exposeAPI.bind(t),t.handleInputFocus=t.handleInputFocus.bind(t),t.handleInputBlur=t.handleInputBlur.bind(t),t.handleChange=t.handleChange.bind(t),t.handleKeyDown=t.handleKeyDown.bind(t),t.handleInputClick=t.handleInputClick.bind(t),t.maybeAutoCompleteText=t.maybeAutoCompleteText.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),Wl(n,[{key:"componentWillMount",value:function(){this.refs={},this._ignoreBlur=!1,this._ignoreFocus=!1,this._scrollOffset=null,this._scrollTimer=null}},{key:"componentWillUnmount",value:function(){clearTimeout(this._scrollTimer),this._scrollTimer=null}},{key:"componentWillReceiveProps",value:function(e){null!==this.state.highlightedIndex&&this.setState(this.ensureHighlightedIndex),!e.autoHighlight||this.props.value===e.value&&null!==this.state.highlightedIndex||this.setState(this.maybeAutoCompleteText)}},{key:"componentDidMount",value:function(){this.isOpen()&&this.setMenuPositions()}},{key:"componentDidUpdate",value:function(e,t){(this.state.isOpen&&!t.isOpen||"open"in this.props&&this.props.open&&!e.open)&&this.setMenuPositions(),this.maybeScrollItemIntoView(),t.isOpen!==this.state.isOpen&&this.props.onMenuVisibilityChange(this.state.isOpen)}},{key:"exposeAPI",value:function(e){var t=this;this.refs.input=e,Hl.forEach((function(n){return t[n]=e&&e[n]&&e[n].bind(e)}))}},{key:"maybeScrollItemIntoView",value:function(){if(this.isOpen()&&null!==this.state.highlightedIndex){var e=this.refs["item-"+this.state.highlightedIndex],t=this.refs.menu;Bl(ql(e),ql(t),{onlyScrollIfNeeded:!0})}}},{key:"handleKeyDown",value:function(e){n.keyDownHandlers[e.key]?n.keyDownHandlers[e.key].call(this,e):this.isOpen()||this.setState({isOpen:!0})}},{key:"handleChange",value:function(e){this.props.onChange(e,e.target.value)}},{key:"getFilteredItems",value:function(e){var t=e.items;return e.shouldItemRender&&(t=t.filter((function(t){return e.shouldItemRender(t,e.value)}))),e.sortItems&&t.sort((function(t,n){return e.sortItems(t,n,e.value)})),t}},{key:"maybeAutoCompleteText",value:function(e,t){for(var n=e.highlightedIndex,r=t.value,i=t.getItemValue,o=null===n?0:n,a=this.getFilteredItems(t),s=0;s<a.length&&!t.isItemSelectable(a[o]);s++)o=(o+1)%a.length;var l=a[o]&&t.isItemSelectable(a[o])?a[o]:null;return""!==r&&l&&0===i(l).toLowerCase().indexOf(r.toLowerCase())?{highlightedIndex:o}:{highlightedIndex:null}}},{key:"ensureHighlightedIndex",value:function(e,t){if(e.highlightedIndex>=this.getFilteredItems(t).length)return{highlightedIndex:null}}},{key:"setMenuPositions",value:function(){var e=this.refs.input,t=e.getBoundingClientRect(),n=fn.window.getComputedStyle(e),r=parseInt(n.marginBottom,10)||0,i=parseInt(n.marginLeft,10)||0,o=parseInt(n.marginRight,10)||0;this.setState({menuTop:t.bottom+r,menuLeft:t.left+i,menuWidth:t.width+i+o})}},{key:"highlightItemFromMouse",value:function(e){this.setState({highlightedIndex:e})}},{key:"selectItemFromMouse",value:function(e){var t=this,n=this.props.getItemValue(e);this.setIgnoreBlur(!1),this.setState({isOpen:!1,highlightedIndex:null},(function(){t.props.onSelect(n,e)}))}},{key:"setIgnoreBlur",value:function(e){this._ignoreBlur=e}},{key:"renderMenu",value:function(){var e=this,n=this.getFilteredItems(this.props).map((function(n,r){var i=e.props.renderItem(n,e.state.highlightedIndex===r,{cursor:"default"});return t.cloneElement(i,{onMouseEnter:e.props.isItemSelectable(n)?function(){return e.highlightItemFromMouse(r)}:null,onClick:e.props.isItemSelectable(n)?function(){return e.selectItemFromMouse(n)}:null,ref:function(t){return e.refs["item-"+r]=t}})})),r={left:this.state.menuLeft,top:this.state.menuTop,minWidth:this.state.menuWidth},i=this.props.renderMenu(n,this.props.value,r);return t.cloneElement(i,{ref:function(t){return e.refs.menu=t},onTouchStart:function(){return e.setIgnoreBlur(!0)},onMouseEnter:function(){return e.setIgnoreBlur(!0)},onMouseLeave:function(){return e.setIgnoreBlur(!1)}})}},{key:"handleInputBlur",value:function(e){var t=this;if(this._ignoreBlur)return this._ignoreFocus=!0,this._scrollOffset={x:void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},void this.refs.input.focus();var n=void 0,r=this.state.highlightedIndex;if(this.props.selectOnBlur&&null!==r){var i=this.getFilteredItems(this.props)[r],o=this.props.getItemValue(i);n=function(){return t.props.onSelect(o,i)}}this.setState({isOpen:!1,highlightedIndex:null},n);var a=this.props.inputProps.onBlur;a&&a(e)}},{key:"handleInputFocus",value:function(e){var t=this;if(this._ignoreFocus){this._ignoreFocus=!1;var n=this._scrollOffset,r=n.x,i=n.y;return this._scrollOffset=null,window.scrollTo(r,i),clearTimeout(this._scrollTimer),void(this._scrollTimer=setTimeout((function(){t._scrollTimer=null,window.scrollTo(r,i)}),0))}this.setState({isOpen:!0});var o=this.props.inputProps.onFocus;o&&o(e)}},{key:"isInputFocused",value:function(){var e=this.refs.input;return e.ownerDocument&&e===e.ownerDocument.activeElement}},{key:"handleInputClick",value:function(){this.isInputFocused()&&!this.isOpen()&&this.setState({isOpen:!0})}},{key:"composeEventHandlers",value:function(e,t){return t?function(n){e(n),t(n)}:e}},{key:"isOpen",value:function(){return"open"in this.props?this.props.open:this.state.isOpen}},{key:"render",value:function(){this.props.debug&&this._debugStates.push({id:this._debugStates.length,state:this.state});var e=this.props.inputProps,n=this.isOpen();return t.createElement("div",Vl({style:Vl({},this.props.wrapperStyle)},this.props.wrapperProps),this.props.renderInput(Vl({},e,{role:"combobox","aria-autocomplete":"list","aria-expanded":n,autoComplete:"off",ref:this.exposeAPI,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onChange:this.handleChange,onKeyDown:this.composeEventHandlers(this.handleKeyDown,e.onKeyDown),onClick:this.composeEventHandlers(this.handleInputClick,e.onClick),value:this.props.value})),n&&this.renderMenu(),this.props.debug&&t.createElement("pre",{style:{marginLeft:300}},JSON.stringify(this._debugStates.slice(Math.max(0,this._debugStates.length-5),this._debugStates.length),null,2)))}}]),n}();$l.propTypes={items:i().array.isRequired,value:i().any,onChange:i().func,onSelect:i().func,shouldItemRender:i().func,isItemSelectable:i().func,sortItems:i().func,getItemValue:i().func.isRequired,renderItem:i().func.isRequired,renderMenu:i().func,menuStyle:i().object,renderInput:i().func,inputProps:i().object,wrapperProps:i().object,wrapperStyle:i().object,autoHighlight:i().bool,selectOnBlur:i().bool,onMenuVisibilityChange:i().func,open:i().bool,debug:i().bool},$l.defaultProps={value:"",wrapperProps:{},wrapperStyle:{display:"inline-block"},inputProps:{},renderInput:function(e){return t.createElement("input",e)},onChange:function(){},onSelect:function(){},isItemSelectable:function(){return!0},renderMenu:function(e,n,r){return t.createElement("div",{style:Vl({},r,this.menuStyle),children:e})},menuStyle:{borderRadius:"3px",boxShadow:"0 2px 12px rgba(0, 0, 0, 0.1)",background:"rgba(255, 255, 255, 0.9)",padding:"2px 0",fontSize:"90%",position:"fixed",overflow:"auto",maxHeight:"50%"},autoHighlight:!0,selectOnBlur:!1,onMenuVisibilityChange:function(){}},$l.keyDownHandlers={ArrowDown:function(e){e.preventDefault();var t=this.getFilteredItems(this.props);if(t.length){for(var n=this.state.highlightedIndex,r=null===n?-1:n,i=0;i<t.length;i++){var o=(r+i+1)%t.length;if(this.props.isItemSelectable(t[o])){r=o;break}}r>-1&&r!==n&&this.setState({highlightedIndex:r,isOpen:!0})}},ArrowUp:function(e){e.preventDefault();var t=this.getFilteredItems(this.props);if(t.length){for(var n=this.state.highlightedIndex,r=null===n?t.length:n,i=0;i<t.length;i++){var o=(r-(1+i)+t.length)%t.length;if(this.props.isItemSelectable(t[o])){r=o;break}}r!==t.length&&this.setState({highlightedIndex:r,isOpen:!0})}},Enter:function(e){var t=this;if(13===e.keyCode&&(this.setIgnoreBlur(!1),this.isOpen()))if(null==this.state.highlightedIndex)this.setState({isOpen:!1},(function(){t.refs.input.select()}));else{e.preventDefault();var n=this.getFilteredItems(this.props)[this.state.highlightedIndex],r=this.props.getItemValue(n);this.setState({isOpen:!1,highlightedIndex:null},(function(){t.refs.input.setSelectionRange(r.length,r.length),t.props.onSelect(r,n)}))}},Escape:function(){this.setIgnoreBlur(!1),this.setState({highlightedIndex:null,isOpen:!1})},Tab:function(){this.setIgnoreBlur(!1)}};var Yl=$l;const Gl=e=>{switch(e){case"1x1":return"is-1by1";case"5x4":return"is-5by4";case"4x3":return"is-4by3";case"3x2":return"is-3by2";case"5x3":return"is-5by3";case"16x9":return"is-16by9";case"2x1":return"is-2by1";case"3x1":return"is-3by1";case"4x5":return"is-4by5";case"3x4":return"is-3by4";case"2x3":return"is-2by3";case"3x5":return"is-3by5";case"9x16":return"is-9by16";case"1x2":return"is-1by2";case"1x3":return"is-1by3";default:return null}},Kl=({alt:e,className:t,contain:n,figureStyle:r,imgClassName:i,onLoad:o,onOpenModal:a,openModal:s,ratio:l,rounded:c,size:u,src:d,style:f})=>Tn.jsx("figure",Object.assign({"aria-hidden":"true",className:Si({image:!0,[`is-${u}x${u}`]:!!u,[Gl(l)]:!!l,[t]:!!t,"u-pointer":s}),onClick:a,style:r},{children:d&&Tn.jsx("img",{alt:e||d,className:Si({Media:!0,[i]:!!i,"is-rounded":c,"is-contain":n}),onLoad:o,src:d,style:f},void 0)}),void 0);Kl.defaultProps={contain:!1,className:"",imgClassName:"",figureStyle:{},openModal:!1,ratio:null,rounded:!1,size:null,src:null,alt:null,style:{},onLoad:()=>{},onOpenModal:()=>{}};const Ql={mobile:480,small_tablet:576,tablet:768,small_mobile_only:480,mobile_only:767,small_desktop:992,medium_desktop:1200,large_desktop:1440},Xl=`(min-width: ${Ql.tablet}px)`,Zl=`(max-width: ${Ql.mobile_only}px)`,Jl=({qty:e,unit:t},n=1)=>`${e*n}${t}`,ec=gi.form`
  width: 100%;
  @media ${Xl} {
    width: calc(100% - ${e=>e.theme.margin_left});
  }

  .input {
    width: 100%;
  }

  .dropdown-item:hover,
  .dropdown-item.is-active {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }

  .input,
  .dropdown-menu,
  .dropdown-item {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }

  .dropdown-item:hover,
  .dropdown-item.is-active {
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
  }
`,tc=gi.div`
  box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.2);
  overflow: auto;
  margin-bottom: 30px;
  border-radius: 4px;
  width: 100%;
  padding: 0;
  max-height: 250px;
  bottom: 32px;
  top: initial;
`,nc=gi.div`
  padding: 0;
  border: hidden;
  min-width: 100%;
  box-shadow: none;
  overflow: hidden;
  border-radius: 0;
`,rc=gi.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ic=gi.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  text-transform: uppercase;
  font-size: 12px !important;
  cursor: pointer;
  padding: 0 20px;
  min-height: 50px;
  border: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 0;

  .DropdownItem__Content {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
  }

  .DropdownItem__Attachment {
    width: 40px;
    height: 100%;
    font-size: 34px;
    margin-right: 10px;

    .image,
    .image img {
      width: 100%;
      height: 100%;
    }
  }

  &.dropdown-item .DropdownItem__Content .DropdownItem__Attachment .icon {
    width: 40px;
  }

  &.dropdown-item.is-active .DropdownItem__Attachment .icon {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }
`,oc=({autocompleteRef:e,autoHighlight:t,hasAutofocus:n,isInsideForm:r,name:i,noResultsText:o,onChange:a,onKeyDown:s,onMenuVisibilityChange:l,onSubmit:c,options:u,placeholder:d,setValue:f,value:p})=>{const h=({type:e,value:t})=>{let n=null;switch(e){case"icon":n=Tn.jsx("span",{className:Si({"icon fi is-marginless":!0,[t]:!0," is-size-3":!0})},void 0);break;case"emoji":n=Tn.jsx("span",Object.assign({className:"icon is-marginless is-size-3"},{children:t}),void 0);break;case"image":n=Tn.jsx(Kl,{src:t},void 0)}return n},m=(e,t)=>{var n;const r=(null===(n=null==e?void 0:e.label)||void 0===n?void 0:n.toLowerCase())||"",i=(null==t?void 0:t.toLowerCase())||"";return r.includes(i)};return Tn.jsxs("div",Object.assign({ref:e},{children:[Tn.jsx(Yl,{autoHighlight:t,getItemValue:e=>e.label,inputProps:{className:Si({input:!0,"js-auto-focus":n}),onKeyDown:e=>s(e),placeholder:d},items:u,onChange:e=>{f(e.target.value),a(e.target.value)},onMenuVisibilityChange:l,onSelect:e=>{f(e),a(e)},onSubmit:c,placeholder:d,renderItem:(e,t)=>Tn.jsx(ic,Object.assign({as:"button",className:Si({"dropdown-item is-size-6":!0,"is-active":t}),type:"button"},{children:Tn.jsxs("div",Object.assign({className:"DropdownItem__Content"},{children:[!!e.attachment.type&&Tn.jsx("span",Object.assign({className:"DropdownItem__Attachment"},{children:h(e.attachment)}),void 0),Tn.jsx(rc,Object.assign({className:"DropdownItem__Label"},{children:e.label}),void 0)]}),void 0)}),e.payload),renderMenu:(e,t)=>u.some((e=>m(e,t)))?Tn.jsx(tc,Object.assign({className:"dropdown-menu is-block",role:"menu"},{children:Tn.jsx(nc,Object.assign({className:"dropdown-content"},{children:e}),void 0)}),void 0):Tn.jsx(tc,Object.assign({className:"dropdown-menu is-block",role:"menu",style:{bottom:"100%",top:"auto",overflow:"auto"}},{children:Tn.jsx(nc,Object.assign({className:"dropdown-content"},{children:Tn.jsx(ic,Object.assign({as:"span",className:"dropdown-item is-size-6 is-active"},{children:o}),void 0)}),void 0)}),void 0),shouldItemRender:m,value:p,wrapperStyle:{display:"block",position:"relative"}},void 0),r&&Tn.jsx("input",{type:"hidden",name:i,value:p},void 0)]}),void 0)};oc.defaultProps={autocompleteRef:null,autoHighlight:!1,hasAutofocus:!1,isInsideForm:!1,name:"",noResultsText:"",onChange:()=>{},onKeyDown:()=>{},onMenuVisibilityChange:()=>{},onSubmit:()=>{},options:[],placeholder:"",setValue:()=>{},value:""};const ac=gi.div`
  ${({hasError:e})=>e&&" & input,\n    & textarea {\n      border-color: red !important;\n    }\n  "}
  &.has-icons-right {
    input {
      @media ${Zl} {
        &:not(.InputTextLong__TextArea) {
          padding-right: 2.5rem !important;
        }
      }
    }
  }
`;ac.displayName="ControlUI";const sc=({className:e,children:t,hasError:n})=>Tn.jsx(ac,Object.assign({className:Si("control",e),hasError:n},{children:t}),void 0);sc.defaultProps={className:"",children:null,hasError:!1};const lc=({className:e,children:t})=>Tn.jsx("div",Object.assign({className:Si("field",e)},{children:t}),void 0);lc.defaultProps={className:"",children:null};function cc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;const uc=e=>{var{fill:t}=e,n=cc(e,["fill"]);return Tn.jsx("svg",Object.assign({width:"24",height:"24"},n,{children:Tn.jsx("path",{fill:t,d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"},void 0)}),void 0)};uc.propTypes={fill:i().string},uc.defaultProps={fill:"var(--form_inputs_border_color)"};const dc=e=>{var{fill:t}=e,n=cc(e,["fill"]);return Tn.jsx("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",x:"3650",y:"3688"},n,{children:Tn.jsx("path",{fill:t,d:"M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z"},void 0)}),void 0)};dc.propTypes={fill:i().string},dc.defaultProps={fill:"var(--form_inputs_border_color)"},gi.svg`
  transform: rotate(${function(e){return e.isRightArrow?"180":e.isUpArrow?"-90":e.isDownArrow?"90":"0"}}deg);
`,i().string,i().string,i().bool;const fc=()=>Tn.jsxs("svg",Object.assign({className:"MessageBubble__Decorator",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"28",viewBox:"0 0 16 28"},{children:[Tn.jsx("title",{children:" Path"},void 0),Tn.jsx("desc",{children:" Created with Sketch."},void 0),Tn.jsx("g",Object.assign({fill:"none"},{children:Tn.jsx("path",{d:"M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z",fill:"#FFF"},void 0)}),void 0)]}),void 0),pc=({children:e})=>Tn.jsxs("div",Object.assign({className:"InputSearchButton icon is-right",style:{width:"96px"}},{children:[Tn.jsx(uc,{},void 0),Tn.jsx("span",Object.assign({className:"InputSearchButton__Text is-uppercase",style:{color:"var(--form_inputs_border_color)",fontSize:"11px"}},{children:e}),void 0)]}),void 0);pc.defaultProps={children:null};const hc=gi.button`
  width: 60px !important;
  pointer-events: auto !important;
  opacity: 1;

  > * {
    transition: opacity 0.2s, transform 0.2s;
  }

  &:hover > * {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.4;
  }

  @media ${Zl} {
    width: 42px !important;
    transform: scale(0.85);
    margin-right: 7px;
    padding-right: 0;
  }
`;hc.displayName="IconSendButtonUI";const mc=({onClick:e,disabled:t,children:n,hasError:r})=>{let i;return i=n||(r?Tn.jsx("span",Object.assign({role:"img","aria-label":"⚠️",className:"is-size-4"},{children:"⚠️"}),void 0):Tn.jsx(dc,{},void 0)),Tn.jsx(hc,Object.assign({type:"button",className:"input-icon-send-button button is-text icon is-right",onClick:e,disabled:t||r},{children:i}),void 0)};mc.defaultProps={onClick:()=>{},disabled:!1,children:null,hasError:!1};const bc=({hasSearchButton:e,value:t,onSubmit:n,error:r})=>e&&""===t?Tn.jsx(pc,{},void 0):Tn.jsx(mc,{disabled:""===t,hasError:!!r,onClick:n},void 0);bc.defaultProps={onSubmit:()=>{},value:null,error:"",hasSearchButton:!1};const gc=gi.p`
  color: ${({theme:e})=>e.design.form_help_color};
  margin-top: 4px;
`;gc.displayName="InputHelpTextUI";const vc=({children:e,className:t,isVisibleOnMobile:n})=>Tn.jsx(gc,Object.assign({className:Si({"input-help-text is-size-7 is-unselectable":!0,"is-hidden-mobile":!n,[t]:!!t})},{children:e}),void 0);vc.defaultProps={className:"",isVisibleOnMobile:!1};const yc=gi.p`
  color: ${({theme:e})=>e.design.message_color_bot};
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 8px;
`;yc.displayName="InputLabelUI";const wc=({children:e,isVisibleOnMobile:t})=>Tn.jsx(yc,Object.assign({className:Si({"input-label-text is-size-16 is-unselectable":!0,"is-hidden-mobile":!t})},{children:e}),void 0);wc.defaultProps={isVisibleOnMobile:!1};const _c=gi.button`
  height: auto;
  line-height: 1.1;
  padding: 12px 45px;
`;_c.displayName="SendButtonUI";const xc=({onClick:e,disabled:t,children:n})=>Tn.jsx(_c,Object.assign({type:"submit",className:"button input-send-button is-size-6 has-text-weight-bold",onClick:e,disabled:t},{children:n}),void 0);xc.defaultProps={onClick:()=>{},disabled:!1,children:"Send"};const kc=gi.p`
  bottom: -22px;
  left: 0;
  position: absolute;
  border-radius: 2px;
  color: ${({theme:e})=>e.design.form_help_color};
`;kc.displayName="InputErrorMessageUI";const Ec=gi.span`
  border-width: 2px;
  border-style: none;
  min-width: 60px;
  border-color: ${({theme:e})=>e.design.form_inputs_border_color};
`;Ec.displayName="InputPrefixUI";const Sc=e=>Tn.jsx("form",Object.assign({},e),void 0),Cc=e=>Tn.jsx("div",Object.assign({},e),void 0),Tc=({children:e,className:t,error:n,help:r,hasNoBorder:i,hasSearchButton:o,isInsideForm:a,isRequired:s,isAnimateMessagesOn:l,label:c,onSubmit:u,prefix:d,renderAs:f,sendButtonType:p,sendLabel:h,value:m})=>{const b=a?Cc:f||Sc;return Tn.jsxs(b,Object.assign({className:Si({[t]:!!t,"u-no-border":i,"is-animate-messages-on":l}),onSubmit:e=>e.preventDefault()},{children:[n.length>0&&!a&&Tn.jsx(kc,Object.assign({className:"input-error-message is-uppercase is-unselectable is-size-7 has-text-weight-bold"},{children:n}),void 0),c&&Tn.jsx(wc,Object.assign({isVisibleOnMobile:a},{children:c}),void 0),Tn.jsxs(lc,Object.assign({className:"has-addons is-marginless"},{children:[d&&Tn.jsx(sc,{children:Tn.jsx(Ec,Object.assign({className:"button is-static has-text-weight-bold input-prefix"},{children:d}),void 0)},void 0),Tn.jsxs(sc,Object.assign({className:Si({"is-expanded":!0,"is-required":s,"has-icons-right":"inline"===p}),hasError:!!n},{children:[e,"inline"===p&&Tn.jsx(bc,Object.assign({},{hasSearchButton:o,value:m,onSubmit:u,error:n}),void 0)]}),void 0)]}),void 0),r&&!n&&Tn.jsx(vc,Object.assign({isVisibleOnMobile:!a},{children:r}),void 0),n&&a&&Tn.jsx(vc,Object.assign({isVisibleOnMobile:!0,className:"has-text-danger has-text-weight-semibold"},{children:n}),void 0),"button"===p&&Tn.jsx(lc,Object.assign({className:"mt-5"},{children:Tn.jsx(sc,{children:Tn.jsx(xc,Object.assign({disabled:""===m,onClick:u},{children:h}),void 0)},void 0)}),void 0)]}),void 0)};Tc.defaultProps={className:"",help:"",isInsideForm:!0,label:"",sendLabel:"Send",onSubmit:()=>{},value:null,hasNoBorder:!1,isRequired:!1,error:"",prefix:null,hasSearchButton:!1,isAnimateMessagesOn:!0,renderAs:null,sendButtonType:"inline"};const Oc=(e,t=!1)=>{const n=Jl(e.theme.initial_vars.horizontal_unit,1.5),r=(({qty:e,unit:t},n=1)=>`${e/n}${t}`)(e.theme.initial_vars.horizontal_unit,4);return t?Jr`
      border-radius: ${n} ${n}
        ${r} ${n};
    `:Jr`
    border-radius: ${n} ${n}
      ${n} ${r};
  `},Pc=gi.div`
  display: flex;
  overflow: visible;
  ${e=>Oc(e)}

  ${e=>Jr`
      padding: ${Jl(e.theme.initial_vars.vertical_unit,2)} ${Jl(e.theme.initial_vars.horizontal_unit,3)};
    `}

max-width: 100%;
  background-color: ${({theme:e})=>e.design.message_background_color_bot};
  color: ${({theme:e})=>e.design.message_color_bot};

  &.is-author-user {
    background-color: ${({theme:e})=>e.design.message_background_color_user};
    color: ${({theme:e})=>e.design.message_color_user};
  }

  p {
    word-break: break-word;
    white-space: pre-wrap;
  }

  ul {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 3px;
    margin-top: 3px;
  }

  blockquote {
    font-size: 1.05rem;
    font-style: italic;
  }

  &.is-shape-rounded,
  &.is-shape-rounded.is-reverse {
    border-radius: ${"26px"};
  }

  &.is-shape-squared,
  &.is-shape-squared.is-reverse {
    border-radius: ${"4px"};
  }

  &.is-shape-transparent {
    padding: 0;
    background-color: transparent !important;
  }

  .MessageBubble__Decorator {
    position: absolute;
    left: -5px;
    bottom: 0;
  }

  .MessageBubble__Decorator path {
    fill: ${({theme:e})=>e.design.message_background_color_bot};
  }

  &.is-reverse {
    ${e=>Oc(e,!0)}

    .MessageBubble__Decorator {
      left: initial;
      right: -5px;
      transform: scaleX(-1);
    }

    .MessageBubble__Decorator path {
      fill: ${({theme:e})=>e.design.message_background_color_user};
    }
  }

  input,
  textarea,
  select,
  .InputNumber .field {
    color: ${({theme:e})=>e.design.form_inputs_color};
  }

  .MessageBubble__content {
    width: 100%;
  }

  .MessageBubble__content input,
  .MessageBubble__content textarea,
  .MessageBubble__content select,
  .MessageBubble__content .InputNumber .field {
    color: ${({theme:e})=>e.design.form_inputs_color};
  }
`;var Ic,Nc;Pc.displayName="MessageBubbleUI",function(e){e.ROUNDED="rounded",e.SEMI="semirounded",e.SQUARED="squared",e.TRANSPARENT="transparent"}(Ic||(Ic={})),function(e){e.BOT="bot",e.USER="user",e.SYSTEM="system",e.AGENT="agent"}(Nc||(Nc={}));const Mc=({classNames:e,shape:t,isReverse:n,author:r,children:i})=>Tn.jsxs(Pc,Object.assign({className:Si(["MessageBubble",n&&"is-reverse","is-shape-"+t,"is-author-"+r,...e])},{children:[t===Pn.ROUNDED&&Tn.jsx(fc,{},void 0),Tn.jsx("div",Object.assign({className:"MessageBubble__content"},{children:i}),void 0)]}),void 0);Mc.defaultProps={shape:Pn.SEMI,classNames:[],isReverse:!1,author:"",children:null};const Dc=e=>{if("string"==typeof e){const t=/\*\*(.*?)\*\*/gm;return e.replace(t,"<strong>$1</strong>")}return e},Ac=gi.div`
  & + * {
    margin-top: ${e=>Jl(e.theme.initial_vars.vertical_unit,1.75)};

    @media ${Xl} {
      margin-top: ${e=>Jl(e.theme.initial_vars.vertical_unit,2.25)};
    }
  }
  &.MessageBubbleText {
    white-space: pre-wrap;
  }
`;Ac.displayName="MessageBubbleTextUI";const jc=({allowHTMLContent:e,text:t})=>e?Tn.jsx(Ac,{className:"MessageBubbleText content ",dangerouslySetInnerHTML:{__html:Dc(t)}},void 0):Tn.jsx(Ac,Object.assign({className:"MessageBubbleText content "},{children:t}),void 0);var Rc;jc.defaultProps={allowHTMLContent:!1,text:""},function(e){e.ONE_THIRD="1/3",e.TWO_THIRD="2/3",e.HALF="1/2",e.ONE="1"}(Rc||(Rc={}));const Lc=gi.div`
  margin-bottom: 0 !important;

  .column {
    margin-bottom: 16px;
  }

  @media ${Xl} {
    &.is-tablet > div:not(:first-child) {
      margin-left: 8px;
    }
  }

  &:not(.is-tablet) > div:not(:first-child) {
    margin-left: 8px;
  }
`;Lc.displayName="RowUI";const Fc={[Rc.ONE_THIRD]:"is-one-third",[Rc.TWO_THIRD]:"is-two-thirds",[Rc.HALF]:"is-half",[Rc.ONE]:"is-full"};function zc(e,t){return 0!==t?"":Fc[e]||""}const Uc=({disposition:e,inputMapper:t,inputsUid:n,markRequired:r,samurai:i,responsiveLayout:o})=>Tn.jsx(Lc,Object.assign({className:Si({columns:!0,"is-mobile":!o,"is-tablet":o})},{children:n.map(((n,a)=>Tn.jsx("div",Object.assign({className:"column "+zc(e,a)},{children:t(Object.assign(Object.assign({},n),{extra:Object.assign(Object.assign({},n.extra),{markRequired:r,responsiveLayout:o}),isInsideForm:!0,samurai:i}))}),n.uiKey)))}),void 0);function Bc(){return(Bc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Vc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={mimeType:t.mimeType||null,onBeforeSend:t.onBeforeSend||Function.prototype,onSuccess:t.onSuccess||Function.prototype,onError:t.onError||Function.prototype,onComplete:t.onComplete||Function.prototype},r=Array.isArray(e)?e:[e],i=Array.apply(null,Array(r.length)).map((function(e){return null}));function o(e){var t="string"==typeof e,n=t&&"<"===e.trim().charAt(0);return t&&!n}function a(e,t){n.onError(e,r[t],t)}function s(e,t){var o=n.onSuccess(e,r[t],t);e=!1===o?"":o||e,i[t]=e,-1===i.indexOf(null)&&n.onComplete(i)}var l=document.createElement("a");r.forEach((function(e,t){if(l.setAttribute("href",e),l.href=String(l.href),Boolean(document.all&&!window.atob)&&l.host.split(":")[0]!==location.host.split(":")[0])if(l.protocol===location.protocol){var r=new XDomainRequest;r.open("GET",e),r.timeout=0,r.onprogress=Function.prototype,r.ontimeout=Function.prototype,r.onload=function(){var e=r.responseText;o(e)?s(e,t):a(r,t)},r.onerror=function(e){a(r,t)},setTimeout((function(){r.send()}),0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),a(null,t);else{var i=new XMLHttpRequest;i.open("GET",e),n.mimeType&&i.overrideMimeType&&i.overrideMimeType(n.mimeType),n.onBeforeSend(i,e,t),i.onreadystatechange=function(){if(4===i.readyState){var e=i.responseText;i.status<400&&o(e)||0===i.status&&o(e)?s(e,t):a(i,t)}},i.send()}}))}function Wc(e){var t=/\/\*[\s\S]+?\*\//g,n=/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,r={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,skipDisabled:!1!==e.skipDisabled,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},i=Array.apply(null,r.rootElement.querySelectorAll(r.include)).filter((function(e){return t=e,n=r.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,n);var t,n})),o=Array.apply(null,Array(i.length)).map((function(e){return null}));function a(){if(-1===o.indexOf(null)){o.reduce((function(e,t,n){return""===t&&e.push(n),e}),[]).reverse().forEach((function(e){return[i,o].forEach((function(t){return t.splice(e,1)}))}));var e=o.join("");r.onComplete(e,o,i)}}function s(e,t,n,i){var s=r.onSuccess(e,n,i);!function e(t,n,i,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=l(t,i,s);c.rules.length?Vc(c.absoluteUrls,{onBeforeSend:function(e,t,i){r.onBeforeSend(e,n,t)},onSuccess:function(e,t,i){var o=r.onSuccess(e,n,t),a=l(e=!1===o?"":o||e,t,s);return a.rules.forEach((function(t,n){e=e.replace(t,a.absoluteRules[n])})),e},onError:function(r,l,u){a.push({xhr:r,url:l}),s.push(c.rules[u]),e(t,n,i,o,a,s)},onComplete:function(r){r.forEach((function(e,n){t=t.replace(c.rules[n],e)})),e(t,n,i,o,a,s)}}):o(t,a)}(e=void 0!==s&&!1===Boolean(s)?"":s||e,n,i,(function(e,i){null===o[t]&&(i.forEach((function(e){return r.onError(e.xhr,n,e.url)})),!r.filter||r.filter.test(e)?o[t]=e:o[t]="",a())}))}function l(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o={};return o.rules=(e.replace(t,"").match(n)||[]).filter((function(e){return-1===i.indexOf(e)})),o.urls=o.rules.map((function(e){return e.replace(n,"$1")})),o.absoluteUrls=o.urls.map((function(e){return qc(e,r)})),o.absoluteRules=o.rules.map((function(e,t){var n=o.urls[t],i=qc(o.absoluteUrls[t],r);return e.replace(n,i)})),o}i.length?i.forEach((function(e,t){var n=e.getAttribute("href"),i=e.getAttribute("rel"),l="link"===e.nodeName.toLowerCase()&&n&&i&&-1!==i.toLowerCase().indexOf("stylesheet"),c=!1!==r.skipDisabled&&e.disabled,u="style"===e.nodeName.toLowerCase();if(l&&!c)Vc(n,{mimeType:"text/css",onBeforeSend:function(t,n,i){r.onBeforeSend(t,e,n)},onSuccess:function(r,i,o){var a=qc(n);s(r,t,e,a)},onError:function(n,i,s){o[t]="",r.onError(n,e,i),a()}});else if(u&&!c){var d=e.textContent;r.useCSSOM&&(d=Array.apply(null,e.sheet.cssRules).map((function(e){return e.cssText})).join("")),s(d,t,e,location.href)}else o[t]="",a()})):r.onComplete("",[])}function qc(e,t){var n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),r.href=t||document.baseURI||(document.querySelector("base")||{}).href||location.href,i.href=e,i.href}var Hc=$c;function $c(e,t,n){e instanceof RegExp&&(e=Yc(e,n)),t instanceof RegExp&&(t=Yc(t,n));var r=Gc(e,t,n);return r&&{start:r[0],end:r[1],pre:n.slice(0,r[0]),body:n.slice(r[0]+e.length,r[1]),post:n.slice(r[1]+t.length)}}function Yc(e,t){var n=t.match(e);return n?n[0]:null}function Gc(e,t,n){var r,i,o,a,s,l=n.indexOf(e),c=n.indexOf(t,l+1),u=l;if(l>=0&&c>0){if(e===t)return[l,c];for(r=[],o=n.length;u>=0&&!s;)u==l?(r.push(u),l=n.indexOf(e,u+1)):1==r.length?s=[r.pop(),c]:((i=r.pop())<o&&(o=i,a=c),c=n.indexOf(t,u+1)),u=l<c&&l>=0?l:c;r.length&&(s=[o,a])}return s}function Kc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={preserveStatic:!0,removeComments:!1},r=Bc({},n,t),i=[];function o(e){throw new Error("CSS parse error: ".concat(e))}function a(t){var n=t.exec(e);if(n)return e=e.slice(n[0].length),n}function s(){return a(/^{\s*/)}function l(){return a(/^}/)}function c(){a(/^\s*/)}function u(){if(c(),"/"===e[0]&&"*"===e[1]){for(var t=2;e[t]&&("*"!==e[t]||"/"!==e[t+1]);)t++;if(!e[t])return o("end of comment is missing");var n=e.slice(2,t);return e=e.slice(t+2),{type:"comment",comment:n}}}function d(){for(var e,t=[];e=u();)t.push(e);return r.removeComments?[]:t}function f(){for(c();"}"===e[0];)o("extra closing bracket");var t=a(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(t)return t[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,(function(e){return e.replace(/,/g,"‌")})).split(/\s*(?![^(]*\)),\s*/).map((function(e){return e.replace(/\u200C/g,",")}))}function p(){if("@"===e[0])return C();a(/^([;\s]*)+/);var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=a(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(n){if(n=n[0].trim(),!a(/^:\s*/))return o("property missing ':'");var r=a(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),i={type:"declaration",property:n.replace(t,""),value:r?r[0].replace(t,"").trim():""};return a(/^[;\s]*/),i}}function h(){if(!s())return o("missing '{'");for(var e,t=d();e=p();)t.push(e),t=t.concat(d());return l()?t:o("missing '}'")}function m(){c();for(var e,t=[];e=a(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),a(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:h()}}function b(){var e=a(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=a(/^([-\w]+)\s*/)))return o("@keyframes missing name");var n,r=e[1];if(!s())return o("@keyframes missing '{'");for(var i=d();n=m();)i.push(n),i=i.concat(d());return l()?{type:"keyframes",name:r,vendor:t,keyframes:i}:o("@keyframes missing '}'")}}function g(){if(a(/^@page */))return{type:"page",selectors:f()||[],declarations:h()}}function v(){var e=a(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);if(e)return{type:"page-margin-box",name:"".concat(e[1],"-").concat(e[2])+(e[3]?"-".concat(e[3]):""),declarations:h()}}function y(){if(a(/^@font-face\s*/))return{type:"font-face",declarations:h()}}function w(){var e=a(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:O()}}function _(){if(a(/^@host\s*/))return{type:"host",rules:O()}}function x(){var e=a(/^@media([^{]+)*/);if(e)return{type:"media",media:(e[1]||"").trim(),rules:O()}}function k(){var e=a(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}function E(){var e=a(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:O()}}function S(){var e=a(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}function C(){if(c(),"@"===e[0]){var t=S()||y()||x()||b()||w()||E()||k()||_()||g()||v();if(t&&!r.preserveStatic){return(t.declarations?t.declarations.some((function(e){return/var\(/.test(e.value)})):(t.keyframes||t.rules||[]).some((function(e){return(e.declarations||[]).some((function(e){return/var\(/.test(e.value)}))})))?t:{}}return t}}function T(){if(!r.preserveStatic){var t=Hc("{","}",e);if(t){var n=/:(?:root|host)(?![.:#(])/.test(t.pre)&&/--\S*\s*:/.test(t.body),i=/var\(/.test(t.body);if(!n&&!i)return e=e.slice(t.end+1),{}}}var a=f()||[],s=r.preserveStatic?h():h().filter((function(e){var t=a.some((function(e){return/:(?:root|host)(?![.:#(])/.test(e)}))&&/^--\S/.test(e.property),n=/var\(/.test(e.value);return t||n}));return a.length||o("selector missing"),{type:"rule",selectors:a,declarations:s}}function O(t){if(!t&&!s())return o("missing '{'");for(var n,r=d();e.length&&(t||"}"!==e[0])&&(n=C()||T());)n.type&&r.push(n),r=r.concat(d());return t||l()?r:o("missing '}'")}return{type:"stylesheet",stylesheet:{rules:O(!0),errors:i}}}function Qc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={parseHost:!1,store:{},onWarning:function(){}},r=Bc({},n,t),i=new RegExp(":".concat(r.parseHost?"host":"root","$"));return"string"==typeof e&&(e=Kc(e,r)),e.stylesheet.rules.forEach((function(e){"rule"===e.type&&e.selectors.some((function(e){return i.test(e)}))&&e.declarations.forEach((function(e,t){var n=e.property,i=e.value;n&&0===n.indexOf("--")&&(r.store[n]=i)}))})),r.store}function Xc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+i(e.rules)+"}"},"font-face":function(e){return"@font-face{"+i(e.declarations)+"}"},host:function(e){return"@host{"+i(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+i(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+i(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+i(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+i(e.declarations)+"}"},"page-margin-box":function(e){return"@"+e.name+"{"+i(e.declarations)+"}"},rule:function(e){var t=e.declarations;if(t.length)return e.selectors.join(",")+"{"+i(t)+"}"},supports:function(e){return"@supports "+e.supports+"{"+i(e.rules)+"}"}};function i(e){for(var i="",o=0;o<e.length;o++){var a=e[o];n&&n(a);var s=r[a.type](a);s&&(i+=s,s.length&&a.selectors&&(i+=t))}return i}return i(e.stylesheet.rules)}function Zc(e,t){e.rules.forEach((function(n){n.rules?Zc(n,t):n.keyframes?n.keyframes.forEach((function(e){"keyframe"===e.type&&t(e.declarations,n)})):n.declarations&&t(n.declarations,e)}))}function Jc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={preserveStatic:!0,preserveVars:!1,variables:{},onWarning:function(){}},r=Bc({},n,t);return"string"==typeof e&&(e=Kc(e,r)),Zc(e.stylesheet,(function(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=i.type,a=i.property,s=i.value;if("declaration"===o)if(r.preserveVars||!a||0!==a.indexOf("--")){if(-1!==s.indexOf("var(")){var l=tu(s,r);l!==i.value&&(l=eu(l),r.preserveVars?(e.splice(n,0,{type:o,property:a,value:l}),n++):i.value=l)}}else e.splice(n,1),n--}})),Xc(e)}function eu(e){return(e.match(/calc\(([^)]+)\)/g)||[]).forEach((function(t){var n="calc".concat(t.split("calc").join(""));e=e.replace(t,n)})),e}function tu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;if(-1===e.indexOf("var("))return e;var r=Hc("(",")",e);function i(e){var r=e.split(",")[0].replace(/[\s\n\t]/g,""),i=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],o=Object.prototype.hasOwnProperty.call(t.variables,r)?String(t.variables[r]):void 0,a=o||(i?String(i):void 0),s=n||e;return o||t.onWarning('variable "'.concat(r,'" is undefined')),a&&"undefined"!==a&&a.length>0?tu(a,t,s):"var(".concat(s,")")}if(r){if("var"===r.pre.slice(-3)){var o=0===r.body.trim().length;return o?(t.onWarning("var() must contain a non-whitespace string"),e):r.pre.slice(0,-3)+i(r.body)+tu(r.post,t)}return r.pre+"(".concat(tu(r.body,t),")")+tu(r.post,t)}return-1!==e.indexOf("var(")&&t.onWarning('missing closing ")" in the value "'.concat(e,'"')),e}$c.range=Gc;var nu="undefined"!=typeof window,ru=nu&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),iu={group:0,job:0},ou={rootElement:nu?document:null,shadowDOM:!1,include:"style,link[rel=stylesheet]",exclude:"",variables:{},onlyLegacy:!0,preserveStatic:!0,preserveVars:!1,silent:!1,updateDOM:!0,updateURLs:!0,watch:null,onBeforeSend:function(){},onError:function(){},onWarning:function(){},onSuccess:function(){},onComplete:function(){},onFinally:function(){}},au={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssMediaQueries:/@media[^{]+\{([\s\S]+?})\s*}/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVarDeclRules:/(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,cssVarDecls:/(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,cssVarFunc:/var\(\s*--[\w-]/,cssVars:/(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},su={dom:{},job:{},user:{}},lu=!1,cu=null,uu=0,du=null,fu=!1;function pu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="cssVars(): ",n=Bc({},ou,e);function r(e,r,i,o){!n.silent&&window.console&&console.error("".concat(t).concat(e,"\n"),r),n.onError(e,r,i,o)}function i(e){!n.silent&&window.console&&console.warn("".concat(t).concat(e)),n.onWarning(e)}function o(e){n.onFinally(Boolean(e),ru,wu()-n.__benchmark)}if(nu){if(n.watch)return n.watch=ou.watch,hu(n),void pu(n);if(!1===n.watch&&cu&&(cu.disconnect(),cu=null),!n.__benchmark){if(lu===n.rootElement)return void mu(e);var a=[].slice.call(n.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])'));if(n.__benchmark=wu(),n.exclude=[cu?'[data-cssvars]:not([data-cssvars=""])':'[data-cssvars="out"]',"link[disabled]:not([data-cssvars])",n.exclude].filter((function(e){return e})).join(","),n.variables=vu(n.variables),a.forEach((function(e){var t="style"===e.nodeName.toLowerCase()&&e.__cssVars.text,n=t&&e.textContent!==e.__cssVars.text;t&&n&&(e.sheet&&(e.sheet.disabled=!1),e.setAttribute("data-cssvars",""))})),!cu){var s=[].slice.call(n.rootElement.querySelectorAll('[data-cssvars="out"]'));s.forEach((function(e){var t=e.getAttribute("data-cssvars-group");t&&n.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t,'"]'))||e.parentNode.removeChild(e)})),uu&&a.length<uu&&(uu=a.length,su.dom={})}}if("loading"!==document.readyState)if(ru&&n.onlyLegacy){var l=!1;if(n.updateDOM){var c=n.rootElement.host||(n.rootElement===document?document.documentElement:n.rootElement);Object.keys(n.variables).forEach((function(e){var t=n.variables[e];l=l||t!==getComputedStyle(c).getPropertyValue(e),c.style.setProperty(e,t)}))}o(l)}else!fu&&(n.shadowDOM||n.rootElement.shadowRoot||n.rootElement.host)?Wc({rootElement:ou.rootElement,include:ou.include,exclude:n.exclude,skipDisabled:!1,onSuccess:function(e,t,n){return!((t.sheet||{}).disabled&&!t.__cssVars)&&((e=((e=e.replace(au.cssComments,"").replace(au.cssMediaQueries,"")).match(au.cssVarDeclRules)||[]).join(""))||!1)},onComplete:function(e,t,r){Qc(e,{store:su.dom,onWarning:i}),fu=!0,pu(n)}}):(lu=n.rootElement,Wc({rootElement:n.rootElement,include:n.include,exclude:n.exclude,skipDisabled:!1,onBeforeSend:n.onBeforeSend,onError:function(e,t,n){var i=e.responseURL||yu(n,location.href),o=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");r("CSS XHR Error: ".concat(i," ").concat(e.status," ").concat(o),t,e,i)},onSuccess:function(e,t,r){if((t.sheet||{}).disabled&&!t.__cssVars)return!1;var i="link"===t.nodeName.toLowerCase(),o="style"===t.nodeName.toLowerCase()&&e!==t.textContent,a=n.onSuccess(e,t,r);return e=void 0!==a&&!1===Boolean(a)?"":a||e,n.updateURLs&&(i||o)&&(e=gu(e,r)),e},onComplete:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=Bc({},su.dom,su.user);if(su.job={},a.forEach((function(e,o){var a=t[o];if(e.__cssVars=e.__cssVars||{},e.__cssVars.text=a,au.cssVars.test(a))try{var s=Kc(a,{preserveStatic:n.preserveStatic,removeComments:!0});Qc(s,{parseHost:Boolean(n.rootElement.host),store:su.dom,onWarning:i}),e.__cssVars.tree=s}catch(o){r(o.message,e)}})),Bc(su.job,su.dom),n.updateDOM?(Bc(su.user,n.variables),Bc(su.job,su.user)):(Bc(su.job,su.user,n.variables),Bc(s,n.variables)),iu.job>0&&Boolean(Object.keys(su.job).length>Object.keys(s).length||Boolean(Object.keys(s).length&&Object.keys(su.job).some((function(e){return su.job[e]!==s[e]})))))_u(n.rootElement),pu(n);else{var l=[],c=[],u=!1;if(n.updateDOM&&iu.job++,a.forEach((function(e,o){var a=!e.__cssVars.tree;if(e.__cssVars.tree)try{Jc(e.__cssVars.tree,Bc({},n,{variables:su.job,onWarning:i}));var s=Xc(e.__cssVars.tree);if(n.updateDOM){var d=t[o],f=au.cssVarFunc.test(d);if(e.getAttribute("data-cssvars")||e.setAttribute("data-cssvars","src"),s.length&&f){var p=e.getAttribute("data-cssvars-group")||++iu.group,h=s.replace(/\s/g,""),m=n.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(p,'"]'))||document.createElement("style");u=u||au.cssKeyframes.test(s),n.preserveStatic&&e.sheet&&(e.sheet.disabled=!0),m.hasAttribute("data-cssvars")||m.setAttribute("data-cssvars","out"),h===e.textContent.replace(/\s/g,"")?(a=!0,m&&m.parentNode&&(e.removeAttribute("data-cssvars-group"),m.parentNode.removeChild(m))):h!==m.textContent.replace(/\s/g,"")&&([e,m].forEach((function(e){e.setAttribute("data-cssvars-job",iu.job),e.setAttribute("data-cssvars-group",p)})),m.textContent=s,l.push(s),c.push(m),m.parentNode||e.parentNode.insertBefore(m,e.nextSibling))}}else e.textContent.replace(/\s/g,"")!==s&&l.push(s)}catch(t){r(t.message,e)}a&&e.setAttribute("data-cssvars","skip"),e.hasAttribute("data-cssvars-job")||e.setAttribute("data-cssvars-job",iu.job)})),uu=n.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length,n.shadowDOM)for(var d,f=[].concat(n.rootElement).concat([].slice.call(n.rootElement.querySelectorAll("*"))),p=0;d=f[p];++p)if(d.shadowRoot&&d.shadowRoot.querySelector("style")){var h=Bc({},n,{rootElement:d.shadowRoot});pu(h)}n.updateDOM&&u&&bu(n.rootElement),lu=!1,n.onComplete(l.join(""),c,JSON.parse(JSON.stringify(su.job)),wu()-n.__benchmark),o(c.length)}}}));else document.addEventListener("DOMContentLoaded",(function t(n){pu(e),document.removeEventListener("DOMContentLoaded",t)}))}}function hu(e){function t(e){var t=n(e)&&e.hasAttribute("disabled"),r=(e.sheet||{}).disabled;return t||r}function n(e){return"link"===e.nodeName.toLowerCase()&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")}function r(e){return"style"===e.nodeName.toLowerCase()}window.MutationObserver&&(cu&&(cu.disconnect(),cu=null),(cu=new MutationObserver((function(i){i.some((function(i){return function(r){var i=!1;if("attributes"===r.type&&n(r.target)&&!t(r.target)){var o="disabled"===r.attributeName,a="href"===r.attributeName,s="skip"===r.target.getAttribute("data-cssvars"),l="src"===r.target.getAttribute("data-cssvars");o?i=!s&&!l:a&&(s?r.target.setAttribute("data-cssvars",""):l&&_u(e.rootElement,!0),i=!0)}return i}(i)||function(e){var t=!1;if("childList"===e.type){var n=r(e.target),i="out"===e.target.getAttribute("data-cssvars");t=n&&!i}return t}(i)||function(e){var i=!1;return"childList"===e.type&&(i=[].slice.call(e.addedNodes).some((function(e){var i=1===e.nodeType&&e.hasAttribute("data-cssvars"),o=r(e)&&au.cssVars.test(e.textContent);return!i&&(n(e)||o)&&!t(e)}))),i}(i)||function(t){var n=!1;return"childList"===t.type&&(n=[].slice.call(t.removedNodes).some((function(t){var n=1===t.nodeType,r=n&&"out"===t.getAttribute("data-cssvars"),i=n&&"src"===t.getAttribute("data-cssvars"),o=i;if(i||r){var a=t.getAttribute("data-cssvars-group"),s=e.rootElement.querySelector('[data-cssvars-group="'.concat(a,'"]'));i&&_u(e.rootElement,!0),s&&s.parentNode.removeChild(s)}return o}))),n}(i)}))&&pu(e)}))).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0}))}function mu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;clearTimeout(du),du=setTimeout((function(){e.__benchmark=null,pu(e)}),t)}function bu(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter((function(e){return getComputedStyle(document.body)[e]}))[0];if(t){for(var n=e.getElementsByTagName("*"),r=[],i=0,o=n.length;i<o;i++){var a=n[i];"none"!==getComputedStyle(a)[t]&&(a.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",r.push(a))}document.body.offsetHeight;for(var s=0,l=r.length;s<l;s++){var c=r[s].style;c[t]=c[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}function gu(e,t){return(e.replace(au.cssComments,"").match(au.cssUrls)||[]).forEach((function(n){var r=n.replace(au.cssUrls,"$1"),i=yu(r,t);e=e.replace(n,n.replace(r,i))})),e}function vu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=/^-{2}/;return Object.keys(e).reduce((function(n,r){return n[t.test(r)?r:"--".concat(r.replace(/^-+/,""))]=e[r],n}),{})}function yu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),r.href=t,i.href=e,i.href}function wu(){return nu&&(window.performance||{}).now?window.performance.now():(new Date).getTime()}function _u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[].slice.call(e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));n.forEach((function(e){return e.setAttribute("data-cssvars","")})),t&&(su.dom={})}pu.reset=function(){for(var e in iu.job=0,iu.group=0,lu=!1,cu&&(cu.disconnect(),cu=null),uu=0,du=null,fu=!1,su)su[e]={}};var xu={cleanValues:(e={},t=jn)=>An({},t,e,(function(e,n,r,i,o,a){if(null==n)return t[r]})),customGet:({key:e,object:t={},dependencies:n=[]})=>{for(let e=0;e<n.length;e++){const i=n[e];if("object"==typeof i&&("object"!=typeof(r=i.condition)||t[r.key]===r.value)){if(void 0!==i.value&&null!==i.value)return i.value;if(i.inherit&&void 0!==t[i.inherit]&&null!==t[i.inherit])return t[i.inherit]}}var r;return t[e]}};function ku(e={}){const t=xu.cleanValues(e.design);return Object.keys(zn).reduce(((e,n)=>(e[n]=xu.customGet({key:n,object:t,dependencies:zn[n].dependencies}),e)),{})}const Eu={qty:.5,unit:"rem"},Su={design:{},initial_vars:{block_spacing:{qty:.5,unit:"rem"},vertical_unit:{qty:.5,unit:"rem"},horizontal_unit:Eu},font_sizes:{size_1:"3rem",size_2:"2.5rem",size_3:"2rem",size_4:"1.5rem",size_5:"1.25rem",size_6:"1rem",size_7:"0.75rem"},zIndex:{background:0,body:1,Branding:1,LivechatLauncher:1,LivechatContent:2,footer:5,header:10,InputFullWidth:14,BackButton__Mobile:14,OffsetMenu:19,OffsetMenuContent:20,NotificationsPanel:40,Header__Row:100,Widget:2147483e3},header:{height:{default:"95px",sticky:"58px",with_menu:"120px",not_persistent_mobile:"78px"},font_size:"0.9rem",brand_font_size:{mobile:"18px",tablet:"23px"},subtitle_font_size:{mobile:"13px",tablet:"15px"},logo_size:{mobile:"35px",tablet:"44px"},persistent_menu_button_width:"36px",persistent_menu_button_and_close_button_width:"76px"},avatar:{width:"40px",mobile_width:"35px"},footer:{max_height:{mobile:"50px",mobile_hto:"136px",desktop:"70px",desktop_hto:"160px",mobile_height:"32px"},mobile_height:"32px"},messages_max_width:"700px",message_left_margin_right:Jl(Eu,3.5),margin_left:Jl(Eu,8.5),msg_grid_left_fixed_width:"40px",device_breakpoint:Ql,input:{height:"90px",mobile_height:"90px",control_height:"58px",short_max_width:"400px"},input_cards:{card_height:"330px",card_width:"300px",button_size:"36px"},chat:{shadow_length:"14px"},widget_offset:{horizontal:"6px",vertical:"6px"},launcher:{bubble:{width:"72px",height:"60px"},shadow_length:"14px",width:"100px",height:"88px"},widget_chat:{content_width:"425px",shadow_lenght:"14px",bottom_offset:"88px",width:"453px",height:"calc(100% - 88)"},proactive:{width:"350px",height:"400px"}},Cu=({children:e,config:t={}})=>{const n=Su,r=ku(t);return Tn.jsx(di,Object.assign({theme:Object.assign(Object.assign({},n),{design:r})},{children:e}),void 0)};Cu.defaultProps={children:null};(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Jr.apply(void 0,[e].concat(r)),a="sc-global-"+ii(JSON.stringify(o)),s=new mi(o,a);function l(e){var n=Vr(),r=Wr(),i=(0,t.useContext)(ui),o=(0,t.useRef)(n.allocateGSInstance(a)).current;return(0,t.useLayoutEffect)((function(){return c(o,e,n,i,r),function(){return s.removeStyles(o,n)}}),[o,e,n,i,r]),null}function c(e,t,n,r,i){if(s.isStatic)s.renderStyles(e,ar,n,i);else{var o=Kn({},t,{theme:ei(t,r,l.defaultProps)});s.renderStyles(e,o,n,i)}}return t.memo(l)})`
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
`,gi.div`
  padding: 16px 16px
    ${({hasHigherContent:e})=>e?"80px":"8px"};
  .Background,
  .Background--overlay {
    z-index: -10;
    width: ${e=>e.isDesktop?"440px":"334px"};
    border-radius: 4px;
  }
  .MessageBubble__Decorator {
    display: none;
  }
  ${e=>e.isDesktop&&"\n.is-hidden-mobile {\n  display: block !important;\n}\n"}
`;const Tu=gi(Pi)`
  padding: 12px 45px;
`,Ou=({onClick:e,disabled:t,children:n})=>Tn.jsx(Tu,Object.assign({className:"input-send-button is-size-6 has-text-weight-bold",disabled:t,onClick:e,type:"submit"},{children:n}),void 0);Ou.defaultProps={onClick:()=>{},disabled:!1,children:"Send"};const Pu=({className:e,defaultValue:t,disabled:n,hasAutofocus:r,inputRef:i,maxLength:o,minLength:a,name:s,onChange:l,placeholder:c,required:u,value:d})=>Tn.jsx(Sn,{className:Si({[e]:!!e,textarea:!0,"js-auto-focus":r}),rows:3,maxRows:12,maxLength:o,minLength:a,ref:i,onChange:e=>l(e.target.value),placeholder:c,required:u,name:s,defaultValue:t,value:d,disabled:n},void 0);Pu.defaultProps={className:"",disabled:!1,maxLength:null,minLength:null,name:null,onChange:()=>{},required:!1,inputRef:null,placeholder:"",value:void 0,defaultValue:void 0,hasAutofocus:!1};gi.div`
  height: 200px;
  width: 100%;
`,gi.div`
  height: 300px;
  width: 100%;
`;var Iu;!function(e){e.LONG="long",e.SHORT="short"}(Iu||(Iu={}));gi.div`
  height: 200px;
  width: 100%;
`;const Nu=t.createContext(null),Mu=e=>t.createElement(Nu.Provider,{value:e.value},e.children);Mu.propTypes={value:i().string,children:i().node},Mu.defaultProps={value:"",children:null};const Du=()=>(0,t.useContext)(Nu);function Au(){const{design:e}=d(),{background_type:r,background_image:i,background_image_mobile:o,background_video_webm:a,background_video_mp4:s}=e;return t.createElement(Ei,{background_image:i,background_image_mobile:o,background_type:r,background_video_mp4:s,background_video_webm:a,isNative:Du()===n.NATIVE})}const ju=t.createContext({agent:0,setAssignation:()=>{}}),Ru=e=>t.createElement(ju.Provider,{value:e.value},e.children);Ru.propTypes={value:i().object,children:i().node},Ru.defaultProps={value:{},children:null};const Lu=()=>(0,t.useContext)(ju),Fu=t.createContext({}),zu=e=>t.createElement(Fu.Provider,{value:e.value},e.children);zu.propTypes={value:i().object,children:i().node},zu.defaultProps={value:{},children:null};const Uu=()=>(0,t.useContext)(Fu),Bu=t.createContext({isOpen:!1,isProactiveOpen:!1,proactiveMessages:null}),{Provider:Vu}=Bu,Wu=()=>(0,t.useContext)(Bu);function qu(){const e=Du(),{isOpen:t}=Wu();return[n.LIVECHAT,n.POPUP,n.CONTAINER_POPUP].includes(e)&&t}function Hu(){const{agent:e}=Lu();return m(e)}function $u(){const e=d(),t=Hu(),n=e.design.header_visible?2:0;return!t&&e.persistent_menu.length>n}function Yu(){return d().persistent_menu.length>0}function Gu(){const e=d();return{hasHeader:e.design.header_visible,hideHeader:!0===e.header_hidden}}var Ku=__webpack_require__(4184),Qu=__webpack_require__.n(Ku);const Xu=480,Zu=767,Ju=`(min-width: ${768}px)`,ed=`(min-width: ${576}px)`,td=`(max-width: ${Zu}px)`,nd=`(max-width: ${480}px)`,rd=`(max-width: ${Zu}px) and (min-width: ${Xu}px)`,id=({qty:e,unit:t},n=1)=>`${e*n}${t}`,od=({qty:e,unit:t},n=1)=>`${e/n}${t}`,ad=(e,t)=>`\noverflow: hidden;\n  \n&::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: ${e};\n  opacity: ${t};\n}\n`,sd=gi.header`
  z-index: ${({theme:e})=>e.zIndex.header};
  width: 100%;
  height: ${e=>e.theme.header.height.default};
  top: 0;
  left: 0;
  padding: 10px 30px;
  border-bottom: 1px solid transparent;
  transition: 0.25s height ease-in-out;
  color: ${({theme:e})=>e.design.header_text};

  ${()=>Du()===n.NATIVE?"position: fixed;\n      ":"position: absolute;"}

  @media ${Ju} {
    padding: 22px 34px;
    margin: auto;
  }

  &.is-transparent {
    padding: 12px 10px;
    .custom-buttons {
      align-items: flex-start;
    }
  }

  &:not(.Header--hasPersistentMenu),
  &.Header--isAgentActive {
    .Header__Row {
      height: 100%;
    }
  }

  &.Header--isAgentActive {
    .Header__NavigationButton--Menu,
    .PersistentMenu .buttons {
      display: none;
    }

    .Header__BotInfo {
      transform: translateY(-100%);
      opacity: 0;
    }

    .Header__AgentInfo {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &.Header--isSticky {
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.16);
  }

  &:not(.is-transparent) {
    background-color: ${({theme:e})=>e.design.header_background_color};
  }

  &.Header--hasSeparator {
    border-bottom-color: ${({theme:e})=>e.design.top_bar_separator_color};
  }

  .custom-buttons {
    .Header__NavigationButton {
      &.custom-button {
        width: 44px;
        height: 37px;
        min-width: initial;
        min-height: initial;
        max-width: initial;
        max-height: initial;
        padding: 0 0.6rem 0 0.5rem;
        color: ${({theme:e})=>e.design.header_text};
      }

      &.custom-button:hover {
        ${ad("var(--header_text)",.1)};
        color: ${({theme:e})=>e.design.header_text};

      }

      &--Menu {
        /* The navigation button menu will have a fixed border radius and no border color */
        border-radius: 3px !important;
        border: hidden !important;
        flex-wrap: wrap;
        align-content: center;
      }

      &--Menu span {
        height: 2px;
        display: block;
        width: 100%;
        margin: 1px;
        border-radius: 1px;
        background-color: currentColor;
      }

      &--Menu span:not(:first-child) {
        margin-top: 3px;
      }

      &--Close {
        &:after,
        &:not(:hover):before {
          display: none;
        }
        &:before {
          transform: none;
        }
        position: relative;
      }
      &--Close span:first-child {
        transform: rotate(45deg);
      }

      &--Close span:last-child {
        transform: rotate(-45deg);
      }

      &--Close span {
        display: block;
        position: absolute;
        width: 20px;
        height: 2px;
        border-radius: 3px;
        background-color: currentColor;
      }
    }
  }

  /* Mobile */
  @media ${td} {
    &:not(.Header--hasPersistentMenu) {
      height: ${e=>e.theme.header.height.not_persistent_mobile};
    }

    &.Header--isSticky.Header--hasPersistentMenu {
      height: ${e=>e.theme.header.height.sticky};

      .custom-buttons {
        transform: translate(12px, 54px) scale(0.8);
        transform-origin: center right;
      }

      &.Header--isAgentActive {
        .custom-buttons {
          transform: translate(12px, -2px) scale(0.8);
        }
      }
    }

    &.Header--hasPersistentMenu:not(.Header--isAgentActive):not(.Header--isSticky) {
      height: ${e=>e.theme.header.height.with_menu};
    }

    &.Header--hasPersistentMenu {
      .Header__Row:first-child {
        z-index: ${({theme:e})=>e.zIndex.Header__Row};
        position: relative;
        .custom-buttons {
          transition: transform 0.25s ease-in-out;
        }
      }

      &.Header--isSticky.Header--hasPersistentMenu {
        .Header__Row {
          transform: translateY(-58px);
        }
      }

      &.Header--hasPersistentMenu.Header--isAgentActive {
        .Header__Row:first-child {
          transform: translateY(0);
        }

        .Header__Row:nth-child(2) {
          display: none;
        }
      }
    }
  }

  ${e=>{const{hasOffsetMenu:t,hasCloseButton:n,theme:r}=e;return!0===n&&!0===t?Jr`
        &.Header--isSticky .Header__Row:last-of-type {
          padding-right: ${r.header.persistent_menu_button_and_close_button_width};
        }
      `:!0===t?Jr`
        &.Header--isSticky .Header__Row:last-of-type {
          padding-right: ${r.header.persistent_menu_button_width};
        }
      `:null}}
`,ld=gi.div`
  display: flex;
  align-items: stretch;
  transition: transform 0.25s ease-in-out;

  &:not(:first-child) {
    margin-top: 18px;
  }
`,cd=gi.div`
  display: inline-flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  transition: 0.25s transform ease-in-out;
`,ud=gi.div`
  display: inline-flex;
  justify-content: center;
  transition: 0.25s transform ease-in-out;

  @media ${td} {
    width: 100%;
  }
`;function dd(){return(dd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const fd=t.forwardRef(((e,n)=>t.createElement("div",dd({},e,{ref:n,className:Qu()({[e.className]:!!e.className,"custom-buttons":!String(e.className).includes("input-buttons"),buttons:!0})}))));fd.propTypes={className:i().string},fd.defaultProps={className:""};var pd=gi(fd)`
  .custom-button,
  .input-button {
    border-radius: calc(var(--border_radius) * 0.1rem);
    border: ${e=>od(e.theme.initial_vars.vertical_unit,4)}
      solid transparent;
    padding: ${e=>id(e.theme.initial_vars.vertical_unit,2)}
      ${e=>id(e.theme.initial_vars.horizontal_unit,2)};
  }

  .custom-button:hover:not([disabled]),
  .input-button:hover:not([disabled]) {
    box-shadow: 0 6px 21px -11px rgba(0, 0, 0, 0.29),
      0 13px 17px -16px rgba(47, 49, 72, 0.3);
  }
`;function hd({isAgentActive:e,isSticky:n,hasPersistentMenu:r,persistentMenu:i,hasSeparator:o,description:a,navigation:s,hasOffsetMenu:l,hasCloseButton:c}){return t.createElement(sd,{className:Qu()({Header:!0,"Header--isAgentActive":e,"Header--isSticky":n,"Header--hasPersistentMenu":r,"Header--hasSeparator":o}),role:"navigation","aria-label":"main navigation",hasOffsetMenu:l,hasCloseButton:c},t.createElement(ld,{className:"Header__Row"},t.createElement(cd,{className:"Header__Info is-relative is-overflow-ellipsis"},a),r&&t.createElement(ud,{className:"Header__Menu is-hidden-mobile"},i),t.createElement(pd,{className:"custom-buttons is-inline-flex are-transparent"},s)),t.createElement(ld,{className:"Header__Row is-hidden-tablet"},r&&t.createElement(ud,{className:"Header__Menu"},i)))}hd.propTypes={description:i().element,navigation:i().element,hasSeparator:i().bool,persistentMenu:i().element,isAgentActive:i().bool,isSticky:i().bool,hasPersistentMenu:i().bool,hasOffsetMenu:i().bool,hasCloseButton:i().bool},hd.defaultProps={description:null,navigation:null,hasSeparator:!1,persistentMenu:null,isAgentActive:!1,isSticky:!1,hasPersistentMenu:!1,hasOffsetMenu:!1,hasCloseButton:!1};const md=t.createContext({isOpen:!1,setIsOpen:null,src:null}),bd=e=>t.createElement(md.Provider,{value:e.value},e.children);bd.propTypes={value:i().object,children:i().node},bd.defaultProps={value:{},children:null};const gd=()=>(0,t.useContext)(md),vd=t.createContext(!1),{Provider:yd}=vd,wd=()=>(0,t.useContext)(vd),_d=e=>{switch(e){case"1x1":return"is-1by1";case"5x4":return"is-5by4";case"4x3":return"is-4by3";case"3x2":return"is-3by2";case"5x3":return"is-5by3";case"16x9":return"is-16by9";case"2x1":return"is-2by1";case"3x1":return"is-3by1";case"4x5":return"is-4by5";case"3x4":return"is-3by4";case"2x3":return"is-2by3";case"3x5":return"is-3by5";case"9x16":return"is-9by16";case"1x2":return"is-1by2";case"1x3":return"is-1by3";default:return null}};function xd(e){const{setIsOpen:n,setSrc:r}=gd(),i=wd();return t.createElement("figure",{className:Qu()({image:!0,[`is-${e.size}x${e.size}`]:!!e.size,[_d(e.ratio)]:!!e.ratio,[e.className]:!!e.className,"u-pointer":e.openModal}),onClick:e.openModal&&!i?()=>{r(e.src),n(!0)}:null,style:e.figureStyle},e.src&&t.createElement("img",{alt:e.alt||e.src,className:Qu()({Media:!0,[e.imgClassName]:!!e.imgClassName,"is-rounded":e.rounded,"is-contain":e.contain}),onLoad:e.onLoad,src:e.src,style:e.style}))}xd.propTypes={contain:i().bool,className:i().string,imgClassName:i().string,figureStyle:i().object,openModal:i().bool,ratio:i().string,rounded:i().bool,size:i().number,src:i().string,alt:i().string,style:i().object,onLoad:i().func},xd.defaultProps={contain:!1,className:"",imgClassName:"",figureStyle:{},openModal:!1,ratio:null,rounded:!1,size:null,src:null,alt:null,style:{},onLoad:()=>{}};const kd=gi.div`
  position: relative;
  display: inline-block;
  height: inherit;
  max-width: 40%;
  margin-right: 15px;

  .image {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .image img {
    width: auto;
    height: ${e=>e.theme.header.logo_size.mobile};
    min-width: ${e=>e.theme.header.logo_size.mobile};
    display: block;

    @media ${Ju} {
      height: ${e=>e.theme.header.logo_size.mobile};
      min-width: ${e=>e.theme.header.logo_size.mobile};
    }
  }
`;function Ed(e){return e.src?t.createElement(kd,{className:"Header__Logo"},t.createElement(xd,dd({contain:!0,src:e.src},e.imageProps,{rounded:e.rounded}))):null}Ed.propTypes={imageProps:i().object,src:i().string,rounded:i().bool},Ed.defaultProps={imageProps:{},src:null,rounded:!1};const Sd=gi.div`
  display: flex;
  align-items: center;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
`,Cd=gi(Sd)`
  opacity: 1;
  width: 100%;
`,Td=gi(Sd)`
  position: absolute;
  height: 100%;
  transform: translateY(100%);
  opacity: 0;

  .image img {
    width: ${e=>e.theme.header.logo_size.mobile};
  }
`,Od=gi.hgroup`
  flex: 1;
  min-width: 0;
`,Pd=gi.h1`
  letter-spacing: -0.75px;
  font-size: ${e=>e.theme.header.brand_font_size.mobile};

  @media ${Ju} {
    font-size: ${e=>e.theme.header.brand_font_size.tablet};
  }
`,Id=gi.h3`
  letter-spacing: -0.25px;
  font-size: ${e=>e.theme.header.subtitle_font_size.mobile};

  @media ${Ju} {
    font-size: ${e=>e.theme.header.subtitle_font_size.tablet};
  }
`;function Nd({isBotInfo:e,title:n,subtitle:r,avatar:i,avatarRounded:o}){const a=e?Cd:Td,s=e?"Header__BotInfo":"Header__AgentInfo";return t.createElement(a,{className:s},t.createElement(Ed,{src:i,rounded:o}),t.createElement(Od,{className:"Header__Description"},n&&t.createElement(Pd,{className:"Header__Title has-text-weight-bold"},n),r&&t.createElement(Id,{className:"Header__Subtitle is-overflow-ellipsis"},r)))}Nd.propTypes={isBotInfo:i().bool,avatar:i().string,avatarRounded:i().bool,title:i().string,subtitle:i().string},Nd.defaultProps={isBotInfo:!0,avatar:null,avatarRounded:!1,title:null,subtitle:null};const Md=t.createContext(new(g())({})),Dd=e=>t.createElement(Md.Provider,{value:e.value},e.children);Dd.propTypes={value:i().object,children:i().node},Dd.defaultProps={value:{},children:null};const Ad=()=>(0,t.useContext)(Md);var jd="database.connection",Rd="custom_data",Ld="init",Fd="load",zd="new_message",Ud="proactive_close",Bd="proactive_open",Vd="send_message",Wd="set_config",qd="set_config_context",Hd="widget_open",$d="widget_close";const Yd=e=>{const{item:n,className:r,isVerticalVersion:i}=e;return t.createElement(Oi,dd({},e,{className:Qu()({"button--PersistentMenu is-overflow-ellipsis":!0,"is-transparent":!i&&"text"===n.style,[r]:!0}),href:n.href,isAnchor:!0,key:n.payload,label:n.text,onClick:()=>(e=>{"keyword"===e.action&&(e.events.emit(Vd,{type:"button",message:e.text,payload:e.payload}),e.setDisabled(!0),setTimeout((()=>e.setDisabled(!1)),500)),e.closeMenu()})(n)}))};Yd.propTypes={item:i().object,className:i().string,isVerticalVersion:i().bool},Yd.defaultProps={item:null,className:null,isVerticalVersion:!1};const Gd=gi(Yd)`
  padding: 10px 16px;
  border-radius: calc(var(--border_radius) * 0.1rem);
  justify-content: flex-start;
  max-width: 250px;

  @media ${td} {
    max-width: 50%;
  }

  .label {
    font-size: ${e=>e.theme.header.font_size};
    width: 100%;
  }

  &:hover {
    border-color: transparent;
    ${ad("var(--header_text)",.1)}
  }

  &.is-transparent {
    color: ${({theme:e})=>e.design.header_text};
  }

  ${e=>e.isVerticalVersion&&"\n    margin-bottom: 2px;\n    margin-right: 0;\n    border-radius: 3px;\n    max-width: 100% !important;\n  \n    &:first-child {\n      border-radius: 16px 16px 3px 3px;\n    }\n  \n    &:last-child {\n      border-radius: 3px 3px 16px 16px;\n    }\n"}
`,Kd=gi.nav`
  flex: 0;
  order: 1;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: auto;
  box-shadow: none;
  position: relative;
  align-items: center;

  @media ${Ju} {
    padding: 0;
    border: initial;
    background-color: transparent;
  }

  &:not(.PersistentMenu--VerticalVersion) {
    @media ${Ju} {
      margin: 0 ${e=>id(e.theme.initial_vars.horizontal_unit,1.25)};
    }
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  ${e=>e.verticalVersion&&"\n    width: 100%;\n  "}
`;function Qd(e){return t.createElement(Kd,{"aria-expanded":e.ariaExpanded,className:Qu()({PersistentMenu:!0,"navbar-menu":!0,"PersistentMenu--VerticalVersion":e.isVerticalVersion}),id:"navigation__persistent__menu"},t.createElement("div",{className:Qu()({"is-vertically-centered is-horizontally-centered":!e.isVerticalVersion,"is-layout-vertical":e.isVerticalVersion,buttons:!e.isVerticalVersion}),ref:e.menuRef},e.children))}function Xd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Zd(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Xd(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Xd(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Jd({closeMenu:e,isVerticalVersion:n,ariaExpanded:r}){const{events:i}=Ad(),[o,a]=(0,t.useState)(!1),s=(0,t.useRef)(null),{persistent_menu:l}=d(),c=l.map((t=>Zd(Zd({},t),{},{action:t.action||"keyword",style:t.style||"text",href:t.href||null,isKeyword:"link"!==t.action,closeMenu:e,events:i,disabled:o,setDisabled:a}))).map(((e,r)=>(n||r<2)&&t.createElement(Gd,{item:e,key:e.payload,isVerticalVersion:n})));return t.createElement(Qd,{isVerticalVersion:n,menuRef:s,ariaExpanded:null!==r?r:null},c)}function ef(){const e=Ad();return t.createElement(Oi,{ariaLabel:"close",className:"Header__NavigationButton Header__NavigationButton--Close delete",onClick:()=>e.events.emit($d)},t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}))}Qd.propTypes={menuRef:i().object,isVerticalVersion:i().bool,children:i().any,ariaExpanded:i().bool},Qd.defaultProps={menuRef:null,isVerticalVersion:!1,children:null,ariaExpanded:null},Jd.propTypes={closeMenu:i().func,isVerticalVersion:i().bool,ariaExpanded:i().bool},Jd.defaultProps={closeMenu:()=>{},isVerticalVersion:!1,ariaExpanded:null};const tf=t.createContext({isOpen:!1,setIsOpen:null}),nf=e=>t.createElement(tf.Provider,{value:e.value},e.children);nf.propTypes={value:i().object,children:i().node},nf.defaultProps={value:{},children:null};const rf=()=>(0,t.useContext)(tf);function of(){const{setIsOpen:e}=rf();return t.createElement(Oi,{ariaLabel:"Open Menu",className:"Header__NavigationButton Header__NavigationButton--Menu is-relative",onClick:()=>e(!0)},t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}),t.createElement("span",{"aria-hidden":"true"}))}function af(e){const n=d(),r=Uu(),{agent:i}=Lu(),o=Hu(),a=Yu(),s=qu(),l=$u(),{hasHeader:c,hideHeader:u}=Gu(),[f,p]=(0,t.useState)(!1),h={name:ie()(r,`[${i}].name`,""),avatar:ie()(r,`[${i}].avatar`,"")};return!c||u?null:t.createElement(hd,{menuActive:f,openMenu:()=>p(!0),closeMenu:()=>p(!1),isAgentActive:o,isSticky:e.isSticky,hasOffsetMenu:l,hasCloseButton:s,hasPersistentMenu:a,hasSeparator:ie()(n,"design.top_bar_separator"),persistentMenu:t.createElement(Jd,null),navigation:t.createElement(t.Fragment,null,l&&t.createElement(of,null),s&&t.createElement(ef,null)),description:t.createElement(t.Fragment,null,t.createElement(Nd,{title:n.brand_name,subtitle:n.tagline,avatar:n.logo}),t.createElement(Nd,{isBotInfo:!1,title:h.name,subtitle:n.text.hto_agent_profile_text.replace(/@brand/i,n.brand_name),avatar:h.avatar,avatarRounded:!0}))})}function sf({navigation:e,hasOffsetMenu:n,hasCloseButton:r}){return t.createElement(sd,{className:Qu()({"Header is-transparent":!0}),role:"navigation","aria-label":"main navigation",hasOffsetMenu:n,hasCloseButton:r},t.createElement(ld,{className:"Header__Row is-pulled-right"},t.createElement(pd,{className:"is-inline-flex are-transparent"},e)))}function lf(){const e=d(),n=$u(),r=qu(),[i,o]=(0,t.useState)(!1);return e.design.header_visible||!r&&!n?null:t.createElement(sf,{menuActive:i,openMenu:()=>o(!0),closeMenu:()=>o(!1),hasOffsetMenu:n,hasCloseButton:r,navigation:t.createElement(t.Fragment,null,n&&t.createElement(of,null),r&&t.createElement(ef,null))})}af.propTypes={isSticky:i().bool},af.defaultProps={isSticky:!1},sf.propTypes={navigation:i().element,hasOffsetMenu:i().bool,hasCloseButton:i().bool},sf.defaultProps={navigation:null,hasOffsetMenu:!1,hasCloseButton:!1};const cf=t.createContext({}),uf=e=>t.createElement(cf.Provider,{value:e.value},e.children);uf.propTypes={value:i().object,children:i().node},uf.defaultProps={value:{},children:null};const df=()=>(0,t.useContext)(cf),ff="last_action_idle",pf={lastAction:null,isOpen:!1,isInitialized:!1,type:"notification_type_error",hasCloseButton:!1,hasRetryButton:!1,hasResetButton:!1,message:null,retryCb:null,retryInterval:0},hf=t.createContext({cfg:pf,showNotification:()=>{},closeNotification:()=>{}}),{Provider:mf}=hf,bf=()=>(0,t.useContext)(hf);function gf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function vf(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?gf(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):gf(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const yf="MSG_ACTION_TYPE_SET_MESSAGES",wf="MSG_ACTION_TYPE_SET_PREVIOUS_SESSION_MESSAGES",_f="MSG_ACTION_TYPE_RESUME_PREVIOUS_SESSION",xf="MSG_ACTION_TYPE_NEW_MESSAGE",kf="MSG_ACTION_TYPE_CLEAN",Ef="MSG_ACTION_TYPE_ADD_MESSAGES",Sf="MSG_ACTION_TYPE_MARK_AS_FAILED",Cf={messages:[],previousMessages:[]};function Tf(e,t){switch(t.type){case kf:return vf(vf({},e),{},{messages:[]});case yf:return vf(vf({},e),{},{messages:[...t.messages]});case Ef:return vf(vf({},e),{},{messages:[...e.messages,...t.messages]});case wf:return vf(vf({},e),{},{previousMessages:[...t.messages]});case _f:return vf(vf({},e),{},{messages:[...e.previousMessages]});case xf:{const n=[...e.messages],r=vf({},t.message);return fe.updateMessage(n,r)||n.push(r),vf(vf({},e),{},{messages:n})}case Sf:{const{message:n,retryCb:r}=t,i=vf(vf({},n),{},{failed:!0,retryCb:r}),o=[...e.messages];return fe.updateMessage(o,i),vf(vf({},e),{},{messages:o})}}return e}const Of=t.createContext(Cf),Pf=({value:e,children:n})=>t.createElement(Of.Provider,{value:e},n);Pf.propTypes={value:i().object,children:i().node},Pf.defaultProps={value:{},children:null};const If=()=>(0,t.useContext)(Of);function Nf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Mf(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Nf(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Nf(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const Df={get:(e,t)=>{if("function"==typeof e[t]){const n=e[t];return function(...t){return n.apply(e,t)}}return e.getValue(t)}};class Af{constructor(e){this.raw=Mf({},e),this.data=Mf(Mf({},e),{},{isRevisit:null!==ie()(e,"extra.revisit",null),isWelcome:null!==ie()(e,"extra.welcome",null),isTyping:Boolean(e&&e.evaluate&&void 0!==e.samurai),isGhost:Boolean(e&&e.ghost),isEval:Boolean(e&&e.evaluate),isInsideForm:Boolean(e&&e.isInsideForm),isFinishBot:Boolean(e&&e.type===P.HIDDEN&&"finish"===e.action),isActionUnassign:Boolean(e&&"unassign"===e.action),failed:e&&!0===e.failed,hasGDPR:ie()(e,"extra.legal.state",!1),gdpr:{text:ie()(e,"extra.legal.text",""),link:ae.Z.getHref(ie()(e,"extra.legal.link","")),linkText:ie()(e,"extra.legal.linkText","")},customSubmitFn:ie()(e,"extra.input.onSubmit",null),minValue:Number(ie()(e,"extra.textarea.minValue",null)),maxValue:Number(ie()(e,"extra.textarea.maxValue",null)),prefix:ie()(e,"extra.textarea.prefix"),multiple:ie()(e,"extra.textarea.multiple",!1),buttonsAlignment:ie()(e,"extra.buttons.alignment","horizontal"),buttonsMinOptions:ie()(e,"extra.buttons.minOptions",null),buttonsMaxOptions:ie()(e,"extra.buttons.maxOptions",null),errorMessage:ie()(e,"extra.errorMessage",void 0),buttonsRandomize:ie()(e,"extra.buttons.randomize",!1),isCumulative:ie()(e,"extra.buttons.cumulative",!1),buttonsLeftTag:ie()(e,"extra.buttons.tags[0]",""),buttonsRightTag:ie()(e,"extra.buttons.tags[1]",""),mustMatchSuggestion:ie()(e,"extra.buttons.must_match_suggestion",!1),markRequired:Boolean(ie()(e,"extra.markRequired",!0)),responsiveLayout:Boolean(ie()(e,"extra.responsiveLayout",!1)),key:e?e.ui_key||e.key:"",url:e?e.url:"",inputType:oe.getInputType(e),author:fe.getAuthor(e?e.samurai:null),date:e&&e.timestamp?ut.getMessageDate(e.timestamp):null,blockID:ie()(e,"extra.id",""),className:ie()(e,"extra.className",""),submitButtonLabel:ie()(e,"send_label")}),this.initMessageText(),this.data.hasInput=null!==this.data.inputType;const t=ie()(e,"extra.textarea.dateOptions",null);this.initDateOptions(t),this.data.isInputBubbleStyled=oe.isBubbleStyled(this.data.inputType)}getValue(e){if("raw"===e)return this.raw;if(e in this.data)return this.data[e];if("string"==typeof e&&e.startsWith("isAuthor")){const t=e.substr("isAuthor".length).toLowerCase();return this.isAuthor(t)}}setValue(e,t){this.data[e]=t}toJSON(){return this.data}getRawValue(e){return this.raw[e]}getMessageType(e){const t=fe.getMessageType(this.raw,e);return t===P.INPUT?null:t}getInputInlineMessageType(){return this.getValue("hasInput")?P.INPUT:null}getPlaceholder(e){return oe.getFieldPlaceholder({message:this.raw,text:e})}getAvatar({config:e,agents:t}){return fe.getAvatar({config:e,message:this.raw,agents:t})}getButtons(){const e=oe.getButtonsFromMessage(this.raw);return this.getValue("buttonsRandomize")?e.sort((()=>Math.random()-.5)):e}getAutocompleteOptions(){return oe.getAutocompleteOptions(this.raw)}getCards(){return oe.getCards(this.raw)}isAuthor(e){return this.getValue("author")===e}isEmpty(){return 0===Object.keys(this.raw).length}getVideoUrl(){return fe.getVideoUrl(this.getValue("url"))}initMessageText(){const e=this.getMessageType(!0),{data:t}=this,{invite_message:n,message:r,rich_text:i,title:o}=t;e===P.STRUCTURED_DATA&&r?(t.messageText=ae.Z.bold(r),t.messageTextIsHTML=!0):e===P.DIALOG?(t.messageText=t&&(n||i||o)||"",t.messageTextIsHTML=!1):(t.messageText=t&&(n||i||o||r)||"",t.messageTextIsHTML=!1)}initDateOptions(e){const{data:t}=this;this.dateInputLogic=new Tl(e),t.showDatePicker=this.dateInputLogic.getShowDatePicker(),t.dateFormat=this.dateInputLogic.dateFormat,t.enabledDaysOfWeek=this.dateInputLogic.enabledDaysOfWeek}getDateFnsFormat(){return this.dateInputLogic.getDateFnsFormat()}isValidDate(e,t=!1){return!(e||!t)||this.dateInputLogic.isValidDate(e)}applyDateFormat(e){return this.dateInputLogic.applyDateFormat(e)}parseDate(e){return this.dateInputLogic.parseDate(e)}getDatePickerInitialMonth(e){return this.dateInputLogic.getInitialMonth(e)}isValidNumber(e,t,n){return oe.validNumberHelper({value:e,minText:t,minValue:this.getValue("minValue"),maxText:n,maxValue:this.getValue("maxValue")})}}function jf(e,t){if(e instanceof Af)throw new Error("TypeError: invalid arguments supplied to messageWrapper. Attempt to wrap an already wrapped message.");return new Proxy(new Af(e,t),Df)}const Rf={MSGFILTER_SUPPORTED:fe.supportedMessageFilter,MSGFILTER_VISIBLE:fe.visibleMessageFilter,MSGFILTER_BRANDMESSAGE:fe.brandMessageFilter};function Lf(e){return e.map((e=>jf(e)))}class Ff{constructor(e){this.raw=e,this.data=Lf(e),this.filteredData={}}getLastMessage(){return this.data.length>0?this.data.slice(-1)[0]:jf({})}getLastVisibleMessage(){const e=this.getSupportedMessages();return e.length>0?e.slice(-1)[0]:jf({})}getLast2VisibleMessages(){const e=this.getSupportedMessages(),[t]=e.slice(-1);return[(e.length>1?e.slice(-2)[0]:jf(null))||jf(null),t||jf(null)]}getLastBrandMessage(){const e=this.getBrandMessages();return e.length>0?e.slice(-1)[0]:jf({})}replaceVariables(e){return Lf(this.raw.map((t=>fe.withVariablesReplaced(t,e))))}getBrandMessages(){return this._filterMessages("MSGFILTER_BRANDMESSAGE")}getSupportedMessages(){return this._filterMessages("MSGFILTER_SUPPORTED")}getVisibleMessages(){return this._filterMessages("MSGFILTER_VISIBLE")}_filterMessages(e){return e in this.filteredData||(this.filteredData[e]=this.data.filter(Rf[e])),this.filteredData[e]}}function zf(e){if(e instanceof Ff)throw new Error("TypeError: invalid arguments supplied to messagesWrapper. Attempt to wrap an already wrapped messages.");return new Ff(e)}function Uf(e){return zf(fe.createSortedMessagesArray(e))}var Bf={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Vf={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Wf=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],qf={CSS:{},springs:{}};function Hf(e,t,n){return Math.min(Math.max(e,t),n)}function $f(e,t){return e.indexOf(t)>-1}function Yf(e,t){return e.apply(null,t)}var Gf={arr:function(e){return Array.isArray(e)},obj:function(e){return $f(Object.prototype.toString.call(e),"Object")},pth:function(e){return Gf.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||Gf.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return Gf.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return Gf.hex(e)||Gf.rgb(e)||Gf.hsl(e)},key:function(e){return!Bf.hasOwnProperty(e)&&!Vf.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function Kf(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function Qf(e,t){var n=Kf(e),r=Hf(Gf.und(n[0])?1:n[0],.1,100),i=Hf(Gf.und(n[1])?100:n[1],.1,100),o=Hf(Gf.und(n[2])?10:n[2],.1,100),a=Hf(Gf.und(n[3])?0:n[3],.1,100),s=Math.sqrt(i/r),l=o/(2*Math.sqrt(i*r)),c=l<1?s*Math.sqrt(1-l*l):0,u=l<1?(l*s-a)/c:-a+s;function d(e){var n=t?t*e/1e3:e;return n=l<1?Math.exp(-n*l*s)*(1*Math.cos(c*n)+u*Math.sin(c*n)):(1+u*n)*Math.exp(-n*s),0===e||1===e?e:1-n}return t?d:function(){var t=qf.springs[e];if(t)return t;for(var n=1/6,r=0,i=0;;)if(1===d(r+=n)){if(++i>=16)break}else i=0;var o=r*n*1e3;return qf.springs[e]=o,o}}function Xf(e){return void 0===e&&(e=10),function(t){return Math.ceil(Hf(t,1e-6,1)*e)*(1/e)}}var Zf,Jf,ep=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function i(e,i,o){return((t(i,o)*e+n(i,o))*e+r(i))*e}function o(e,i,o){return 3*t(i,o)*e*e+2*n(i,o)*e+r(i)}return function(t,n,r,a){if(0<=t&&t<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(t!==n||r!==a)for(var l=0;l<11;++l)s[l]=i(l*e,t,r);return function(e){return t===n&&r===a||0===e||1===e?e:i(c(e),n,a)}}function c(n){for(var a=0,l=1;10!==l&&s[l]<=n;++l)a+=e;--l;var c=a+(n-s[l])/(s[l+1]-s[l])*e,u=o(c,t,r);return u>=.001?function(e,t,n,r){for(var a=0;a<4;++a){var s=o(t,n,r);if(0===s)return t;t-=(i(t,n,r)-e)/s}return t}(n,c,t,r):0===u?c:function(e,t,n,r,o){var a,s,l=0;do{(a=i(s=t+(n-t)/2,r,o)-e)>0?n=s:t=s}while(Math.abs(a)>1e-7&&++l<10);return s}(n,a,a+e,t,r)}}}(),tp=(Zf={linear:function(){return function(e){return e}}},Jf={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=Hf(e,1,10),r=Hf(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){Jf[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(Jf).forEach((function(e){var t=Jf[e];Zf["easeIn"+e]=t,Zf["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},Zf["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},Zf["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),Zf);function np(e,t){if(Gf.fnc(e))return e;var n=e.split("(")[0],r=tp[n],i=Kf(e);switch(n){case"spring":return Qf(e,t);case"cubicBezier":return Yf(ep,i);case"steps":return Yf(Xf,i);default:return Yf(r,i)}}function rp(e){try{return document.querySelectorAll(e)}catch(e){return}}function ip(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in e){var a=e[o];t.call(r,a,o,e)&&i.push(a)}return i}function op(e){return e.reduce((function(e,t){return e.concat(Gf.arr(t)?op(t):t)}),[])}function ap(e){return Gf.arr(e)?e:(Gf.str(e)&&(e=rp(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function sp(e,t){return e.some((function(e){return e===t}))}function lp(e){var t={};for(var n in e)t[n]=e[n];return t}function cp(e,t){var n=lp(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function up(e,t){var n=lp(e);for(var r in t)n[r]=Gf.und(e[r])?t[r]:e[r];return n}function dp(e){return Gf.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:Gf.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):Gf.hsl(e)?function(e){var t,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(i[1],10)/360,a=parseInt(i[2],10)/100,s=parseInt(i[3],10)/100,l=i[4]||1;function c(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==a)t=n=r=s;else{var u=s<.5?s*(1+a):s+a-s*a,d=2*s-u;t=c(d,u,o+1/3),n=c(d,u,o),r=c(d,u,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+l+")"}(e):void 0;var t,n}function fp(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function pp(e,t){return Gf.fnc(e)?e(t.target,t.id,t.total):e}function hp(e,t){return e.getAttribute(t)}function mp(e,t,n){if(sp([n,"deg","rad","turn"],fp(t)))return t;var r=qf.CSS[t+n];if(!Gf.und(r))return r;var i=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+n;var a=100/i.offsetWidth;o.removeChild(i);var s=a*parseFloat(t);return qf.CSS[t+n]=s,s}function bp(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?mp(e,i,n):i}}function gp(e,t){return Gf.dom(e)&&!Gf.inp(e)&&(!Gf.nil(hp(e,t))||Gf.svg(e)&&e[t])?"attribute":Gf.dom(e)&&sp(Wf,t)?"transform":Gf.dom(e)&&"transform"!==t&&bp(e,t)?"css":null!=e[t]?"object":void 0}function vp(e){if(Gf.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;t=r.exec(n);)i.set(t[1],t[2]);return i}}function yp(e,t,n,r){var i=$f(t,"scale")?1:0+function(e){return $f(e,"translate")||"perspective"===e?"px":$f(e,"rotate")||$f(e,"skew")?"deg":void 0}(t),o=vp(e).get(t)||i;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),r?mp(e,o,r):o}function wp(e,t,n,r){switch(gp(e,t)){case"transform":return yp(e,t,r,n);case"css":return bp(e,t,n);case"attribute":return hp(e,t);default:return e[t]||0}}function _p(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=fp(e)||0,i=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function xp(e,t){if(Gf.col(e))return dp(e);if(/\s/g.test(e))return e;var n=fp(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function kp(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Ep(e){for(var t,n=e.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=kp(t,o)),t=o}return r}function Sp(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*hp(e,"r")}(e);case"rect":return function(e){return 2*hp(e,"width")+2*hp(e,"height")}(e);case"line":return function(e){return kp({x:hp(e,"x1"),y:hp(e,"y1")},{x:hp(e,"x2"),y:hp(e,"y2")})}(e);case"polyline":return Ep(e);case"polygon":return function(e){var t=e.points;return Ep(e)+kp(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function Cp(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;Gf.svg(t)&&Gf.svg(t.parentNode);)t=t.parentNode;return t}(e),i=r.getBoundingClientRect(),o=hp(r,"viewBox"),a=i.width,s=i.height,l=n.viewBox||(o?o.split(" "):[0,0,a,s]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:a,h:s,vW:l[2],vH:l[3]}}function Tp(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var i=Cp(e.el,e.svg),o=r(),a=r(-1),s=r(1),l=n?1:i.w/i.vW,c=n?1:i.h/i.vH;switch(e.property){case"x":return(o.x-i.x)*l;case"y":return(o.y-i.y)*c;case"angle":return 180*Math.atan2(s.y-a.y,s.x-a.x)/Math.PI}}function Op(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=xp(Gf.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:Gf.str(e)||t?r.split(n):[]}}function Pp(e){return ip(e?op(Gf.arr(e)?e.map(ap):ap(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function Ip(e){var t=Pp(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:vp(e)}}}))}function Np(e,t){var n=lp(t);if(/^spring/.test(n.easing)&&(n.duration=Qf(n.easing)),Gf.arr(e)){var r=e.length;2===r&&!Gf.obj(e[0])?e={value:e}:Gf.fnc(t.duration)||(n.duration=t.duration/r)}var i=Gf.arr(e)?e:[e];return i.map((function(e,n){var r=Gf.obj(e)&&!Gf.pth(e)?e:{value:e};return Gf.und(r.delay)&&(r.delay=n?0:t.delay),Gf.und(r.endDelay)&&(r.endDelay=n===i.length-1?t.endDelay:0),r})).map((function(e){return up(e,n)}))}function Mp(e,t){var n=[],r=t.keyframes;for(var i in r&&(t=up(function(e){for(var t=ip(op(e.map((function(e){return Object.keys(e)}))),(function(e){return Gf.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var i=t[r];n[i]=e.map((function(e){var t={};for(var n in e)Gf.key(n)?n==i&&(t.value=e[n]):t[n]=e[n];return t}))},i=0;i<t.length;i++)r(i);return n}(r),t)),t)Gf.key(i)&&n.push({name:i,tweens:Np(t[i],e)});return n}function Dp(e,t){var n;return e.tweens.map((function(r){var i=function(e,t){var n={};for(var r in e){var i=pp(e[r],t);Gf.arr(i)&&1===(i=i.map((function(e){return pp(e,t)}))).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),o=i.value,a=Gf.arr(o)?o[1]:o,s=fp(a),l=wp(t.target,e.name,s,t),c=n?n.to.original:l,u=Gf.arr(o)?o[0]:c,d=fp(u)||fp(l),f=s||d;return Gf.und(a)&&(a=c),i.from=Op(u,f),i.to=Op(_p(a,u),f),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=np(i.easing,i.duration),i.isPath=Gf.pth(o),i.isPathTargetInsideSVG=i.isPath&&Gf.svg(t.target),i.isColor=Gf.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}var Ap={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,i){if(r.list.set(t,n),t===r.last||i){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function jp(e,t){Ip(e).forEach((function(e){for(var n in t){var r=pp(t[n],e),i=e.target,o=fp(r),a=wp(i,n,o,e),s=_p(xp(r,o||fp(a)),a),l=gp(i,n);Ap[l](i,n,s,e.transforms,!0)}}))}function Rp(e,t){return ip(op(e.map((function(e){return t.map((function(t){return function(e,t){var n=gp(e.target,t.name);if(n){var r=Dp(t,e),i=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(e,t)}))}))),(function(e){return!Gf.und(e)}))}function Lp(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,i.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,i.endDelay=n?i.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,i}var Fp=0;var zp=[],Up=function(){var e;function t(n){for(var r=zp.length,i=0;i<r;){var o=zp[i];o.paused?(zp.splice(i,1),r--):(o.tick(n),i++)}e=i>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){Vp.suspendWhenDocumentHidden&&(Bp()?e=cancelAnimationFrame(e):(zp.forEach((function(e){return e._onDocumentVisibility()})),Up()))})),function(){e||Bp()&&Vp.suspendWhenDocumentHidden||!(zp.length>0)||(e=requestAnimationFrame(t))}}();function Bp(){return!!document&&document.hidden}function Vp(e){void 0===e&&(e={});var t,n=0,r=0,i=0,o=0,a=null;function s(e){var t=window.Promise&&new Promise((function(e){return a=e}));return e.finished=t,t}var l=function(e){var t=cp(Bf,e),n=cp(Vf,e),r=Mp(n,e),i=Ip(e.targets),o=Rp(i,r),a=Lp(o,n),s=Fp;return Fp++,up(t,{id:s,children:[],animatables:i,animations:o,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}(e);s(l);function c(){var e=l.direction;"alternate"!==e&&(l.direction="normal"!==e?"normal":"reverse"),l.reversed=!l.reversed,t.forEach((function(e){return e.reversed=l.reversed}))}function u(e){return l.reversed?l.duration-e:e}function d(){n=0,r=u(l.currentTime)*(1/Vp.speed)}function f(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){for(var t=0,n=l.animations,r=n.length;t<r;){var i=n[t],o=i.animatable,a=i.tweens,s=a.length-1,c=a[s];s&&(c=ip(a,(function(t){return e<t.end}))[0]||c);for(var u=Hf(e-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(u)?1:c.easing(u),f=c.to.strings,p=c.round,h=[],m=c.to.numbers.length,b=void 0,g=0;g<m;g++){var v=void 0,y=c.to.numbers[g],w=c.from.numbers[g]||0;v=c.isPath?Tp(c.value,d*y,c.isPathTargetInsideSVG):w+d*(y-w),p&&(c.isColor&&g>2||(v=Math.round(v*p)/p)),h.push(v)}var _=f.length;if(_){b=f[0];for(var x=0;x<_;x++){f[x];var k=f[x+1],E=h[x];isNaN(E)||(b+=k?E+k:E+" ")}}else b=h[0];Ap[i.type](o.target,i.property,b,o.transforms),i.currentValue=b,t++}}function h(e){l[e]&&!l.passThrough&&l[e](l)}function m(e){var d=l.duration,m=l.delay,b=d-l.endDelay,g=u(e);l.progress=Hf(g/d*100,0,100),l.reversePlayback=g<l.currentTime,t&&function(e){if(l.reversePlayback)for(var n=o;n--;)f(e,t[n]);else for(var r=0;r<o;r++)f(e,t[r])}(g),!l.began&&l.currentTime>0&&(l.began=!0,h("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,h("loopBegin")),g<=m&&0!==l.currentTime&&p(0),(g>=b&&l.currentTime!==d||!d)&&p(d),g>m&&g<b?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,h("changeBegin")),h("change"),p(g)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,h("changeComplete")),l.currentTime=Hf(g,0,d),l.began&&h("update"),e>=d&&(r=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(n=i,h("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,h("loopComplete"),h("complete"),!l.passThrough&&"Promise"in window&&(a(),s(l)))))}return l.reset=function(){var e=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===e,l.remaining=l.loop,t=l.children;for(var n=o=t.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===e&&1===l.loop)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=d,l.set=function(e,t){return jp(e,t),l},l.tick=function(e){i=e,n||(n=i),m((i+(r-n))*Vp.speed)},l.seek=function(e){m(u(e))},l.pause=function(){l.paused=!0,d()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,zp.push(l),d(),Up())},l.reverse=function(){c(),l.completed=!l.reversed,d()},l.restart=function(){l.reset(),l.play()},l.remove=function(e){qp(Pp(e),l)},l.reset(),l.autoplay&&l.play(),l}function Wp(e,t){for(var n=t.length;n--;)sp(e,t[n].animatable.target)&&t.splice(n,1)}function qp(e,t){var n=t.animations,r=t.children;Wp(e,n);for(var i=r.length;i--;){var o=r[i],a=o.animations;Wp(e,a),a.length||o.children.length||r.splice(i,1)}n.length||r.length||t.pause()}Vp.version="3.2.1",Vp.speed=1,Vp.suspendWhenDocumentHidden=!0,Vp.running=zp,Vp.remove=function(e){for(var t=Pp(e),n=zp.length;n--;){qp(t,zp[n])}},Vp.get=wp,Vp.set=jp,Vp.convertPx=mp,Vp.path=function(e,t){var n=Gf.str(e)?rp(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:Cp(n),totalLength:Sp(n)*(r/100)}}},Vp.setDashoffset=function(e){var t=Sp(e);return e.setAttribute("stroke-dasharray",t),t},Vp.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?np(t.easing):null,i=t.grid,o=t.axis,a=t.from||0,s="first"===a,l="center"===a,c="last"===a,u=Gf.arr(e),d=u?parseFloat(e[0]):parseFloat(e),f=u?parseFloat(e[1]):0,p=fp(u?e[1]:e)||0,h=t.start||0+(u?d:0),m=[],b=0;return function(e,t,g){if(s&&(a=0),l&&(a=(g-1)/2),c&&(a=g-1),!m.length){for(var v=0;v<g;v++){if(i){var y=l?(i[0]-1)/2:a%i[0],w=l?(i[1]-1)/2:Math.floor(a/i[0]),_=y-v%i[0],x=w-Math.floor(v/i[0]),k=Math.sqrt(_*_+x*x);"x"===o&&(k=-_),"y"===o&&(k=-x),m.push(k)}else m.push(Math.abs(a-v));b=Math.max.apply(Math,m)}r&&(m=m.map((function(e){return r(e/b)*b}))),"reverse"===n&&(m=m.map((function(e){return o?e<0?-1*e:-e:Math.abs(b-e)})))}return h+(u?(f-d)/b:d)*(Math.round(100*m[t])/100)+p}},Vp.timeline=function(e){void 0===e&&(e={});var t=Vp(e);return t.duration=0,t.add=function(n,r){var i=zp.indexOf(t),o=t.children;function a(e){e.passThrough=!0}i>-1&&zp.splice(i,1);for(var s=0;s<o.length;s++)a(o[s]);var l=up(n,cp(Vf,e));l.targets=l.targets||e.targets;var c=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=Gf.und(r)?c:_p(r,c),a(t),t.seek(l.timelineOffset);var u=Vp(l);a(u),o.push(u);var d=Lp(o,e);return t.delay=d.delay,t.endDelay=d.endDelay,t.duration=d.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},Vp.easing=np,Vp.penner=tp,Vp.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var Hp=Vp;class $p{constructor({document:e,filterSelector:t,mutatingElement:n,targetSelector:r,window:i}){this.document=e,this.filterSelector=t,this.mutatingElement=n,this.targetSelector=r,this.window=i,this._onMutation=this._onMutation.bind(this);const o=new MutationObserver(this._onMutation);this.observer=o.observe(n,{subtree:!0,childList:!0})}destroy(){this.observer&&this.observer.disconnect()}_onMutation(e){e.forEach((e=>{e.addedNodes.forEach((e=>{if("querySelector"in e&&e.matches(this.filterSelector)){const t=e.querySelector(this.targetSelector);if(t){const e=t.offsetHeight+t.offsetTop+3;Hp({targets:t,translateY:[-e,0],duration:500,easing:"easeInOutQuad"})}}}))}))}}class Yp{constructor({scrollingElement:e,mutatingElement:t,inputInlineRef:n,spacerRef:r,bodyRef:i,isModeNative:o,autoScrollHandler:a}){this.scrollingElement=e,this.mutatingElement=t,this.inputInlineRef=n,this.spacerRef=r,this.bodyRef=i,this.isModeNative=o,this.autoScrollHandler=a,this.auto=!0,this.behavior="smooth",this._onUserScroll=this._onUserScroll.bind(this),this._onMutation=this._onMutation.bind(this),this._attachScrollEvents=this._attachScrollEvents.bind(this),this._dettachScrollEvents=this._dettachScrollEvents.bind(this),this._onResize=this._onResize.bind(this),this._scrollTo=this._scrollTo.bind(this);const s=new MutationObserver(this._onMutation);this.observer=s.observe(t,{attributes:!1,childList:!0,characterData:!1,subtree:!0}),this.animation=null,this._attachScrollEvents(),window.addEventListener("resize",this._onResize)}setBehavior(e){this.behavior=e}destroy(){this.observer&&this.observer.disconnect(),this._dettachScrollEvents(),window.removeEventListener("resize",this._onResize)}_attachScrollEvents(){this.scrollingElement.addEventListener("wheel",this._onUserScroll),this.scrollingElement.addEventListener("touchmove",this._onUserScroll)}_dettachScrollEvents(){this.scrollingElement.removeEventListener("wheel",this._onUserScroll),this.scrollingElement.removeEventListener("touchmove",this._onUserScroll)}_onUserScroll(){this.animation&&this.animation.pause(),this.auto=!1,this._dettachScrollEvents(),setTimeout((()=>{this.auto=!0,this._attachScrollEvents()}),1e3)}_onMutation(e){const t=Array.isArray(e)&&e.some((e=>e.target.classList.contains("is-autoscroll-mutation-target")));this.auto&&t&&(this.animation&&!this.animation.completed&&this.animation.pause(),setTimeout((()=>this._doAutoScroll()),200))}_onResize(){this.auto&&this._doAutoScroll()}_doAutoScroll(){var e,t,n,r,i,o;const a=this.scrollingElement.scrollHeight,s=this.isModeNative?window.innerHeight:(null===(e=this.bodyRef)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.clientHeight)||0,l=a-s-((null===(n=this.spacerRef)||void 0===n||null===(r=n.current)||void 0===r?void 0:r.clientHeight)||0)-((null===(i=this.inputInlineRef)||void 0===i||null===(o=i.current)||void 0===o?void 0:o.scrollHeight)||0)+Math.round(.6*s);a>s+150&&l>this.scrollingElement.scrollTop&&l>=0&&this.scrollingElement.scrollTop>=0&&this._scrollTo(l)}_scrollTo(e){this.animation=Hp({targets:this.scrollingElement,scrollTop:e,duration:1e3,easing:"easeOutQuad"}),this.autoScrollHandler&&this.autoScrollHandler(e)}}const Gp="Header--isSticky",Kp="Body--isSticky";class Qp{constructor({scrollingElement:e,header:t,body:n}){this.scrollingElement=e,this.header=t,this.body=n,this.clientY=null,this.onUserScroll=this.onUserScroll.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onAutoScroll=this.onAutoScroll.bind(this),this.scrollingElement.addEventListener("wheel",this.onUserScroll,!1),this.scrollingElement.addEventListener("touchstart",this.onTouchStart,!1),this.scrollingElement.addEventListener("touchend",this.onTouchEnd,!1)}getAutoScrollHandler(){return this.onAutoScroll}onAutoScroll(e){this.onUserScroll({deltaY:e})}onUserScroll(e){e.deltaY>=0?(this.header.classList.add(Gp),this.body.classList.add(Kp)):(this.header.classList.remove(Gp),this.body.classList.remove(Kp))}onTouchStart(e){this.clientY=e.touches[0].clientY}onTouchEnd(e){const t=e.changedTouches[0].clientY-this.clientY;this.onUserScroll({deltaY:-t})}destroy(){this.scrollingElement.removeEventListener("wheel",this.onUserScroll),this.scrollingElement.removeEventListener("touchstart",this.onTouchStart),this.scrollingElement.removeEventListener("touchend",this.onTouchEnd)}}class Xp{constructor({document:e,iframe:t,selector:n,window:r}){this.document=e,this.iframe=t,this.selector=n,this.window=r,this._onMutation=this._onMutation.bind(this);const i=new MutationObserver(this._onMutation);this.observer=i.observe(e,{subtree:!0,childList:!0})}destroy(){this.observer&&this.observer.disconnect()}_onMutation(e){this._landbotFrameHasFocus()&&e.forEach((e=>{e.addedNodes.forEach((e=>{if("querySelector"in e){const t=e.querySelector(this.selector);t&&setTimeout((()=>{t.focus()}),200)}}))}))}_landbotFrameHasFocus(){return window.top===this.window||window.top.document.activeElement===this.iframe}}const Zp=gi.div`
  margin: 0 auto;
  text-align: center;
  margin-top: ${e=>id(e.theme.initial_vars.vertical_unit)};
  display: none;

  .button {
    display: inline-block;
  }
`;function Jp(e){return t.createElement(Zp,{className:"LoadMore__container"},t.createElement("button",{className:Qu()({button:!0,"is-loading":e.isFetching}),type:"button",onClick:e.onClick},"LOAD MORE"))}function eh(){const{isFetchingMore:e,fetchMore:n}=function(){const[e,n]=(0,t.useState)(!1),{addMessages:r}=If(),i=Ad();return{isFetchingMore:e,fetchMoreMessages:()=>{n(!0),i.getMoreMessages().then(r).catch(console.error).finally((()=>n(!1)))}}}();return t.createElement(Jp,{isFetching:e,onClick:n})}Jp.propTypes={isFetching:i().bool,onClick:i().func},Jp.defaultProps={isFetching:!1,onClick:()=>{}};const th=55,nh=95,rh=({hasNavBarFixedTop:e,hasPersistentMenu:t},n)=>{let r=50;return e&&(r+=n?th:nh),n&&t&&(r+=55),`${r}px`},ih=gi.div`
  -webkit-overflow-scrolling: touch;
  ${()=>Du()===n.NATIVE?"max-height: auto;\n       overflow: visible;\n      ":"max-height: 100%;\n     overflow: auto;"}

  @media ${td} {
    padding-top: ${e=>rh(e,!0)};
    padding-bottom: ${0}px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media ${Ju} {
    padding-top: ${e=>rh(e,!1)};
  }
  ${e=>e.hasInputFixed?Jr`
          padding-bottom: ${0};
        `:null}
`;function oh({hasHeader:e,hasAgentAssigned:n,hasPersistentMenu:r,isConnectionOk:i,children:o}){return t.createElement(ih,{className:Qu()({Chat:!0,"Chat--hasNavBarFixedTop":e,"Chat--hasInputFixed":n,"Chat--hasPersistentMenu":r,"js-auto-scroll":!0,"js-revisit-fade":!0,"is-autoscroll-mutation-target":!0,"are-disabled":!i}),hasNavBarFixedTop:e,hasPersistentMenu:r},o)}oh.propTypes={hasHeader:i().bool,hasAgentAssigned:i().bool,hasPersistentMenu:i().bool,isConnectionOk:i().bool,children:i().node},oh.defaultProps={hasHeader:!1,hasAgentAssigned:!1,hasPersistentMenu:!1,isConnectionOk:!0,children:null};const ah=gi.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${Ju} {  
    height: 300px;
  }
`;function sh(e){return t.createElement(ah,{className:"ChatLoaderContainer"},e.children)}sh.propTypes={children:i().node},sh.defaultProps={children:null};const lh=bi`
  0%,
  80%,
  100% {
    box-shadow: 0 1em 0 -1em;
  }
  40% {
    box-shadow: 0 1em 0 -0.2em;
  }
`,ch=gi.div`
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  pointer-events: none;

  &::before,
  &::after,
  & {
    border-radius: 50%;
    animation-fill-mode: both;
    animation: ${lh} 1.8s infinite ease-in-out;
  }

  & {
    position: relative;
    transform: translateZ(0);
    animation-delay: -0.16s;
    top: -1em;

    &::before {
      right: 100%;
      animation-delay: -0.32s;
    }

    &::after {
      left: 100%;
    }

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: inherit;
      height: inherit;
    }
  }

  color: ${({theme:e})=>e.design.form_buttons_background_color};
`;function uh(e){return t.createElement(ch,{className:Qu()("lb-loader",e.className)})}uh.propTypes={className:i().string},uh.defaultProps={className:""};var dh=uh,fh=function(e,t){return(fh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function ph(e,t){function n(){this.constructor=e}fh(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function hh(e){return"function"==typeof e}var mh=!1,bh={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack;mh=e},get useDeprecatedSynchronousErrorHandling(){return mh}};function gh(e){setTimeout((function(){throw e}),0)}var vh={closed:!0,next:function(e){},error:function(e){if(bh.useDeprecatedSynchronousErrorHandling)throw e;gh(e)},complete:function(){}},yh=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}();function wh(e){return null!==e&&"object"==typeof e}var _h=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),xh=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this,r=n._parentOrParents,i=n._ctorUnsubscribe,o=n._unsubscribe,a=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var s=0;s<r.length;++s){r[s].remove(this)}if(hh(o)){i&&(this._unsubscribe=void 0);try{o.call(this)}catch(e){t=e instanceof _h?kh(e.errors):[e]}}if(yh(a)){s=-1;for(var l=a.length;++s<l;){var c=a[s];if(wh(c))try{c.unsubscribe()}catch(e){t=t||[],e instanceof _h?t=t.concat(kh(e.errors)):t.push(e)}}}if(t)throw new _h(t)}},e.prototype.add=function(t){var n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof e){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function kh(e){return e.reduce((function(e,t){return e.concat(t instanceof _h?t.errors:t)}),[])}var Eh=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),Sh=function(e){function t(n,r,i){var o=e.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=vh;break;case 1:if(!n){o.destination=vh;break}if("object"==typeof n){n instanceof t?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new Ch(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new Ch(o,n,r,i)}return o}return ph(t,e),t.prototype[Eh]=function(){return this},t.create=function(e,n,r){var i=new t(e,n,r);return i.syncErrorThrowable=!1,i},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(xh),Ch=function(e){function t(t,n,r,i){var o,a=e.call(this)||this;a._parentSubscriber=t;var s=a;return hh(n)?o=n:n&&(o=n.next,r=n.error,i=n.complete,n!==vh&&(hh((s=Object.create(n)).unsubscribe)&&a.add(s.unsubscribe.bind(s)),s.unsubscribe=a.unsubscribe.bind(a))),a._context=s,a._next=o,a._error=r,a._complete=i,a}return ph(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;bh.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,n=bh.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):gh(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;gh(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};bh.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),bh.useDeprecatedSynchronousErrorHandling)throw e;gh(e)}},t.prototype.__tryOrSetError=function(e,t,n){if(!bh.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return bh.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(gh(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(Sh);var Th=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function Oh(e){return e}function Ph(e){return 0===e.length?Oh:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var Ih=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r=this.operator,i=function(e,t,n){if(e){if(e instanceof Sh)return e;if(e[Eh])return e[Eh]()}return e||t||n?new Sh(e,t,n):new Sh(vh)}(e,t,n);if(r?i.add(r.call(i,this.source)):i.add(this.source||bh.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),bh.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){bh.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(e){for(;e;){var t=e,n=t.closed,r=t.destination,i=t.isStopped;if(n||i)return!1;e=r&&r instanceof Sh?r:null}return!0}(e)?console.warn(t):e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=Nh(t))((function(t,r){var i;i=n.subscribe((function(t){try{e(t)}catch(e){r(e),i&&i.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[Th]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:Ph(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=Nh(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function Nh(e){if(e||(e=bh.Promise||Promise),!e)throw new Error("no Promise impl found");return e}var Mh=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}(),Dh=function(e){function t(t,n){var r=e.call(this)||this;return r.subject=t,r.subscriber=n,r.closed=!1,r}return ph(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},t}(xh),Ah=function(e){function t(t){var n=e.call(this,t)||this;return n.destination=t,n}return ph(t,e),t}(Sh),jh=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return ph(t,e),t.prototype[Eh]=function(){return new Ah(this)},t.prototype.lift=function(e){var t=new Rh(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new Mh;if(!this.isStopped)for(var t=this.observers,n=t.length,r=t.slice(),i=0;i<n;i++)r[i].next(e)},t.prototype.error=function(e){if(this.closed)throw new Mh;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,n=t.length,r=t.slice(),i=0;i<n;i++)r[i].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new Mh;this.isStopped=!0;for(var e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new Mh;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new Mh;return this.hasError?(e.error(this.thrownError),xh.EMPTY):this.isStopped?(e.complete(),xh.EMPTY):(this.observers.push(e),new Dh(this,e))},t.prototype.asObservable=function(){var e=new Ih;return e.source=this,e},t.create=function(e,t){return new Rh(e,t)},t}(Ih),Rh=function(e){function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return ph(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):xh.EMPTY},t}(jh),Lh=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return ph(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r=void 0;try{this.work(e)}catch(e){n=!0,r=!!e&&e||new Error(e)}if(n)return this.unsubscribe(),r},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,n){return e.call(this)||this}return ph(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(xh)),Fh=function(){function e(t,n){void 0===n&&(n=e.now),this.SchedulerAction=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},e.now=function(){return Date.now()},e}(),zh=new(function(e){function t(n,r){void 0===r&&(r=Fh.now);var i=e.call(this,n,(function(){return t.delegate&&t.delegate!==i?t.delegate.now():r()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return ph(t,e),t.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),t.delegate&&t.delegate!==this?t.delegate.schedule(n,r,i):e.prototype.schedule.call(this,n,r,i)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(Fh))(Lh);var Uh=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new Bh(e,this.dueTime,this.scheduler))},e}(),Bh=function(e){function t(t,n,r){var i=e.call(this,t)||this;return i.dueTime=n,i.scheduler=r,i.debouncedSubscription=null,i.lastValue=null,i.hasValue=!1,i}return ph(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(Vh,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(Sh);function Vh(e){e.debouncedNext()}function Wh(){const[e,n]=(0,t.useState)(!1),r=Ad(),{awaiting_loader:i}=d();(0,t.useEffect)((()=>{const e=()=>n(!1);return r.events.on(Vd,e),r.events.on(zd,e),()=>{r.events.off(Vd,e),r.events.off(zd,e)}}),[n,r.pipelines.$readableSequence,r.events]),(0,t.useEffect)((()=>{const e=new jh,t=r.pipelines.$readableSequence.pipe((i=2e3,void 0===o&&(o=zh),function(e){return e.lift(new Uh(i,o))})).subscribe((()=>e.next(!0)));var i,o;const a=e.subscribe((()=>n(!0)));return()=>{t.unsubscribe(),a.unsubscribe(),n(!1)}}),[n,r.pipelines.$readableSequence]);const{messagesWrapper:o}=If(),a=o.getLastMessage(),s=Hu();return i&&e&&!s&&!a.isEmpty()&&!a.hasInput&&!a.isFinishBot&&!a.isActionUnassign}var qh=gi.div`
  ${ch} {
    left: 1em;
  }
`;const Hh=gi.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${Ju} {
    margin: 0 auto;
    max-width: ${e=>e.theme.messages_max_width};
  }
`,$h=gi.div`
  display: flex;
  width: 100%;
  margin-bottom: 6px;

  &.is-end {
    margin-bottom: 10px;
  }

  @media ${Ju} {
    padding-right: 10px;
  }

  &.is-medium-width {
    width: 100%;

    .msg-grid-row {
      width: 100%;
    }

    .msg-grid-center {
      width: 410px;
    }
  }

  &.is-reverse {
    justify-content: flex-end;
    padding-right: 0;

    .msg-grid-left {
      display: none;
      margin-left: 1rem;
      margin-right: 0;
    }
  }
  &.Message__message-failed-text,
  &.Message__message-failed-retry-link {
    color: ${({theme:e})=>e.design.form_help_color};
  }
`,Yh=gi.article`
  display: inline-flex;
  position: relative;
  align-items: flex-end;
  max-width: 100%;

  &.is-full-width-content {
    @media ${td} {
      display: block;
    }
    flex-grow: 1;
    .msg-grid-center {
      flex-grow: 1;
    }
  }
`,Gh=gi.div`
  margin-right: ${e=>id(e.theme.initial_vars.horizontal_unit)};
  text-align: center;
  position: relative;
  &.is-invisible {
    visibility: hidden;
  }

  @media ${Ju} {
    margin-right: ${e=>e.theme.message_left_margin_right};
    &.has-fixed-width {
      width: ${e=>e.theme.msg_grid_left_fixed_width};
    }
  }
`,Kh=gi.div`
  position: relative;
  min-width: 0;
`,Qh=gi.div`
  align-self: center;
`,Xh=gi.div`
  position: relative;
  width: 100%;
  margin-top: ${e=>id(e.theme.initial_vars.vertical_unit,10)};
  margin-bottom: ${e=>id(e.theme.initial_vars.vertical_unit,1.5)};

  @media ${Ju} {
    margin-top: ${e=>id(e.theme.initial_vars.vertical_unit,4.75)};
    margin-bottom: ${e=>id(e.theme.initial_vars.vertical_unit,1.5)};
  }
`,Zh=(e,t)=>{const[n,...r]=e;return Qu()([n,t,...r])},Jh=({className:e,classNames:n,containerRef:r,children:i})=>t.createElement(Hh,{className:Zh([...n,e],"msg-grid-container"),ref:r},i);Jh.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),className:i().string,children:i().node,containerRef:i().object},Jh.defaultProps={classNames:[],className:"",children:null,containerRef:null};const em=({containerClassNames:e,classNames:n,id:r,author:i,type:o,block:a,inputType:s,children:l})=>t.createElement($h,{id:r,className:Zh(e,"msg-grid-row-container"),"data-author":i,"data-type":o,"data-block":a,"data-input":s},t.createElement(Yh,{className:Zh(n,"msg-grid-row")},l));em.propTypes={containerClassNames:i().arrayOf(i().oneOfType([i().string,i().bool])),classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),id:i().string,author:i().string,type:i().string,block:i().string,inputType:i().string,children:i().node},em.defaultProps={containerClassNames:[],classNames:[],id:null,author:null,type:null,block:null,inputType:null,children:null};const tm=({classNames:e,children:n})=>t.createElement(Gh,{className:Zh(e,"msg-grid-left")},n);tm.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),children:i().node},tm.defaultProps={classNames:[],children:null};const nm=({classNames:e,children:n})=>t.createElement(Kh,{className:Zh(e,"msg-grid-center")},n);nm.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),children:i().node},nm.defaultProps={classNames:[],children:null};const rm=({classNames:e,children:n})=>t.createElement(Qh,{className:Zh(e,"msg-grid-right")},n);rm.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),children:i().node},rm.defaultProps={classNames:[],children:null};const im=({classNames:e,children:n})=>t.createElement(Xh,{className:Zh([...e],"msg-grid-fullwidth-row")},n);im.propTypes={classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),children:i().node},im.defaultProps={classNames:[],children:null};const om=({children:e,hasLeftColumn:n})=>t.createElement(em,null,n&&t.createElement(tm,{classNames:["has-fixed-width","is-hidden-mobile"]}),t.createElement(nm,null,e));function am(){const{design:{avatar_enabled:e}}=d();return Wh()&&t.createElement(Jh,{className:"is-autoscroll-mutation-target"},t.createElement(om,{hasLeftColumn:e},t.createElement(qh,{className:"AwaitLoaderContainer"},t.createElement(dh,null))))}om.propTypes={children:i().node,hasLeftColumn:i().bool},om.defaultProps={children:null,hasLeftColumn:!0};const sm="90px",lm="150px",cm="150px",um="180px",dm=gi.div`
  width: 100%;

  @media ${td} {
    height: ${e=>e.hasInputFixed?cm:sm};
  }

  @media ${Ju} {
    height: ${e=>e.hasInputFixed?um:lm};
  }
`;function fm({hasInputFixed:e,spacerRef:n}){return t.createElement(dm,{hasInputFixed:e,className:"Chat__spacer",ref:n})}function pm({children:e}){return t.createElement(Jh,{classNames:["Messages","is-autoscroll-mutation-target"]},e)}function hm(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}fm.propTypes={hasInputFixed:i().bool,spacerRef:i().object},fm.defaultProps={hasInputFixed:!1,spacerRef:null},pm.propTypes={children:i().node},pm.defaultProps={children:null};const mm=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 64 64"},t.createElement("g",{fill:"#42ade2"},t.createElement("path",{d:"M16.1 48.5c-.5-.1-.9-.2-1.4-.4c-.5-.2-.9-.3-1.3-.5c-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7C6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9c.1-.5.2-.9.3-1.4c.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4c.1.9.3 1.8.5 2.6c.4 1.7 1 3.3 1.9 4.8c.9 1.5 1.9 2.9 3.2 4.2c.6.6 1.3 1.2 2 1.8c.3.3.7.6 1.1.9l1 1"}),t.createElement("path",{d:"M15.8 52.1c-.3.2-.7.3-1.1.4c-.4.1-.7.2-1.1.2c-.7.1-1.5.2-2.3.1c-1.5-.1-3.1-.5-4.4-1.2c-1.4-.7-2.6-1.8-3.4-3.1c-.4-.6-.8-1.3-1.1-2c-.1-.3-.2-.7-.3-1.1c0-.3-.1-.6-.1-1c.3.3.5.6.7.8c.3.3.5.6.7.8c.5.5.9 1 1.4 1.4c1 .9 2 1.7 3.2 2.3c1.1.6 2.4 1.1 3.6 1.5c.6.2 1.3.3 2 .5c.3.1.7.1 1 .2c.5.1.8.1 1.2.2"}),t.createElement("path",{d:"M38.4 3.5c.5.1.9.3 1.4.5c.5.2.9.4 1.3.6c.9.5 1.7 1 2.5 1.6c1.6 1.2 2.9 2.8 3.8 4.6c.9 1.8 1.4 3.8 1.4 5.7c0 1-.1 1.9-.3 2.9c-.1.5-.2.9-.4 1.4c-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5c-.8-1.6-1.8-3-3-4.3c-.6-.7-1.3-1.3-1.9-2c-.3-.3-.7-.6-1.1-.9l-1-.9"}),t.createElement("path",{d:"M47.1 3.1c.4.1.7.2 1 .4c.3.1.7.3 1 .5c.6.4 1.2.8 1.8 1.3c1.1 1 2 2.2 2.5 3.6c.6 1.4.8 2.9.6 4.4c-.1.7-.3 1.4-.5 2.1c-.1.3-.3.7-.4 1c-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9c-.2-1.3-.4-2.5-.9-3.6c-.5-1.2-1.1-2.2-1.8-3.3c-.4-.5-.8-1.1-1.2-1.6c-.2-.3-.4-.5-.7-.8c-.2-.5-.5-.8-.7-1"})),t.createElement("g",{fill:"#ffdd67"},t.createElement("path",{d:"M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3l7-3.3l-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9"}),t.createElement("path",{d:"M43.1 38.9l7.4-3.5l-14.4-30c-1-2-3.4-2.9-5.5-1.9c-2 1-2.9 3.4-1.9 5.5l14.4 29.9"})),t.createElement("path",{d:"M30.7 3.4c-.2.1-.4.2-.6.4c1.9-.5 3.9.4 4.8 2.2l14.4 30l1.3-.6l-14.4-30c-1-2.1-3.4-3-5.5-2",fill:"#eba352"}),t.createElement("path",{d:"M27.8 46.2l7.7-3.7l-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7",fill:"#ffdd67"}),t.createElement("path",{d:"M15.1 9.9c-.2.1-.4.2-.6.4c1.9-.5 4.1.4 5 2.3l9.1 19.1l2.2 1.3l-10-21c-1-2.2-3.5-3.1-5.7-2.1",fill:"#eba352"}),t.createElement("path",{d:"M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2c-2.1 1-3 3.6-2 5.7l14.7 30.6",fill:"#ffdd67"}),t.createElement("g",{fill:"#eba352"},t.createElement("path",{d:"M21.6 3.7c-.2.1-.4.3-.6.4c1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1"}),t.createElement("path",{d:"M10 18c-.2.1-.4.2-.6.4c1.8-.5 3.7.4 4.5 2.2l7.5 15.7l2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"})),t.createElement("path",{d:"M60.8 15c-2.7-2.1-7.1.2-9.3 7.4c-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5c8.6 7.4 28.7-.5 29.6-19.6c.5-11.1 7.4-21.2 4.5-23.5",fill:"#ffdd67"}),t.createElement("g",{fill:"#eba352"},t.createElement("path",{d:"M60.8 15c-.5-.4-1.1-.6-1.7-.7c.1.1.3.1.4.2c3 2.3-.1 7.6-1.8 12.4c-1.4 3.8-2.6 7.7-2.4 11.5c.8 16.6-15.9 24.5-25.9 21.5c9.8 4.1 28-3.7 27.2-21c-.2-3.8.9-7.5 2.4-11.5c1.6-4.8 4.7-10.1 1.8-12.4"}),t.createElement("path",{d:"M47.5 30c-6.2.7-15.3 9.6-8.9 19.3c-4.7-9.8 3-16.4 7.9-18.7c.5-.4 1-.6 1-.6"}))),bm=()=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"},t.createElement("circle",{fill:"#FFCC4D",cx:"18",cy:"18",r:"18"}),t.createElement("path",{fill:"#664500",d:"M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379a.499.499 0 0 0-.237-.554a.505.505 0 0 0-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855a.502.502 0 0 0-.598-.081a.5.5 0 0 0-.239.557z"}),t.createElement("ellipse",{fill:"#664500",cx:"12",cy:"13.5",rx:"2.5",ry:"3.5"}),t.createElement("ellipse",{fill:"#664500",cx:"24",cy:"13.5",rx:"2.5",ry:"3.5"})),gm=e=>{let{fill:n}=e,r=hm(e,["fill"]);return t.createElement("svg",dd({width:"24",height:"24"},r),t.createElement("path",{fill:n,d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}))};gm.propTypes={fill:i().string},gm.defaultProps={fill:"var(--form_inputs_border_color)"};const vm=e=>{let{fill:n}=e,r=hm(e,["fill"]);return t.createElement("svg",dd({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",x:"3650",y:"3688"},r),t.createElement("path",{fill:n,d:"M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z"}))};vm.propTypes={fill:i().string},vm.defaultProps={fill:"var(--form_inputs_border_color)"};const ym=gi.svg`
  transform: rotate(${function(e){return e.isRightArrow?"180":e.isUpArrow?"-90":e.isDownArrow?"90":"0"}}deg);
`,wm=e=>{let{fill:n}=e,r=hm(e,["fill"]);return t.createElement(ym,dd({height:"20",viewBox:"0 0 24 24"},r),t.createElement("path",{fill:n,d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}))};wm.propTypes={fill:i().string},wm.defaultProps={fill:"var(--form_buttons_color)"};const _m=e=>{let{fill:n,fillRule:r,rotate45:i}=e,o=hm(e,["fill","fillRule","rotate45"]);const a=i?"M14.68 2.31A4.54 4.54 0 0011.46.99c-1.15 0-2.31.44-3.19 1.32L.95 9.63c-.63.63-.95 1.46-.95 2.28a3.21 3.21 0 003.23 3.22c.83 0 1.66-.31 2.3-.95l7.31-7.32c.76-.77.76-1.98.01-2.73s-1.99-.76-2.75 0l-6.07 6.08c-.24.25-.24.65.01.9s.65.25.91.01l6.07-6.08c.25-.25.67-.25.91-.01.25.25.25.67 0 .92l-7.31 7.32c-.75.75-2.04.74-2.76.01-.75-.75-.73-2.02.01-2.76L9.2 3.21c1.24-1.24 3.35-1.26 4.58-.03 1.24 1.24 1.24 3.36 0 4.6l-7.12 7.13c-.24.25-.24.64.01.88.24.24.63.24.88.01v.01l7.13-7.13A4.41 4.41 0 0016 5.51c0-1.16-.44-2.32-1.32-3.2z":"M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z";return t.createElement("svg",dd({"data-icon":"paperclip",width:"16",height:"16",viewBox:"0 0 16 16"},o),t.createElement("desc",null,"paperclip"),t.createElement("path",{d:a,fillRule:r,fill:n}))};_m.propTypes={fill:i().string,fillRule:i().string,rotate45:i().bool},_m.defaultProps={fill:null,fillRule:"evenodd",rotate45:!0};const xm=()=>t.createElement("svg",{className:"MessageBubble__Decorator",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"28",viewBox:"0 0 16 28"},t.createElement("title",null," Path"),t.createElement("desc",null," Created with Sketch."),t.createElement("g",{fill:"none"},t.createElement("path",{d:"M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z",fill:"#FFF"}))),km=e=>t.createElement("svg",dd({height:"2em",viewBox:"0 0 31 27",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),t.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},t.createElement("path",{fill:"currentColor",d:"M30.0011525,5.51999975 C30.4811549,6.6800055 30.7211525,7.89999325 30.7211525,9.17999959 C30.7211525,10.5800065 30.4311554,11.8999933 29.8511525,13.1399994 C29.2711497,14.3800056 28.4611578,15.429995 27.4211526,16.2899993 C26.6611489,16.9900027 24.7011686,18.7799848 21.5411529,21.659999 C18.5811382,24.3600124 16.7711564,26.0099958 16.1111531,26.6099988 C15.8911521,26.7899997 15.6411546,26.8799988 15.3611532,26.8799988 C15.0811518,26.8799988 14.8311543,26.7899997 14.6111532,26.6099988 C13.6311484,25.7299944 11.0611742,23.3800181 6.90115356,19.5599991 C4.92114375,17.7599902 3.7911551,16.7400005 3.51115371,16.4999993 C3.43115331,16.4199989 3.34115422,16.3399997 3.24115372,16.2599993 C2.22114867,15.399995 1.4311566,14.3550055 0.871153829,13.1249994 C0.311151054,11.8949933 0.0211539665,10.5900064 0.00115386744,9.20999959 C-0.0188462317,7.94999334 0.221151358,6.7300056 0.721153835,5.54999975 C1.18115611,4.4299942 1.84114949,3.44000415 2.70115375,2.57999988 C4.38116207,0.859991362 6.39114188,0 8.73115348,0 C10.0111598,0 11.2261476,0.279997187 12.3761533,0.839999962 C13.526159,1.40000274 14.521149,2.1899948 15.3611532,3.20999986 C16.2011573,2.1899948 17.1961473,1.40000274 18.346153,0.839999962 C19.4961587,0.279997187 20.7111465,0 21.9911529,0 C24.3311645,0 26.3411443,0.849991462 28.0211526,2.54999989 C28.8811569,3.41000415 29.5411502,4.3999942 30.0011525,5.51999975 Z M17.0411531,4.79999979 C16.621151,5.36000256 16.0611566,5.63999975 15.3611532,5.63999975 C14.6611497,5.63999975 14.1011553,5.36000256 13.6811533,4.79999979 C13.0811503,4.01999592 12.3461577,3.41000205 11.4761534,2.96999987 C10.606149,2.52999769 9.69115823,2.3099999 8.73115348,2.3099999 C7.03114505,2.3099999 5.56115982,2.93999357 4.32115367,4.19999981 C3.6811505,4.84000298 3.19115542,5.57999555 2.85115374,6.41999971 C2.47115186,7.30000407 2.29115367,8.22999473 2.31115376,9.20999959 C2.31115376,10.2300046 2.52115165,11.2049948 2.94115374,12.1349995 C3.36115582,13.0650041 3.96114979,13.8499962 4.74115366,14.4899994 C4.78115385,14.5499996 4.86115305,14.6199989 4.98115364,14.6999993 C5.00115374,14.7199994 5.02115354,14.7499991 5.04115364,14.7899993 C5.40115543,15.1100009 6.34114598,15.9599924 7.86115352,17.3399992 L9.30115345,18.6599992 C12.1811677,21.2800121 14.2011474,23.1199937 15.3611532,24.1799989 C16.2811577,23.3399948 17.8211423,21.9400088 19.981153,19.9799991 C22.6811664,17.4799867 24.6511466,15.6800048 25.8911527,14.5799993 L25.9511527,14.5199994 C26.7111565,13.8999963 27.3111504,13.130004 27.7511526,12.2099995 C28.1911548,11.2499947 28.4111526,10.2400048 28.4111526,9.17999959 C28.4111526,8.19999473 28.2311544,7.27000408 27.8711526,6.38999971 C27.5311509,5.54999555 27.0411559,4.81000298 26.4011527,4.16999981 C25.1611465,2.92999367 23.6911613,2.3099999 21.9911529,2.3099999 C21.0311481,2.3099999 20.1161573,2.52499774 19.246153,2.95499987 C18.3761487,3.385002 17.6411561,3.99999582 17.0411531,4.79999979 Z"}))),Em=gi.span`
  margin-left: 34px;
`,Sm=gi.span`
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  font-size: 23px;
  margin-left: -1px;
  position: absolute;
  margin-top: -4px;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: 2;
  transform-origin: 70% 70%;
`,Cm=gi.hr`
  background: transparent;
  ${e=>Jr`
      margin: 0 auto ${id(e.theme.initial_vars.vertical_unit,3)};
    `}

  border-top: 1px dashed rgba(0, 0, 0, 0.16);
`,Tm=({className:e,children:n})=>t.createElement(im,{classNames:["htomessage",e]},n);Tm.propTypes={children:i().node,className:i().string},Tm.defaultProps={children:null,className:null};const Om=gi(Tm)`
  .MessageBubble {
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  }
`,Pm=({agentName:e})=>{const{text:n}=d(),r=n.hto_assignation_message.includes("@agent"),i=n.hto_assignation_message.split("@agent");return t.createElement(Em,null,i[0],r&&t.createElement(t.Fragment,null,t.createElement("b",{className:"htomessage__AgentName"},e)," ",i[1]))};function Im({action:e,agents:n,agent_id:r}){const i="assign"===e,o={name:ie()(n,`[${r}].name`,"")};return t.createElement(Om,null,t.createElement(Cm,{className:"htomessage__lineseparator u-fullwidth-avoiding-container"}),i?t.createElement(Mc,{shape:qt.SQUARED},t.createElement(Sm,{"aria-label":"wave",className:"htomessage__notificationIcon",role:"img"},t.createElement(mm,null))," ",t.createElement(Pm,{agentName:o.name})):null)}function Nm({message:e}){const n=Uu(),{action:r,agent_id:i}=e;return t.createElement(Im,{agents:n,action:r,agent_id:i})}function Mm(){const{animate_buttons:e,animate_messages:t,animate_on_mobile:n}=d(),r=n||!E.isMobile;return{has_buttons_animation_on:r&&e,has_messages_animation_on:r&&t}}Pm.propTypes={agentName:i().string},Pm.defaultProps={agentName:""},Im.propTypes={action:i().string,agent_id:i().number,agents:i().object},Im.defaultProps={action:"assign",agent_id:null,agents:{}},Nm.propTypes={message:i().object},Nm.defaultProps={message:{}};var Dm=function(){function e(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return e.prototype=Object.create(Error.prototype),e}();function Am(e,t){return function(n){return n.lift(new jm(e,t))}}var jm=function(){function e(e,t){this.predicate=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new Rm(e,this.predicate,this.thisArg))},e}(),Rm=function(e){function t(t,n,r){var i=e.call(this,t)||this;return i.predicate=n,i.thisArg=r,i.count=0,i}return ph(t,e),t.prototype._next=function(e){var t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}t&&this.destination.next(e)},t}(Sh),Lm=function(){function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e}(),Fm=new Ih((function(e){return e.complete()}));function zm(e){return e?function(e){return new Ih((function(t){return e.schedule((function(){return t.complete()}))}))}(e):Fm}function Um(e){return function(t){return 0===e?zm():t.lift(new Bm(e))}}var Bm=function(){function e(e){if(this.total=e,this.total<0)throw new Lm}return e.prototype.call=function(e,t){return t.subscribe(new Vm(e,this.total))},e}(),Vm=function(e){function t(t,n){var r=e.call(this,t)||this;return r.total=n,r.count=0,r}return ph(t,e),t.prototype._next=function(e){var t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))},t}(Sh);function Wm(e){return void 0===e&&(e=null),function(t){return t.lift(new qm(e))}}var qm=function(){function e(e){this.defaultValue=e}return e.prototype.call=function(e,t){return t.subscribe(new Hm(e,this.defaultValue))},e}(),Hm=function(e){function t(t,n){var r=e.call(this,t)||this;return r.defaultValue=n,r.isEmpty=!0,r}return ph(t,e),t.prototype._next=function(e){this.isEmpty=!1,this.destination.next(e)},t.prototype._complete=function(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()},t}(Sh);function $m(e){return void 0===e&&(e=Km),function(t){return t.lift(new Ym(e))}}var Ym=function(){function e(e){this.errorFactory=e}return e.prototype.call=function(e,t){return t.subscribe(new Gm(e,this.errorFactory))},e}(),Gm=function(e){function t(t,n){var r=e.call(this,t)||this;return r.errorFactory=n,r.hasValue=!1,r}return ph(t,e),t.prototype._next=function(e){this.hasValue=!0,this.destination.next(e)},t.prototype._complete=function(){if(this.hasValue)return this.destination.complete();var e=void 0;try{e=this.errorFactory()}catch(t){e=t}this.destination.error(e)},t}(Sh);function Km(){return new Dm}function Qm(e){return e&&"function"==typeof e.schedule}var Xm;function Zm(e,t){return new Ih((function(n){var r=new xh,i=0;return r.add(t.schedule((function(){i!==e.length?(n.next(e[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}function Jm(e,t){return t?Zm(e,t):new Ih((n=e,function(e){for(var t=0,r=n.length;t<r&&!e.closed;t++)e.next(n[t]);e.complete()}));var n}function eb(e){var t=e.error;e.subscriber.error(t)}Xm||(Xm={});var tb=function(){function e(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},e.prototype.do=function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}},e.prototype.accept=function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)},e.prototype.toObservable=function(){var e,t;switch(this.kind){case"N":return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[e.length-1];return Qm(n)?(e.pop(),Zm(e,n)):Jm(e)}(this.value);case"E":return e=this.error,new Ih(t?function(n){return t.schedule(eb,0,{error:e,subscriber:n})}:function(t){return t.error(e)});case"C":return zm()}throw new Error("unexpected notification kind value")},e.createNext=function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}();function nb(e,t){void 0===t&&(t=zh);var n,r=(n=e)instanceof Date&&!isNaN(+n)?+e-t.now():Math.abs(e);return function(e){return e.lift(new rb(r,t))}}var rb=function(){function e(e,t){this.delay=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new ib(e,this.delay,this.scheduler))},e}(),ib=function(e){function t(t,n,r){var i=e.call(this,t)||this;return i.delay=n,i.scheduler=r,i.queue=[],i.active=!1,i.errored=!1,i}return ph(t,e),t.dispatch=function(e){for(var t=e.source,n=t.queue,r=e.scheduler,i=e.destination;n.length>0&&n[0].time-r.now()<=0;)n.shift().notification.observe(i);if(n.length>0){var o=Math.max(0,n[0].time-r.now());this.schedule(e,o)}else this.unsubscribe(),t.active=!1},t.prototype._schedule=function(e){this.active=!0,this.destination.add(e.schedule(t.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))},t.prototype.scheduleNotification=function(e){if(!0!==this.errored){var t=this.scheduler,n=new ob(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}},t.prototype._next=function(e){this.scheduleNotification(tb.createNext(e))},t.prototype._error=function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.scheduleNotification(tb.createComplete()),this.unsubscribe()},t}(Sh),ob=function(){return function(e,t){this.time=e,this.notification=t}}();function ab(e,n){const r=Ad(),[i,o]=(0,t.useState)(e);return(0,t.useEffect)((()=>{let e;return n&&(e=r.pipelines.$typingSequence.pipe(function(e,t){var n=arguments.length>=2;return function(r){return r.pipe(e?Am((function(t,n){return e(t,n,r)})):Oh,Um(1),n?Wm(t):$m((function(){return new Dm})))}}((e=>Boolean(e)&&!1===e.state)),nb(1e3)).subscribe((()=>o(!1)))),()=>{e&&e.unsubscribe()}}),[r.pipelines.$typingSequence,n]),i}function sb({children:e,classNames:n,message:r,showBubble:i,showText:o}){const{design:{message_shape:a}}=d();return i?t.createElement(Mc,{author:r.author,classNames:n,isReverse:r.isAuthorUser,shape:a},o&&r.messageText&&t.createElement(jc,{allowHTMLContent:r.messageTextIsHTML||!r.isAuthorUser,text:r.messageText}),e):e}sb.propTypes={children:i().node,classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),message:i().object,showBubble:i().bool,showText:i().bool},sb.defaultProps={children:null,classNames:["is-autoscroll-mutation-target"],message:{},showBubble:!0,showText:!1};function lb({message:e,openModal:n}){return t.createElement(sb,{message:e},t.createElement("div",{style:{width:e.url?300:null,maxWidth:"100%"}},e.url&&t.createElement(xd,{figureStyle:{backgroundColor:"black",width:300,marginBottom:e.messageText?"1rem":null,maxWidth:"100%"},openModal:n,ratio:"16x9",src:e.url}),e.messageText&&t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.messageText}})))}lb.propTypes={message:i().object,openModal:i().bool},lb.defaultProps={message:{},openModal:!0};const cb="26px",ub=(e,t=!1)=>{const n=id(e.theme.initial_vars.horizontal_unit,1.5),r=od(e.theme.initial_vars.horizontal_unit,4);return t?Jr`
      border-radius: ${n} ${n}
        ${r} ${n};
    `:Jr`
      border-radius: ${n} ${n}
        ${n} ${r};
    `},db=gi.div`
  display: flex;
  overflow: visible;
  ${e=>ub(e)}

  ${e=>Jr`
      padding: ${id(e.theme.initial_vars.vertical_unit,2)} ${id(e.theme.initial_vars.horizontal_unit,3)};
    `}

  max-width: 100%;
  background-color: ${({theme:e})=>e.design.message_background_color_bot};
  color: ${({theme:e})=>e.design.message_color_bot};

  &.is-author-user {
    background-color: ${({theme:e})=>e.design.message_background_color_user};
    color: ${({theme:e})=>e.design.message_color_user};
  }

  p {
    word-break: break-word;
    white-space: pre-wrap;
  }

  ul {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 3px;
    margin-top: 3px;
  }

  blockquote {
    font-size: 1.05rem;
    font-style: italic;
  }

  &.is-shape-rounded,
  &.is-shape-rounded.is-reverse {
    border-radius: ${cb};
  }

  &.is-shape-squared,
  &.is-shape-squared.is-reverse {
    border-radius: ${"4px"};
  }

  &.is-shape-transparent {
    padding: 0;
    background-color: transparent !important;
  }

  .MessageBubble__Decorator {
    position: absolute;
    left: -5px;
    bottom: 0;
  }

  .MessageBubble__Decorator path {
    fill: ${({theme:e})=>e.design.message_background_color_bot};
  }

  &.is-reverse {
    ${e=>ub(e,!0)}

    .MessageBubble__Decorator {
      left: initial;
      right: -5px;
      transform: scaleX(-1);
    }

    .MessageBubble__Decorator path {
      fill: ${({theme:e})=>e.design.message_background_color_user};
    }
  }

  input,
  textarea,
  select,
  .InputNumber .field {
    color: ${({theme:e})=>e.design.form_inputs_color};
  }

  .MessageBubble__content input,
  .MessageBubble__content textarea,
  .MessageBubble__content select,
  .MessageBubble__content .InputNumber .field {
    color: ${({theme:e})=>e.design.form_inputs_color};
  }
`;function fb({classNames:e,shape:n,isReverse:r,author:i,children:o}){return t.createElement(db,{className:Qu()(["MessageBubble",r&&"is-reverse",`is-shape-${n}`,`is-author-${i}`,...e])},n===qt.ROUNDED&&t.createElement(xm,null),t.createElement("div",{className:"MessageBubble__content"},o))}fb.propTypes={shape:i().string,classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),isReverse:i().bool,author:i().string,children:i().node},fb.defaultProps={shape:qt.SEMI,classNames:[],isReverse:!1,author:"",children:null};const pb=gi(db)`
  padding: 0;
  box-shadow: none;
  overflow: hidden;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Safari Video Fix */
  &--isSafari .Media {
    object-fit: initial !important;
    border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
    border: 4px transparent solid;
  }
`;function hb({classNames:e,shape:n,isReverse:r,isSafari:i,children:o}){return t.createElement(pb,{className:Qu()(["MessageMediaBubble",r&&"is-reverse",`is-shape-${n}`,i&&"MessageMediaBubble--isSafari",...e])},o)}function mb({message:e,classNames:n,children:r}){const{isSafari:i}=E,{design:{message_shape:o}}=d();return t.createElement(hb,{shape:o,classNames:n,isReverse:e.isAuthorUser,isSafari:i},r)}hb.propTypes={shape:i().string,classNames:i().arrayOf(i().oneOfType([i().string,i().bool])),isReverse:i().bool,isSafari:i().bool,children:i().node},hb.defaultProps={shape:qt.SEMI,classNames:[],isReverse:!1,isSafari:!1,children:null},mb.propTypes={message:i().object,classNames:i().arrayOf(i().string),children:i().node},mb.defaultProps={message:{},classNames:["is-autoscroll-mutation-target"],children:null};const bb=gi.a`
  justify-content: flex-start;

  &.is-shape-rounded,
  &.is-shape-transparent {
    border-radius: ${cb};
  }
`;function gb({url:e}){const{setIsOpen:n,setSrc:r}=gd(),{design:{message_shape:i},text:o}=d(),a=fe.isSupportedDocumentType(e);return t.createElement("p",{className:"content is-marginless"},t.createElement(bb,{className:Qu()(["button",`is-shape-${i}`]),href:e||null,onClick:a&&!E.isIos?t=>{t.preventDefault(),r(e),n(!0)}:void 0,target:"_blank",rel:"noopener noreferrer"},t.createElement("span",{className:"icon pt-1 pl-1"},t.createElement(_m,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",fillRule:null})),t.createElement("span",{style:{maxWidth:"90%",overflow:"hidden",textOverflow:"ellipsis",direction:"rtl"}},o.open_file)))}gb.propTypes={url:i().string},gb.defaultProps={url:""};const vb=gi.video`
  max-height: 400px;
`;function yb({url:e}){return t.createElement(vb,{controls:!0},t.createElement("source",{src:e,type:"video/mp4"}),t.createElement("source",{src:e,type:"video/ogg"}),t.createElement("source",{src:e,type:"video/webm"}),"Your browser does not support the video tag.")}function wb({url:e}){return t.createElement("audio",{controls:!0},t.createElement("source",{src:e,type:"audio/ogg"}),t.createElement("source",{src:e,type:"audio/mpeg"}),t.createElement("source",{src:e,type:"audio/wav"}),"Your browser does not support the audio element.")}function _b({message:e}){const n=fe.isSupportedVideoType(e.url),r=fe.isSupportedAudioType(e.url);return t.createElement(t.Fragment,null,n&&t.createElement(mb,{message:e},t.createElement(yb,{url:e.url})),r&&t.createElement(wb,{url:e.url}),!n&&!r&&t.createElement(sb,{message:e},t.createElement(gb,{url:e.url})))}yb.propTypes={url:i().string},yb.defaultProps={url:""},wb.propTypes={url:i().string},wb.defaultProps={url:""},_b.propTypes={message:i().object},_b.defaultProps={message:{}};const xb=gi.iframe`
  border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;xb.displayName="IframeStyled";function kb(e){const[n,r]=(0,t.useState)(!1);return t.createElement("figure",{className:Qu()({image:!0,[`is-${e.size}x${e.size}`]:!!e.size,[_d(e.ratio)]:!!e.ratio,[e.figureClassName]:!!e.figureClassName}),style:e.figureStyle},t.createElement(xb,{allowFullScreen:!0,className:Qu()({[e.className]:!!e.className,"is-rounded":e.rounded,"is-contain":e.contain,"has-loaded":n,"is-overlay":!0}),frameBorder:"0",onLoad:()=>r(!0),src:e.src,style:e.style,title:"lb-iframe",type:"text/html"}))}function Eb({message:e}){return t.createElement(mb,{message:e},t.createElement(kb,{src:e.getVideoUrl()}))}kb.propTypes={className:i().string,contain:i().bool,figureClassName:i().string,figureStyle:i().object,ratio:i().string,rounded:i().bool,size:i().number,src:i().string.isRequired,style:i().object},kb.defaultProps={className:"",contain:!1,figureClassName:"",figureStyle:{backgroundColor:"black",width:640,maxWidth:"100%"},ratio:"16x9",rounded:!1,size:null,style:{}},Eb.propTypes={message:i().object},Eb.defaultProps={message:{}};function Sb({message:e}){const n=`https://maps.googleapis.com/maps/api/staticmap?center=${e.latitude},${e.longitude}&size=600x300&zoom=15&markers=color:red%7C${e.latitude},${e.longitude}&key=AIzaSyCjznqz7l3S1OQcQNJDPkG2e8-LWgVFukc`,r=`https://www.google.com/maps/search/?api=1&query=${e.latitude},${e.longitude}`;return t.createElement(sb,{message:e},t.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},t.createElement(xd,{figureStyle:{width:300,marginBottom:e.message?"1rem":null,maxWidth:"100%"},ratio:"16x9",src:n,style:{backgroundColor:"gray",borderRadius:4}})))}Sb.propTypes={message:i().object},Sb.defaultProps={message:{}};const Cb=gi(xd)`
  && img {
    /* I need specificity for this rule */
    width: auto;
  }
  img {
    max-width: ${e=>id(e.theme.initial_vars.horizontal_unit,25)};
    max-height: ${e=>id(e.theme.initial_vars.vertical_unit,25)};

    @media ${Ju} {
      max-width: ${e=>id(e.theme.initial_vars.vertical_unit,87.5)};
      max-height: ${e=>id(e.theme.initial_vars.vertical_unit,29)};
    }
  }
`;function Tb({url:e,openModal:n}){return t.createElement(Cb,{figureStyle:{width:"auto",maxWidth:"auto"},openModal:n,src:e})}function Ob({message:e,openModal:n}){return t.createElement(mb,{message:e},e.url&&t.createElement(Tb,{openModal:n,url:e.url}))}function Pb({message:e}){const n=fe.isSupportedImageType(e.url);return"image"===e.media_type?n?t.createElement(Ob,{message:e}):t.createElement(_b,{message:e}):"iframe"===e.media_type?t.createElement(Eb,{message:e}):null}Tb.propTypes={url:i().string,openModal:i().bool},Tb.defaultProps={url:"",openModal:!0},Ob.propTypes={message:i().object,openModal:i().bool},Ob.defaultProps={message:{},openModal:!0},Pb.propTypes={message:i().object},Pb.defaultProps={message:{}};function Ib({message:e}){return t.createElement(sb,{message:e},t.createElement("div",{style:{width:300,maxWidth:"100%"}},e.urls.filter(Boolean).map(((e,n,r)=>t.createElement(xd,{figureStyle:{width:300,marginBottom:n!==r.length-1?3:null,maxWidth:"100%"},openModal:!0,ratio:"16x9",src:e,style:{backgroundColor:"gray",borderRadius:4}})))))}function Nb({message:e}){return t.createElement(sb,{message:e,showText:!0})}function Mb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Db(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Mb(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Mb(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Ib.propTypes={message:i().object},Ib.defaultProps={message:{}},Nb.propTypes={message:i().object},Nb.defaultProps={message:{}};const Ab=(e,t)=>e.replace(/\{timeout\}/i,t);function jb({message:e}){const n=Ad(),{url:r,evaluate:i}=e,o=ie()(e,"extra.redirect.timeout",3),a={message:e.messageText,timeout:o,redirectionURL:ae.Z.getHref(r)},{startRedirect:s,stopRedirect:l,timeMessage:c}=function({message:e,timeout:n,redirectionURL:r}){const[i,o]=(0,t.useState)(n),[a,s]=(0,t.useState)(!1),[l,c]=(0,t.useState)(Ab(e,i)),u=(0,t.useCallback)((()=>{s(!1)}),[]),d=(0,t.useCallback)((()=>{o(n),s(!0)}),[n]);return(0,t.useEffect)((()=>{a&&i>0&&setTimeout((()=>{o((e=>e-1))}),1e3)}),[a,i]),(0,t.useEffect)((()=>{0===i&&(u(),window.location.href=r),c(Ab(e,i))}),[i,r,e,u,d]),{startRedirect:d,stopRedirect:u,timeMessage:l}}(a);return(0,t.useEffect)((()=>{i&&(s(),n.events.once(Vd,l))}),[i,n.events,s,l]),t.createElement(Nb,{message:Db(Db({},e),{},{messageText:c})})}jb.propTypes={message:i().object},jb.defaultProps={message:{}};const Rb={facebook:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"}))),twitter:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}))),linkedin:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"}))),whatsapp:t.createElement("span",{className:"icon"},t.createElement("svg",{viewBox:"0 0 24 24",style:{width:"100%"}},t.createElement("path",{fill:"#FFFFFF",d:"M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"})))},Lb={facebook:"#3b5998",twitter:"#1da1f2",linkedin:"#2E77B0",whatsapp:"#0DC143"},Fb=({className:e,href:n,type:r,label:i})=>t.createElement("a",{className:Qu()({button:!0,"social-button":!0,[e]:!!e}),href:n,style:{backgroundColor:Lb[r],color:"white"},target:"_blank",rel:"noopener noreferrer"},Rb[r],t.createElement("span",{className:"social-button-label "},i));Fb.propTypes={className:i().string,href:i().string,type:i().string,label:i().string},Fb.defaultProps={className:"",href:"",type:"",label:""};const zb=gi(Fb)`
  display: inline-flex;
  padding: 8px 10px;
  font-size: 0.75rem;

  .social-button-label {
    padding-top: 2px;
  }
`;function Ub({message:e}){const n=ae.Z.getReferralUrl(ae.Z.getHref(ie()(e.raw,"extra.socialUrl")),e.description),r=t.createElement("p",{className:"buttons"},t.createElement(zb,{type:"facebook",href:n.facebook,label:"Facebook"}),t.createElement(zb,{type:"twitter",href:n.twitter,label:"Twitter"}),t.createElement(zb,{type:"linkedin",href:n.linkedin,label:"LinkedIN"}),t.createElement(zb,{type:"whatsapp",href:n.whatsapp,label:"Whatsapp"}));return t.createElement(t.Fragment,null,e.messageText&&(e.rich_text?t.createElement("p",{className:"content is-marginless",style:{marginBottom:10},dangerouslySetInnerHTML:{__html:e.rich_text}}):t.createElement("p",{style:{marginBottom:10}},e.title||e.message)),r)}function Bb({message:e}){return t.createElement(sb,{message:e},t.createElement(Ub,{message:e}))}function Vb({message:e}){const{text:n}=d();return t.createElement(sb,{message:e},t.createElement("div",null,e.rich_text&&t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.rich_text}}),!e.rich_text&&t.createElement("p",null,e.title||e.message),t.createElement(Fl,{name:"email",placeholder:oe.getFieldPlaceholder({message:e.message,text:n}),type:"email"})))}Ub.propTypes={message:i().object},Ub.defaultProps={message:{}},Bb.propTypes={message:i().object},Bb.defaultProps={message:{}},Vb.propTypes={message:i().object},Vb.defaultProps={message:{}};const Wb=t.createContext({isSubmitted:!1,setIsSubmitted:()=>{}}),{Provider:qb}=Wb,Hb=()=>(0,t.useContext)(Wb);function $b({bubbleClassName:e,children:n,className:r,hasAutofocus:i,hasNoBorder:o,hasSearchButton:a,helpText:s,message:l,onSubmit:c,prefix:u,renderAs:f,sendButtonType:p,selectedValue:h,showBubble:m,submitOnEnter:b,validate:g}){const v=h||l.default,y=(0,t.useMemo)((()=>v),[]),{error:w,setValue:_,value:x}=function({messageError:e="",originalValue:n="",selectedValue:r="",validate:i}){const[o,a]=(0,t.useState)(""),[s,l]=(0,t.useState)("");return(0,t.useEffect)((()=>{l(e&&n===o?e:i&&n!==o?i(o):"")}),[e,n,i,o]),(0,t.useEffect)((()=>{a(r)}),[r]),{error:s,setValue:a,value:o}}({messageError:null==l?void 0:l.error,originalValue:y,selectedValue:v,validate:l.isInsideForm?null:g}),{text:k}=d(),[E,S]=(0,t.useState)(!1),{has_messages_animation_on:C}=Mm(),T=(0,t.useCallback)((()=>{""===w&&c({type:"text",message:x})}),[w,x,c]);(0,t.useEffect)((()=>(E&&T(),()=>{S(!1)})),[E,T]);const O={name:l.name,onChange:e=>_(e),onSubmit:T,value:x,hasAutofocus:i,hasNoBorder:!1,required:!!l.required&&!l.isInsideForm};b&&(O.onKeyDown=e=>{13===(e.keyCode||e.which)&&(e.preventDefault(),x&&setTimeout((()=>{S(!0)})))});const P=l.markRequired&&l.required&&l.label?"*":"";t.isValidElement(n)&&!n.props.placeholder&&(O.placeholder=l&&l.getPlaceholder(k),l.markRequired&&l.required&&!P&&O.placeholder&&(O.placeholder+="*"));const I=l.help||(null!==s||l.isInsideForm?s:k.input_text_help),N=l.markRequired&&l.required&&!P&&!O.placeholder&&I?"*":"";return t.createElement(sb,{className:e,message:l,showBubble:m&&!l.isInsideForm,showText:!0},t.createElement(Tc,{className:r,error:w,hasNoBorder:o,hasSearchButton:a,help:I&&`${I}${N}`,isAnimateMessagesOn:C,isMinimalMobile:!l.isInsideForm,isRequired:l.required,label:l.label&&`${l.label}${P}`,onSubmit:T,prefix:u,renderAs:f,sendButtonType:p,sendLabel:k.send,value:x},t.cloneElement(n,O)))}$b.propTypes={bubbleClassName:i().string,children:i().node.isRequired,className:i().string,hasAutofocus:i().bool,hasNoBorder:i().bool,hasSearchButton:i().bool,helpText:i().string,label:i().string,message:i().object,onSubmit:i().func,prefix:i().string,renderAs:i().any,selectedValue:i().string,sendButtonType:i().string,showBubble:i().bool,submitOnEnter:i().bool,validate:i().func},$b.defaultProps={bubbleClassName:"",className:"",label:null,hasNoBorder:!1,hasAutofocus:!0,hasSearchButton:!1,helpText:null,prefix:null,message:null,onSubmit:()=>{},submitOnEnter:!0,selectedValue:"",sendButtonType:"inline",showBubble:!0,renderAs:null,validate:null};const Yb=({hasNoBorder:e,message:t,onSubmit:n,sendButtonType:r})=>({hasNoBorder:e,message:t,onSubmit:n,sendButtonType:t.isInsideForm?null:r});function Gb(e){const{message:n,onSubmit:r}=e,{text:i}=d(),o=h(),a=n.getAutocompleteOptions(),s=(0,t.useRef)(null);return t.createElement($b,dd({className:"InputAutocomplete",renderAs:ec},Yb(e),{hasAutofocus:!1,hasSearchButton:!0,onSubmit:({message:e})=>{const t=n.mustMatchSuggestion?null:e,i=oe.getPayloadFromOptions(e,a,t);null!==i&&r({type:"button",message:e,payload:i})},showBubble:!1}),t.createElement(oc,{autocompleteRef:s,autoHighlight:n.mustMatchSuggestion,help:i.input_autocomplete_help,isInsideForm:n.isInsideForm,noResultsText:i.no_results_found,onMenuVisibilityChange:e=>{s.current&&ae.Z.getElementOffset(s.current).top<350&&o&&o.setConfig({header_hidden:e})},options:a,placeholder:n.isInsideForm?n.getPlaceholder():n.getPlaceholder()||i.autocomplete_input_placeholder}))}Gb.propTypes={message:i().object,onSubmit:i().func},Gb.defaultProps={message:null,onSubmit:()=>{}};const Kb=({children:e})=>t.createElement("span",{className:"icon is-marginless is-size-1"},e);Kb.propTypes={children:i().string},Kb.defaultProps={children:""};const Qb=({icon:e,isBig:n})=>t.createElement("span",{className:Qu()({"icon fi is-marginless":!0,[e]:!0,"is-size-3":n})});Qb.propTypes={icon:i().string,isBig:i().bool},Qb.defaultProps={icon:"",isBig:!1};function Xb({data:e,className:n,onClick:r,isAnimated:i,isDirectionColumn:o,isDisabled:a}){const{label:s}=e,l=e.href&&ae.Z.getHref(e.href),[c,u]=(0,t.useState)(!1),d=ie()(e,"attachment.type"),f=ie()(e,"attachment.value"),p="icon"===d,h="image"===d,m="emoji"===d,b=!!l;return t.createElement(Oi,{className:Qu()({"input-button":!0,[n]:!!n,"u-white-space-normal":!0,"is-image-button":h,"is-icon-button":p,"is-emoji-button":m,"is-flex-direction-column":o,"u-fullwidth":!o,"is-animated":i}),href:l,isAnchor:b,isDisabled:c||a,onClick:t=>{r(e),u(!0)}},p&&t.createElement(Qb,{icon:f,isBig:!0}),m&&t.createElement(Kb,null,f),h&&t.createElement(xd,{src:f}),t.createElement("span",{className:"input-button-label",dangerouslySetInnerHTML:{__html:`${ae.Z.bold(ae.Z.escapeHTML(s))} ${b?'<ButtonIcon icon="chains" />':""}`}}))}Xb.propTypes={data:i().object,className:i().string,onClick:i().func,isAnimated:i().bool,isDirectionColumn:i().bool,isDisabled:i().bool},Xb.defaultProps={data:{},className:"",onClick:()=>{},isAnimated:!1,isDirectionColumn:!1,isDisabled:!1};var Zb=(e=>gi(e)`
  width: calc(50% - 0.5rem);
  transition: box-shadow 0.1s linear;

  @media ${ed} {
    width: calc(33% - 0.5rem);

    &.is-four-cols {
      span.icon {
        font-size: 2rem !important;
      }
      width: calc(25% - 0.5rem);
    }
  }

  &.is-image-button {
    overflow: hidden;
    padding: 0 0 14px 0;
    position: relative;

    .image {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      margin: 0;
    }

    .image .Media {
      transform: scale(1);
      transition: transform 0.2s;
    }

    &:hover .image .Media {
      transform: scale(1.1);
    }

    .input-button-label {
      display: flex;
      position: absolute;
      align-items: center;
    }
  }

  /* Button with image
     Layout horizontal, button content vertical */
  &.is-image-button:not(.is-flex-direction-column) {
    height: 65px;
    max-width: 400px;

    .image {
      display: flex;
      align-items: center;
      width: 100px;
      height: 100%;
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
    }

    .input-button-label {
      justify-content: flex-start;
      padding-left: 39px;
      top: 0;
      left: 100px;
      width: 100%;
      max-width: 300px;
      height: 100%;
    }
  }

  /* Button with image
     Layout vertical, button content horizontal */
  &.is-image-button.is-flex-direction-column {
    height: 160px;

    .image {
      width: 100%;
      height: 100px;
      border-top-right-radius: $radius;
    }

    .input-button-label {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      justify-content: center;
    }
  }

  /* Button with icon/emoji
     Layout horizontal, button content vertical */
  &.is-icon-button:not(.is-flex-direction-column),
  &.is-emoji-button:not(.is-flex-direction-column) {
    height: 84px;

    .icon {
      padding: 0 52px 0 37px;
    }

    .input-button-label {
      text-align: left;
    }
  }

  .input-button-label {
    width: 100%;

    .chains {
      margin-left: $horizontal-unit;
    }
  }
`)(Xb);const Jb=gi.p`
  margin-bottom: ${({theme:{initial_vars:{vertical_unit:{qty:e,unit:t}}}})=>String(1.5*e)+t};
  color: ${({theme:e})=>e.design.form_help_color};
`;function eg({children:e}){return t.createElement(Jb,{className:"input-small-header is-size-7 is-uppercase is-unselectable"},e)}eg.propTypes={children:i().node.isRequired};const tg=t.forwardRef(((e,n)=>t.createElement(pd,dd({},e,{className:Qu()({[e.className]:!!e.className,"input-buttons":!0}),ref:n}))));tg.propTypes={className:i().string},tg.defaultProps={className:""};var ng=gi(tg)`
  align-items: stretch;

  .input-button {
    color: ${({theme:e})=>e.design.form_buttons_color};
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
    border-color: ${({theme:e})=>e.design.form_buttons_border_color};
  }

  .input-button.is-multiple {
    color: ${({theme:e})=>e.design.message_color_bot};
    background-color: ${({theme:e})=>"transparent"===e.design.message_shape?e.design.background_color:e.design.message_background_color_bot};
    border-color: transparent;

    &.is-selected {
      color: ${({theme:e})=>e.design.form_buttons_color};
      background-color: ${({theme:e})=>e.design.form_buttons_background_color};
      border-color: ${({theme:e})=>e.design.form_buttons_border_color};
      box-shadow: 0 6px 21px -11px rgba(0, 0, 0, 0.29),
        0 13px 17px -16px rgba(47, 49, 72, 0.3);
    }
  }

  &.has-vertical-scroll {
    max-height: 180px;
    overflow-y: auto;

    @media ${Ju} {
      max-height: 300px;
    }
  }

  &.is-layout-vertical .input-button {
    max-width: 500px;
    margin: 0 0 3px 0;
  }
`;const rg=gi.div`
  margin-top: ${e=>od(e.theme.initial_vars.vertical_unit,4)};

  @media ${Ju} {
    margin: ${e=>od(e.theme.initial_vars.vertical_unit,4)}
      auto 0 0;
  }

  @media ${td} {
    .has-margin-left {
      margin-left: calc(${e=>e.theme.avatar.mobile_width} + ${e=>id(e.theme.initial_vars.horizontal_unit)})};
    }
  }

  /* Buttons with search input
     Input and input icon styles */
  .control.has-icons-right {
    .icon.is-right {
      right: 15px;
    }
  }

  .field .control input {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }

  .InputButtons .button svg path,
  .InputButtons .custom-button svg path,
  .InputButtons .input-button svg path {
    fill: ${({theme:e})=>e.design.form_buttons_color};
  }
`;function ig({help:e,buttons:n,alignment:r,buttonsRef:i,onSubmit:o,searchInput:a,isAnimated:s}){return t.createElement(rg,{className:"InputButtons"},n.length>1&&t.createElement(eg,null,e),a&&t.createElement("div",{className:"field has-addons"},a),t.createElement(ng,{className:Qu()({"is-layout-vertical":"vertical"===r,"has-vertical-scroll":!!a,"has-margin-left":"vertical"!==r&&1===n.length}),ref:i},n.map((e=>t.createElement(Zb,{key:e.payload,onClick:o,data:e,isAnimated:s,isDirectionColumn:"horizontal"===r,className:Qu()({"is-four-cols":n.length>=4})})))))}function og(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ag(n){let{buttons:r,children:i,defaultResults:o}=n,a=hm(n,["buttons","children","defaultResults"]);const s=(0,t.useRef)(null),[l,c]=(0,t.useState)(!1),{has_buttons_animation_on:u}=Mm();return(0,t.useEffect)((()=>{if(!u||!r||!s.current||l)return()=>{};const e=Array.from(s.current.querySelectorAll(".is-animated"));return Hp({targets:e,translateY:[20,0],opacity:[0,1],delay:Hp.stagger(120,{from:"first"}),duration:300,easing:"easeInOutSine",complete(){c(!0)}}),()=>{Hp.remove(e)}}),[r,l,u]),t.cloneElement(i,function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?og(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):og(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({buttons:r,buttonsRef:s,isAnimated:!l&&!1!==u},a))}function sg({onSubmit:e,animateOnSubmit:n,message:r}){const i=t=>{e({type:"button",message:t.label,payload:t.payload})},{text:o}=d(),a=(0,t.useMemo)((()=>r.getButtons()),[r]);return t.createElement(ag,{buttons:a},t.createElement(ig,{alignment:r.buttonsAlignment,onSubmit:e=>{n?(e=>{Hp({targets:[".InputInline .input-buttons .input-button"],translateY:[0,20],opacity:[1,0],duration:300,easing:"easeInOutSine",complete:()=>{i(e)}})})(e):i(e)},help:o.input_menu_help}))}ig.propTypes={alignment:i().oneOf(["horizontal","vertical"]),buttons:i().arrayOf(i().shape({label:i().string,payload:i().string,attachment:i().shape({type:i().string,value:i().string}),href:i().string})),help:i().string,buttonsRef:i().object,onSubmit:i().func,searchInput:i().node,isAnimated:i().bool},ig.defaultProps={alignment:"horizontal",buttons:[],help:"",buttonsRef:null,onSubmit:()=>{},searchInput:null,isAnimated:!1},ag.propTypes={children:i().object.isRequired,buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),defaultResults:i().bool},ag.defaultProps={buttons:[],defaultResults:!0},sg.propTypes={message:i().object,onSubmit:i().func,animateOnSubmit:i().bool},sg.defaultProps={message:null,onSubmit:()=>{},animateOnSubmit:!1};const lg=gi.div`
  ${e=>e.searchInput&&"\n  max-width: 100%;\n  "}

  .buttons-container-full-width {
    margin-bottom: 32px;

    .button,
    .input-button {
      padding: 20px;
      text-align: left;
      width: calc(50% - 0.5rem);
    }
  }
`;function cg({searchInput:e,help:n,buttons:r,onChange:i,disabled:o,onSubmit:a,sendLabel:s,isAnimated:l,buttonsRef:c,alignment:u}){return t.createElement(lg,{className:Qu()({InputButtonsMultiple:!e,InputButtonsMultiSearch:!!e}),searchInput:e},r.length>1&&t.createElement(eg,null,n),e&&t.createElement("div",{className:"field has-addons "},e),r.length>0&&t.createElement(ng,{className:Qu()({"is-layout-vertical":"vertical"===u,"has-vertical-scroll":!!e}),ref:c},r.map((e=>t.createElement(Zb,{className:Qu()({"is-multiple":!0,"is-selected":e.isSelected,"is-four-cols":r.length>=4}),data:e,isAnimated:l,isDirectionColumn:"horizontal"===u,isDisabled:e.isDisabled,key:e.payload,onClick:e=>i(e,!e.isSelected)})))),t.createElement("div",{className:"field is-marginless"},t.createElement(Ou,{disabled:o,onClick:a},s)))}function ug({onChange:e,placeholder:n,value:r}){return t.createElement("div",{className:"control is-expanded has-icons-right"},t.createElement("input",{className:"input js-auto-focus",onChange:e,placeholder:n,type:"search",value:r}),t.createElement("div",{className:"icon is-right"},t.createElement(gm,null)))}function dg({buttons:e,children:n}){const{text:r}=d(),[i,o]=(0,t.useState)(""),[a,s]=(0,t.useState)([]);(0,t.useEffect)((()=>{s(e.filter((e=>!i||(e.label.toLowerCase().indexOf(i.toLowerCase())>-1||e.isSelected))))}),[i,e]);const l={buttons:a,searchInput:t.createElement(ug,{onChange:e=>o(e.target.value),placeholder:r.input_instant_search_help||"Filter the options",value:i})};return t.cloneElement(n,l)}function fg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pg(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?fg(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):fg(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function hg({message:e,onSubmit:n,hasSearch:r}){const{text:o}=d(),a=(0,t.useMemo)((()=>e.getButtons()),[e]),[s,l,c]=(0,t.useMemo)((()=>{let t=1,n=a.length,r=o.input_multi_help;return e.buttonsMinOptions&&Number(e.buttonsMinOptions)<=n&&(t=Number(e.buttonsMinOptions)),e.buttonsMaxOptions&&Number(e.buttonsMaxOptions)>0&&(n=Number(e.buttonsMaxOptions)),r=o.input_multi_range_help.replace("@min_options",t).replace("@max_options",99===n?a.length:n),[t,n,r]}),[a,e,o]),[u,f]=(0,t.useState)([]),p=a.map((e=>{const t=ce()(u,e.payload);return pg(pg({},e),{},{isSelected:t,isDisabled:!t&&u.length===l})})),h=(e,t)=>{if(t&&u.length===l)return;const n=new Set(u);t?n.add(e.payload):n.delete(e.payload),f(Array.from(n))},m=({buttons:r,searchInput:i,isAnimated:a,buttonsRef:l})=>t.createElement(cg,{alignment:e.buttonsAlignment,buttons:r,searchInput:i,disabled:u.length<s,help:c,onChange:h,onSubmit:()=>n({type:"structured_data",message:u.map((e=>p.find((t=>t.payload===e)))).map((e=>e.label)).join(", "),data:{items:u.map((e=>p.find((t=>t.payload===e)))).map((e=>e.label))}}),sendLabel:o.send,isAnimated:a,buttonsRef:l});return m.propTypes={buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),searchInput:i().node,isAnimated:i().bool,buttonsRef:i().object},m.defaultProps={buttons:[],searchInput:null,isAnimated:!1,buttonsRef:null},r?t.createElement(dg,{buttons:p},t.createElement(ag,null,t.createElement(m,null))):t.createElement(ag,{buttons:p},t.createElement(m,null))}function mg({message:e,onSubmit:n}){const{text:r}=d(),i=(0,t.useMemo)((()=>e.getButtons()),[e]);return t.createElement(dg,{buttons:i},t.createElement(ag,null,t.createElement(ig,{alignment:e.buttonsAlignment,onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help})))}function bg({message:e,onSubmit:n}){return t.createElement(hg,{message:e,onSubmit:n,hasSearch:!0})}cg.propTypes={alignment:i().oneOf(["horizontal","vertical"]),buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),disabled:i().bool,help:i().string,onChange:i().func,onSubmit:i().func,sendLabel:i().string,searchInput:i().node,isAnimated:i().bool,buttonsRef:i().object},cg.defaultProps={alignment:"horizontal",buttons:[],disabled:!1,help:"",onChange:()=>{},onSubmit:()=>{},sendLabel:"Send",searchInput:null,isAnimated:!1,buttonsRef:null},ug.propTypes={onChange:i().func,placeholder:i().string,value:i().string},ug.defaultProps={onChange:()=>{},placeholder:"",value:""},dg.propTypes={children:i().object.isRequired,buttons:i().arrayOf(i().shape({label:i().string,payload:i().string}))},dg.defaultProps={buttons:[]},hg.propTypes={message:i().object,onSubmit:i().func,hasSearch:i().bool},hg.defaultProps={message:null,onSubmit:()=>{},hasSearch:!1},mg.propTypes={message:i().object,onSubmit:i().func},mg.defaultProps={message:null,onSubmit:()=>{}},bg.propTypes={message:i().object,onSubmit:i().func},bg.defaultProps={message:i().object,onSubmit:()=>{}};var gg=__webpack_require__(6066);const vg=e=>t.createElement("button",{className:Qu()(["button InputCards__Arrow",e.isPrev?"InputCards__ArrowPrev":"InputCards__ArrowNext"]),"data-label":e.isPrev?"":e.nextText,type:"button",onClick:e.onClick},t.createElement("span",{className:"icon"},t.createElement(wm,null)));vg.propTypes={onClick:i().func,isPrev:i().bool,nextText:i().string},vg.defaultProps={onClick:()=>{},isPrev:!1,nextText:"Next"};var yg=vg;var wg=gi.div`
  .InputCards__Slider {
    max-width: 100%;
  }

  .slick-slide {
    transform-origin: left;
    width: ${e=>e.theme.input_cards.card_width};
  }

  .InputCards__Arrow {
    position: absolute;
    top: calc(
      (${e=>e.theme.input_cards.card_height} / 2) -
        (${e=>e.theme.input_cards.button_size} / 2)
    );
    z-index: 1;
    border-radius: calc(var(--border_radius) * 0.1rem);
  }

  .InputCards__ArrowPrev {
    left: calc(
      50% -
        (
          (${e=>e.theme.input_cards.card_width} / 2) +
            (${e=>e.theme.input_cards.button_size} / 2)
        )
    );
    @media ${Ju} {
      left: calc(-1 * (${e=>e.theme.input_cards.button_size} / 2));
    }
  }

  .InputCards__ArrowNext {
    left: calc(
      50% +
        (
          (${e=>e.theme.input_cards.card_width} / 2) -
            (${e=>e.theme.input_cards.button_size} / 2)
        )
    );

    @media ${Ju} {
      right: initial;
      left: calc(
        (${e=>e.theme.input_cards.card_width}) -
          (${e=>e.theme.input_cards.button_size})
      );
    }

    svg {
      transform: rotate(180deg);
    }
  }

  .InputCards__ArrowNext::before {
    display: none;
    content: attr(data-label);
    margin-right: 26px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;

    @media ${Ju} {
      display: inherit;
    }
  }

  a.InputCards__Slide:not(.button):not(.tag):not(.dropdown-item) {
    text-decoration: none;
  }

  .InputCards__Slide .card {
    display: flex;
    justify-content: left;
    position: relative;
    background-color: initial;
    box-shadow: none;
    height: 100%;
    margin: 0 auto;
    max-width: ${e=>e.theme.input_cards.card_width};
  }

  .card .button,
  .card .custom-button,
  .card .input-button {
    @media ${Ju} {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
  }

  .slick-current .card:hover .button,
  .slick-current .card:hover .custom-button,
  .slick-current .card:hover .input-button {
    @media ${Ju} {
      opacity: 1;
    }
  }

  .card-image {
    width: ${e=>e.theme.input_cards.card_width};
    height: ${e=>e.theme.input_cards.card_height};
    background-size: cover;
    background-position: center;
    border-radius: 0.25rem;
    overflow: hidden;
    margin: auto;
  }
  .card-image-active-background {
    transition: opacity 200ms;
  }

  .InputCards__SlideInfo {
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .InputCards__SlideInfoContent {
    padding: 33px 30px 10px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.1) 57%,
      transparent
    );
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .InputCards__CardDescription {
    color: white;
    margin-right: 10px;
    flex: 1;
  }

  /* NOT Extra Fields version */
  .slick-slide:not(.slick-current) {
    .card-content,
    .card-footer {
      display: none;
    }
  }

  /* Extra Fields Version - The extra fields are only visible when slick-slide is the current one */
  /* The rest of these selectors are fixes for animations as at the end of this file (fake current slide) */
  .slick-slide.slick-current,
  .slick-slide.slick-cloned[data-index='-1'],
  .slick-slide:not(.slick-active)
    + .slick-slide.slick-cloned[data-index='3']:not(.slick-active),
  .slick-slide:not(.slick-active):not(.slick-current):not(.slick-cloned)
    + .slick-slide.slick-active.slick-cloned,
  [is-last-slide] {
    .InputCards__Slide--ExtraFields {
      .card {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 6px;
        overflow: hidden;
      }

      /* Hide thumbnail design */
      .InputCards__SlideInfo {
        display: none;
      }

      .InputCards__ExtraFieldsImage,
      .InputCards__ExtraContent {
        height: auto;
        margin: 0;
        border-radius: 0;
        color: var(--message_color_bot);
      }

      .InputCards__ExtraContent {
        background-color: var(--message_background_color_bot);
      }

      .InputCards__ExtraFieldsImage {
        min-height: 190px;
      }

      .card-content {
        padding: 24px 28px 12px;
        display: block;
      }

      .card-footer {
        display: flex;
      }

      .card-footer-item {
        padding-bottom: 24px;
      }

      .card-footer-item:first-of-type {
        padding-left: 28px;
        padding-right: 8px;
        justify-content: flex-start;
      }

      .card-footer-item:last-of-type {
        padding-left: 8px;
        padding-right: 28px;
        justify-content: flex-end;
      }

      .InputCards__Title {
        margin-bottom: 8px;
        font-size: 1.27rem;
      }

      .InputCards__Description {
        margin-bottom: 4px;
        font-size: 1.12rem;
        opacity: 0.8;
      }

      .InputCards__Details {
        font-size: 1rem;
        opacity: 0.6;
      }

      .card-footer-item .InputCards__HighLighted {
        font-size: 1.12rem;
      }

      .card-footer-item .InputCards__CTA {
        opacity: 1;
        font-size: 1rem;
        padding: 6px 12px;
        color: var(--message_color_bot);
        border-color: var(--message_color_bot);
      }
    }
  }

  /* FIXES */
  /* ANIMATIONS - needed for animations */
  .slick-list {
    @media ${Ju} {
      width: calc((${e=>e.theme.input_cards.card_width}) * 2);
    }
  }

  .slick-slide {
    @media ${Ju} {
      display: block;
      transform: scale(0.7);
      transition: transform 0.2s ease-in-out;
      padding-left: 10px;
      opacity: 0.9;
    }
  }

  .slick-slide.slick-current,
  .slick-slide.slick-cloned[data-index='-1'],
  .slick-slide:not(.slick-active)
    + .slick-slide.slick-cloned[data-index='3']:not(.slick-active),
  .slick-slide:not(.slick-active):not(.slick-current):not(.slick-cloned)
    + .slick-slide.slick-active.slick-cloned,
  [is-last-slide] {
    @media ${Ju} {
      display: block;
      transform: scale(1);
      opacity: 1;
      padding-left: 0;
    }
  }

  /* FIX - When there's only one card */
  ${e=>e.totalSlides<=1&&"\n    .slick-slide.slick-active.slick-cloned {\n      display: none;\n    }\n  "}
`;const _g=({active:e,card:n,onSubmit:r,children:i})=>t.createElement("a",{className:Qu()(["InputCards__Slide",n.hasExtraFields&&"InputCards__Slide--ExtraFields"]),key:n.payload,href:e&&n.href||null,target:"_blank",onClick:()=>{e&&r(n)},rel:"noopener noreferrer"},i);_g.propTypes={active:i().bool,card:i().object,onSubmit:i().func,children:i().object},_g.defaultProps={active:!1,card:{},onSubmit:()=>{},children:{}};const xg=({active:e,card:n})=>{const{text:r}=d();return t.createElement("div",{className:"card"},t.createElement("div",{className:Qu()(["card-image is-relative",n.hasExtraFields&&"InputCards__ExtraFieldsImage"]),style:{backgroundImage:`url(${n.image})`}},n.hasExtraFields&&n.imageWithFooter&&t.createElement("div",{style:{backgroundImage:`url(${n.imageWithFooter})`,opacity:e?1:0},className:"card-image is-relative InputCards__ExtraFieldsImage  card-image-active-background"}),t.createElement("div",{className:"InputCards__SlideInfo is-overlay"},t.createElement("div",{className:"InputCards__SlideInfoContent"},t.createElement("p",{className:"InputCards__CardDescription is-size-6"},n.title),!n.hasExtraFields&&t.createElement("button",{type:"button",className:"button is-pulled-right"},r.select)))),n.hasExtraFields&&t.createElement("div",{className:"InputCards__ExtraContent"},t.createElement("div",{className:"card-content"},t.createElement("h1",{className:"InputCards__Title title is-spaced"},n.title),t.createElement("h2",{className:"InputCards__Description subtitle has-text-weight-medium"},n.description),t.createElement("p",{className:"InputCards__Details description has-text-weight-medium"},n.details)),(n.highlighted||n.button)&&t.createElement("footer",{className:"card-footer"},t.createElement("div",{className:"card-footer-item"},t.createElement("h3",{className:"has-text-weight-bold InputCards__HighLighted"},n.highlighted)),t.createElement("div",{className:"card-footer-item"},n.button&&t.createElement("button",{type:"button",className:"button button--bordered InputCards__CTA"},n.button)))))};function kg(e){const{text:n}=d(),r=(0,t.useRef)(),{window:i,document:o}=s(),a=i.innerWidth>768?2:1,l=e.cards.length,[c,u]=(0,t.useState)(0),f=ae.Z.appendUIKey(e.cards);return t.createElement(wg,{className:"InputButtons",totalSlides:l},l>1&&t.createElement(eg,null,e.help),t.createElement("div",{className:"field is-relative is-marginless"},t.createElement(gg.Z,{beforeChange:(e,t)=>{setTimeout((()=>{u(t)}),0),((e,t)=>{const n=o.querySelector("[is-last-slide]");null!==n&&n.removeAttribute("is-last-slide");const r=o.querySelector(".slick-slide.slick-active.slick-cloned");null!==r&&(t>e||e===l-1&&0===t)&&r.setAttribute("is-last-slide",!0)})(e,t)},className:"InputCards__Slider",focusOnSelect:!0,infinite:!0,nextArrow:t.createElement(yg,{nextText:n.next}),onSwipe:()=>{r&&(r.current.innerSlider.clickable=!0)},prevArrow:t.createElement(yg,{isPrev:!0}),ref:r,responsive:[{breakpoint:768,settings:{slidesToShow:1}}],slidesToScroll:1,slidesToShow:a},f.map(((n,r)=>{const i={card:n};return t.createElement(_g,{active:c===r,card:n,key:i,onSubmit:e.onSubmit},t.createElement(xg,{active:c===r,card:n}))})))))}function Eg({message:e,onSubmit:n}){const{text:r}=d(),i=e.getCards();return i.length>0?t.createElement(kg,{cards:i,onSubmit:e=>n({type:"button",message:e.title,payload:e.payload}),help:r.input_menu_help}):null}xg.propTypes={active:i().bool,card:i().object},xg.defaultProps={active:!1,card:{}},kg.propTypes={cards:i().arrayOf(i().shape({title:i().string,payload:i().string,image:i().string,href:i().string,hasExtraFields:i().bool,uiKey:i().string})),help:i().string,onSubmit:i().func},kg.defaultProps={cards:[],help:"",onSubmit:()=>{}},Eg.propTypes={message:i().object,onSubmit:i().func},Eg.defaultProps={message:null,onSubmit:()=>{}};const Sg="booked",Cg="skipped";function Tg({message:e,onSubmit:n}){const{window:r}=s(),{scheduling_url:i,button_message:o,skip_message:a}=e,l=a||"Skip";return function(e){const{document:n}=s();(0,t.useLayoutEffect)((()=>{const t=n.createElement("link");return t.rel="stylesheet",t.href=e,n.head.append(t),()=>t.remove()}),[n,e])}("https://assets.calendly.com/assets/external/widget.css"),function(e){const{document:n}=s();(0,t.useLayoutEffect)((()=>{const t=n.createElement("script");return t.src=e,t.type="text/javascript",n.head.append(t),()=>t.remove()}),[n,e])}("https://assets.calendly.com/assets/external/widget.js"),(0,t.useEffect)((()=>{const e=e=>{if(e.data.event&&0===e.data.event.indexOf("calendly"))switch(e.data.event){case"calendly.profile_page_viewed":case"calendly.event_type_viewed":case"calendly.date_and_time_selected":return;case"calendly.event_scheduled":return n({type:P.CALENDLY,action:Sg,message:o,payload:e.data.payload}),void r.Calendly.closePopupWidget()}};return r.addEventListener("message",e),()=>r.removeEventListener("message",e)}),[r]),t.createElement(sb,{message:e,showText:!0},t.createElement("div",{className:"is-block has-text-centered"},t.createElement(Ci,{className:"is-fullwidth",onClick:()=>r.Calendly.showPopupWidget(i),label:o})),t.createElement("div",{className:"is-block has-text-centered mt-2"},t.createElement("a",{className:"is-inline-block py-2 px-4",onClick:()=>{n({type:P.CALENDLY,action:Cg,message:l,payload:{}})}},l)))}function Og(e){const{text:{error_input_date:n}}=d(),{message:r}=e,i=r.getDateFnsFormat(),o=(0,t.useRef)(null);return t.createElement($b,dd({bubbleClassName:"is-relative",className:"InputDate"},Yb(e),{hasAutofocus:!1,onSubmit:({type:t,message:n})=>{e.onSubmit({type:t,message:r.applyDateFormat(n),extra:{timestamp:n.valueOf()/1e3}})},validate:e=>r.isValidDate(e)?"":n.replace(/@format/i,r.dateFormat)}),t.createElement(Ll,{format:i,initialMonth:r.getDatePickerInitialMonth(),inputRef:o,isInsideForm:r.isInsideForm,isMobile:E.isMobile,modifiers:{disabled:e=>!r.isValidDate(e)},showDatePicker:r.showDatePicker}))}function Pg(e){const{text:{error_input_email:n}}=d();return t.createElement($b,dd({className:"InputEmail"},Yb(e),{validate:e=>oe.validEmail(e,n)}),t.createElement(Fl,{name:"email",type:"email"}))}Tg.propTypes={message:i().shape({url:i().string}),onSubmit:i().func},Tg.defaultProps={message:{},onSubmit:()=>{}},Og.propTypes={onSubmit:i().func,message:i().object},Og.defaultProps={onSubmit:()=>{},message:null},Pg.propTypes={message:i().object},Pg.defaultProps={message:null};const Ig=gi.div`
  @media ${Ju} {
    width: 356px;
  }

  &.InputFile--draggedover {

    .InputFile__DropArea {
      box-shadow: inset 0 0px 7px 7px rgba(0,0,0,0.2);
    }

    .InputFile__DropBorder {
      border-color: ${({theme:e})=>e.design.form_buttons_color};
    }
  }

  .is-loading.button::after {
    border-color: transparent transparent ${({theme:e})=>e.design.form_buttons_color};
  }

  .InputFile__DropArea,
  .InputFile__inputarea {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }

  .InputFile__DropArea {
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
  }

  .InputFile__filename {
    color: ${({theme:e})=>e.design.form_help_color};
  }

  .InputFile__HelpText {
    width: calc(66.66% - 8px);
    font-size: 14px;
  }

  .InputFile__ButtonContainer:hover .button {
    box-shadow: 0 6px 21px -11px rgba(0,0,0,0.75), 0 13px 17px -16px rgba(47,49,72,0.75);
  }
`,Ng=gi.div`
  padding: 10px 8px;
  display: flex;
  /* overflow-x: auto; */
  align-items: center;
  box-sizing: content-box;
  justify-content: left;
  border-radius: 3px;
  flex-wrap: wrap;
  min-height: 112px;
  box-sizing: border-box;

  .InputFile__filethumbnail .InputFile__DropIcon {
    margin: 0;

    &:after {
      content: '';
      background-color: rgb(0 0 0 / 15%);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`,Mg=gi.div`
  border: 2px dashed white;
  height: 92px;
  width: calc(33.33% - 8px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  left: 4px;
  margin: 6px 0;

  @media ${rd} {
    width: calc(25% - 8px);
  }
`,Dg=gi.i`
  transform: rotate(45deg);
  font-size: 24px;
`,Ag=gi.div`
  width: 100%;
  height: 92px;
  display: flex;
  border-radius: 2px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-width: 1px;
  border-style: dashed;
`,jg=gi.i`
  font-size: 40px;
  margin-right: 6px;
  
  &:before {
    position: relative;
    z-index: 1;
  }
`,Rg=gi.span`
  @media ${td} {
    display: none;
  }
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`,Lg=gi.div`
  height: 94px;
  display: flex;
  width: 33.33%;
  padding: 0 5px;
  margin: 6px 0;

  @media ${rd} {
    width: 25%;
  }
`,Fg=gi.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  .custom-button.button {
    padding: 6px 16px;

    &.InputFile__SendButton {
      min-width: calc(33.33% + 12px);
      margin: 0 0 0 auto;

      @media ${rd} {
        min-width: calc(25% + 12px);
      }
    }
  }
`,zg=gi.div`
  line-height: 1.35em;
  flex-shrink: 0;
  width: 100%;
  position: relative;
`,Ug=gi(zg)`
  color: #B50000;
  font-size: 14px;
  margin-bottom: 20px;
  padding-right: 24px;
  justify-content: space-between;

  .InputFile__closebutton {
    right: 0;
    top: 0;
    background-color: #B50000;
    height: 18px;
    width: 18px;

    &::before,
    &::after {
      background-color: white;
    }
  }
`,Bg=gi.div`
  height: 100%;
  width: 100%;
  border-radius: 3px;
  position: relative;
  align-items: center;
  display: inline-flex;
  background-size: cover;
  justify-content: center;
  background-position: 50%;
  border: 2px dashed #ffffff;
`,Vg=gi.div`
  top: -3px;
  z-index: 1;
  width: 24px;
  height: 24px;
  right: -10px;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;

  &::before,
  &::after {
    top: 50%;
    left: 50%;
    width: 50%;
    content: '';
    height: 2px;
    display: block;
    position: absolute;
    background-color: black;
    transform-origin: center center;
  }

  &::before {
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }

  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`,Wg=({content:e,filesize:n,setError:r})=>t.createElement(Ug,{className:"InputFile__Error is-flex has-text-weight-semibold"},t.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},e),n&&t.createElement("span",{className:"InputFile__Error-FileSize has-text-right"},n),t.createElement(Vg,{className:"InputFile__closebutton",onClick:()=>r(null)}));Wg.propTypes={content:i().string,filesize:i().string,setError:i().func},Wg.defaultProps={content:"error",filesize:null,setError:()=>{}};const qg="max_size",Hg="maxnumber_files",$g="fetch";const Yg=gi.button`
  margin: 0 6px;
  padding-top: 1em;
`,Gg=gi.ul`
  top: 0;
  right: 51px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  @media ${td} {
    right: 45px;
  }
`,Kg=gi.button`
  border: 0;
  opacity: 0.7;
  background: transparent;
  cursor: pointer;

  svg path {
    fill: var(--message_color_bot);
  }
`,Qg=gi(Kg)`
  font-size: 1.3rem;
`,Xg=gi.input`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;function Zg({onSelectEmoji:e,uploadFile:n,hasAttachButton:r}){const{document:i}=s(),o=(0,t.useRef)(null),[a,l]=(0,t.useState)(null),[c,u]=(0,t.useState)(!1),d=e=>{o.current.contains(e.target)||(u(!1),i.removeEventListener("click",d))};return t.createElement(t.Fragment,null,t.createElement(Gg,{className:"inputaddons"},r&&t.createElement("li",null,t.createElement(Jg,{uploadFile:n})),t.createElement("li",null,c&&!a&&t.createElement(Yg,{className:"button is-loading is-transparent"})||t.createElement(ev,{onClick:e=>(async()=>{u(!0);const e=await Promise.all([__webpack_require__.e(949),__webpack_require__.e(640)]).then(__webpack_require__.bind(__webpack_require__,4644));l(e.default),i.addEventListener("click",d)})()}))),t.createElement("div",{className:"emoji-mart__container",ref:o},c&&a&&t.createElement(a,{style:{position:"absolute",bottom:"62px",right:"0px"},onSelect:t=>e(t)})))}Zg.propTypes={hasAttachButton:i().bool,onSelectEmoji:i().func,uploadFile:i().func},Zg.defaultProps={hasAttachButton:!1,onSelectEmoji:()=>{},uploadFile:()=>{}};const Jg=({uploadFile:e})=>t.createElement(Kg,{type:"button",className:"inputaddons__addonitem inputaddons__filebutton is-relative"},t.createElement(Xg,{onChange:t=>e(t.target.files[0]),type:"file"}),t.createElement(_m,null));Jg.propTypes={uploadFile:i().func.isRequired};const ev=({onClick:e})=>t.createElement(Qg,{type:"button",className:"inputaddons__addonitem inputaddons__emojisbutton",onClick:e},t.createElement("span",{role:"img","aria-label":"slightly_smiling_face"},t.createElement(bm,null)));function tv(e){const{uploadedFiles:n}=e,{text:r}=d(),i=n&&n.length>0,o=r.input_files_instructions_help.replace("@maxfiles","6").replace("@maxfilesize","10MB");return t.createElement(Ig,{className:Qu()({InputFile:!0,"InputFile--draggedover":e.dragOver})},t.createElement(Ng,{className:"InputFile__DropArea",onDragEnd:e.onDragLeave,onDragLeave:e.onDragLeave,onDragOver:e.onDragOver,onDrop:e.onDrop},i?n.map((r=>t.createElement(Lg,{className:"InputFile__filecontainer",key:r.key},t.createElement(Bg,{className:"InputFile__filethumbnail hu-text-center hu-align-center hu-justify-center","data-type":r.type||null,style:{backgroundImage:r.url?`url('${r.url}') `:null}},t.createElement(Vg,{className:"InputFile__closebutton","data-key":r.key||null,onClick:t=>e.onRemoveFile(t)}),"image"!==n.type&&t.createElement(jg,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}))))):t.createElement(Ag,{className:"InputFile__DropBorder"},t.createElement(jg,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}),t.createElement(Rg,{className:"InputFile__DropTitle"},r.input_files_help)),i&&n.length<6&&t.createElement(Mg,{className:"InputFile__DropAreaButton"},t.createElement(Xg,{multiple:!0,onChange:t=>e.uploadFiles(t.target.files),type:"file"}),t.createElement(Dg,{className:"fi cross input-drop-icon hu-s-40"}))),t.createElement(Fg,{className:"InputFile__inputarea hu-display-flex hu-align-center"},e.error,!i&&t.createElement(t.Fragment,null,t.createElement(zg,{className:"InputFile__filename InputFile__HelpText"},o),t.createElement("div",{className:"is-relative InputFile__ButtonContainer"},t.createElement(Xg,{multiple:!0,onChange:t=>e.uploadFiles(t.target.files),type:"file"}),t.createElement(Oi,{className:Qu()(e.loading&&"is-loading"),label:r.select_files}))),i&&t.createElement(Oi,{className:Qu()(e.loading&&"is-loading","InputFile__SendButton"),label:r.send,onClick:e.onSubmit})))}function nv(e){const{uploadedFiles:n}=e,{text:r}=d(),i=n&&n.length>0,o=r.input_file_instructions_help.replace("@maxfilesize","10MB");return t.createElement(Ig,{className:Qu()({InputFile:!0,"InputFile--draggedover":e.dragOver})},t.createElement(Ng,{className:"InputFile__DropArea",onDragEnd:e.onDragLeave,onDragLeave:e.onDragLeave,onDragOver:e.onDragOver,onDrop:e.onDrop},i?n.map((r=>t.createElement(Lg,{className:"InputFile__filecontainer",key:r.key},t.createElement(Bg,{className:"InputFile__filethumbnail hu-text-center hu-align-center hu-justify-center","data-type":r.type||null,style:{backgroundImage:r.url?`url('${r.url}') `:null}},t.createElement(Vg,{className:"InputFile__closebutton","data-key":r.key||null,onClick:t=>e.onRemoveFile(t)}),"image"!==n.type&&t.createElement(jg,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}))))):t.createElement(Ag,{className:"InputFile__DropBorder"},t.createElement(jg,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}),t.createElement(Rg,{className:"InputFile__DropTitle"},r.input_file_help))),t.createElement(Fg,{className:"InputFile__inputarea hu-display-flex hu-align-center"},e.error,!i&&t.createElement(t.Fragment,null,t.createElement(zg,{className:"InputFile__filename InputFile__HelpText"},o),t.createElement("div",{className:"is-relative InputFile__ButtonContainer"},t.createElement(Xg,{onChange:t=>e.uploadFile(t.target.files[0]),type:"file"}),t.createElement(Oi,{className:Qu()(e.loading&&"is-loading"),label:r.select_file}))),i&&t.createElement(Oi,{className:Qu()(e.loading&&"is-loading","InputFile__SendButton"),label:r.send,onClick:e.onSubmit})))}function rv(e){const[n,r]=(0,t.useState)(!1),i=e=>{e.preventDefault(),r(!0)},o=e=>{e.preventDefault(),r(!1)},a=t=>{const{dataTransfer:n}=t;t.preventDefault(),r(!1),n.effectAllowed="none",n.dropEffect="none",e.onDropUpload(n.files)};return e.multiple?t.createElement(tv,dd({},e,{dragOver:n,onDragOver:i,onDragLeave:o,onDrop:a})):t.createElement(nv,dd({},e,{dragOver:n,onDragOver:i,onDragLeave:o,onDrop:a}))}function iv(e){const{multiple:n}=e.message,r=n?6:1,{uploadedFiles:i,error:o,removeUploadedFile:a,isFetching:s,uploadFile:l,uploadFiles:c,setError:u}=function(e){const[n,r]=(0,t.useState)([]),[i,o]=(0,t.useState)(null),[a,s]=(0,t.useState)(!1),l=Ad(),{text:c}=d(),u=1===e?c.input_file_max_help.replace("@maxfiles",e):c.input_files_max_help.replace("@maxfiles",e),f=(e,n)=>{switch(e){case qg:return t.createElement(Wg,{setError:o,content:n.name,filesize:`${ae.Z.bytesToMegaBytes(n.size)}MB`});case Hg:return t.createElement(Wg,{setError:o,content:t.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},u)});case $g:return t.createElement(Wg,{setError:o,content:t.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},"Error! Please, try again.")});default:return null}},p=e=>e.size<=1e7?(s(!0),(new FormData).append("image",e),v.fetchUploadFile({channelToken:l.config.channelToken,customerToken:l.customerToken,serverUrl:l.config.serverUrl,file:e}).then((({url:t})=>{const n={url:t,name:e.name,size:e.size,key:g().utils.utils.randomKey()};r((e=>[...e,n]))})).catch((e=>{o(f($g,null)),console.error(e)})).finally((()=>s(!1)))):(o(f(qg,e)),null);return{uploadedFiles:n,removeUploadedFile:e=>{o(null);const{key:t}=e.target.dataset,i=n.findIndex((e=>e.key===t));r([...n.slice(0,i),...n.slice(i+1)])},error:i,isFetching:a,uploadFiles:t=>{o(null);const r=Object.values(t);r.length+n.length>e?o(f(Hg)):r.forEach((e=>{p(e)}))},uploadFile:p,setError:o}}(r);return t.createElement(rv,{uploadedFiles:i,error:o,loading:s,uploadFile:l,uploadFiles:c,onDropUpload:c,onRemoveFile:a,setError:u,onSubmit:()=>!0===n?(()=>{const t=i.map((e=>({url:e.url}))),n=i.map((e=>e.name)).join(", ");e.onSubmit({type:"multiple_files",urls:t,message:n})})():(()=>{const t=i[0];e.onSubmit({type:"file",url:t.url,message:t.name})})(),multiple:n})}ev.propTypes={onClick:i().func.isRequired},tv.propTypes={uploadedFiles:i().array,loading:i().bool,error:i().any,onRemoveFile:i().func,onSubmit:i().func,uploadFiles:i().func,onDragOver:i().func,onDragLeave:i().func,onDrop:i().func,dragOver:i().bool},tv.defaultProps={uploadedFiles:null,loading:!1,error:null,onRemoveFile:()=>{},onSubmit:()=>{},uploadFiles:()=>{},onDragOver:()=>{},onDragLeave:()=>{},onDrop:()=>{},dragOver:!1},nv.propTypes={uploadedFiles:i().array,loading:i().bool,error:i().any,onRemoveFile:i().func,onSubmit:i().func,uploadFile:i().func,onDragOver:i().func,onDragLeave:i().func,onDrop:i().func,dragOver:i().bool},nv.defaultProps={uploadedFiles:null,loading:!1,error:null,onRemoveFile:()=>{},onSubmit:()=>{},uploadFile:()=>{},onDragOver:()=>{},onDragLeave:()=>{},onDrop:()=>{},dragOver:!1},rv.propTypes={multiple:i().bool,onDropUpload:i().func,uploadedFiles:i().array},rv.defaultProps={multiple:!1,onDropUpload:()=>{},uploadedFiles:null},iv.propTypes={onSubmit:i().func,message:i().object},iv.defaultProps={onSubmit:()=>{},message:null};var ov=e=>null==e,av=e=>Array.isArray(e);const sv=e=>"object"==typeof e;var lv=e=>!ov(e)&&!av(e)&&sv(e),cv=e=>lv(e)&&e.nodeType===Node.ELEMENT_NODE;const uv={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit"},dv="undefined",fv="blur",pv="change",hv="input",mv="max",bv="min",gv="maxLength",vv="minLength",yv="pattern",wv="required",_v="validate",xv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kv=/^\w*$/,Ev=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sv=/\\(\\)?/g;var Cv=e=>!av(e)&&(kv.test(e)||!xv.test(e)),Tv=e=>{const t=[];return e.replace(Ev,((e,n,r,i)=>{t.push(r?i.replace(Sv,"$1"):n||e)})),t};function Ov(e,t,n){let r=-1;const i=Cv(t)?[t]:Tv(t),o=i.length,a=o-1;for(;++r<o;){const t=i[r];let o=n;if(r!==a){const n=e[t];o=lv(n)||av(n)?n:isNaN(+i[r+1])?{}:[]}e[t]=o,e=e[t]}return e}var Pv=e=>Object.entries(e).reduce(((e,[t,n])=>Cv(t)?Object.assign(Object.assign({},e),{[t]:n}):(Ov(e,t,n),e)),{}),Iv=e=>void 0===e,Nv=(e,t,n)=>{const r=t.split(/[,[\].]+?/).filter(Boolean).reduce(((e,t)=>ov(e)?e:e[t]),e);return Iv(r)||r===e?Iv(e[t])?n:e[t]:r},Mv=(e,t)=>{cv(e)&&e.removeEventListener&&(e.removeEventListener(hv,t),e.removeEventListener(pv,t),e.removeEventListener(fv,t))},Dv=e=>"radio"===e.type,Av=e=>"checkbox"===e.type;function jv(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&jv(e.parentNode)}var Rv=e=>lv(e)&&!Object.keys(e).length;function Lv(e){return av(e)?e:Tv(e)}function Fv(e,t){return 1==t.length?e:function(e,t){const n=Cv(t)?[t]:Lv(t),r=t.length;let i=0;for(;i<r;)e=Iv(e)?i++:e[n[i++]];return i==r?e:void 0}(e,function(e,t,n){let r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t;const o=Array(i);for(;++r<i;)o[r]=e[r+t];return o}(t,0,-1))}function zv(e,t){return t.forEach((t=>{!function(e,t){const n=Cv(t)?[t]:Lv(t),r=Fv(e,n),i=n[n.length-1],o=!(null!=r)||delete r[i];let a;for(let t=0;t<n.slice(0,-1).length;t++){let r,i=-1;const o=n.slice(0,-(t+1)),s=o.length-1;for(t>0&&(a=e);++i<o.length;){const t=o[i];r=r?r[t]:e[t],s===i&&(lv(r)&&Rv(r)||av(r)&&!r.filter((e=>lv(e)&&!Rv(e))).length)&&(a?delete a[t]:delete e[t]),a=r}}}(e,t)})),e}const Uv=(e,t)=>e&&e.ref===t;const Bv={isValid:!1,value:""};var Vv=e=>av(e)?e.reduce(((e,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:e),Bv):Bv,Wv=e=>"file"===e.type,qv=e=>"select-multiple"===e.type,Hv=e=>""===e;const $v={value:!1,isValid:!1},Yv={value:!0,isValid:!0};var Gv=e=>{if(av(e)){if(e.length>1){const t=e.filter((e=>e&&e.ref.checked)).map((({ref:{value:e}})=>e));return{value:t,isValid:!!t.length}}const{checked:t,value:n,attributes:r}=e[0].ref;return t?r&&!Iv(r.value)?Iv(n)||Hv(n)?Yv:{value:n,isValid:!0}:Yv:$v}return $v};function Kv(e,t){const{name:n,value:r}=t,i=e[n];return Wv(t)?t.files:Dv(t)?i?Vv(i.options).value:"":qv(t)?(o=t.options,[...o].filter((({selected:e})=>e)).map((({value:e})=>e))):Av(t)?!!i&&Gv(i.options).value:r;var o}var Qv=e=>"string"==typeof e,Xv=(e,t)=>{const n={};for(const r in e)(Iv(t)||(Qv(t)?r.startsWith(t):av(t)?t.find((e=>r.startsWith(e))):t&&t.nest))&&(n[r]=Kv(e,e[r].ref));return n},Zv=(e,{type:t,types:n,message:r})=>lv(e)&&e.type===t&&e.message===r&&((e={},t={})=>{const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>t[n]&&t[n]===e[n]))})(e.types,n);var Jv=e=>e instanceof RegExp,ey=e=>{return lv(t=e)&&!Jv(t)?e:{value:e,message:""};var t},ty=e=>"function"==typeof e,ny=e=>"boolean"==typeof e,ry=e=>Qv(e)||lv(e)&&(0,t.isValidElement)(e);function iy(e,t,n="validate"){if(ry(e)||ny(e)&&!e)return{type:n,message:ry(e)?e:"",ref:t}}var oy=(e,t,n,r,i)=>{if(t){const t=n[e];return Object.assign(Object.assign({},t),{types:Object.assign(Object.assign({},t&&t.types?t.types:{}),{[r]:i||!0})})}return{}},ay=async(e,t,{ref:n,ref:{type:r,value:i,name:o},options:a,required:s,maxLength:l,minLength:c,min:u,max:d,pattern:f,validate:p})=>{var h;const m=e.current,b={},g=Dv(n),v=Av(n),y=g||v,w=Hv(i),_=oy.bind(null,o,t,b),x=(e,r,i,a=gv,s=vv)=>{const l=e?r:i;if(b[o]=Object.assign({type:e?a:s,message:l,ref:n},_(e?a:s,l)),!t)return b};if(s&&(!g&&!v&&(w||ov(i))||ny(i)&&!i||v&&!Gv(a).isValid||g&&!Vv(a).isValid)){const{value:e,message:r}=ry(s)?{value:!!s,message:s}:ey(s);if(e&&(b[o]=Object.assign({type:wv,message:r,ref:y?null===(h=m[o].options)||void 0===h?void 0:h[0].ref:n},_(wv,r)),!t))return b}if(!ov(u)||!ov(d)){let e,o;const{value:a,message:s}=ey(d),{value:l,message:c}=ey(u);if("number"===r||!r&&!isNaN(i)){const t=n.valueAsNumber||parseFloat(i);ov(a)||(e=t>a),ov(l)||(o=t<l)}else{const t=n.valueAsDate||new Date(i);Qv(a)&&(e=t>new Date(a)),Qv(l)&&(o=t<new Date(l))}if((e||o)&&(x(!!e,s,c,mv,bv),!t))return b}if(Qv(i)&&!w&&(l||c)){const{value:e,message:n}=ey(l),{value:r,message:o}=ey(c),a=i.toString().length,s=!ov(e)&&a>e,u=!ov(r)&&a<r;if((s||u)&&(x(!!s,n,o),!t))return b}if(f&&!w){const{value:e,message:r}=ey(f);if(Jv(e)&&!e.test(i)&&(b[o]=Object.assign({type:yv,message:r,ref:n},_(yv,r)),!t))return b}if(p){const e=Kv(m,n),r=y&&a?a[0].ref:n;if(ty(p)){const n=iy(await p(e),r);if(n&&(b[o]=Object.assign(Object.assign({},n),_(_v,n.message)),!t))return b}else if(lv(p)){let n={};for(const[i,a]of Object.entries(p)){if(!Rv(n)&&!t)break;const s=iy(await a(e),r,i);s&&(n=Object.assign(Object.assign({},s),_(i,s.message)),t&&(b[o]=n))}if(!Rv(n)&&(b[o]=Object.assign({ref:r},n),!t))return b}}return b};const sy=(e,t)=>av(e.inner)?e.inner.reduce(((e,{path:n,message:r,type:i})=>Object.assign(Object.assign({},e),n?e[n]&&t?{[n]:oy(n,t,e,i,r)}:{[n]:e[n]||Object.assign({message:r,type:i},t?{types:{[i]:r||!0}}:{})}:{})),{}):{[e.path]:{message:e.message,type:e.type}};async function ly(e,t,n,r,i){if(r)return r(n,i);try{return{values:await e.validate(n,{abortEarly:!1,context:i}),errors:{}}}catch(e){return{values:{},errors:Pv(sy(e,t))}}}var cy=e=>ov(e)||!sv(e);const uy=(e,t)=>{const n=(t,n,r)=>{const i=r?`${e}.${n}`:`${e}[${n}]`;return cy(t)?i:uy(i,t)};return av(t)?t.map(((e,t)=>n(e,t))):Object.entries(t).map((([e,t])=>n(t,e,!0)))};var dy=(e,t,n,r,i)=>{let o;return n.add(t),Rv(e)?o=void 0:Iv(e[t])?(o=Nv(Pv(e),t),Iv(o)||((e,t)=>uy(e,t).flat(1/0))(t,o).forEach((e=>n.add(e)))):(o=e[t],n.add(t)),Iv(o)?i?r:Nv(r,t):o},fy=({isOnChange:e,hasError:t,isBlurEvent:n,isOnSubmit:r,isReValidateOnSubmit:i,isOnBlur:o,isReValidateOnBlur:a,isSubmitted:s})=>e&&n||r&&i||r&&!s||o&&!n&&!t||a&&!n&&t||i&&s,py=e=>e.substring(0,e.indexOf("[")),hy=(e,t)=>{const n=Pv(Xv(e));return t?Nv(n,t,n):n};function my(e,t){let n=!1;if(!av(e)||!av(t)||e.length!==t.length)return!0;for(let r=0;r<e.length&&!n;r++){const i=e[r],o=t[r];if(Iv(o)||Object.keys(i).length!==Object.keys(o).length){n=!0;break}for(const e in i)if(i[e]!==o[e]){n=!0;break}}return n}const by=(e,t)=>RegExp(`^${t}[\\d+]`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var gy=(e,t)=>[...e].some((e=>by(t,e)));var vy=e=>({isOnSubmit:!e||e===uv.onSubmit,isOnBlur:e===uv.onBlur,isOnChange:e===uv.onChange}),yy=e=>Dv(e)||Av(e);function wy({mode:e=uv.onSubmit,reValidateMode:n=uv.onChange,validationSchema:r,validationResolver:i,validationContext:o,defaultValues:a={},submitFocusError:s=!0,validateCriteriaMode:l}={}){const c=(0,t.useRef)({}),u=(0,t.useRef)({}),d=(0,t.useRef)({}),f=(0,t.useRef)({}),p=(0,t.useRef)(new Set),h=(0,t.useRef)(new Set),m=(0,t.useRef)(new Set),b=(0,t.useRef)(new Set),g=(0,t.useRef)(!0),v=(0,t.useRef)(a),y=(0,t.useRef)({}),w=(0,t.useRef)(!1),_=(0,t.useRef)(!1),x=(0,t.useRef)(!1),k=(0,t.useRef)(!1),E=(0,t.useRef)(0),S=(0,t.useRef)(!1),C=(0,t.useRef)(),T=(0,t.useRef)({}),O=(0,t.useRef)(o),P=(0,t.useRef)(new Set),[,I]=(0,t.useState)(),{isOnBlur:N,isOnSubmit:M,isOnChange:D}=(0,t.useRef)(vy(e)).current,A="all"===l,j=typeof window===dv,R=!(!r&&!i),L=typeof document!==dv&&!j&&!Iv(window.HTMLElement),F=L?"Proxy"in window:typeof Proxy!==dv,z=(0,t.useRef)({dirty:!F,dirtyFields:!F,isSubmitted:M,submitCount:!F,touched:!F,isSubmitting:!F,isValid:!F}),{isOnBlur:U,isOnSubmit:B}=(0,t.useRef)(vy(n)).current;O.current=o;const V=(0,t.useCallback)((()=>{w.current||I({})}),[]),W=(0,t.useCallback)(((e,t,n=!1)=>{let r=n||function({errors:e,name:t,error:n,validFields:r,fieldsWithValidation:i}){const o=Rv(n),a=Rv(e),s=Nv(n,t),l=Nv(e,t);return!(o&&r.has(t)||l&&l.isManual)&&(!!(a!==o||!a&&!l||o&&i.has(t)&&!r.has(t))||s&&!Zv(l,s))}({errors:u.current,error:t,name:e,validFields:b.current,fieldsWithValidation:m.current});if(Rv(t))(m.current.has(e)||R)&&(b.current.add(e),r=r||Nv(u.current,e)),u.current=zv(u.current,[e]);else{const n=Nv(u.current,e);b.current.delete(e),r=r||!n||!Zv(n,t[e]),Ov(u.current,e,t[e])}if(r&&!ov(n))return V(),!0}),[V,R]),q=(0,t.useCallback)(((e,t)=>{const{ref:n,options:r}=e,i=L&&cv(n)&&ov(t)?"":t;Dv(n)&&r?r.forEach((({ref:e})=>e.checked=e.value===i)):Wv(n)?Qv(i)?n.value=i:n.files=i:qv(n)?[...n.options].forEach((e=>e.selected=i.includes(e.value))):Av(n)&&r?r.length>1?r.forEach((({ref:e})=>e.checked=i.includes(e.value))):r[0].ref.checked=!!i:n.value=i}),[L]),H=(0,t.useCallback)((e=>{if(!c.current[e]||!z.current.dirty&&!z.current.dirtyFields)return!1;let t=y.current[e]!==Kv(c.current,c.current[e].ref);const n=gy(P.current,e),r=h.current.size;if(n){const n=py(e);t=my(hy(c.current,n),Nv(v.current,n))}const i=(n?k.current:h.current.has(e))!==t;return t?h.current.add(e):h.current.delete(e),k.current=n?t:!!h.current.size,z.current.dirty?i:r!==h.current.size}),[]),$=(0,t.useCallback)(((e,t,n)=>{const r=av(t);for(const i in t){const o=`${n||e}${r?`[${i}]`:`.${i}`}`,a=c.current[o];lv(t[i])&&$(e,t[i],o),a&&(q(a,t[i]),H(o))}}),[q,H]),Y=(0,t.useCallback)(((e,t)=>{const n=c.current[e];if(n){q(n,t);const r=H(e);if(ny(r))return r}else cy(t)||$(e,t)}),[H,q,$]),G=(0,t.useCallback)((async(e,t)=>{const n=c.current[e];if(n){const r=await ay(c,A,n);return W(e,r,!!t&&null),Rv(r)}return!1}),[W,A]),K=(0,t.useCallback)((async e=>{const{errors:t}=await ly(r,A,hy(c.current),i,O.current),n=g.current;if(g.current=Rv(t),av(e))e.forEach((e=>{const n=Nv(t,e);n?Ov(u.current,e,n):zv(u.current,[e])})),V();else{const r=Nv(t,e);W(e,r?{[e]:r}:{},n!==g.current)}return Rv(u.current)}),[V,W,A,i,r]),Q=(0,t.useCallback)((async e=>{const t=e||Object.keys(c.current);if(R)return K(t);if(av(t)){const e=await Promise.all(t.map((async e=>await G(e,!0))));return V(),e.every(Boolean)}return await G(t)}),[K,G,V,R]),X=e=>_.current||p.current.has(e)||p.current.has((e.match(/\w+/)||[])[0]);C.current=C.current?C.current:async({type:e,target:t})=>{const n=t?t.name:"",o=c.current,a=u.current,s=o[n],l=Nv(a,n);let f;if(!s)return;const p=e===fv,h=fy({hasError:!!l,isOnChange:D,isBlurEvent:p,isOnSubmit:M,isReValidateOnSubmit:B,isOnBlur:N,isReValidateOnBlur:U,isSubmitted:x.current}),m=H(n);let b=X(n)||m;if(p&&!Nv(d.current,n)&&z.current.touched&&(Ov(d.current,n,!0),b=!0),h)return b&&V();if(R){const{errors:e}=await ly(r,A,hy(o),i,O.current),t=g.current;g.current=Rv(e),f=Nv(e,n)?{[n]:Nv(e,n)}:{},t!==g.current&&(b=!0)}else f=await ay(c,A,s);!W(n,f)&&b&&V()};const Z=(0,t.useCallback)(((e={})=>{const t=Rv(v.current)?Xv(c.current):v.current;ly(r,A,Pv(Object.assign(Object.assign({},t),e)),i,O.current).then((({errors:e})=>{const t=g.current;g.current=Rv(e),t!==g.current&&V()}))}),[V,A,i]),J=(0,t.useCallback)(((e,t)=>{C.current&&e&&function(e,t,n,r){const{ref:i,ref:{name:o,type:a},mutationWatcher:s}=n,l=e[o];if(a)if((Dv(i)||Av(i))&&l){const{options:n}=l;av(n)&&n.length?(n.filter(Boolean).forEach(((e,i)=>{const{ref:o,mutationWatcher:a}=e;(o&&jv(o)&&Uv(e,o)||r)&&(Mv(o,t),a&&a.disconnect(),zv(n,[`[${i}]`]))})),n&&!n.filter(Boolean).length&&delete e[o]):delete e[o]}else(jv(i)&&Uv(l,i)||r)&&(Mv(i,t),s&&s.disconnect(),delete e[o]);else delete e[o]}(c.current,C.current,e,t)}),[]),ee=(0,t.useCallback)(((e,t)=>{if(!e||e&&gy(P.current,e.ref.name)&&!t)return;J(e,t);const{name:n}=e.ref;u.current=zv(u.current,[n]),d.current=zv(d.current,[n]),y.current=zv(y.current,[n]),[h,m,b,p].forEach((e=>e.current.delete(n))),(z.current.isValid||z.current.touched)&&(V(),R&&Z())}),[V,R,Z,J]);const te=({name:e,type:t,types:n,message:r,shouldRender:i})=>{const o=c.current[e];Zv(Nv(u.current,e),{type:t,message:r,types:n})||(Ov(u.current,e,{type:t,types:n,message:r,ref:o?o.ref:{},isManual:!0}),i&&V())};function ne(e,t={}){if(!e.name)return console.warn("Missing name @",e);const{name:n,type:r,value:i}=e,o=Object.assign({ref:e},t),a=c.current,s=yy(e);let l,u,d=a[n],f=!0;if(s?d&&av(d.options)&&d.options.filter(Boolean).find((t=>i===t.ref.value&&t.ref===e)):d&&e===d.ref)a[n]=Object.assign(Object.assign({},d),t);else{if(r){const i=function(e,t){const n=new MutationObserver((()=>{jv(e)&&(n.disconnect(),t())}));return n.observe(window.document,{childList:!0,subtree:!0}),n}(e,(()=>ee(d)));d=s?Object.assign({options:[...d&&d.options||[],{ref:e,mutationWatcher:i}],ref:{type:r,name:n}},t):Object.assign(Object.assign({},o),{mutationWatcher:i})}else d=o;var p;a[n]=d,Rv(v.current)||(u=Nv(v.current,n),f=Iv(u),l=gy(P.current,n),f||l||q(d,u)),R&&!l&&z.current.isValid?Z():Rv(t)||(m.current.add(n),!M&&z.current.isValid&&ay(c,A,d).then((e=>{const t=g.current;Rv(e)?b.current.add(n):g.current=!1,t!==g.current&&V()}))),y.current[n]||l&&f||(y.current[n]=f?Kv(a,d.ref):u),r&&function({field:{ref:e},handleChange:t,isRadioOrCheckbox:n}){cv(e)&&t&&(e.addEventListener(n?pv:hv,t),e.addEventListener(fv,t))}({field:s&&d.options?d.options[d.options.length-1]:d,isRadioOrCheckbox:s||(p=e,"select-one"===p.type),handleChange:C.current})}}const re=(0,t.useCallback)((e=>async t=>{t&&(t.preventDefault(),t.persist());let n={};const o=c.current;let a=Xv(o);z.current.isSubmitting&&(S.current=!0,V());try{if(R){const{errors:e,values:t}=await ly(r,A,Pv(a),i,O.current);u.current=e,n=e,a=t}else for(const e of Object.values(o))if(e){const{ref:{name:t}}=e,r=await ay(c,A,e);r[t]?(Ov(n,t,r[t]),b.current.delete(t)):m.current.has(t)&&b.current.add(t)}Rv(n)?(u.current={},V(),await e(Pv(a),t)):(u.current=n,s&&L&&((e,t)=>{for(const n in e)if(Nv(t,n)){const t=e[n];if(t){if(t.ref.focus){t.ref.focus();break}if(t.options){t.options[0].ref.focus();break}}}})(o,n))}finally{x.current=!0,S.current=!1,E.current=E.current+1,V()}}),[L,V,R,s,A,i,r]);(0,t.useEffect)((()=>()=>{w.current=!0,c.current&&Object.values(c.current).forEach((e=>ee(e,!0)))}),[ee]),R||(g.current=b.current.size>=m.current.size&&Rv(u.current));const ie={dirty:k.current,dirtyFields:h.current,isSubmitted:x.current,submitCount:E.current,touched:d.current,isSubmitting:S.current,isValid:M?x.current&&Rv(u.current):g.current},oe={triggerValidation:Q,setValue:(0,t.useCallback)((function(e,t,n){let r=!1;const i=av(e);(i?e:[e]).forEach((e=>{const n=Qv(e);r=!(!Y(n?e:Object.keys(e)[0],n?t:Object.values(e)[0])&&!i)||X(e)})),(r||i)&&V(),(n||i&&t)&&Q(i?void 0:e)}),[V,Y,Q]),register:(0,t.useCallback)((function(e,t){if(!j)if(Qv(e))ne({name:e},t);else{if(!lv(e)||!("name"in e))return t=>t&&ne(t,e);ne(e,t)}}),[v.current,y.current]),unregister:(0,t.useCallback)((function(e){c.current&&(av(e)?e:[e]).forEach((e=>ee(c.current[e],!0)))}),[]),getValues:(0,t.useCallback)((function(e){if(Qv(e))return c.current[e]?Kv(c.current,c.current[e].ref):Nv(v.current,e);const t=Xv(c.current),n=Rv(t)?v.current:t;return e&&e.nest?Pv(n):n}),[]),formState:F?new Proxy(ie,{get:(e,t)=>{if(t in e)return z.current[t]=!0,e[t]}}):ie},ae=Object.assign(Object.assign(Object.assign({removeFieldEventListener:J,reRender:V},R?{validateSchemaIsValid:Z}:{}),{mode:{isOnBlur:N,isOnSubmit:M,isOnChange:D},reValidateMode:{isReValidateOnBlur:U,isReValidateOnSubmit:B},errorsRef:u,touchedFieldsRef:d,fieldsRef:c,isWatchAllRef:_,watchFieldsRef:p,resetFieldArrayFunctionRef:T,fieldArrayDefaultValues:f,validFieldsRef:b,dirtyFieldsRef:h,fieldsWithValidationRef:m,fieldArrayNamesRef:P,isDirtyRef:k,readFormStateRef:z,defaultValuesRef:v}),oe);return Object.assign({watch:function(e,t){const n=p.current,r=Iv(t),i=r?v.current:t,o=Xv(c.current,e);if(Qv(e))return dy(o,e,n,r?Nv(i,e):t,!0);if(av(e))return e.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:dy(o,t,n,i)})),{});_.current=!0;const a=!Rv(o)&&o||i;return e&&e.nest?Pv(a):a},control:ae,handleSubmit:re,reset:(0,t.useCallback)(((e,t={})=>{if(L)for(const e of Object.values(c.current))if(e){const{ref:t,options:n}=e,r=yy(t)&&av(n)?n[0].ref:t;if(cv(r))try{r.closest("form").reset();break}catch(e){}}e&&(v.current=e),Object.values(T.current).forEach((e=>ty(e)&&e())),(({errors:e,dirty:t,isSubmitted:n,touched:r,isValid:i,submitCount:o,dirtyFields:a})=>{c.current={},e||(u.current={}),r||(d.current={}),i||(b.current=new Set,m.current=new Set,g.current=!0),t||(k.current=!1),a||(h.current=new Set),n||(x.current=!1),o||(E.current=0),y.current={},f.current={},p.current=new Set,_.current=!1})(t),V()}),[]),clearError:(0,t.useCallback)((function(e){e?zv(u.current,av(e)?e:[e]):u.current={},V()}),[]),setError:(0,t.useCallback)((function(e,t="",n){Qv(e)?te(Object.assign(Object.assign({name:e},lv(t)?{types:t,type:""}:{type:t,message:n}),{shouldRender:!0})):av(e)&&(e.forEach((e=>te(Object.assign({},e)))),V())}),[]),errors:u.current},oe)}(0,t.createContext)(null);function _y(e){return t.createElement("div",{className:Qu()("select",e.className)},t.createElement("select",{ref:e.inputRef,name:e.name,onChange:t=>e.onChange(t.target.value),required:e.required,value:e.value,className:e.hasAutofocus?"js-auto-focus":null},e.options.map((e=>t.createElement("option",{key:e.value,value:e.value},e.text)))))}function xy(e){return t.createElement("div",{className:Qu()("control",e.className)},e.children)}_y.propTypes={className:i().string,inputRef:i().func,name:i().string,onChange:i().func,options:i().arrayOf(i().shape({text:i().string,value:i().any})),required:i().bool,value:i().any,hasAutofocus:i().bool},_y.defaultProps={className:"",inputRef:null,name:null,onChange:()=>{},options:[],required:!1,value:void 0,hasAutofocus:!1},xy.propTypes={className:i().string,children:i().any},xy.defaultProps={className:"",children:null};var ky=gi.label`
  color: inherit !important;
  line-height: inherit;

  input {
    margin-right: 10px;
  }
`;function Ey(e){return t.createElement("div",{className:Qu()("CheckboxGroup control",e.className)},e.options.map(((n,r)=>t.createElement(xy,{key:r},t.createElement(ky,{className:"radio"},t.createElement("input",{type:"checkbox",name:e.name,ref:e.inputRef,defaultChecked:e.value===n.value,className:e.hasAutofocus&&0===r?"js-auto-focus":null,value:n.value,required:e.required}),n.text)))))}function Sy(e){return t.createElement("div",{className:Qu()("RadioGroup",e.className)},e.options.map(((n,r)=>t.createElement(xy,{key:r},t.createElement(ky,{className:"radio"},t.createElement("input",{type:"radio",name:e.name,onChange:t=>e.onChange(t.target.value),required:e.required,ref:e.inputRef,defaultChecked:e.value===n.value,value:n.value,className:e.hasAutofocus&&0===r?"js-auto-focus":null}),n.text)))))}Ey.propTypes={className:i().string,inputRef:i().func,name:i().string,options:i().arrayOf(i().shape({text:i().string,value:i().any})),value:i().any,hasAutofocus:i().bool,required:i().bool},Ey.defaultProps={className:"",inputRef:null,name:null,options:[],value:void 0,hasAutofocus:!1,required:!1},Sy.propTypes={className:i().string,inputRef:i().func,name:i().string,onChange:i().func,options:i().arrayOf(i().shape({text:i().string,value:i().any})),required:i().bool,value:i().any,hasAutofocus:i().bool},Sy.defaultProps={className:"",inputRef:null,name:null,onChange:()=>{},options:[],required:!1,value:void 0,hasAutofocus:!1};const Cy=gi.form`
  max-width: 420px;

  .help {
    margin-bottom: 0.5rem;
  }

  textarea {
    margin: 2px 0;
  }

  /* Positioning submit button */
  .input-send-button {
    margin: 12px 1px 7px;

    &:hover {
      color: ${({theme:e})=>e.design.form_buttons_color};
    }
  }

  .label:not(:last-child) {
    margin-top: 0.5rem;
    margin-bottom: 0.4rem;
  }

  @media ${Ju} {
    .label:not(:last-child) {
      /* This min-height ensures two inputs ( */
      min-height: 1.34rem;
    }
  }
`;function Ty(e){const{message:n}=e,{text:r}=d(),{register:i,handleSubmit:o}=wy(),a=ie()(n,"extra.form.sendLabel",r.send);const s=ie()(n,"extra.form.elements",[]);return t.createElement(sb,{message:n,showText:!0},t.createElement(Cy,{className:"InputForm columns is-multiline",onSubmit:o((t=>{e.onSubmit({type:"text",message:a,custom_data:t})}))},s.map((function(e,n){const{element:r,label:o,help:a,options:s,className:l,attributes:c={}}=e,u=ae.Z.nullifyStrings(c);let d=null;switch(r){case"input":switch(u.type){case"checkbox":d=t.createElement(Ey,dd({inputRef:i,options:s},u,{hasAutofocus:0===n}));break;case"radio":d=t.createElement(Sy,dd({},u,{hasAutofocus:0===n,inputRef:i,options:s}));break;default:d=t.createElement(Fl,dd({},u,{hasAutofocus:0===n,inputRef:i}))}break;case"select":d=t.createElement(_y,dd({},u,{className:"is-block",hasAutofocus:0===n,inputRef:i,options:s}));break;case"textarea":d=t.createElement(Pu,dd({},u,{hasAutofocus:0===n,inputRef:i}));break;case"label":case"button":case"progress":default:return null}return t.createElement("div",{className:Qu()("column",l),key:n},o&&t.createElement("label",{className:"label"},o),d,a&&t.createElement("p",{className:"help"},a))})),t.createElement("div",{className:"column is-full"},t.createElement("div",{className:"control"},t.createElement(Ou,null,a)))))}let Oy;Ty.propTypes={onSubmit:i().func,message:i().object},Ty.defaultProps={onSubmit:()=>{},message:{}};function Py(e,t,n,r){Oy=new e.google.maps.places.Autocomplete(n.current,{}),Oy.addListener("place_changed",(()=>async function(e,t){e(Oy.getPlace().formatted_address),t(!0)}(t,r)))}function Iy(e){const{design:{google_api_key:n}}=d(),{document:r,window:i}=s(),o=(0,t.useRef)(null),[a,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=()=>Py(i,l,o,u);"google"in i?e():((e,t,n)=>{const r=t.createElement("script");r.type="text/javascript",r.readyState?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||(r.onreadystatechange=null,n())}:r.onload=()=>n(),r.src=e,t.getElementsByTagName("head")[0].appendChild(r)})(`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=places`,r,e)}),[n,i,r]),t.createElement($b,dd({className:"InputLocation",selectedValue:a,submitOnEnter:c},Yb(e)),t.createElement(Fl,{inputRef:o,type:"text"}))}Iy.propTypes={message:i().object,onSubmit:i().func},Iy.defaultProps={message:null,onSubmit:()=>{}};var Ny=__webpack_require__(5893);const My=gi.form`
  margin-bottom: 28px;
`;function Dy(e){const{text:n}=d(),{message:r,message:{minValue:i,maxValue:o,prefix:a}}=e,s=n.input_number_help_min,l=n.input_number_help_max;return t.createElement($b,dd({className:"InputNumber",prefix:a,renderAs:My,validate:e=>r.isValidNumber(e,s,l)},Yb(e)),t.createElement(Fl,{max:o,min:i,type:"number"}))}function Ay(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function jy(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Ay(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ay(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Dy.propTypes={message:i().object,onSubmit:i().func},Dy.defaultProps={message:null,onSubmit:()=>{}};const Ry=gi.form`
  overflow: hidden;

  &.is-animate-messages-on {
    animation-name: showTextarea;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
  }
`;function Ly(e){return t.createElement($b,dd({className:"InputTextLong",renderAs:Ry},Yb(jy(jy({},e),{},{sendButtonType:"button"})),{helpText:""}),t.createElement(Pu,{className:"InputTextLong__TextArea"}))}Ly.propTypes={message:i().object,onSubmit:i().func},Ly.defaultProps={message:null,onSubmit:()=>{}};const Fy=gi.form`
  overflow: hidden;
`,zy=gi.div`
  overflow: hidden;
`;function Uy(e){return t.createElement($b,dd({className:"InputText",renderAs:e.message.isInsideForm?zy:Fy},Yb(e)),t.createElement(Fl,{type:"text"}))}function By(e){const{text:{error_input_phone:n}}=d();return t.createElement($b,dd({className:"InputTel"},Yb(e),{validate:e=>oe.validPhoneNumber(e,n)}),t.createElement(Fl,{name:"phone",type:"tel"}))}function Vy(e){return t.createElement($b,dd({className:"InputUrl"},Yb(e)),t.createElement(Fl,{pattern:"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",placeholder:"https://",required:!0,type:"url"}))}Uy.propTypes={message:i().object,onSubmit:i().func},Uy.defaultProps={message:null,onSubmit:()=>{}},By.propTypes={message:i().object},By.defaultProps={message:null},Vy.propTypes={message:i().object},Vy.defaultProps={message:null};var Wy={default:null,[I]:Gb,[L]:Og,[F]:Pg,[B]:Iy,[W]:Dy,[G]:By,[K]:Uy,[Q]:Ly,[X]:Vy};const qy=()=>"",Hy={default:qy,[I]:qy,[L]:(e,t,{error_input_date:n})=>{const r=t.message.parseDate(e);return t.message.isValidDate(r,!0)?"":(null==n?void 0:n.replace(/@format/i,t.message.dateFormat))||""},[F]:(e,t,{error_input_email:n})=>e?oe.validEmail(e,n):"",[B]:qy,[W]:(e,t,{input_number_help_min:n,input_number_help_max:r})=>t.message.isValidNumber(e,n,r),[G]:(e,t,{error_input_phone:n})=>e?oe.validPhoneNumber(e,n):"",[K]:qy,[Q]:qy,[X]:qy};function $y({message:e}){const t=Wy[e.inputType]||Wy.default;return(0,Ny.jsx)(t,{message:e},void 0)}function Yy(e,t,n="This field is required",r){let i=!0;const o=e.map((e=>Object.assign(Object.assign({},e),{inputs:e.inputs.map((e=>{const o=t[e.name],a=function({input:e,reqErrorMessage:t,text:n,value:r}){let i="";i=!e.required||r?(0,Hy[e.message.inputType])(r,e,n):t;return i}({input:e,value:"string"==typeof o?o:"",text:r,reqErrorMessage:n});return i=i&&!a,Object.assign(Object.assign({},e),{default:t[e.name],error:a})}))})));return[i,o]}function Gy(e,t){return function(e,t){const n=[];return e.forEach((({inputs:e})=>{e.forEach((e=>{const r=e.label||(null==e?void 0:e.placeholder)||(null==e?void 0:e.help)||"",i=t[e.name];i&&r&&"string"==typeof i&&n.push({label:r,value:i})}))})),n}(e,t).reduce(((e,{label:t,value:n})=>`${e}\n**${t}:** ${n}`),"").trim()}var Ky=function({message:e,onSubmit:n}){const{text:r}=d(),[i,o]=(0,t.useState)([]);return(0,t.useEffect)((()=>{o(e.rows?((e,t)=>e.map((e=>Object.assign(Object.assign({},e),{inputs:e.inputs.map((e=>Object.assign(Object.assign({},e),{message:jf(Object.assign(Object.assign({},e),{isInsideForm:!0,samurai:t}))})))}))))(ae.Z.appendUIKey(Object.values(e.rows)),e.samurai):[])}),[e.rows,e.samurai]),(0,Ny.jsx)(sb,Object.assign({message:e,showText:!0},{children:(0,Ny.jsxs)("form",Object.assign({onSubmit:t=>{t.preventDefault();const a=function(e){const t=new FormData(e),n={};for(let[e,r]of t.entries())n[e]=r;return n}(t.target),[s,l]=Yy(i,a,e.errorMessage,r);s?n({type:P.STRUCTURED_DATA,message:Gy(i,a),data:a}):o(l)},noValidate:!0},{children:[i.map((t=>{const n=ae.Z.appendUIKey(t.inputs);return(0,Ny.jsx)(Uc,{disposition:t.disposition,inputMapper:e=>(0,Ny.jsx)($y,{message:jf(e)},void 0),inputsUid:n,markRequired:e.markRequired,responsiveLayout:e.responsiveLayout,samurai:e.samurai},t.uiKey)})),(0,Ny.jsx)(Ou,{children:e.submitButtonLabel||r.send},void 0)]}),void 0)}),void 0)};const Qy=gi.div`
  &:not(:first-child) .custom-button {
    padding-left: 0.4rem;
  }

  &:not(:last-child) .custom-button {
    padding-right: 0.4rem;
  }

  .InputRating__button-label {
    filter: grayscale(100%);
    opacity: 0.44;
    transition: filter 0.25s, opacity 0.25s;
  }

  .custom-button[data-color='1'] {
    .InputRating__button-label {
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  .button {
    background-color: ${({theme:e})=>e.design.message_background_color_bot};
  }
`;function Xy(e){const[n,r]=(0,t.useState)(-1),i=e.buttons;return t.createElement("div",{className:"InputRating"},t.createElement(eg,null,e.help),t.createElement("div",{className:Qu()({"field has-addons is-marginless is-inline-flex":!0,"is-cumulative":e.cumulative}),style:{maxWidth:"100%"}},i.map(((i,o,a)=>t.createElement(Qy,{className:"InputRating__button control",key:i.payload},t.createElement(Pi,{className:Qu()({"is-rounded":0===o||o===a.length-1}),"data-color":n>=o?"1":"0","data-key":o,onClick:()=>e.onSubmit(i),onMouseLeave:()=>r(-1),onMouseOver:()=>r(o),type:"button"},t.createElement("span",{className:Qu()({"InputRating__button-label":!0,"is-size-3":a.length<=5,"is-size-6":a.length>5})},i.label)))))))}function Zy({message:e,onSubmit:n}){const{text:r}=d(),i=e.getButtons();return t.createElement(Xy,{buttons:i,onSubmit:t=>{if(e.isCumulative){const e=i.indexOf(t);n({type:"button",message:i.map((e=>e.label)).slice(0,e+1).join(""),payload:t.payload})}else n({type:"button",message:t.label,payload:t.payload})},cumulative:e.isCumulative,help:r.input_rating_help})}Xy.propTypes={buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),cumulative:i().bool,help:i().string,onSubmit:i().func},Xy.defaultProps={buttons:[],cumulative:!1,help:"",onSubmit:()=>{}},Zy.propTypes={message:i().object,onSubmit:i().func},Zy.defaultProps={message:null,onSubmit:()=>{}};const Jy=gi.a`
  height: auto;
`;const ew=gi.div`
  position: relative;
  display:flex;
  flex-direction: column;

  @media ${Ju} {
    width: calc(100% - 50px);
  }
  .columns {
    align-items: start;
    align-self: center;
    flex-grow:1;
  
    @media ${Ju} {
      &.has-avatar, &:not(.has-arrows) {
        align-self: auto;
      }
      &.has-arrows.has-avatar {
        margin-left: -62px;
      }
    }

    .InputScale_Buttons__container {
        flex-direction: column;
        flex-grow:1;
        .InputScale_Buttons__row {
          display:flex;
          align-content: stretch;
        }
      }
  }

  .control {
    margin-left: 2px;
    margin-right: -1px;
    height: 100%;
    flex-grow: 1;
    border-radius: 0;
    border: 1px solid transparent;
    width: 50px;
    max-width: 50px;

    &:first-of-type {
      border-top-left-radius: 4px !important;
      border-bottom-left-radius: 4px !important;
    }

    &:last-of-type {
      border-top-right-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
    }
  
    &:hover {
      .InputScale__hoverelement {
        opacity: 1;
        transform: scaleY(1.5);
      }

      .InputScale__number {
        color: ${({theme:e})=>e.design.form_inputs_color};
      }
    }
  }

  .InputScale__number {
    color: ${({theme:e})=>e.design.form_buttons_color};
  }

  .InputScale__Tags {
    color: ${({theme:e})=>e.design.form_help_color};
    }
  }

  .InputScale__hoverelement {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }
`,tw=gi.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  span:first-child {
    margin-right: 20px;
  }
  @media ${td} {
    span {
      white-space: normal;
      max-width: 100px;
    }
  }
`,nw=gi.div`
  top: 0;
  z-index: 2;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 4px;
  transition: 0.2s ease-in-out transform, 0.2s ease-in-out opacity;
  box-shadow: 0 0 18px -3px rgba(0, 0, 0, 0.1);
`,rw=gi.span`
  z-index: 5;
  position: relative;
  font-size: 17px;
`,iw=gi.button`
  && {
    padding: 3;
    flex-grow: 0;
  }
  &.is-scale-arrow-right,
  &.is-scale-arrow-left {
    margin-top: 7%;
  }

  &.is-scale-arrow-right {
    margin-left: 10px;
  }
  &.is-scale-arrow-left {
    margin-right: 10px;
  }
`,ow=({onClick:e,isVisible:n,isRightArrow:r=!1})=>t.createElement(iw,{type:"button",className:Qu()({"is-scale-arrow-left":!r,"is-scale-arrow-right":r,"is-invisible":!n,"button has-text-weight-bold is-inverted":!0}),onClick:e},t.createElement(wm,{isRightArrow:r}));function aw({inputScaleRef:e,buttons:n,help:r,prevButtonHandler:i,nextButtonHandler:o,onSubmit:a,leftTag:s,rightTag:l,firstValue:c,lastValue:u}){const f=i||o,{design:{avatar_enabled:p}}=d();return t.createElement(ew,{className:"InputScale",ref:e},t.createElement(eg,null,r),t.createElement("div",{className:Qu()({"columns is-mobile":!0,"has-avatar":p,"has-arrows":f})},f&&t.createElement("div",{className:"column is-narrow"},t.createElement(ow,{onClick:i,isVisible:!!i})),t.createElement("div",{className:"column is-narrow InputScale_Buttons__container"},t.createElement("div",{className:"InputScale_Buttons__row "},n.map((e=>t.createElement("button",{type:"button",key:e.payload,className:Qu()({"control button has-text-weight-bold is-medium":!0}),onClick:()=>a(e)},t.createElement(rw,{className:"InputScale__number"},e.label),t.createElement(nw,{className:"InputScale__hoverelement"}))))),t.createElement(tw,{className:"InputScale__Tags is-flex is-size-7 is-uppercase is-unselectable"},t.createElement("span",null,`${c} - ${s}`),t.createElement("span",null,`${u} - ${l}`))),f&&t.createElement("div",{className:"column is-narrow"},t.createElement(ow,{onClick:o,isRightArrow:!0,isVisible:!!o}))))}ow.propTypes={isVisible:i().bool,isRightArrow:i().bool,onClick:i().func},ow.defaultProps={isVisible:!1,isRightArrow:!1,onClick:null},aw.propTypes={buttons:i().arrayOf(i().shape({label:i().string,payload:i().string})),help:i().string,leftTag:i().string,onSubmit:i().func,rightTag:i().string,prevButtonHandler:i().func,nextButtonHandler:i().func,firstValue:i().string,lastValue:i().string,inputScaleRef:i().object},aw.defaultProps={buttons:[],help:"",leftTag:"",onSubmit:()=>{},rightTag:"",prevButtonHandler:null,nextButtonHandler:null,firstValue:null,lastValue:null,inputScaleRef:null};function sw({message:e,onSubmit:n}){const{text:r}=d(),i=(0,t.useMemo)((()=>e.getButtons()),[e]),o=(0,t.useRef)(null),[a,s]=(0,t.useState)(0);(0,t.useEffect)((()=>{o&&o.current&&s(((e,t)=>{const n=Math.floor(e/50),r=Math.floor((e-120)/50);return e>550?10:n>=t?n:r})(o.current.clientWidth,i.length))}),[o,i]);const{currentPageItems:l,prevButtonHandler:c,nextButtonHandler:u}=function(e,n){const[r,i]=(0,t.useState)(0),[o,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(!1),[c,u]=(0,t.useState)([]);return(0,t.useEffect)((()=>{u(e.slice(r*n,r*n+n)),a(r>0),l((r+1)*n<e.length)}),[e,n,r]),(0,t.useEffect)((()=>{i(0)}),[n]),{currentPageItems:c,prevButtonHandler:o?()=>i((e=>e-1)):null,nextButtonHandler:s?()=>i((e=>e+1)):null}}(i,a);return t.createElement(aw,{inputScaleRef:o,buttons:l,leftTag:e.buttonsLeftTag,onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help,rightTag:e.buttonsRightTag,prevButtonHandler:c,nextButtonHandler:u,firstValue:i[0].label,lastValue:i[i.length-1].label})}sw.propTypes={message:i().object,onSubmit:i().func},sw.defaultProps={message:null,onSubmit:()=>{}};var lw=__webpack_require__(2558);const cw=gi.form`
  width: 300px;
  max-width: 100%;

  @media ${td} {
    margin: 0 auto;
  }

  .InputStripe__card-element {
    background-color: ${({theme:e})=>e.design.form_inputs_background_color};
  }
`,uw=gi.div`
  position: static;
  font-size: $size-6;
`,dw=({isLoading:e,isDisabled:n,label:r,className:i})=>t.createElement(Ci,{className:Qu()({[i]:!0,"InputStripe__pay-button button":!0,"is-loading":e}),isDisabled:n,label:r,type:"submit"});dw.propTypes={className:i().string,label:i().string,isLoading:i().bool,isDisabled:i().bool},dw.defaultProps={className:"",label:"Pay",isLoading:!1,isDisabled:!1};const fw=gi(dw)`
  width: 100%;
  padding: 0.75rem;
  height: inherit;
`;function pw({amount:e,currency:n,email:r,setEmail:i,errorMessage:o,onInputChange:a,onSubmit:s,isLoading:l,isDisabled:c}){const u={base:{fontSize:"16px"}},{text:f}=d(),p=f.stripe_pay_button_label.replace(/@amount/i,`${n} ${e}`);return t.createElement(cw,{className:Qu()({"InputStripe ":!0}),onSubmit:s},t.createElement("div",{className:"columns is-multiline"},t.createElement("div",{className:"column is-full"},t.createElement(Fl,{name:"email",onChange:i,placeholder:"Email",required:!0,type:"email",value:r})),t.createElement("div",{className:"column is-full"},t.createElement(lw.Ke,{className:"input is-block",disabled:l,onChange:a,style:u})),t.createElement("div",{className:"column is-half"},t.createElement(lw.Oh,{className:"input is-block",disabled:l,onChange:a,style:u})),t.createElement("div",{className:"column is-half"},t.createElement(lw._e,{className:"input is-block",disabled:l,onChange:a,style:u}))),t.createElement(fw,{isDisabled:c,isLoading:l,label:p,type:"submit"}),t.createElement(uw,{className:"help is-danger",role:"alert"},o))}pw.propTypes={errorMessage:i().string,currency:i().string,amount:i().oneOfType([i().string,i().number]),email:i().string,setEmail:i().func,onSubmit:i().func,onInputChange:i().func,isLoading:i().bool,isDisabled:i().bool},pw.defaultProps={errorMessage:"",currency:"USD",amount:0,email:"",setEmail:()=>{},onSubmit:()=>{},onInputChange:()=>{},isLoading:!1,isDisabled:!1};var hw=pw;function mw({amount:e,currency:n,elements:r,stripe:i,intent_secret:o,onSubmit:a}){const[s,l]=(0,t.useState)(""),[c,u]=(0,t.useState)(!1),[d,f]=(0,t.useState)("");return t.createElement(hw,{amount:e,currency:n,email:d,errorMessage:s,isDisabled:!i,isLoading:c,onSubmit:e=>{e.preventDefault(),u(!0);const t=r.getElement("cardNumber");i.confirmCardPayment(o,{payment_method:{card:t,billing_details:{email:d}},receipt_email:d}).then((e=>{e.error?l(e.error.message):a(),u(!1)}))},setEmail:f})}mw.propTypes={currency:i().string,intent_secret:i().string,amount:i().oneOfType([i().string,i().number]),elements:i().object,stripe:i().object,onSubmit:i().func},mw.defaultProps={currency:"",intent_secret:"",amount:0,elements:null,stripe:null,onSubmit:()=>{}};var bw=(0,lw.kv)(mw);function gw({message:{stripe_key:e,intent_secret:n,currency:r,amount:i,payment_id:o},onSubmit:a}){const{document:l,window:c}=s(),[u,d]=(0,t.useState)(null);return(0,t.useEffect)((()=>{if(c.Stripe)d(c.Stripe(e));else{const t=l.createElement("script");t.type="text/javascript",t.src="https://js.stripe.com/v3/",t.onload=()=>{d(c.Stripe(e))},l.getElementsByTagName("head")[0].appendChild(t)}}),[e,l,c]),t.createElement(lw.vw,{stripe:u},t.createElement(lw.eK,null,t.createElement(bw,{intent_secret:n,currency:r,amount:i,onSubmit:()=>{a({type:"stripe",action:"submit",message:"Payment success",payload:{payment_id:o}})}})))}gw.propTypes={message:i().shape({stripe_key:i().string,currency:i().string,intent_secret:i().string,payment_id:i().number,amount:i().oneOfType([i().string,i().number])}),onSubmit:i().func},gw.defaultProps={message:{},onSubmit:()=>{}};const vw=gi.div`
  padding-bottom: 1.5rem;

  .custom-buttons {
    width: 50%;

    &:hover {
      .icon {
        transform: none;
      }
    }

    @media ${Ju} {
      width: 50%;
    }

    .custom-button {
      padding: 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;

      &:hover {
        .InputYesNo__button-label {
          opacity: 1 !important;
        }
      }

      &:not(:last-child) {
        margin-right: 25px !important;
      }
    }

    .icon {
      font-size: 25px !important;
      transform: scale(0.9);
    }
  }

  .buttons .button {
    color: ${({theme:e})=>e.design.form_buttons_color};
    background-color: ${({theme:e})=>e.design.form_buttons_background_color};
    border-color: ${({theme:e})=>e.design.form_buttons_border_color};
  }

  .InputYesNo__button-label {
    color: ${({theme:e})=>e.design.form_help_color};
  }
`,yw=gi.span`
  position: absolute;
  bottom: -1.5rem;
  font-size: 0.8rem !important;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.7;
`;function ww({help:e,buttons:n,onSubmit:r,buttonsRef:i,isAnimated:o}){return t.createElement(vw,{className:"InputYesNo"},t.createElement(eg,null,e),t.createElement("div",{className:"field is-marginless"},t.createElement(pd,{ref:i},n.map((e=>t.createElement(Oi,{className:Qu()({"is-rounded":!0,"is-animated":o}),key:e.payload,onClick:()=>r(e)},(e=>{const n=ie()(e,"attachment.type",null),r=ie()(e,"attachment.value",null);switch(n){case"icon":return t.createElement(Qb,{icon:r,isBig:!0});case"emoji":return t.createElement(Kb,null,r);case"image":return t.createElement(xd,{className:"is-overlay",figureStyle:{position:"absolute"},rounded:!0,src:r});default:return null}})(e),t.createElement(yw,{className:"InputYesNo__button-label is-size-7"},e.label)))))))}function _w({message:e,onSubmit:n}){const{text:r}=d(),i=e.getButtons();return t.createElement(ag,{buttons:i},t.createElement(ww,{onSubmit:e=>n({type:"button",message:e.label,payload:e.payload}),help:r.input_menu_help}))}ww.propTypes={buttons:i().arrayOf(i().shape({label:i().string,payload:i().string,attachment:i().shape({type:i().string,value:i().string})})),help:i().string,onSubmit:i().func,isAnimated:i().bool,buttonsRef:i().object},ww.defaultProps={buttons:[],help:"",onSubmit:()=>{},isAnimated:!1,buttonsRef:null},_w.propTypes={message:i().object,onSubmit:i().func},_w.defaultProps={message:null,onSubmit:()=>{}};var xw={default:null,[I]:Gb,[N]:sg,[M]:hg,[D]:mg,[A]:bg,[j]:Tg,[R]:Eg,[L]:Og,[U]:Ty,[F]:Pg,[z]:iv,[B]:Iy,[V]:Ky,[W]:Dy,[q]:Zy,[H]:function(){const{brand_name:e}=d(),n=`https://landbot.io/powered-by?utm_source=${encodeURIComponent(e)}&utm_medium=landbot&utm_campaign=goodbye`;return t.createElement("div",{className:"InputReferral "},t.createElement(eg,null,"Want to create your own? It's easy, beautiful and free"),t.createElement("div",{className:"buttons"},t.createElement(Jy,{className:"button py-3 px-5",href:n,target:"_blank",rel:"noopener noreferrer"},t.createElement("span",{className:"icon is-size-4"},t.createElement(km,null)),t.createElement("span",{className:"ml-3"},"Create a Landbot"))))},[$]:sw,[Y]:gw,[G]:By,[K]:Uy,[Q]:Ly,[X]:Vy,[Z]:_w};function kw({message:e}){const{customSubmitFn:n}=e,r=(i=e.inputType,xw[i]||xw.default);var i;const o=Ad(),{setIsSubmitted:a,isSubmitted:s}=Hb();return(0,t.useEffect)((()=>()=>{a(!1)}),[a]),t.createElement(t.Fragment,null,!s&&t.createElement(r,{onSubmit:e=>{let t=e;n&&"function"==typeof window[n]&&(t=window[n](e)),a(!0),o.events.emit(Vd,t)},message:e}))}kw.propTypes={message:i().object},kw.defaultProps={message:{}};const Ew=gi(xd)`
  && img {
    /* I need specificity for this rule */
    width: auto;
  }
  img {
    max-width: ${e=>id(e.theme.initial_vars.horizontal_unit,25)};
    max-height: ${e=>id(e.theme.initial_vars.vertical_unit,25)};

    @media ${Ju} {
      max-width: ${e=>id(e.theme.initial_vars.vertical_unit,87.5)};
      max-height: ${e=>id(e.theme.initial_vars.vertical_unit,29)};
    }
  }
`;function Sw({message:e,fileIndex:n,openModal:r}){const{url:i}=e.files[n];return t.createElement(mb,{message:e,classNames:["is-inline-flex","mb-2"]},i&&t.createElement(Ew,{figureStyle:{width:"auto",maxWidth:"auto"},openModal:r,src:i}))}function Cw({message:e,fileIndex:n}){const{url:r}=e.files[n];return t.createElement(sb,{message:e,classNames:["is-inline-flex","mb-2"]},t.createElement("p",{className:"content is-marginless"},t.createElement("a",{className:"button",href:r||null,target:"_blank",style:{justifyContent:"flex-start",maxWidth:"330px",textDecoration:"underline"},rel:"noopener noreferrer"},t.createElement("span",{className:"icon"},t.createElement(_m,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",fillRule:null,rotate45:!1})),t.createElement("span",{style:{maxWidth:"90%",overflow:"hidden",textOverflow:"ellipsis",direction:"rtl"}},r))))}function Tw({message:e}){const n=ae.Z.appendUIKey(e.files).map(((n,r)=>"image"===n.type?t.createElement(Sw,{key:n.uiKey,message:e,fileIndex:r}):t.createElement(Cw,{key:n.uiKey,message:e,fileIndex:r})));return t.createElement("div",{className:"is-flex is-flex-direction-column is-align-items-flex-end"},n)}Sw.propTypes={message:i().object,openModal:i().bool,fileIndex:i().number},Sw.defaultProps={message:{},openModal:!0,fileIndex:null},Cw.propTypes={message:i().object,fileIndex:i().number},Cw.defaultProps={message:{},fileIndex:null},Tw.propTypes={message:i().object},Tw.defaultProps={message:{}};var Ow={[P.BUTTON]:Nb,[P.CALENDLY]:Nb,[P.CARDS]:Nb,[P.DIALOG]:lb,[P.DOCUMENT]:_b,[P.AUDIO]:_b,[P.VIDEO]:_b,[P.IFRAME]:Eb,[P.IMAGE]:Ob,[P.INPUT]:kw,[P.MULTI_QUESTION]:Nb,[P.LOCATION]:Sb,[P.MEDIA_DIALOG]:Pb,[P.MULTIPLE_IMAGES]:Ib,[P.REDIRECT]:jb,[P.REFERRAL]:Bb,[P.STRIPE]:Nb,[P.STRIPE_INTENT]:Nb,[P.TEXT]:Nb,[P.MESSAGEWITHINPUT]:Vb,[P.MULTIPLE_FILES]:Tw,[P.STRUCTURED_DATA]:Nb,default:null};function Pw(e){return t.createElement(xd,{imgClassName:Qu()({[`is-${e.shape}`]:!0,"is-unselectable":!0}),className:Qu()({[e.className]:!!e.className,Avatar:!0}),rounded:"circle"===e.shape,src:e.src,size:e.size,contain:e.shape===Ht.ORIGINAL})}Pw.propTypes={className:i().string,shape:i().string,size:i().number,src:i().string},Pw.defaultProps={className:null,shape:"circle",size:35,src:""};const Iw=gi(Pw)`
  transform-origin: bottom;
  transform: scale(${e=>e.scale});

  .is-squared {
    border-radius: 3px;
  }

  .Media {
    width: 100%;
    height: 100%;
  }
`;Iw.propTypes={scale:i().number},Iw.defaultProps={scale:1};var Nw=Iw;function Mw({message:e}){const n=Uu(),r=d(),{design:{avatar_shape:i,avatar_scale:o}}=r,a=e.getAvatar({config:r,agents:n});return t.createElement(t.Fragment,null,t.createElement(Nw,{scale:o,shape:e.isAuthorAgent?Ht.ROUNDED:i,src:a}))}Mw.propTypes={message:i().object},Mw.defaultProps={message:{}};const Dw=gi.div`
  position: absolute;
  top: calc(
    100% + ${e=>id(e.theme.initial_vars.vertical_unit,1)}
  );
  left: 50%;
  height: ${e=>id(e.theme.initial_vars.vertical_unit,2)};
  transform: translateX(-50%) scale(0.6);
`;function Aw(e){return t.createElement(Dw,null,e.children)}function jw(e){let{leftContent:n,centerContent:r,rightContent:i,className:o,isAnimateMessagesOn:a,messageShape:s,hasLeftContent:l,isBubbleStyled:c}=e,u=hm(e,["leftContent","centerContent","rightContent","className","isAnimateMessagesOn","messageShape","hasLeftContent","isBubbleStyled"]);const{isAuthorUser:d,isGhost:f,isEval:p,author:h,blockID:m,className:b,type:g,inputType:v}=u.message,{isStart:y,isEnd:w,isInputInline:_,isAvatarVisible:x}=u.groupProps;return t.createElement(t.Fragment,null,t.createElement(em,{author:h,block:m,classNames:["Message__message","message",_&&!c&&"is-full-width-content"],containerClassNames:["Message",!!o&&o,b,r&&r.url&&"u-no-padding",d&&"is-reverse",y&&"is-start",w&&"is-end",p&&"is-eval",f&&"is-ghost",a&&"is-animate-messages-on",s===qt.TRANSPARENT&&"Message--is-shape-transparent",_&&c&&"is-medium-width"],inputType:v,type:g},l&&t.createElement(tm,{classNames:["Message__message-left","message-left","is-autoscroll-mutation-target",!c&&"is-hidden-mobile",_&&"is-hidden-small-device",!x&&"is-invisible"]},n),t.createElement(nm,{classNames:["Message__message-content","message-content"]},r),t.createElement(rm,{classNames:["Message__message-right","message-right"]},i)))}Aw.propTypes={children:i().node},Aw.defaultProps={children:null},jw.propTypes={leftContent:i().element,centerContent:i().element,rightContent:i().element,message:i().object,className:i().string,groupProps:i().shape({isEnd:i().bool,isStart:i().bool,isLastMessage:i().bool,isInputInline:i().bool,isAvatarVisible:i().bool}),isAnimateMessagesOn:i().bool,messageShape:i().string,hasLeftContent:i().bool,isBubbleStyled:i().bool},jw.defaultProps={leftContent:null,centerContent:null,rightContent:null,message:{},className:"",groupProps:{isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!0},isAnimateMessagesOn:!0,messageShape:qt.SEMI,hasLeftContent:!0,isBubbleStyled:!0};var Rw=gi(jw)`
  transition: opacity 0.2s;

  @media ${Ju} {
    .Avatar {
      height: 40px;
      width: ${e=>e.theme.avatar.width};
    }
  }

  /* Position date for bot message */
  .message-left .MessageDate {
    position: absolute;

    ${e=>Jr`
        top: calc(100% + ${id(e.theme.initial_vars.horizontal_unit)});
      `};
  }

  .message-right .MessageDate {
    padding-left: 11px;
  }

  &.is-ghost {
    opacity: 0.6;
  }

  /* Animations */
  &.is-eval.is-animate-messages-on {
    .MessageBubble,
    .MessageMediaBubble {
      animation: message-bubble-in 0.3s ease-in-out;
    }

    .MessageBubble__content {
      opacity: 0;
      animation: message-content-in 0.6s ease-in-out 0.1s forwards;
    }
  }

  &.is-start.is-eval[data-author='bot'].is-animate-messages-on,
  &.is-start.is-eval[data-author='agent'].is-animate-messages-on {
    animation: message-avatar-left-in 0.2s ease-in-out forwards;
  }

  @media ${Ju} {
    &[data-author='user'] .MessageDate {
      position: relative;
      margin-right: ${e=>id(e.theme.initial_vars.horizontal_unit,-5)};
    }
  }

  /* MULTIMEDIA MESSAGE */
  @media ${td} {
    &[data-type='image'],
    &[data-type='iframe'],
    &[data-type='media_dialog'] {
      figure {
        max-width: 279px;
      }
    }
  }

  &.Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='image'][data-author='bot'],
  .Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='iframe'][data-author='bot'],
  .Message--is-shape-transparent[data-type='text'][data-author='bot']
    + &[data-type='media_dialog'][data-author='bot'],
  .Message--is-shape-transparent[data-author='bot'] + &[data-author='user'] {
    /* Un mensaje de tipo imagen/iframe que es posterior a un mensaje de texto de bot tiene un espaciado mayor
     que entre los mensajes de tipo texto. Lo mismo para un mensaje de usuario. */
    margin-top: 20px;
  }

  &.Message--is-shape-transparent .InputButtons,
  &.Message--is-shape-transparent .InputButtonsMultiple,
  &.Message--is-shape-transparent .InputButtonsMultiSearch {
    margin-top: 15px;
  }

  &.Message--is-shape-transparent .MessageMediaBubble .image {
    margin-bottom: 20px;
  }

  /* Decorator only visible for group ending messages */
  &:not(.is-end) .MessageBubble__Decorator {
    display: none;
  }
`;const Lw=gi.span`
  margin-right: 0.2rem;
  margin-top: 0.8rem;
  line-height: 36px;
  color: ${({theme:e})=>e.design.message_color_bot};

  + .Message__message-failed-retry-link,
  + .Message__message-failed-retry-link:hover {
    color: ${({theme:e})=>e.design.message_color_bot};
  }
`;function Fw({hasRetry:e,retrying:n,onClickRetry:r,failedMessage:i,retryingMessage:o,retryButtonLabel:a}){return t.createElement(em,{classNames:["Message__message","Message__message-failed","message"],containerClassNames:["Message","is-reverse","FailedMessage"]},t.createElement(Lw,{className:"Message__message-failed-text"},n?o:i),e&&!n&&t.createElement(Ci,{className:"Message__message-failed-retry-link is-link-style is-not-disabled",onClick:r},a))}function zw({retryCb:e}){const{text:{error_send_message:n,error_retry_button_label:r,error_retrying_message:i}}=d(),[o,a]=(0,t.useState)(!1);return t.createElement(Fw,{hasRetry:"function"==typeof e,onClickRetry:()=>{a(!0);const t=()=>{setTimeout((()=>{a(!1)}),1e3)},n=e();n instanceof Promise?n.finally(t):t()},failedMessage:n,retryButtonLabel:r,retryingMessage:i,retrying:o})}Fw.propTypes={hasRetry:i().bool,retrying:i().bool,onClickRetry:i().func,failedMessage:i().string,retryingMessage:i().string,retryButtonLabel:i().string},Fw.defaultProps={hasRetry:!1,retrying:!1,onClickRetry:null,failedMessage:"We couldn't send this message",retryingMessage:"Retrying...",retryButtonLabel:"Try again"},zw.propTypes={retryCb:i().func},zw.defaultProps={retryCb:null};const Uw=gi.span`
  display: none;
  width: ${({theme:{avatar:e}})=>e.width};
  text-align: center;
  line-height: 0.8rem;
  color: ${({theme:e})=>e.design.form_help_color};

  @media ${Ju} {
    display: block;
  }
`,Bw=gi.b`
  font-weight: normal;
`;function Vw({children:e}){return t.createElement(Uw,{className:"MessageDate is-unselectable is-size-7"},t.createElement(Bw,{className:"MessageDate__text"},e))}function Ww({timestamp:e}){return e?t.createElement(Vw,null,ut.getMessageDate(e)):null}function qw({message:e,groupProps:n}){const{isLastMessage:r,isInputInline:i}=n,o=wd(),{failed:a,retryCb:s,timestamp:l,rich_text:c,isEval:u,isWelcome:f,isGhost:p,isInputBubbleStyled:m,isAuthorUser:b}=e,g=i?e.getInputInlineMessageType():e.getMessageType(r),v=g?function(e){return Ow[e]||Ow.default}(g):null,y=!i||m,{design:{avatar_enabled:w,message_shape:_}}=d(),{has_messages_animation_on:x}=Mm();!function(e,n){const r=h();(0,t.useEffect)((()=>{e&&n&&ae.Z.extractScriptsfromString(e).forEach((e=>{ae.Z.evalScriptTag(e,{context:r})}))}),[e,n,r])}(c,u);const k=ab(e.isTyping,y),E=!e.hasInput&&k;return t.createElement(t.Fragment,null,v&&t.createElement(Rw,{centerContent:t.createElement(v,{message:e}),groupProps:n,hasLeftContent:w&&!o,isAnimateMessagesOn:x&&r,isBubbleStyled:y,leftContent:!o&&w?t.createElement(t.Fragment,null,t.createElement(Mw,{message:e}),E?t.createElement(Aw,null,t.createElement(dh,null)):!b&&!f&&t.createElement(Ww,{timestamp:l})):null,message:e,messageShape:_,rightContent:b&&!p?t.createElement(Ww,{timestamp:l}):null}),a&&!i&&t.createElement(zw,{retryCb:s}))}function Hw({previousMessage:e,currentMessage:n,nextMessage:r,isInputInline:i,children:o}){const a=null===r,s=(0,t.useMemo)((()=>{const t=e&&ie()(e.raw,"samurai"),r=ie()(n.raw,"samurai");return!e||t!==r}),[n,e]),l=(0,t.useMemo)((()=>{const e=ie()(n.raw,"samurai"),t=r&&ie()(r.raw,"samurai");return a?i?n.isInputBubbleStyled:!n.hasInput||!n.isInputBubbleStyled||n.isAuthorAgent:t!==e}),[n,r,a,i]),c=(0,t.useMemo)((()=>i?n.isInputBubbleStyled:[P.IMAGE,P.IFRAME].includes(n.type)?l&&(!a||a&&!n.hasInput):l),[l,i,n,a]);return t.cloneElement(o,{groupProps:{isStart:s,isEnd:l,isAvatarVisible:c,isInputInline:i,isLastMessage:a}})}Vw.propTypes={children:i().node},Vw.defaultProps={children:null},Ww.propTypes={timestamp:i().number},Ww.defaultProps={timestamp:null},qw.propTypes={message:i().object,groupProps:i().shape({isEnd:i().bool,isStart:i().bool,isLastMessage:i().bool,isInputInline:i().bool,isAvatarVisible:i().bool})},qw.defaultProps={message:null,groupProps:{isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!1}};const $w={timestamp:i().number,samurai:i().oneOfType([i().number,i().string])};function Yw(){const{messagesWrapper:e}=If();return t.createElement(pm,null,e.getSupportedMessages().map(((e,n,r)=>e.type===P.EVENT?t.createElement(Nm,{key:e.key,message:e}):t.createElement(Hw,{key:e.ui_key||e.key,previousMessage:r[n-1],currentMessage:e,nextMessage:r[n+1]},t.createElement(qw,{message:e})))))}function Gw(){const{messagesWrapper:e}=If(),t=Hu(),n=e.getLastVisibleMessage(),r=e.getLastMessage(),{design:{back_button_visible:i}}=d();return i&&!t&&!n.isEmpty()&&!n.isRevisit&&!n.isWelcome&&!n.isAuthorUser&&!r.isFinishBot}Hw.propTypes={previousMessage:i().shape($w),currentMessage:i().shape($w),nextMessage:i().shape($w),isInputInline:i().bool},Hw.defaultProps={previousMessage:null,currentMessage:null,nextMessage:null,isInputInline:!1};const Kw=gi.div`
  /******************************
    Desktop version
  *******************************/
  display: none;

  @media ${Ju} {
    display: block;
    padding-top: 20px;
  }

  /******************************
    Mobile version
  *******************************/
  &.BackButton--Mobile {
    @media ${Ju} {
      display: none;
    }

    @media ${td} {
      display: block;
    }

    height: ${e=>e.theme.footer.mobile_height};
    z-index: ${({theme:e})=>e.zIndex.BackButton__Mobile};

    @media ${nd} {
      transform: scale(0.8);
      transform-origin: left;
    }
  }

  /*******************************
    SubComponents Styles - Desktop
  ********************************/
  .BackButton__Button.custom-button {
    height: 30px;
    width: 86px;
    opacity: ${E.isIos?1:0};
    background-color: transparent;
    transition: opacity 0.25s ease-in-out, padding 0.25s ease-in-out;
    border-radius: 1rem;
    border-width: 0;

    &:hover {
      padding-right: 3px;
      background-color: rgba(0, 0, 0, 0.1);
      border-width: 0;
      box-shadow: none;
    }

    ${!E.isIos&&"\n      .InputInline:hover & {\n        opacity: 1;\n      }\n    "}

    span {
      color: var(--form_help_color) !important;

      svg path {
        fill: var(--form_help_color) !important;
      }
    }
  }

  .BackButton__Label {
    text-transform: uppercase;
    font-size: ${e=>e.theme.font_sizes.size_7};
  }

  .BackButton__Icon {
    padding-right: 8px;
    font-size: ${e=>e.theme.font_sizes.size_7};

    .icon {
      transform: rotate(${E.isIos?"0":"180deg"});
      transition: transform 0.25s;
    }
    ${!E.isIos&&"\n      .InputInline:hover & .icon {\n        transform: rotate(0);\n      }\n    "}
  }

  /*******************************
    SubComponents Styles - Mobile
  ********************************/
  &.BackButton--Mobile {
    button.BackButton__Button.custom-button {
      background-color: white !important;
      box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3);
      height: 1.95rem;
      font-size: 13.5px;
      width: inherit;
      padding: 4px 16px;
      transition: transform 0.15s ease-in-out;
      border-radius: 4px;
      opacity: 1;

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3),
          0 3px 5px -5px rgba(47, 49, 73, 0.35);
      }

      .BackButton__Label {
        color: #6a6b7c !important;
        text-transform: none;
        font-size: 13.5px;
      }

      .BackButton__Icon {
        padding-right: 12px;
        .icon {
          transform: none;
        }
        svg path {
          fill: #2f3149 !important;
          font-size: 13.5px;
        }
      }
    }

    &:hover {
      .icon {
        transform: rotate(0deg);
      }
    }
  }
`;function Qw({label:e,onClick:n,containerClassName:r}){return t.createElement(Kw,{className:Qu()(["BackButton",r]),onClick:n},t.createElement(Oi,{className:"BackButton__Button"},t.createElement("span",{className:"BackButton__Icon"},t.createElement("span",{className:"icon"},t.createElement(wm,null))),t.createElement("span",{className:"BackButton__Label is-unselectable"},e)))}function Xw({containerClassName:e}){const{text:n}=d(),{setIsSubmitted:r}=Hb(),i=Ad();return t.createElement(Qw,{onClick:()=>{r(!0),i.events.emit(Vd,{type:"button",message:n.back,payload:"#back"})},label:n.back,className:"BackButton",containerClassName:e})}Qw.propTypes={label:i().string,onClick:i().func,containerClassName:i().string},Qw.defaultProps={label:"Back",onClick:()=>{},containerClassName:null},Xw.propTypes={containerClassName:i().string},Xw.defaultProps={containerClassName:null};const Zw=gi.p`
  margin-top: 1em;
  font-size: 14px;
  animation: 'fade-in 1.5s ease-out';
  color: ${({theme:e})=>e.design.form_help_color};

  .GdprLink__link {
    margin-left: 0.2rem;
    text-decoration: underline;
  }
`;function Jw(e){return t.createElement(Zw,{className:"GdprLink"},e.text,t.createElement("a",{className:"GdprLink__link",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.linkText))}Jw.propTypes={link:i().string,text:i().string,linkText:i().string},Jw.defaultProps={link:"",text:"",linkText:""};const e_=gi(Jh)`
  min-height: ${e=>e.theme.input.mobile_height};

  .input-small-header {
    margin-top: ${e=>id(2*e.theme.initial_vars.vertical_unit)};
  }

  @media ${Ju} {
    min-height: ${e=>e.theme.input.height};
  }

  .Chat--hasInputFixed & {
    min-height: 0;
  }
`;function t_({children:e,inputInlineRef:n}){return t.createElement(e_,{classNames:["InputInline","is-relative","is-autoscroll-mutation-target"],containerRef:n},e)}function n_({children:e}){return t.createElement(im,null,t.createElement("div",{className:"columns is-centered"},t.createElement(Mc,{shape:qt.SQUARED},e)))}function r_({isConnectionOk:e,inputInlineRef:n}){const r=Hu(),{messagesWrapper:i}=If(),o=wd(),[a,s]=i.getLast2VisibleMessages(),{hasGDPR:l,gdpr:c}=s,{text:u,design:{avatar_enabled:f}}=d(),p=Gw();return t.createElement(t_,{inputInlineRef:n},r?null:t.createElement(t.Fragment,null,t.createElement(Hw,{previousMessage:a,currentMessage:s,nextMessage:null,isInputInline:!0},t.createElement(qw,{message:s})),e&&p&&t.createElement(om,{hasLeftColumn:f},t.createElement(Xw,null)),l&&!o&&t.createElement(om,{hasLeftColumn:f},t.createElement(Jw,{link:c.link,linkText:c.linkText,text:c.text}))),!e&&t.createElement(n_,null,u.error_inline_connection_message))}function i_({bodyRef:e}){const{isFetching:r,status:i}=function(){const[e,n]=(0,t.useState)(!0),[r,i]=(0,t.useState)(!0),o=df(),a=Ad(),{showNotification:s,closeNotification:l}=bf(),{setPreviousSessionMessages:c,newMessage:u,setMessages:f}=If(),{text:p,revisit_off:h,revisit:m,warning_connection:b,offline_detect_database:g}=d();return(0,t.useEffect)((()=>{o.init().then((e=>{!e.isNewSession&&!h&&fe.getAssignationAgentID(Uf(e.messages))<=0&&m.length>0?(c(e.messages),m.forEach((e=>u(fe.withRevisit(e))))):f(e.messages)})).catch(console.error).finally((()=>n(!1)))}),[]),(0,t.useEffect)((()=>{const t=e=>{e!==r&&(e?l():b&&s(p.error_offline_message,{lastAction:ff,hasCloseButton:!0}),i(e))};return!1===e&&g&&a.events.on(jd,t),()=>a.events.off(jd,t)}),[e,r,a.events,l,s,i,p.error_offline_message,b,g]),{isFetching:e,status:r}}(),o=function(){const{window:e}=s(),[n,r]=(0,t.useState)(!0),{showNotification:i,closeNotification:o}=bf(),{text:a,warning_connection:l,offline_detect_navigator:c}=d();return(0,t.useEffect)((()=>{const t=()=>{r(!1),l&&i(a.error_offline_message,{lastAction:ff,hasCloseButton:!0})};return c&&e.addEventListener("offline",t),()=>{e.removeEventListener("offline",t)}}),[e,i,l,a.error_offline_message,c]),(0,t.useEffect)((()=>{const t=()=>{r(!0),o()};return c&&e.addEventListener("online",t),()=>{e.removeEventListener("online",t)}}),[e,o,c]),c||n}(),{hasHeader:a,hideHeader:l}=Gu(),c=Yu(),u=Hu(),f=(0,t.useRef)(null),p=(0,t.useRef)(null);!function(){const{document:e,window:n}=s();(0,t.useEffect)((()=>{const t=new $p({document:e,filterSelector:".Message.is-eval:not(.is-start)",mutatingElement:e.querySelector(".Chat"),targetSelector:".message-left",window:n});return()=>t.destroy()}),[e,n])}();return function(e,r,i,o){const a=Du(),{document:l}=s();(0,t.useEffect)((()=>{const t=a===n.NATIVE?l.scrollingElement:l.querySelector(".js-auto-scroll"),s=new Yp({mutatingElement:l.querySelector(".js-auto-scroll"),scrollingElement:t,inputInlineRef:e,spacerRef:r,bodyRef:i,isModeNative:a===n.NATIVE,autoScrollHandler:o});return()=>s.destroy()}),[l,a,e,r,i,o])}(f,p,e,function(){const{document:e}=s(),{design:r}=d(),i=Du(),[o,a]=(0,t.useState)(null),l=i===n.NATIVE?e.scrollingElement:e.querySelector(".js-auto-scroll");return(0,t.useEffect)((()=>(r.header_visible&&l&&!o&&a(new Qp({scrollingElement:l,header:e.querySelector(".Header"),body:e.querySelector(".Body")})),()=>{o&&o.destroy()})),[e,r.header_visible,l,o]),null==o?void 0:o.getAutoScrollHandler()}()),function(){const{document:e,iframe:n,window:r}=s();(0,t.useEffect)((()=>{const t=new Xp({document:e,iframe:n,selector:".js-auto-focus",window:r});return()=>t.destroy()}),[e,n,r])}(),t.createElement(oh,{hasHeader:a||l,hasAgentAssigned:u,hasPersistentMenu:c,isConnectionOk:o&&i},r?t.createElement(sh,null,t.createElement(dh,null)):t.createElement(t.Fragment,null,t.createElement(eh,null),t.createElement(Yw,null),t.createElement(am,null),t.createElement(r_,{inputInlineRef:f,isConnectionOk:o&&i}),t.createElement(fm,{hasInputFixed:u,spacerRef:p})))}t_.propTypes={children:i().node,inputInlineRef:i().object},t_.defaultProps={children:null,inputInlineRef:null},n_.propTypes={children:i().node.isRequired},r_.propTypes={isConnectionOk:i().bool,inputInlineRef:i().object},r_.defaultProps={isConnectionOk:!0,inputInlineRef:null},i_.propTypes={bodyRef:i().object},i_.defaultProps={bodyRef:null};const o_=gi.div`
  && {
    z-index: ${({theme:e})=>e.zIndex.body};
    overflow: hidden;

    ${()=>Du()===n.NATIVE?"height: auto;\n         overflow-y: visible;\n         min-height: 100vh;\n      ":"height: 100%;"}
  }
`;function a_({className:e,bodyRef:n,children:r}){return t.createElement(o_,{className:Qu()({Body:!0,[e]:!!e}),ref:n},r)}function s_(){const e=(0,t.useRef)(null);return t.createElement(a_,{bodyRef:e},t.createElement(i_,{bodyRef:e}))}a_.propTypes={className:i().string,bodyRef:i().object,children:i().node},a_.defaultProps={className:null,bodyRef:null,children:null};const l_=gi.footer`
  z-index: ${({theme:e})=>e.zIndex.footer}; /* The input icon and the input fixed have a (z-index: 4) */
  bottom: 0;
  max-height: ${e=>e.theme.footer.max_height.desktop};
  width: 100%;
  pointer-events: none;
  a, button, input, textarea {
    pointer-events: auto;
  }

  ${()=>Du()===n.NATIVE?"position: fixed;\n         left: 0;\n      ":"position: absolute;"}

  @media ${td} {
    max-height: ${e=>e.theme.footer.max_height.mobile};
    background-color: rgba(0, 0, 0, 0.02);
  }

  ${({hasInputFixed:e})=>e&&Jr`
      max-height: ${e=>e.theme.footer.max_height.desktop_hto};

      @media ${td} {
        max-height: ${e=>e.theme.footer.max_height.mobile_hto};
      }
    `}
`;function c_({hasInputFixed:e,isConnectionOk:n,children:r}){return t.createElement(l_,{className:Qu()({Footer:!0,"Footer--hasInputFixed":e,"are-disabled":!n}),hasInputFixed:e},r)}c_.propTypes={hasInputFixed:i().bool,isConnectionOk:i().bool,children:i().node},c_.defaultProps={hasInputFixed:!1,isConnectionOk:!0,children:null};var u_=t.createElement("svg",{viewBox:"0 0 128 28",width:"63px",height:"26px",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t.createElement("title",null,"Landbot"),t.createElement("g",{id:"Symbols",stroke:"none",fill:"none"},t.createElement("path",{d:"M12.98,20.1 L12.98,25 L0.345,25 L0.345,0.5 L6.015,0.5 L6.015,20.1 L12.98,20.1 Z M23.725,20.87 C24.3316697,20.87 24.8799975,20.7533345 25.37,20.52 C25.8600025,20.2866655 26.2799983,19.9775019 26.63,19.5925 C26.9800017,19.2074981 27.2541657,18.7525026 27.4525,18.2275 C27.6508343,17.7024974 27.75,17.1483362 27.75,16.565 C27.75,15.9816637 27.6508343,15.4333359 27.4525,14.92 C27.2541657,14.4066641 26.9800017,13.9516686 26.63,13.555 C26.2799983,13.1583314 25.8600025,12.8433345 25.37,12.61 C24.8799975,12.3766655 24.3316697,12.26 23.725,12.26 C23.1183303,12.26 22.5700025,12.3766655 22.08,12.61 C21.5899976,12.8433345 21.1700017,13.1583314 20.82,13.555 C20.4699983,13.9516686 20.1958343,14.4066641 19.9975,14.92 C19.7991657,15.4333359 19.7,15.9816637 19.7,16.565 C19.7,17.1483362 19.7991657,17.7024974 19.9975,18.2275 C20.1958343,18.7525026 20.4699983,19.2074981 20.82,19.5925 C21.1700017,19.9775019 21.5899976,20.2866655 22.08,20.52 C22.5700025,20.7533345 23.1183303,20.87 23.725,20.87 Z M33.105,8.13 L33.105,25 L27.75,25 L27.75,22.62 C27.5399989,23.0166686 27.2600018,23.384165 26.91,23.7225 C26.5599983,24.060835 26.1575023,24.3524988 25.7025,24.5975 C25.2474977,24.8425012 24.7516693,25.0408326 24.215,25.1925 C23.6783307,25.3441674 23.1416694,25.42 22.605,25.42 C21.3916606,25.42 20.2775051,25.1925023 19.2625,24.7375 C18.2474949,24.2824977 17.378337,23.6641706 16.655,22.8825 C15.931663,22.1008294 15.3716687,21.1675054 14.975,20.0825 C14.5783314,18.9974946 14.38,17.8250063 14.38,16.565 C14.38,15.3049937 14.5783314,14.1325054 14.975,13.0475 C15.3716687,11.9624946 15.931663,11.0291706 16.655,10.2475 C17.378337,9.46582942 18.2474949,8.84750228 19.2625,8.3925 C20.2775051,7.93749773 21.3916606,7.71 22.605,7.71 C23.1416694,7.71 23.6783307,7.78583257 24.215,7.9375 C24.7516693,8.08916743 25.2474977,8.29333205 25.7025,8.55 C26.1575023,8.80666795 26.5599983,9.10999825 26.91,9.46 C27.2600018,9.81000175 27.5399989,10.1716648 27.75,10.545 L27.75,8.13 L33.105,8.13 Z M35.415,8.13 L40.77,8.13 L40.77,10.58 C41.236669,9.66999545 41.9424953,8.96416917 42.8875,8.4625 C43.8325047,7.96083083 44.9699933,7.71 46.3,7.71 C47.3966722,7.71 48.3416627,7.87916497 49.135,8.2175 C49.9283373,8.55583503 50.558331,9.0283303 51.025,9.635 C51.5616693,10.2883366 51.9174991,11.0408291 52.0925,11.8925 C52.2675009,12.7441709 52.355,13.7766606 52.355,14.99 L52.355,25 L47,25 L47,16.355 C47,15.1416606 46.7841688,14.1558371 46.3525,13.3975 C45.9208312,12.6391629 45.1450056,12.26 44.025,12.26 C42.9283279,12.26 42.1116693,12.6449961 41.575,13.415 C41.0383307,14.1850038 40.77,15.2233268 40.77,16.53 L40.77,25 L35.415,25 L35.415,8.13 Z M63.2062281,20.87 C63.8128978,20.87 64.3612256,20.7533345 64.8512281,20.52 C65.3412305,20.2866655 65.7612263,19.9775019 66.1112281,19.5925 C66.4612298,19.2074981 66.7353937,18.7525026 66.9337281,18.2275 C67.1320624,17.7024974 67.2312281,17.1483362 67.2312281,16.565 C67.2312281,15.9816637 67.1320624,15.4333359 66.9337281,14.92 C66.7353937,14.4066641 66.4612298,13.9516686 66.1112281,13.555 C65.7612263,13.1583314 65.3412305,12.8433345 64.8512281,12.61 C64.3612256,12.3766655 63.8128978,12.26 63.2062281,12.26 C62.5995584,12.26 62.0512305,12.3766655 61.5612281,12.61 C61.0712256,12.8433345 60.6512298,13.1583314 60.3012281,13.555 C59.9512263,13.9516686 59.6770624,14.4066641 59.4787281,14.92 C59.2803937,15.4333359 59.1812281,15.9816637 59.1812281,16.565 C59.1812281,17.1483362 59.2803937,17.7024974 59.4787281,18.2275 C59.6770624,18.7525026 59.9512263,19.2074981 60.3012281,19.5925 C60.6512298,19.9775019 61.0712256,20.2866655 61.5612281,20.52 C62.0512305,20.7533345 62.5995584,20.87 63.2062281,20.87 Z M67.2312281,22.62 C67.021227,23.0166686 66.7412298,23.384165 66.3912281,23.7225 C66.0412263,24.060835 65.6387303,24.3524988 65.1837281,24.5975 C64.7287258,24.8425012 64.2328974,25.0408326 63.6962281,25.1925 C63.1595587,25.3441674 62.6228974,25.42 62.0862281,25.42 C60.8728887,25.42 59.7587331,25.1925023 58.7437281,24.7375 C57.728723,24.2824977 56.859565,23.6641706 56.1362281,22.8825 C55.4128911,22.1008294 54.8528967,21.1675054 54.4562281,20.0825 C54.0595594,18.9974946 53.8612281,17.8250063 53.8612281,16.565 C53.8612281,15.3049937 54.0595594,14.1325054 54.4562281,13.0475 C54.8528967,11.9624946 55.4128911,11.0291706 56.1362281,10.2475 C56.859565,9.46582942 57.728723,8.84750228 58.7437281,8.3925 C59.7587331,7.93749773 60.8728887,7.71 62.0862281,7.71 C62.6228974,7.71 63.1595587,7.78583257 63.6962281,7.9375 C64.2328974,8.08916743 64.7287258,8.29333205 65.1837281,8.55 C65.6387303,8.80666795 66.0412263,9.10999825 66.3912281,9.46 C66.7412298,9.81000175 67.021227,10.1716648 67.2312281,10.545 L67.2312281,0.5 L72.5862281,0.5 L72.5862281,25 L67.2312281,25 L67.2312281,22.62 Z M80.3740351,25 L75.0190351,25 L75.0190351,0.5 L80.3740351,0.5 L80.3740351,10.545 C80.5840361,10.1716648 80.8640333,9.81000175 81.2140351,9.46 C81.5640368,9.10999825 81.9723661,8.80666795 82.4390351,8.55 C82.9057041,8.29333205 83.4015325,8.08916743 83.9265351,7.9375 C84.4515377,7.78583257 84.9940323,7.71 85.5540351,7.71 C86.7673745,7.71 87.88153,7.93749773 88.8965351,8.3925 C89.9115402,8.84750228 90.7806981,9.46582942 91.5040351,10.2475 C92.227372,11.0291706 92.7873664,11.9624946 93.1840351,13.0475 C93.5807037,14.1325054 93.7790351,15.3049937 93.7790351,16.565 C93.7790351,17.8250063 93.5807037,18.9974946 93.1840351,20.0825 C92.7873664,21.1675054 92.227372,22.1008294 91.5040351,22.8825 C90.7806981,23.6641706 89.9115402,24.2824977 88.8965351,24.7375 C87.88153,25.1925023 86.7673745,25.42 85.5540351,25.42 C84.9940323,25.42 84.4515377,25.3441674 83.9265351,25.1925 C83.4015325,25.0408326 82.9057041,24.8425012 82.4390351,24.5975 C81.9723661,24.3524988 81.5640368,24.060835 81.2140351,23.7225 C80.8640333,23.384165 80.5840361,23.0166686 80.3740351,22.62 L80.3740351,25 Z M84.4340351,20.87 C85.0173713,20.87 85.5540326,20.7533345 86.0440351,20.52 C86.5340375,20.2866655 86.9540333,19.9775019 87.3040351,19.5925 C87.6540368,19.2074981 87.9282008,18.7525026 88.1265351,18.2275 C88.3248694,17.7024974 88.4240351,17.1483362 88.4240351,16.565 C88.4240351,15.9816637 88.3248694,15.4333359 88.1265351,14.92 C87.9282008,14.4066641 87.6540368,13.9516686 87.3040351,13.555 C86.9540333,13.1583314 86.5340375,12.8433345 86.0440351,12.61 C85.5540326,12.3766655 85.0173713,12.26 84.4340351,12.26 C83.8273654,12.26 83.2732043,12.3766655 82.7715351,12.61 C82.2698659,12.8433345 81.8440368,13.1583314 81.4940351,13.555 C81.1440333,13.9516686 80.8698694,14.4066641 80.6715351,14.92 C80.4732008,15.4333359 80.3740351,15.9816637 80.3740351,16.565 C80.3740351,17.1483362 80.4732008,17.7024974 80.6715351,18.2275 C80.8698694,18.7525026 81.1440333,19.2074981 81.4940351,19.5925 C81.8440368,19.9775019 82.2698659,20.2866655 82.7715351,20.52 C83.2732043,20.7533345 83.8273654,20.87 84.4340351,20.87 Z M104.645614,25.455 C103.19894,25.455 101.89812,25.2158357 100.743114,24.7375 C99.5881083,24.2591643 98.6081181,23.617504 97.803114,22.8125 C96.99811,22.007496 96.3797829,21.0683387 95.948114,19.995 C95.5164452,18.9216613 95.300614,17.7783394 95.300614,16.565 C95.300614,15.3516606 95.5164452,14.2083387 95.948114,13.135 C96.3797829,12.0616613 96.99811,11.122504 97.803114,10.3175 C98.6081181,9.51249597 99.5881083,8.87083573 100.743114,8.3925 C101.89812,7.91416428 103.19894,7.675 104.645614,7.675 C106.115621,7.675 107.428108,7.91416428 108.583114,8.3925 C109.73812,8.87083573 110.71811,9.51249597 111.523114,10.3175 C112.328118,11.122504 112.946445,12.0616613 113.378114,13.135 C113.809783,14.2083387 114.025614,15.3516606 114.025614,16.565 C114.025614,17.7783394 113.809783,18.9216613 113.378114,19.995 C112.946445,21.0683387 112.328118,22.007496 111.523114,22.8125 C110.71811,23.617504 109.73812,24.2591643 108.583114,24.7375 C107.428108,25.2158357 106.115621,25.455 104.645614,25.455 Z M104.645614,20.87 C105.252284,20.87 105.806445,20.7591678 106.308114,20.5375 C106.809783,20.3158322 107.235612,20.0066686 107.585614,19.61 C107.935616,19.2133313 108.20978,18.7583359 108.408114,18.245 C108.606448,17.7316641 108.705614,17.1716697 108.705614,16.565 C108.705614,15.9816637 108.606448,15.4275026 108.408114,14.9025 C108.20978,14.3774974 107.935616,13.9225019 107.585614,13.5375 C107.235612,13.1524981 106.809783,12.8433345 106.308114,12.61 C105.806445,12.3766655 105.252284,12.26 104.645614,12.26 C104.038944,12.26 103.490616,12.3766655 103.000614,12.61 C102.510612,12.8433345 102.090616,13.1524981 101.740614,13.5375 C101.390612,13.9225019 101.122282,14.3774974 100.935614,14.9025 C100.748946,15.4275026 100.655614,15.9816637 100.655614,16.565 C100.655614,17.1716697 100.748946,17.7316641 100.935614,18.245 C101.122282,18.7583359 101.390612,19.2133313 101.740614,19.61 C102.090616,20.0066686 102.510612,20.3158322 103.000614,20.5375 C103.490616,20.7591678 104.038944,20.87 104.645614,20.87 Z M127.018596,20.905 L127.018596,25 L126.588874,25.0680556 C126.280356,25.1121297 125.927765,25.1536109 125.531096,25.1925 C124.936094,25.2508336 124.241934,25.28 123.448596,25.28 C122.818593,25.28 122.1536,25.2333338 121.453596,25.14 C120.753593,25.0466662 120.106099,24.8075019 119.511096,24.4225 C118.916094,24.0374981 118.426098,23.442504 118.041096,22.6375 C117.656095,21.832496 117.463596,20.730007 117.463596,19.33 L117.463596,12.12 L114.803596,12.12 L114.803596,8.13 L117.463596,8.13 L117.463596,3.125 L122.783596,3.125 L122.783596,8.13 L126.633596,8.13 L126.633596,12.12 L122.783596,12.12 L122.783596,18.14 C122.783596,18.7700031 122.841929,19.2716648 122.958596,19.645 C123.075264,20.0183352 123.238595,20.3041657 123.448596,20.5025 C123.658598,20.7008343 123.903595,20.8349996 124.183596,20.905 C124.463598,20.9750004 124.766928,21.01 125.093596,21.01 C125.420265,21.01 125.758595,21.0041667 126.108596,20.9925 C126.458598,20.9808333 126.761929,20.9516669 127.018596,20.905 Z",id:"Landbot",fill:"#333366"})));const d_=gi.div`
  font-size: 13.5px;
  color: #6a6b7c;
  line-height: 1;
`,f_=gi(d_)`
  path {
    fill: #2f3149;
  }
  svg {
    margin: 2px 0 0 6px;
  }
`,p_=gi.a`
  background: white;
  box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3);
  padding: 8px 15px;
  border-radius: 3px;
  height: 1.95rem;
  transition: transform 0.15s ease-in-out;

  &:hover {
    box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3),
      0 3px 5px -5px rgba(47, 49, 73, 0.35);
    transform: translateY(-1px);
  }

  /* stylelint-disable */
  &[data-tooltip]::before {
    font-family: var(--font_family), BlinkMacSystemFont, -apple-system, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      Helvetica, Arial, sans-serif;
    background-color: #2f3048;
    font-size: 13px;
  }
  /* stylelint-enable */

  &[data-tooltip]::before,
  &[data-tooltip]::after {
    margin-top: -9px;
  }

  &,
  &[data-tooltip]::after {
    border-top-color: #2f2f47;
  }

  &[data-tooltip]::before,
  &[data-tooltip]::after {
    transition: opacity 0.25s ease-in-out;
    transition-delay: 0.35s;
  }
`,h_=gi.div`
  @media ${td} {
    margin: 0 auto;
    max-width: 700px;
    text-align: left;
    height: ${e=>e.theme.footer.mobile_height};
  }
`,m_=gi.div`
  width: 100%;
  text-align: center;
  z-index: ${({theme:e})=>e.zIndex.Branding};

  @media ${td} {
    margin: 0 auto;
    width: auto;
  }
  @media ${nd} {
    transform: scale(0.8);
  }

  ${({hasInputFixed:e})=>e?Jr`
          margin-bottom: 10px;
        `:Jr`
          margin-bottom: 20px;
        `}
`;function b_(e){return t.createElement(m_,{className:Qu()({Branding:!0,"has-tooltip-right":e.hasToolTipRight,"has-input-fixed":e.hasInputFixed}),hasInputFixed:e.hasInputFixed},t.createElement(h_,{className:"Branding__Container is-inline-flex"},t.createElement(p_,{className:"button Branding__Button",href:e.referralUrl,target:"_blank",rel:"noopener noreferrer","data-tooltip":e.isMobile?null:"Build a chatbot with no code 🤖"},t.createElement(d_,{className:"Branding__Text Branding__TextItem"},"Made with"),t.createElement(f_,{className:"Branding__Logo Branding__TextItem"},u_),t.createElement("span",{className:"Branding__Background"}))))}function g_({hasInputFixed:e,hasToolTipRight:n}){const{brand_name:r}=d(),i=`https://landbot.io/powered-by?utm_source=${encodeURIComponent(r)}&utm_medium=landbot&utm_campaign=header`;return t.createElement(b_,{referralUrl:i,hasToolTipRight:n,hasInputFixed:e,isMobile:E.isMobile})}b_.propTypes={referralUrl:i().string,hasToolTipRight:i().bool,hasInputFixed:i().bool,isMobile:i().bool},b_.defaultProps={referralUrl:null,hasToolTipRight:!1,hasInputFixed:!1,isMobile:!1},g_.propTypes={hasInputFixed:i().bool,hasToolTipRight:i().bool},g_.defaultProps={hasInputFixed:!1,hasToolTipRight:!1};const v_=gi.div`
  z-index: ${({theme:e})=>e.zIndex.InputFullWidth};
  position: relative;
  bottom: 0;
  text-align: center;
  background-color: #ffffff;
  margin: 0 auto;
  width: 100%;

  @media ${Ju} {
    min-height: 100px;
    background-color: transparent;
    bottom: 4px;
  }

  @media ${td} {
    box-shadow: 0 -1px 1px 0 rgba(47, 49, 73, 0.08);
    max-height: 96px;
  }

  .InputFullWidth__Container {
    position: relative;
  }

  .InputFullWidth__Content {
    z-index: ${({theme:e})=>e.zIndex.InputFullWidth};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 700px;
    position: relative;

    @media ${Ju} {
      height: auto;
      min-height: 100%;
    }

    .Input--Text,
    .Input--Text .field {
      height: 100%;
    }

    > input,
    > textarea {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }

  .InputText__SendButton {
    @media ${td} {
      height: 60px !important;
    }
  }

  .InputText {
    overflow: visible;
    position: relative;
    box-shadow: 0 0 60px -17px rgba(0, 0, 0, 0.07);
  }

  .InputText textarea {
    line-height: 24px;
    background: $white;
    max-height: 96px !important;

    @media ${td} {
      padding: 1rem 7.3rem 1rem 1.25rem;
      border: hidden;
    }
  }

  .InputText textarea:not(:focus) {
    border-color: transparent;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2) !important;

    @media ${td} {
      box-shadow: none !important;
    }
  }

  .hu-images-preview__container {
    border: hidden;

    @media ${Ju} {
      height: 60px;
      max-height: 96px;
      border-radius: 4px;
      border: 2px solid var(--form_inputs_border_color);
      background-color: var(--textarea_background);
    }
  }

  .hu-images-preview {
    flex: 1;
    display: flex;
    padding: 4px;
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    box-sizing: border-box;
  }

  .thumbnail {
    display: inline-block;
    height: 50px;
    width: 50px;
    background-size: cover;
    position: relative;
    margin-right: 2px;
    margin-bottom: 2px;
  }

  .thumbnail-button {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
  }
`;function y_(e){return t.createElement(v_,{className:Qu()({InputFullWidth:!0,"InputFullWidth--is-Active":e.isactive})},t.createElement("div",{className:"InputFullWidth__Container"},t.createElement("div",{className:"InputFullWidth__Content"},e.input)))}y_.propTypes={isactive:i().bool,input:i().object},y_.defaultProps={isactive:i().false,input:null};const w_=1e7;function __({images:e,removeImage:n}){return t.createElement("div",{className:"hu-images-preview__container"},t.createElement("div",{className:"hu-images-preview"},e.map(((e,r)=>t.createElement("div",{className:"thumbnail",key:e.name,style:e.url&&{backgroundImage:`url(${e.url})`}},t.createElement("div",{className:"thumbnail-button"},t.createElement("svg",{className:"hu-fill_accent",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",x:"3650",y:"3688",viewBox:"0 0 610 610",onClick:()=>n(r)},t.createElement("path",{d:"M387.128,170.748L306,251.915l-81.128-81.167l-54.124,54.124L251.915,306l-81.128,81.128l54.085,54.086L306,360.086 l81.128,81.128l54.086-54.086L360.086,306l81.128-81.128L387.128,170.748z M522.38,89.62 c-119.493-119.493-313.267-119.493-432.76,0c-119.493,119.493-119.493,313.267,0,432.76 c119.493,119.493,313.267,119.493,432.76,0C641.873,402.888,641.873,209.113,522.38,89.62z M468.295,468.295 c-89.62,89.619-234.932,89.619-324.551,0c-89.62-89.62-89.62-234.932,0-324.551c89.62-89.62,234.931-89.62,324.551,0 C557.914,233.363,557.914,378.637,468.295,468.295z"}))))))))}__.propTypes={images:i().arrayOf(i().object),removeImage:i().func},__.defaultProps={images:[],removeImage:()=>{}};const x_=gi.button`
  width: 60px !important;
  pointer-events: auto !important;
  opacity: 1;

  > * {
    transition: opacity 0.2s, transform 0.2s;
  }

  &:hover > * {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.4;
  }

  @media ${td} {
    width: 42px !important;
    transform: scale(0.85);
    margin-right: 7px;
    padding-right: 0;
  }
}
`;function k_({onClick:e,disabled:n,children:r,hasError:i}){let o;return o=r||(i?t.createElement("span",{role:"img","aria-label":"⚠️",className:"is-size-4"},"⚠️"):t.createElement(vm,null)),t.createElement(x_,{type:"button",className:"input-icon-send-button button is-text icon is-right",onClick:e,disabled:n||i},o)}k_.propTypes={onClick:i().func,disabled:i().bool,children:i().node,hasError:i().bool},k_.defaultProps={onClick:()=>{},disabled:!1,children:null,hasError:!1};const E_=gi.p`
  right: 0;
  bottom: ${e=>id(e.theme.initial_vars.vertical_unit,-3)};
  position: absolute;
  color: ${({theme:e})=>e.design.form_help_color};
`;function S_({hiddenWhenFullWidth:e,children:n}){return t.createElement(E_,{className:Qu()({"input-help-text is-hidden-mobile is-size-7 is-pulled-right is-uppercase is-unselectable":!0,"is-hidden":e})},n)}function C_(e){const{uploadedFile:n,uploadFile:r,removeUploadedFile:i}=function(){const[e,n]=(0,t.useState)(null),[r,i]=(0,t.useState)(""),[o,a]=(0,t.useState)(!1),s=Ad();return{uploadedFile:e,removeUploadedFile:()=>{n(null)},error:r,isFetching:o,uploadFile:e=>e.size<=w_?(a(!0),(new FormData).append("image",e),v.fetchUploadFile({channelToken:s.config.channelToken,customerToken:s.customerToken,serverUrl:s.config.serverUrl,file:e}).then((({url:t})=>n({url:t,name:e.name,size:e.size}))).catch((e=>{i("Error!"),console.error(e)})).then((()=>a(!1)))):(i("MAX. 10MB"),Promise.reject(new Error(`Size limit exceeded: "${e.size}" > "10000000"`)))}}(),{onFileUploadedChange:o}=e;(0,t.useEffect)((()=>{o(n)}),[n,o]);const a=n?t.createElement(__,{images:[n],removeImage:i}):t.createElement(Sn,{className:"textarea js-auto-focus",maxRows:e.maxRows,onChange:t=>e.onChange(t.target.value),onKeyDown:t=>{13===(t.keyCode||t.which)&&(t.shiftKey||(t.preventDefault(),e.value&&e.onSubmit()))},placeholder:e.placeholder,rows:1,value:e.value});return t.createElement("div",{className:Qu()({"u-no-border":e.hasNoBorder,InputText:!0})},t.createElement("div",{className:"field has-addons is-marginless"},t.createElement("div",{className:"control is-expanded has-icons-right"},a,e.hasAddOns&&!n&&t.createElement(Zg,{hasAttachButton:""===e.value,onSelectEmoji:t=>e.onSelectEmoji(t),uploadFile:r}),t.createElement(k_,{disabled:""===e.value&&null===n,onClick:()=>{e.onSubmit(),i()}}))),t.createElement(S_,{hiddenWhenFullWidth:""!==e.value},e.help))}function T_(e){const[n,r]=(0,t.useState)({}),{text:i}=d(),o=e=>{r({type:"text",message:e})},a=(0,t.useCallback)((e=>{r(e?{type:"file",url:e.url,message:e.name}:e=>({type:"text",message:"file"===e.type?"":e.message}))}),[]);return t.createElement(y_,{input:t.createElement(C_,{help:i.input_text_help,placeholder:i.text_input_placeholder,value:n.message,onChange:e=>o(e),onSelectEmoji:e=>(e=>{const t=n.message||"";o(t+e.native)})(e),onFileUploadedChange:a,onSubmit:()=>(e.onSubmit(n),void r({})),hasAddOns:!0})})}S_.propTypes={children:i().node.isRequired,hiddenWhenFullWidth:i().bool},S_.defaultProps={hiddenWhenFullWidth:!1},C_.propTypes={help:i().oneOfType([i().element,i().string]),placeholder:i().string,onChange:i().func,onSubmit:i().func,onFileUploadedChange:i().func,onSelectEmoji:i().func,value:i().string,hasAddOns:i().bool,hasNoBorder:i().bool,maxRows:i().number},C_.defaultProps={help:"",placeholder:"",onChange:()=>{},onSubmit:()=>{},onFileUploadedChange:()=>{},onSelectEmoji:()=>{},value:"",hasAddOns:!1,hasNoBorder:!1,maxRows:3},T_.propTypes={onSubmit:i().func},T_.defaultProps={onSubmit:()=>{}};const O_=gi.div`
  display: flex;
  padding: 8px 12px;
`;function P_(){const{branding:e}=d(),{messages:n}=If(),r=Ad(),i=Hu(),[o,a]=(0,t.useState)(!0),s=Gw();return(0,t.useEffect)((()=>{const e=e=>{a(!!e)};return r.events.on(jd,e),()=>{r.events.off(jd,e)}}),[r.events]),i||e||s?t.createElement(c_,{hasInputFixed:i,isConnectionOk:o},(o&&s||e)&&t.createElement(O_,{className:"Footer__Row"},o&&s&&t.createElement(Xw,{containerClassName:"BackButton--Mobile"}),e&&t.createElement(g_,{hasInputFixed:i})),i&&t.createElement(O_,{className:"Footer__Row is-paddingless"},t.createElement(T_,{messages:n,onSubmit:e=>{r.events.emit(Vd,e)}}))):null}const I_=gi.div`
  ${()=>Du()===n.NATIVE?"position: fixed;\n       width: 100%;\n       height: 100vh;":"position: absolute;"}

  .modal-close {
    ${()=>Du()===n.NATIVE?"position: fixed;":"position: absolute;"}
  }

  .modal-close [data-tooltip] {
    width: 100%;
    height: 100%;

    &:hover {
      &::before,
      &::after {
        opacity: 0;
        animation-delay: 0.1s;
        animation-name: opacityAnimation;
        animation-duration: 0.25s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
      }
    }

    @keyframes opacityAnimation {
      from {
        opacity: 0;
      }

      50% {
        opacity: 0.5;
      }

      to {
        opacity: 1;
      }
    }
  }
`;function N_(e){return t.createElement(I_,{className:Qu()({"modal fade-in":!0,"is-active":e.isOpen,[e.className]:!!e.className})},t.createElement("div",{className:"modal-background",onClick:e.canCloseOnClickOverlay?e.onClose:null}),t.createElement("div",{className:Qu()({"modal-content":!0,[e.contentClassName]:!!e.contentClassName}),style:{width:"auto"}},e.children),t.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:e.onClose,type:"submit"},t.createElement("div",{className:"has-tooltip-left","data-tooltip":"Close"})))}N_.propTypes={className:i().string,canCloseOnClickOverlay:i().bool,isOpen:i().bool,onClose:i().func,contentClassName:i().string,children:i().node},N_.defaultProps={className:null,canCloseOnClickOverlay:!1,isOpen:!1,onClose:()=>{},contentClassName:null,children:null};const M_=gi.iframe`
  height: 90vh;
  width: 90vw;
`;function D_(){const{isOpen:e,setIsOpen:n,src:r}=gd(),{document:i}=s(),o=fe.isSupportedDocumentType(r||"");return(0,t.useEffect)((()=>{if(!e)return;const t=e=>{27===e.keyCode&&n(!1)};return i.addEventListener("keydown",t,!1),()=>i.removeEventListener("keydown",t,!1)}),[e,n,i]),t.createElement(N_,{contentClassName:"has-text-centered",isOpen:e,onClose:()=>n(!1),canCloseOnClickOverlay:!0},o?t.createElement(M_,{type:"text/html",src:r,frameBorder:"0",allowFullScreen:!0,title:"lb-iframe"}):t.createElement(xd,{className:"is-inline-block",src:r}))}const A_=gi.div`
  z-index: ${({theme:e})=>e.zIndex.NotificationsPanel};
  ${()=>Du()===n.NATIVE?"position: fixed;":"position: absolute;"}
  top: 0;
  left: 0;
  padding: 10px 30px;
  height: ${e=>e.theme.header.height.default};
  width: 100%;
  color: white;
  background-color: #fc4c4c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${Ju} {
    padding: 22px 34px;
    margin: auto;
  }
`,j_=gi.div`
  display: none;

  &.is-active {
    display: block;
  }

  .modal-close {
    z-index: 41;
  }
`;function R_({message:e,retryMessage:n,isOpen:r,hasCloseButton:i,onClose:o,buttons:a}){return t.createElement(j_,{className:Qu()({NotificationsPanel:!0,"fade-in":!0,"is-active":r})},t.createElement(A_,{className:Qu()({"panel-container":!0})},t.createElement("p",null,e),t.createElement("p",null,a.length>0?a.map((({label:e,retryMessageLabel:r,onClick:i})=>t.createElement(Ci,{key:r?n:e,label:r?n:e,onClick:i}))):n)),i&&t.createElement("button",{"aria-label":"close",className:"modal-close is-large",onClick:o,type:"submit"},t.createElement("div",{className:"has-tooltip-left","data-tooltip":"Close"})))}function L_(){const{cfg:{isOpen:e,isInitialized:n,hasCloseButton:r,hasRetryButton:i,hasResetButton:o,message:a,retryCb:l,retryInterval:c},closeNotification:u,setIsInitialized:f}=bf(),{text:p}=d(),[h,m]=(0,t.useState)([]),{document:b}=s();(0,t.useEffect)((()=>{if(!e||!r)return()=>{};const t=e=>{27===e.keyCode&&u()};return b.addEventListener("keydown",t,!1),()=>b.removeEventListener("keydown",t,!1)}),[e,u,r,b]);const[g,v]=(0,t.useState)(-1),[y,w]=(0,t.useState)(""),[_,x]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{if(e&&!n){const e=[];"function"==typeof l&&c>0?(v(c),x(!0),i&&e.push({retryMessageLabel:!0,onClick:()=>{x(!1),l()}})):i&&e.push({label:p.error_retry_button_label,onClick:l}),o&&e.push({label:p.error_reset_button_label,onClick:()=>{alert("RESET")}}),m(e),w(""),f(!0)}else e||x(!1)}),[e,n,l,c,f,i,o,p]),(0,t.useEffect)((()=>{if(!e||!n||!_)return()=>{};const t=setInterval((()=>{v((e=>e-1))}),1e3);return()=>{clearInterval(t)}}),[e,n,_]),(0,t.useEffect)((()=>{e&&n&&_&&(g>0?w(p.error_retry_countdown_message.replace("{countdown}",g)):0===g&&(w(p.error_retrying_message),x(!1),l()))}),[e,n,_,g,l,p.error_retry_countdown_message,p.error_retrying_message]),t.createElement(R_,{isOpen:e,onClose:()=>u(),hasCloseButton:r,message:a,retryMessage:y,buttons:h})}R_.propTypes={hasCloseButton:i().bool,isOpen:i().bool,onClose:i().func,message:i().string,retryMessage:i().string,buttons:i().arrayOf(i().objectOf)},R_.defaultProps={hasCloseButton:!1,isOpen:!1,onClose:()=>{},message:"",retryMessage:"",buttons:[]};const F_=gi.div`
  /* Positioning */
  top: 0;
  right: 0;
  z-index: ${({theme:e})=>e.zIndex.OffsetMenuContent};
  ${()=>Du()===n.NATIVE?"position: fixed;":"position: absolute;"}

  /* Display & Box Model */
  width: 240px;
  height: 100%;
  padding: 18px 15px;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;

  /* Color */
  opacity: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 0 27px 0 rgba(32, 20, 104, 0.2);
  background-color: white; // --base_color_message

  /* Other */
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;

  &.OffsetMenu__Content--isActive {
    opacity: 1;
    transform: translateX(0);
  }
`,z_=({className:e,onClick:n})=>t.createElement(Oi,{ariaLabel:"Close Menu",className:Qu()({[e]:!0,OffsetMenu__CloseButton:!0,delete:!0}),onClick:n});z_.propTypes={className:i().string,onClick:i().func},z_.defaultProps={className:null,onClick:()=>{}};const U_=gi(z_)`
  align-self: flex-end;
  height: 37px;
  width: 37px;
  min-width: initial;
  min-height: initial;
  max-width: initial;
  max-height: initial;
  margin-bottom: 20px;
  background-color: transparent !important;

  &:hover,
  &:active {
    border-color: transparent;
    box-shadow: none;
    background-image: none;
  }

  &:before,
  &:after {
    background-color: ${({theme:e})=>e.design.message_color_bot};
  }
`,B_=gi.div`
  .modal-background {
    z-index: ${({theme:e})=>e.zIndex.OffsetMenu};
  }
`;function V_({menuActive:e,closeMenu:n}){return t.createElement(B_,{className:"OffsetMenu"},t.createElement(F_,{className:Qu()({OffsetMenu__Content:!0,"OffsetMenu__Content--isActive":e})},t.createElement(U_,{onClick:n}),t.createElement("div",{className:"OffsetMenu__ContentSection"},t.createElement(Jd,{ariaExpanded:e,closeMenu:n,isVerticalVersion:!0}))),e&&t.createElement("div",{className:"modal-background",onClick:n}))}function W_(){const{isOpen:e,setIsOpen:n}=rf();return t.createElement(V_,{menuActive:e,closeMenu:()=>{n(!1)}})}V_.propTypes={menuActive:i().bool,closeMenu:i().func},V_.defaultProps={menuActive:!1,closeMenu:()=>{}};const q_=gi.div`
  && {
    position: relative;
    overflow: hidden;

    ${()=>Du()===n.NATIVE?"height: auto\n        overflow-y: visible;\n        min-height: 100vh;\n      ":"height: 100%;"}
  }
`;function H_({children:e}){return t.createElement(q_,{id:"Main"},e)}H_.propTypes={children:i().node.isRequired};var $_=[P.BUTTON,P.CALENDLY,P.CARDS,P.DIALOG,P.DOCUMENT,P.IFRAME,P.IMAGE,P.REDIRECT,P.REFERRAL,P.STRIPE,P.STRIPE_INTENT,P.TEXT,P.MEDIA_DIALOG,P.AUDIO,P.VIDEO];function Y_(e){return"image"===e.media_type?t.createElement(Tb,e):"iframe"===e.media_type?t.createElement(kb,e):null}function G_(e){return e.rich_text?t.createElement("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:e.rich_text}}):t.createElement("div",{className:"content is-marginless"},e.text)}function K_(e){const{time:n}=function(e){const[n,r]=(0,t.useState)(ie()(e.extra,"redirect.timeout",3)),{window:i}=s();return(0,t.useEffect)((()=>{e.evaluate&&(n?setTimeout((()=>{r((e=>e-1))}),1e3):i.location.href=ae.Z.getHref(e.url))}),[n,e.evaluate,e.url,i.location.href]),n}(e),r=e.rich_text.replace(/\{timeout\}/i,n);return t.createElement(G_,dd({},e,{rich_text:r}))}Y_.propTypes={media_type:i().oneOf(["image","iframe"])},Y_.defaultProps={media_type:null},G_.propTypes={rich_text:i().string,text:i().string},G_.defaultProps={rich_text:"",text:""},K_.propTypes={evaluate:i().bool,extra:i().object,rich_text:i().string},K_.defaultProps={evaluate:!1,extra:{},rich_text:""};var Q_={[P.BUTTON]:G_,[P.CARDS]:G_,[P.DIALOG]:G_,[P.DOCUMENT]:gb,[P.AUDIO]:gb,[P.VIDEO]:gb,[P.IFRAME]:kb,[P.IMAGE]:Tb,[P.MEDIA_DIALOG]:Y_,[P.REDIRECT]:K_,[P.REFERRAL]:Ub,[P.STRIPE]:G_,[P.STRIPE_INTENT]:G_,[P.TEXT]:G_};const X_={get:(e,t)=>{if("function"==typeof e[t]){const n=e[t];return function(...t){return n.apply(e,t)}}return e.getValue(t)}};class Z_ extends Af{constructor(e){super(e),this.data.messageText=null}}function J_(e,t){if(e instanceof Z_)throw new Error("TypeError: invalid arguments supplied to slideWrapper. Attempt to wrap an already wrapped slide.");return new Proxy(new Z_(e,t),X_)}function ex(e){const n=Q_[e.type];return n?t.createElement(n,e):null}function tx(e,n){const r=oe.getInputType(e),i=xw[r];return i?t.createElement("div",{className:"mt-5"},t.createElement(i,{message:J_(e),onSubmit:n})):null}function nx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function rx(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?nx(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):nx(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ix(){const[e,n]=(0,t.useState)([]),r=(0,t.useRef)(),i=Ad(),[o,a]=(0,t.useState)(0);return(0,t.useEffect)((()=>{const e=i.pipelines.$readableSequence.subscribe((e=>{var t;void 0!==(t=e).samurai&&$_.includes(t.type)&&n((t=>t.concat(e)))}));return()=>e.unsubscribe()}),[i.pipelines.$readableSequence]),(0,t.useEffect)((()=>{setTimeout((()=>{a(e.length-1)}),500)}),[e.length]),(0,t.useEffect)((()=>{r.current&&r.current.slickGoTo(o)}),[o]),{slides:e,sliderRef:r,goToSlide:e=>r.current.slickGoTo(e),onSubmit:e=>{n((e=>[...e.slice(0,-1),rx(rx({},e[e.length-1]),{},{readOnly:!0})])),i.events.emit(Vd,e)}}}const ox=gi.div`
  display: flex;
  height: 4px;
`,ax=gi.div`
  flex: 1;
  width: 100%;
  min-width: 0;
  border-radius: 2px;
  background-color: rgba(198, 200, 210, 0.6);
  position: relative;

  &:not(:last-child) {
    margin-right: 5px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({value:e})=>e?`${e}%`:0};
    content: '';
    display: inline-block;
    height: 100%;
    border-radius: 2px;
    background-color: var(--form_buttons_background_color);
  }
`;function sx({progress:e}){return e?t.createElement(ox,{className:"Progress"},Array(e.total).fill(null).map(((t,n)=>n+1<=e.current?100:0)).map((e=>t.createElement(ax,{value:e})))):null}sx.propTypes={progress:i().shape({total:i().number,current:i().number})},sx.defaultProps={progress:null};const lx=bi`
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,cx=gi.article`
  height: 100%;
  overflow-y: auto;
  padding: 50px 60px;
`,ux=gi.div`
  width: 100%;
  height: 100%;
  color: var(--message_color_bot);
  background-color: var(--message_background_color_bot);
  box-shadow: 0 32px 64px 0 rgba(14, 86, 124, 8%);
  border-radius: 18px;
  animation: ${lx} 0.5s 0.5s ease-in-out forwards;
  opacity: 0;

  img {
    object-fit: cover;
    height: 100%;
  }

  ${ox} {
    position: absolute;
    width: 100%;
    padding: 0 40px;
    top: 16px;
  }

  @media ${Ju} {
    max-height: 430px;
  }

  &.has-background ${cx} {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    // El peligro de esto es que a lo mejor la imagen es de fondo claro, y por tanto el texto no
    // sería prácticamente visible.
    h1, h2, h3, p {
      color: white;
    }
  }
`;function dx(e){const{id:n,className:r,content:i,background:o,progress:a}=e,s={background:o,backgroundSize:"cover",backgroundPosition:"center"};return t.createElement(ux,{id:n,className:Qu()("Slide is-relative",o&&"has-background",r),onClick:e.onClick,style:s},t.createElement(sx,{progress:a}),t.createElement(cx,{className:"SlideContent","data-type":e.type},i))}dx.propTypes={background:i().string,className:i().string,content:i().node,id:i().string,onClick:i().func,progress:i().object,type:i().string},dx.defaultProps={background:null,className:"",content:null,id:null,onClick:void 0,progress:null,type:null};function fx(e){return e<670?"10px":(e-650)/2+"px"}const px=gi.div`
  /* LAN-5805: Este cambio es peligroso, los paddings tienen un objetivo.
  padding: 100px 0;
  
  @media ${Ju} {
    padding: 100px 0;
  } */
  padding: 0;

  ${()=>Du()===n.NATIVE?Jr`
          height: 100vh;
        `:Jr`
          height: 100%;
        `}
  }
`,hx=gi(gg.Z)`
  width: 100%;

  &,
  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }

  .slick-slide {
    opacity: 0.4;
    transition: opacity 0.5s, transform 0.5s;
    transform: scale(0.9);
    transform-origin: right center;

    &.slick-active {
      opacity: 1;
      transform: scale(1);

      + .slick-slide {
        transform: scale(0.9);
        transform-origin: left center;
      }
    }

    &:not(.slick-active) {
      cursor: pointer;
    }
  }

  .slick-slide > div {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
`;var mx=function(){const e=s().window.innerWidth,{slides:n,sliderRef:r,goToSlide:i,onSubmit:o}=ix(),{isFetching:a,error:l}=function(){const[e,n]=(0,t.useState)(!0),[r,i]=(0,t.useState)(null),o=df();return(0,t.useEffect)((()=>{o.init().catch((e=>i(e))).finally((()=>n(!1)))}),[]),{isFetching:e,error:r}}();return t.createElement(px,{className:"Body"},!a&&!l&&t.createElement(hx,{className:"Slider",infinite:!1,dots:!1,arrows:!1,centerMode:!0,centerPadding:fx(e),ref:r},n.map(((e,n)=>{var r,a,s,l;return t.createElement(dx,{key:n,id:null===(r=e.extra)||void 0===r?void 0:r.id,className:null===(a=e.extra)||void 0===a?void 0:a.className,onClick:()=>i(n),background:null===(s=e.extra)||void 0===s?void 0:s.background,type:e.type,progress:null===(l=e.extra)||void 0===l?void 0:l.steps,content:t.createElement(t.Fragment,null,ex(e),tx(e,e.readOnly?void 0:o))})}))),l&&t.createElement("p",{className:"is-size-4",style:{color:"var(--form_help_color)"}},"ERROR!"))};function bx(){return t.createElement(H_,null,t.createElement(Au,null),t.createElement(L_,null),t.createElement(gx,null),t.createElement(D_,null),t.createElement(W_,null))}function gx(){const{experience:e}=d();switch(e){case J:return t.createElement(t.Fragment,null,t.createElement(af,null),t.createElement(lf,null),t.createElement(mx,null),t.createElement(P_,null));case ee:default:return t.createElement(t.Fragment,null,t.createElement(af,null),t.createElement(lf,null),t.createElement(s_,null),t.createElement(P_,null))}}var vx=__webpack_require__(419);function yx(e){console.error(`Landbot: You're using a deprecated function "${e}".`)}function wx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _x(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?wx(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):wx(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function xx({core:e,config:n,children:r}){const[i,o]=(0,t.useState)({}),[a,s]=(0,t.useState)([]);return(0,t.useEffect)((()=>{const t=()=>{o(e.storage.get("agents")||{})};return e.events.on(Ld,t),()=>e.events.off(Ld,t)}),[e.events,e.storage]),(0,t.useEffect)((()=>{const t=async t=>{const r=t.agent_id||t.samurai;!r||ce()(a,r)||i[r]||(s((e=>[...e,r])),"-1"!==r&&r>0&&await v.fetchAgentData({channelToken:n.channelToken,serverUrl:n.serverUrl,agentID:r}).then((t=>{o((n=>{const i=_x(_x({},n),{},{[r]:{name:t.name,avatar:t.avatar}});return e.storage.set("agents",i),i}))})))};return e.events.on(zd,t),()=>e.events.off(zd,t)}),[e.events,e.storage,i,a,n]),t.createElement(zu,{value:i},r)}function kx(e){const[n,r]=(0,t.useState)(null);return t.createElement(Ru,{value:{agent:n,setAssignation:r}},e.children)}function Ex(e){const[n,r]=(0,t.useState)(!1),[i,o]=(0,t.useState)(null);return t.createElement(bd,{value:{isOpen:n,setIsOpen:r,src:i,setSrc:o}},e.children)}function Sx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Cx(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Sx(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Sx(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Tx(e){const[n,r]=(0,t.useState)(pf),[i,o]=(0,t.useState)(null);return t.createElement(mf,{value:{cfg:n,showNotification:(e,t={})=>{if(n.isOpen)return r((t=>Cx(Cx({},t),{},{message:e}))),null;const i=(new Date).getTime();return o(i),r(Cx(Cx(Cx({},pf),{},{message:e},t),{},{isOpen:!0,isInitialized:!1})),i},closeNotification:(e=-1)=>{-1!==e&&e!==i||r((e=>{const{lastAction:t,retryCb:n}=e;return t!==ff&&"function"==typeof n&&n(),Cx(Cx({},e),{},{isOpen:!1,lastAction:null,retryCb:null})}))},setIsInitialized:e=>{r((t=>Cx(Cx({},t),{},{isInitialized:e})))}}},e.children)}function Ox(e){const[n,r]=(0,t.useState)(!1);return t.createElement(nf,{value:{isOpen:n,setIsOpen:r}},e.children)}function Px(e,n){const r=(0,t.useRef)(n),[i,o]=(0,t.useReducer)(e,n),{debug:a}=d(),s=(0,t.useMemo)((()=>a?function(e){return t=>(console.groupCollapsed("Action:",t),e(t))}(o):o),[o,a]);return(0,t.useEffect)((()=>{a&&i!==n&&(console.log("Prev state: ",r.current),console.log("Next state: ",i),console.groupEnd()),r.current=i}),[i,i.messages,n,a]),[i,s]}function Ix({children:e}){const n=Ad(),r=Lu(),[i,o]=Px(Tf,Cf),a=zf(i.messages),s=h(),{customData:l}=d();return(0,t.useEffect)((()=>{const e=n.pipelines.$typingSequence.subscribe((e=>{if(null===e||e&&!0===e.state)return;const{message:t}=e;"hidden"===t.type&&"script"===t.action&&ae.Z.evalCode(t.script,s),o({type:xf,message:ae.Z.compose(fe.withEvaluate,fe.withVariablesReplaced.bind(fe))(t,l),options:{}})}));return()=>{e.unsubscribe()}}),[n.pipelines.$typingSequence,s,l,o]),(0,t.useEffect)((()=>{r.setAssignation(fe.getAssignationAgentID(a))}),[r,a]),t.createElement(Pf,{value:{messagesWrapper:a,lastTimestamp:a.getLastMessage().timestamp||0,setMessages:e=>{const t=fe.createSortedMessagesArray(e);o({type:yf,messages:t})},setPreviousSessionMessages:e=>{const t=fe.createSortedMessagesArray(e);o({type:wf,messages:t})},resumePreviousSession:()=>{o({type:_f})},newMessage:(e,t={})=>{o({type:xf,message:e,options:t})},clean:()=>{o({type:kf}),o({type:kf})},addMessages:e=>{const t=fe.createSortedMessagesArray(e);o({type:Ef,messages:t})},markAsFailed:(e,t=null)=>{o({type:Sf,message:e,retryCb:t})}}},e)}function Nx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Mx(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Nx(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Nx(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Dx({children:e}){const[n,r]=(0,t.useState)(!1),{customData:i}=d(),[o,a]=(0,t.useState)(i),{lastTimestamp:l,newMessage:c,markAsFailed:u,resumePreviousSession:f,clean:p}=If(),{document:h}=s(),m=Ad(),b=df();return(0,t.useEffect)((()=>{const e=e=>{Hp({targets:h.querySelector(".js-revisit-fade"),opacity:[1,0],duration:250,easing:"easeInExpo",complete:()=>{if(p(),Hp({targets:h.querySelector(".js-revisit-fade"),opacity:[0,1],duration:0}),"function"==typeof e)return e()}})},t=async t=>{if(r(!0),"#continue"===t.payload||"#_continue"===t.payload)return void e(f);const n=Mx(Mx({},t),{},{custom_data:Mx(Mx({},o),t.custom_data||{}),ui_key:ae.Z.randomKey(),version:"3.0.0"}),i=ae.Z.compose(fe.withGhost,fe.withEvaluate)(fe.getMessageFromSendingData(Mx(Mx({},n),{},{timestamp:l+1})));"#init"===t.payload?await new Promise((t=>e(t))):c(i),b.sendMessage(n).catch((e=>{u(i,(()=>b.sendMessage(n)))})),a({})},n=(e={})=>{a((t=>Mx(Mx({},t),e)))},i=()=>{r(!1)};return m.events.on(Vd,t),m.events.on(Rd,n),m.events.on(zd,i),()=>{m.events.off(Vd,t),m.events.off(Rd,n),m.events.off(zd,i)}}),[o,m.events,b,l,u,c,f,p,h]),t.createElement(qb,{value:{isSubmitted:n,setIsSubmitted:r}},e)}function Ax(e){const{document:n,window:r}=s(),i=d(),o=Ad(),a=h();return function(){const{document:e}=s();(0,t.useLayoutEffect)((()=>{const t=e.createElement("style");return t.type="text/css",t.id="dynamic-styles",t.appendChild(e.createTextNode(vx.Z)),e.head.prepend(t),()=>{e.getElementById("dynamic-styles").remove()}}),[e])}(),function(){const e=Du(),{document:n}=s(),{experience:r}=d();(0,t.useLayoutEffect)((()=>{const t=`Landbot${e}`,i=`LandbotExperience--${r}`;return n.documentElement.classList.add(t),n.documentElement.classList.add(i),()=>{n.documentElement.classList.remove(t),n.documentElement.classList.remove(i)}}),[e,n,r])}(),(0,t.useEffect)((()=>{a.document=n,a.window=r,(({widget:e,document:t,window:n})=>{const{core:r}=e;n.Landbot=n.Landbot||{};const{Landbot:i}=n;i.send=function(e,t){switch(e){case"landbot-msg-send":r.sendMessage(t);break;case"landbot-custom-data":r.events.emit(Rd,t);break;default:r.events.emit(e,t)}yx("Landbot.send")},i.exec=i.send,i.on=function(e,t){switch(e){case"landbot-msg-receive":r.events.on(zd,t);break;default:r.events.on(e,t)}yx("Landbot.on")},i.off=r.events.off})({widget:a,document:n,window:r}),function(e,t){const n=e.Element;n.prototype.matches||(n.prototype.matches=n.prototype.matchesSelector||n.prototype.mozMatchesSelector||n.prototype.msMatchesSelector||n.prototype.oMatchesSelector||n.prototype.webkitMatchesSelector||function(e){for(var n=t.querySelectorAll(e),r=n.length;--r>=0&&n.item(r)!==this;);return r>-1})}(r,n),function(e,t){var n=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame;e.requestAnimationFrame=n}(r),function(e,t){const n=e.NodeList;n&&!n.prototype.forEach&&(n.prototype.forEach=function(t,n){n=n||e;for(var r=0;r<this.length;r++)t.call(n,this[r],r,this)})}(r),o.events.emit(Fd)}),[n,r,a,o.events]),y([[xx,{core:o,config:i}],[kx],[Tx],[Ex],[Ox],[Ix],[Dx]],e.children)}function jx(e){return t.createElement(Ax,null,t.createElement(dn,null,t.createElement(bx,null)))}xx.propTypes={children:i().node,core:i().object,config:i().object},xx.defaultProps={children:null,core:{},config:{}},kx.propTypes={children:i().node},kx.defaultProps={children:null},Ex.propTypes={children:i().node},Ex.defaultProps={children:null},Tx.propTypes={children:i().node},Tx.defaultProps={children:null},Ox.propTypes={children:i().node},Ox.defaultProps={children:null},Ix.propTypes={children:i().node},Ix.defaultProps={children:null},Dx.propTypes={children:i().node},Dx.defaultProps={children:null},Ax.propTypes={},Ax.defaultProps={};var Rx=__webpack_require__(6561);function Lx({children:e,frameRef:n}){return t.createElement(Rx.ZP,{initialContent:'\n  <!DOCTYPE html>\n  <html>\n    <head></head>\n    <body>\n      <div id="frame-content"></div>\n    </body>\n  </html>',mountTarget:"#frame-content",frameBorder:"0",ref:n,style:{width:"100%",height:"100%"},"data-cy":null},e)}Lx.propTypes={frameRef:i().object,children:i().node.isRequired},Lx.defaultProps={frameRef:()=>{}};var Fx=Lx;function zx({children:e}){const n=(0,t.useRef)(null);return t.createElement(Fx,{frameRef:n},t.createElement(Rx.Kr,null,(({document:r,window:i})=>{var o;return t.createElement(a,{value:{document:r,iframe:null===(o=n.current)||void 0===o?void 0:o.node,window:i}},t.createElement(qr,{target:r.head},e))})))}zx.propTypes={children:i().node.isRequired},zx.defaultProps={};const Ux=gi.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: ${({theme:e})=>e.zIndex.Widget};
`;function Bx({children:e}){return t.createElement(Ux,{className:"LandbotFullpage"},e)}Bx.propTypes={children:i().node.isRequired};var Vx=["firebase","apiKey","authDomain","databaseURL","storageBucket","serverUrl","welcomeUrl","brandID","channelToken","customerToken","welcome","typing_options","storage_off","forceWebsockets"],Wx=["welcome","revisit","persistent_menu"];function qx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Hx(e,t,n,r,i,o){return"revisit"===n&&0===t.length?l.revisit:Wx.includes(n)?t:void 0}function $x(...t){return function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?qx(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):qx(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Kt()({},...t,Hx))}function Yx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Gx(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Yx(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Yx(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}class Kx{constructor(e){this.localConfig=cn()({},e)}async init(){let e={};try{e=await this._fetchConfig()}catch(e){console.warn("landbot-3: Could not fetch remote config",e)}return this.rawConfig=$x(l,e,this.localConfig),this.rawConfig.customData=Gx(Gx({},ae.Z.getHiddenFields(this.rawConfig.hidden_fields,window.location.search)),this.rawConfig.customData),this.applyConfig()}async _fetchConfig(){return this.localConfig.configUrl?v.fetchConfigJSON({configUrl:ae.Z.appendTimestampToUrl(this.localConfig.configUrl)}):Promise.reject()}applyConfig(e=null){return e&&(this.rawConfig=$x(this.rawConfig,e)),Gx(Gx({},this.rawConfig),{},{design:nn(this.rawConfig)})}}var Qx=__webpack_require__(1923),Xx=(__webpack_require__(8818),__webpack_require__(4707),__webpack_require__(5030)),Zx=__webpack_require__.n(Xx);function Jx(e){const n=d(),r=cn()({},Su,{design:n.design});return t.createElement(di,{theme:r},e.children)}function ek({config:e,core:n,children:r}){const[i,o]=(0,t.useState)(e);return(0,t.useEffect)((()=>{const e=e=>o(e);return n.events.on(qd,e),()=>n.events.off(qd,e)}),[n]),t.createElement(u,{value:i},r)}Jx.propTypes={children:i().node},Jx.defaultProps={children:null},ek.propTypes={config:i().object,core:i().object.isRequired,children:i().node},ek.defaultProps={config:{},children:null};class tk{constructor(t){(0,e.Z)(this,"MODE",null),(0,e.Z)(this,"VERSION","none"),this.core=new(g())({firebase:Qx}),this.configManager=new Kx(t),this.setup()}async setup(){this.config=await this.configManager.init(),this.core.setConfig(Zx()(this.config,Vx)),this.api=this._getApi(),this._create(),this._render(),this._applyConfig=this._applyConfig.bind(this),this.core.events.on(Wd,this._applyConfig)}onLoad(e){this.core.events.on(Fd,e)}setConfig(e={}){this.core.events.emit(Wd,e)}_applyConfig(e){this.config=this.configManager.applyConfig(e),this.core.events.emit(qd,this.config)}setCustomData(e={}){this.core.events.emit(Rd,e)}sendMessage(e){return this.core.sendMessage(e)}destroy(){this.core.events.off(Wd,this._applyConfig),zl.unmountComponentAtNode(this.container),this.container.remove(),this.container=null,this.core.destroy()}_create(){this.container=document.createElement("div"),document.body.appendChild(this.container)}_getApi(){return{init:this.core.init.bind(this.core),getMoreMessages:this.core.getMoreMessages.bind(this.core),sendMessage:this.core.sendMessage.bind(this.core)}}_render(){zl.render(y([[p,{value:this}],[Mu,{value:this.MODE}],[Dd,{value:this.core}],[ek,{core:this.core,config:this.config}],[uf,{value:this.api}],[Jx]],this._contentRenderer()),this.container)}_contentRenderer(){return null}}class nk extends tk{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.FULLPAGE)}_contentRenderer(){return t.createElement(Bx,null,t.createElement(zx,null,t.createElement(jx,null)))}}function rk({children:e}){const[n,r]=(0,t.useState)(!1),[i,o]=(0,t.useState)(!1),[a,s]=(0,t.useState)(null),[l,c]=(0,t.useState)(0),u=Ad();return(0,t.useEffect)((()=>{const e=()=>{r(!0),o(!1),u.storage.set("proactive",{closed:!0})},t=()=>r(!1);return u.events.on(Hd,e),u.events.on($d,t),()=>{u.events.off(Hd,e),u.events.off($d,t)}}),[u.events,u.storage]),(0,t.useEffect)((()=>{const e=e=>{n||(s(e),o(!0))},t=()=>o(!1);return u.events.on(Bd,e),u.events.on(Ud,t),()=>{u.events.off(Bd,e),u.events.off(Ud,t)}}),[n,u.events]),(0,t.useEffect)((()=>{i||s(null)}),[i]),t.createElement(Vu,{value:{isProactiveOpen:i,isOpen:n,proactiveMessages:a,proactiveHeight:l,setProactiveHeight:c}},e)}rk.propTypes={children:i().node},rk.defaultProps={children:null};var ik=gi.div`
  z-index: ${({theme:e})=>e.zIndex.LivechatLauncher};
  right: 0;
  bottom: 0;
  position: absolute;
  width: ${e=>e.theme.launcher.width};
  height: ${e=>e.theme.launcher.height};
  padding: ${e=>e.theme.launcher.shadow_length};
`,ok=gi.div`
  display: flex;
  flex-direction: column;
  transform-origin: bottom right;
  max-width: 350px;

  .InputInline {
    margin: 0 !important;
    min-height: initial !important;
  }

  .BackButton {
    display: none !important;
  }

  .Message[data-type='dialog'],
  .Message[data-type='text'] {
    .MessageBubble {
      padding: 7px 13px 9px;
    }
  }

  .MessageMediaBubble {
    max-width: 150px;

    figure {
      background: transparent;
    }
    img {
      max-height: 105px;
    }
  }

  .input-small-header {
    display: none;
  }

  &__card-content {
    padding: 1rem 1rem 0.2rem 1rem;
  }

  .Message .MessageBubble {
    box-shadow: 0 11px 23px -5px rgba(0, 0, 0, 0.06);
  }
`;function ak({children:e,launcher:n,proactive:r}){return t.createElement(t.Fragment,null,e,t.createElement(ok,{className:"LivechatProactive"},r),t.createElement(ik,{className:Qu()({LivechatLauncher:!0})},n),t.createElement(un,null))}ak.propTypes={children:i().node.isRequired,launcher:i().element,proactive:i().element},ak.defaultProps={launcher:null,proactive:null};const sk=({src:e,className:n})=>t.createElement(xd,{className:Qu()({[n]:!0,"is-launcher__avatar":!0}),src:e,contain:!0});sk.propTypes={src:i().string,className:i().string},sk.defaultProps={src:null,className:""};const lk=gi(sk)`
  position: relative;
  height: 60%;
  
  img {
    height: 100%;
    width: auto;
  }
`,ck=({className:e})=>t.createElement("div",{className:Qu()({[e]:!0,launcher__bubble__close:!0,delete:!0})});ck.propTypes={className:i().string},ck.defaultProps={className:""};const uk=gi(ck)`
  min-width: 50px;
  min-height: 50px;
  background-color: transparent !important;
`,dk=gi.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s;
  animation: fade-in 0.4s forwards;
  border-radius: ${e=>e.theme.launcher.bubble.height};
  box-shadow: rgba(0, 0, 0, 0.06) 0 1px 6px 0,
    rgba(0, 0, 0, 0.16) 0 2px 24px -5px;
  background-color: var(--launcher_background);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;function fk({isOpen:e,isTransparent:n,avatarImage:r,isTyping:i,iconImage:o,onClick:a}){return e?null:t.createElement(dk,{className:Qu()({launcher__bubble:!0,"is-transparent":n}),onClick:a},e?t.createElement(uk,null):t.createElement(t.Fragment,null,t.createElement(lk,{src:r}),i&&t.createElement(xd,{className:"launcher__loadericon",src:o})))}function pk(){const e=Ad(),{isOpen:n}=Wu(),r=d(),{launcher_custom:i,launcher_image:o,launcher_type:a}=r.design,s=i&&a===$t.ONLY_ICON,l=i&&o?o:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png";return t.createElement(fk,{isOpen:n,isTransparent:s,avatarImage:l,onClick:()=>{!1===n?e.events.emit(Hd):e.events.emit($d)}})}function hk(){const e=Ad(),{conditional_proactives:t}=d(),n=e.storage.get("proactive")||{},r=e.storage.get("sessionStarted");return Boolean(!r&&!n.closed&&t.enabled)}function mk({children:e}){const n=hk(),{isOpen:r}=Wu(),[i,o]=(0,t.useState)(n||r);return(0,t.useEffect)((()=>{!0===r&&!1===i&&o(!0)}),[r,i]),i?e:null}fk.propTypes={isOpen:i().bool,isTransparent:i().bool,avatarImage:i().string,isTyping:i().bool,iconImage:i().string,onClick:i().func},fk.defaultProps={isOpen:!1,isTransparent:!1,avatarImage:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png",isTyping:!1,iconImage:"https://static.landbot.io/landbot/files/bubble.svg",onClick:()=>{}},mk.propTypes={children:i().node},mk.defaultProps={children:null};var bk=__webpack_require__(5800);const gk=gi.div`
  flex: 1;
  opacity: 0;
  min-height: 30px;
  transition: opacity 0.25s;

  &.Proactive__close--isMobile {
    opacity: 1;
  }

  .Proactive__close__button {
    right: 16px;
    bottom: 0px;
    min-width: 30px;
    min-height: 30px;
    position: absolute;
  }
`,vk=gi.div`
  cursor: pointer;
  border-radius: 8px;
  max-height: calc(100% - 25px);
  background-color: transparent;

  .Proactive__card-content {
    padding: 1rem;
  }

  .Proactive__messages {
    padding-top: 0;
  }
`,yk=({className:e,onClick:n,children:r})=>t.createElement("div",{className:Qu()({Proactive:!0,"fade-in":!0,"is-flex":!0,[e]:!0}),onClick:n},r);yk.propTypes={children:i().node.isRequired,onClick:i().func,className:i().string},yk.defaultProps={onClick:()=>{},className:null};const wk=gi(yk)`
  flex-direction: column;
  cursor: pointer;

  &:hover .Proactive__close {
    opacity: 1;
  }
`;function _k(e){const n=(0,t.useRef)(null),{setProactiveHeight:r}=Wu();return(0,t.useEffect)((()=>{var e;const t=new MutationObserver((()=>{var e;r(null==n||null===(e=n.current)||void 0===e?void 0:e.clientHeight)}));return t.observe(null==n?void 0:n.current,{attributes:!1,childList:!0,characterData:!1,subtree:!0}),r(null==n||null===(e=n.current)||void 0===e?void 0:e.clientHeight),()=>t.disconnect()}),[n,r,e.messages]),t.createElement(wk,{onClick:e.onClick},t.createElement(gk,{className:Qu()({"Proactive__close is-relative":!0,"Proactive__close--isMobile":E.isMobile})},t.createElement("button",{type:"submit","aria-label":"delete",className:"Proactive__close__button delete",onClick:t=>{t.stopPropagation(),e.onClose()}})),t.createElement(vk,{className:"Proactive__card",ref:n},t.createElement("div",{className:"Proactive__card-content card-content"},t.createElement("div",{className:"Proactive__messages Messages"},e.messages),e.input)))}_k.propTypes={onClick:i().func,onClose:i().func,input:i().node,messages:i().arrayOf(i().node)},_k.defaultProps={onClick:()=>{},onClose:()=>{},input:null,messages:[]};var xk=(0,bk.withErrorBoundary)((function(){const e=Ad(),{conditional_proactives:n,welcome:r,customData:i}=d(),{isProactiveOpen:o,proactiveMessages:a}=Wu(),s=hk();(0,t.useEffect)((()=>{const t=setTimeout((function(){s&&e.events.emit(Bd)}),1e3*n.timeout);return()=>clearTimeout(t)}),[n,s,e.events]);const l=(0,t.useCallback)((()=>{e.events.emit(Ud),e.storage.set("proactive",{closed:!0})}),[e.events,e.storage]),c=(0,t.useCallback)((()=>{e.events.emit(Hd)}),[e.events]),u=(0,t.useMemo)((()=>Uf(ae.Z.appendUIKey(a||n.messages||r))),[a,r,n.messages]);return o?t.createElement(yd,{value:!0},t.createElement(Pf,{value:{messagesWrapper:u}},t.createElement(_k,{onClose:l,onClick:c,messages:u.replaceVariables(i).map(((e,n,r)=>t.createElement(Hw,{key:e.uiKey,previousMessage:r[n-1],currentMessage:e,nextMessage:r[n+1]},t.createElement(qw,{message:e})))),input:t.createElement(r_,null)}))):null}),{FallbackComponent:function(){return null},onError(e,t){console.error("Catched error in ProactiveWrapper"),console.error(e,t)}}),kk=gi.div`
  z-index: ${({theme:e})=>e.zIndex.LivechatContent};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: ${e=>e.theme.chat.shadow_length};
  display: none;

  &.is-open {
    display: block;
  }

  #Main {
    border-radius: 5px;
    box-shadow: 0 -1px ${e=>e.theme.chat.shadow_length} 0 rgba(0, 0, 0, 0.2);
  }
`;function Ek(){const{isOpen:e}=Wu();return t.createElement(Ax,null,t.createElement(ak,{launcher:t.createElement(pk,null),proactive:t.createElement(xk,null)},t.createElement(mk,null,t.createElement(kk,{className:Qu()({"LivechatContent fade-in":!0,"is-open":e})},t.createElement(bx,null)))))}var Sk=gi.div`
  right: 0;
  bottom: 0;
  position: fixed;

  width: ${e=>e.theme.launcher.width};
  height: ${e=>e.theme.launcher.height};
  z-index: ${({theme:e})=>e.zIndex.Widget};

  /* open / close state */
  &.is-open {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
  }

  /* Proactive state */
  &.is-proactive {
    width: ${e=>e.theme.proactive.width};
    height: ${e=>e.proactiveHeight?`${e.proactiveHeight+118}px`:e.theme.proactive.height};
    /* height: ${e=>e.theme.proactive.height}; */
    flex-direction: column;
    transform: scale(0.8);
    transform-origin: bottom right;
  }
`;const Ck=gi(Sk)`
  @media ${Ju} {
    max-height: 800px;

    right: ${e=>e.theme.widget_offset.vertical};
    bottom: ${e=>e.theme.widget_offset.horizontal};
  }
  &.is-open {
    @media ${Ju} {
      top: initial;
      width: ${e=>e.theme.widget_chat.width};
      left: initial;
      height: calc(100vh - 2 * ${e=>e.theme.widget_offset.vertical});
    }
  }
`;function Tk({children:e}){const{isOpen:n,isProactiveOpen:r,proactiveHeight:i}=Wu();return t.createElement(Ck,{className:Qu()({LandbotLivechat:!0,"is-open":n,"is-proactive":r}),proactiveHeight:i},e)}Tk.propTypes={children:i().node.isRequired};class Ok extends tk{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.LIVECHAT)}open(){this.core.events.emit(Hd)}close(){this.core.events.emit($d)}showProactive(e){this.core.events.emit(Bd,e)}hideProactive(){this.core.events.emit(Ud)}_contentRenderer(){return t.createElement(rk,null,t.createElement(Tk,null,t.createElement(zx,null,t.createElement(Ek,null))))}}class Pk extends tk{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.NATIVE)}_contentRenderer(){return t.createElement(jx,null)}}function Ik({children:e,launcher:n,proactive:r}){return t.createElement(t.Fragment,null,e,t.createElement(ok,{className:"LivechatProactive"},r),t.createElement(ik,{className:Qu()({LivechatLauncher:!0})},n),t.createElement(un,null))}Ik.propTypes={children:i().node.isRequired,launcher:i().element,proactive:i().element},Ik.defaultProps={launcher:null,proactive:null};const Nk=gi.div`
  animation: fade-in 0.8s forwards;
  background-color: rgba(0, 0, 0, 0.7);
`;function Mk({onClick:e}){return t.createElement(Nk,{className:"PopupOverlay is-overlay",onClick:e})}function Dk(){const e=Ad(),{isOpen:n}=Wu();return t.createElement(Ax,null,t.createElement(Ik,{launcher:t.createElement(pk,null),proactive:t.createElement(xk,null)},t.createElement(mk,null,t.createElement(kk,{className:Qu()({"LivechatContent PopupContent fade-in":!0,"is-open":n})},t.createElement(Mk,{onClick:()=>{e.events.emit($d)}}),t.createElement(bx,null)))))}Mk.propTypes={onClick:i().func},Mk.defaultProps={onClick:()=>{}};const Ak=gi(Sk)`
  @media ${Ju} {
    right: ${e=>e.theme.widget_offset.vertical};
    bottom: ${e=>e.theme.widget_offset.horizontal};
  }

  &.is-open {
    @media ${Ju} {
      right: 0;
      bottom: 0;
    }
  }
`;function jk({children:e}){const{isOpen:n,isProactiveOpen:r,proactiveHeight:i}=Wu();return t.createElement(Ak,{className:Qu()({LandbotPopup:!0,"is-open":n,"is-proactive":r}),proactiveHeight:i},e)}jk.propTypes={children:i().node.isRequired};class Rk extends tk{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.POPUP)}open(){this.core.events.emit(Hd)}close(){this.core.events.emit($d)}showProactive(e){this.core.events.emit(Bd,e)}hideProactive(){this.core.events.emit(Ud)}_contentRenderer(){return t.createElement(rk,null,t.createElement(jk,null,t.createElement(zx,null,t.createElement(Dk,null))))}}const Lk=gi.div`
  width: 100%;
  height: 100%;
`;function Fk({children:e}){return t.createElement(Lk,{modeClassName:"LandbotContainer"},e)}Fk.propTypes={children:i().node.isRequired};class zk extends tk{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.CONTAINER)}_create(){if(this.container=ae.Z.getElement(this.config.container),!this.container)throw new Error("Container element is not set or doesn't exist.",this.config.container,this.container)}_contentRenderer(){return t.createElement(Fk,null,t.createElement(zx,null,t.createElement(jx,null)))}}const Uk=gi(kk)`
  :not(.is-open) {
    z-index: auto;
    padding: 0;
  }
`;function Bk({isOpen:e,onClick:n,onClickOpensPopup:r,children:i}){return t.createElement(t.Fragment,null,t.createElement(Uk,{className:Qu()({"LivechatContent fade-in":!0,"is-block":!0,"is-open":e}),onClick:n},r&&t.createElement(Mk,null),i),t.createElement(un,null))}function Vk(){const e=Ad(),{isOpen:n}=Wu(),r=!E.isDesktop;return t.createElement(Ax,null,t.createElement(Bk,{onClickOpensPopup:r,onClick:!n&&r?()=>e.events.emit(Hd,!0):null,isOpen:n},t.createElement(bx,null)))}Bk.propTypes={isOpen:i().bool,onClickOpensPopup:i().bool,onClick:i().func,children:i().node.isRequired},Bk.defaultProps={isOpen:!1,onClickOpensPopup:!1,onClick:()=>{}};const Wk=gi.div`
  width: 100%;
  height: 100%;

  &.is-open {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: ${({theme:e})=>e.zIndex.Widget};
  }
`;function qk({children:e}){const{isOpen:n}=Wu();return t.createElement(Wk,{className:Qu()({LandbotContainerPopup:!0,"is-open":n})},e)}qk.propTypes={children:i().node.isRequired};class Hk extends tk{constructor(...t){super(...t),(0,e.Z)(this,"MODE",n.CONTAINER_POPUP)}_create(){if(this.container=ae.Z.getElement(this.config.container),!this.container)throw new Error("ContainerPopup element is not set or doesn't exist.",this.config.container,this.container)}_contentRenderer(){return t.createElement(rk,null,t.createElement(qk,null,t.createElement(zx,null,t.createElement(Vk,null))))}}function $k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Yk(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?$k(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}const Gk=window.Landbot||{};window.Landbot=Yk(Yk({},Gk),{},{Fullpage:nk,Livechat:Ok,Native:Pk,Popup:Rk,Container:zk,ContainerPopup:Hk,anime:Hp})}(),__webpack_exports__}()}));