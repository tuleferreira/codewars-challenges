/* https://www.codewars.com/kata/5749a53c289cfbaffc0012b1 */

function kataStatus(x) {
	return x.issue > 0
		? 'Beta Status:Waiting for issues to be resolved'
		: x.vote.length < 5
			? 'Beta Status:Testing & feedback needed'
			: x.rank.length < 8
				? 'Beta Status:Ranking feedback needed'
				: !x.example && !x.random
					? 'Beta Status:Example and random testcases needed'
					: !x.example
						? 'Beta Status:Example testcases needed'
						: !x.random
							? 'Beta Status:Random testcases needed'
							: `Kata approved. vote scores:${x.vote.reduce(
									(a, b) => a + b
								)}, rank:${Math.round(
									x.rank.reduce((a, b) => a + b) / x.rank.length
								)}kyu`;
}
