<?php
include('db.php');
extract($_POST);
$exp_id = $_POST['exp_id'];
$exp_type = $_POST['exp_type'];
$name = $_POST['exp_name'];
$mobile = $_POST['exp_mobile'];
$alt_mobile = $_POST['exp_alt_mobile'];
$query = "SELECT * FROM ess_expense WHERE exp_mobile = '$exp_mobile'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Expense Already Exits.";
}
else 
{
	$query1 = "UPDATE ess_expense SET exp_type='$exp_type', exp_name='$name', exp_mobile='$mobile', exp_alt_mobile='$alt_mobile', status='$status' WHERE exp_id='$exp_id'";
	$result1 = mysqli_query($conn, $query1);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Expense.";
		$query2 = "SELECT * FROM ess_expense WHERE exp_mobile='$exp_mobile'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->id=$row2['id'];
		$response->exp_id=$row2['exp_id'];
		$response->exp_type=$row2['exp_type'];
		$response->exp_name=$row2['exp_name'];
		$response->exp_mobile=$row2['exp_mobile'];
		$response->exp_alt_mobile=$row2['exp_alt_mobile'];
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