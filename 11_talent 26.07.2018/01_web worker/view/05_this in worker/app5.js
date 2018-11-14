function showWindow() {
    console.log(this);
}


function showWorker() {
    worker = new Worker('w5/main-worker.js');
    worker.postMessage('');
}