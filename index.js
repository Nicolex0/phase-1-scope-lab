// Declare customerName in global scope using the var keyword
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set the bestCustomer variable
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'alice';

// Function to attempt to change the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
    throw new Error("Assignment to constant variable.");
}