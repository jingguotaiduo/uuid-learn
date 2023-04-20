{
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
}