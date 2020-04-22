## Week I Day III Algorithms

### Predict the output

#### Part One

    function a(arr) {
        b = arr.length;
        temp = arr[b-1];
        arr[b-1] = arr[0];
        arr[0] = temp;
        return arr;
    }

    console.log(a([1,2,3]));
    console.log(a([2,4]));

#### Part Two

    function a(arr) {
        x = arr.length;
        for(var i = 0; i < x/2; i++) {
            temp = arr[x-i-1];
            arr[i] = arr[x-i-1];
            arr[x-i-1] = temp;
        }
    }

    console.log(a([1,2,3]));
    console.log(a([1,2,3,4,5]));