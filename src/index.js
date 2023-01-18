module.exports = function toReadable (number) {
  
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function convert_hundreds(number) {
    if (number > 99) {
        return ones[Math.floor(number / 100)] + ' hundred ' + convert_tens(number % 100);
    }
    else {
        return convert_tens(number);
    }
  }

  function convert_tens(number) {
    if (number < 10) return ones[number];
    else if (number >= 10 && number < 20) return teens[number - 10];
    else {
        return tens[Math.floor(number / 10)] + ' ' + ones[number % 10];
    }
  }

    if (number === 0) return 'zero';
    else return convert_hundreds(number).trim();
}
