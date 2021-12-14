const chatItemTemplate: string = `
<div class="chats__list__item">
<div>
    <img src='{{ userImage }}'>
</div>
<div class="chats__message-info">
    <span><b>{{ userName }}</b></span>
    <span class="chats__message">{{{ message }}}</span>
</div>
{{#if messageCount}}
<div class="chats__message_count">
    {{{ messageCount }}}
</div>
{{/if}}
</div>
`;

export default chatItemTemplate;
