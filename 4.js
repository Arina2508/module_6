const countEverySecond = n => {
	let count = 4;
	const interval = setInterval(() => {
  	console.log(++count);
    if (count === n) {
    	clearInterval(interval);
    }
  }, 15);
};

countEverySecond(15);