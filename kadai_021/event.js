const btn = document.getElementById('btn');
//getElementByIdでHTMLの要素を取得
const text = document.getElementById('text');
//getElementByIdでHTMLの要素を取得

//btnがクリックされたときの処理
//addEventListenerはイベントリスナーを追加するメソッド
btn.addEventListener('click', () => {
    // setTimeout(実行したい処理, 待ち時間ms)は、指定した待ち時間の後に処理を実行する関数
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
        //textはHTMLの要素。textContentプロパティでその要素のテキスト内容を変更できる
    }, 2000); // 2000ミリ秒 = 2秒
});


