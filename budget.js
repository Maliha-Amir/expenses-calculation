

function calculate() {
    let breakfast = parseFloat(document.querySelector('input[name="breakfast"]').value);
    let fare = parseFloat(document.querySelector('input[name="fare"]').value) ;
    let lunch = parseFloat(document.querySelector('input[name="lunch"]').value) ;
    let returning_home = parseFloat(document.querySelector('input[name="returning_home"]').value);
    let snacks = parseFloat(document.querySelector('input[name="snacks"]').value);
    let dinner = parseFloat(document.querySelector('input[name="dinner"]').value) ;

    let total_cost = breakfast + fare + lunch + returning_home + snacks + dinner;
    document.getElementById('total').innerHTML = `Total Cost: ${total_cost} Rupees`;
}

document.getElementById("calculation").addEventListener("click", calculate);
