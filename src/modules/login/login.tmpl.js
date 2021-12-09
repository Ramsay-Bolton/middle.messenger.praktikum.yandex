export const loginTemplate = `
<div class="login__login">
  <h1>Sign in</h1>
  <form>
    {{#each inputs}}
      <p>
        <input name='{{this.inputName}}' type='{{this.type}}' placeholder='{{this.placeholder}}' size="40" />
      </p>
    {{/each}}
  </form>
  <div>
    <p>
      <button type="submit" class="login__login__button">Enter</button>
    </p>
    <p>
      <a href="/registration" class="login__login__create-link">Create profile</a>
    </p>
  </div>
</div>`;