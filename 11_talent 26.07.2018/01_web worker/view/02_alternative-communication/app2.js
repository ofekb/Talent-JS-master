let APP = {
    callback1(prop) {
        console.log("callback1", prop);
    },
    callback2(prop) {
        console.log("callback2", prop);
    }
};


let worker = new Worker('w2/main-worker.js');

worker.onmessage = (e) =>{
    APP[e.data.callbackToExec](e.data.message);
};


// click 1 will call test1 function in the web-worker
function click1() {
    worker.postMessage({
        funcToExec: 'test1',
        message: "app2 called test1"
    });
}

// click 2 will call test2 function in the web-worker
function click2() {
    worker.postMessage({
        funcToExec: 'test2',
        message: "app2 called test2"
    });
}



