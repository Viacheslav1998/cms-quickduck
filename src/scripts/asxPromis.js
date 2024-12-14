// promise

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('это сообщение о том что это true. разрешено / resolve')
  }, 700);
});


console.log(testPromise);