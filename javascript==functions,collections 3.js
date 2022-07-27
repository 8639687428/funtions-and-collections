data = '{"name":"Toyata Rav4","engine":"2.5L","price":"3200"}'

let obj=JSON.parse(data)

console.log(obj["name"]);//myong
console.log(obj.name);//myong

console.log(obj["address"].steetAddress);
console.log(obj.address.steetAddress);

console(obj.phoneNumber[0].number)