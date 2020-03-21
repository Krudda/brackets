module.exports = function check(str, bracketsConfig) {

    let strArr = str.split('');
    let result = false;

    if (strArr.length % 2 != 0 ) return result;

    strArr.forEach((bracket, index) => {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if ( bracket ==  bracketsConfig[i][1] ) {
                if ( strArr[index - 1] == bracketsConfig[i][0] ) {
                    result = true;
                    strArr.splice([index - 1], 1, 'DEL');
                    strArr.splice([index], 1, 'DEL');
                }
                else if ( strArr[index - 1] == 'DEL') {
                    if (strArr[index - 3] == bracketsConfig[i][0]) {
                        result = true;
                        strArr.splice([index - 3], 1, 'DEL');
                        strArr.splice([index], 1, 'DEL');
                    }
                    else if (strArr[index - 3] == 'DEL') {
                        if (strArr[index - 5] == bracketsConfig[i][0]) {
                            result = true;
                            strArr.splice([index - 5], 1, 'DEL');
                            strArr.splice([index], 1, 'DEL');
                            console.log(strArr);
                        }
                    }
                else return result = false;
                } 
                else {
                    return result = false;
                }
            }
        }
    });
    let resArr = strArr.filter(el => el !== 'DEL');
    if (resArr.length > 0) return false;
    else return true;
}
