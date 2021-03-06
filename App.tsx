<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

    <title>React App</title>
    <script>
      document.onreadystatechange = function () {
        if (document.readyState !== "complete") {
          document.querySelector("body").style.visibility = "hidden";
          document.querySelector("#loader").style.visibility = "visible";
        } else {
          document.querySelector("#loader").style.display = "none";
          document.querySelector("body").style.visibility = "visible";
        }
      };
    </script>
  </head>

  <body bgcolor="#D1F2EB">
    <div class="dropdown">
      <button class="dropbtn">Sort</button>
      <div class="dropdown-content">
        <a href="#">by Name</a>
      </div>
    </div>
    <div id="loader" class="center"></div>
    <div id="root"></div>
  </body>
</html>
