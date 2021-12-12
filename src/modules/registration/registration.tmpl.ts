export const registrationTemplate: string = `
<div class="registration__registration">
  <h1>Create Profile</h1>
  <form name="registration" method="post" class="registration__registration__form">
    {{#each inputs}}
      <div class="registration__registration__form__item">
        {{{ this }}}
      </div>
    {{/each}}
    <div class="registration__registration__form__item__button_container">
      {{{ button }}}
    </div>
  </form>
  <div>
      <a href="/login" class="registration__registration__signin-link">Sign in</a>
  </div>
</div>`;

export default registrationTemplate;