export const loginTemplate = `
<div class="login__login">
  <h1>Sign in</h1>
    {{#each inputs}}
      <p>
        <input name='{{this.inputName}}' type='{{this.type}}' placeholder='{{this.placeholder}}' size="40" />
      </p>
    {{/each}}
    <p>
      <button  class="login__login__button">Enter</button>
    </p>
    <p>
      <a href="/registration" class="login__login__create-link">Create profile</a>
    </p>
</div>`;