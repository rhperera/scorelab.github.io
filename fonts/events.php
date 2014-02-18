<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<?php require_once("includes/connection.php"); ?>
<?php require_once("includes/functions.php"); ?>
<?php
	if(isset($_GET['article'])){
		$sel_arti=$_GET['article'];
	}else{
		$sel_arti="";
	}
	
?>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>

  <h2>Upcoming Events</h2>
  <br />
  <ul class="title" >
  <?php

				$article_set = get_all_articles();


		while ($article = mysql_fetch_array($article_set)) {
			echo "<li><a href=\"?article=".($article['article_id'])."\">".$article["title"]."</a></li>";
		}
		

	?>
	</ul>
	
</body>
</html>
<?php mysql_close($connection); ?>