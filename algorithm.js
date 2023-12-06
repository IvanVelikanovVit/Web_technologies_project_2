      javascript
function calculate() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var Z;
    if (num1 > num2) {
        Z = num1 * num2;
    } else {
        Z = Math.log(num1 + num2);
    }

    document.getElementById("result").innerHTML = "Z: " + Z;
}

function send() {
    if (calculate) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName("formulation")[0].value = textCondition;
        document.getElementsByName("number")[0].value = number;
        document.getElementsByName("result")[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
