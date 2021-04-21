<?php
    include 'db.php';
    $id = isset($_POST['employeeID']);
    if($id) {
        $query = "SELECT * FROM ess_employee where emp_id = '$id'";
        $response = [];
        if($result = mysqli_query($conn, $query)) {
            $i = 0;
            while($row = mysqli_fetch_array($result)) {
                $response[$i]['id']    = $row['emp_id'];
                $response[$i]['model'] = $row['department_id'];
                $response[$i]['price'] = $row['emp_name'];
                $response[$i]['model'] = $row['emp_desg'];
                $response[$i]['price'] = $row['emp_mobile'];
                $response[$i]['model'] = $row['alt_mobile'];
                $response[$i]['price'] = $row['other_email'];
                $response[$i]['model'] = $row['gender'];
                $response[$i]['price'] = $row['dob'];
                $response[$i]['model'] = $row['doj'];
                $response[$i]['model'] = $row['blood_group'];
                $response[$i]['price'] = $row['image'];
                $response[$i]['model'] = $row['user_type'];
                $response[$i]['price'] = $row['status'];
                $i++;
            }
            echo json_encode(['data'=>$response]);
        } else {
            http_response_code(404);
        }    
    } else {
        ?>
            {"status":"false", "msg":"Post Only."}
        <?php
    }    
    mysqli_close($conn);
?>
