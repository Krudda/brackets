module.exports = function check(str, bracketsConfig) {

    let strArr = str.split('');
    let result = false;
    
    // console.log(strArr);

    if (strArr.length % 2 != 0 ) return result;

    // console.log(strArr);

    strArr.forEach((bracket, index, strArr) => {
        // console.log('Текущая скобка равна: ', bracket);
        // console.log('.. а индекс равен: ', index);
        for (let i = 0; i < bracketsConfig.length; i++) {
            if ( bracket ==  bracketsConfig[i][1] ) {
                // console.log('Попалась закрывашка! ');
                if ( strArr[index - 1] == bracketsConfig[i][0] ) {
                    // console.log('Правильная закрывашка! ');
                    result = true;
                    strArr.splice([index - 1], 1, 'удаленная открвывающая скобка');
                    strArr.splice([index], 1, 'удаленная закрывающая скобка');
                    // console.log(strArr);
                }
                else {
                    // console.log('Не правильная закрывашка!');
                    return result = false;
                }
            }
        }
    });
    return result;
}
