$("document").ready(function () {
  $("#hr").click(function () {
    var horizontalLine = $("<hr>");
    $("#form").append(horizontalLine);
  });

  $("#br").click(function () {
    var breakLine = $("<br>");
    $("#form").append(breakLine);
  });

  $("#submit").click(function () {
    var submitBtn = $("<input type = submit>");
    $("#form").append(submitBtn);
  });

  $("#reset").click(function () {
    var resetBtn = $("<input type = reset>");
    $("#form").append(resetBtn);
  });

  $("#date").click(function () {
    var dateFeild = $("<input type=date>");
    $("#form").append(dateFeild);
  });

  $("#time").click(function () {
    var timeFeild = $("<input type=time>");
    $("#form").append(timeFeild);
  });

  $("#radio").click(function () {
    var radioBtn = $(" <input type=radio>");
    $("#form").append(radioBtn);
  });

  $("#checkbox").click(function () {
    var checkBox = $(" <input type=checkbox>");
    $("#form").append(checkBox);
  });

  $("#textarea").click(function () {
    var area = $("<textarea></textarea>");
    $("#form").append(area);
  });

  $("#text").click(function () {
    var textField = $("<input type=text>");
    $("#form").append(textField);
  });

  $("#email").click(function () {
    var emailField = $("<input type=email>");
    $("#form").append(emailField);
  });

  $("#pass").click(function () {
    var password = $("<input type=password>");
    $("#form").append(password);
  });

  $("#label").click(function () {
    var text = document.getElementById("inputText").value;
    labelText = $("<label></label>").text(text);
    $("#form").append(labelText);
  });

  $("#h4").click(function () {
    var text = document.getElementById("inputText").value;
    labelText = $("<h4></h4>").text(text);
    $("#form").append(labelText);
  });

  $("#h1").click(function () {
    var text = document.getElementById("inputText").value;
    labelText = $("<h1></h1>").text(text);
    $("#form").append(labelText);
  });

  /*
   * Once a theme is clicked it will change the text's color along with the headings and lable's colors.
   * The buttons color will also change and their text.
   * The document background will change and the menu, including icons will also change.
   * Lastly, the horizontal line color will change.
   *
   */

  $("#colorful").click(function () {
    $("*").css({ color: "#FD1D7E" });
    document.body.style.backgroundColor = "#87B297";

    $(".side-menu").css({ "background-color": "#7885A8" });
    $(".side-menu h1").css({ color: "#EEDE64" });
    $(".side-menu a").css({ "background-color": "#7885A8", color: "#F6E8B1" });
    $("ul").css({ "background-color": "#7885A8" });
    $(".information").css({ color: "#EEDE64" });

    $("hr").css({ "background-color": "#EEDE64", color: "#EEDE64" });
    $(":submit").css({ "background-color": "#EEDE64", color: "#FD1D7E" });
    $(":reset").css({ "border-color": "#EEDE64", color: "#EEDE64" });

    $("#menu ul .material-icons").css({ color: "#EEDE64" });
  });

  $("#bold").click(function () {
    $("*").css({ color: "#400101" });
    document.body.style.backgroundColor = "#D9998B";

    $(".side-menu").css({ "background-color": "#730C02" });
    $(".side-menu h1").css({ color: "#A66953" });
    $(".side-menu a").css({ "background-color": "#730C02", color: "#F6E8B1" });
    $("ul").css({ "background-color": "#730C02" });
    $(".information").css({ color: "#A66953" });

    $("hr").css({ "background-color": "#A6122D", color: "#A6122D" });
    $(":submit").css({ "background-color": "#A6122D", color: "#F6E8B1" });
    $(":reset").css({ "border-color": "#A6122D", color: "#A6122D" });

    $("#menu ul .material-icons").css({ color: "#F6E8B1" });
  });

  $("#earthy").click(function () {
    $("*").css({ color: "#89725B" });
    document.body.style.backgroundColor = "#DBCCAE";

    $(".side-menu").css({ "background-color": "#677E52" });
    $(".side-menu h1").css({ color: "#B7CA79" });
    $(".side-menu a").css({ "background-color": "#677E52", color: "#F6E8B1" });
    $("ul").css({ "background-color": "#677E52" });
    $(".information").css({ color: "#B7CA79" });

    $("hr").css({ "background-color": "#89725B", color: "#89725B" });
    $(":submit").css({ "background-color": "#89725B", color: "#F6E8B1" });
    $(":reset").css({ "border-color": "#89725B", color: "#89725B" });

    $("#menu ul .material-icons").css({ color: "#F6E8B1" });
  });

  $("#formal").click(function () {
    $("*").css({ color: "#2a2e30" });
    document.body.style.backgroundColor = "#b1b9be";

    $(".side-menu").css({ "background-color": "#343C40" });
    $(".side-menu h1").css({ color: "#9CB2BF" });
    $(".side-menu a").css({ "background-color": "#343C40", color: "#dfdfdf" });
    $("ul").css({ "background-color": "#343C40" });
    $(".information").css({ color: "#9CB2BF" });

    $("hr").css({ "background-color": "#68767F", color: "#68767F" });
    $(":submit").css({ "background-color": "#68767F", color: "#dfdfdf" });
    $(":reset").css({ "border-color": "#68767F", color: "#68767F" });

    $("#menu ul .material-icons").css({ color: "#9CB2BF" });
  });
});
