//1. How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

function compare(obj1, obj2)
{
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
// Comparing the object with length
    if(key1.length!==key2.length)
    {
        return false
    }
    else
    {
// Comparing the object with key values
        for(let k of key1){
            if(obj1[k]!==obj2[k])
                {
                    return false;
                }
        }
    }
   return true; 
}

console.log(obj1);
console.log(obj2);
console.log("Comparison result:" +compare(obj1, obj2));
