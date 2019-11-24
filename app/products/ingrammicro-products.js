// techdata product list html
function readIngrammicroProductsTemplate(data, keywords){
 
    var read_products_html=`
        <table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>SKU</th>
                                            <th>Product Name</th>
                                            <th>Product Description</th>
                                            <th>Manufacturer</th>
                                            <th>Ingram Item No.</th>
                                            <th>Weight</th>
                                            <th>Length</th>
                                            <th>Width</th>
                                            <th>Height</th>
                                            <th>MSRP</th>
                                            <th>Cost</th>
                                            <th>UPC</th>
                                                
                                        </tr>
                                    </thead>`;
 
 
    // loop through returned list of data
    $.each(data.records, function(key, val) {
 
        // creating new table row per record
        read_products_html+=`<tr>
          
            <td>` + val.sku + `</td>
            <td>` + val.product_name + `</td>
            <td>` + val.product_desc + `</td>
            <td>` + val.manufacturer + `</td>
            <td>` + val.ingram_item_number + `</td>
            <td>` + val.weight + `</td>
            <td>` + val.length + `</td>
            <td>` + val.width + `</td>
            <td>` + val.height + `</td>
            <td>` + val.msrp + `</td>
            <td>` + val.ingram_cost + `</td>
            <td>` + val.upc + `</td>
            
            
        </tr>`;
    });
 
    // end table
    read_products_html+=`</table><!-- Loading Scripts -->
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap-select.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/dataTables.bootstrap.min.js"></script>
    <script src="js/Chart.min.js"></script>
    <script src="js/fileinput.js"></script>
    <script src="js/chartData.js"></script>
    <script src="js/main.js"></script>
    <script type="text/javascript">
                 $(document).ready(function () {          
                    setTimeout(function() {
                        $('.succWrap').slideUp("slow");
                    }, 3000);

                    $('#zctb').dataTable({
                    stateSave: true,
                    "bDestroy": true,        
                    "scrollX": true,
                    "scrollY": 300,
                    });
                    $('.dataTables_length').addClass('bs-select');

                    });

        </script>`;

    // inject to 'page-content' of our app
    $("#page-content").html(read_products_html);
}