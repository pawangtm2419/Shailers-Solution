<?php
include 'db.php';
$query = "SELECT * FROM ess_lead_customer WHERE status = 1 ORDER BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
	$query1 = "SELECT * FROM ess_lead_cate WHERE id = '".$row['category']."'";
	$result1 = mysqli_query($conn,$query1);
	$row1 = mysqli_fetch_assoc($result1);
    array_push($response, array("id"=>$row["id"], "cus_id"=>$row["cus_id"], "cus_name"=>$row['cus_name'], "mobile"=>$row['mobile'], "mobile"=>$row['mobile'], "category_name"=>$row1['category_name'], "lead_feedback"=>$row['lead_feedback'], "remind_date"=>$row['remind_date']));
}
echo json_encode($response);
mysqli_close($conn);
?>