            function submit1(form) {
              if(document.getElementById("1").checked || document.getElementById("2").checked || document.getElementById("3").checked || document.getElementById("4").checked) {
                    window.open('question2.html', '_self', false);
                          } 
                else
                    {
                    alert("Select One of the Option!"); 
                }
            }
            function skip1(form) { 
                    window.open('question2.html', '_self', false);
            }

            function reset1(form){
                document.getElementById("1").checked = false;
                document.getElementById("2").checked = false;
                document.getElementById("3").checked = false;
                document.getElementById("4").checked = false;
            }

            function submit2(form) {
              if(document.getElementById("5").checked || document.getElementById("6").checked || document.getElementById("7").checked || document.getElementById("8").checked) {
                    window.open('question3.html', '_self', false);
                } 
                else
                    {
                    alert("Select One of the Option!"); 
                }
            }
            function skip2(form) { 
                    window.open('question3.html', '_self', false);
            }

            function reset2(form){
                document.getElementById("5").checked = false;
                document.getElementById("6").checked = false;
                document.getElementById("7").checked = false;
                document.getElementById("8").checked = false;
            }

            function submit3(form) {
              if(document.getElementById("9").checked || document.getElementById("10").checked || document.getElementById("11").checked || document.getElementById("12").checked) {
                    window.open('question4.html', '_self', false);
                } 
                else
                    {
                    alert("Select One of the Option!"); 
                }
            }
            function skip3(form) { 
                    window.open('question4.html', '_self', false);
            }

            function reset3(form){
                document.getElementById("9").checked = false;
                document.getElementById("10").checked = false;
                document.getElementById("11").checked = false;
                document.getElementById("12").checked = false;
            }

            function op1(form){
                document.getElementById("mark1").innerHTML = "Banana";
                document.getElementById("mark2").innerHTML = "England";
            }
            function op2(form){
                document.getElementById("mark1").innerHTML = "Apple";
                document.getElementById("mark2").innerHTML = "USA";
            }
            function op3(form){
                document.getElementById("mark1").innerHTML = "Kiwi";
                document.getElementById("mark2").innerHTML = "England";
            }
            function op4(form){
                document.getElementById("mark1").innerHTML = "Mango";
                document.getElementById("mark2").innerHTML = "India";
            }
            function replace3(form){
                document.getElementById("mark1").innerHTML = "__";
                document.getElementById("mark2").innerHTML = "__";
            }

            function submit4(form) {
              if(document.getElementById("13").checked || document.getElementById("14").checked || document.getElementById("15").checked || document.getElementById("16").checked) {
                    window.open('survey.html', '_self', false);
                } 
                else
                    {
                    alert("Select One of the Option!"); 
                }
            }
            function skip4(form) { 
                    window.open('survey.html', '_self', false);
            }

            function reset4(form){
                document.getElementById("13").checked = false;
                document.getElementById("14").checked = false;
                document.getElementById("15").checked = false;
                document.getElementById("16").checked = false;
            }

            
            function submit5(form) { 
                var comment = document.getElementById("comment");
                var city = document.getElementById("scity");
                var roomno = document.getElementById("roomno");
              
                if(comment.value != "" && city.value != "" && roomno.value != "") {
                    window.open('summary.html', '_self', false);
                }
                else {
                    alert("Please Submit the Survey to get the Score!"); 
                }
            }
            function skip5(form) { 
                    window.open('summary.html', '_self', false);
            }  
            function closewindow(form){
                window.open('loginpage.html', '_self', false);
            }   