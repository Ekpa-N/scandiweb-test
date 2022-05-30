<?php

class Products{
    private $connection;
    private $table ='products';

    
    public $id;
    public $sku;
    public $name;
    public $attribute;
    public $price;
    public $idArray;

    
    public function __construct($db) {
        $this->connection = $db;
    }



    
    public function getProds() {
        
        $query = "SELECT * FROM {$this->table}";

        
        $statement = $this->connection->prepare($query);

        
        $statement->execute();

        return $statement;
    }

     
     public function setData($sku, $name, $attribute, $price) {
        $this->sku = $sku;
        $this->name = $name;
        $this->attribute = $attribute;
        $this->price = $price;
    }

    public function setDeleteData($id) {
        $this->idArray = $id;
    }
    
    public function addProduct() {
        
        $query = "INSERT INTO {$this->table}
        SET
            sku = :sku,
            name = :name,
            attribute = :attribute,
            price = :price";

            
            $statement = $this->connection->prepare($query);   
            
            
            $statement->bindParam(':sku', $this->sku);
            $statement->bindParam(':name', $this->name);
            $statement->bindParam(':attribute', $this->attribute);
            $statement->bindParam(':price', $this->price);


            
            if($statement->execute()) {
                return true;
            }

            printf("Error: %s. \n", $statement->error);

            return false;

    }
    public function deleteProduct() {
        
        $query = "DELETE FROM {$this->table}
        WHERE id = :id";
        $statement = $this->connection->prepare($query); 
            
            
            foreach($this->idArray as $id) {
                $statement->bindParam(':id', $id);
                $statement->execute();
                             
            }
            
            

    }
}