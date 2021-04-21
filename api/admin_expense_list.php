<?php
include 'db.php';
$query = "SELECT * FROM ess_expense ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$row1 = mysqli_fetch_array($result1);
    array_push($response, array("id"=>$row["id"], "exp_id"=>$row["exp_id"], "exp_type"=>$row["exp_type"], "exp_name"=>$row['exp_name'], "exp_mobile"=> $row['exp_mobile'], "exp_alt_mobile"=> $row['exp_alt_mobile']));
}
echo json_encode($response);
mysqli_close($conn);
?>