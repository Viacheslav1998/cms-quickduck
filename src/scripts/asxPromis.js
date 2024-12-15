// promise

let answer = 'no';
const hustleSpace = new Promise((resolve, reject) => {
  if (answer === 'yes') {
    setTimeout(() => {
      resolve('расскажи мне мать что такое хасл');
    },1200);
  } else {
    setTimeout(() => {
      reject('Ответа нет и он не верен');
    },1200);
  }
});


hustleSpace
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.error(result);
  });

// next time
const pr1 = Promise.resolve(3);
const pr2 = 77;
const pr3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1200, 'nice work - good day');
});

Promise.all([pr1, pr2, pr3]).then((values) => {
  console.log(values);
});

