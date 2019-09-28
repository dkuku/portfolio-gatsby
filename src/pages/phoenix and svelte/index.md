---
path: '/phoenix-svelte-setup'
date: '2019-09-28'
title: "Make phenix use svelte"
tags: ["phoenix", "svelte"]
excerpt: "Make phenix use svelte"
---
In this blogpost I want to show how to make phoenix use svelte in templates.
So lets start:

Edit your `asset/package.json` file and add these 3 lines to devDependencies - also remove uglifyjs - we will replace it with terser which is a maintained fork of uglify
```
+    "svelte": "^3.12.1",
+    "svelte-loader": "^2.13.6",
+    "terser-webpack-plugin": "^2.1.1",
-    "uglifyjs-webpack-plugin": "^1.2.4",
```
Next run `npm install`
after everything is installed we can move to the webpack setup:
remove uglify, import terser and add the initialization:
```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
```
```
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
```
Next add a resolve section:
```
  entry: {
    './js/app.js': ['./js/app.js']
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    modules: ['node_modules']
  },
```
Add also these two  - the mjs part is needed because otherwise webpack throws an error that no require function can be used in the browser
```
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            hotReload: true
          }
         }
       }
     ]
```
with this setup we can include svelte templates to our views
In  `/assets/js/app.js` add
```
import './svelte.js';
```
In `/assets/js/svelte.js` with this content:
```
import App from './App.svelte'

const app = new App({
	target: document.querySelector('.svelte'),
	props: {
		name: 'svelte'
	}
})
export default app
```
And in  `/assets/js/App.svelte` add:
```
<script>
	export let name;
</script>
<h1>Phoenix and {name}!</h1>
```
last thing what we need to do is to add an element where this can be attached to our view:
```
<div class="svelte"></div>
```
This should render a h1 tag with the content `Phoenix and svelte`
Thats the basic setup but what if we want more??

Lets add a view helper in `lib/myapp_web/views/layout_view.ex` add these functions:
```
  def svelte(name, props) do
    :div
    |> tag([data: [props: json(props)], id: generate_id(name)])
  end

  def json(props) do
    props
    |> Jason.encode
    |> case do
      {:ok, message} -> message
      {:error, _} -> ""
    end
  end

  def generate_id(name) do
    "svelte-#{String.replace(name, " ", "-")}-root"
  end
```
this allows us to use a helper in our templates:
```
<%= svelte "test", %{:name => "svelte"} %>
```
we can pass as many params in this map as we want
then we need to create a directory `assets/js/svelte`
and inside create new files with the same name as the first param passed to the svelte helper:
`assets/js/svelte/test.svelte`
with normal svelte style templating:
```
 <script>
 	export let name;
 </script>
 
<h1>Phoenix and {name}!</h1>
```
the last part is to let out app know how to fin these templates:
For this to work lets replace the content of `assets/js/svelte.js` with:
```
const context = require.context("./svelte", false, /\.svelte/);
window.onload = function() {
  context.keys().forEach((file) => {
    const componentName = file.replace(/\.\/|\.svelte/g, '');
    const targetId = `svelte-${componentName}-root`;

    const root = document.getElementById(targetId);

    if(!root){
      return;
    }

    const requiredApp = require(`./svelte/${componentName}.svelte`);

    const props = root.getAttribute('data-props');
    let parsedProps = {};
    if(props){
      parsedProps = JSON.parse(props);
    }

    new requiredApp.default({
      target: root,
      props: parsedProps
    });
  });
};
```
Thats all - diffs of both commits can be found in this [gist](https://gist.github.com/dkuku/cf644f87e984d28f359886da5df307b3)
