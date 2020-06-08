/* *** To Do ***
- Decide if imperial or metric using radial input
- Use if/else statements for bmi level
- Cleanup code for when only one number has input (maybe with an if statement)
*/

// *** Constants ***
const form = document.getElementById( 'form' );
const weight = document.getElementById( 'weight' );
const height = document.getElementById( 'height' );
const results = document.getElementById( 'results' );
const imperial = document.getElementById( 'imperial' );
const metric = document.getElementById( 'metric' );
//let bmiNumber;

// *** The BMI Math functions ***
function bmiImperial ( weight, height ) {
    console.log( ( 703 * weight ) / ( height * height) );
    return (703 * weight ) / ( height * height);
}

function bmiMetric ( weight, height ) {
    console.log( weight / ( height * height ) );
    return weight / ( height * height );
}

// Get input values and update the <div id="results">
weight.addEventListener( 'input', inputValuesForBmiMath );
height.addEventListener( 'input', inputValuesForBmiMath );

function inputValuesForBmiMath () {
    let weightValue = weight.value;
    let heightValue = height.value;
    //results.innerHTML = bmiImperial( weightValue, heightValue );
    let bmiNumber =  bmiImperial( weightValue, heightValue );
    checkBmiCategory( bmiNumber );
    //return bmiNumber;
}

// Check for the correct category based on the BMI number
function checkBmiCategory ( bmiNumber ) {
    if ( bmiNumber < 15) {
        results.innerHTML = 'Very severely underweight'
    } else if ( bmiNumber < 16 ) {
        results.innerHTML = 'Severely underweight'
    } else if ( bmiNumber < 18.5 ) {
        results.innerHTML = 'Underweight'
    } else if ( bmiNumber < 25 ) {
        results.innerHTML = 'Normal (Healthy Weight)'
    } else if ( bmiNumber < 30 ) {
        results.innerHTML = 'Overweight'
    } else if ( bmiNumber < 35 ) {
        results.innerHTML = 'Moderately obese'
    } else if ( bmiNumber < 40 ) {
        results.innerHTML = 'Severely obese'
    } else if ( bmiNumber > 40 ) {
        results.innerHTML = 'Very severely obese'
    } else {
        results.innerHTML = 'Only positive numbers accepted'
    }
}

imperial.addEventListener( 'click', stuff );
metric.addEventListener( 'click', stuff );

function stuff () {
    if ( imperial.checked === true ) {
        //imperial
        alert( 'imperial' );
    } else if ( metric.checked === true ) {
        //metric
        alert( 'metric' );
    }
}