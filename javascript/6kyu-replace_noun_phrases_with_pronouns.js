/* https://www.codewars.com/kata/5c466083a4db1e0f49ddcb30 */

function replaceNounPhrases(sentence, pronouns, dictionary) {
    let lastAux = -1;

    sentence = sentence.split(" ");

    for (let i = 0; i < sentence.length; i++) {
        if (pronouns.length === 0) break;

        if (dictionary[sentence[i]] == undefined) {
            lastAux = -1;
        } else if (dictionary[sentence[i]] == "aux") {
            lastAux = i;
        } else if (dictionary[sentence[i]] == "N" && lastAux !== -1) {
            sentence[i] = pronouns.shift();
            sentence.splice(lastAux, i - lastAux);
            i = lastAux;
            lastAux = -1;
        }
    }

    return sentence.join(" ");
}