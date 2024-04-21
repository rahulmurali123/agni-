let myPromise = new Promise((myResolve,myReject)=>{
    myReject()
})
myPromise.then(()=>{ //Only when the API request is successful
    console.log("Success");
}).catch(()=>{ // only when the API request is Failed
    console.log("Failure");
})

let myPromises = new Promise((myResolve,myReject)=>{
    setTimeout(()=>{
        myReject('KL Rahul Failed') //Passing data 
    },3000)
})
myPromises.then((name)=>{ //Only when the API request is successful
    console.log(name);
}).catch((name)=>{ // only when the API request is Failed
    console.log(name);
})
