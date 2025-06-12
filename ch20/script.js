const headerNavs = [
    { title: '얄코강좌는', link: '#about' },
    { title: 'HTML', link: '#html' },
    { title: 'CSS', link: '#CSS' },
    { title: '커리큘럼', link: '#curriculum' },
    { title: '문의하기', link: '#contact'}
];

const $headerNavUl = document.querySelector('nav.header__nav > ul');

for(const item of headerNavs) {
    const li = document.createElement('li');
    // $li.className = 'header__nav-item';
    $li.classList.add('header__nav-item');
    // 1개 추가할때는 name 이나 list 차이 없으나 여러개 추가할때는 name 이편하다.
    // add 는 계속 add add add 해줘야함 
    $li.innerHTML = `
    <a href="${item.link}">${item.title}</a>;
    $headerNavUl.appendChild($li)
    `;
}

// about
const aboutCards = [
    {
        img: './images/about_1.svg',
        title: '빠른 강의',
        descs: [
            '군더더기 없는 진행으로',
            '여러분의 시간을 절약합니다.'
        ]
    },
    {
        img: './images/about_2.svg',
        title: '손쉬운 학습',
        descs: [
            '강의 페이지를 활용해서',
            '편리하게 실습할 수 있습니다.'
        ]
    },
    {
        img: './images/about_3.svg',
        title: '플레이그라운드',
        descs: [
            '강의를 위해 제작한 도구가',
            '반복 학습을 도와줍니다.'
        ]
    }
];

const $aboutDiv = document.querySelector('#about > div.about');

for( let i=0; i < aboutCards.length; i++) {
    const card = aboutCards[i];

    const $aboutDiv = document.createElement('div');
    $aboutDiv.classList.add('about__card');

    const $img = document.createElement('img');
    $img.classList.add('abot__icon');
    $img.setAttribute('src', 'alt');

    const $h2 = document.createElement('h2');
    $h2.classList.add('abot__title');
    $h2.classList.add('_', ( i + 1));
    $h2.textContent = card.title;

    const $p =document.querySelector('p');
    $p.classList.add('abotu__text');

    for(const descs of card.descs) {
        const $word = document.createElement('div');
        $word.textContent = descs;
        $p.appendChild($word);
    }

    $div.appendChild($img);
    $div.appendChild($h2);
    $div.appendChild($p);
    $aboutDiv.appendChild($div);

}
