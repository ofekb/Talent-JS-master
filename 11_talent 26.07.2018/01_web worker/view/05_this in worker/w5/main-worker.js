
onmessage = function(e) {
  console.log(this);

  fetch("https://reqres.in/api/user/0?delay=3")
  .then(res => console.log(res));
};
