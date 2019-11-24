// product list html
function readDandhProductsTemplate(data, keywords){
    var read_products_html=`
        <table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                                <th>Item No.</th>
                                                <th>Short Description</th>
                                                <th>Vendor Name</th>
                                                <th>Manufacturer Item No.</th>
                                                <th>Freight</th>
                                                <th>Weight</th>
                                                <th>QRY Avail All Aranches</th>
                                                <th>Unit Cost</th>
                                                <th>est Retail Price</th>
                                                <th>Map Price</th>
                                                <th>Rebatea Mount</th>
                                                <th>UPC</th>

                                        </tr>
                                    </thead>`;
 
 
    // loop through returned list of data
    $.each(data.records, function(key, val) {
 
        // creating new table row per record
        read_products_html+=`<tr>
 
            <td>` + val.dh_item_number + `</td>
            <td>` + val.short_description + `</td>
            
            <td>` + val.vendor_name + `</td>
            <td>` + val.manuF_item_number + `</td>
            <td style="text-align: right">` + val.freight + `</td>
            <td style="text-align: right">` + val.weight + `</td>
            <td style="text-align: right">` + val.qty_avail_all_aranches + `</td>
            <td style="text-align: right">` + val.unit_cost + `</td>
            <td style="text-align: right">` + val.est_retail_price + `</td>
            <td style="text-align: right">` + val.map_price + `</td>
            <td style="text-align: right">` + val.rebatea_mount + `</td>
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