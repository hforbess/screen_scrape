  var url='http://eastwindgifts.com';
var url = "http://asdfasd.com"
 snippet = "nav-product > ul:first li ";
  var output;
var category = {
  
  execute : function(){
    var page = require('webpage').create();
    page.open( 'http://www.eastwindgifts.com' , function() {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", function() {
    var test =   page.evaluate(function() {
      var cats = [];
       $( "#nav-product > ul:first li").each( function(){
         cats.push( { cat_url: $(this).find('a').attr('href'), cat: $(this ).text() });
        });
       return cats;
      });
       for ( var x = 0; x < test.length; x++ ){

         console.log( test[x].cat_url +","+ test[x].cat );
       }
        phantom.exit();
    });
   });  
  }
}

url = 'http://www.eastwindgifts.com';
category.execute();
console.log( output );
