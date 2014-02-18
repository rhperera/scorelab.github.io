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
	$sel_article=get_article_by_id($sel_arti);
?>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>

		<?php

		$article_set = get_all_articles();

		while ($article = mysql_fetch_array($article_set)) {
			
			$page_set = mysql_query("SELECT * FROM articles WHERE article_id = {$article["article_id"]}", $connection);
			if (!$page_set) {
				die("Database query failed: " . mysql_error());
			}

			
			while ($page = mysql_fetch_array($article)) {
							echo "<a href=\"upcoming.html\" onclick=\"view_events.php\">"."</a>"."<h2>".$sel_article["title"]."</h2>"." "."<p>".$sel_article["content"]."</p>";

			}
			
		}
		?>
</body>
</html>
<?php require("includes/footer.php"); ?>