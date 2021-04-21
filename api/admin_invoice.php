<?php
include 'db.php';
$pro_id = $_POST['pro_id'];
$invoice_id = $_POST['invoice_id'];
echo "SELECT * FROM ess_invoice WHERE pro_id = '$pro_id' AND invoice_id = '$invoice_id'";
$query = "SELECT * FROM ess_invoice WHERE pro_id = '$pro_id' AND invoice_id = '$invoice_id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	// $query1 = "SELECT * FROM ess_project WHERE pro_id = '".$row['pro_id']."'";
	// $result1 = mysqli_query($conn,$query1);
	// $row1 = mysqli_fetch_array($result1);
    array_push($response, array("id"=>$row["id"], "pro_id"=>$row["pro_id"], "invoice_id"=>$row["invoice_id"], "mobile"=>$row['mobile'], "invoice_date"=> $row['invoice_date']));
}
echo json_encode($response);
mysqli_close($conn);
?>