module.exports = function (action) {
	const random = Math.floor( Math.random() * 3 );
	const actionArr = ['rock', 'scissor', 'paper'];

	if(actionArr[random] === action){
		return 0;
	}else if(
		(actionArr[random] === 'rock' && action === 'paper') || 
		(actionArr[random] === 'paper' && action === 'scissor') || 
		(actionArr[random] === 'scissor' && action === 'rock')

	){
		return 1;
	}else{
		return -1;
	}
}
