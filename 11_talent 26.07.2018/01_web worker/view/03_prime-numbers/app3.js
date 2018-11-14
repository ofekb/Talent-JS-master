var txt = document.getElementById('primes'),
	worker = new Worker('w3/main-worker.js');


worker.onmessage = function(e) {
    txt.innerHTML = e.data;
};

//worker.terminate();