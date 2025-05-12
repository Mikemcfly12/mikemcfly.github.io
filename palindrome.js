document.getElementById("check-btn").addEventListener("click", function () {
    const input = document.getElementById("text-input").value;
    const resultDiv = document.getElementById("result");
  
    if (!input) {
      alert("Please input a value.");
      return;
    }
  
    // Normalize input: remove non-alphanumeric, lowercase
    const cleaned = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
  
    const isPalindrome = cleaned === reversed;
  
    if (isPalindrome) {
      resultDiv.textContent = `${input} is a palindrome.`;
    } else {
      resultDiv.textContent = `${input} is not a palindrome.`;
    }
  });