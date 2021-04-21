<?php
include('db.php');
extract($_POST);
$id = $_POST['id'];
$office_id = $_POST['office_id'];
$department_name = $_POST['department_name'];
$type_of_department = $_POST['type_of_department'];
$query = "SELECT * FROM tbl_department WHERE id = '$id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Department Already Exits.";
}
else 
{
	$date=date('d-m-Y');
	$time=date('h:i:sa');
	$num0 = rand(100000,9.9999);
    $randnum = "LEAD".$num0 ;
	$query1 = "INSERT INTO tbl_department (office_id, department_name, type_of_department) VALUES ('$office_id', '$department_name', '$type_of_department')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Department.";
		$query2 = "SELECT * FROM tbl_department WHERE id = '$new_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->id=$row2['id'];
		$response->office_id=$row2['office_id'];
		$response->department_name=$row2['department_name'];
		$response->type_of_department=$row2['type_of_department'];
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