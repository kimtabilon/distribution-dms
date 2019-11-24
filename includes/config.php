<?php 
// DB credentials.
/*define('DB_HOST','127.0.0.1');
define('DB_USER','a6e3a2c9_mage2');
define('DB_PASS','p6RH3N80i65N9yiGc5');
define('DB_NAME','a6e3a2c9_mage2');*/
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','');
define('DB_NAME','a6e3a2c9_mage2');
// Establish database connection.
try
{
$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
}
catch (PDOException $e)
{
exit("Error: " . $e->getMessage());
}
?>
