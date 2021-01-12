// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");

  $("#submit").click(function (e) {
    e.preventDefault();
    checkEmpty("#firstName");
    checkEmpty("#lastName");
    checkEmpty("#email");
    checkEmpty("#password");
    validateEmail("#email");
  });

  function checkEmpty(fieldName) {
    let b = $(fieldName).val();
    console.log(b);

    let newValue = fieldName.substring(1);

    if (b === undefined || b === "") {
      console.log(b);

      console.log("the " + fieldName + " field is empty", "value: " + b);
      console.log(newValue);

      $("." + newValue).text(
        "Sorry, the " + $(fieldName).attr("name") + " cannot be empty.");
        $(fieldName).addClass("error-input");
    } else {
      $("." + newValue)
        .text("Yay! Good stuff!")
        .addClass("success");
        $(fieldName).addClass("success-input");
        $(fieldName).parent().append("<img class='tick' src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzY3LjgwNSAzNjcuODA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNjcuODA1IDM2Ny44MDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzQkI1NEE7IiBkPSJNMTgzLjkwMywwLjAwMWMxMDEuNTY2LDAsMTgzLjkwMiw4Mi4zMzYsMTgzLjkwMiwxODMuOTAycy04Mi4zMzYsMTgzLjkwMi0xODMuOTAyLDE4My45MDINCgkJUzAuMDAxLDI4NS40NjksMC4wMDEsMTgzLjkwM2wwLDBDLTAuMjg4LDgyLjYyNSw4MS41NzksMC4yOSwxODIuODU2LDAuMDAxQzE4My4yMDUsMCwxODMuNTU0LDAsMTgzLjkwMywwLjAwMXoiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRDRFMUY0OyIgcG9pbnRzPSIyODUuNzgsMTMzLjIyNSAxNTUuMTY4LDI2My44MzcgODIuMDI1LDE5MS4yMTcgMTExLjgwNSwxNjEuOTYgMTU1LjE2OCwyMDQuODAxIA0KCQkyNTYuMDAxLDEwMy45NjggCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=' />");
      
      }
  }

  function validateEmail(mail) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(mail);
    let c = $(mail).val();
    console.log(c);

    if (c.match(mailformat)) {
      $(".error-msg.email-validity")
        .text("Congrats! This is a valid email address!")
        .addClass("success");
    } else {
      $(".error-msg.email-validity").text(
        "Sorry! This is not a valid email address!"
      );
    }
  }
});
