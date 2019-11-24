$(document).ready(function(){
 
    // show html form when 'update product' button was clicked
    $(document).on('click', '.update-product-button', function(){
        // get product id
		var id = $(this).attr('data-id');

		// read one record based on given product id
		$.getJSON("http://localhost:999/content/dm/api/datacontent/read_one.php?master_id=" + id, function(data){
		 
		    // values will be used to fill out our form
		    var sku = data.sku;
		    var upc = data.upc;
		    var manufacturer = data.manufacturer;
		    var product_name = data.product_name;
		    var length = data.length;
		    var height = data.height;
		    var weight = data.weight;
		    var width = data.width;
		    var mapping = data.mapping;
		    var techdata_item_name = data.techdata_item_name;
		    var techdata_qty = data.techdata_qty;
		    var techdata_cost = data.techdata_cost;
		    var ingram_item_name = data.ingram_item_name;
		    var ingram_qty = data.ingram_qty;
		    var ingram_cost = data.ingram_cost;
		    var dandh_item_name = data.dandh_item_name;
		    var dandh_qty = data.dandh_qty;
		    var dandh_cost = data.dandh_cost;
		    var imageUpdateStatus = data.imageUpdateStatus;

			    // store 'update product' html to this variable
				var update_product_html=`
				    <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button' onclick="location.href='data-content.php';">
				        <span class='fas fa-less-than'></span> Back To List
				    </div>
				    <br />
				    <br />
				    <br />

				    <!-- build 'update product' html form -->
					<!-- we used the 'required' html5 property to prevent empty fields -->
					<form id='update-product-form' action='#' method='post' border='0'>
					    <table class='table table-hover table-responsive table-bordered'>
					 
					        <!-- sku field -->
					        <tr>
					            <td>SKU</td>
					            <td><input value=\"` + sku + `\" type='text' name='sku' class='form-control' readonly /></td>
					        </tr>
					 
					        <!-- upc field -->
					        <tr>
					            <td>UPC</td>
					            <td><input value=\"` + upc + `\" type='text' name='upc' class='form-control' readonly /></td>
					        </tr>

					        <!-- manufacturer field -->
					        <tr>
					            <td>Manufacturer</td>
					            <td><input value=\"` + manufacturer + `\" type='text' name='manufacturer' class='form-control' readonly /></td>
					        </tr>

					        <!-- product name field -->
					        <tr>
					            <td>Product Name</td>
					            <td><textarea name='product_name' class='form-control'>` + product_name + `</textarea></td>
					        </tr>

					        <!-- length field -->
					        <tr>
					            <td>Length</td>
					            <td><input value=\"` + length + `\" type='text' name='length' class='form-control' /></td>
					        </tr>

					        <!-- height field -->
					        <tr>
					            <td>Height</td>
					            <td><input value=\"` + height + `\" type='text' name='height' class='form-control' /></td>
					        </tr>

					        <!-- weight field -->
					        <tr>
					            <td>Weight</td>
					            <td><input value=\"` + weight + `\" type='text' name='weight' class='form-control' /></td>
					        </tr>

					        <!-- width field -->
					        <tr>
					            <td>Width</td>
					            <td><input value=\"` + width + `\" type='text' name='width' class='form-control' /></td>
					        </tr>

					        <!-- mapping field -->
					        <tr>
					            <td>Mapping</td>
					            <td><input value=\"` + mapping + `\" type='text' name='mapping' class='form-control' /></td>
					        </tr>

					        <!-- techdata_item_name field -->
					        <tr>
					            <td>Techdata Item Name</td>
					            <td><input value=\"` + techdata_item_name + `\" type='text' name='techdata_item_name' class='form-control' readonly /></td>
					        </tr>

					        <!-- techdata_qty field -->
					        <tr>
					            <td>Techdata Qty</td>
					            <td><input value=\"` + techdata_qty + `\" type='number' name='techdata_qty' class='form-control' readonly /></td>
					        </tr>

					        <!-- techdata_cost field -->
					        <tr>
					            <td>Techdata Cost</td>
					            <td><input value=\"` + techdata_cost + `\" type='number' name='techdata_cost' class='form-control' readonly /></td>
					        </tr>

					        <!-- ingram_item_name field -->
					        <tr>
					            <td>Ingram Micro Item Name</td>
					            <td><input value=\"` + ingram_item_name + `\" type='text' name='ingram_item_name' class='form-control' readonly /></td>
					        </tr>

					        <!-- ingram_qty field -->
					        <tr>
					            <td>Ingram Micro QTY</td>
					            <td><input value=\"` + ingram_qty + `\" type='number' name='ingram_qty' class='form-control' readonly /></td>
					        </tr>

					        <!-- ingram_cost field -->
					        <tr>
					            <td>Ingram Micro Cost</td>
					            <td><input value=\"` + ingram_cost + `\" type='number' name='ingram_cost' class='form-control' readonly /></td>
					        </tr>

					        <!-- dandh_item_name field -->
					        <tr>
					            <td>Dandh Item Name</td>
					            <td><input value=\"` + dandh_item_name + `\" type='text' name='dandh_item_name' class='form-control' readonly /></td>
					        </tr>

					        <!-- dandh_qty field -->
					        <tr>
					            <td>Dandh Qty</td>
					            <td><input value=\"` + dandh_qty + `\" type='number' name='dandh_qty' class='form-control' readonly /></td>
					        </tr>

					        <!-- dandh_cost field -->
					        <tr>
					            <td>Dandh Cost</td>
					            <td><input value=\"` + dandh_cost + `\" type='number' name='dandh_cost' class='form-control' readonly /></td>
					        </tr>
					 
					        <!-- imageUpdateStatus field -->
					        <tr>
					            <td>Image Upload Status</td>
					            <td><input value=\"` + imageUpdateStatus + `\" type='text' name='imageUpdateStatus' class='form-control' readonly /></td>
					        </tr>

					        <tr>
					 
					            <!-- hidden 'product id' to identify which record to delete -->
					            <td><input value=\"` + id + `\" name='master_id' type='hidden' /></td>
					 
					            <!-- button to submit form -->
					            <td>
					                <button type='submit' class='btn btn-info'>
					                    <span class='fa fa-edit'></span> Update Product
					                </button>
					            </td>
					 
					        </tr>
					 
					    </table>
					</form>`;

				    // inject to 'page-content' of our app
					$("#page-content").html(update_product_html);
 
			});
		});

    // will run if 'create product' form was submitted
	
						$(document).on('submit', '#update-product-form', function(){
						    // get form data

							var $form = $("#update-product-form");
							var dataaa = JSON.stringify(getFormData($form));
							console.log(dataaa);

							// submit form data to api
							$.ajax({
							    url: "http://localhost:999/content/dm/api/datacontent/update.php",
							    type : "POST",
							    contentType : 'application/json',
							    data : dataaa,
							    success : function(result) {
							    	alert('Has been successfully saved!');
							        // product was created, go back to products list
							        /*showProducts();*/
							        window.location.href = "data-content.php";
							    },
							    error: function(xhr, resp, text) {
							    	/*alert('error');*/
							        // show error to console
							        console.log(xhr);
							        console.log(resp);
							        console.log(text);
							    }
							});
						     
						    return false;
						});
});

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
     
    
