
type ValidationType = 'alphabets' | 'numbers'

export function validateInput(
  inputElement: any,
  validationType: ValidationType
): void {
  const inputValue: string = inputElement.value;
  const alphabeticPattern: RegExp = /^[A-Za-z ]+$/;
  const numericPattern: RegExp = /^\d+$/;

  const notEmpty = inputValue != ''
  

  if (validationType === 'alphabets') {
    if (!alphabeticPattern.test(inputValue)) {
      inputElement.value = '';
      alert('Please enter alphabetic characters only.');
    }
  } else if (validationType === 'numbers') {
    if (notEmpty && !inputValue.includes(' ') && !numericPattern.test(inputValue)) {
      inputElement.value = '';
      alert('Please enter numeric characters only.');
    }
  }
}


export function handleFormattedInput(inputElement: any) {
  const input = inputElement.value.replace(/\s/g, ''); 
  const numberValue = input.replace(/\D/g, ''); 
  const formattedValue = formatNumber(numberValue);

  inputElement.value = formattedValue;
  return Number(numberValue)
}

export function formatNumber(numberString: string) {
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}