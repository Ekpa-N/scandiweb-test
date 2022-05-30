<?php 
// headers

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Product.php'; 

// instantiate db and connect to it
$database = new Database();
$db = $database->connect();


// instantiate product object
$theProducts = new Products($db);

// Products query
$result = $theProducts->getProds();



// get row count
$num = $result->rowCount();

if($num > 0) {
    $product_arr = array();
    $product_arr["data"] = array();

    while($item = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($item);
        $product_item = array(
            'id' => $id,
            'name' => $name,
            'attribute' => $attribute,
            'price' => $price,
            'sku' => $sku
        );
        //push to array
        array_push($product_arr['data'], $product_item);
    }

    echo json_encode(($product_arr));
} else {
    echo json_encode(array('message' => 'No product in database'));
}
