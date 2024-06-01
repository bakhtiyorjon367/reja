//MITask F

function findDoublers(a){
    for(let i=0; i<=a.length; i++){
        for(let j=i+1; j<=a.length-1; j++ ){
            if(a[i]==a[j]){
                return true;
            }
        }           
    }
    return false;
}
const result = findDoublers('hello');
console.log(result);
//_________________________________________________________________________________________________________________________________________________________________________________________________



//MITask E

// function getReverse(a){
//     let temp = "";
//     for(i=a.length-1; i>=0; i--){
//         temp+=a[i];
//     }
//     return temp;

// }
// const b = getReverse('hello');
// console.log(b);
//_________________________________________________________________________________________________________________________________________________________________________________________________



//MITask D

// function izla(a,b){
//     if(a.length==b.length){
//         let temp = "";
//         for(let i = 0; i < a.length;  i++){
//             for(let j = 0; j<b.length; j++){
//                 if(a[i]==b[j]){
//                     temp+=a[i];
//                     break;
//                 }
//             }
//         }
//     return true;
//     }else {
//         return false;
//     }
// }
// const result = izla("mitgroup","gmtiprou");
// console.log(result);
//_________________________________________________________________________________________________________________________________________________________________________________________________


//MITask C

// const moment = require('moment');
// class Shop{
//     constructor(non,lagmon,cola){
//         this.non = non;
//         this.lagmon = lagmon;
//         this.cola = cola;
//     }

//    qabul(name, value){
//         if(name==='non'){
//             this.non+=value;
//         }else if(name==='lagmon'){
//             this.lagmon+=value;
        
//         }else if(name==='cola'){
//             this.cola+=value;
//         }else{
//             console.log("input is not valid");
//         }
//    }
//    sotish(name,number){
//         if(name.length == 3){
//             this.non-=number;
//         }else if(name.length == 6){
//             this.lagmon-=number;
//         }else if(name.length == 4){
//             this.cola-=number;
//         }else{
//             console.log("input valid value");
//         }   
//     }
//     qoldiq(){
//         const time = moment().format("HH:MM");
//         console.log(`hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud! `);
//    }
// };
// const shop = new Shop(4,5,2);
// shop.qoldiq();
// shop.sotish('non',3);
// shop.qabul('cola',4);
// shop.qoldiq();
//_________________________________________________________________________________________________________________________________________________________________________________________________





// //MITask B

// let count = 0;
// function countNumber(a){
//     for(let i = 0; i<a.length; i++){
//         if (!isNaN(a[i])) 
//             count++;
//     }return count;
// }
// const result = countNumber("ad2a54y79wet0sfgb9");
// console.log(result);
//_________________________________________________________________________________________________________________________________________________________________________________________________





// // MITask A

// let count = 0;
// function countLetter(a,b){
//         for(let i = 0; i<b.length; i++){
//             if(a==b[i])
//                 count++;
//             }
//     return count;
// }
// const result = countLetter('e', 'engineer');
// console.log(result);
//_________________________________________________________________________________________________________________________________________________________________________________________________



















// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling",                    //0-20
//     "togri ustoz tanlang va koproq hato qiling",//20-30
//     "uzingizga ishlashingizni boshlang",        //30-40
//     "siz kuchli bolgan narlsalarni qiling",     //40-50
//     "yoshlarga investitsiya qiling",            //50-60
//     "endi dam oling, foydasi yoq",             //60
// ];



//////______________________________________asycn_function________________________________________________________________________________________________

// async function maslahatBering(a){                                               //single-threadni band qilmaydigob function. 
//     if(typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20 ) return list[0];
//     else if (a > 20 && a <=30 ) return list[1];
//     else if (a > 30 && a <=40 ) return list[2];
//     else if (a > 40 && a <=50 ) return list[3];
//     else if (a > 50 && a <=60 ) return list[4];
//     else {
//         return new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//            });
//     }
// }


// async function run(){
//     let javob = await maslahatBering(22);
//     console.log(javob);
//     javob = await maslahatBering(75);
//     console.log(javob);
//     javob = await maslahatBering(8);
//     console.log(javob);
// }
// run();


// // //then-catch
// // maslahatBering(30)
// //     .then(data => {
// //         console.log("Javob:", data);
// //     })
// //     .catch(err =>{             
// //         console.log("ERROR:",err);
// // });
// // maslahatBering(46)
// //     .then(data => {
// //         console.log("Javob:", data);
// //     })
// //     .catch(err =>{             
// //         console.log("ERROR:",err);
// // });







//////______________________________________callback_function________________________________________________________________________________________________



// function calback(a, callback){
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a > 60 ) callback(null, list[5]);
//     else if(a > 50 ) callback(null, list[4]);
//     else if(a > 40 ) callback(null, list[3]);
//     else if(a > 30 ) callback(null, list[2]);
//     else if(a > 20 ) callback(null, list[1]);
//     else {
//         setInterval(function() {
//             callback(null, list[0]);                      // Agar functionimiz callback bo'lmasa single-thread applicationlarda setTimeout javobini kutib qoladi
//         }, 2000);                                        // Callback bizga functionni javobini set bo'lgan time tugagandan keyin yuboradi
//                                                         // Callback single-threadni ushlab turmaslik uchun yordam beradi.
//         }
// }

// console.log("passed here 0");
// calback(2, (err, data) => {
//     if(err)
//         console.log("ERROR: ",err);
//     else{
//         console.log("Javob : ",data);
//     }
// })
// console.log("passed here 1");







// Asycronous function: Callback, Asycn, Promise