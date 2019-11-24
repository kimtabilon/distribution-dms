// techdata product list html
function readTechdataProductsTemplate(data, keywords){
    
 
    var read_products_html=`
        
        <table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                               <th>SKU</th>
                                               <th>Short Description</th>
                                               <th>Long Description</th>
                                               <th>Manufacturer No.</th>
                                               <th>Manufacturer</th>
                                               <th>Manufacturer Global Description</th>
                                               <th>GTIN</th>
                                               <th>Product Family ID</th>
                                               <th>Product Family</th>
                                               <th>Product Class ID</th>
                                               <th>Product Class</th>
                                               <th>Product Sub-Class ID</th>
                                               <th>Product Sub-Class</th>
                                               <th>Article Creation Date</th>
                                               <th>CNET Available</th>
                                               <th>CNET ID</th>
                                               <th>List Price</th>
                                               <th>Weight</th>
                                               <th>Length</th>
                                               <th>Width</th>
                                               <th>Heigth</th>
                                               <th>No Return</th>
                                               <th>End user Information</th>
                                               <th>Freight Policy Exception</th>
                                               <th>MAT GRP</th>
                                               <th>Product Hier Description</th>
                                               <th>Country Origin</th>
                                               <th>Sale Status</th>
                                               <th>Sasle Status Description</th>
                                               <th>QTY</th>
                                               <th>VSI QTY</th>
                                               <th>Customer Best Price</th>
                                               <th>Promotion</th>
                                               <th>Unpromoted Price</th>
                                               <th>Valid To</th>
                                                
                                        </tr>
                                    </thead>`;
 
 
    // loop through returned list of data
    $.each(data.records, function(key, val) {
 
        // creating new table row per record
        read_products_html+=`<tr>
 
          
            <td>` + val.matnr + `</td>
            <td>` + val.shortdescription + `</td>
            <td>` + val.longdescription + `</td>
            <td>` + val.manufpartNo + `</td>
            <td>` + val.manufacturer + `</td>
            <td>` + val.manufacturerglobaldescr + `</td>
            <td>` + val.gtin + `</td>
            <td>` + val.prodfamilyid + `</td>
            <td>` + val.prodfamily + `</td>
            <td>` + val.prodclassid + `</td>
            <td>` + val.prodclass + `</td>
            <td>` + val.prodsubclassid + `</td>
            <td>` + val.prodsubclass + `</td>
            <td>` + val.articlecreationdate + `</td>
            <td>` + val.cnetavailable + `</td>
            <td>` + val.cnetid + `</td>
            <td>` + val.listprice + `</td>
            <td>` + val.weight + `</td>
            <td>` + val.length + `</td>
            <td>` + val.width + `</td>
            <td>` + val.heigth + `</td>
            <td>` + val.noreturn + `</td>
            <td>` + val.enduserinformation + `</td>
            <td>` + val.freightpolicyexception + `</td>
            <td>` + val.mat_grp + `</td>
            <td>` + val.prodhierdescr + `</td>
            <td>` + val.country_origin + `</td>
            <td>` + val.sale_status + `</td>
            <td>` + val.sale_status_decr + `</td>
            <td>` + val.qty + `</td>
            <td>` + val.vsiqty + `</td>
            <td>` + val.custbestprice + `</td>
            <td>` + val.promotion + `</td>
            <td>` + val.unpromotedprice + `</td>
            <td>` + val.validto + `</td>
 
            
        </tr>`;
    });
 
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