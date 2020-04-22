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

#### Part Three - Bonus

Write a function that takes an array as an arguement and returns an array of the Min, Max, and Avg of the arrays values

    function MinMaxAvg(arr) {
        // code here
    }
    I => [2,8,5,6,9,1,4]
    O => [1,8,5]