// product list html
function readProductsTemplate(data, keywords){
 
    var read_products_html=`
        <table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                        <th>SKU</th>
                                        <th>Product Name</th>
                                        <th>Manufacturer</th>
                                        <th>UPC</th>
                                        <th>MSRP</th>
                                        <th>Dandh</th>
                                        <th>Ingram Micro</th>
                                        <th>Techdata</th>
                                        <th>Categoty</th>
                                        <th>Image Upload Status</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>`;
 
 
    // loop through returned list of data
    $.each(data.records, function(key, val) {
 
        // creating new table row per record
        read_products_html+=`<tr>
 
            <td>` + val.sku + `</td>
            <td>` + val.product_name + `</td>
            <td>` + val.manufacturer + `</td>
            <td>` + val.upc + `</td>
            <td style="text-align: right">` + val.msrp + `</td>
            <td style="text-align: right">` + val.dandh_info + `</td>
            <td style="text-align: right">` + val.ingram_info + `</td>
            <td style="text-align: right">` + val.techdata_info + `</td>
            <td></td>
            <td>` + val.imageUpdateStatus + `</td>
 
            <!-- 'action' buttons -->
            <td>
 
                <!-- edit button -->
                <button class='btn btn-info m-r-10px update-product-button' data-id='` + val.master_id + `'>
                    <span class='fa fa-edit'></span>
                </button>
 
            </td>
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