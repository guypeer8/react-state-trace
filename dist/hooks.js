"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_semanticUiReact=require("semantic-ui-react"),_styledComponents=_interopRequireDefault(require("styled-components"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _templateObject9(){var a=_taggedTemplateLiteral(["\n    border: 1px solid #000;\n    margin-top: 40px;\n    font-size: ",";\n"]);return _templateObject9=function(){return a},a}function _templateObject8(){var a=_taggedTemplateLiteral(["\n    margin: 0 !important;\n"]);return _templateObject8=function(){return a},a}function _templateObject7(){var a=_taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n    > button {\n        padding: 6px !important;\n    }\n    > span {\n        margin-right: 10px;\n    }\n"]);return _templateObject7=function(){return a},a}function _templateObject6(){var a=_taggedTemplateLiteral(["\n    position: absolute;\n    bottom: 0;\n    right: 0;\n"]);return _templateObject6=function(){return a},a}function _templateObject5(){var a=_taggedTemplateLiteral(["\n    margin-top: 20px;\n    display: flex;\n    align-items: flex-center;\n    justify-content: space-between;\n    > span {\n        margin-right: 10px;\n    }\n    > input {\n        width: 84%;\n    }\n"]);return _templateObject5=function(){return a},a}function _templateObject4(){var a=_taggedTemplateLiteral(["\n    background: ",";\n    color: ",";\n    margin-bottom: 10px !important;\n"]);return _templateObject4=function(){return a},a}function _templateObject3(){var a=_taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: ",";\n    background: black;\n    color: white;\n    overflow: scroll;\n    padding: 30px;\n    z-index: 2000;\n    height: ",";\n    -webkit-transition: opacity 0.5s;\n    -moz-transition: opacity 0.5s;\n    -ms-transition: opacity 0.5s;\n    -o-transition: opacity 0.5s;\n    transition: opacity 0.5s;\n"]);return _templateObject3=function(){return a},a}function _templateObject2(){var a=_taggedTemplateLiteral(["\n    position: absolute;\n    top: 10px;\n    right: -5px;\n    cursor: pointer;\n    font-size: 18px;\n"]);return _templateObject2=function(){return a},a}function _templateObject(){var a=_taggedTemplateLiteral(["\n    position: absolute;\n    top: 8px;\n    right: 2px;\n    height: 20px !important;\n    width: 25px;\n    cursor: pointer;\n    color: black;\n    background: white;\n    border: 1px solid black;\n    z-index: 2000;\n    font-size: 18px;\n    -webkit-transition: opacity 0.5s;\n    -moz-transition: opacity 0.5s;\n    -ms-transition: opacity 0.5s;\n    -o-transition: opacity 0.5s;\n    transition: opacity 0.5s;\n"]);return _templateObject=function(){return a},a}function _taggedTemplateLiteral(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function _objectSpread(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){_defineProperty(a,b,c[b])})}return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var StateViewer=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.state,c=a.store,d=a.dev;if(!(void 0===d||d))return null;b=b||(c?c.getState?c.getState():c.state?c.state:{}:{});var e=(0,_react.useState)(JSON.stringify(_objectSpread({},b),null,2)),f=_slicedToArray(e,2),g=f[0],h=f[1],i=(0,_react.useState)(_objectSpread({},b)),j=_slicedToArray(i,2),k=j[0],l=j[1],m=(0,_react.useState)(50),n=_slicedToArray(m,2),o=n[0],p=n[1],q=(0,_react.useState)(!0),r=_slicedToArray(q,2),s=r[0],t=r[1],u=(0,_react.useState)(!1),v=_slicedToArray(u,2),w=v[0],x=v[1],y=(0,_react.useState)([]),z=_slicedToArray(y,2),A=z[0],B=z[1],C=[parseInt(localStorage.getItem("stateViewer.fontSize")),parseInt(localStorage.getItem("stateViewer.indentation"))],D=C[0],E=C[1],F=isNaN(D)?16:D,G=isNaN(E)?2:E,H=(0,_react.useState)(F),I=_slicedToArray(H,2),J=I[0],K=I[1],L=(0,_react.useState)(G),M=_slicedToArray(L,2),N=M[0],O=M[1],P=function(){var a=_objectSpread({},b);A.forEach(function(b){return a=a[b]}),l(a)},Q=function(){return 0<A.length?B(A.slice(0,A.length-1)):void(l(b),B([]))},R=function(a){var b=a.shiftKey,c=83===a.which||83===a.keyCode;b&&c&&t(!s)};return(0,_react.useEffect)(function(){return localStorage.setItem("stateViewer.indentation",N)},[N]),(0,_react.useEffect)(function(){return localStorage.setItem("stateViewer.fontSize",J)},[J]),(0,_react.useEffect)(P,[A,b]),(0,_react.useEffect)(function(){var a=JSON.stringify(k,null,N),b=a.replace(/"\w+":/g,function(a){return a.replace(/"/g,"")});h(b)},[k,N]),(0,_react.useEffect)(function(){return document.addEventListener("keydown",R),function(){document.removeEventListener("keydown",R)}}),s?_react.default.createElement("div",null,_react.default.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}),_react.default.createElement(ArrowIcon,{name:"angle double left",onClick:function(){return x(!0)},style:{opacity:w?0:1,visibility:w?"hidden":"",height:w?0:"auto"}}),_react.default.createElement(StateViewerContainer,{indentation:N,viewerWidth:o,style:{opacity:w?1:0,visibility:w?"":"hidden",height:w?"auto":0}},_react.default.createElement(TimesIcon,{name:"times",onClick:function(){return x(!w)}}),_react.default.createElement(_semanticUiReact.Header,{as:"h3",color:"grey",style:{marginTop:0}},"React State Trace"),_react.default.createElement(_semanticUiReact.Divider,{fitted:!0}),_react.default.createElement("div",{style:{marginBottom:15}},0<A.length&&_react.default.createElement(_semanticUiReact.Label,{as:"a",color:"teal",tag:!0,onClick:Q},A[A.length-1])),_react.default.createElement("div",null,isObject(k)&&Object.keys(k).map(function(a){return _react.default.createElement(StateNavigationButton,{size:"tiny",key:a,onClick:function(){return B([].concat(_toConsumableArray(A),[a]))},active:A[A.length-1]===a},a)})),_react.default.createElement(WidthAdjuster,null,_react.default.createElement("span",null,"Adjust width"),_react.default.createElement("input",{type:"range",min:"40",max:"100",step:"2",value:o,onChange:function(a){var b=a.target.value;return p(b)}})),_react.default.createElement(BottomAdjusters,null,_react.default.createElement(Adjuster,null,_react.default.createElement("span",null,"Adjust indentation"),_react.default.createElement(_semanticUiReact.Button,{onClick:function(){return O(N-1)},disabled:0===N},_react.default.createElement(AdjusterIcon,{name:"minus"})),_react.default.createElement(_semanticUiReact.Button,{onClick:function(){return O(N+1)}},_react.default.createElement(AdjusterIcon,{name:"plus"})),_react.default.createElement(_semanticUiReact.Button,{onClick:function(){return O(2)},disabled:2===N},_react.default.createElement(AdjusterIcon,{name:"refresh"}))),_react.default.createElement(Adjuster,null,_react.default.createElement("span",null,"Adjust font size"),_react.default.createElement(_semanticUiReact.Button,{onClick:function(){return K(J-1)}},_react.default.createElement(AdjusterIcon,{name:"minus"})),_react.default.createElement(_semanticUiReact.Button,{onClick:function(){return K(J+1)}},_react.default.createElement(AdjusterIcon,{name:"plus"})),_react.default.createElement(_semanticUiReact.Button,{onClick:function(){return K(16)},disabled:16===J},_react.default.createElement(AdjusterIcon,{name:"refresh"})))),_react.default.createElement(StateJson,{fontSize:J},g))):null},_default=StateViewer;exports.default=_default;var ArrowIcon=(0,_styledComponents.default)(_semanticUiReact.Icon)(_templateObject()),TimesIcon=(0,_styledComponents.default)(_semanticUiReact.Icon)(_templateObject2()),StateViewerContainer=_styledComponents.default.div(_templateObject3(),function(a){return a.viewerWidth+"%"},function(a){return 0===a.indentation?300:"auto"}),StateNavigationButton=(0,_styledComponents.default)(_semanticUiReact.Button)(_templateObject4(),function(a){return a.active?"green !important":""},function(a){return a.disabled?"white !important":""}),WidthAdjuster=_styledComponents.default.div(_templateObject5()),BottomAdjusters=_styledComponents.default.div(_templateObject6()),Adjuster=_styledComponents.default.div(_templateObject7()),AdjusterIcon=(0,_styledComponents.default)(_semanticUiReact.Icon)(_templateObject8()),StateJson=_styledComponents.default.pre(_templateObject9(),function(a){return a.fontSize+"px"});function isObject(a){return!!(a&&"number"!=typeof a&&"string"!=typeof a&&!Array.isArray(a)&&a.constructor)&&"Object"===a.constructor.name}