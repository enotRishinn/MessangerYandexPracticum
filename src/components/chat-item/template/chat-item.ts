const template = `
<div class="chat-item" id="{{ id }}">
    {{{ avatar }}}
    <div class="chat-item__name">{{ name }}</div>
    <div class="chat-item__last-message">{{ lastMessage }}</div>
  </div>
`;

export default template;
