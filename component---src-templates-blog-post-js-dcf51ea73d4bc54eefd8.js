(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(162),s=a.n(o),c=a(33),u=a.n(c),m=a(164),p=a.n(m),d=a(157),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="https://github.com/claireparker/magento-gatsby-blog/blob/master/src/pages"+this.props.postUrl+"index.md";return l.a.createElement("div",null,l.a.createElement("p",null,"Comments? Typos? ",l.a.createElement("a",{href:e},"Edit this page on Github")))},t}(l.a.Component),f=a(161);a.d(t,"pageQuery",function(){return E});var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=p()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,n=a.previous,r=a.next;return l.a.createElement(f.a,null,l.a.createElement(s.a,{title:e.frontmatter.title+" | "+t}),l.a.createElement("h1",null,e.frontmatter.title),l.a.createElement("p",{style:{fontSize:"0.85rem"}},e.frontmatter.date),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),l.a.createElement("hr",null),l.a.createElement(h,{postUrl:this.props.location.pathname}),l.a.createElement("hr",null),l.a.createElement(d.a,null),l.a.createElement("ul",{style:{listStyle:"none",padding:0,marginLeft:0}},n&&l.a.createElement("li",null,l.a.createElement(u.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r&&l.a.createElement("li",null,l.a.createElement(u.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(l.a.Component),E=(t.default=g,"525352797")},149:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(158),s=a.n(o),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{style:{display:"flex",marginBottom:"4.375rem"}},l.a.createElement("img",{src:s.a,alt:"Me",style:{marginRight:"0.875rem",marginBottom:0,width:"3.5rem",height:"3.5rem",borderRadius:"3.5rem"}}),l.a.createElement("p",null,"Written by ",l.a.createElement("strong",null,"Claire")," on her sofa in Manchester."," ",l.a.createElement("a",{href:"https://twitter.com/claireparkerpen"},"You should follow her on Twitter")," ","and definitely"," ",l.a.createElement("a",{href:"https://www.instagram.com/claire_codes/"},"follow her on Instagram"),"."))},t}(l.a.Component);t.a=c},158:function(e,t,a){e.exports=a.p+"static/profile-pic-85515bab4bb8d59995ab81af61465099.jpg"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Magento 1 Frontend Bits"}}}}},160:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(56),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},161:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(33),c=a.n(s),u=(a(149),i.a.createContext({})),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};var p=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:"0"}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",letterSpacing:"4px",color:"#F26322",textShadow:"3px 3px #333"},to:"/"},t))))};p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var d=p;a(168);a(169);var h=function(e){var t=e.children;return i.a.createElement(m,{query:"755544856",render:function(e){return i.a.createElement("div",{style:{maxWidth:"42rem",margin:"0 auto"}},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-dcf51ea73d4bc54eefd8.js.map