$(document).ready(function() {
    $("main#spapp > section").height($(document).height()-30);

var app = $.spapp({
    templateDir  : "./products/",
    pageNotFound : "error_404"
  });
  
  app.route({
    view : "macarons",
    load : "macarons.html"
  });
  app.route({
    view : "cakes",
    load : "cakes.html"
  });
  app.route({
    view : "cupcakes",
    load : "cupcakes.html"
  });
  app.route({
    view : "cookies",
    load : "cookies.html"
  });
  app.run();

});