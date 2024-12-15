// module asx - async

async function f3() {
  const y = await 20;
  console.log(y);
  const obj = {};
  console.log((await obj) === obj);
}

// 
async function f4() {
  try {
    const z = await Promise.resolve(30);
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

// 

function resolveAster2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1200);
  });
}

const add = async function (x) {
  const a = await resolveAster2Seconds(20);
  const b = await resolveAster2Seconds(30);
  return x + a + b;
}


add(10).then((v) => {
  console.log(v);
});