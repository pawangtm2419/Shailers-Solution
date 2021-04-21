<?php
include 'db.php';
$query = "SELECT * FROM ess_domain_data";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("num"=>$row["num"], "domain_name"=>$row["domain_name"], "create_date"=>$row["create_date"], "expiry_date"=>$row['expiry_date'], "domain_registrar_name"=>$row['domain_registrar_name'], "registrant_email"=>$row['registrant_email'], "comment"=>$row['comment']));
}
echo json_encode($response);
mysqli_close($conn);
?>