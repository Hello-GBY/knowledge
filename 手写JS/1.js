// var b = {
//     name: 1,
//     value:  a
// }
function deepClone(obj, map = new WeakMap()) {
    // 校验
    if(!obj || typeof obj !== 'object') return obj
    if(map.has(obj)) {
        console.log('map.get(obj): ', map.get(obj));
        return map.get(obj)
    }
    let temp = Array.isArray(obj) ? [] : {}
    map.set(obj, temp)
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log('element: ', element);
            temp[key] = deepClone(element, map)
        }
    }
    return temp
}
