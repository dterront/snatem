<?php
include("configLC.php");
include ($jpgraphPath."jpgraph.php");
include ($jpgraphPath."jpgraph_line.php");

//*************************************************/
// This function converts a date formatted as ddmmyyyy into an iso date as yyyymmdd
function convertDateEuroToIso($theString){
	//First delimiter to be searched
	$delimiter = "-";
	//string is splited into an array
	$splitcontents = explode($delimiter, $theString);

	$counter = 0;

	foreach ( $splitcontents as $data )
	{

		$counter=$counter + 1;
		if ($counter == 1)
			$day = $data;
		if ($counter == 2)
			$month = $data;
		if ($counter == 3)
			$year = $data;
	}

	$finalDate = $year . "-" . $month . "-" . $day;

return $finalDate;
}


?>
