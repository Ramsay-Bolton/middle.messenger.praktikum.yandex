export const registrationTemplate = `
<div class="registration__registration">
  <h1>Create Profile</h1>
    {{#each inputs}}
      <p>
        <input name='{{this.inputName}}' type='{{this.type}}' placeholder='{{this.placeholder}}' size="40" />
      </p>
    {{/each}}
    <p>
      <button  class="registration__registration__button">Create</button>
    </p>
    <p>
      <a href="/login" class="registration__registration__signin-link">Sign in</a>
    </p>
</div>`;