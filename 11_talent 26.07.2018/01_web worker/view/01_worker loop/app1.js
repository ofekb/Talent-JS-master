let num=0;

function callLoop() {

    var worker = new Worker('w1/main-worker.js');

    // postMessage in this file will call "onmessage" in the worker
    worker.postMessage({index: num++, limit:10 ** 10});

    worker.onmessage = function (res) {
        console.log(res)
        document.getElementById("res").innerHTML += `<p>${res.data}</p>`;
    };

    //worker.terminate();

}
