

const options = {

    type: 'loop', //スライドをループさせる
    perPage: 3,
    perMove: 1,
    gap: 20,
    focus: 2, //activeなスライドを中央に表示

    breakpoints: {
        1200: {
            perPage: 2, // 1000px未満の表示枚数
            padding: "1.5em", //左右のスライド表示

        },

        768: {
            perPage: 1, // 768px未満の表示枚数
            padding: "1em", //左右のスライド表示
        },
    },
};

const splide = new Splide(".splide", options);
splide.mount();

