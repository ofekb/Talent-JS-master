     /*JSON:
        pair of key & value
        key - is string or symbol
        value - can be: array, json object, number, boolean.... (every type)

        function            |       parameter       |       returns
        _________________________________________________________________
        JSON.stringify      |       json object     |       string
        _________________________________________________________________
        JSON.parse          |       string          |       json object
        _________________________________________________________________
        */
       var student = {
        "name": "Shaked",
        "grade": 100,
        "isMale": true,
        "hobies": ["Music", "Sport"],
        "address": {
            "city": "tel-aviv",
            "street": "Homa Umigdal",
            "houseNumber": 29
        }
    };
    var str0 = JSON.stringify(student);
    var str1 = JSON.stringify(student, undefined, 2);
    var str2 = student.toString();
    console.log("str1", str0);
    console.log("str1", str1);
    console.log("str2", str2);
    var myStr = `
    { "student":{
            "name": "Shaked",
            "grade": 100,
            "isMale": true,
            "hobies": [
                "Music",
                "Sport"
            ],
            "address": {
                "city": "tel-aviv",
                "street": "Homa Umigdal",
                "houseNumber": 29
            }
        }          
    }
    `;
    var obj = JSON.parse(myStr);
    console.log(obj.student.hobies);