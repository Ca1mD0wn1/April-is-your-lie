console.log(0);
setTimeout(() => {
    console.log(1);
}, 1000);
setTimeout(() => { console.log(2); }, 0);

new Promise(function (resolve, reject) {
    console.log(3);
    resolve();
}).then(() => {
    console.log(4);
});

async function async1() {
    console.log(5);
    let temp = await async2();
    console.log(temp);
    console.log(6);
    return "async1"
}
async function async2() {
    console.log(7);
    return "async2";
}
async1();
console.log(8);