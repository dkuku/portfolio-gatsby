const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-all-tags-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/templates/all-tags.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/templates/tags.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/pages/projects.js"))),
  "component---src-pages-worktimeline-js": hot(preferDefault(require("/home/kuku/Projects/portfolio-gatsby/src/pages/worktimeline.js")))
}

