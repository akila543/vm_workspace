//process.stdout.write("hi akila");
//var count=0;
//setInterval(function(){
//count++;
//if(count>10){
//process.exit();
//}
//},100)

var exec= require('child_process').exec;
exec('cat process.js',function(err,stdout,stderr){
	console.log('here s the output',stdout)
})