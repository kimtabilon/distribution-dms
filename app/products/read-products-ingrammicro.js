$(document).ready(function(){
 
    // show list of product on first load
    /*showProductsFirstPage();*/
    showProductsIngrammicroClick();
 
});
 

function showProductsIngrammicroClick(){
    var json_url_dh="http://localhost:999/content/dm/api/datacontent/read_paging_ingrammicro.php";
    showProductsIngrammicro(json_url_dh);
}
// function to show list of products
function showProductsIngrammicro(json_url){
 
    // get list of products from the API
    $.getJSON(json_url, function(data){
 
        // html for listing products
        readIngrammicroProductsTemplate(data, "");
        document.getElementById("loader").style.display = "none";
 /*
        // chage page title
        changePageTitle("Read Products");*/
 
    });
}
