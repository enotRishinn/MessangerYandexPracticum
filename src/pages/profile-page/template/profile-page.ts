const template = `
<section>
    <div class="profile-page__container">
        <div class="profile-page__header">
            {{{ avatar }}}
            <div class="profile-page__username">
            {{ profileName }}
            </div>
        </div>
        <div class="profile-page__content">
            {{{ emailData }}}
            {{{ loginData }}}
            {{{ firstNameData }}}
            {{{ secondNameData }}}
            {{{ displayNameData }}}
            {{{ phoneData }}}
        </div>
        <div class="profile-page__footer">
            {{{ changeDataLink }}}
            {{{ changePasswordLink }}}
            {{{ logOutLink }}}
            {{{ backToChatsLink }}}
        </div>
    </div>
</section>
`;

export default template;
