const h=document.querySelector("#html");
        const showHtml=document.querySelector("#showHtml");
        showHtml.value=h.value;
        h.addEventListener("input",(e)=>{
            showHtml.value=h.value;
        });

        const c=document.querySelector("#css");
        const showCss=document.querySelector("#showCss");
        showCss.value=c.value;
        c.addEventListener("input",(e)=>{
            showCss.value=c.value;
        });

        const js=document.querySelector("#js");
        const showJs=document.querySelector("#showJs");
        showJs.value=js.value;
        js.addEventListener("input",(e)=>{
            showJs.value=js.value;
        });

        const showFile=document.querySelector('#showFile');
        const cv=document.querySelector('#cv');
        showFile.value=showFileName(cv.value);

        cv.addEventListener("change",(e)=>{
            showFile.value=showFileName(cv.value);
        });

        function showFileName(path){
            if(path==""){
                return "Δεν έχει επιλεγεί αρχείο"
            }
            return path.split("\\").pop().split("/").pop();
        }



        //Ypologismos Hlikias
        document.querySelector("#date").addEventListener("change",(e)=>{
            const ageInMilliseconds=Date.now()-new Date(document.querySelector("#date").value);
            if(ageInMilliseconds<0){
                alert("Μη επιτρεπτή ημερομηνία γέννησης");
                document.querySelector("#date").value="";
                return false;
            }
            document.querySelector("#age").value=Math.floor(ageInMilliseconds/(1000*60*60*24*365.25));
           
            
        });


        //Εγκυρότητα Φόρμας

        function validate(){
            if (document.querySelector("#age").value<18){
                document.querySelector("#message").innerHTML="Το βιογραφικό δεν υποβλήθηκε. <br>"+"Δεν είναι επιτρεπτή η υποβολή βιογραφικού από άτομο ηλικίας μικρότερης των 18"
                document.querySelector("#myform").reset;
                return false;
            }
            else{
                return true;
            }
        }

