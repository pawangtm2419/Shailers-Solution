<?php
include('db.php');
extract($_POST);
$category_name = trim($_POST['category_name']);
$status = $_POST['status'];
$query = "SELECT * FROM ess_lead_cate WHERE category_name='$category_name'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="Lead Category Name Already Exits.";
}
else 
{
	$query1 = "INSERT INTO ess_lead_cate (category_name, status) VALUES ('$category_name', '$status')";
	$result1 = mysqli_query($conn, $query1);
	$new_id = mysqli_insert_id($conn);
	if($result1) 
	{
		$response->status="200";
		$response->msg="You have successfully Add Lead Category Name.";
		$query2 = "SELECT * FROM ess_lead_cate WHERE id = '$new_id'";
		$result2 = mysqli_query($conn, $query2);
		$row2 = mysqli_fetch_assoc($result2);
		$response->id=$row2['id'];
		$response->category_name=$row2['category_name'];
		$response->status=$row2['status'];
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