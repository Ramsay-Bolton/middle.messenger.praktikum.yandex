import { validateInput } from '../service/validate';

export default function handleFormSubmit(event: Event, urlPath: string) {
  event.preventDefault();
  if (!event.target) {
    return;
  }
  const formEl = <HTMLFormElement>event.target;
  const formData: { [key: string]: string } = {};
  let inputs = Array.from(formEl.elements) as HTMLInputElement[];
  inputs = inputs.filter((input) => input.nodeName === 'INPUT');
  let sumValid: boolean = true;
  inputs.forEach((element) => {
    if (!validateInput(element)) {
      sumValid = false;
    }
    formData[element.name] = element.value;
  });
  console.log(formData);
  if (sumValid) {
    window.location.href = `/${urlPath}`;
  }
}
