const randomColor = {
	// HEX/HEXA
	// -Supports small or large notation and transparency 
	// -WARNING- Alpha values are not supported by ~IE11 or ~Edge76
	HEX(value) {
		const validSizes = [3, 4, 6, 8];
		const size = value || validSizes[2];
		let result = [];

		if (validSizes.includes(size)) {
			for (let i = 0; i < size; i++) {
				result.push(
					(Math.round(Math.random() * 15)).toString(16).toUpperCase()
				);
			}
			return `#${result.join('')}`;
		}
	},
	// RGB
	RGB() {
		let result = [];
		for (let i = 0; i < 3; i++) {
			result.push(
				Math.round(Math.random() * 255)
			)
		}
		return `rgb(${result.join(', ')})`;
	},
	// RGBA
	// -If there is no value or it is invalid, random is used
	RGBA(value) {
		let opacity;
		let result = [];
		// -If the value is not valid, random is used
		if (value >= 0 && value <= 1) {
			opacity = value;
		} else {
			opacity = Math.random().toFixed(1);
		}

		for (let i = 0; i < 3; i++) {
			result.push(
				Math.round(Math.random() * 255)
			)
		}
		return `rgba(${result.join(', ')}, ${opacity})`;
	},
	// HSL
	HSL() {
		let result = [];
		let validNumber = [360, 100, 100];

		for (let i = 0; i < validNumber.length; i++) {
			let value = Math.round(Math.random() * validNumber[i])
			if (validNumber[i] === 100) { value += '%'; }
			result.push(value);
		}

		return `hsl(${result.join(', ')})`;
	},
	// HSLA
	// -If there is no value or it is invalid, random is used
	HSLA(opacityVal) {
		const validNumber = [360, 100, 100, 1];
		let result = [];
		let opacity;

		if (opacityVal >= 0 && opacityVal <= 1) {
			opacity = opacityVal;
		} else {
			opacity = Math.random().toFixed(1);
		}

		for (let i = 0; i < validNumber.length; i++) {
			let value = Math.round(Math.random() * validNumber[i])
			if (validNumber[i] === 100) { value += '%' }
			if (validNumber[i] === 1) { value = opacity }
			result.push(value);
		}

		return `hsla(${result.join(', ')})`;
	}
}