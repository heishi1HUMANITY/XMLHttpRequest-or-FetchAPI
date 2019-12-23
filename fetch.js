const fetch = require('node-fetch');

let json;
fetch('https://raw.githubusercontent.com/heishi1HUMANITY/test/master/item.json', {
    method: 'GET' //methodがGETの場合省略可
})
.then(response => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error(response.status + ':' + response.statusText);
    }
})
.then(result => {
    json = result;
    output();
})
.catch(error => {
    console.log(error);
});

let output = () => {
    for(let i = 0; i < json.keys; i++){
        console.log(json.store[i].name + ' / ' + json.store[i].id);
    }
};
