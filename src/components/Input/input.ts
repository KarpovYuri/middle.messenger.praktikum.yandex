import Block from '../../utils/Block';
import template from './input.hbs';
import validateForm from '../../utils/validateForm';
import './input.scss';

type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  classModifier: string;
  validation: string;
  errorMessage: string;
  events?: {
    input: () => void,
    focusin: () => void,
    focusout: () => void,
  },
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({
      events: {
        input: () => this._validateInput(),
        focusin: () => this._validateInput(),
        focusout: () => this._validateInput(),
      }, ...props
    });
  }

  private _validateInput() {
    const inputElement: HTMLInputElement | null | undefined = this.getContent()?.querySelector('.field__input');
    const errorElement = this.getContent()?.querySelector('.field__input-error');
    const isValid = inputElement?.checkValidity();

    if (!isValid) {
      const errorMessage = inputElement!.validationMessage;
      const customErrorMessage = inputElement!.dataset.errortext;
      errorElement!.textContent = customErrorMessage || errorMessage;
      errorElement?.classList.add('active');
      inputElement?.classList.add('field__input_error');
    } else {
      errorElement!.textContent = '';
      errorElement?.classList.remove('active');
      inputElement?.classList.remove('field__input_error');
    }
    validateForm(inputElement);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
