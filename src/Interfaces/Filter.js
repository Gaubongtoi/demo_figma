import html from "../js/core.js";

function Filter() {
  return html`
    <div class="content-section">
          <h2 class="section-filter-heading">ベトナム企業一覧</h2>
          <!-- Wrapper Form Filter -->
          <div class="wrapper-form-filter">
            <div class="wrapper-form">
              <!-- Input section -->
              <div class="input-section">
                <div class="left-input">
                  <p class="input-text-filter">■ 業種</p>
                  <div class="input-choice-filter-wrapper">
                    <div class="input-choice-item">
                      <div class="choice-list">
                        <div class="choice">
                          <p class="input-choice-text">医療機器</p>
                          <div class="clear-icon-wrapper">
                            <img
                              src="./assets/icons/clear.svg"
                              alt=""
                              class="clear-icon" />
                          </div>
                        </div>
                      </div>
                      <div class="chevron-icon-wrapper">
                        <img
                          src="./assets/icons/chevron-down.svg"
                          alt="chevron-down" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-input">
                  <p class="input-text-filter">■ 地域</p>
                  <div class="input-choice-filter-wrapper">
                    <div class="input-choice-item">
                      <div class="choice-list">
                        <p class="choice-placeholder">選択してください</p>
                      </div>
                      <div class="chevron-icon-wrapper">
                        <img
                          src="./assets/icons/chevron-down.svg"
                          alt="chevron-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Input section -->
              <div class="input-section">
                <div class="left-input">
                  <p class="input-text-filter">■ 掲載目的</p>
                  <div class="input-choice-filter-wrapper">
                    <div class="input-choice-item">
                      <div class="choice-list">
                        <p class="choice-placeholder">選択してください</p>
                      </div>
                      <div class="chevron-icon-wrapper">
                        <img
                          src="./assets/icons/chevron-down.svg"
                          alt="chevron-down" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right-input">
                  <p class="input-text-filter">■ キーワード</p>
                  <div class="input-choice-filter-wrapper">
                    <div class="input-choice-item">
                      <div class="choice-list">
                        <p class="choice-placeholder">キーワードを入力する</p>
                      </div>
                      <div class="chevron-icon-wrapper">
                        <img
                          src="./assets/icons/chevron-down.svg"
                          alt="chevron-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="button-wrapper">
                <div class="button-component">
                  <p class="button-panel">検　索（18件）</p>
                </div>
              </div>
              <p class="remove-conditions-text">検索条件をクリア</p>
            </div>
          </div>
        </div>
  `;
}
export default Filter;
