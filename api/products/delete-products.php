<?php 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,
Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Product.php'; 


$database = new Database();
$db = $database->connect();



$theProduct = new Products($db);


$data = json_decode(file_get_contents("php://input"));

$theProduct->setDeleteData($data->idArray);

if($theProduct->deleteProduct()) {
    echo json_encode(
        array('message' => 'Product not deleted')
    );
} else {
    echo json_encode(
        array('message' => 'Product deleted')
    );    
}