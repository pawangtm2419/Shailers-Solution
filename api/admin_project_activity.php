<?php
include 'db.php';
extract($_POST);
$id = $_POST['pro_id'];
$query = "SELECT * FROM ess_assign_activity WHERE pro_id = '$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("pro_id"=>$row["pro_id"], "activity_name"=>$row['activity_name']));
}
echo json_encode($response);
mysqli_close($conn);
?>