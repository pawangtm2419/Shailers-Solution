<?php
include('db.php');
extract($_POST);
$office_id = $_POST['office_id'];
$office_name = $_POST['office_name'];
$office_address = $_POST['office_address'];
$query = "SELECT * FROM tbl_office WHERE id = '$id'";
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
	$query1 = "INSERT INTO tbl_office (office_id, office_name, office_address) VALUES ('$office_id', '$office_name', '$office_address')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Shift Type.";
		$query2 = "SELECT * FROM tbl_office WHERE office_id = '$new_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->office_id=$row2['office_id'];
		$response->office_name=$row2['office_name'];
		$response->office_address=$row2['office_address'];
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