let button = document.getElementById("finish");

button. addEventListener("click",checkTest);

function checkTest(){
    let result = 0;

    let a1 = document.getElementById("q1").value ;
    if (a1==="3") {
        result++;
    }

    let a2 = document.getElementById("q2").value ;
    if (a2==="4") {
        result++;
    }

    let a3 = document.getElementById("q3").value ;
    if (a3==="5") {
        result++;
    }

    let a4 = document.getElementById("q4").value ;
    if (a4==="6") {
        result++;
    }

    let a5 = document.getElementById("q5").value ;
    if (a5==="7") {
        result++;
    }

    let a6 = document.getElementById("q6").value ;
    if (a6==="8") {
        result++;
    }

    let a7 = document.getElementById("q7").value ;
    if (a7==="9") {
        result++;
    }

    let a8 = document.getElementById("q8").value ;
    if (a8==="10") {
        result++;
    }

    let a9 = document.getElementById("q9").value ;
    if (a9==="11") {
        result++;
    }

    let a10 = document.getElementById("q10").value ;
    if (a10==="12") {
        result++;
    }

    alert ("количество правильных ответов: " +result);
}
checkTest()