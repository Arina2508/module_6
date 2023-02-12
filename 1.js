function oddEvenArr(arr) {
            let arrEven = [];
            let arrOdd = [];
            let arrZero = [];
            let arrOther = [];
            for (let i = 0; i < arr.length; i++) {
                if (Number.isInteger(arr[i])) {
                if (arr[i] === 0) {
                        arrZero.push(arr[i]);
                    }
                    else if (arr[i]%2 == 0) {
                        arrEven.push(arr[i]);
                    }
                    else arrOdd.push(arr[i]);
                }
                else arrOther.push(arr[i]);
            }
            console.log('Количество четных: ' + arrEven.length + ' Количество нечетных: ' + arrOdd.length + ' Количество нулей: ' + arrZero.length + ' Количество других: ' + arrOther.length)
        }