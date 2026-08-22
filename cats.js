// ==========================================
// ねこマスターデータ (cats.js)
// ==========================================
// ここに新しい猫の情報をどんどん追加していきます。
// spawn_time: "all"（いつでも）、"night"（夜 19:00?翌4:59 限定）

const CAT_DATA = {
    "haruneko": { 
        id: "haruneko", 
        name: "料理猫", 
        image: "./haruneko.png", 
        description: "まめな食堂の料理人。栗が好き。",
        spawn_time: "all"
    },
    "kanineko": {
        id: "kanineko",
        name: "カニ猫",
        image: "./kanineko.png",
        description: "夜な夜なカニを探す猫。横歩きが得意。",
        spawn_time: "night"
    },
    "turi_neko": {
        id: "turi_neko",
        name: "釣り猫",
        image: "./turi.png",
        description: "のんびり魚を狙っている猫。餌を自分で食べてしまう。",
        spawn_time: "all"
    },
    "tibita": {
        id: "tibita",
        name: "ちびた",
        image: "./tibita.png",
        description: "まめな食堂の匂いにつられてきた猫。相棒の猫がいる。",
        spawn_time: "all"
    },
    "over_neko": {
        id: "over_neko",
        name: "オーバーオール猫",
        image: "./over.png",
        description: "青い服が好き。青以外の服は絶対着ない。",
        spawn_time: "all"
    }
};