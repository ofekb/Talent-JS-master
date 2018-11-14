# CLASS TASK:

## create a simle html page, and use js to do the following steps:
* get data from https://reqres.in/api/users?page=2

(in the link - replace '2' with a number between 1-4 - according to the user input)
<br/>
<br/>
examle to response

```json
{
    "page": 2,
    "per_page": 3,
    "total": 12,
    "total_pages": 4,
    "data": [
        {
            "id": 4,
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
            "id": 5,
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
            "id": 6,
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
    ]
}
```
* use the response from prev step, and read the id from the first client:
```js
response.json().data[0].id
```
* with the id from prev step, get the full data from: https://reqres.in/api/users/2

```json
{
    "data": {
        "id": 2,
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    }
}
```

* show in the html page the img of the response from prev step
