<!doctype html>

<html lang="en">
<head>
<?php include '../../header.php'; ?>
<title>Ash's Home </title>


<?php 


 if(isset($_POST["author"]) && isset($_POST["quote"])){

  $author = $_POST["author"] ." - " ;
  $quote = "\"" .$_POST["quote"] ."\"";
  

 }

?>

<style>

.author-output {
  font-weight: bold;
}

.quote-output {
  font-style: italic;
}

</style>

</head>

<body>
  <?php include '../../title.php'; ?>

<div class="body">
<p><img src="" class="picture" />
<span class="author-output"><?= $author ?></span>
<span class="quote-output"><?= $quote ?></span>

</p>


<h2>Enter author and quote:</h2>
<form action="index.php" method="post">
<p>Author: <input type="text" name="author" class="author" required></p>
<p>Quote: <input type="text" name="quote" class="quote" required></p>

<input type="submit" value="Generate Quote" class="submitButton">
</form>

</div>
<footer> 
<?php include "../../footer.php" ?>

<script src="./live-quote.js"></script>

</footer>


</footer>
</body>


</html>



