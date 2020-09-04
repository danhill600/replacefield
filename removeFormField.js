function replaceFields() {
	let Fields = document.getElementsByClassName('pRFormFieldsNatureTitle');
	for (let i = Fields.length - 1; i >= 0; i--) {
		let Field = Fields[i];
		if (Field.textContent === 'Fund Designation') {
			Field.style.display = "none";
		}
	}
};
replaceFields();
