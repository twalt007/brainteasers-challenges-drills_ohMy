// Fetch Request Structure
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

var config = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

///might not be able to separate in this way; the data variable needs to be in the config;

var dataContent = {
    test: 1,
    testing: 2,
    tester: 3
}



async function apiCall(url='', data={}) 
    const response = await fetch(url, {config});
    return response.json();    
};

apiCall('http"://www.somewebsite.com', dataContent)
    .then(returnedResponse => {
        console.log("representing the work we do with the returnedResponse", returnedResponse);
    })


