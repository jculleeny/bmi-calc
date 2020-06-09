/* *** To Do ***
- Decide if imperial or metric using radial input
- Use if/else statements for bmi level
- Cleanup code for when only one number has input (maybe with an if statement)
*/

// *** Constants ***
const form = document.getElementById( 'form' );
const weight = document.getElementById( 'weight' );
const height = document.getElementById( 'height' );
const weightLabel = document.getElementById( 'weight-label' );
const heightLabel = document.getElementById( 'height-label' );
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

function changeTextOfId ( htmlId, textString ) {
    htmlId.innerHTML = textString;
}

// Get input values and update the <div id="results">
weight.addEventListener( 'input', unitTypeChoice );
height.addEventListener( 'input', unitTypeChoice );

function inputValuesForBmiMathImperial () {
    let weightValue = weight.value;
    let heightValue = height.value;
    //results.innerHTML = bmiImperial( weightValue, heightValue );
    let bmiNumber =  bmiImperial( weightValue, heightValue );
    checkBmiCategory( bmiNumber );
    //return bmiNumber;
}

function inputValuesForBmiMathMetric () {
    let weightValue = weight.value;
    let heightValue = height.value;
    let bmiNumber = bmiMetric( weightValue, heightValue );
    checkBmiCategory( bmiNumber );
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

// See if Imperial or Metric units should be used
imperial.addEventListener( 'click', unitTypeChoice );
metric.addEventListener( 'click', unitTypeChoice );

function unitTypeChoice () {
    if ( imperial.checked === true ) {
        //imperial
        inputValuesForBmiMathImperial();
        changeTextOfId( weightLabel, 'Weight in pounds' );
        changeTextOfId( heightLabel, 'Height in inches' );
    } else if ( metric.checked === true ) {
        //metric
        inputValuesForBmiMathMetric();
        changeTextOfId( weightLabel, 'Weight in kilograms' );
        changeTextOfId( heightLabel, 'Height in meters' );
    } else {
        //
    }
}