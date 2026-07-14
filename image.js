function toggleIngredients() {
    document.getElementById("ingredients").classList.toggle("hidden");
}

let currentStep = 0;
let steps = document.querySelectorAll("#steps li");

function startCooking() {
    currentStep = 0;

    steps.forEach(step => step.classList.remove("active"));

    steps[currentStep].classList.add("active");

    startTimer();
}

function nextStep() {

    if(currentStep < steps.length - 1){
        steps[currentStep].classList.remove("active");
        currentStep++;

        steps[currentStep].classList.add("active");

        let progress = ((currentStep + 1) / steps.length) * 100;

        document.getElementById("progress-bar").style.width =
        progress + "%";
    }
}

function startTimer(){

    let time = 45;

    let interval = setInterval(() => {

        document.getElementById("timer").innerText = time;

        time--;

        if(time < 0){
            clearInterval(interval);
        }

    },1000);
}