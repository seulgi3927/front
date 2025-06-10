// for_in.js
// 객체에 사용
const person2 = {
    name: '김달순',
    age: 23,
    language: ['한국어', '영어', '프링스어'],
    education: {
        school: '한국대',
        major: ['컴퓨터공학', '전자공학'],
        graduated: true
    }
};

for(const item in person2) { // 속성명을 출력한다.
    console.log(item);
}
console.log('----------------------------')
// 응용력을 활용하여 key : value 출력해주세요.
/*
name: '김달순',
age: 23,
language: ['한국어', '영어', '프링스어'],
education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true
}
*/

// console.log(person2); 이렇게 하지 않고, for in을 활용하여


for(const item in person2) {
    console.log(item,':', person2[item]);
}
console.log(person2['name']);
console.log(person2['age']);
console.log(person2['language']);
console.log(person2['education']);