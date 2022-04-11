// JavaScript source code

/*
 * Example 1------------------------------------------
 */
//Create promise async
async function promise1() {
    return "Resolve";
}

/*function promise1() {
    //return Promise.resolve("Resolve2");
    return Promise.reject("Reject");
}*/

/*let p = promise1();
p.then((result) => {
    console.log(result);
}).catch((result) => console.log(result));*/

/*
 * Example2---------------------------------------------
 */
function doWork(step) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("doWork" + step);
            resolve("resolveDoWork " + step);
        }, 2000);
    });    
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            //console.log("resolve2sec");
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');

    /*const result = await resolveAfter2Seconds();
    console.log(result);*/

    let result = await doWork("step1");
    console.log(result);

    result = await doWork("step2");
    console.log(result);

    console.log("end asyncCall");

    // expected output: "resolved"
}

asyncCall();

