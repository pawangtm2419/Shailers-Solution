<?php
include 'db.php';
$dat = date('d-m-Y');
$query = "SELECT count(cus_id) AS total_lead FROM ess_lead_customer";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("Total Lead"=>$row['total_lead']));
}
echo json_encode($response);
mysqli_close($conn);
?>