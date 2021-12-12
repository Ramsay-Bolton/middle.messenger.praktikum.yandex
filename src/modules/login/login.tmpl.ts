export const loginTemplate: string = `
<div class="login__login">
  <h1>Sign in</h1>
  <form name="login" id="login" method="post">
    {{#each inputs}}
      <p>
        {{{ this }}}
      </p>
    {{/each}}
    <div class="login__button-container">
      {{{ button }}}
    </div>
  </form>
  <div>
    <a href="/registration" class="login__login__create-link">Create profile</a>
  </div>
</div>`;

export default loginTemplate;