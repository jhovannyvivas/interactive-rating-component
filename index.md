<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/img/favicon-32x32.png" type="image/png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="estilos.css">
    <title>Calificación</title>
</head>
<body>
    <main class="main">
        <div class="carta" id="evaluacion_id">
            <img src="./img/icon-star.svg" alt="">
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div class="escala">
                <p id="1">1</p>
                <p id="2">2</p>
                <p id="3">3</p>
                <p id="4">4</p>
                <p id="5">5</p>
            </div>
            <button type="button" class="boton" onclick="submit()">SUBMIT</button>
        </div>

        <div class="agradecimiento" id="agradecimiento_id">
            <img src="./img/illustration-thank-you.svg" alt="">
            <p>You selected <span id="numeroSeleccionado_id">4</span> of 5</p>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    </main>
    <script src="./index.js"></script>
</body>
</html>