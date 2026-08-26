// ==========================================
// ねこマスターデータ (cats.js)
// ==========================================
// 【設定のヒント】
// spawn_time: "all"（いつでも）、"night"（夜）、"sunset"（夕方16:00〜18:00）
// spawn_weather: 指定しなければいつでも。"rain" と書くと雨の日限定。
// is_special: true と書くと、普通には出現せず、QRコードや滞在ボーナス専用になります。

const CAT_DATA = {
    // -------------------------
    // 既存の通常ねこたち
    // -------------------------
    "haruneko": { 
        id: "haruneko", 
        name: "料理猫", 
        image: "./haruneko.png", 
        description: "食堂の料理人。栗が好き。",
        spawn_time: "all"
    },
    "kanineko": {
        id: "kanineko",
        name: "カニ猫",
        image: "./kanineko.png",
        description: "夜な夜な海辺でカニを探す猫。横歩きが得意。",
        spawn_time: "night"
    },
    "lemon": {
        id: "lemon",
        name: "レモネード猫",
        image: "./lemon.png",
        description: "おしゃべりが好きな猫。客人にはまずレモネードでおもてなしをする。",
        spawn_time: "all"
    },
    "turi_neko": {
        id: "turi_neko",
        name: "釣り猫",
        image: "./turi.png",
        description: "のんびり魚を狙っている猫。餌を自分で食べてしまう。",
        spawn_time: "all"
    },
    "yumineko": {
        id: "yumineko",
        name: "ゆみ猫",
        image: "./yumi.png",
        description: "弓道が得意な猫。みかん農家をしている。よくまめな食堂で夕飯を食べる",
        spawn_time: "all"
    },
    "umioyaji": {
        id: "umioyaji",
        name: "海おじ猫",
        image: "./umioyaji.png",
        description: "派手なアロハシャツを好むオジサン。時々島に遊びに来ては海に出る。多分釣りが好き。",
        spawn_time: "all"
    },
    "drink": {
        id: "drink",
        name: "自販機猫",
        image: "./drink.png",
        description: "観光に来た不慣れな猫。島の店は早めに閉まってしまうので、夜は自販機しかないのだ。",
        spawn_time: "night"
    },
    "tibita": {
        id: "tibita",
        name: "ちびた",
        image: "./tibita.png",
        description: "まめな食堂の匂いにつられてきた猫。相棒の猫がいる。",
        spawn_time: "all",
        flee_time: 15,
        spawn_rate: 1
    },
    "over_neko": {
        id: "over_neko",
        name: "オーバーオール猫",
        image: "./over.png",
        description: "青い服が好き。青以外の服は絶対着ない。",
        spawn_time: "all"
    },

    // -------------------------
    // シークレット猫（QRコード用）
    // -------------------------
    "qoyatu": {
        id: "qoyatu",
        name: "おやつ猫",
        image: "./qoyatu.png",
        description: "『ベジュ』と『ちびた』は〇ゅ～るが大好き。特別な場所でしか出会えないレア。",
        spawn_time: "all",
        is_special: true 
    },

    // -------------------------
    // 滞在スポット限定の猫
    // -------------------------
    "stay_mamena": {
        id: "stay_mamena",
        name: "まめな常連猫",
        image: "./haruneko.png", 
        description: "まめな食堂でのんびり過ごした人だけが出会える猫。お腹いっぱい。",
        spawn_time: "all",
        is_special: true
    },
    "stay_okitomo": {
        id: "stay_okitomo",
        name: "お祭り猫",
        image: "./maturi.png", 
        description: "沖友天満宮の例祭に向けて練習をしている猫。正直大きな音は苦手なのだ。",
        spawn_time: "all",
        is_special: true
    },
    "stay_test": {
        id: "stay_test",
        name: "テスト休憩猫",
        image: "./over.png", 
        description: "テストスポットで10秒休憩すると現れるデバッグ用ねこ。",
        spawn_time: "all",
        is_special: true
    },

    // -------------------------
    // 天気・時間限定の猫
    // -------------------------
    "amagappa": {
        id: "amagappa",
        name: "雨がっぱ猫",
        image: "./haruneko.png", 
        description: "雨の日だけひょっこり現れる。水たまりが好き。",
        spawn_time: "all",
        spawn_weather: "rain" 
    },
    "sunset_cat": {
        id: "sunset_cat",
        name: "たそがれ猫",
        image: "./yumi.png", 
        description: "夕暮れ時の海辺を散歩するのが日課。哀愁が漂う。",
        spawn_time: "sunset" 
    }
};