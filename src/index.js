module.exports = function check(str, bracketsConfig) {

    let strArr = str.split('');
    let result = false;

    if (strArr.length % 2 != 0 ) return result;

    let closes = [];
    let opens = [];

    bracketsConfig.forEach(pair => {
        closes.push(pair[1]);
        opens.push(pair[0]);
    })

//     console.log('closes: ', closes);
//     console.log('opens: ', opens);


    let func = function (strArr) {
//         let opn = brArr[0];
//         let cls = brArr[1];

        if (strArr.length == 0 || strArr == 'false') {
            return strArr;
        }
        else {
            strArr.forEach((bracket, index) =>{
                // console.log('bracket: ', bracket);
                if ( closes.includes(bracket)) {
                    let op = opens[closes.indexOf(bracket)];
                    if (strArr[index - 1] == op) {
                        strArr.splice([index - 1], 2);
//                     console.log("strArr[index - 1]: ", strArr[index - 1]);
//                     console.log("opens[closes.indexOf(bracket)]): ", opens[ closes.indexOf(bracket) ]);
                        // console.log("Попалась закрывашка!", bracket);
                        func(strArr);
                    }
                }
                else if (closes.includes(bracket) && strArr[index - 1] !== opens[closes.indexOf(bracket)]) {
                    return strArr = false;
                }
        })
        return strArr;
        }
    }
        func(strArr);
        strArr.length > 0 ? result = false : result = true;

    // bracketsConfig.forEach(pair => {
    //     strArr.forEach(bracket, index => {
    //         if (bracket == bracketsConfig[pair][1]) {
    //             console.log("Попалась закрывашка!");
    //             // arr.splice([index - 1], 1, 'DEL');
    //         }
    //     });
    // });

    // const func = function (arr) {
    //     arr.forEach((bracket, index) => {
    //         for (let i = 0; i < bracketsConfig.length; i++) {
    //             if ( bracket ==  bracketsConfig[i][1] ) {
    //                 if ( strArr[index - 1] == bracketsConfig[i][0] ) {
    //                     result = true;
    //                     arr.splice([index - 1], 1, 'DEL');
    //                     sarr.splice([index], 1, 'DEL');
    //                 }
    //             }
    //         }
    //     })
    //     return arr;
    // }

    // strArr.forEach((bracket, index) => {
    //     for (let i = 0; i < bracketsConfig.length; i++) {
    //         if ( bracket ==  bracketsConfig[i][1] ) {
    //             if ( strArr[index - 1] == bracketsConfig[i][0] ) {
    //                 result = true;
    //                 strArr.splice([index - 1], 1, 'DEL');
    //                 strArr.splice([index], 1, 'DEL');
    //             }
    //             else if ( strArr[index - 1] == 'DEL') {
    //                 if (strArr[index - 3] == bracketsConfig[i][0]) {
    //                     result = true;
    //                     strArr.splice([index - 3], 1, 'DEL');
    //                     strArr.splice([index], 1, 'DEL');
    //                 }
    //                 else if (strArr[index - 3] == 'DEL') {
    //                     if (strArr[index - 5] == bracketsConfig[i][0]) {
    //                         result = true;
    //                         strArr.splice([index - 5], 1, 'DEL');
    //                         strArr.splice([index], 1, 'DEL');
    //                         console.log(strArr);
    //                     }
    //                 }
    //             else return result = false;
    //             } 
    //             else {
    //                 return result = false;
    //             }
    //         }
    //     }
    // });
    // let resArr = strArr.filter(el => el !== 'DEL');
    // if (resArr.length > 0) return false;
    // else return true;
    return result
}
