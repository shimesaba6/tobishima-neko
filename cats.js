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
        description: "夜な夜なカニを探す猫。横歩きが得意。",
        spawn_time: "night"
    },
    "lemon": {
        id: "lemon",
        name: "レモネード猫",
        image: "./lemon.png",
        description: "島を盛り上げようと頑張る猫。客人にはまずレモネードでおもてなしをする。",
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
        description: "派手なアロハシャツを好むオジサン。時々遊びに来ては海に出る。多分釣りが好き。",
        spawn_time: "all"
    },
    "drink": {
        id: "drink",
        name: "自販機猫",
        image: "./drink.png",
        description: "観光に来た不慣れな猫。店は夕方には閉まってしまうので、夜は自販機しかないのだ。",
        spawn_time: "night"
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
        is_special: true // 【重要】これでランダム出現しなくなります
    },

    // -------------------------
    // 滞在スポット限定の猫
    // -------------------------
    "stay_mamena": {
        id: "stay_mamena",
        name: "まめな常連猫",
        image: "./haruneko.png", // ※専用の画像を描いたらファイル名を変更してください
        description: "まめな食堂でのんびり過ごした人だけが出会える猫。お腹いっぱい。",
        spawn_time: "all",
        is_special: true
    },
    "stay_okiyuu": {
        id: "stay_okiyuu",
        name: "天満宮の守り猫",
        image: "./tibita.png", // ※専用の画像を描いたらファイル名を変更してください
        description: "沖友天満宮でお参りした人にだけ姿を見せる、ありがたい猫。",
        spawn_time: "all",
        is_special: true
    },
    "stay_test": {
        id: "stay_test",
        name: "テスト休憩猫",
        image: "./over.png", // ※デバッグ用
        description: "テストスポットで10秒休憩すると現れるデバッグ用ねこ。",
        spawn_time: "all",
        is_special: true
    },

    // -------------------------
    // 【サンプル】天気・時間限定の猫
    // -------------------------
    "amagappa": {
        id: "amagappa",
        name: "雨がっぱ猫",
        image: "./haruneko.png", // ※専用の画像を描いたらファイル名を変更してください
        description: "雨の日だけひょっこり現れる。水たまりが好き。",
        spawn_time: "all",
        spawn_weather: "rain" // 【重要】雨の日のみ出現
    },
    "sunset_cat": {
        id: "sunset_cat",
        name: "たそがれ猫",
        image: "./yumi.png", // ※専用の画像を描いたらファイル名を変更してください
        description: "夕暮れ時の海辺を散歩するのが日課。哀愁が漂う。",
        spawn_time: "sunset" // 【重要】夕方のみ出現
    }
};