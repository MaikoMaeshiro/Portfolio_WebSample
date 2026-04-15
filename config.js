const CONFIG = {
    profile: {
        name: "あなたの名前 / NAME",
        title: "Student Developer",
        intro: "ここに自己紹介文を入力してください。あなたの情熱や、現在学んでいることなど。",
        image: "profile.png", // プロフィール画像のファイル名
        qualifications: ["基本情報技術者試験", "ITパスポート", "TOEIC 700点"],
        github: "https://github.com/your-id"
    },
    works: [
        {
            id: "work01",
            title: "テーマ切り替え機能の実装",
            summary: "JavaScriptで動的にCSS変数を操作し、外観を変更する機能です。",
            images: {
                title: "title-screen.png", // タイトル画面画像
                main: "main-screen.png"    // メイン画面画像
            },
            github: "https://github.com/...",
            stack: "JavaScript / HTML / CSS",
            duration: "2週間",
            team: "1人（個人制作）",
            background: "制作の背景：ユーザーが自分の好みの色でアプリを使えるようにしたかったため。",
            challenge: "挑戦したこと：DOM操作とLocalStorageを組み合わせた状態保持。",
            detail: {
                subtitle: "工夫・苦労・学習したこと",
                codeImg: "code-js.png",   // ソースコード画像（左）
                uiImg: "code-css.png",    // 対応する画面画像（右）
                comment: "JavaScriptからCSSを切り替える処理に苦戦しましたが、試行錯誤の末に実装できました。",
                learning: "学んだこと：CSS変数の強力さと、JSとの連携のしやすさを学びました。"
            }
        }
        // 次の作品を追加する場合は、ここからコピーして追加してください
    ]
};