function add(){
    var x = document.getElementById('input1').Value;
    var y = document.getElementById('input2').Value;
    x = Number(x);
    y = Number(y);
    alert(x+y);
}

function Bmi(){
    var weight = document.getElementById('input3').value;
    var height = document.getElementById('input4').value;
    weight = Number(weight);
    height = Number(height);
    var bmi = height / (weight * weight);
    alert("BMI値は"　+ bmi + "です。");
}