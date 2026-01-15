//今日の日付と時刻を取得するJavaScriptコード。注意点として、月は0から始まるため、+1する必要があります。
const today = new Date();
//todayから年、月、日、時、分、秒を取得。getは取得するという意味。FullYearは4桁の年を取得するメソッド
const year = today.getFullYear();
//ここは月を取得する。getMonth()は0から始まるため、+1する
const month = today.getMonth() + 1;
//日を取得
const day = today.getDate();
//``を使うと文字列の中に変数を埋め込むことができる。
console.log(`${year}年${month}月${day}日`);