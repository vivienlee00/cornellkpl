<?php
include("includes/init.php");
$db = open_sqlite_db('secure/catalog.sqlite');
// An array to deliver messages to the user.
$messages = array();
function print_record($record)
{
  $sisterName = $record["first_name"] . " *" . $record["nickname"] . "* " . $record["last_name"];
  $semester = $record["semester"];
?>
  <div class="col-3 col-12-medium">
    <div class="container">
      <img class="image" src=<?php echo htmlspecialchars("images/activeroster/" . $record["line_number"] . ".png"); ?> alt="" />
      <div class="overlay">
        <div class="text">
          <h5><?php echo htmlspecialchars("#" . $record["line_number"]); ?><br><?php echo htmlspecialchars($sisterName); ?></h5>
          <p class="sisterDesc">
            <b><u>Major:</u></b><?php echo htmlspecialchars(" " . $record["major"] . " / " . $record["year"]); ?><br>
            <b><u>Ethnicity:</u></b><?php echo htmlspecialchars(" " . $record["ethnicity"]); ?><br>
            <b><u>Hometown:</u></b><?php echo htmlspecialchars(" " . $record["hometown"]); ?><br>
            <b><u>Big:</u></b><?php echo htmlspecialchars(" " . $record["big"]); ?><br>
            <b><u>Little(s):</u></b><?php echo htmlspecialchars(" " . $record["little"]); ?><br><br>
            <b><u>You will usually find me:<br></u></b><?php echo htmlspecialchars(" " . $record["description"]); ?><br>
          </p>
        </div>
      </div>
    </div>
  </div>
<?php
}
?>

<!DOCTYPE HTML>
<html>

<head>
  <title>Elements</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <noscript>
    <link rel="stylesheet" href="assets/css/noscript.css" /></noscript>

  <style>
    .container {
      position: relative;
      max-height: 450px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 7px;
    }

    .col-3 {
      padding: 0 0 1em 1em !important;
    }

    .image {
      display: block;
      width: 100%;
      height: 450px;
      object-fit: cover;
      border-radius: 8px;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .3s ease;
      background-color: black;
      border-radius: 7px;
    }

    .container:hover .overlay {
      opacity: 1;
    }

    .container .text {
      color: white;
      font-size: 20px;
      position: absolute;
      margin: 15px;
    }

    .sisterDesc {
      color: white;
      font-size: 16px;
    }
  </style>
</head>

<body class="is-preload">

  <!-- Wrapper -->
  <div id="wrapper">

    <!-- Header -->
    <header id="header">
      <a href="index.html" class="logo"></a>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>

    <!-- Menu -->
    <nav id="menu">
      <ul class="links">
        <li><a href="index.html">Home</a></li>
        <li><a href="rush.html">Rush</a></li>
        <li><a href="actives.html">Active Sisters</a></li>
        <li><a href="elements.html">Elements</a></li>
      </ul>
      <ul class="actions stacked">
        <li><a href="#" class="button primary fit">Get Started</a></li>
        <li><a href="#" class="button fit">Log In</a></li>
      </ul>
    </nav>

    <!-- Main -->
    <div id="main" class="alt">

      <!-- One -->
      <section id="one">
        <div class="inner">
          <header class="major">
            <h1>Elements</h1>
          </header>

          <!-- Content -->
          <h2 id="content">Sample Content</h2>
          <div class="row">
            <div class="col-4 col-12-medium">
              <h3>Interdum sapien gravida</h3>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
                faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
                varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
            </div>
            <div class="col-4 col-12-medium">
              <h3>Faucibus consequat lorem</h3>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
                faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
                varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
            </div>
            <div class="col-4 col-12-medium">
              <h3>Accumsan montes viverra</h3>
              <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
                faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
                varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
            </div>
          </div>

          <hr class="major" />

          <h2>Our Sisters</h2>

          <?php
          $sql = "SELECT * FROM sisters";
          $params = array();

          // Get the shoes to display
          // Hint: You don't need to change any of this code.
          $result = exec_sql_query($db, $sql, $params);
          if ($result) {
            // The query was successful, let's get the records.
            $records = $result->fetchAll();
            if (count($records) > 0) {
              // We have records to display
          ?>

              <div class="row">
                <?php
                foreach ($records as $record) {
                  print_record($record);
                }
                ?>
              </div>

          <?php
            } else {
              // No results found
              echo "<p>No matching sisters found.</p>";
            }
          }
          ?>
      </section>

      <!-- Footer -->
      <footer id="footer">
        <div class="inner">
          <ul class="icons">
            <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
          </ul>
          <ul class="copyright">
            <li>&copy; Untitled</li>
          </ul>
        </div>
      </footer>

    </div>

    <!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>

</body>

</html>