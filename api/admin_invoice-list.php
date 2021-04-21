<?php
include 'db.php';
$query = "SELECT * FROM ess_invoice ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_project WHERE pro_id = '".$row['pro_id']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_array($result1);
    array_push($response, array("id"=>$row["id"], "pro_name"=>$row1["pro_name"], "client_name"=>$row["client_name"], "invoice_amnt"=>$row['invoice_amnt'], "invoice_date"=> $row['invoice_date']));
}
echo json_encode($response);
mysqli_close($conn);
?>