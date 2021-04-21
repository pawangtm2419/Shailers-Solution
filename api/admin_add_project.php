<?php
include('db.php');
extract($_POST);
$query = "SELECT * FROM ess_project WHERE pro_id='$pro_id'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Project Already Exits.";
}
else 
{
	$num0 = rand(100000,9.9999);
	$randnum = "PRO".$num0 ;
	$date=date('d-m-Y');
	$str_date = $_POST['pro_strt_date'];
	$end_date = $_POST['pro_end_date'];
	$query1 = "INSERT INTO ess_project (pro_id, pro_type, pro_name, pro_desc, client_name, client_mobile, client_email, pro_strt_date, pro_end_date, pro_cost, gstt, gst, gst_cal, advance, advance_money, advance_type, advance_date, work_order_date) VALUES ('$randnum', '$pro_type', '$pro_name', '$pro_desc', '$client_name', '$client_mobile', '$client_email', '$str_date', '$end_date', '$pro_cost', '$gstt', '$gst', '$gst_cal', '$advance', '$advance_money', '$advance_type', '$advance_date','$date')";
	$result1 = mysqli_query($conn, $query1);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Project.";
		$query2 = "SELECT * FROM ess_project WHERE pro_id = '$randnum'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->pro_id=$row2['pro_id'];
		$response->pro_type=$row2['pro_type'];
		$response->pro_name=$row2['pro_name'];
		$response->pro_desc=$row2['pro_desc'];
	    $response->client_name=$row2['client_name'];
	    $response->client_mobile=$row2['client_mobile'];
		$response->client_email=$row2['client_email'];
		$response->pro_strt_date=$row2['pro_strt_date'];
		$response->pro_end_date=$row2['pro_end_date'];
	    $response->pro_cost=$row2['pro_cost'];
	    $response->gstt=$row2['gstt'];
	    $response->gst=$row2['gst'];
	    $response->gst_cal=$row2['gst_cal'];
		$response->advance=$row2['advance'];
		$response->advance_money=$row2['advance_money'];
		$response->advance_type=$row2['advance_type'];
	    $response->advance_date=$row2['advance_date'];
	    $response->work_order_date=$row2['work_order_date'];
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