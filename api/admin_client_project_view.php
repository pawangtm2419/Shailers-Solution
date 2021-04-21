<?php
include 'db.php';
extract($_POST);
$client_id = $_POST['client_id'];
$query = "SELECT * FROM ess_clients WHERE client_id = $client_id AND status = 1 ORDER BY client_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$unq_client_id = $row["unq_client_id"];
	$query1 = "SELECT * FROM ess_project WHERE client_name = '$unq_client_id'";
	$result1 = mysqli_query($conn,$query1);
	while($row1 = mysqli_fetch_array($result1)){
    	array_push($response, array("pro_name"=> $row1['pro_name'], "pro_desc"=> $row1['pro_desc'], "client_name"=> $row1['client_name'], "client_mobile"=> $row1['client_mobile'], "client_email"=> $row1['client_email'], "pro_cost"=> $row1['pro_cost'], "gst"=> $row1['gst'], "gst_cal"=> $row1['gst_cal'], "payment_status"=> $row1['advance'], "project_status"=> $row1['status']));
    }
}
echo json_encode($response);
mysqli_close($conn);
?>