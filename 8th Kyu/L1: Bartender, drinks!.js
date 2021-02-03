// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {

  const firstInput = "Jabroni";
  const secondInput = "School Counselor";
  const thirdInput = "Programmer";
  const fourthInput = "Bike Gang Member";
  const fifthInput = "Politician";
  const sixthInput = "Rapper";

  if (param.toUpperCase() == firstInput.toUpperCase()) {
    return "Patron Tequila";
  } else if (param.toUpperCase() == secondInput.toUpperCase()) {
    return "Anything with Alcohol";
  } else if (param.toUpperCase() == thirdInput.toUpperCase()) {
    return "Hipster Craft Beer";
  } else if (param.toUpperCase() == fourthInput.toUpperCase()) {
    return "Moonshine";
  } else if (param.toUpperCase() == fifthInput.toUpperCase()) {
    return "Your tax dollars";
  } else if (param.toUpperCase() == sixthInput.toUpperCase()) {
    return "Cristal";
  } else {
    return "Beer";
  }
}