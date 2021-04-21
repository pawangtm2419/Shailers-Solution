<?php
include 'db.php';
$query = "SELECT * FROM ess_clients ORDER BY client_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$id = $row['unq_client_id'];
	$sql=mysqli_query($conn,"SELECT count(pro_id) AS pro_no FROM ess_project WHERE client_name='$id'");
	$row1 = mysqli_fetch_assoc($sql);
    array_push($response, array("client_id"=>$row["client_id"], "unq_client_id"=>$row["unq_client_id"], "client_name"=>$row['client_name'], "client_mobile"=>$row['client_mobile'], "client_email"=>$row['client_email'], "pro_no"=>$row1['pro_no'], "status"=>$row['status']));
}
echo json_encode($response);
mysqli_close($conn);
?>