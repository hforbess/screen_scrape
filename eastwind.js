var page = require('webpage').create();
page.open('http://www.eastwindgifts.com', function() {
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", function() {
  var test =   page.evaluate(function() {
    var cats = [];
     $("#nav-product > ul:first li ").each( function(){
       obj = { ref: $(this).find('a').attr("href"), cat: $(this).text() }; 
       cats.push( obj );
      });
     rsfasfsdafasdsdfaeturn cats;
    });
    for( x = 0 ; x < test.length; x++ ){
      //console.info( test[x].cat+","+  test[x].ref );
      getProducts( test[x] );
     } 
    phantom.exit();
  });
});


function getProducts( cat ){
  var url = 'http://www.eastwindgifts.com/' + cat.ref; 
   var page = require('webpage').create();
  console.info( url );
   page.open(  "http://www.eastwindgifts.com/seasonal-merchandise-halloween-harvest.html", function( status ) {
   console.log( "status" + status );
 // page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", function() {
 // var products =   page.evaluate(function() {
    //var items = [];
     //$(".name").each( function(){
       //var product = $(this).find('a').attr('href').split(".")[0];
       //items.push( "hey" );
   //   });
 //    return "bleh";
 //   });
    //console.dir( "hIETHERE"  );
    //for( x = 0 ; x < products.length; x++ ){
     // console.info( products[x] );
    // }
    phantom.exit();
//  });
///});

}

phantom.onError = function(msg, trace) {
  var msgStack = ['PHANTOM ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
    });
  }
  console.error(msgStack.join('\n'));
  phantom.exit(1);
};
