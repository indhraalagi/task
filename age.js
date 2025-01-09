const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function agecal(dob) {
  const birthDate = new Date(dob);
  const currentDate = new Date();

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return `${ageYears} years and ${ageMonths} months`;
}
rl.question('Please enter your date of birth (year-month-date): ', (dob) => {
  const age = agecal(dob);
  console.log(`Your age is: ${age}`);
  rl.close(); 
});



