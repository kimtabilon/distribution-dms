$(document).ready(function(){


    // when a 'search products' button was clicked
    $(document).on('submit', '#search-product-form', function(){
        
       $("#zctb").find("tbody").empty();
        document.getElementById("loader").style.display = "block";

        // get search keywords
        var keywords = $(this).find(":input[name='keywords']").val();
   /*     alert(keywords);*/
        if (keywords != "") {
                    $.getJSON("http://localhost:999/content/dm/api/datacontent/techdata_search.php?s=" + keywords, function(data){
        
            // template in products.js
            readTechdataProductsTemplate(data, keywords);
            document.getElementById("loader").style.display = "none";

                        // chage page title
                        //changePageTitle("Search products: " + keywords);
             
                    }).fail(function(jqXHR) {
                if (jqXHR.status == 404) {
                    document.getElementById("loader").style.display = "none";
                    
                    alert("No product/s found.");
                    
                } else {

                    /*$('#loader').addClass("hide-loader");*/
                    alert("No product/s found.");

                    document.getElementById("loader").style.display = "none";
                }
            });
        } else{
            var json_url_td="http://localhost:999/content/dm/api/datacontent/read_paging_techdata.php";
                $.getJSON(json_url_td, function(data){
        
        // html for listing products
        readTechdataProductsTemplate(data, "");
        /*$("#zctb").find("tbody").append(tr);*/
        document.getElementById("loader").style.display = "none";
 
    });
        
        }
 
        // get data from the api based on search keywords

 
        // prevent whole page reload
        return false;
    });
 
});