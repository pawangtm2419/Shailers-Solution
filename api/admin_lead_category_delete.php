<?php
include('db.php');
extract($_POST);
$id = $_POST['id'];
$query = "DELETE FROM ess_lead_cate WHERE id='$id'";
$result = mysqli_query($conn, $query);
if ($result) 
{
	$response->status="200";
    $response->msg="You have successfully Delete Lead Category Name.";
}
else 
{
	$response->status="201";
	$response->msg="Something Went Wrong.";
}	   		
echo json_encode($response);
mysqli_close($conn);
?>