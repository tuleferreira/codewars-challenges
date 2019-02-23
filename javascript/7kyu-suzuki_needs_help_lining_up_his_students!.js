/* https://www.codewars.com/kata/5701800886306a876a001031 */

const lineupStudents = s => {
	s = s.split(' ');
	s.sort((a, b) => {
		if (a.length === b.length) {
			return b.localeCompare(a);
		} else {
			return b.length - a.length;
		}
	});

	return s.filter(x => x !== '');
};
