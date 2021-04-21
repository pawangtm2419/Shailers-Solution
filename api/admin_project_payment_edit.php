<?php
include('db.php');
extract($_POST);
$payment_id = $_POST['payment_id'];
$pro_id = $_POST['pro_id'];
$pro_amount = $_POST['pro_amount'];
$payment_type = $_POST['payment_type'];
$payment_date = $_POST['payment_date'];
$query = "SELECT * FROM ess_project_payment WHERE pro_id='$pro_id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) < 0) 
{
	$response->status="201";
    $response->msg="Payment Already Updated.";
}
else 
{
	$num1 = rand(100000,9.9999);
    $pay_id = "PAY".$num1;
	$query1 = "INSERT INTO ess_project_payment (payment_id, pro_id, pro_amount, payment_type, payment_date) VALUES ('$pay_id', '$pro_id', '$amount', '$amt_type', '$amt_date')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->msg="You have successfully Add Payment.";
		$query2 = "SELECT * FROM ess_project_payment WHERE id = '$new_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->id=$row2['id'];
		$response->payment_id=$row2['payment_id'];
		$response->pro_id=$row2['pro_id'];
		$response->pro_amount=$row2['pro_amount'];
		$response->payment_type=$row2['payment_type'];
		$response->payment_date=$row2['payment_date'];
		$response->status=$row2['status'];
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