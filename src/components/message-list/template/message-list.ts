const template = `
<div class="message-list">
    {{#each messages}}
      {{> MessageItem content=this.content sender=this.sender id=this.id}}
    {{/each}}
  </div>
`;

export default template;
