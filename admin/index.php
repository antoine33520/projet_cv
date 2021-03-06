<?php
session_start();
require_once('../php/vars.php');
if (isset($_POST['connect'])) {
    if (isset($_POST['connect']) && !isset($_SESSION['connected'])) {
        $password = md5($_POST['password']) . sha1($_POST['password']) . md5($_POST['password']);
        if ($_POST['email'] == $admin['email'] && $password == $admin['password']) {
            $_SESSION['connected'] = true;
            header('Location: admin.php');
        } else {
            echo 'Erreur de mot de passe !';
        }
    }
}
if (isset($_POST['disconnect'])) {
    session_unset();
    session_destroy();
}
if (isset($_SESSION['connected'])) {
    require_once('admin.php');
} else { ?>
<!doctype html>
<html lang="fr">

    <head>
        <title>Connexion</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="../css/style.css" rel="stylesheet">
        <link href="../css/bootstrap.min.css" rel="stylesheet">
    </head>

    <body>
        <h1>Connexion</h1>
        <form class="w-50 mx-auto m-2" action="" method="post">
            <input class="form-control mb-2" type="text" placeholder="email" name="email" />
            <input class="form-control mb-2" type="password" placeholder="Mot de passe" name="password" />
            <button class="btn btn-primary mx-auto d-block" type="submit" name="connect">Connexion</button>
        </form>
    </body>

</html>
<?php } ?>
