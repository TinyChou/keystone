var utils = require('../utils');

module.exports = function DatetimeField(config) {
	var selectElem = function(elem) {
		return self.selector + ' ' + self.elements[elem];
	};
	var self = {
		selector: '.field-type-datetime[for="' + config.fieldName + '"]',
		elements: {
			label: '.FormLabel',
			nowButton: '.Button--default',
			date: 'input[name="' + config.fieldName + '_date"]',
			datePlaceholder: 'input[placeholder="YYYY-MM-DD"]',
			time: 'input[name="' + config.fieldName + '_time"]',
			timePlaceholder: 'input[placeholder="HH:MM:SS am/pm"]',
		},
		commands: {
			assertUIVisible: function(browser, args) {
				browser
					.expect.element(selectElem('label')).to.be.visible;
				browser
					.expect.element(selectElem('label')).text.to.equal(utils.titlecase(config.fieldName));
				browser
					.expect.element(selectElem('nowButton')).to.be.visible;
				browser
					.expect.element(selectElem('date')).to.be.visible;
				browser
					.expect.element(selectElem('datePlaceholder')).to.be.visible;
				browser
					.expect.element(selectElem('time')).to.be.visible;
				browser
					.expect.element(selectElem('timePlaceholder')).to.be.visible;
			},
			assertUINotVisible: function(browser, args) {
				browser
					.expect.element(selectElem('label')).to.not.be.visible;
				browser
					.expect.element(selectElem('label')).text.to.equal(utils.titlecase(config.fieldName));
				browser
					.expect.element(selectElem('nowButton')).to.not.be.visible;
				browser
					.expect.element(selectElem('date')).to.not.be.visible;
				browser
					.expect.element(selectElem('datePlaceholder')).to.not.be.visible;
				browser
					.expect.element(selectElem('time')).to.not.be.visible;
				browser
					.expect.element(selectElem('timePlaceholder')).to.not.be.visible;
			},
			assertUIPresent: function(browser, args) {
				browser
					.expect.element(selectElem('label')).to.be.present;
				browser
					.expect.element(selectElem('nowButton')).to.be.present;
				browser
					.expect.element(selectElem('date')).to.be.present;
				browser
					.expect.element(selectElem('datePlaceholder')).to.be.present;
				browser
					.expect.element(selectElem('time')).to.be.present;
				browser
					.expect.element(selectElem('timePlaceholder')).to.be.present;
			},
			assertUINotPresent: function(browser, args) {
				browser
					.expect.element(selectElem('label')).to.not.be.present;
				browser
					.expect.element(selectElem('nowButton')).to.not.be.present;
				browser
					.expect.element(selectElem('date')).to.not.be.present;
				browser
					.expect.element(selectElem('datePlaceholder')).to.not.be.present;
				browser
					.expect.element(selectElem('time')).to.not.be.present;
				browser
					.expect.element(selectElem('timePlaceholder')).to.not.be.present;
			},
			fillInput: function(browser, input) {
				browser
					.clearValue(selectElem('date'))
					.setValue(selectElem('date'), input.date)
					.clearValue(selectElem('time'))
					.setValue(selectElem('time'), input.time);
			},
			assertInput: function(browser, input) {
				browser
					.getValue(selectElem('date'), function(result) {
						browser.api.assert.equal(result.value, input.date);
					});
				browser
					.getValue(selectElem('time'), function(result) {
						browser.api.assert.equal(result.value, input.time);
					});
			},
		},
	};

	return self;
};
