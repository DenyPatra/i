const items = [
    {
        name: "Battle Healer",
        desc: "Kartu yang baru saja dikeluaran oleh Supercell ini langsung menjadi meta. Kartu ini sering digunakan karena memang kartu support dan cocok di kebanyakan deck. Kartu ini sering digunakan bersama dengan golem, goblin barrel, battle ram, hog rider, dan masih banyak lagi."
    },
    {
        name: "Skeleton Barrel",
        desc: "Kartu yang keluar dua tahun lalu ini tiba-tiba menjadi overpowered ketika mendapat rework ability dari Supercell. Ketika balon pecah, sekarang juga mengeluarkan damage. Damage yang dikeluarkan cukup untuk membunuh skeleton, bat, dan spear goblin. Jika dibiarkan, satu kali serangan dengan skeleton barrel ini bisa membuat hitpoint tower musuh menjadi setengahnya. Kartu ini sering dicombokan dengan miner, baby dragon, dan kartu-kartu 'mini tank' lainnya."
    },
    {
        name: "Bomb Tower",
        desc: "Semenjak berjalannya meta deck darat dan 'receh', bomb tower ini juga sering digunakan pula. Memang, untuk meta permainan kali ini, bomb tower lebih bagus dari inferno tower dan juga cannon."
    },
    {
        name: "Magic Archer",
        desc: "Kartu legendary yang satu ini memiliki ability yang keren. Menembus musuh. Kartu ini sering digunakan bersama dengan cycle deck, terutama ditambah dengan tornado. Kartu ini memang keren, tetapi ada satu hal yang membuatnya sangat tidak berguna adalah mati saat terkena fireball. Namun tenang, di meta kali ini fireball sudah jarang dipakai, jadi kemungkinan menang dengan deck ini masih aman."
    },
    {
        name: "Miner",
        desc: "Miner, kartu andalan cycle deck. Hampir setiap permainan cycle menggunakan miner. Karena miner ini adalah nyawa bagi kartu-kartu yang rentan seperti goblin, skeleton, bat, minion. Menurut statsroyale, kartu ini adalah kartu yang paling banyak digunakan saat ini."
    }
];

const target = document.querySelector('#target');

template = "";
for (let item of items) {
    template += `
    <div class="content">
        <div class="title">${item.name}</div>
        <div class="box">
            <div class="line"></div>
            <article class="desc">${item.desc}</article>
        </div>
    </div>
    `;
}

target.innerHTML = template;


// sticky navbar
const nav = document.querySelector('nav');
const navOffsetTop = nav.offsetTop;
const main = document.querySelector('main');
addEventListener('scroll', function (event)
{
    if (window.scrollY >= navOffsetTop) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
        nav.style.background = `rgb(3, 3, 3)`;
        main.style.marginTop = `${nav.offsetHeight}px`;
    } else {
        nav.style.position = '';
        nav.style.top = '';
        nav.style.background = `rgba(3, 3, 3, 0.9)`;
        main.style.marginTop = 0;
    }
});