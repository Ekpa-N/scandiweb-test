<?php 
class Database {
// DB params
private $host = 'localhost';
private $db_name = 'scandiweb';
private $user = 'admin';
private $password = '1234';
private $port = 3306;
private $connection;

// Database connection
public function connect() {
    $this->connection = null;
    $format = "mysql:host=%s;port=%s;dbname=%s";
    $dsn = sprintf($format, $this->host, $this->port, $this->db_name);

    try{
        $this->connection = new PDO($dsn, $this->user, $this->password);
        $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $exc) {
        echo 'Connection Error: '.$exc->getMessage();        
    }    

    return $this->connection;
}

}