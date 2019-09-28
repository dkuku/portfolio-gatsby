(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(167),l=a(157),o=a(195),c=(a(426),a(7)),s=a.n(c),u=a(463),m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={subject:"",message:""},t.handleChange=function(e,a){var n,r=a.name,i=a.value;return t.setState(((n={})[r]=i,n))},t.generateLink=function(e,t){return"mailto:daniel.kuku@gmail.com?subject="+e+"&body="+t},t.handleSubmit=function(){var e=t.state,a=e.subject,n=e.message;t.action=window.open(t.generateLink(a,n))},t}return s()(t,e),t.prototype.render=function(){var e=this.state,t=e.subject,a=e.message;return r.a.createElement(u.a,{onSubmit:this.handleSubmit},r.a.createElement(u.a.Input,{label:"Subject",placeholder:"Subject",name:"subject",value:t,onChange:this.handleChange}),r.a.createElement(u.a.TextArea,{label:"Message",placeholder:"Drop me an email ...",name:"message",value:a,onChange:this.handleChange}),r.a.createElement(u.a.Button,{content:"Submit"}))},t}(n.Component),d=a(468),p=a(467),h=a(465),g=a(288);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),r.a.createElement(d.a,{divided:"vertically"},r.a.createElement(d.a.Row,{columns:2},r.a.createElement(d.a.Column,null,r.a.createElement(o.a,null)),r.a.createElement(d.a.Column,null,r.a.createElement(p.a,{as:"h3",style:{margin:"1em"}},"Send me a message:"),r.a.createElement(m,null),r.a.createElement(p.a,{as:"h3",style:{margin:"1em"}},"Spy on me:"),r.a.createElement(h.a.Group,null,r.a.createElement(h.a,{color:"linkedin",as:"a",href:"https://www.linkedin.com/in/daniel-kukula-55057a57/"},r.a.createElement(g.a,{name:"linkedin"})," LinkedIn"),r.a.createElement(h.a,{color:"black",as:"a",href:"https://github.com/dkuku"},r.a.createElement(g.a,{name:"github"})," Github"))))))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(155);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},157:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(172),s=a.n(c),u=a(153);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(u.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m;var d="1025518380"},163:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage"}}}}},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},165:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage",description:"Daniel KUkula - homepage and blog",author:"@gatsbyjs"}}}}},167:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(153),s=a(157),u=a(464),m=a(462),d=a(288),p=function(e){e.siteTitle;return i.a.createElement(u.a,{size:"large",inverted:!0,style:{borderRadius:0}},i.a.createElement(m.a,null,i.a.createElement(u.a.Item,{as:c.a,to:"/"},i.a.createElement(d.a,{name:"home"})," Home"),i.a.createElement(u.a.Menu,{position:"right"},i.a.createElement(u.a.Item,{as:c.a,to:"/blog"},i.a.createElement(d.a,{name:"edit"}),"Blog"),i.a.createElement(u.a.Item,{as:c.a,to:"/projects"},i.a.createElement(d.a,{name:"code"}),"Projects"),i.a.createElement(u.a.Item,{as:c.a,to:"/about"},i.a.createElement(d.a,{name:"user"}),"About Me"),i.a.createElement(u.a.Item,{as:c.a,to:"/contact"},i.a.createElement(d.a,{name:"mail"}),"Contact"))))};p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var h=p,g=a(7),E=a.n(g),f=a(466),y=a(468),v=a(467),b=function(e){function t(){return e.apply(this,arguments)||this}return E()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"footer"},i.a.createElement(f.a,{inverted:!0,vertical:!0,style:{height:"100%"}},i.a.createElement(m.a,null,i.a.createElement(y.a,{divided:!0,inverted:!0,stackable:!0},i.a.createElement(y.a.Row,null,i.a.createElement(y.a.Column,{width:7},i.a.createElement(v.a,{as:"h4",inverted:!0},"Created by:"),i.a.createElement("p",null,"Daniel Kukula",i.a.createElement("br",null),"All Rights Reserved")))))))},t}(r.Component),k=(a(177),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),i.a.createElement("div",{className:"site"},i.a.createElement("div",{className:"site-content"},i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),t),i.a.createElement(b,null)))},data:n})});k.propTypes={children:o.a.node.isRequired};t.a=k},195:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(466),c=a(455),s=a(467),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.frontPage;return l.a.createElement(o.a,{inverted:e,textAlign:"center",style:{height:"100%",padding:"1em 0em"},vertical:!0},l.a.createElement(c.a,{src:"images/daniel-sq.jpg",size:e?"large":"small",circular:!0,centered:!0}),l.a.createElement(s.a,{as:"h1",content:"Daniel Kukula",inverted:e,style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"1em"}}),l.a.createElement(s.a,{as:"h2",content:"Full Stack Developer",inverted:e,style:{fontSize:"1.7em",fontWeight:"normal"}}))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-js-a221d0acc83c9812e569.js.map