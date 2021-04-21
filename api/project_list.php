<?php
include 'db.php';
$id = $_POST['emp_id'];
$query = "SELECT * FROM ess_assign_project INNER JOIN ess_project where ess_assign_project.pro_id=ess_project.pro_id and ess_assign_project.emp_id='$id' order by ess_assign_project.id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("pro_id"=>$row["pro_id"], "pro_name"=>$row['pro_name'], "gst"=> $row['gstt'], "pro_cost"=> $row['pro_cost'], "pro_cost"=> $row['pro_cost'], "end_date"=> $row['end_date'], "comp_status"=> $row['comp_status']));
}
echo json_encode($response);
mysqli_close($conn);
?>