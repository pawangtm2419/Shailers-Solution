<?php
include 'db.php';
$id = $_POST['emp_id'];
$query = "SELECT * FROM ess_employee where emp_id = '$id'";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("emp_id"=> $row['emp_id'],"emp_name"=> $row['emp_name'], "office_id"=> $row['office_id'], "department_id"=> $row['department_id'], "shift_id"=> $row['shift_id'],  "emp_desg"=> $row['emp_desg'], "gender"=> $row['gender'], "emp_mobile"=> $row['emp_mobile'], "alt_mobile"=> $row['alt_mobile'], "emp_email"=> $row['emp_email'], "other_email"=> $row['other_email'], "dob"=> $row['dob'], "doj"=> $row['doj'], "blood_group"=> $row['blood_group'], "salary"=> $row['salary'], "acc_no"=> $row['acc_no'], "bank_name"=> $row['bank_name'], "ifsc_code"=> $row['ifsc_code'], "status"=> $row['status']));
}
echo json_encode($response);
mysqli_close($conn);
?>