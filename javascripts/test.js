// var fetch = require('node-fetch');
const url2 = "https://attn-server.herokuapp.com/attn/table/5f206d58ea613a00172d89ff";
async function req1() {
    var s = Date.now();
    var res = await fetch(url);
    var m = Date.now();
    console.log((m-s)/1000);
    var data = await res.json();
    var e = Date.now();
    console.log((e-s)/1000);
    console.log(data);
}
req1();