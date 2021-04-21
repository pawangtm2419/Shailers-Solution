<?php
include('db.php');
extract($_POST);
$emp_id = $_POST['emp_id'];
$office_id = $_POST['office_id'];
$department_id = $_POST['department_id'];
$shift_id = $_POST['shift_id'];
$name = $_POST['emp_name'];
$desg = $_POST['emp_desg'];
$mobile = $_POST['emp_mobile'];
$email = $_POST['emp_email'];
$gen = $_POST['gender'];
$dob = $_POST['dob'];
$doj = $_POST['doj'];
$sal = $_POST['salary'];
$acc_no = $_POST['acc_no'];
$bank_name = $_POST['bank_name'];
$ifsc = $_POST['ifsc_code'];
$module = $_POST['authorised_module'];
$mon_target = $_POST['mon_target'];
$insentive = $_POST['insentive'];
$bonus = $_POST['bonus'];
$pass = trim('12345');
$password = sha1($pass);
$query = "SELECT * FROM ess_employee WHERE emp_id = '$emp_id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Employee Already Exits.";
}
else 
{
	$num0 = rand(1000000,9.99999);
    $randnum = "EMP".$num0;
	$query1 = "INSERT INTO ess_employee (emp_id, office_id, department_id, shift_id, emp_name, emp_desg, emp_mobile, emp_email, gender, dob, doj, salary, acc_no, bank_name, ifsc_code, pass, authorised_module, mon_target, insentive, bonus) VALUES ('$randnum', '$office_id', '$department_id', '$shift_id', '$name', '$desg', '$mobile', '$email', '$gen', '$dob', '$doj', '$sal', '$acc_no', '$bank_name', '$ifsc', '$password', '$module', '$mon_target', '$insentive', '$bonus')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Employee.";
		$query2 = "SELECT * FROM ess_employee WHERE id = '$new_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->id=$row2['id'];
		$response->emp_id=$row2['emp_id'];
		$response->office_id=$row2['office_id'];
		$response->department_id=$row2['department_id'];
		$response->shift_id=$row2['shift_id'];
		$response->emp_name=$row2['emp_name'];
		$response->emp_desg=$row2['emp_desg'];
		$response->emp_mobile=$row2['emp_mobile'];
		$response->emp_email=$row2['emp_email'];
		$response->gender=$row2['gender'];
		$response->dob=$row2['dob'];
		$response->doj=$row2['doj'];
		$response->salary=$row2['salary'];
		$response->acc_no=$row2['acc_no'];
		$response->bank_name=$row2['bank_name'];
		$response->ifsc_code=$row2['ifsc_code'];
		$response->authorised_module=$row2['authorised_module'];
		$response->mon_target=$row2['mon_target'];
		$response->insentive=$row2['insentive'];
		$response->bonus=$row2['bonus'];
	}
	else 
	{
		$response->status="201";
	    $response->msg="Something Went Wrong";
	}
}	   		
echo json_encode($response);
mysqli_close($conn);
?>