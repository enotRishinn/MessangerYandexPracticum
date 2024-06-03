const template = `
    <section class="change-password__section">
    <form class="change-password">
        <div class="change-password-page__container">
            <div class="change-password-page__header">
                {{{ avatar }}}
            </div>
            <div class="change-password__content">
                {{{ oldPassword }}}
                {{{ newPassword }}}
                {{{ repeatNewPassword }}}
            </div>
            <div class="change-password__footer">
                {{{ submitButton }}}
                {{{ backToChatsLink }}}
            </div>
        </div>
    </form>
    </section>
`;

export default template;
