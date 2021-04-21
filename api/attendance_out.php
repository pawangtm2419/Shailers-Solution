<?php
include('db.php');
if (!empty($_SERVER['HTTP_CLIENT_IP']))   
  {
    $ip_address = $_SERVER['HTTP_CLIENT_IP'];
  }
//whether ip is from proxy
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))  
  {
    $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }
//whether ip is from remote address
else
  {
    $ip_address = $_SERVER['REMOTE_ADDR'];
  }
$id = $_POST['id'];
$emp_id = $_POST['emp_id'];
$att_outtime = $_POST['att_outtime'];
$att_outdate = $_POST['att_outdate'];
$pic_outtime = $_POST['pic_outtime'];
$folderPath = "../attendance-img/";
$folderPath1 = "attendance-img/";
$image_parts = explode(";base64,", $pic_outtime);
$image_type_aux = explode("image/", $image_parts[0]);
$image_type = $image_type_aux[1];
$image_base64 = base64_decode($image_parts[1]);
$fileName = uniqid() . '.png';
$Image_filename = $folderPath . $fileName;
$Image_filename1 = $folderPath1 . $fileName;
$query = "SELECT * FROM ess_attendance WHERE emp_id = '$emp_id' AND att_outdate='$att_outdate'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="User Already Attendance Out.";
}else {
	if( file_put_contents($Image_filename, $image_base64)!="")
    {         
		$query1 = "UPDATE ess_attendance SET `att_outtime`='$att_outtime', `att_outdate`='$att_outdate', `pic_outtime`='$Image_filename1', ip='$ip_address'  WHERE id = '$id' AND emp_id = '$emp_id'";
		$result1 = mysqli_query($conn,$query1);
	}
	if($result1) 
	{
		$query3 = mysqli_query($conn,"SELECT * FROM ess_attendance WHERE emp_id = '$emp_id' AND att_outdate='$att_outdate'");
		$row = mysqli_fetch_array($query3);
	    $response->status="200";
	    $response->msg="You have successfully Attendance Out.";
		$response->emp_id=$row['emp_id'];
		$response->att_outtime=$row['att_outtime'];
		$response->att_outdate=$row['att_outdate'];
		$response->pic_outtime=$row['pic_outtime'];
		$response->ip=$row['ip'];
	}else {
		$response->status="201";
	    $response->msg="Something Went Wrong";
	}
}	   		
echo json_encode($response);
mysqli_close($conn);
?>