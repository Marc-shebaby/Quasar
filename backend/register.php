<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include("connection.php");

if(isset($_POST["email"]) && $_POST["email"]!= "" && isset($_POST["password"]) && $_POST["password"] != ""  ){
    $email = $_POST["email"];
    
    $password = $_POST["password"];
}else{
    $response = [];
    $response["success"] = false;   
    echo json_encode($response);
    return; 
}

$query = $mysqli->prepare("Select * from users WHERE Username = ?");
$query->bind_param("s", $email);
$query->execute();

$array = $query->get_result();

$response_values = [];
$response_success = [];

while($users = $array->fetch_assoc()){
    $response_values[] = $users;
}

if($response_values[0] == null){
    $query = $mysqli->prepare("INSERT INTO users(email, password) VALUES ( ?, ?)");
    $query->bind_param("ss", $email, $password);
    $query->execute();
    $response_success["success"] = true;
    echo json_encode($response);
}

else{
    die("User already exists");
    $response_success["success"] = false;
}
