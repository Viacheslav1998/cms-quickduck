function get_data() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

get_data();

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('test is ready');
  }, 400);
});


testPromise.then((value) => {
  console.log(value);
});