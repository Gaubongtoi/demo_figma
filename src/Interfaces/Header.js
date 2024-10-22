import html from "../js/core.js";

function Header() {
  return html`
    <header id="header">
      <div class="header-wrapper">
        <div class="header_logo">
          <div class="logo-wrapper">
            <img
              class="logo"
              src="./assets/img/logo_icon.png"
              alt="logo_icon" />
          </div>
        </div>
      </div>
    </header>
  `;
}
export default Header;
