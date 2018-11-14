let complexObj = {
    name: "Aviv",
    address: {
        city: "tel-aviv",
        road: "Hamasger"
    }
}

let copyDeep=deepCopy(complexObj);

function deepCopy(srcObj) {
    let targetObj = new Object();

    for (let y in srcObj) {
        if (typeof(srcObj[y])!= "object"){
            targetObj[y] = srcObj[y];
        }
        else {
            targetObj[y]=deepCopy(srcObj[y]);
        }
    }

    return targetObj;
}



console.log("complexObj:      ",complexObj);
console.log("copyDeep:      ",copyDeep);

complexObj.name="Assaf";
console.log("-------------------After rename 'name'-------------------");
console.log("complexObj:      ",complexObj);
console.log("copyDeep:      ",copyDeep);


complexObj.address.city="Jerusalem";
console.log("-------------------After rename 'address.city'-------------------");
console.log("complexObj:      ",complexObj);
console.log("copyDeep:      ",copyDeep);
