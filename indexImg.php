<?php
session_start();
include('includes/config.php');
if(isset($_POST['login']))
{
$email=$_POST['username'];
$password=md5($_POST['password']);
$sql ="SELECT UserName,Password FROM dm_distribution_admin WHERE UserName=:email and Password=:password";
$query= $dbh -> prepare($sql);
$query-> bindParam(':email', $email, PDO::PARAM_STR);
$query-> bindParam(':password', $password, PDO::PARAM_STR);
$query-> execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
if($query->rowCount() > 0)
{
$_SESSION['alogin']=$_POST['username'];
echo "<script type='text/javascript'> document.location = 'dashboard.php'; </script>";
} else{
  
  echo "<script>alert('Invalid Details');</script>";

}

}

?>
<!doctype html>
<html lang="en" class="no-js">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">

	
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/dataTables.bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-social.css">
	<link rel="stylesheet" href="css/bootstrap-select.css">
	<link rel="stylesheet" href="css/fileinput.min.css">
	<link rel="stylesheet" href="css/awesome-bootstrap-checkbox.css">
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
<?php

$l_sku='';
$l_manufac='';
$l_entity='';
$newLink='';
$username = 'ecommike';
$password = 'Eco@2019';


$sql="SELECT cpe.entity_id, sku, cpev.value as brand FROM `catalog_product_entity` cpe inner join catalog_product_entity_varchar cpev on cpe.entity_id = cpev.entity_id where attribute_id=138 LIMIT 0 , 1";
$query = $dbh -> prepare($sql);
$query-> execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
if($query->rowCount() > 0)
{
	foreach ($results as $rst) {
		$l_sku=$rst->sku;
		$l_manufac=$rst->brand;
		$l_entity=$rst->entity_id;
		print_r($rst->sku . ';   ' . $rst->brand . '<br>');


		/*$server = 'https://data.Icecat.biz/xml_s3/xml_server3.cgi?prod_id=' . $l_sku .';vendor=' . $l_manufac . ';lang=en;output=productxml';*/
		$server = 'https://data.Icecat.biz/xml_s3/xml_server3.cgi?prod_id=CF377A;vendor=HP;lang=en;output=productxml';
		/*print_r($server);*/
		$context = stream_context_create(array(
		        'http' => array(
		            'header'  => "Authorization: Basic " . base64_encode("$username:$password")
		        )
		    )
		);
		$cnt=1;
		$data = file_get_contents("$server", false, $context);
		$xml=simplexml_load_string($data);
		if ($xml === false) {
		    echo "Failed loading XML: ";
		    /*foreach(libxml_get_errors() as $error) {
		        echo "<br>", $error->message;
		    }*/
		} else {
		    foreach ($xml->Product->ProductGallery as $dat) {
		        foreach ($dat->ProductPicture as $a) {
		            if ((string) $a['Original'] != '') {
		            	$newLink=(string) $a['Original'];
		            	$sqlint="INSERT INTO catalog_product_entity_media_gallery (`attribute_id`, `value`, `media_type`, `disabled`) VALUES ('90', '$newLink', 'image', 0)";
		            	$query = $dbh -> prepare($sqlint);
						$query-> execute();
						$last_id = $dbh->lastInsertId();

						$sqlval="INSERT INTO `catalog_product_entity_media_gallery_value`(`value_id`, `store_id`, `entity_id`, `label`, `position`, `disabled`) VALUES ('$last_id', 0, '$l_entity', '', '$cnt', 0)";
		            	$query = $dbh -> prepare($sqlval);
						$query-> execute();

		                print_r((string) $a['Original'] . ' #: ' . $cnt . ' id: ' . $last_id . ' entity: ' . $l_entity . '<br>' );
		                $cnt++;
		            }
		            
		        }
		    }
		}


	}
} else{
  
  echo "<script>alert('no');</script>";

}

/*$username = 'ecommike';
$password = 'Eco@2019';
$server = 'https://data.Icecat.biz/xml_s3/xml_server3.cgi?prod_id=80QQ002JSP;vendor=Lenovo;lang=en;output=productxml';

$context = stream_context_create(array(
        'http' => array(
            'header'  => "Authorization: Basic " . base64_encode("$username:$password")
        )
    )
);
$data = file_get_contents("$server", false, $context);
$xml=simplexml_load_string($data);
if ($xml === false) {
    echo "Failed loading XML: ";
    foreach(libxml_get_errors() as $error) {
        echo "<br>", $error->message;
    }
} else {
    foreach ($xml->Product->ProductGallery as $dat) {
        foreach ($dat->ProductPicture as $a) {
            if ((string) $a['Original'] != '') {
                print_r((string) $a['Original'] . '<br>');
            }
            
        }
    }
}*/


?>
	<!-- <div class="login-page bk-img" style="background-image: url(img/background.jpg);">
		<div class="form-content">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<h1 class="text-center text-bold mt-4x">Admin Login</h1>
						<div class="well row pt-2x pb-3x bk-light">
							<div class="col-md-8 col-md-offset-2">
								<form method="post">

									<label for="" class="text-uppercase text-sm">Your Username </label>
									<input type="text" placeholder="Username" name="username" class="form-control mb" required>

									<label for="" class="text-uppercase text-sm">Password</label>
									<input type="password" placeholder="Password" name="password" class="form-control mb" required>
									<button class="btn btn-primary btn-block" name="login" type="submit">LOGIN</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	
	<!-- Loading Scripts -->
	<!-- <script src="js/jquery.min.js"></script>
	<script src="js/bootstrap-select.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.dataTables.min.js"></script>
	<script src="js/dataTables.bootstrap.min.js"></script>
	<script src="js/Chart.min.js"></script>
	<script src="js/fileinput.js"></script>
	<script src="js/chartData.js"></script>
	<script src="js/main.js"></script> -->

</body>

</html>