const template = `
  <form>
    <div class="login-form__header">
        {{{ header }}}
    </div>
    <div class="login-form__content">
        {{{ loginInput }}}
        {{{ passwordInput }}}
    </div>
    <div class="login-form__footer">
        {{{ submitButton }}}
        {{{ registrationLink }}}
    </div>
  </form>
`;

export default template;
