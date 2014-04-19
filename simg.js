(function(global){
  Simg = global.Simg = function(svg){
    this.svg = svg;
  }

  Simg.prototype = {
    // Return SVG text.
    toString: function(svg){
      [
        ['version', 1.1],
        ['xmlns', "http://www.w3.org/2000/svg"],
      ].forEach(function(item){
        svg.setAttribute(item[0], item[1]);
      });
      return svg.parentNode.innerHTML;
    },

    // Return new img from SVG.
    // Call with no arguments to return svg image element.
    // Call with callback to return png image element.
    toImg: function(cb){
      var str = this.toString(this.svg);
      var img = document.createElement('img');

      var canvas = document.createElement('canvas');
      var context = canvas.getContext("2d");

      if (cb){
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;

          context.drawImage(img, 0, 0);

          var canvasData = canvas.toDataURL("image/png");
          var pngImg = document.createElement('img');

          pngImg.onload = function(){
            cb(pngImg);
          }
          pngImg.setAttribute('src', canvasData);
        };
      }

      img.setAttribute('src', 'data:image/svg+xml;base64,'+ btoa(str));
      return img;
    },

    // Replace SVG with PNG img.
    replace: function(){
      var self = this;
      this.toImg(function(img){
        var parentNode = self.svg.parentNode;
        parentNode.replaceChild(img, self.svg);
      });
    },

    // Trigger download of image.
    download: function(){
      this.toImg(function(img){
        var a = document.createElement("a");
        a.download = "chart.png";
        a.href = img.getAttribute('src');
        a.click();
      });
    }

  }
})(this);
