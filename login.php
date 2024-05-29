<?php
include ("baglanti.php");
if (isset($_POST["giris"])) {
    // $name = $_POST["kullanici_adi"];
    $email = $_POST["email"];
    $password = password_hash($_POST["parola"], PASSWORD_DEFAULT);

    if (isset($email) && isset($parola)) {

        $secim = " SELECT *  FROM kullanicilar WHERE email= '$email'";
        $calistir = mysqli_query($baglanti, $secim);
        $kayit_sayisi = mysqli_num_rows($calistir);

        if ($kayit_sayisi > 0) {

            $ilgili_kayit = mysqli_fetch_assoc($calistir);
            $hashli_sifre = $ilgili_kayit["parola"];
            if (password_verify($parola, $hashli_sifre)) {

                session_start();

                $_SESSION["email"] = $ilgili_kayit["email"];
                $_SESSION["parola"] = $ilgili_kayit["parola"];
                header("location:profile.php");
            } else {
                echo ('<div class="alert alert-danger" role="alert">
                  HATALI PAROLA:( .
                 </div>');
            }
        } else {
            echo ('<div class="alert alert-danger" role="alert">
             EMAİL KAYITLI DEGİL.
             </div>');

        }
        mysqli_close($baglanti);

    }




}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ÜYE GİRİŞİ</title>
    <link rel="stylesheet" href="./assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            background-color: #FFCDEA;
        }
    </style>
</head>

<body>
    <form action="login.php" method="POST">
        <h2>GİRİŞ YAP</h2>
        <div class="outer-box">
            <div class="login-box">

                <center>
                    <h4 class="login-text">Giriş</h4>
                    <input type="email" name="email" placeholder="email" id=""><br>
                    <input name="parola" placeholder="Şifre"><br>

                    <button id="btn-login" name="giris">GİRİŞ YAP</button>

                </center>
            </div>
        </div>

    </form>
</body>

</html>