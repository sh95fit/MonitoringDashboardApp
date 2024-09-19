var memberArray = ['man1','man2','man3'];

console.group('array loop');

var i = 0;

while(i < memberArray.length){
  console.log(i, memberArray[i]);
  i = i+1;
}

console.groupEnd('array loop');


var memberObject = {
  manager: 'man1',
  developer: 'man2',
  designer: 'man3',
}

console.group('object loop');

for(let name in memberObject){
  console.log(name, memberObject[name]);
}

console.groupEnd('object loop');