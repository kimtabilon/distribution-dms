$(document).ready(function(){
 
    // show list of product on first load
    showProductsDandhClick();
 
 
});
 
function showProductsDandhClick(){
    var json_url_im="http://localhost:999/content/dm/api/datacontent/read_paging_dandh.php";
    showProductsDandh(json_url_im);
}
 

function showProductsDandh(json_url){
 
    // get list of products from the API
    $.getJSON(json_url, function(data){
 
        // html for listing products
        readDandhProductsTemplate(data, "");
        document.getElementById("loader").style.display = "none";
 /*
        // chage page title
        changePageTitle("Read Products");*/
 
    });
}