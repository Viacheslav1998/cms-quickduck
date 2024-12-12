console.log('space test footer');

const space = 'run an gun';

async function f3() {
  const y = await 20;
  console.log(y);

  const obj = {};
  console.log((await obj) === obj);
}

async function f4() {
  try {
    const z = await Promise.reject(30);
    setTimeout(() => {
      console.log('ready');
      console.log(z);
    },2000);
  } catch (e) {
    setTimeout(() => {
      console.log('time compleate');
      console.error(e);
    })
  }
}
f4();
