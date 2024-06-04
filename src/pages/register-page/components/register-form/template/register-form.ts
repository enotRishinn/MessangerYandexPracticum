const template = `
  <form>
    <div class="register-form__header">
        {{{ header }}}
    </div>
    <div class="register-form__content">
        {{{ emailInput }}}
        {{{ loginInput }}}
        {{{ firstNameInput }}}
        {{{ secondNameInput }}}
        {{{ phoneInput }}}
        {{{ passwordInput }}}
        {{{ repeatPasswordInput }}}
    </div>
    <div class="register-form__footer">
        {{{ submitButton }}}
        {{{ loginLink }}}
    </div>
  </form>
`;

export default template;
