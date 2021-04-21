<?php
include 'db.php';
$query = "SELECT * FROM ess_expense_entry ORDER BY exp_entry_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = mysqli_query($conn,"SELECT * FROM ess_expense WHERE exp_id = '".$row['exp_type']."'");
	$row1 = mysqli_fetch_assoc($query1);
    array_push($response, array("exp_entry_id"=>$row["exp_entry_id"], "exp_type"=>$row1["exp_type"], "exp_date"=>$row["exp_date"], "exp_paid"=> $row['exp_paid'], "timestamp"=>$row['timestamp']));
}
echo json_encode($response);
mysqli_close($conn);
?>