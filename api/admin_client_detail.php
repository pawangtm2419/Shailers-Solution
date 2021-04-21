<?php
include 'db.php';
$unq_client_id = $_POST['unq_client_id'];
$query = "SELECT * FROM ess_clients WHERE status = 1 AND unq_client_id='$unq_client_id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("unq_client_id"=>$row["unq_client_id"], "client_name"=>$row['client_name'], "client_mobile"=>$row["client_mobile"], "client_email"=>$row['client_email']));
}
echo json_encode($response);
mysqli_close($conn);
?>