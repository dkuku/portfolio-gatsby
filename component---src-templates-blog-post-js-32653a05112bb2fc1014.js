(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(0),r=a.n(n),i=a(33),l=a.n(i),o=a(172),c=a.n(o),s=a(167),u=a(467),m="2483262773";t.default=function(e){var t=e.data,a=(e.location,e.pathContext),n=t.markdownRemark,i=n.frontmatter,o=n.html,m=i.title,d=i.date,p=a.next,E=a.prev;return r.a.createElement(s.a,null,r.a.createElement(c.a,{title:m+" - My Blog"}),r.a.createElement("div",null,r.a.createElement(u.a,null,m),r.a.createElement(u.a,{as:"h3"},d),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("p",null,E&&r.a.createElement(l.a,{to:E.frontmatter.path},"Previous: ",E.frontmatter.title)),r.a.createElement("p",null,p&&r.a.createElement(l.a,{to:p.frontmatter.path},"Next: ",p.frontmatter.title))))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(155);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},157:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(172),s=a.n(c),u=a(153);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(u.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},163:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage"}}}}},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},165:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage",description:"Daniel KUkula - homepage and blog",author:"@gatsbyjs"}}}}},167:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(153),s=a(157),u=a(464),m=a(462),d=a(288),p=function(e){e.siteTitle;return i.a.createElement(u.a,{size:"large",inverted:!0,style:{borderRadius:0}},i.a.createElement(m.a,null,i.a.createElement(u.a.Item,{as:c.a,to:"/"},i.a.createElement(d.a,{name:"home"})," Home"),i.a.createElement(u.a.Menu,{position:"right"},i.a.createElement(u.a.Item,{as:c.a,to:"/blog"},i.a.createElement(d.a,{name:"edit"}),"Blog"),i.a.createElement(u.a.Item,{as:c.a,to:"/projects"},i.a.createElement(d.a,{name:"code"}),"Projects"),i.a.createElement(u.a.Item,{as:c.a,to:"/about"},i.a.createElement(d.a,{name:"user"}),"About Me"),i.a.createElement(u.a.Item,{as:c.a,to:"/contact"},i.a.createElement(d.a,{name:"mail"}),"Contact"))))};p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var E=p,f=a(7),y=a.n(f),g=a(466),h=a(468),v=a(467),w=function(e){function t(){return e.apply(this,arguments)||this}return y()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"footer"},i.a.createElement(g.a,{inverted:!0,vertical:!0,style:{height:"100%"}},i.a.createElement(m.a,null,i.a.createElement(h.a,{divided:!0,inverted:!0,stackable:!0},i.a.createElement(h.a.Row,null,i.a.createElement(h.a.Column,{width:7},i.a.createElement(v.a,{as:"h4",inverted:!0},"Created by:"),i.a.createElement("p",null,"Daniel Kukula",i.a.createElement("br",null),"All Rights Reserved")))))))},t}(r.Component),b=(a(177),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),i.a.createElement("div",{className:"site"},i.a.createElement("div",{className:"site-content"},i.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),t),i.a.createElement(w,null)))},data:n})});b.propTypes={children:o.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-32653a05112bb2fc1014.js.map