# XMLHttpRequest と Fetch(GETの場合,JSONを取得する)
## XMLHttpRequest
```Javascript
    let json;
    let xhr = new XMLHttpRequest(); //XMLHttpRequestオブジェクトを作成

    xhr.onreadystatechange = () => {　//イベントハンドラを設定
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                json = JSON.parse(xhr.resultText)//受信完了 resultTextに文字列のレスポンスデータが入る
            }
        }
    };

    xhr.open('GET', 'https://raw.githubusercontent.com/heishi1HUMANITY/test/master/item.json'); //第一引数にメソッド、第二引数にURL
    xhr.send(null); //GETの場合は引数なし
```
## Fetch
```Javascript
    let json;
    fetch('https://raw.githubusercontent.com/heishi1HUMANITY/test/master/item.json')
    .then(response => {
        if(response.ok){ 
            //受信完了
            return response.json();//json以外に,arrayBuffer,bloob,text,formDataがある.Promiseを返す
        }
    })
    .then(result => {
        json = result;
    });
```    
## 終わり
ステータス番号はどっちもstatus.  
XMLHttpRequestはreadyStateを使って0~4段階で処理がかける.  
Fetchはステータスが200番台だったらokがtrueになる.  
Fetchでエラーを飛ばしたいんだったらthrow new Error()を使ってcatchしてくれ.  

以上
