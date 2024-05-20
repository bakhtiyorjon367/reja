// MITask A
let count = 0;
function countLetter(a,b){
        for(let i = 0; i<b.length; i++){
            if(a==b[i])
                count++;
            }
    return count;
}
const result = countLetter('e', 'engineer');
console.log(result);



















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



// // function maslahatBering(a, callback){
// //     if(typeof a !== 'number') callback("insert a number", null);
// //     else if(a > 60 ) callback(null, list[5]);
// //     else if(a > 50 ) callback(null, list[4]);
// //     else if(a > 40 ) callback(null, list[3]);
// //     else if(a > 30 ) callback(null, list[2]);
// //     else if(a > 20 ) callback(null, list[1]);
// //     else {
// //         setTimeout(function() {
// //             callback(null, list[1]);                      // Agar functionimiz callback bo'lmasa single-thread applicationlarda setTimeout javobini kutib qoladi
// //         }, 5000);                                        // Callback bizga functionni javobini set bo'lgan time tugagandan keyin yuboradi
// //                                                         // Callback single-threadni ushlab turmaslik uchun yordam beradi.
// //         }
// // }

// // console.log("passed here 0");
// // maslahatBering(5, (err, data) => {
// //     if(err)
// //         console.log("ERROR: ",err);
// //     else{
// //         console.log("Javob : ",data);
// //     }
// // })
// // console.log("passed here 1");