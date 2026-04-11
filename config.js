const CONFIG = {
    profile: {
        name: "あなたの名前 / NAME",
        title: "Student Developer",
        intro: "ここに自己紹介文を入力します。あなたの情熱や、現在学んでいることなど。",
        image: "img/profile.jpg", // imgフォルダ内の画像
        qualifications: ["基本情報技術者試験", "ITパスポート"],
        github: "https://github.com/your-id" // あなたのGitHubトップ
    },
    works: [
        {
            id: "work01",
            title: "作品タイトル01",
            summary: "作品の簡単な概要文。何のためのアプリかなど。",
            images: {
                title: "works/work01/title.png", 
                main: "works/work01/main.png"
            },
            videoID: "", // YouTube動画があればIDを入れる（例: dQw4w9WgXcQ）
            github: "https://github.com/your-id/repo-name", // 作品のリポジトリURL
            stack: "JavaScript / HTML / CSS",
            duration: "2週間",
            team: "1人（個人制作）",
            background: "制作の背景をここに記載します。",
            challenge: "挑戦したことの内容。",
            detail: {
                subtitle: "こだわった（工夫した）こと",
                codeImg: "works/work01/code.png",  // 左側：コード画像
                uiImg: "works/work01/ui.png",      // 右側：対応する画面画像
                comment: "コードの補足コメント。なぜこの処理を書いたかなど。",
                learning: "学んだこと・振り返りの内容。"
            }
        }
    ]
};