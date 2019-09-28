(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(167),o=a(161),l=a(196);t.default=function(){return r.a.createElement("div",{style:{background:"#1c1d1e",height:"100%"}},r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),r.a.createElement(l.a,{frontPage:!0})))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},161:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(170),s=a.n(c),u=a(153);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="1025518380"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage"}}}}},165:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},166:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage",description:"Daniel KUkula - homepage and blog",author:"@gatsbyjs"}}}}},167:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(153),s=a(161),u=a(465),m=a(463),d=a(197),p=function(e){e.siteTitle;return i.a.createElement(u.a,{size:"large",inverted:!0,style:{borderRadius:0}},i.a.createElement(m.a,null,i.a.createElement(u.a.Item,{as:c.a,to:"/"},i.a.createElement(d.a,{name:"home"})," Home"),i.a.createElement(u.a.Menu,{position:"right"},i.a.createElement(u.a.Item,{as:c.a,to:"/blog"},i.a.createElement(d.a,{name:"edit"}),"Blog"),i.a.createElement(u.a.Item,{as:c.a,to:"/projects"},i.a.createElement(d.a,{name:"code"}),"Projects"),i.a.createElement(u.a.Item,{as:c.a,to:"/about"},i.a.createElement(d.a,{name:"user"}),"About Me"),i.a.createElement(u.a.Item,{as:c.a,to:"/contact"},i.a.createElement(d.a,{name:"mail"}),"Contact"))))};p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var f=p,g=a(7),E=a.n(g),y=a(469),h=a(467),v=a(468),b=function(e){function t(){return e.apply(this,arguments)||this}return E()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"footer"},i.a.createElement(y.a,{inverted:!0,vertical:!0,style:{height:"100%"}},i.a.createElement(m.a,null,i.a.createElement(h.a,{divided:!0,inverted:!0,stackable:!0},i.a.createElement(h.a.Row,null,i.a.createElement(h.a.Column,{width:7},i.a.createElement(v.a,{as:"h4",inverted:!0},"Created by:"),i.a.createElement("p",null,"Daniel Kukula",i.a.createElement("br",null),"All Rights Reserved")))))))},t}(r.Component),w=(a(176),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),i.a.createElement("div",{className:"site"},i.a.createElement("div",{className:"site-content"},i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),t),i.a.createElement(b,null)))},data:n})});w.propTypes={children:l.a.node.isRequired};t.a=w},196:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(469),c=a(456),s=a(468),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.frontPage;return o.a.createElement(l.a,{inverted:e,textAlign:"center",style:{height:"100%",padding:"1em 0em"},vertical:!0},o.a.createElement(c.a,{src:"images/daniel-sq.jpg",size:e?"large":"small",circular:!0,centered:!0}),o.a.createElement(s.a,{as:"h1",content:"Daniel Kukula",inverted:e,style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"1em"}}),o.a.createElement(s.a,{as:"h2",content:"Full Stack Developer",inverted:e,style:{fontSize:"1.7em",fontWeight:"normal"}}))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-e4cb0be6aaca79f3fd2a.js.map