$(document).ready(function(){
 
    // show list of product on first load
    showProductsFirstPage();

 
});
 
function showProductsFirstPage(){

     
    var json_url="http://localhost:999/content/dm/api/datacontent/read_paging.php";
    showProducts(json_url);
}

// function to show list of products
function showProducts(json_url){
 
    // get list of products from the API
    $.getJSON(json_url, function(data){
     /*   console.log('aa');*/
 
        // html for listing products
        readProductsTemplate(data, "");
        document.getElementById("loader").style.display = "none";

 
    });
}
