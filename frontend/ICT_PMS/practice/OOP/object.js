var memberArray = ['man1','man2','man3'];
console.log("memberArray[2]",memberArray[2]);

var memberObject = {
  manager: 'man1',
  developer: 'man2',
  designer: 'man3',
}

memberObject.designer = 'man4';

console.log("memberObject.designer", memberObject.designer)
console.log("memberObject['designer']", memberObject['designer'])

console.log("Before delete memberObject.manager", memberObject.manager)

delete memberObject.manager

console.log("After delete memberObject.manager", memberObject.manager)



