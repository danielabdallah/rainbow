// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         if (rand < 0.7) {
//             resolve("YOUR FAKE DATA");
//         }
//         reject("REQUEST ERROR!");
//     })
// }

// fakeRequest('/dogs/1')
//     .then((d) => {
//         console.log("DONE WITH REQUEST!",d);
// })
//     .catch((e) => {
//         console.log("OH NO!", e);
//     })

// const myPromise = new Promise (function (resolve, reject) {
//     const rand = Math.random();
//     if (rand < 0.7) {
//         resolve("Resolved.");
//     }
//     reject("Rejected.");
// })

// const fakeRequest = (url) => {
//     return myPromise;
// }

// fakeRequest('/dogs/1')
//     .then((d) => {
//         console.log("DONE WITH REQUEST!");
//         console.log("Data is: ", d);
//     })
//     .catch((e) => {
//         console.log("OH NO!", e);
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// delayedColorChange('red',1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

// function delayedColorChange(color, delay){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             document.body.style.backgroundColor = color;
//             resolve();
//         },delay)
//     })
// }

// delayedColorChange('red',1000)
//     .then(() => delayedColorChange('orange',1000))

// const myPromise = new Promise ((resolve,reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//     if (rand < 0.5){
//         resolve('HAVE A LOOK AT THIS DATA.');
//     } else {
//         reject('COULD NOT RETRIEVE DATA.');
//     }
// }, 2000)

// })

// function fakeRequest(url) {
//     return myPromise;
// }

// fakeRequest('zeliha.akpinar')
//     .then((d) => {
//         console.log('SUCCESS.', d);
//     })
//     .catch((e) => {
//         console.log('FAILURE.', e);
//     });

function delayedColorChange(color,delay){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        document.body.style.backgroundColor = color;
        resolve();
        }, delay)
    })
    
}

function rainbow() {delayedColorChange('red',1000)
    .then(() => delayedColorChange('orange',1000))
    .then(() => delayedColorChange('yellow',1000))
    .then(() => delayedColorChange('green',1000))
    .then(() => delayedColorChange('blue',1000))
    .then(() => delayedColorChange('indigo',1000))
    .then(() => delayedColorChange('violet',1000))
}

document.querySelector('button').addEventListener('click',rainbow);

