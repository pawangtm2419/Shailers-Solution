<?php
include('db.php');
extract($_POST);
$id = $_POST['exp_entry_id'];
$exp_type = $_POST['exp_type'];
$exp_date = $_POST['exp_date'];
$exp_paid = $_POST['exp_paid'];
$query = "SELECT * FROM ess_expense_entry WHERE exp_entry_id = '$exp_entry_id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Expense Entry Already Exits.";
}
else 
{
	$query1 = "INSERT INTO ess_expense_entry (exp_type, exp_date, exp_paid) VALUES ('$exp_type', '$exp_date', '$exp_paid')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Expense Entry.";
		$query2 = "SELECT * FROM ess_expense_entry WHERE exp_entry_id = '$new_id' AND exp_type = '$exp_type'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->exp_entry_id=$row2['exp_entry_id'];
		$response->exp_type=$row2['exp_type'];
		$response->exp_date=$row2['exp_date'];
		$response->exp_paid=$row2['exp_paid'];
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