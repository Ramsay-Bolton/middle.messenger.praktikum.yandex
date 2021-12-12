export const chatsTemplate: string = `
<div class="chats__main">
    <div class="chats__aside">
        <div class="chats__header">
            <div class="chats__sidebar__menu">
                <a href="/profile">
                    <img src='{{ sidebarLogoImage }}'>
                </a>
            </div>
            <div class="chats__search"></div>
        </div>
        <div class="chats__list">
            {{#each items}}
                {{{ this }}}
            {{/each}}
        </div>
    </div>
    <div class="section">
    </div>
</div>`;

export default chatsTemplate;