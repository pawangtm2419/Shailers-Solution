<?php
include 'db.php';
$dat = date('d-m-Y');
$query = "SELECT count(cus_id) AS converted_lead FROM ess_lead_customer";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("Converted Lead"=>$row['converted_lead']));
}
echo json_encode($response);
mysqli_close($conn);
?>