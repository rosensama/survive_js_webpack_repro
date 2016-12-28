# survive_js_webpack_repro

When adding semantic-ui, you can choose all defaults.  Then you must:
```bash
$ cd semantic
$ gulp build
```
The code as provided will produce the following error
```bash
 ./node_modules/.bin/webpack
keywords if/then/else require v5 option
Hash: e19331e62c693579f5d0
Version: webpack 2.2.0-rc.2
Time: 84ms
 Asset     Size  Chunks             Chunk Names
app.js  3.26 kB       0  [emitted]  app
   [0] ./app/component.js 135 bytes {0} [built]
   [1] ./semantic/dist/semantic.css 370 bytes {0} [built] [failed] [1 error]
   [2] ./app/index.js 139 bytes {0} [built]

ERROR in ./semantic/dist/semantic.css
Module parse failed: /home/rosensama/projects/survive_js_webpack_repro/semantic/dist/semantic.css Unexpected character '@' (11:0)
You may need an appropriate loader to handle this file type.
|  *
|  */
| @import url('https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin');
| /*!
|  * # Semantic UI 2.2.7 - Reset
 @ ./app/index.js 3:15-55
```

If you modify `semantic/src/site/globals/site.variables to add the following and build again, you will get a different error.
```
@importGoogleFonts:  false;
```
```bash
ERROR in ./semantic/dist/semantic.css
Module parse failed: /home/rosensama/projects/survive_js_webpack_repro/semantic/dist/semantic.css Unexpected token (27:0)
You may need an appropriate loader to handle this file type.
| /* Border-Box */
|
| *,
| *:before,
| *:after {
 @ ./app/index.js 3:15-55
```
Both problems go away if you complete section 12.2, removing the CSS require from your code and splitting out PATHS.style.
