<?php
/*  auth:tb
	use: 人脸识别生成在对应图片内对应位置的空白图片提供给前端

*/ 
//header("content-Type: text/html; charset=Utf-8"); 
header('Content-Type: application/json; charset=utf-8');

$id = $_REQUEST['id'];
//$db = mysql_connect('127.0.0.1','games','games1014ooc');
$db = mysql_connect('127.0.0.1','root','');
mysql_select_db('games',$db);
$query = "select * from heka_congra where shortcode = '".$id."'";
$result = mysql_query($query,$db);
$row=mysql_fetch_array($result);
if(!empty($row)){
	$data['id'] = $row['id'];
	$data['shortcode'] = $row['shortcode'];
	$data['image_url'] = unserialize($row['image_url']);
	$data['congratulation'] = unserialize($row['congratulation']);
	die(json_encode($data));
	} 
?>