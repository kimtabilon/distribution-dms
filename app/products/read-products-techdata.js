$(document).ready(function(){
 
    // show list of product on first load
    showProductsTechdataClick();
 
});
 

function showProductsTechdataClick(){
    var json_url_td="http://localhost:999/content/dm/api/datacontent/read_paging_techdata.php";
    showProductsTechdata(json_url_td);
}

// function to show list of products
function showProductsTechdata(json_url){
 
    // get list of products from the API
    $.getJSON(json_url, function(data){
        
        // html for listing products
        readTechdataProductsTemplate(data, "");
        document.getElementById("loader").style.display = "none";
        /*$('#loader').addClass("hide-loader");*/
 /*
        // chage page title
        changePageTitle("Read Products");*/
 
    });
}
