(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8529],{34540:function(z,M,o){"use strict";var w=o(67294),T=o(90872),L=o(86190),Z=o(64893);function O(){return O=Object.assign||function(C){for(var E=1;E<arguments.length;E++){var c=arguments[E];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(C[f]=c[f])}return C},O.apply(this,arguments)}var p="dateRange",K=w.forwardRef(function(C,E){var c=C.fieldProps,f=C.proFieldProps;return w.createElement(T.ZP,O({ref:E,text:c==null?void 0:c.value,mode:"edit",fieldProps:c,valueType:p},f))});M.Z=(0,Z.Z)(K,{valueType:p,lightFilterLabelFormatter:function(E){return(0,L.Z)(E,"YYYY-MM-DD")}})},64317:function(z,M,o){"use strict";var w=o(67294),T=o(90872),L=o(22270),Z=o(64893);function O(){return O=Object.assign||function(i){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(i[l]=r[l])}return i},O.apply(this,arguments)}function p(i,n){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(i);n&&(l=l.filter(function(d){return Object.getOwnPropertyDescriptor(i,d).enumerable})),r.push.apply(r,l)}return r}function K(i){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?p(Object(r),!0).forEach(function(l){C(i,l,r[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(l){Object.defineProperty(i,l,Object.getOwnPropertyDescriptor(r,l))})}return i}function C(i,n,r){return n in i?Object.defineProperty(i,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[n]=r,i}var E=w.forwardRef(function(i,n){var r=i.fieldProps,l=i.children,d=i.params,P=i.proFieldProps,h=i.mode,I=i.valueEnum,G=i.request,N=i.showSearch,W=i.options;return w.createElement(T.ZP,O({mode:"edit",valueEnum:(0,L.h)(I),request:G,params:d,valueType:"select",fieldProps:K({options:W,mode:h,showSearch:N},r),ref:n},P),l)}),c=w.forwardRef(function(i,n){var r=i.fieldProps,l=i.children,d=i.params,P=i.proFieldProps,h=i.mode,I=i.valueEnum,G=i.request,N=i.options,W=K({options:N,mode:h||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label",filterOption:!1},r);return w.createElement(T.ZP,O({mode:"edit",valueEnum:(0,L.h)(I),request:G,params:d,valueType:"select",fieldProps:W,ref:n},P),l)}),f=(0,Z.Z)(E,{customLightMode:!0}),v=(0,Z.Z)(c,{customLightMode:!0}),x=f;x.SearchSelect=v,M.Z=x},5966:function(z,M,o){"use strict";var w=o(67294),T=o(90872),L=o(64893),Z=["fieldProps","proFieldProps"];function O(){return O=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},O.apply(this,arguments)}function p(n,r){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);r&&(d=d.filter(function(P){return Object.getOwnPropertyDescriptor(n,P).enumerable})),l.push.apply(l,d)}return l}function K(n){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?p(Object(l),!0).forEach(function(d){C(n,d,l[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach(function(d){Object.defineProperty(n,d,Object.getOwnPropertyDescriptor(l,d))})}return n}function C(n,r,l){return r in n?Object.defineProperty(n,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[r]=l,n}function E(n,r){if(n==null)return{};var l=c(n,r),d,P;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(n);for(P=0;P<h.length;P++)d=h[P],!(r.indexOf(d)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,d)||(l[d]=n[d]))}return l}function c(n,r){if(n==null)return{};var l={},d=Object.keys(n),P,h;for(h=0;h<d.length;h++)P=d[h],!(r.indexOf(P)>=0)&&(l[P]=n[P]);return l}var f="text",v=(0,L.Z)(function(n){var r=n.fieldProps,l=n.proFieldProps,d=E(n,Z);return w.createElement(T.ZP,O({mode:"edit",valueType:f,fieldProps:K(K({},r),{},{onChange:function(){for(var h,I,G=arguments.length,N=new Array(G),W=0;W<G;W++)N[W]=arguments[W];r==null||(h=r.onChange)===null||h===void 0||h.call.apply(h,[r].concat(N)),d==null||(I=d.onChange)===null||I===void 0||I.call.apply(I,[d].concat(N))}})},l))},{valueType:f}),x=(0,L.Z)(function(n){var r=n.fieldProps,l=n.proFieldProps;return w.createElement(T.ZP,O({mode:"edit",valueType:"password",fieldProps:r},l))},{valueType:f}),i=v;i.Password=x,M.Z=i},86190:function(z,M,o){"use strict";var w=o(30381),T=o.n(w);function L(c,f){return C(c)||K(c,f)||O(c,f)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(c,f){if(!!c){if(typeof c=="string")return p(c,f);var v=Object.prototype.toString.call(c).slice(8,-1);if(v==="Object"&&c.constructor&&(v=c.constructor.name),v==="Map"||v==="Set")return Array.from(c);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return p(c,f)}}function p(c,f){(f==null||f>c.length)&&(f=c.length);for(var v=0,x=new Array(f);v<f;v++)x[v]=c[v];return x}function K(c,f){var v=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(v!=null){var x=[],i=!0,n=!1,r,l;try{for(v=v.call(c);!(i=(r=v.next()).done)&&(x.push(r.value),!(f&&x.length===f));i=!0);}catch(d){n=!0,l=d}finally{try{!i&&v.return!=null&&v.return()}finally{if(n)throw l}}return x}}function C(c){if(Array.isArray(c))return c}var E=function(f,v){var x=Array.isArray(f)?f:[],i=L(x,2),n=i[0],r=i[1],l=n?T()(n).format(v):"",d=r?T()(r).format(v):"",P=l&&d&&"".concat(l," ~ ").concat(d);return P};M.Z=E},72627:function(z){z.exports={card:"antd-pro-pages-form-advanced-form-style-card",errorIcon:"antd-pro-pages-form-advanced-form-style-errorIcon",anticon:"antd-pro-pages-form-advanced-form-style-anticon",errorPopover:"antd-pro-pages-form-advanced-form-style-errorPopover",errorListItem:"antd-pro-pages-form-advanced-form-style-errorListItem",errorField:"antd-pro-pages-form-advanced-form-style-errorField",editable:"antd-pro-pages-form-advanced-form-style-editable"}},79969:function(z,M,o){"use strict";o.r(M),o.d(M,{default:function(){return Ue}});var w=o(72012),T=o(39144),L=o(13062),Z=o(71230),O=o(89032),p=o(15746),K=o(34792),C=o(48086),E=o(3182),c=o(20136),f=o(55241),v=o(2824),x=o(94043),i=o.n(x),n=o(73218),r=o(67294),l=o(90872),d=o(64893),P=o(86190);function h(){return h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},h.apply(this,arguments)}var I="time",G=r.forwardRef(function(e,a){var t=e.fieldProps,u=e.proFieldProps;return r.createElement(l.ZP,h({ref:a,text:(t==null?void 0:t.value)||"",mode:"edit",fieldProps:t,valueType:"timeRange"},u))}),N=function(a){var t=a.fieldProps,u=a.proFieldProps;return r.createElement(l.ZP,h({text:(t==null?void 0:t.value)||"",mode:"edit",fieldProps:t,valueType:I},u))},W=(0,d.Z)(N,{customLightMode:!0,valueType:I}),be=(0,d.Z)(G,{valueType:"timeRange",lightFilterLabelFormatter:function(a){return(0,P.Z)(a,"HH:mm:SS")}}),le=W;le.RangePicker=be;var Oe=le,ie=o(15196),re=o(5966),Q=o(64317),Ee=o(34540),Qe=o(57663),je=o(71577),Xe=o(9715),xe=o(86585),Fe=o(21770),Te=o(49101),ue=o(22270),Ce=o(39629),we=["onTableChange","maxLength","recordCreatorProps","rowKey","controlled"],Ze=["record","position","creatorButtonText","newRecordType","parentKey"];function te(){return te=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},te.apply(this,arguments)}function se(e,a){return Se(e)||De(e,a)||Re(e,a)||Ae()}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(e,a){if(!!e){if(typeof e=="string")return de(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return de(e,a)}}function de(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,u=new Array(a);t<a;t++)u[t]=e[t];return u}function De(e,a){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var u=[],m=!0,y=!1,V,$;try{for(t=t.call(e);!(m=(V=t.next()).done)&&(u.push(V.value),!(a&&u.length===a));m=!0);}catch(U){y=!0,$=U}finally{try{!m&&t.return!=null&&t.return()}finally{if(y)throw $}}return u}}function Se(e){if(Array.isArray(e))return e}function ce(e,a){if(e==null)return{};var t=Ie(e,a),u,m;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(e);for(m=0;m<y.length;m++)u=y[m],!(a.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,u)||(t[u]=e[u]))}return t}function Ie(e,a){if(e==null)return{};var t={},u=Object.keys(e),m,y;for(y=0;y<u.length;y++)m=u[y],!(a.indexOf(m)>=0)&&(t[m]=e[m]);return t}function fe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);a&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),t.push.apply(t,u)}return t}function ne(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?fe(Object(t),!0).forEach(function(u){ve(e,u,t[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach(function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(t,u))})}return e}function ve(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var pe=r.createContext(void 0);function me(e){var a=e.children,t=e.record,u=e.position,m=e.newRecordType,y=e.parentKey,V=(0,r.useContext)(pe);return r.cloneElement(a,ne(ne({},a.props),{},{onClick:function(U){var R,j,F;V==null||(R=V.current)===null||R===void 0||R.addEditRecord(t,{position:u,newRecordType:m,parentKey:y}),(j=(F=a.props).onClick)===null||j===void 0||j.call(F,U)}}))}function he(e){var a,t=e.onTableChange,u=e.maxLength,m=e.recordCreatorProps,y=e.rowKey,V=e.controlled,$=ce(e,we),U=(0,r.useRef)(),R=xe.Z.useForm(),j=se(R,1),F=j[0];(0,r.useImperativeHandle)($.actionRef,function(){return U.current});var q=(0,Fe.Z)(function(){return e.value||[]},{value:e.value,onChange:e.onChange}),b=se(q,2),g=b[0],D=b[1],_=r.useMemo(function(){return typeof y=="function"&&y?y:function(Y,S){return Y[y]||S}},[y]);(0,r.useEffect)(function(){!e.controlled||g.forEach(function(Y,S){F.setFieldsValue(ve({},_(Y,S),Y))},{})},[g,e.controlled]);var X=m||{},Ye=X.record,ye=X.position,He=X.creatorButtonText,Je=X.newRecordType,Ge=X.parentKey,ke=ce(X,Ze),ge=ye==="top",ee=(0,r.useMemo)(function(){return u&&u<=(g==null?void 0:g.length)?!1:m!==!1&&r.createElement(me,{record:(0,ue.h)(Ye,g.length,g)||{},position:ye,parentKey:(0,ue.h)(Ge,g.length,g),newRecordType:Je},r.createElement(je.Z,te({type:"dashed",style:{display:"block",margin:"10px 0",width:"100%"},icon:r.createElement(Te.Z,null)},ke),He||"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"))},[m,u,g.length]),ze=(0,r.useMemo)(function(){return ee?ge?{components:{header:{wrapper:function(S){var B,H=S.className,J=S.children;return r.createElement("thead",{className:H},J,r.createElement("tr",{style:{position:"relative"}},r.createElement("td",{colSpan:0,style:{visibility:"hidden"}},ee),r.createElement("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(B=$.columns)===null||B===void 0?void 0:B.length},ee)))}}}}:{tableViewRender:function(S,B){var H,J;return r.createElement(r.Fragment,null,(H=(J=e.tableViewRender)===null||J===void 0?void 0:J.call(e,S,B))!==null&&H!==void 0?H:B,ee)}}:{}},[ge,ee]),Pe=ne({form:F},e.editable);return((e==null?void 0:e.onValuesChange)||((a=e.editable)===null||a===void 0?void 0:a.onValuesChange)||e.controlled&&(e==null?void 0:e.onChange))&&(Pe.onValuesChange=function(Y,S){var B,H,J;if((B=e.editable)===null||B===void 0||(H=B.onValuesChange)===null||H===void 0||H.call(B,Y,S),(J=e.onValuesChange)===null||J===void 0||J.call(e,S,Y),e.controlled){var oe;e==null||(oe=e.onChange)===null||oe===void 0||oe.call(e,S)}}),r.createElement(pe.Provider,{value:U},r.createElement(Ce.Z,te({search:!1,options:!1,pagination:!1,rowKey:y},$,ze,{tableLayout:"fixed",actionRef:U,onChange:t,dataSource:g,editable:Pe,onDataSourceChange:D})))}he.RecordCreator=me;var Be=he,Me=o(85224),Le=o(15103),Ke=o(58086);function We(e){return ae.apply(this,arguments)}function ae(){return ae=(0,E.Z)(i().mark(function e(a){return i().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,Ke.WY)("/api/advancedForm",{method:"POST",data:a}));case 1:case"end":return u.stop()}},e)})),ae.apply(this,arguments)}var Ne=o(72627),k=o.n(Ne),s=o(85893),A={name:"\u4ED3\u5E93\u540D",url:"\u4ED3\u5E93\u57DF\u540D",owner:"\u4ED3\u5E93\u7BA1\u7406\u5458",approver:"\u5BA1\u6279\u4EBA",dateRange:"\u751F\u6548\u65E5\u671F",type:"\u4ED3\u5E93\u7C7B\u578B",name2:"\u4EFB\u52A1\u540D",url2:"\u4EFB\u52A1\u63CF\u8FF0",owner2:"\u6267\u884C\u4EBA",approver2:"\u8D23\u4EFB\u4EBA",dateRange2:"\u751F\u6548\u65E5\u671F",type2:"\u4EFB\u52A1\u7C7B\u578B"},Ve=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}],$e=function(){var a=(0,r.useState)([]),t=(0,v.Z)(a,2),u=t[0],m=t[1],y=function(j){var F=j.filter(function(g){return g.errors.length>0}).length;if(!j||F===0)return null;var q=function(D){var _=document.querySelector('label[for="'.concat(D,'"]'));_&&_.scrollIntoView(!0)},b=j.map(function(g){if(!g||g.errors.length===0)return null;var D=g.name[0];return(0,s.jsxs)("li",{className:k().errorListItem,onClick:function(){return q(D)},children:[(0,s.jsx)(n.Z,{className:k().errorIcon}),(0,s.jsx)("div",{className:k().errorMessage,children:g.errors[0]}),(0,s.jsx)("div",{className:k().errorField,children:A[D]})]},D)});return(0,s.jsxs)("span",{className:k().errorIcon,children:[(0,s.jsx)(f.Z,{title:"\u8868\u5355\u6821\u9A8C\u4FE1\u606F",content:b,overlayClassName:k().errorPopover,trigger:"click",getPopupContainer:function(D){return D&&D.parentNode?D.parentNode:D},children:(0,s.jsx)(n.Z,{})}),F]})},V=function(){var R=(0,E.Z)(i().mark(function j(F){return i().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return m([]),b.prev=1,b.next=4,We(F);case 4:C.default.success("\u63D0\u4EA4\u6210\u529F"),b.next=9;break;case 7:b.prev=7,b.t0=b.catch(1);case 9:case"end":return b.stop()}},j,null,[[1,7]])}));return function(F){return R.apply(this,arguments)}}(),$=function(j){m(j.errorFields)},U=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",key:"name",width:"20%"},{title:"\u5DE5\u53F7",dataIndex:"workId",key:"workId",width:"20%"},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"department",key:"department",width:"40%"},{title:"\u64CD\u4F5C",key:"action",valueType:"option",render:function(j,F,q,b){return[(0,s.jsx)("a",{onClick:function(){b==null||b.startEditable(F.key)},children:"\u7F16\u8F91"},"eidit")]}}];return(0,s.jsx)(ie.ZP,{layout:"vertical",hideRequiredMark:!0,submitter:{render:function(j,F){return(0,s.jsxs)(Me.Z,{children:[y(u),F]})}},initialValues:{members:Ve},onFinish:V,onFinishFailed:$,children:(0,s.jsxs)(Le.ZP,{content:"\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002",children:[(0,s.jsxs)(T.Z,{title:"\u4ED3\u5E93\u7BA1\u7406",className:k().card,bordered:!1,children:[(0,s.jsxs)(Z.Z,{gutter:16,children:[(0,s.jsx)(p.Z,{lg:6,md:12,sm:24,children:(0,s.jsx)(re.Z,{label:A.name,name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"})}),(0,s.jsx)(p.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,s.jsx)(re.Z,{label:A.url,name:"url",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],fieldProps:{style:{width:"100%"},addonBefore:"http://",addonAfter:".com"},placeholder:"\u8BF7\u8F93\u5165"})}),(0,s.jsx)(p.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,s.jsx)(Q.Z,{label:A.owner,name:"owner",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"})})]}),(0,s.jsxs)(Z.Z,{gutter:16,children:[(0,s.jsx)(p.Z,{lg:6,md:12,sm:24,children:(0,s.jsx)(Q.Z,{label:A.approver,name:"approver",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"})}),(0,s.jsx)(p.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,s.jsx)(Ee.Z,{label:A.dateRange,name:"dateRange",fieldProps:{style:{width:"100%"}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u751F\u6548\u65E5\u671F"}]})}),(0,s.jsx)(p.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,s.jsx)(Q.Z,{label:A.type,name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"}],options:[{label:"\u79C1\u5BC6",value:"private"},{label:"\u516C\u5F00",value:"public"}],placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"})})]})]}),(0,s.jsxs)(T.Z,{title:"\u4EFB\u52A1\u7BA1\u7406",className:k().card,bordered:!1,children:[(0,s.jsxs)(Z.Z,{gutter:16,children:[(0,s.jsx)(p.Z,{lg:6,md:12,sm:24,children:(0,s.jsx)(re.Z,{label:A.name2,name:"name2",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]})}),(0,s.jsx)(p.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,s.jsx)(re.Z,{label:A.url2,name:"url2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]})}),(0,s.jsx)(p.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,s.jsx)(Q.Z,{label:A.owner2,name:"owner2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}]})})]}),(0,s.jsxs)(Z.Z,{gutter:16,children:[(0,s.jsx)(p.Z,{lg:6,md:12,sm:24,children:(0,s.jsx)(Q.Z,{label:A.approver2,name:"approver2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"})}),(0,s.jsx)(p.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,s.jsx)(Oe,{label:A.dateRange2,name:"dateRange2",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],placeholder:"\u63D0\u9192\u65F6\u95F4",fieldProps:{style:{width:"100%"}}})}),(0,s.jsx)(p.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,s.jsx)(Q.Z,{label:A.type2,name:"type2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"}],options:[{label:"\u79C1\u5BC6",value:"private"},{label:"\u516C\u5F00",value:"public"}],placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"})})]})]}),(0,s.jsx)(T.Z,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1,children:(0,s.jsx)(ie.ZP.Item,{name:"members",children:(0,s.jsx)(Be,{recordCreatorProps:{record:function(){return{key:"0".concat(Date.now())}}},columns:U,rowKey:"key"})})})]})})},Ue=$e}}]);
