export const notFoundTemplate = `
<div class="error__main">
    <div class="error__sidebar">
        <div class="error__sidebar__menu">
            <a href="/profile">
                <img src='{{sidebarLogoImage}}'>
            </a>
        </div>
        <div class="error__sidebar__back">
            <a href="/">
                <img src='{{sidebarBackImage}}'>
            </a>
        </div>
    </div>
    <div class="error__section">
        <div class="error__error-page">
            <span class="error__error-page__code">{{code}}</span>
            <span class="error__error-page__info">{{info}}</span>
        </div>
    </div>
</div>`;