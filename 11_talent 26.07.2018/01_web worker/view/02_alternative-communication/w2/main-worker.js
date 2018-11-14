var APP = {
    test1(prop) {
        console.log("test1", prop);
        postMessage({
            callbackToExec: "callback1",
            message: 'server called callback1'
        })
    },
    test2(prop) {
        console.log("test2", prop);
        postMessage({
            callbackToExec: "callback2",
            message: 'server called callback2'
        })
    }
};



onmessage = function (e) {
    //the web-worker will check which function `app2.js` wants to execute
    APP[e.data.funcToExec](e.data.message);
};

