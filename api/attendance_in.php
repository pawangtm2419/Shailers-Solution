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
$att_intime = $_POST['att_intime'];
$att_indate = $_POST['att_indate'];
$pic_intime = $_POST['pic_intime'];
$folderPath = "../attendance-img/";
$folderPath1 = "attendance-img/";
$image_parts = explode(";base64,", $pic_intime);
$image_type_aux = explode("image/", $image_parts[0]);
$image_type = $image_type_aux[1];
$image_base64 = base64_decode($image_parts[1]);
$fileName = uniqid() . '.png';
$Image_filename = $folderPath . $fileName;
$Image_filename1 = $folderPath1 . $fileName;
$query = "SELECT * FROM ess_attendance WHERE emp_id = '$emp_id' AND att_indate = '$att_indate'";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) 
{
	$response->status="201";
    $response->msg="User Already Attendance In.";
}
else {
	if( file_put_contents($Image_filename, $image_base64)!="")
    {
      $query1=mysqli_query($conn,"SELECT count(*) as total from ess_attendance where  emp_id = '$emp_id' and att_indate='$temp_date'  AND att_intime IS NOT NULL");
      $number_count=mysqli_fetch_array($query1);
	  if ($number_count['total'] <= 0) 
      {
        $query2=mysqli_query($conn,"INSERT INTO ess_attendance (`emp_id`, `att_intime`, `att_indate`, `pic_intime`, `ip`) values('$emp_id', '$att_intime', '$att_indate', '$Image_filename1', '$ip_address')");
	  }
	}
	if($query2) 
	{
		$query3 = mysqli_query($conn,"SELECT * FROM ess_attendance WHERE emp_id = '$emp_id' AND att_indate = '$att_indate'");
		$row = mysqli_fetch_array($query3);
		$response->status="200";
		$response->msg="You have successfully Attendance In.";
		$response->id=$row['id'];
		$response->emp_id=$row['emp_id'];
		$response->att_intime=$row['att_intime'];
		$response->att_indate=$row['att_indate'];
		$response->pic_intime=$row['pic_intime'];
		$response->ip=$row['ip'];
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