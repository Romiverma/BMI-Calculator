const inputBtn = document.querySelector(".input-btn");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result = document.querySelector("#calculateBtn");
const resetBtn = document.querySelector("#resetBtn");
const h2 = document.querySelector("#bmiValue");

result.addEventListener("click", function () {
    let height = heightInput.value;
    let weight = weightInput.value;


    if (height === "" || weight === "") {
        alert("Please enter both height and weight.");
        return;
    }   

    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);  

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }   

    h2.textContent = bmi;
    document.querySelector("#bmiCategory").textContent = `You are categorized as ${category}.`;
});

resetBtn.addEventListener("click", function () {
    heightInput.value = "";
    weightInput.value = "";
    h2.textContent = "--";
    document.querySelector("#bmiCategory").textContent = "Enter your details to calculate BMI.";
});
