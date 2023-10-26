<?php

    $name = $_POST['name'];
    $address = $_POST['address'];
    $telephone_number = $_POST['telephone_number'];
    $email = $_POST['email'];
    $instruction = $_POST['instruction'];
    $crust = $_POST['crust'];
    $toppings = $_POST['toppings'];
    $number = $_POST['number'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>result</title>
</head>
<body>
    <h1 style="text-align: center;">THANK YOU</h1>
    <hr style="border: 1px solid coral;">

    <p>
        thank you for ordering from black goose bistro. we have received the following <br>
        information about your order:
    </p>

    <dl>
        <dt style="font-weight: bold; color: coral;">your information</dt>
        <dd><span style="font-weight: bold;">name:</span> <?= $name; ?></dd>
        <dd><span style="font-weight: bold;">address:</span> <?= $address; ?></dd>
        <dd><span style="font-weight: bold;">telephone number:</span> <?= $telephone_number; ?></dd>
        <dd><span style="font-weight: bold;">email address:</span> <?= $email; ?></dd>
        <dd><span style="font-weight: bold;">delivery instruction:</span> <?= $instruction; ?></dd>
    </dl>

    <dl>
        <dt style="font-weight: bold; color: coral;">your pizza</dt>
        <dd><span style="font-weight: bold;">crust:</span> <?= $crust; ?></dd>
        <dd>
            <span style="font-weight: bold;">toppings:</span>
            <?php foreach ($toppings as $topping) { ?>
                <?= $topping; ?>,
            <?php } ?>
        </dd>
        <dd><span style="font-weight: bold;">number:</span> <?= $number; ?></dd>
    </dl>

    <hr style="border: 1px solid coral; margin-bottom: 20px;">

    <a href="/index.php" style="background: #3987c9; color: white; padding: 10px; margin: 10px 0;">back</a>
</body>
</html>
