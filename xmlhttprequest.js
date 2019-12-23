let json;
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/heishi1HUMANITY/test/master/item.json');
// xhr.responseType = 'json';
xhr.send(null);

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            json = JSON.parse(xhr.responseText); 
            output();
        }else{
            console.log(xhr.status + ':' + xhr.statusText);
        }
    }
};

let output = () => {
    for(let i = 0; i < json.keys; i++){
        console.log(json.store[i].name + ' / ' + json.store[i].id);
    }
};
