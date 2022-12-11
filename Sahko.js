if (sessionStorage.hours) {
    var hours = JSON.parse(sessionStorage.hours);
    //hours.toArray();
} else {
    var data = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
    sessionStorage.hours = JSON.stringify(data);
    var hours = data;
}
var cheapest = Math.min(...hours)

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "?" in eg "https://localhost/?halvimmat_tunnit=?"
let value = params.halvimmat_tunnit; // "halvimmat_tunnit"
var price = false;
if (cheapest == hours[value]) price = true;
const result = {
    tunti: value,
    halvin: price,
}

console.log(hours);
console.log("halvin on " + cheapest);
console.log(result);
