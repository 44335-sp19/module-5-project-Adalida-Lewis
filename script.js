/* Module 5 Project Script File */

//Sets score initally to 0
    var score=0;

//Function for js100-300
      function js100(){
    var txt = prompt("What does DOM stand for?");
    if(txt == "document object model")
        {
            confirm(txt = "Correct!");
            document.getElementById("score").innerHTML = score += 100;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }

      function js200(){
    var txt = prompt("yes or no: getElementById returns an array of ids?");
    if(txt == "no")
        {
            confirm(txt = "Correct!");
            document.getElementById("score").innerHTML = score += 200;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }

      function js300(){
    var txt = prompt("When using Math.random, you round down to the nearest integer with Math.____?");
    if(txt == "floor")
        {
            confirm(txt = "Correct");
            document.getElementById("score").innerHTML = score += 300;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }


//Function for jq100-300
      function jq100(){
    var txt = prompt("What sign does jQuery use at the begining of a statement?");
    if(txt == "$")
        {
            confirm(txt = "Correct!");
            document.getElementById("score").innerHTML = score += 100;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }

      function jq200(){
    var txt = prompt("Fill in the Blank: \n program to prompt when user clicks, $(\"button\")._____(function()){" );
    if(txt == "click")
        {
            confirm(txt = "Correct!");
            document.getElementById("score").innerHTML = score += 200;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }

      function jq300(){
    var txt = prompt("Fill in the Blank: To change CSS you, $(\"#color\").___()");
    if(txt == "css")
        {
            confirm(txt = "Correct");
            document.getElementById("score").innerHTML = score += 300;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }

//Function for bs100-300
      function bs100(){
    var txt = prompt("To make the button red, you can use the btn-_____ class on your button");
    if(txt == "danger")
        {
            confirm(txt = "Correct!");
            document.getElementById("score").innerHTML = score += 100;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }

      function bs200(){
    var txt = prompt("What do you add to container to make it all the way across, container-____");
    if(txt == "fluid")
        {
            confirm(txt = "Correct!");
            document.getElementById("score").innerHTML = score += 200;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }

      function bs300(){
    var txt = prompt("True of False: To make a image round, give it the rounded class");
    if(txt == "true")
        {
            confirm(txt = "Correct");
            document.getElementById("score").innerHTML = score += 300;
        }
    else
        {
            confirm(txt = "Incorrect!");
        }
          }

//</script>