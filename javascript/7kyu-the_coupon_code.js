/* https://www.codewars.com/kata/539de388a540db7fec000642 */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	var date1 = new Date(currentDate);
	var date2 = new Date(expirationDate);

	if (date1 <= date2 && enteredCode === correctCode) {
		return true;
	} else {
		return false;
	}
}
