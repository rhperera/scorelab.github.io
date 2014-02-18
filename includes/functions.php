<?php
	// This file is the place to store all basic functions

	function confirm_query($result_set) {
		if (!$result_set) {
			die("Database query failed: " . mysql_error());
		}
	}
	
	function get_all_articles() {
		global $connection;
		$query = "SELECT * 
				FROM articles ";
		$article_set = mysql_query($query, $connection);
		confirm_query($article_set);
		return $article_set;
	}
	
	
	function get_article_by_id($article_id) {
		global $connection;
		$query = "SELECT * ";
		$query .= "FROM articles ";
		$query .= "WHERE article_id=" . $article_id ." ";
		$query .= "LIMIT 1";
		$result_set = mysql_query($query, $connection);
		confirm_query($result_set);
		// REMEMBER:
		// if no rows are returned, fetch_array will return false
		if ($article = mysql_fetch_array($result_set)) {
			return $article;
		} else {
			return NULL;
		}
	}
?>