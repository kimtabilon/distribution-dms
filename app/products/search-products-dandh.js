$(document).ready(function(){
 
    // when a 'search products' button was clicked
    $(document).on('submit', '#search-product-form', function(){

        $("#zctb").find("tbody").empty();
        document.getElementById("loader").style.display = "block";
       
        
        // get search keywords
        var keywords = $(this).find(":input[name='keywords']").val();

        if (keywords != "") {

                // get data from the api based on search keywords
                $.getJSON("http://localhost:999/content/dm/api/datacontent/dandh_search.php?s=" + keywords, function(data){
         
                    // template in products.js
                    readDandhProductsTemplate(data, keywords);
                    document.getElementById("loader").style.display = "none";
         
                    // chage page title
                    //changePageTitle("Search products: " + keywords);
         
                }).fail(function(jqXHR) {
            if (jqXHR.status == 404) {
                document.getElementById("loader").style.display = "none";
                alert("No product/s found.");
            } else {
                document.getElementById("loader").style.display = "none";
                alert("No product/s found.");
            }
        });

        } else{
            var json_url_td="http://localhost:999/content/dm/api/datacontent/read_paging_dandh.php";
                $.getJSON(json_url_td, function(data){
        
        // html for listing products
        readDandhProductsTemplate(data, "");
        /*$("#zctb").find("tbody").append(tr);*/
        document.getElementById("loader").style.display = "none";
 
    });
        
        }
 
        
        // prevent whole page reload
        return false;
    });
 
});