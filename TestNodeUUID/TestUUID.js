function createGuid1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
	var r = (Math.random() * 16) | 0;
	var v = c === "x" ? r : (r & 0x3) | 0x8;
	return v.toString(16);
  });
}

function createuuid2() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
}

console.log('-------------------使用第一种方法生成UUID---------------------');
for(let i=0;i<10;i++)
	console.log('第'+(i+1)+'个UUID：',createGuid1())
console.log('-------------------使用第二种方法生成UUID---------------------');
for(let i=0;i<10;i++)
	console.log('第'+(i+1)+'个UUID：',createuuid2())

console.log('-------------------使用第三种方法生成UUID（uuid库）---------------------');
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var uuidv1 = (0, _interopRequireDefault(require("./node_modules/uuid/dist/v1.js")).default);
var uuidv3 = (0, _interopRequireDefault(require("./node_modules/uuid/dist/v3.js")).default);
var uuidv4 = (0, _interopRequireDefault(require("./node_modules/uuid/dist/v4.js")).default);
var uuidv5 = (0, _interopRequireDefault(require("./node_modules/uuid/dist/v5.js")).default);
for(let i=0;i<10;i++)
	console.log('第'+(i+1)+'个UUID：',uuidv1(),'  ', uuidv4())

//console.log(uuidv3('6ba7b810-9dad-11d1-80b4-00c04fd430c8','6ba7b810-9dad-11d1-80b4-00c04fd430c8'));
//console.log(uuidv4());
//console.log(uuidv5('6ba7b810-9dad-11d1-80b4-00c04fd430c8','6ba7b810-9dad-11d1-80b4-00c04fd430c8'));