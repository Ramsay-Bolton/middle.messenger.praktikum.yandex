import rules from '../constants/validateRules';
import validateErrors from '../constants/validateErrors';

export function validateInput(input: HTMLInputElement): boolean {
  let valid: boolean = false;
  const errorContainer = document.getElementById(`${input.name}ErrorMessage`);
  valid = rules[input.name]?.test(input.value);
  if (!valid) {
    errorContainer!.innerText = validateErrors[input.name];
    input.classList.add('main__validation-error');
  }

  return valid;
}

export function validateOnBlur(event: Event) {
  const eventTarget = <HTMLInputElement>event.target;
  if (eventTarget.nodeName === 'INPUT') {
    validateInput(eventTarget);
  }
}

export function clearError(event: Event) {
  const eventTarget = <HTMLInputElement>event.target;
  if (eventTarget.nodeName === 'INPUT') {
    const errorContainer = document.getElementById(
      `${eventTarget.name}ErrorMessage`
    );
    errorContainer!.innerText = '';
    eventTarget.classList.remove('main__validation-error');
  }
}
