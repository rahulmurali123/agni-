//setTimeout(()=>{
//    console.log("Time is done");
//}, 1000)

//console.log("hi");
//console.log("Hello");

const func = (callback)=>{
    callback()
}
setTimeout(()=>{
    func(()=>{
        console.log("Function Called");
    })
}, 1000)

console.log("hi");
console.log("Hello");
