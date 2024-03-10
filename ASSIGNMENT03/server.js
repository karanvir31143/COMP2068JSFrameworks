// Import required modules
const connect = require('connect');
const url = require('url');

// Create a new Connect app
const app = connect();

// Define the calculate function
function calculate(method, x, y) {
    let result;
    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            return `Error: Unsupported method '${method}'. Supported methods are 'add', 'subtract', 'multiply', and 'divide'.`;
    }
    return `${x} ${method} ${y} = ${result}`;
}

// Handle incoming requests
app.use((req, res) => {
    // Parse the URL to get query parameters
    const { method, x, y } = url.parse(req.url, true).query;

    // Convert x and y to numbers
    const numX = parseFloat(x);
    const numY = parseFloat(y);

    // Check if x and y are valid numbers
    if (isNaN(numX) || isNaN(numY)) {
        res.end('Error: Invalid numbers provided.');
        return;
    }

    // Calculate the result
    const result = calculate(method, numX, numY);

    // Send the result as response
    res.end(result);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
