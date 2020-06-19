<?php
$gallery = ['maserati01', 'maserati02', 'maserati03', 'dodge01', 'dodge02', 'nissan01'];
var_dump(scandir('images/galleryBigImages/'));
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Gallery</title>
</head>
<body>
  <style media="screen">
    *{
      margin: 0; padding: 0; font-family: sans-serif;
    }
    .gallery_image { height: 350px; width: 500px; background-size: cover !important; background-position: center !important; margin: 10px 5px;border-radius: 15px;}
    .gallery {display: flex; flex-wrap: wrap; justify-content: center;background: #ededed;}
  </style>
<h1 style="text-align:center;padding:15px;">My Gallery of the most beautiful cars =)</h1>

  <form method="post">
    <input type="file" name="myfile">
    <input type="submit" name="load" value="Загрузить">
  </form>
<br><br>

<div class="gallery">
  <?php foreach ($gallery as $img):?>
    <a href="images/galleryBigImages/<?=$img?>.jpg" target="_blank">
      <div class="gallery_image" style="
      background: url(images/galleryBigImages/<?=$img?>.jpg);"></div>
    </a>
  <?php endforeach; ?>
</div>
</body>
</html>
