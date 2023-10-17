
type ValidationType = 'alphabets' | 'numbers'

export function validateInput(
  inputElement: any,
  validationType: ValidationType
): void {
  const inputValue: string = inputElement.value;
  const alphabeticPattern: RegExp = /^[A-Za-z ]+$/;
  const numericPattern: RegExp = /^\d+$/;

  if (validationType === 'alphabets') {
    if (!alphabeticPattern.test(inputValue)) {
      inputElement.value = '';
      alert('Please enter alphabetic characters only.');
    }
  } else if (validationType === 'numbers') {
    if (!numericPattern.test(inputValue)) {
      inputElement.value = '';
      alert('Please enter numeric characters only.');
    }
  }
}


