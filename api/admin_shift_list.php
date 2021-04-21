<?php
include 'db.php';
$id = $_POST['id'];
$query = "SELECT * FROM tbl_shift Order BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM tbl_shift_type WHERE id = '".$row['id']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_assoc($result1);
    array_push($response, array("id"=>$row["id"], "shift_name"=>$row1["name"], "shift_type"=>$row['name']));
} 
echo json_encode($response);
mysqli_close($conn);
?>