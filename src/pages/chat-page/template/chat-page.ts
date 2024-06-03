const template = `
<div class="chat-page">
<div class="chat-page__sidebar">
<header class="chat-page__header">
   {{{ profileLink }}}
</header>
    {{{ searchInput }}}
    {{{ chatList }}}
</div>
    <div class="chat-page__content">
    <header class="chat-page__content__header">
        {{{ avatar }}}
        <span class="chat-page__content-header-name">{{ name }}</span>
    </header>
    <div class="chat-page__content__messages">
    {{{ messages }}}
    </div>
    <div class="chat-page__content__message-input">
        {{{ attachButton }}}
        {{{ messageInput }}}
        {{{ sendMessageButton }}}
    </div>
</div>
</div>
`;

export default template;