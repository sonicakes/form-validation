// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

            $("#submit").click(function(e){
                e.preventDefault();
                checkEmpty("#firstName");
                checkEmpty("#lastName");
                checkEmpty("#email");
                checkEmpty("#password");
    
            });
            

       function checkEmpty (fieldName) {
        if ($(fieldName).attr("value") === undefined) {
            console.log("the " + fieldName + " field is empty");
            let newValue = fieldName.substring(1);
            console.log(newValue);
        
            $("." + newValue).text("Sorry, the " + $(fieldName).attr("name") + " cannot be empty");

        }
       }

  
});

//todo
//1. check if values of fname,lname and pswd are empty, and if yes, display relevant msgs
//2. validate email & display msg