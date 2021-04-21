<?php
include 'db.php';
$query = "SELECT * FROM ess_clients WHERE status = 1 ORDER BY client_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("unq_client_id"=>$row["unq_client_id"], "client_name"=>$row['client_name']));
}
echo json_encode($response);
mysqli_close($conn);
?>