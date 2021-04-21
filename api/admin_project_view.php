<?php
include 'db.php';
$id = $_POST['pro_id'];
$query = "SELECT * FROM ess_project where pro_id = '$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_clients WHERE unq_client_id = '".$row['client_name']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_array($result1);
    array_push($response, array("pro_name"=> $row['pro_name'], "pro_desc"=> $row['pro_desc'], "client_name"=> $row1['client_name'], "client_mobile"=> $row['client_mobile'], "client_email"=> $row['client_email'], "pro_cost"=> $row['pro_cost'], "gst"=> $row['gst'], "gst_cal"=> $row['gst_cal'], "payment_status"=> $row['advance'], "project_status"=> $row['status']));
}
echo json_encode($response);
mysqli_close($conn);
?>