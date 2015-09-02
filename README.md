simg
====

A small SVG to image converter.  Works in browser or PhantomJS.

# To use

```javascript
  var simg = new Simg(svgElement);

  // Replace the current SVG with an image version of it.
  simg.replace();

  // And trigger a download of the rendered image.
  simg.download();
  ```

# Live example:

The example page in this repo is also hosted at http://krunkosaurus.github.io/simg/

# Documentation

## Instances Methods:

`Simg.toString(svg)` - Returns SVG as HTML content. Used internally.

`Simg.toCanvas(cb)` - Return canvas element with this SVG drawn inside. Used internally. Callback is optional.

`Simg.toSvgImage(cb)` - Creates an image with the SVG data. Used internally.  Callback runs on image load.

`Simg.toImg(cb)` - Converts svg in to an image. Called the cb once the image is loaded so that you can place it anywhere.

`Simg.replace(svg)` - Shortcut to replace the SVG with an image version.

`Simg.toBinaryBlog(svg)` - Internal method for getting blob data.

`Simg.download(filename)` - Shortcut method for triggering a browser download of the SVG as an image (.png). You can pass optional filename. Default is 'chart'.

## Static methods:

`Simg.noConflict()` - Allows you to move the Simg class from the global window to inside your own JavaScript library.

`Simg.getBase64Image(imgReference)` - Converts an image to base64 encoding so that we can display it inline.

# Development

## To install

- Git clone this repo
- `npm install`

## Grunt commands (for development only)

`grunt uglify (also default grunt command)` - Convert source file to compressed file.

`grunt jshint` - Run source file through jshint

# Notes:

- Simg works best with SVG or Canvas elements that have a fixed width and height.  Percentages occasionally cause issues.  If someone is feeling up to it, a helper function can be added that converts a % width/height SVG or Canvas element to its fixed pixel equivalent before conversion.

# Contributors

Thanks to the following contributors

- @clemsos (Suggesting naming download file and adding support for non-latin characters ie. Chinese)
- @headwinds (Creating example page)
