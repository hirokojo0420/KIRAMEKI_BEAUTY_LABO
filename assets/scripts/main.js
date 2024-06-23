

const options = {

    type: 'loop', //スライドをループさせる
    perPage: 3,
    perMove: 1,
    gap: 20,
    start: 1, //最初に中央に表示するスライド

    breakpoints: {
        1060: {
            perPage: 2, // 1000px未満の表示枚数
            padding: "4em", //左右のスライド表示
        },

        880: {
            perPage: 1, // 768px未満の表示枚数
            padding: "3em", //左右のスライド表示
        }, 
    },
};

const splide = new Splide(".splide", options);
splide.mount();

