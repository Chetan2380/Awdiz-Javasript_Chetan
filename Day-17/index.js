function getData(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const result=true;
            if (result){
                resolve("Data received successfully.")
            }
            else{
                reject("Failed")
            }
        },4000);
    })
}

getData()
.then((response)=>{
    console.log(response,"response")
})
.catch((error)=>{
    console.log(error,"error")
})

function getData1(){
    return new Promise((resolve,reject)=>{
        const result1=false;
        setTimeout(()=>{
            if (result1){
                resolve("Data received successfully.")
            }
            else{
                reject("Failed")
            }
        },4000);
    })
}

getData1()
.then((response1)=>{
    console.log(response1,"success")
})
.catch((error1)=>{
    console.log(error1,"error")
})

function getData2(){
    return new Promise((resolve,reject)=>{
        const result2=false;
        setTimeout(()=>{
            if (result2){
                resolve("Data received successfully.")
            }
            else{
                reject("Failed")
            }
        },4000);
    })
}

getData2()
.then((response2)=>{
    console.log(response2,"success")
})
.catch((error2)=>{
    console.log(error2,"error")
})

function getData3(){
    return new Promise((resolve,reject)=>{
        const result3=true;
        setTimeout(()=>{
            if (result3){
                resolve("Data received successfully.")
            }
            else{
                reject("Failed")
            }
        },4000);
    })
}

getData3()
.then((response3)=>{
    console.log(response3,"success")
})
.catch((error3)=>{
    console.log(error3,"error")
})