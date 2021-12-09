export const profileTemplate = `
<div class="profile__main">
    <div class="profile__sidebar">
      <div class="profile__sidebar__menu">
        <a href="/login">
        <img src='{{sidebarLogoImage}}'>
        </a>
      </div>
      <div class="profile__sidebar__back">
        <a href="/">
        <img src='{{sidebarBackImage}}'>
        </a>
      </div>
    </div>
    <div class="profile__section">
      <div class="profile__profile">
        <div class="profile__profile__avatar">
          <div class="profile__profile__avatar-image">
            <img src='{{avatarImage}}' alt="avatar">
          </div>
          <div class="profile__profile__avatar-image__change">
            <a href="#">
            <img src='{{avatarImageChange}}'>
            </a>
          </div>
        </div>
        <form class="profile__profile__info">
          {{#each inputs}}
            <div class="profile__profile__info__item">
              <label>{{this.label}}</label>
              <input name='{{this.inputName}}' value='{{this.value}}' type='{{this.type}}' />
            </div>
          {{/each}}
        </form>
        <div>
          <button type="submit" class="profile__profile__save-button">Save</button>
        </div>
      </div>
    </div>
  </div>`;