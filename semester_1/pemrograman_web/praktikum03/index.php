<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizza</title>
</head>
<body>
    <h1 style="font-weight: bold;">Black Goose Bistro | Pizza on-demand</h1>

    <p>
        our 12 wood-fired pizzas are available for delivery. build your <br />
        custom pizza and we'll deliver it within an hour.
    </p>

    <p>Your Information</p>

    <form action="/result.php" method="post">
        <div style="margin-bottom: 10px;">
            <label for="name">name :</label>
            <input type="text" name="name" id="name">
        </div>
        <div style="margin-bottom: 10px;">
            <label for="address">address :</label>
            <input type="text" name="address" id="address">
        </div>
        <div style="margin-bottom: 10px;">
            <label for="telephone_number">telephone number :</label>
            <input type="text" name="telephone_number" id="telephone_number">
        </div>
        <div style="margin-bottom: 10px;">
            <label for="email">email :</label>
            <input type="text" name="email" id="email">
        </div>
        <div style="margin-bottom: 10px;">
            <label for="instruction">delivery instruction :</label>
            <textarea name="instruction" id="instruction" cols="30" rows="10" maxlength="400"></textarea>
        </div>

        <p><b>design your dream pizza :</b></p>
        <p>pizza specs</p>

        <label for="crust">crust (choose one) :</label>
        <br>
        <select name="crust" id="crust">
            <option value="Classic White">Classic White</option>
            <option value="Multigrain">Multigrain</option>
            <option value="Chesee-stuffed crust">Chesee-stuffed crust</option>
            <option value="Gluten-free">Gluten-free</option>
        </select>

        <br>

        <div for="toppings">Toppings (as many as you want) :</div>
        <div>
            <input type="checkbox" name="toppings[]" value="red sauce">
            <label for="">red sauce</label>
        </div>
        <div>
            <input type="checkbox" name="toppings[]" value="white sauce">
            <label for="">white sauce</label>
        </div>
        <div>
            <input type="checkbox" name="toppings[]" value="mozzarella cheese">
            <label for="">mozzarella cheese</label>
        </div>
        <div>
            <input type="checkbox" name="toppings[]" value="pepperoni">
            <label for="">pepperoni</label>
        </div>
        <div>
            <input type="checkbox" name="toppings[]" value="mushrooms">
            <label for="">mushrooms</label>
        </div>
        <div>
            <input type="checkbox" name="toppings[]" value="peppers">
            <label for="">peppers</label>
        </div>
        <div>
            <input type="checkbox" name="toppings[]" value="anchovies">
            <label for="">anchovies</label>
        </div>

        <div>
            <p>Number</p>
            <label for="number">how many pizzas : </label>
            <input type="number" name="number">
        </div>

        <div style="margin: 20px 0;">
            <button type="submit">bring me the pizza!</button>
            <button type="reset">reset!</button>
        </div>
    </form>
</body>
</html>
