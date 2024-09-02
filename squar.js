document.getElementById('arrayForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the input value and split it into an array of numbers
    const input = document.getElementById('arrayInput').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Calculate the sum of squares
    const sumOfSquares = numbers.reduce((acc, num) => acc + num * num, 0);

    // Display the result
    document.getElementById('result').textContent= sumOfSquares;
});

