<?php
include 'db.php';
$query = "SELECT * FROM ess_activities ORDER BY act_id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$row1 = mysqli_fetch_array($result1);
    array_push($response, array("act_id"=>$row["act_id"], "activity_name"=>$row["activity_name"]));
}
echo json_encode($response);
mysqli_close($conn);
?>