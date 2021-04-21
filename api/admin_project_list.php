<?php
include 'db.php';
$query = "SELECT * FROM ess_project ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_clients WHERE unq_client_id = '".$row['client_name']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_array($result1);
	$total_cost = $row['pro_cost'] + $row['gst'];
    array_push($response, array("pro_id"=>$row["pro_id"], "pro_name"=>$row['pro_name'], "pro_cost"=> $row['pro_cost'], "gst"=> $row['gst'], "total_cost"=> $total_cost, "client_name"=> $row1['client_name'], "project_comp"=> $row['project_comp'], "status"=> $row['status']));
}
echo json_encode($response);
mysqli_close($conn);
?>