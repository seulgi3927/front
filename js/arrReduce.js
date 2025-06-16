// 배열의 여러값을 하나의 값으로 변경할 때 사용
// 주로 모든 값 더하기 할 때 사용
const arr = [ 11, 32, 7, 19, 40, 56, 57]; // 인자 1개와 2개일때 다르다
const result = arr.reduce((prev, next) => {
    console.log('prev: ', prev, ',next: ', next);
    return prev + next // prev 에는 그전 리턴 값이 들어온다. 처음만 예외.
});
console.log('result: ', result);
console.log('-------------------');

const result2 = arr.reduce((prev, next) => {
    console.log('prev: ', prev, ',next: ', next);
    return prev + next 
}, 100); // 0 자리가 최초의 prev값이 됨
console.log('result2: ', result2);

