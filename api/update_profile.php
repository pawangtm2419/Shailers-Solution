<?php
include('db.php');
$emp_id = $_POST['emp_id'];
$alt_mobile = $_POST['alt_mobile'];
$other_email = $_POST['other_email'];
$blood_group = $_POST['blood_group'];
$image = $_POST['image'];
$query1 = "SELECT * FROM ess_employee WHERE emp_id = '$emp_id'";
$result1 = mysqli_query($conn, $query1);
if (mysqli_num_rows($result1) == 0) 
{
	$response->status="201";
    $response->msg="User Already Exists.";
}else {
	$folderPath = "../images/";
	$folderPath1 = "";
	$image_parts = explode(";base64,", $image);
	$image_type_aux = explode("image/", $image_parts[0]);
	$image_type = $image_type_aux[1];
	$image_base64 = base64_decode($image_parts[1]);
	$fileName = uniqid() . '.png';
	$Image_filename = $folderPath . $fileName;
	$Image_filename1 = $folderPath1 . $fileName;
			if(file_put_contents($Image_filename, $image_base64)!="")
            {
            $query2 = "UPDATE ess_employee SET `alt_mobile`='$alt_mobile', `other_email`='$other_email', `blood_group`='$blood_group', `image`='$Image_filename1' WHERE emp_id = '$emp_id'";
				$result2 = mysqli_query($conn,$query2);
		    }
		    else{
		    	$query2 = "UPDATE ess_employee SET `alt_mobile`='$alt_mobile', `other_email`='$other_email', `blood_group`='$blood_group' WHERE emp_id = '$emp_id'";
				$result2 = mysqli_query($conn, $query2);
		    }
			if($result2) 
			{
				$query = mysqli_query($conn,"SELECT * FROM ess_employee WHERE emp_id = '$emp_id'");
				$row = mysqli_fetch_assoc($query);
			    $response->status="200";
			    $response->msg="You have successfully Update Your Profile.";
			    $response->emp_id=$row['emp_id'];
				$response->alt_mobile=$row['alt_mobile'];
				$response->other_email=$row['other_email'];
				$response->blood_group=$row['blood_group'];
			    $response->image=$row['image'];
			}else {
				$response->status="201";
			    $response->msg="Something Went Wrong";
			}
}	   		
echo json_encode($response);
mysqli_close($conn);
?>