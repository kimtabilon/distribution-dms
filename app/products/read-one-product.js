$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-product-button', function(){
        // get product id
		var id = $(this).attr('data-id');

		// read product record based on given ID
		$.getJSON("http://localhost:999/content/dm/api/datacontent/read_one.php?master_id=" + id, function(data){
		    // start html
			var read_one_product_html=`
			 
			    <!-- when clicked, it will show the product's list -->
			    <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
			        <span class='fas fa-less-than'></span> Back To List
			    </div>

			    <!-- product data will be shown in this table -->
				<table class='table table-bordered table-hover'>
				 
				    <!-- product name -->
				    <tr>
				        <td class='w-30-pct'>SKU</td>
				        <td class='w-70-pct'>` + data.sku + `</td>
				    </tr>
				 
				    <!-- product price -->
				    <tr>
				        <td>UPC</td>
				        <td>` + data.upc + `</td>
				    </tr>
				 
				    <!-- product category name -->
				    
				 
				</table>`;
				// inject html to 'page-content' of our app
				$("#page-content").html(read_one_product_html);
		});

    });
 
});