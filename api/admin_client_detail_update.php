<?php
include('db.php');
extract($_POST);
$client_id = $_POST['client_id'];
$status = $_POST['status'];
$query = "SELECT * FROM ess_clients WHERE client_id = '$client_id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$query1 = "UPDATE ess_clients SET status='$status' WHERE client_id='$client_id'";
	$result1 = mysqli_query($conn, $query1);
	if($result1) 
	{
		$response->msg="You have successfully Update Client.";
		$response->status="200";
		$query2 = "SELECT * FROM ess_clients WHERE client_id = '$client_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->client_id=$row2['client_id'];
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