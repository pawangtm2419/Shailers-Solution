<?php
include 'db.php';
$query = "SELECT * FROM ess_lead_cate ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("id"=>$row["id"], "category_name"=>$row["category_name"], "status"=>$row['status']));
}
echo json_encode($response);
mysqli_close($conn);
?>