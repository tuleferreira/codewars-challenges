/* https://www.codewars.com/kata/55b75fcf67e558d3750000a3 */

class Block {
	constructor(data) {
		this.width = data[0];
		this.length = data[1];
		this.height = data[2];
	}

	getWidth() {
		return this.width;
	}

	getLength() {
		return this.length;
	}

	getHeight() {
		return this.height;
	}

	getVolume() {
		return this.height * this.length * this.width;
	}

	getSurfaceArea() {
		return (
			2 * this.height * this.length +
			2 * this.height * this.width +
			2 * this.width * this.length
		);
	}
}
