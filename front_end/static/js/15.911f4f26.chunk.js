(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[15],{1130:function(e,a,t){"use strict";t.r(a);var r=t(11),n=t(12),s=t(14),c=t(13),l=t(0),o=t.n(l),i=t(598),m=t(632),u=t(633),d=t(24),b=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(i.a,{breadCrumbTitle:"Company Setting",breadCrumbParent:"Admin",breadCrumbActive:"Company Setting"}),o.a.createElement(m.a,null,o.a.createElement(u.a,null))))}}]),t}(o.a.Component);a.default=Object(d.b)((function(e){return{app:e.calendar}}),{})(b)},598:function(e,a,t){"use strict";var r=t(11),n=t(12),s=t(14),c=t(13),l=t(0),o=t.n(l),i=t(672),m=t(673),u=t(675),d=t(595),b=t(592),p=t(590),g=t(234),f=t(177),v=t(36),h=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content-header row"},o.a.createElement("div",{className:"content-header-left col-md-9 col-12 mb-2"},o.a.createElement("div",{className:"row breadcrumbs-top"},o.a.createElement("div",{className:"col-12"},this.props.breadCrumbTitle?o.a.createElement("h2",{className:"content-header-title float-left mb-0"},this.props.breadCrumbTitle):"",o.a.createElement("div",{className:"breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12"},o.a.createElement(i.a,{tag:"ol"},o.a.createElement(m.a,{tag:"li"},o.a.createElement(v.b,{to:"/"},o.a.createElement(g.a,{className:"align-top",size:15}))),o.a.createElement(m.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent),this.props.breadCrumbParent2?o.a.createElement(m.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent2):"",this.props.breadCrumbParent3?o.a.createElement(m.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent3):"",o.a.createElement(m.a,{tag:"li",active:!0},this.props.breadCrumbActive)))))),o.a.createElement("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"},o.a.createElement("div",{className:"form-group breadcrum-right dropdown"},!0===this.props.showSettingBtn?o.a.createElement(u.a,null,o.a.createElement(d.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle"},o.a.createElement(f.a,{size:14,style:{left:0}})),o.a.createElement(b.a,{tag:"ul",right:!0},o.a.createElement(p.a,{tag:"li"},o.a.createElement(v.b,{className:"text-dark w-100",to:"/chat"},"Chat")),o.a.createElement(p.a,{tag:"li"},o.a.createElement(v.b,{className:"text-dark w-100",to:"/email/inbox"},"Email")),o.a.createElement(p.a,{tag:"li"},o.a.createElement(v.b,{className:"text-dark w-100",to:"/calendar"},"Calendar")))):null)))}}]),t}(o.a.Component);a.a=h},632:function(e,a,t){"use strict";var r=t(5),n=t(8),s=t(0),c=t.n(s),l=t(1),o=t.n(l),i=t(3),m=t.n(i),u=t(4),d={tag:u.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,s=e.color,l=e.body,o=e.inverse,i=e.outline,d=e.tag,b=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.mapToCssModules)(m()(a,"card",!!o&&"text-white",!!l&&"card-body",!!s&&(i?"border":"bg")+"-"+s),t);return c.a.createElement(d,Object(r.a)({},p,{className:g,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},633:function(e,a,t){"use strict";var r=t(5),n=t(8),s=t(0),c=t.n(s),l=t(1),o=t.n(l),i=t(3),m=t.n(i),u=t(4),d={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,l=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(m()(a,"card-body"),t);return c.a.createElement(l,Object(r.a)({},o,{className:i,ref:s}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},637:function(e,a,t){"use strict";var r=t(5),n=t(0),s=t.n(n),c=t(1),l=t.n(c),o=t(128),i={children:l.a.node},m=function(e){return s.a.createElement(o.a,Object(r.a)({group:!0},e))};m.propTypes=i,a.a=m},672:function(e,a,t){"use strict";var r=t(5),n=t(8),s=t(0),c=t.n(s),l=t(1),o=t.n(l),i=t(3),m=t.n(i),u=t(4),d={tag:u.tagPropType,listTag:u.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},b=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,l=e.children,o=e.tag,i=e.listTag,d=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(u.mapToCssModules)(m()(a),s),g=Object(u.mapToCssModules)(m()("breadcrumb",t),s);return c.a.createElement(o,Object(r.a)({},b,{className:p,"aria-label":d}),c.a.createElement(i,{className:g},l))};b.propTypes=d,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=b},673:function(e,a,t){"use strict";var r=t(5),n=t(8),s=t(0),c=t.n(s),l=t(1),o=t.n(l),i=t(3),m=t.n(i),u=t(4),d={tag:u.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,s=e.active,l=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(u.mapToCssModules)(m()(a,!!s&&"active","breadcrumb-item"),t);return c.a.createElement(l,Object(r.a)({},o,{className:i,"aria-current":s?"page":void 0}))};b.propTypes=d,b.defaultProps={tag:"li"},a.a=b},675:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var r=t(33),n=t(5),s=t(10),c=t(15),l=t(0),o=t.n(l),i=t(1),m=t.n(i),u=t(637),d=t(4),b=["defaultOpen"],p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(s.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return o.a.createElement(u.a,Object(n.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(d.omit)(this.props,b)))},a}(l.Component);p.propTypes=Object(r.a)({defaultOpen:m.a.bool},u.a.propTypes)}}]);
//# sourceMappingURL=15.911f4f26.chunk.js.map