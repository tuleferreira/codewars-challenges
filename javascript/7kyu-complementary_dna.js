/* https://www.codewars.com/kata/554e4a2f232cdd87d9000038 */

const r = { A: 'T', T: 'A', G: 'C', C: 'G' };

const DNAStrand = dna => dna.split('').map(x => (x = r[x])).join('');