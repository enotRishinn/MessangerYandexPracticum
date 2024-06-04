const template = `
    <section class="edit-profile-page">
    <form class="edit-profile-page__form">
        <div class="edit-profile-page__container">
            <div class="edit-profile-page__header">
                {{{ avatar }}}
            </div>
            <div class="edit-profile-page__content">
                {{{ emailInput }}}
                {{{ loginInput }}}
                {{{ firstNameInput }}}
                {{{ secondNameInput }}}
                {{{ displayNameInput }}}
                {{{ phoneInput }}}
            </div>
            <div class="edit-profile-page__footer">
                {{{ submitButton }}}
                {{{ backToChatsLink }}}
            </div>
        </div>
    </form>
</section>
`;

export default template;
