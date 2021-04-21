<?php
include 'db.php';
$query = "SELECT * FROM ess_admin_profile";
$result = mysqli_query($conn,$query);
$response = array();
while($row = mysqli_fetch_array($result))
{
    array_push($response, array("username"=>$row["username"], "name"=>$row["name"], "mobile"=>$row['mobile'],"alt_mobile"=>$row["alt_mobile"], "email_1"=>$row["email_1"], "email_2"=>$row['email_2'],"email_3"=>$row["email_3"], "email_4"=>$row["email_4"], "dob"=>$row['dob'],"comp_name"=>$row["comp_name"], "comp_url"=>$row["comp_url"], "comp_logo"=>$row['comp_logo'],"comp_stamp"=>$row["comp_stamp"], "reg_state"=>$row["reg_state"], "reg_city"=>$row['reg_city'],"reg_building"=>$row["reg_building"], "reg_pincode"=>$row["reg_pincode"], "cor_state"=>$row['cor_state'],"cor_city"=>$row["cor_city"], "cor_building"=>$row["cor_building"], "cor_pincode"=>$row['cor_pincode'], "gstin"=>$row['gstin'],"pan_no"=>$row["pan_no"], "reg_pincode"=>$row["reg_pincode"], "acc_holder_1"=>$row['acc_holder_1'],"bank_name_1"=>$row["bank_name_1"], "account_number_1"=>$row["account_number_1"], "ifsc_code_1"=>$row['ifsc_code_1'], "micr_code_1"=>$row['micr_code_1'],"acc_holder_2"=>$row["acc_holder_2"], "bank_name_2"=>$row["bank_name_2"], "account_number_2"=>$row['account_number_2'], "ifsc_code_2"=>$row['ifsc_code_2'], "micr_code_2"=>$row['micr_code_2'],"timestamp"=>$row["timestamp"]));
} 
echo json_encode($response);
mysqli_close($conn);
?>