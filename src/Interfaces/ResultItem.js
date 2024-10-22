import html from "../js/core.js";

function ResultItem() {
  return html`
    <article class="wrapper-body-content">
      <div class="wrapper-content">
        <!-- Header content -->
        <div class="content-header">
          <div class="status"><span class="status-text">NEW</span></div>
          <p>
            企業No.25697 <span>|</span> 閲覧数：934
            <span>|</span> 公開日：2023.03.20
          </p>
        </div>
        <div class="content-body">
          <div class="content-left">
            <div class="content-img-wrapper">
              <img src="./assets/img/PHOTO.png" alt="" />
            </div>
            <div class="contact-bussiness-btn">
              <div class="content-icon-wrapper">
                <img src="./assets/icons/dashicons_food.svg" alt="" />
              </div>
              <p>飲食店・食品</p>
            </div>
          </div>
          <div class="content-right">
            <div class="tabs-wrapper">
              <!-- Tabs -->
              <div class="tab-item">
                <p>カフェ</p>
              </div>
              <div class="tab-item">
                <p>フランチャイズ</p>
              </div>
              <div class="tab-item">
                <p>菓子製造販売</p>
              </div>
            </div>
            <!-- Content Right Header -->
            <h1 class="content-right-header">Tr'Đin product company（社名）</h1>
            <!-- Content Right Body -->
            <div class="content-right-body">
              <a href="/" class="body-title">
                ここにタイトルが入りますここにタイトルが入りますここにタイトルが入りますここにタイトルが入りますここにタイトルが入りますここにタイトル
              </a>
              <div class="location-table">
                <div class="column">
                  <div class="row row-1 field">地域</div>
                  <div class="row row-2 field">掲載目的</div>
                </div>
                <div class="column">
                  <div class="row row-1">ホーチミン市</div>
                  <div class="row row-2">
                    資本提携｜業務提携｜顧客開拓｜人脈作り
                  </div>
                </div>
              </div>
              <p class="description">
                ここに本文を抜粋して挿入しますここに本文を抜粋して挿入しますここに本文を抜粋して挿入しますここに本文を抜粋して挿入しますここに本文を抜粋して挿入しますここに本文を抜粋して挿入しますここに本文を抜粋して挿入しますここに本文を抜粋して挿入しますここに本文を抜粋して挿入しますここに本文を抜粋して…
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}
export default ResultItem;
