const template = `
<div>
  <div class="input-field__label" for={{ name }}>
      {{ label }}
  </div>
  {{{ input }}}
  <div class="error-message" data-error-for="{{ name }}">{{ error }}</div>
  </div>
`;

export default template;
