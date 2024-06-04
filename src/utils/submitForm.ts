import openPage from './open-page';
import Validator from './validation';

export default function onSubmit(form: HTMLTemplateElement, event: Event) {
  event.preventDefault();

  Validator.clearErrors(form);

  let isValid = true;
  const inputs = form.querySelectorAll<HTMLInputElement>('input');

  inputs.forEach((input) => {
    if (!Validator.validateField(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    const formData = new FormData(form as unknown as HTMLFormElement);
    const formObject: { [key: string]: string } = {};

    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });

    // eslint-disable-next-line no-console
    console.log(formObject);

    const page = form.getAttribute('page');
    if (page) {
      openPage(form, event);
    }
  }
}
