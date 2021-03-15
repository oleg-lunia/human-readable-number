module.exports = function toReadable(number) {
    let arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr3 = ['hundred'];
    let numArr = String(number).split('');
    if (number == 0) {
        return 'zero';
    } else if (number > 0 && number <= 19) {
        return arr[number];
    } else if ((number % 10) == 0 && number > 19 && number < 100) {
        return (arr2[numArr[0]]);
    } else if (number > 19 && number < 100) {
        return (arr2[numArr[0]] + ' ' + arr[numArr[1]])
    } else if ((number % 100) == 0 && number < 1000) {
        return (arr[numArr[0]] + ' ' + arr3)
    } else if (numArr.length > 2 && (numArr[1] + numArr[2]) < 20 && number < 1000) {
        let num = Number(numArr[1] + numArr[2]);
        return (arr[numArr[0]] + ' ' + arr3 + ' ' + arr[num]);
    } else if (numArr.length > 2 && (number % 10) == 0) {
        return (arr[numArr[0]] + ' ' + arr3 + ' ' + arr2[numArr[1]]);
    } else if (number >= 100 && number < 1000) {
        return (arr[numArr[0]]+ ' ' + arr3+ ' ' + arr2[numArr[1]]+ ' ' + arr[numArr[2]])
    }

}
