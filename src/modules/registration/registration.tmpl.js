export const registrationTemplate = `
<div class="registration__registration">
  <h1>Create Profile</h1>
  <form>
    {{#each inputs}}
      <p>
        <input name='{{this.inputName}}' type='{{this.type}}' placeholder='{{this.placeholder}}' size="40" />
      </p>
    {{/each}}
  </form>
  <div>
    <p>
      <button type="submit" class="registration__registration__button">Create</button>
    </p>
    <p>
      <a href="/login" class="registration__registration__signin-link">Sign in</a>
    </p>
  </div>
</div>`;