// JavaScript source code
async function getData() {

    var urlRequest = 'https://api.github.com/users';
    var request = new Request(urlRequest);

    //call Ajax function
    var response = await fetch(request);

    if (response.ok) {
        var jsonValue = response.json();
        return Promise.resolve(jsonValue);
    } else {
        return Promise.reject("Data not found");
    }
}

getData()
 .then(
    result => {
         console.log(result);
         console.log(result[0]);
         console.log(JSON.stringify(result[0]));

  }).catch(err => console.log(err));