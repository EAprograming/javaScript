function generatePassword(
  length,
  includelowercase,
  includUppercase,
  includeNumber,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_`;

  let allowedChars = "";
  let password = "";

  // Add allowed characters based on the user's selection
  allowedChars += includelowercase ? lowercaseChars : "";
  allowedChars += includUppercase ? uppercaseChars : "";
  allowedChars += includeNumber ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (length <= 0) {
    return "(password length must be at least 1)";
  }

  if (allowedChars.length === 0) {
    return "(At least 1 set of characters needs to be selected)";
  }

  // Generate password by selecting random characters from allowed set
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const mySubmit = document.getElementById("mySubmit");
const pass = document.getElementById("generatedPassword");

mySubmit.onclick = function () {
  // Get user input values
  const passwordLength = document.getElementById("passwordLength").value;
  const includelowercase = document.getElementById("includelowercase").checked;
  const includUppercase = document.getElementById("includUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  // Generate password with the user input
  const password = generatePassword(
    passwordLength,
    includelowercase,
    includUppercase,
    includeNumbers,
    includeSymbols
  );

  // Display generated password
  pass.innerHTML = password;
};
