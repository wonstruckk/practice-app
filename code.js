const a = [1, 2, 3, 4, 5];

const b = a.filter((value) => {
	if (value > 3) {
		return true;
	}
	return false;
});

console.log(b);
