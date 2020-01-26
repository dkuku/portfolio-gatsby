// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-all-tags-js": () => import("./../src/templates/all-tags.js" /* webpackChunkName: "component---src-templates-all-tags-js" */),
  "component---src-templates-tags-js": () => import("./../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---src-templates-blog-post-js": () => import("./../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("./../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-worktimeline-js": () => import("./../src/pages/worktimeline.js" /* webpackChunkName: "component---src-pages-worktimeline-js" */)
}

