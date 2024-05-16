

// Fetch the data and export it as a Promise
const productDataPromise = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        // Once the data is fetched, resolve the Promise with the data
        console.log(json)
        return json;
    });

export default productDataPromise;
    