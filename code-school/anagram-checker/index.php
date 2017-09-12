<!doctype html>

<html lang="en">
<head>
<?php include '../../header.php'; ?>
<title>Ash's Home </title>


<?php 
  
  $result = "";

  if(isset($_POST["string1"]) && isset($_POST["string2"])){

    //Convert the POSTed string to lowercase.
    $string1 = strtolower($_POST["string1"]);

    //Split string into an array of characters
    $string1split = str_split($string1);

    //Sort the array of characters
    sort($string1split);

    //Turn the array back into a string
    $string1sorted = implode('', $string1split);

     //Convert the POSTed string to lowercase.
    $string2 = strtolower($_POST["string2"]);

    //Split string into an array of characters
    $string2split = str_split($string2);

    //Sort the array of characters
    sort($string2split);

    //Turn the array back into a string
    $string2sorted = implode('', $string2split);

    if($string1sorted == $string2sorted){
      $result = $_POST["string1"] ." and ".$_POST["string2"] . " ARE anagrams!";
    }
    else {
      $result = $_POST["string1"] ." and ".$_POST["string2"] . " ARE NOT anagrams!";
    }


  }


?>


</head>

<body>

<?php include '../../title.php'; ?>

<div class="body">

 
<span class="result"><?= $result; ?> </span>
<h2>Enter your two strings:</h2>

<form action="index.php" method="post">
<p>String 1: <input type="text" name="string1" class="string1" required></input></p>
<p>String 2: <input type="text" name="string2" class="string2" required></input></p>

<input type="submit" value="Check for Anagram" class="submitButton"></input>
</form>

</div>
<footer> 
<?php include "../../footer.php" ?>

<script src="./enhanced-anagram.js"></script>

</footer>

</body>


</html>



