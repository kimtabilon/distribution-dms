$(document).ready(function(){
 
    // will run if the delete button was clicked
    $(document).on('click', '.delete-product-button', function(){
        // get the product id
		var product_id = $(this).attr('data-id');

		// bootbox for good looking 'confirm pop up'
		bootbox.confirm({
		 
		    message: "<h4>Are you sure?</h4>",
		    buttons: {
		        confirm: {
		            label: '<span class="fas fa-check"></span> Yes',
		            className: 'btn-danger'
		        },
		        cancel: {
		            label: '<span class="fas fa-times"></span> No',
		            className: 'btn-primary'
		        }
		    },
		    callback: function (result) {
		        if(result==true){
 
			    // send delete request to api / remote server
			    $.ajax({
			        url: "https://www.ecommercebusinessprime.com/content/dm/api/datacontent/delete.php",
			        type : "POST",
			        dataType : 'json',
			        data : JSON.stringify({ id: product_id }),
			        success : function(result) {
			 
			            // re-load list of products
			            showProducts();
			        },
			        error: function(xhr, resp, text) {
			            console.log(xhr, resp, text);
			        }
			    });
			 
			}
		    }
		});

    });
});