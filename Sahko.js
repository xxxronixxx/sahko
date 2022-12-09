var hours = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));

var cheapest = Math.min(...hours)


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params.halvimmat_tunnit; // "halvimmat_tunnit"
var price = false;
if (cheapest == hours[value]) price = true;
const result = {
    tunti: value,
    halvin: price,
}

console.log(cheapest);
console.log(hours);
console.log(result);