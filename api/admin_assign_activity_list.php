<?php
include 'db.php';
$query = "SELECT * FROM ess_assign_activity ORDER BY activity_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_project WHERE pro_id = '".$row['pro_id']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_assoc($result1);
    array_push($response, array("activity_id"=>$row["activity_id"], "pro_id"=>$row["pro_id"], "pro_name"=>$row1["pro_name"], "activity_name"=>$row["activity_name"]));
}
echo json_encode($response);
mysqli_close($conn);
?>