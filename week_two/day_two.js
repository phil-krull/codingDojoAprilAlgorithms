var arr1=[1,2,3];

var arr2=['a','b','c','d','e'];


var myObj = {};

for(var i = 0; i < arr2.length; i++){
    // console.log('i', i)
    myObj[arr1[i]] = arr2[i]
    // console.log('myObj[arr1[i]]', myObj[arr1[i]])
}
// console.log('myObj', myObj)

function invertHash(obj) {
    console.log('obj', obj)

    var newObj = {};

    for(var k in obj) {
        console.log('k is:', k);
        console.log('value is:', obj[k]);
        newObj[obj[k]] = k;
    }
    console.log('newObj', newObj)

}
    // I => invertHash({'a':'x', 'b':'y', 'c':'z'})
    // O => {'x':'a', 'y':'b', 'z':'c'}


// create a new object
// loop through input
// set the key of the new object tobe the value of the old object
// set the value on the new object to be the key of the old object
// return new object


// invertHash(myObj);

function MinMaxAvg(arr) {
    var rObj = {
        'min': arr[0],
        'max': arr[0]
    };

    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){

        sum+=arr[i];

        if(arr[i] > rObj['max']) {
            rObj['max']=arr[i];
        } else if(arr[i] < rObj['min']) {
            rObj['min']=arr[i];
        }
    }
    console.log('sum', sum)
    rObj['avg'] = sum/arr.length;
    return rObj;
}
var myArr = [5,2,8,10,4,9,7,1];
var result = MinMaxAvg(myArr);
console.log('result', result);

// {'min': 2, 'max': 20, 'avg': 10}

var person = {
    'name': 'phil',
    'phoneNumber': 444444444
};

person['location'] = 'Tulsa';
console.log('person', person)
person['name'] = 'Claire';
console.log('person', person)

for(characterist in person) {
    console.log('characterist', characterist);
    console.log('value', person[characterist]);
}