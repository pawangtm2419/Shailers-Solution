<?php
include 'db.php';
$id = $_POST['id'];
$query = "SELECT * FROM tbl_shift WHERE id = $id";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM tbl_shift_type WHERE id = '".$row['shift_type_id']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_assoc($result1);
    array_push($response, array("id"=>$row["id"], "shift_type"=>$row['name'], "intime"=>$row['intime'], "outtime"=>$row['outtime'], "intime_relaxation"=>$row['intime_relaxation'], "outtime_relaxation"=>$row['outtime_relaxation'], "shift_name"=>$row1["name"]));
} 
echo json_encode($response);
mysqli_close($conn);
?>