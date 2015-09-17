            function attempt1(form){
            if(document.getElementById("1").checked || document.getElementById("2").checked || document.getElementById("3").checked || document.getElementById("4").checked) {
                    sessionStorage.setItem("strone","1");
                          } 
                else
                    {
                    sessionStorage.setItem("strone","0");
                }
        }

        function correct1(form){
            if(document.getElementById("2").checked) {
                   sessionStorage.setItem("strtwo","1");
                          } 
                else
                    {
                    sessionStorage.setItem("strtwo","0");
                }
        }

        function attempt2(form){
            if(document.getElementById("5").checked || document.getElementById("6").checked || document.getElementById("7").checked || document.getElementById("8").checked) {
                    sessionStorage.setItem("strthree","1");
                          } 
                else
                    {
                    sessionStorage.setItem("strthree","0");
                }
        }

        function correct2(form){
            if(document.getElementById("5").checked) {
                    sessionStorage.setItem("strfour","1");
                          } 
                else
                    {
                    sessionStorage.setItem("strfour","0");
                }
        }

        function attempt3(form){
            if(document.getElementById("9").checked || document.getElementById("10").checked || document.getElementById("11").checked || document.getElementById("12").checked) {
                    sessionStorage.setItem("strfive","1");
                          } 
                else
                    {
                        sessionStorage.setItem("strfive","0");
                }
        }

        function correct3(form){
            if(document.getElementById("9").checked) {
                sessionStorage.setItem("strsix","1");
                          } 
                else
                    {
                sessionStorage.setItem("strsix","0");
                }
        }

        function attempt4(form){
            if(document.getElementById("13").checked || document.getElementById("14").checked || document.getElementById("15").checked || document.getElementById("16").checked) {
                sessionStorage.setItem("strseven","1");
                          } 
                else
                    {
                sessionStorage.setItem("strseven","0");
                }
        }

        function correct4(form){
            if(document.getElementById("16").checked) {
                sessionStorage.setItem("streight","1");
                          } 
                else
                    {
                sessionStorage.setItem("streight","0");
                }
        }
        
        function result()
        {  
            var a1= sessionStorage.getItem("strone");
            var b1= sessionStorage.getItem("strtwo");
            var count1= +a1 + +b1;
            var a2= sessionStorage.getItem("strthree");
            var b2= sessionStorage.getItem("strfour");
            var count2= +a2 + +b2;
            var count3=count2*10;
            var count4= sessionStorage.getItem("strfive");
            var count5= sessionStorage.getItem("strsix");
            var count6=count5*10;
            var count7= sessionStorage.getItem("strseven");
            var count8= sessionStorage.getItem("streight");
            var count9=count8*10;
            document.getElementById("result1").innerHTML = count1;
            document.getElementById("result2").innerHTML = count2;
            document.getElementById("result3").innerHTML = count3;
            document.getElementById("result4").innerHTML = count4;
            document.getElementById("result5").innerHTML = count5;
            document.getElementById("result6").innerHTML = count6;
            document.getElementById("result7").innerHTML = count7;
            document.getElementById("result8").innerHTML = count8;
            document.getElementById("result9").innerHTML = count9;
        }