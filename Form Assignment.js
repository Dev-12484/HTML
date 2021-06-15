function calculate(){
    var score = 0 ;
    var correct = document.getElementsByClassName("correct");

    for(var i=0 ; i < correct.length ; i++){
        if (correct.checked == true){
            score++ ;
        }
    }

    document.getElementById("sco").innerHTML= score ;
}