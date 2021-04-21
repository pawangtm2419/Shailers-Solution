<?php
include 'db.php';
$id = $_POST['emp_id'];
$date = $_POST['att_indate'];
$query = "SELECT *  FROM ess_attendance WHERE emp_id ='$id' AND att_indate = '$date' order by id DESC";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("emp_id"=>$row['emp_id'], "att_intime"=> $row['att_intime'], "att_outtime"=> $row['att_outtime'], "att_indate"=> $row['att_indate'], "att_outdate"=> $row['att_outdate'], "pic_intime"=> $row['pic_intime'], "pic_outtime"=> $row['pic_outtime']));
}
echo json_encode($response);
mysqli_close($conn);
?>