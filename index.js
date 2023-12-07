let submit= document.getElementById("submit");
let error= document.getElementById("error");
let sujjest=document.getElementById("sujjest");
let input=document.getElementById("enter");

submit.addEventListener('click',(e)=>{
    if(input.value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.+[com]+$/)){
        error.style.display="none";
        sujjest.style.display="none";
    }else{
        error.style.display="block";
        sujjest.style.display="block";
        input.style.borderColor="hsl(4, 100%, 67%)";
        input.addEventListener('click',function (e){
            error.style.display="none";
            sujjest.style.display="none";
            input.style.borderColor="white";
        })
    }
})

//     show.addEventListener('click', function(e){
        
//             if(error.style.display=="block" && sujjest.style.display=="block"){
//                 enter.addEventListener('click', function(e){
//                     error.style.display="none";
//                     sujjest.style.display="none";
//                 })
//                 error.style.display="none";
//                 sujjest.style.display="none";
                
//             }
//             else {
//                 error.style.display="block";
//                 sujjest.style.display="block";
//             }
// })

// show.addEventListener('click', function(e){
//     if(enter.value==""&& enter.value!=/a-z/ig){
//         error.style.display="block";
//         sujjest.style.display="block";
//             enter.addEventListener('click', function(e){
//                 error.style.display="none";
//                 sujjest.style.display="none";
//             })
//             show.addEventListener('click', function(e){
//                 if(error.style.display=="block" && sujjest.style.display=="block"){
//                     enter.addEventListener('click', function(e){
//                         error.style.display="none";
//                         sujjest.style.display="none";
//                     })
//                     error.style.display="none";
//                     sujjest.style.display="none";
                    
//                 }
//                 else {
//                     error.style.display="block";
//                     sujjest.style.display="block";
//                 }
//             })

//     } else {
//         show.addEventListener('click', function(e){
//             error.style.display="none";
//             sujjest.style.display="none";
//         })
//     }

// })

