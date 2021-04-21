<?php
include('db.php');
extract($_POST);
$act_id = $_POST['act_id'];
$query = "DELETE FROM ess_activities WHERE act_id='$act_id'";
$result = mysqli_query($conn, $query);
if ($result) 
{
	$response->status="200";
    $response->msg="You have successfully Delete Activity Name.";
}
else 
{
	$response->status="201";
	$response->msg="Something Went Wrong.";
}	   		
echo json_encode($response);
mysqli_close($conn);
?>