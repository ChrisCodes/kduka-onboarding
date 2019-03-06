<?php


	// get current step
	$step = 1;

	if(isset($_GET["step"]) && !empty($_GET["step"] && is_numeric($_GET["step"])) ) {

		$step = $_GET["step"];

	}



	// evaluate step - set variables
	$step_pages = ["step_1.php", "step_2.php", "step_3.php"];

	$step_titles = ["Create an Online Shop today - KDuka",
					"Select Shop Category - KDuka",
					"Pick a Theme - KDuka"];

	$step_descs = ["KDuka makes selling online easy. Create your shop to start getting orders.",
					"What are you selling? Select your shops Category",
					"Pick a theme to style your KDuka. You can change this any time in the future."];

	$step_page = $step_pages[$step-1];
	$page_title = $step_titles[$step-1];
	$page_desc = $step_descs[$step-1];




?>



<!DOCTYPE html>
<html>
<head>
	<title><?php echo $page_title; ?></title>
	<meta name="description" content="<?php echo $page_desc; ?>">

	<?php include("includes/head.php"); ?>

</head>
<body>

<?php 

	// site header + nav
	include("includes/header.php");


	// shop slidein
	include("includes/shop-slidein.php");

	// current page
	include("includes/".$step_page); 

	// foot scripts
	include("includes/foot.php"); 

?>



</body>
</html>