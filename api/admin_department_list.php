<?php
include 'db.php';
$id = $_POST['id'];
$query = "SELECT * FROM tbl_department Order BY id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("office_id"=>$row["office_id"], "department_name"=>$row["department_name"], "type_of_department"=>$row['type_of_department']));
} 
echo json_encode($response);
mysqli_close($conn);
?>