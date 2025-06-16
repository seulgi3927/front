// map을 사용하는 이유는? 똑같은 크기의 새로운 배열을 만들면서 새로운 값들로 세팅하고 싶을때 (기본은 deep copy)
const arr = [ 11, 32, 7, 19, 40, 56]; 
const mapArr = arr.map((item) => item +1);
// const mapArr = arr; → 얘는 쉘로우카피  

mapArr[0] = 20;

console.log('arr: ', arr);
console.log('mapArr: ', mapArr);
console.log('arr === mapArr: ', arr === mapArr);

const myArr = {
    0:11,
    1:32,
    2:7,
    3:19,
    4:40,
    5:56,
    length: 6,
    forEach: function(cb) {
        for(let i=0; i<this.length; i++) {
            cb(this[i], i);            
        }
        return;
    },
    map: function(cb) {
        const temp = new Array(this.length);
        // 작업
        for(let i=0; i<this.length; i++) {
            const result = cb(this[i], i);
            temp[i] = result;
            // temp[i] = cb(this[i], i); → const ~ result; 를 이렇게 한줄로 쓸 수도 있다.
        }
        return temp;
    }
};
const myMaparr = myArr.map(item => item +1);
console.log('myMapArr: ', myMaparr);
