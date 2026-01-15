//HTML要素を取得する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

//ボタンをクリックした時のイベントを設定する
btn.addEventListener('click', () => {
//h2要素（text）の文字を書き換える
    text.textContent = 'ボタンをクリックしました';
});