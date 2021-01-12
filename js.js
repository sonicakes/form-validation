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
        "Sorry, the " + $(fieldName).attr("name") + " cannot be empty."
      );
    } else {
      $("." + newValue)
        .text("Yay! Good stuff!")
        .addClass("success");
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
