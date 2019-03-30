(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(169),o=a(167),c=a(189);t.default=function(){return r.a.createElement("div",{style:{background:"#1c1d1e",height:"100%"}},r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),r.a.createElement(c.a,{frontPage:!0})))}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(146),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(156),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},162:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},166:function(e,t,a){},167:function(e,t,a){"use strict";var n=a(168),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(188),l=a.n(s),u=a(148);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)},i.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},169:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(148),l=a(459),u=a(457),d=a(282),m=function(e){e.siteTitle;return i.a.createElement(l.a,{size:"large",inverted:!0,style:{borderRadius:0}},i.a.createElement(u.a,null,i.a.createElement(l.a.Item,{as:s.Link,to:"/"},i.a.createElement(d.a,{name:"home"})," Home"),i.a.createElement(l.a.Menu,{position:"right"},i.a.createElement(l.a.Item,{as:s.Link,to:"/projects"},i.a.createElement(d.a,{name:"code"}),"Projects"),i.a.createElement(l.a.Item,{as:s.Link,to:"/about"},i.a.createElement(d.a,{name:"user"}),"About Me"),i.a.createElement(l.a.Item,{as:s.Link,to:"/contact"},i.a.createElement(d.a,{name:"mail"}),"Contact"))))};m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var p=m,f=a(7),y=a.n(f),h=a(461),g=a(463),v=a(462),E=function(e){function t(){return e.apply(this,arguments)||this}return y()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"footer"},i.a.createElement(h.a,{inverted:!0,vertical:!0,style:{height:"100%"}},i.a.createElement(u.a,null,i.a.createElement(g.a,{divided:!0,inverted:!0,stackable:!0},i.a.createElement(g.a.Row,null,i.a.createElement(g.a.Column,{width:7},i.a.createElement(v.a,{as:"h4",inverted:!0},"Created by:"),i.a.createElement("p",null,"Daniel Kukula",i.a.createElement("br",null),"All Rights Reserved")))))))},t}(r.Component),b=(a(166),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"site"},i.a.createElement("div",{className:"site-content"},i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),t),i.a.createElement(E,null)))},data:n})});b.propTypes={children:c.a.node.isRequired};t.a=b},189:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(461),s=a(450),l=a(462),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.frontPage;return o.a.createElement(c.a,{inverted:e,textAlign:"center",style:{height:"100%",padding:"1em 0em"},vertical:!0},o.a.createElement(s.a,{src:"images/daniel-sq.jpg",size:e?"large":"small",circular:!0,centered:!0}),o.a.createElement(l.a,{as:"h1",content:"Daniel Kukula",inverted:e,style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"1em"}}),o.a.createElement(l.a,{as:"h2",content:"Full Stack Developer",inverted:e,style:{fontSize:"1.7em",fontWeight:"normal"}}))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-8b3da57c691129355fe3.js.map