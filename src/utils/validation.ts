class Validator {
  static validateField(field: HTMLInputElement): boolean {
    const fieldName = field.getAttribute('name');
    if (fieldName) {
      const { isValid, error } = Validator.isFieldValid(field, fieldName);
      if (!isValid) {
        Validator.showError(
          fieldName,
          error,
          field.parentElement as HTMLTemplateElement,
        );
      }
      return isValid;
    }
    return true;
  }

  static isFieldValid(field: HTMLInputElement, fieldName: string): { isValid: boolean, error: string } {
    const value = field.value.trim();

    switch (fieldName) {
      case 'first_name':
      case 'second_name':
        if (/^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/.test(value)) {
          return { isValid: true, error: '' };
        }
        return { isValid: false, error: 'Имя должно начинаться с заглавной буквы и содержать только буквы или дефис.' };

      case 'login':
        if (/^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/.test(value)) {
          return { isValid: true, error: '' };
        }
        return {
          isValid: false,
          error: 'Логин должен быть от 3 символов, латиница, может содержать цифры, дефисы и подчеркивания.',
        };

      case 'email':
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return { isValid: true, error: '' };
        }
        return { isValid: false, error: 'Введите корректный email.' };

      case 'password':
      case 'old_password':
        if (/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/.test(value)) {
          return { isValid: true, error: '' };
        }
        return {
          isValid: false,
          error: 'Пароль должен быть больше 8 символов, содержать хотя бы одну заглавную букву и цифру.',
        };

      case 'phone':
        if (/^\+?\d{10,15}$/.test(value)) {
          return { isValid: true, error: '' };
        }
        return { isValid: false, error: 'Телефон должен быть от 10 до 15 символов и может начинаться с плюса.' };

      case 'message':
        if (value.length > 0) {
          return { isValid: true, error: '' };
        }
        return { isValid: false, error: 'Сообщение не должно быть пустым.' };

      case 'display_name':
        if (value.length > 0) {
          return { isValid: true, error: '' };
        }
        return { isValid: false, error: 'Имя не должно быть пустым.' };

      case 'repeat_password':
        if (value.length > 0) {
          const passwordInput = this.findInputInForm(field, 'password') as HTMLInputElement;
          if (passwordInput) {
            const passwordValue = passwordInput.value.trim();
            if (passwordValue !== value) {
              return { isValid: false, error: 'Пароли не совпадают' };
            }
          }
        }
        return { isValid: true, error: '' };

      default:
        return { isValid: false, error: 'Неизвестное поле.' };
    }
  }

  static showError(field: string, message: string, content: HTMLTemplateElement) {
    const errorElement = content.querySelector(`[data-error-for="${field}"]`);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  static clearError(field: string, content: HTMLTemplateElement) {
    const errorElement = content.querySelector(`[data-error-for="${field}"]`);
    if (errorElement) {
      errorElement.textContent = '';
    }
  }

  static clearErrors(content: HTMLTemplateElement) {
    const errorElements = content.querySelectorAll('.error-message');
    if (errorElements) {
      errorElements.forEach((e) => {
        e.textContent = '';
      });
    }
  }

  static findInputInForm(currentInput: HTMLInputElement, targetInputName: string): HTMLInputElement | null {
    let formElement: HTMLFormElement | null = null;
    let { parentElement } = currentInput;
    while (parentElement) {
      if (parentElement.tagName === 'FORM') {
        formElement = parentElement as HTMLFormElement;
        break;
      }
      parentElement = parentElement.parentElement;
    }

    if (formElement) {
      return formElement.querySelector<HTMLInputElement>(`input[name="${targetInputName}"]`);
    }

    return null;
  }
}

export default Validator;
