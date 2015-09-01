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

See example page in repo.

# Instances Methods:

`Simg.toString(svg)` - Returns SVG as HTML content. Used internally.

`Simg.toCanvas(cb)` - Return canvas element with this SVG drawn inside. Used internally. Callback is optional.

`Simg.toSvgImage(cb)` - Creates an image with the SVG data. Used internally.  Callback runs on image load.

`Simg.toImg(cb)` - Converts svg in to an image. Called the cb once the image is loaded so that you can place it anywhere.

`Simg.replace(svg)` - Shortcut to replace the SVG with an image version.

`Simg.toBinaryBlog(svg)` - Internal method for getting blob data.

`Simg.download(svg)` - Shortcut method for triggering a browser download of the SVG as an image.

# Static methods:

`Simg.noConflict()` - Allows you to move the Simg class from the global window to inside your own JavaScript library.

`Simg.getBase64Image(imgReference)` - Converts an image to base64 encoding so that we can display it inline. 

# Grunt commands (for development only)

*grunt uglify (also default grunt command)*

Convert source file to compressed file.

*grunt jshint*

Run source file through jshint
