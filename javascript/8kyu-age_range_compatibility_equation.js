/* https://www.codewars.com/kata/5803956ddb07c5c74200144e */

const datingRange = age => `${Math.floor(age <= 14 ? age - 0.1 * age : age / 2 + 7)}-${Math.floor(age <= 14 ? age + 0.1 * age : (age - 7) * 2)}`;