<?php
include('db.php');
extract($_POST);
$id = $_POST['id'];
$shift_type_id = $_POST['shift_type_id'];
$name = $_POST['name'];
$intime = $_POST['intime'];
$outtime = $_POST['outtime'];
$intime_relaxation = $_POST['intime_relaxation'];
$outtime_relaxation = $_POST['outtime_relaxation'];
$query = "SELECT * FROM tbl_shift WHERE id = '$id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Shift Type Already Exits.";
}
else 
{
	$date=date('d-m-Y');
	$time=date('h:i:sa');
	$num0 = rand(100000,9.9999);
    $randnum = "LEAD".$num0 ;
	$query1 = "INSERT INTO tbl_shift (shift_type_id, name, intime, outtime, intime_relaxation, outtime_relaxation) VALUES ('$shift_type_id', '$name', '$intime', '$outtime', '$intime_relaxation', '$outtime_relaxation')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Shift Type.";
		$query2 = "SELECT * FROM tbl_shift WHERE id = '$new_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->id=$row2['id'];
		$response->shift_type_id=$row2['shift_type_id'];
		$response->name=$row2['name'];
		$response->intime=$row2['intime'];
		$response->outtime=$row2['outtime'];
		$response->intime_relaxation=$row2['intime_relaxation'];
		$response->outtime_relaxation=$row2['outtime_relaxation'];
	}
	else 
	{
		$response->status="201";
	    $response->msg="Something Went Wrong";
	}
}	   		
echo json_encode($response);
mysqli_close($conn);
?>