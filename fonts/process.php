<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<?php
		// 1. Create a database connection
	//		(Use your own servername, username and password if they are different.)
	//		$connection allows us to keep refering to this connection after it is established
	$connection = mysql_connect("localhost","root",""); 
	if (!$connection) {
		die("Database connection failed: " . mysql_error());
	}

	// 2. Select a database to use 
	$db_select = mysql_select_db("proelite",$connection);
	if (!$db_select) {
		die("Database selection failed: " . mysql_error());
	}
?>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Process</title>
</head>

<body>
	<?php
		$name		=	$_POST['name'];
		$tp			=	$_POST['telephone'];
		$email		=	$_POST['email'];
		$event		=	$_POST['event'];
		$eventdate	=	$_POST['eventdate'];
		$msg		=	$_POST['message'];
	?>
    
	<?php
	$query = "INSERT INTO event_info (
				 name, tp, email, event, event_date, message
			) VALUES (
				'$name', '$tp', '$email' , '$event', '$eventdate', '$msg'
			)";
	$result = mysql_query($query, $connection);
	if ($result) {
		// Success!
		header("Location: thankyou.html");
		exit;
	} else {
		// Display error message.
		echo "<p>Event Submission Failed.</p>";
		echo "<p>" . mysql_error() . "</p>";
	}
	?>
</body>
</html>
<?php mysql_close($connection); ?>