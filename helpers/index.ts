export function validateInput(inputElement: any): void {
  const inputValue: string = inputElement.value;

  const alphabeticPattern: RegExp = /^[A-Za-z]+$/;

  if (!alphabeticPattern.test(inputValue)) {
    inputElement.value = '';
    alert('Please enter alphabetic characters only.');
  }
}