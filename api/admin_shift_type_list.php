<?php
include 'db.php';
$id = $_POST['id'];
$query = "SELECT * FROM tbl_shift_type Order BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("id"=>$row["id"], "name"=>$row['name']));
} 
echo json_encode($response);
mysqli_close($conn);
?>