export const defaultTemplate = `
<div class="default__main">
    <div class="default__sidebar">
        <div class="default__sidebar__menu">
            <a href="/profile">
                <img src='{{sidebarLogoImage}}'>
            </a>
        </div>
        <div class="default__sidebar__back">
            <a href="/">
                <img src='{{sidebarBackImage}}'>
            </a>
        </div>
    </div>
    <div class="default__default-page">
        <div class=default__default-page__map-links>
        {{#each links}}
        <p>
          <a href='{{this.href}}'>{{this.title}}</>
        </p>
      {{/each}}
        </div>
    </div>
</div>`;