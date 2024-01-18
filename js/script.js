function calculate() {
    var sideLength = parseFloat(document.getElementById("sideLength").value);

    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Please enter a valid positive number for the side length.");
        return;
    }

    var area = sideLength * sideLength;
    var circumference = 4 * sideLength;

    // Display the calculation steps and results dynamically
    var calculationSteps = `S = ${sideLength}\
        <br>L = ${sideLength} X ${sideLength} = ${area}\
        <br>K = 4S = 4 X ${sideLength} = ${circumference}`;

    document.getElementById("calculationSteps").innerHTML = calculationSteps;
    document.getElementById("areaResult").innerText = area.toFixed(2);
    document.getElementById("circumferenceResult").innerText = circumference.toFixed(2);
    document.getElementById("results").style.display = "block";
}

function resetForm() {
    document.getElementById("calculatorForm").reset();
    document.getElementById("results").style.display = "none";
    document.getElementById("calculationSteps").innerHTML = "";
}
