

// const numElements = [2, 4, 65, 21, 3, 12, 432, 32]
//  const evenOdds = []


//  const checkPairNumbers = (inputArr) => {

//     const len = inputArr.length
//     const pairNumber = []
//    for (i = 0; i < len; i++){
     
//     if (inputArr[i] % 2 === 0){
//         pairNumber.push('even')
        
//     }
//   else {
//     pairNumber.push('odd')
//   }
//    }
//    return pairNumber
//  }
// console.log(numElements)
// const resultArray = checkPairNumbers(numElements)
// console.log(resultArray)


//NEXT EXERCISE

// const numFirst = [2, -3, -6, 12, 5, -8]
// const numSecond = [23, -98, -54, 21, 34]

// const arrayFunction = (arrayIn) => {

//     let product = 1;
//     const len = arrayIn.length;

//     for( let i = 0; i < len; i++){
//         if (arrayIn[i] > 0) {
//             product *= arrayIn[i]
//         }
//     }
// return product;
// }

// console.log(numFirst)
// const positiveNums = arrayFunction(numFirst)
// console.log(positiveNums)


        //NEXT EXERCISE

// conast arr = ['mitre', 'mirkovski', 456, 890, 'efto']

// conast findNextElement = (inputArr, elementItem) => {
//     let IndexElement; 
//     const elementIndex = inputArr.indexOf(elementItem)

//     if (elementIndex === -1) {
//         return IndexElement
//     }
//     else {
//         IndexElement = inputArr[elementIndex + 1]
//         return IndexElement
//     }
// }

//NEXT EXERCISE
  // Function to generate random data
  

  //CAL BACK FUNCTIONS

// function ping (){
//         console.log(ping)
// }
// function pong (){
//         console.log(pong)
// }


// function pingPong(cb){


// ping()
// pong()

// cb()
// }
// function callBack() {console.log('this is call back')}

// pingPong(callBack)

// pingPong(() => {console.log('its done')})

// function countFunction (num, cbStart, cbEnd, myLoopCb) {
//  cbStart()
// for(let i = num; i >= 0; i --){
// console.log(i)
// myLoopCb(i)
// }

// cbEnd()

// }


//NOVA VEZBA

// const myNum = prompt('enter number please')

// // const callbackFunction = () => console.log('done')
// // countFunction(myNum, callbackFunction)


// const startCallBack = () => console.log('start')

// const endCb = () => console.log('end')

// const loopCb = () => console.log('in loop')

// countFunction(myNum, startCallBack, endCb, loopCb)

// FOR EACH

// const myArr = [1, 2, 3, 4]

// myArr.forEach(function (item, index){
//      console.log(`item: ${item}, index: ${index}`)   
// })


//EXERCIZE

function  arrayAverage(arr = []){
        let sum = 0;
        arr.forEach(item => {
                sum += item
        })
        return sum / arr.length
}

const sampleArr = [5, 8, 20, 2, 10]

console.log(arrayAverage(sampleArr))




