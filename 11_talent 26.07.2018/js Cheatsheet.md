# LearnJS

##### Ok, so what is this ?

> `LearnJs` is an attempt to portray the best parts of Javascript that are
pretty tough and hard to find. It is to be noted that this is not a book/guide
in any form, but a congregation of best practices, language constructs, and other
simple yet effective snippets that gives us an essence of how we can harness
the best out of the language.

------------------

##### So what are all covered in the cheatsheet ?

- [Intro](#intro)
- [Maps](#maps)
- [Sets](#sets)
- [Arrays](#arrays)
- [Strings](#strings)
- [Objects](#objects)
- [Functions](#functions)
- [Conventions](#onventions)
- [Closures](#closures)
- [Currying](#currying)
- [Tails Calls](#tail-calls)

------------------

##### 1. Intro:

`1.1 Declarations`:

```javascript

// bad
var arr = new Array();
var str = new String();
var num = new Number();
var boo = new Boolean();
var obj = new Object();
var reg = new RegExp();
var fun = new function();

// good
var arr = [],
    str = "",
    num = 0,
    boo = false,
    obj = {},
    reg = /()/,
    fun = function(){};
```

We have to understand the fact that in Javascript everything is an object,
so for suppose if we declare a string using the `String` object and compare
it with `var a = ""` then the outcome of the comparision would be false. This
is simply because if we declare a string using the `bad` way and compare it
with a string declared using the `good` way then fundamentally we are comparing
a string with an Object(String).

`Semicolons`:

```javascript

// Snippet one
var foo = {}

foo.code = "this is javascript empire"
foo.engine = "node 0.12.7"
foo.author = "akhil pandey"
foo.version = 0.1

// Snippet two
var bar = {};

bar.name = "akhil pandey";
bar.url = "www.akhilhector.com";
bar.github = "AkhilHector";
bar.age = 20;

if(typeof(bar) == typeof(foo)) {
        console.log("Semicolons donot matter at all")
}

```

Code Snippet one and two are the same. but the fundamental difference
between both the code samples is that one uses semicolons in the lang-
-uage semantics but whereas the other doesnot. Basically we are taught
to use semicolons in languages such as C, C++, Java etc since lines of
code are terminated using ';' but in Javascript the entire scenario is
different. There is absolutely no difference in execution of code with
or without semicolons.

------------------

##### 2. Maps:

Methods part of Javascript **Map** Object:

- **Map**.set(),
- **Map**.get(),
- **Map**.has(),
- **Map**.size,
- **Map**.clear(),
- **Map**.delete(),
- **Map**.keys(),
- **Map**.values(),
- **Map**.entries()

------------------
**2.1 Map**.set() :
```javascript
let m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");               // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");               // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }
m1.set("name", "akhil pandey")  //Map { { id: 1 } => 'foo', { id: 2 } => 'bar', 'name' => 'akhil pandey' }

```
**Map**.set() is method which is used to add or update an element with a
specific key and value in a map. Here the first argument is the key whilst
the second argument is the value. The keys can be of any type but it would
be preferable to use `objects` as keys instead of `strings` because if we
use `strings` as keys there wouldn't be any significant difference between
`Maps` and `Objects`.

------------------
**2.2 Map**.get() :
```javascript
var m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");   // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");   // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }

m1.get(x);          //returns 'foo'
```
**Map**.get() is a method which is used to retrieve an element from the `Map`
object with a specific key. So the key is passed as an argument and the element associated with that key is returned. If no key is passed as an argument then
the method returns with `undefined`.

------------------
**2.3 Map**.has() :
```javascript
var m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");   // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");   // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }

m1.has(x)           // returns true
m1.has("akhil")     // retuqrns false
```
**Map**.has() is a method which indicates if an element with the requested key
is present in the map or not. The method takes only one argument which is the
key and it returns a `true` if the element is present or `false` if the element
is not present.

------------------
**2.4 Map**.size :
```javascript
var m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");   // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");   // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }

m1.size;
```
**Map**.size is an accessor property that returns the number of elements present
in the `Map` object. Since it is an accessor property we shouldn't call/use this
like a method, So if `m1.size()` is called then it throws a TypeError saying `m1.size` is not a function. Therefore the valid call to that property is `m1.size`.

------------------
**2.5 Map**.clear() :
```javascript
var m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");   // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");   // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }

m1.has(x);         // returns true
m1.clear();
m1.has(x);         // returns false
```
**Map**.clear() is a method which clears/removes all the elements that are present
in the `Map` object. The method doesn't take any arguments but throws `undefined` in return.

------------------
**2.6 Map**.delete() :
```javascript
var m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");   // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");   // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }

m1.has(x);              // returns true
m1.delete(x);           // returns true
m1.delete("something"); // returns false
m1.has(x);              // returns false
```
**Map**.delete() is method which is used for deleting a particular element
from the `Map` object. The method takes only one argument which is the key and
if the key is present in the `Map` it deletes the element and returns a `true`,
but if the key isn't present in the `Map` then it throws a `false`.

------------------
**2.7 Map**.keys() :
```javascript
var m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");                   // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");                   // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }

m1.keys();                          // MapIterator { { id: 1 }, { id: 2 } }

let iterator = m1.keys();
console.log(iterator.next().value); // { id: 1 }
console.log(iterator.next().value); // { id: 2 }
console.log(iterator.next().value); // undefined
```
**Map**.keys() is a method which is used to return the keys present in the `Map`
object for each element. The method returns an Map **Iterator** object which can
be used for knowing the keys present in the `Map`. In the above example it is
outlined how to iterate over **Map**.keys() using `next()`. It is to be noted
that when `next()` is used on the **Iterator** object either `value` or `done`
must be used because a straight forward usage of `next()` results in displaying
an `Object`. `iterator.next().value` returns the value of the key present in the
**Iterator** object while `iterator.next().done` returns a boolean saying `false`
if there are more keys present in the **Iterator** object and `true` if there
aren't any more keys present.

------------------
**2.8 Map**.values() :
```javascript
var m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");                   // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");                   // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }

m1.values();                        // MapIterator { 'foo', 'bar' }

let iterator = m1.values();
console.log(iterator.next().value); // foo
console.log(iterator.next().value); // bar
console.log(iterator.next().value); // undefined
```
**Map**.values() is a method which is used to return the values present in the `Map`
object for each element. The method returns an **Iterator** object which can be used
for knowing the values present in the `Map`. In the above example it is outlined how
to iterate over **Map**.values() using `next()`. It is to be noted that when `next()`
is used on the **Iterator** object either `value` or `done` must be used because a
straight forward usage of `next()` results in displaying an `Object`. `iterator.next().value` returns the value of a particular element present in the **Iterator** object while `iterator.next().done` returns a boolean saying `false`
if there are more values present in the **Iterator** object and `true` if there aren't
any more values present.

------------------
**2.9 Map**.entries() :
```javascript
var m1 = new Map();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");                   // Map { { id: 1 } => 'foo' }
m1.set(y, "bar");                   // Map { { id: 1 } => 'foo', { id: 2 } => 'bar' }

m1.entries();                       // MapIterator { [ { id: 1 }, 'foo' ], [ { id: 2 }, 'bar' ] }

let iterator = m1.values();
console.log(iterator.next().value); // [ { id: 1 }, 'foo' ]
console.log(iterator.next().value); // [ { id: 2 }, 'bar' ]
console.log(iterator.next().value); // undefined
```
**Map**.entries() is a method which is sued to return the keys and values present in
the `Map` object for each element. The method is quite similar to **Map**.values() for
the fact that it returns an **Iterator** object that could be used to know the keys and
values present in the `Map`. In the above example it is showcased as to how to iterate
over the **Map**.entries() using `next()`. The method's ability and its way of operation
is quite similar to **Map**.values() except for the fact that keys are also returned along
with the values as we iterate over the **Iterator** object. Similar to any **Iterator**
object once it reaches the end of its plane it would throw and `undefined`. Also, it is
to be noted that any other method that applies to an **Iterator** object could be used
with this since it is one and the same.

------------------


`MISC[Maps] :` **WeakMaps** can be considered as **Maps** with differences in the methodology
of which garbage collections happen under the hood. To put it in simpler and plain terminology
there has to be a little conceptual lesson told in order to bring perspective. In Javascript
broadly everything is an **object** therefore the moment you create one and the memory is being allocated for the same and until the V8 automatically GC's (short for garbage collects) the object remains as a node in the graph. It is to be noted that until there are no references to the object created in the memory it would not be GC'd, so all the objects are held `tightly` or `strongly`. So essentially, the difference that is being brought with **WeakMaps** is that the keys of the object are held `weakly` henceforth, if the object is GC'd by V8 or by you then the entry would be removed from the **WeakMap** but not is values. There is no stark difference between the way **Maps** and **WeakMaps** operate although, **WeakMaps** only accept objects as keys(strictly). Let us look below to see how they are initialized:
```javascript
var m1 = new WeakMap();
let x = {id: 1},
    y = {id: 2};

m1.set(x, "foo");                   // WeakMap {}
m1.set(y, "bar");                   // WeakMap {}

m1.get(x);                          // 'foo'
m1.get(y);                          // 'bar'm1.
```
It is to be noted that although the way **WeakMaps** API interacts with us the same way as
the **Maps** object does, there are limitations to the operations provided by the **WeakMaps**
API. It supports `get()`, `set()`, `has()` and `delete()` methods as of now.

------------------

`MISC[Maps] :` Use of **...** operator

------------------

##### 3. Sets:

Methods part of Javascript **Set** Object:

- **Set**.add(),
- **Set**.has(),
- **Set**.size,
- **Set**.clear(),
- **Set**.delete(),
- **Set**.values(),
- **Set**.entries()

------------------
**3.1 Set**.add() :
```javascript
var s1 = new Set()

s1.add('akhil')
s1.add(123)
s1.add(456.789)
s1.add(true)
s1.add({id: 123456})
s1.add(NaN)
s1.add(null)

console.log(s1) // Set { 'akhil', 123, 456.789, true, { id: 123456 }, NaN, null}
```
**Set**.add() is a mutator method for adding values to a Set. The procedure
for achieving this is straightforward. We call the `add()` method to the
already created `Set` object and pass the value which we want into the Set
as an argument. When more than one argument is passed to the `add()` method
it just ignores the remaining arguments and considers only the first argument. It is to be noted that the `Set` object does not have any restrictions to the type of value being passed nor does it enforce any restrictions when we make the `Set` heterogeneous. `NaN`, `null` can also be part of a `Set`. Although, it is never encouraged to fill the `Set` with values of this nature.

------------------
**3.2 Set**.has() :
```javascript
var s1 = new Set()

s1.add(123)
s1.add(456)
s1.add(789)
s1.add("akhil")
s1.add(null)

s1.has(123)                     // returns true
s1.has(NaN)                     // returns false
s1.has("akhil")                 // returns true
s1.has(456.12)                  // returns false
s1.has(123.0000000000000009123) // returns true
```
**Set**.has() is a method that is helpful in determining if an element exists
in the `Set` or not. The method returns either `true` if the value is present
and `false` if the value is not present. If we observe the above example there
is a small disparity between the expected nature of the method and its ground reality. `s1.add(123.0000000000000009123)` is one example which sheds some light on the decade long rivalry between Javascript and floating point values.
This could be avoided simply by using **number**.toPrecision(). Also, in Javascript it is always encouraged to handle floating points carefully.

------------------
**3.3 Set**.size :
```javascript
var s1 = new Set([1, 23, 456, 78910])
var s2 = new Set()

s2.add("akhil")
s2.add("chandu")
s2.add("adheeth")

console.log(s1.size) // returns 4
console.log(s2.size) // returns 3
```
**Set**.size is not a method but it is an property of the Sets object useful for determining the size of the `Set`. As you can observe from the above code
snippet, it is just called like an accessor method. If we try to call the property using `size()` then it throws a **TypeError** saying `Set.size` is not a function.

------------------
**3.4 Set**.clear() :
```javascript
var s1 = new Set()

s1.add("akhil")
s1.add("krishna")
s1.add("pardhu")

console.log(s1.has("akhil"))   // returns true
console.log(s1.has("krishna")) // returns true
s1.clear("pardhu")
s1.clear()
console.log(s1.has("akhil"))   // returns false
console.log(s1.has("pardhu"))  // returns false
```
**Set**.clear() is a method that clears all the elements present in the Set. This results in emptying the `Set`. If we observe in the above code snippet there is an attempt to pass an argument to the **Set**.clear() method and irrespective of what argument is passed to the method it just ignores and performs the `clear()` operation on the `Set`. Also, there is no restriction over the number of times in which the operation is performed.

------------------
**3.5 Set**.delete() :
```javascript
var s1 = new Set()

s1.add("akhil")
s1.add("dusi")
s1.add("om")
s1.add("siddu")

console.log(s1.has("akhil"))
console.log(s1.delete("akhil"))
console.log(s1.delete("foo"))
console.log(s1.has("akhil"))

for (let item of s1) {
    console.log(item)
}
```
**Set**.delete() is a method used for removing an element from the Set. The method accepts only one argument and returns a boolean value `true` or `false`. If more than one argument is passed to `delete()` then it just ignores the remaining arguments and considers just the first argument.

------------------
**3.6 Set**.values() :
```javascript
var s1 = new Set()
var s2 = new Set()

s1.add("foo")
s1.add("bar")
s1.add("foobar")
s1.add("barfoo")

for (let items of s1.values()) {
    s2.add(items)
}

console.log(s1.values())   // returns SetIterator { 'foo', 'bar', 'foobar', 'barfoo' }
console.log(s2.values())   // returns SetIterator { 'foo', 'bar', 'foobar', 'barfoo' }
console.log(s1.has("foo")) // returns true
console.log(s2.has("foo")) // returns true
```
**Set**.values() is a method that returns the values present in the `Set`. If we use `s1.values()` in a loop as shown in the above code snippet then all we get back is a value as we iterate over the `Set`. Also, this might sound similar to the method in `Map`, but there is a small distinction, which is **Map**.values() would only return the values present in the `Map` and **Map**.keys() would return only the keys associated with every value/element. Now, since a `Set` has key and value as the same element there isn't much of distinction between **Set**.values() and **Set**.keys(). We would be returned with the same iterable objects with no difference at all.

------------------
**3.7 Set**.entries() :
```javascript
var s1 = new Set()

s1.add("foo")
s1.add("goo")
s1.add("bar")
s1.add("gar")

// the keys are
for (let pairs of s1.entries()) {
    console.log("key["+pairs[0]+"] => "+pairs[1])
}
```
**Set**.entries() is a method that returns an array of values for the values present in the `Set`. We have to understand that in a `Set` the key and value remain the same, So when we call the **Set**.entries() method all we get is a nx2 array of values where n[0] and n[1] contain the same value. We can also assign `s1.entries()` to a variable or a constant and in that case we would get an iterator Object in return that could be played around using `next()`.

------------------


`MISC[Sets] :` **WeakSets**

`MISC[Sets] :` Use of **...** operator


------------------

##### 4. Arrays:

Methods part of Javascript **Array** Object:

- **Array**.push(),
- **Array**.pop(),
- **Array**.indexOf(),
- **Array**.lastIndexOf(),
- **Array**.concat(),
- **Array**.splice(),
- **Array**.shift(),
- **Array**.unshift(),
- **Array**.reverse(),
- **Array**.sort(),
- **Array**.map(),
- **Array**.filter(),
- **Array**.some(),
- **Array**.reduce(),
- **Array**.reduceRight(),
- **Array**.join(),
- **Array**.toString()
- **Array**.fill()
- **Array**.keys()
- **Array**.slice()
- **Array**.entries()
- **Array**.includes()
- **Array**.forEach()
- **Array**.of()
- **Array**.from()

------------------
**4.1 Array**.push() :
```javascript
var arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1); // it prints [1,2,3,4,5,6]
```
**Array**.push() is just a mutator function for adding elements to the array. So
  we can simply mention the element as an argument to the function Array.push()
  and the mentioned element would be added as the last element in the array.

------------------
**4.2 Array**.pop()
```javascript
var arr1 = [1, 2, 3, 4, 5];
arr1.pop();         // removes last element from the array
arr1.pop(23);       // removes last element despite giving the number as argument
arr1.pop("lol");    // removes last element despite giving the string as argument
console.log(arr1);  // it prints [1,2,3,4]
```
  **Array**.pop() is just a simple mutator function for removing the last element
  of the array. So the method doesnot take arguments, Although if we try to
  pass arguments it would not take them. It performs only the basic operation
  of removing the last element of the Array.

------------------
**4.3 Array**.indexOf()
```javascript
var arr1 = ["akhil", "chandu", "adheeth", "varma"];
var arr2 = ["akhil", "chandu", "adheeth", "varma", "akhil", "shankar", "akhil"];
arr1.indexOf("akhil");         // returns 0 since akhil is present at index 0
arr1.indexOf("adheeth");       // returns 2 since adheeth is present at index 2
arr2.indexOf("akhil");         // returns 0 because it is the first occurrence of akhil
```
  **Array**.indexOf() is an accessor function that can be used for finding the
  index of a specific element in an array. The argument to be passed to this is
  the value of the element in the array. Also, it is to be noted that when there
  are multiple occurrences of the same element in the data then the first occurrence
  of the element in the array is displayed.

------------------
**4.4 Array**.lastIndexOf()
```javascript
var arr1 = ["akhil", "chandu", "adheeth", "varma", "akhil", "shankar", "akhil"];
arr1.lastIndexOf("akhil");         // returns 6 since akhil last occurred at index 6
arr1.lastIndexOf("adheeth");       // returns 2 since adheeth last occurred at index 2
```
  **Array**.lastIndexOf() is an accessor function, quite similar in behaviour to the
  `indexOf` function. Although, the difference being `lastIndexOf` returns the index
  of the last occurrence of the element in array.

------------------
**4.5 Array**.concat()
```javascript
var arr1 = ["akhil", "chandu"];
var arr2 = ["adheeth", "varma", "kp"]
var arr3 = []
arr1.concat(arr2);         // returns [ 'akhil', 'chandu', 'adheeth', 'varma', 'kp' ]
arr2.concat(arr1);         // returns [ 'adheeth', 'varma', 'kp', 'akhil', 'chandu' ]
arr3 = arr1.concat(arr2)
console.log(arr3)          // returns [ 'akhil', 'chandu', 'adheeth', 'varma', 'kp' ]
```
  **Array**.concat() is an accessor function used to create new arrays from existing
  arrays. It takes an array as an argument and after the function is executed the array
  in the argument gets concatenated to the array calling `concat()`.

------------------
**4.6 Array**.splice() :
```javascript
// case 1 :
var arr1 = [1, 2, 3, 4, 5];
nums = [6, 7, 8, 9, 10]
arr1.splice(5,0,nums)
console.log(arr1); // it prints [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]

// case 2 :
var arr2 = ['one'];
arr2.splice(1,0, 'two', 'three', 'four', 'five');
console.log(arr2); // it prints ['one', 'two', 'three', 'four', 'five']

// case 3 :
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.splice(5,5);
console.log(arr3); // it prints [1, 2, 3, 4, 5]
```
  **Array**.splice() has a varied set of operations that which could be
  performed. If we observe case 1 we are adding elements to the array
  arr1 from the fifth index. Also if we observe in case 2, we can see
  that without assigning a variable the elements that which are to be
  added are passed as continuous arguments.
  It is to be noted that splice can not only perform the action of
  adding elements but it also does perform the action of removing
  elements. In the function splice(), if we choose the value of the
  second argument to be '0' then elements would only be added from
  the specified index, although if the value is not '0' then number
  specified would be the number of elements that will be removed.

------------------
**4.7 Array**.shift() :
```javascript
var arr1 = [1, 2, 3, 4, 5, "akhil", "chandu", "varma", "kp", "adheeth"];
arr1.shift();
arr1.shift(123);
arr1.shift("lolagain");
console.log(arr1); // it prints [4,5,6,"akhil","chandu","varma","kp","adheeth"]
```
  **Array**.shift() is no different from the above mentioned method Array.pop(),
  although the major difference comes regarding the index of the element
  that which is to be removed. It removes the first element of the array.
  Similar to Array.pop() this method also desnot take arguments and even
  though an argument is passed it continues to perform its operation.

------------------
**4.8 Array**.unshift() :
```javascript
var arr1 = [1, 2, 3, 4, 5];
str = "akhil pandey";
arr1.unshift(str);
console.log(arr1); // it prints ["akhil pandey", 1, 2, 3, 4, 5];
```
  **Array**.unshift() falls into the same category as that of Array.push(), Since
  both of them are used as mutator functions for adding elements into an array.
  The only difference between both the methods is that if we pass an argument
  to Array.unshift() then the element would be added as the first element of
  the array.
  If we observe the above snippet we can see that the index of the element
  '1' is shifted to the next place and "akhil pandey" is added as the first
  element of the array. So unlike Array.push() this method should not be
  misunderstood only for adding elements since it adds elements to the start
  of the Array.

------------------
**4.9 Array**.reverse() :
```javascript
var arr1 = [1, 'akhil', 'varma', 'chandu', 'adheeth'];
arr1.reverse();
console.log(arr1); // it prints ['adheeth', 'chandu', 'varma', 'akhil', 1]
```
  **Array**.reverse() is just a mutator function that which is used to
  reverse the order of elements in the array.

------------------
**4.10 Array**.sort() :
```javascript
var arr1 = ['varma', 'chandu', 'akhil', 'adheeth'];
var arr2 = [5, 6, 2, 9, 23];
arr1.sort();
arr2.sort();
console.log(arr1); // it prints ['adheeth', 'akhil', 'chandu', 'varma']
console.log(arr2); // it prints [2, 5, 6, 9, 23]
```
  **Array**.sort() is also another mutator function that which is used to
  put the elements in order. Both strings and numbers can be sorted
  using the Array.sort() method. The sorting takes place in ascending
  order, so if strings or characters are elements then depending on
  the alphabetical scale, the sorting takes place.

------------------
**4.11 Array**.map() :
```javascript
function add(arr) {
        return arr = "My name is " + arr;
}

var arr1 = ["akhil", "varma", "chandu", "adheeth", "kp"];
var combine = arr1.map(add);
console.log(combine);
/* it prints
[   'My name is akhil',
    'My name is varma',
    'My name is chandu',
    'My name is adheeth',
    'My name is kp' ]
*/
```
  **Array**.map() is a method which is more like an iterator function, but
  the fundamental difference between this and Array.forEach() is that
  Array.map() returns a new array with the result, whereas Array.forEach()
  doesn't return a new array with the function result.

  NOTE : Array.map() is a very powerful method and it can be applied to
  diverse applications. Although since this method iterates over each
  element using Array.map() must be carefully looked upon and should
  not be put to use if the purpose is iterating over some elements.

------------------
**4.14 Array**.reduce() :
```javascript
function combine(prev, curr) {
        return prev + curr;
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["one ", "two ", "three ", "four ", "five "];
var numsum = arr1.reduce(combine);
var worsum = arr2.reduce(combine);

console.log(numsum); // it prints 15
console.log(worsum); // it prints "one two three four five "
```
  **Array**.reduce() is a method which can be used with arrays by taking
  a function as an argument, thereby making the function to iterate
  over the array elements. Array.reduce() iterates over the array elements
  and thus upon reaching the end of the Array yields a single value.

  NOTE : Array.reduceRight() is more of similar to Array.reduce(), but
  it iterates over the array elements from the rightmost element to the
  leftmost element, instead of going  the usual way.

------------------

`TIPS[Arrays] :`

- With the available list of the Array methods we can generally perform most of the operations, but if we require special methods or custom methods that must be part of the already existing Array Object then we define the method with by taking the concept of **Object.prototype**.

------------------

`MISC[Arrays] :`

**Manipulating the Array Object by writing your own methods** :
```javascript
var boo = []

Array.prototype.foo = function() {
        console.log("We write our method inside this block")
}

boo.foo() // returns whatever is included inside the above mentioned code block
```

 Adding methods to Array.prototype essentially means that we are adding methods
 to the global array object. So an Array.prototype would actually mean that adding
 a new prototype to the existing Array object. So a better analogy can be explained
 with the below code snippet.

```javascript
Array.prototype.union = function(bar) {
        var l = this.length;
        var n = bar.length;
        for(i=0; i<n; ++i) {
                this[l] = bar[i];
                l++;
        }
        console.log(this);
}

var a = ["one", "two"];
var b = ["three", "four", "five", "six", "seven"];
var c = [1, 2];
var d = [3, 4, 5, 6, 7];

a.union(b);
c.union(d);
```
 Observing the Above array prototype if we can carefully observe it is nothing
 but a working replica of how the Array Method Array.prototype.concat() works. So
 in concat() method another array is passed as an argument to the method and the
 primary array concats and extends the array.

 Things to lookup in the above example are how custom methods can be written in
 order to suit the specific purpose to not only the Array prototype but also all
 the Javscript recognized objects such as the String, Number, Regexp or the Object
 itself.

**Associative Arrays** :

 Preferably this is somewhat a great part of the language although this has
 been an integral part of many programming languages like PHP and Python, there
 is a slight change to what it offers in other programming languages to this.

 [NOTE]: In Python it is not called or referred to as Associative arrays but it
 comes with the name Dictionaries.

```javascript
var a = [];
var b = [];

a["one"] = "boo this is my first item";
a["two"] = "foo this is my second item";
a["three"] = "alas this is final item";

b[0] = "oh not again the first item";
b[1] = "cant help with the second item";
b[3] = "finally got rid with the third item";


console.log(a); // would display the contents of the array 'a'
console.log(b); // would display the contents of the array 'b'

var len1 = a.length;
var len2 = b.length;
var len3 = Object.keys(a).length;

console.log(len1); // would display undefined
console.log(len2); // would display 3
console.log(len3); // would display 3
```
 The above snippet is a classic case implementation of arrays with named
 indexes or the associative arrays. Implementation can be done as mentioned
 above and almost all array opertions except some can be performed very
 smoothly with named indexes. The problem arises when an array with named
 indexes is asked for its length. When 'Array.prototype.length()' method is
 referred it returns only the length of the array which has numberd index,
 if we use named indexes then it is no good because the indexes are strings
 but no longer numbers.

 In such a case if we need to return the length of the named indexed array
 then Object.keys(Arrayname).length would give the length of the array.The
 same is explained by taking three variables 'len1', 'len2', 'len3' where
 both 'len1', 'len3' store the lengths of a but 'len1' returns undefined
 and 'len3' returns 3 as the length of the array.

------------------


##### 5. Strings:

Methods which are part of Javascript **String** Object:

- **String**.charAt(index);
- **String**.concat(string1, string2, ...stringN);
- **String**.indexOf("stringname");
- **String**.lastIndexOf("stringname");
- **String**.link(url);
- **String**.search(regExp);
- **String**.slice(begin, end);
- **String**.substring(begin, end);
- **String**.substr(begin, end);
- **String**.repeat(count);
- **String**.replace(begin, end);
- **String**.endsWith(string, position);
- **String**.startsWith(string, position);
- **String**.includes(string, position);
- **String**.trim(begin, end);
- **String**.toLowerCase();
- **String**.toUpperCase();

------------------
**5.1 String**.charAt() :
```javascript
var str1 = "akhil";
str1.charAt(-1);        // returns '' or empty string
str1.charAt(3);         // returns 'i' as it is located at position 3
str1.charAt(7);         // returns '' or empty string
```
  **String**.charAt() is a method which can be used for determining the character present at a particular index of the given string. The function takes just one argument and it returns the character as output. It is to be noted that when the index given as input if either greater than or lesser than the string length then the function just returns `''` or an empty string as output.

------------------
**5.2 String**.concat() :
```javascript
var str1 = "akhil";
var str2 = "pandey";
str1.concat(str2);                    // returns the string 'akhilpandey'
str1.concat(1234);                    // returns the string 'akhil1234'
str1.concat(true);                    // returns the string 'akhiltrue'
str1.concat(null);                    // returns the string 'akhilnull'
str1.concat(undefined);               // returns the string 'akhilundefined'
str1.concat([1, 2, 3, 4, 5]);         // returns the string 'akhil1,2,3,4,5'
str1.concat(" ", 12, 34, 56, 78);     // returns the string 'akhil 12345678'
str1.concat({a: "123", b: "456"});    // returns the string 'akhil[object Object]'
```
  **String**.concat() is a method which is used to combined two or more strings
  in order return a new string. Fundamentally this method is used for string
  operations, but if a string is typically concatenated with another type then
  the resultant will be a string. If we observe above example we see `str1.concat(true)` so here the resultant string is `akhiltrue` as **String**.concat() combines the value of both the arguments and produces a concatenated string as end result. Now there are even special cases for suppose, if a `string` is tried to concatenate with falsy values then the result would be the combination of the `string` and falsy value.

------------------
**5.3 String**.indexOf() :

------------------
**5.4 String**.lastIndexOf() :


------------------
**5.5 String**.link() :


------------------
**5.6 String**.search() :


------------------
**5.4 String**.slice() :


------------------
`TIPS[Strings]:`

- **string.slice()** : The method **string.slice()** essentially extracts part of a string and returns the new string which is sliced. The general notation for using the string.slice method is string.slice(pos1, pos2) where in pos1 is the position of the starting index and pos2 is the position of ending index. The point to be noted here is if we use the string.slice() method by passing negative parameters then it ends up counting and extracting the string from the end to the start. And if we donot pass the second parameter the method extracts the rest of the string.

- **string.substring()** : The method **string.slice()** and **string.substring()** fall into the same category of methods that can be used for extracting part or parts of string from the source string. The difference in both is that we cannot use negative indexes when using the method string.substring(). For example if we pass on a negative index to the method like string.substring(-7,-1) then it essentially doesnot pipe out any error indicating the mistake made for using negative index but displays the string as a whole

------------------

##### 6. Objects:

In Javascript:

| Types                          | Can be Objects | Are Always Objects|
|--------------------------------|:--------------:|:-----------------:|
| **Booleans** | ✔ |  |
| **Numbers** | ✔ |  |
| **Strings** | ✔ |  |
| **Dates** | | ✔ |
| **Maths** | | ✔ |
| **Regular Expressions** | | ✔ |
| **Arrays** | | ✔ |
| **Functions** | | ✔ |

So basically except the primitive values all are objects in Javascript

**6.1** `Objects can be created using three methods`:

- **6.1.1** : "Define and create an object using an Object literal."
```javascript
// creating an oject using an Object literal
var staff = {
	name : "somename",
	branch : "somebranch",
	salary : "somesalary",
	age : 20
};
```
- **6.1.2** : "Define and create an object using an keyword new."
```javascript
// creating an object using new keyword
var admin = new Object();
admin.name = "somename";
admin.department = "somedept";
admin.userid = 123;
admin.age = 20;
```
- **6.1.3** : "Define an object constructor and then create objects of its type."
```javascript
// creating an object using the object constructor
function student(name, github_nick, url, age) {
	this.name = name;
	this.github = "https://github.com/" + github_nick;
	this.url = url;
	this.age = age;
}
```

**6.2** `Using the constructor for the above defined Object` :
```javascript
var akhil = new student("Akhil Pandey", "AkhilHector", "https://www.akhilhector.com", "20");
```

**6.3** `Accessing object methods` :
```javascript
console.log(akhil.github);
console.log(akhil.url);
```

**6.4** `Using the prototype property` :
```javascript
student.prototype.show = function() {
	return this.name + " " + this.github + " " + this.age;
}
```

**6.5** `Adding methods to the prototype` :
```javascript
function student(name, github_nick, url, age) {
	this.name = name;
	this.github = "https://github.com/" + github_nick;
	this.url = url;
	this.age = age;
	this.show = function() {
		return this.name + " " + this.github + " " + this.age;
	}
}
```

`NOTE`: Javasctipt objects are mutable which means that they are referenced by address and not value. For instance if 'master' is an object and 'master-backup' is also another object then if we pass the objects then changing one might result in changing the other object also.
```javascript
{
 var master = {foo : "foo"};
 var master-backup = master;
 master.backup.bar = "bar"; // this changes master.bar and master-backup.bar
}

Object.access.property = {
"Option1" : "we can use objectName.propertyName",
"Option2" : "Either we can write objectName[propertyName]"
}
```

------------------


##### 7. Functions:



------------------

##### 8. Conventions:



------------------


##### 9. Closures:

Function Closures in Javascript is all about how are the variables being treated and referred to in the local or global scope. In Js variables can be given :

- 'local scope'
- 'global scope'

There is no inbuilt concept for something called private variables, so when there is a requirement for such a scenario Closures are written in Js in order to make scope for variables that are private in scope.

------------------

##### 10. Currying :

Currying is a process of building a function by taking multiple arguments and partially applying
them through a series of functions. So to be specific, you can break down the given function that
takes multiple arguments into series of functions that take part of the arguments.

Let us take a common example :

```javascript

```

------------------


##### 11. Tail Calls:

Tail calls are nothing but essentially replacing the concept of recursive
functions with loop. In a way this can not only save time but also saves
space i.e better time complexity and space complexity.

```javascript
// snippet one
function f(n) {
	if(n == 0) {
		return 1;
	}
	else {
		return n * f(n-1);
	}
}

// snippet two
function f1(n) {
	function r(n, m) {
		if(n == 0) {
			return m;
		}
		else {
			return r(n-1, n*m);
		}
	}
	return r(n, 1);
}
```

Observing both the algorithms above written for factorial we can understand
that f() is the traditional recursive method used for finding the factorial,
but f1() is the tail call optimized algorithm which is better and fast.

