import Body from "./Interfaces/Body.js";
import Filter from "./Interfaces/Filter.js";
import Footer from "./Interfaces/Footer.js";
import Header from "./Interfaces/Header.js";
import html from "./js/core.js";

function App() {
  return html`
    <div id="container">
      ${Header()}
      <div id="content">
        ${Filter()}
        <div class="pagination-search-result">
          <div class="pagination">
            <div class="page">
              <a class="page__btn" href="">
                <img
                  src="./assets/icons/chevron-left.svg"
                  class="material-icons"
                  alt="" />
                <!-- <span class="material-icons">chevron_left</span></li> -->
              </a>
              <a href="" class="page__numbers active">1</a>
              <a href="" class="page__numbers">2</a>
              <a href="" class="page__numbers">3</a>
              <a href="" class="page__numbers">4</a>
              <a href="" class="page__dots">...</a>
              <a href="" class="page__numbers">97</a>
              <a href="" class="page__numbers">98</a>
              <a href="" class="page__numbers">99</a>
              <a href="" class="page__numbers">100</a>
              <a href="" class="page__btn">
                <img
                  src="./assets/icons/chevron-right.svg"
                  class="material-icons"
                  alt="" />
              </a>
            </div>
          </div>
          <p>1～30件を表示（全1,920件中）</p>
        </div>
        ${Body()}
      </div>
      <div class="pagination-search-result">
        <div class="pagination">
          <ul class="page">
            <a href="" class="page__btn">
              <img
                src="./assets/icons/chevron-left.svg"
                class="material-icons"
                alt="" />
              <!-- <span class="material-icons">chevron_left</span></a> -->
            </a>

            <a href="" class="page__numbers active">1</a>
            <a href="" class="page__numbers">2</a>
            <a href="" class="page__numbers">3</a>
            <a href="" class="page__numbers">4</a>
            <a href="" class="page__dots">...</a>
            <a href="" class="page__numbers">97</a>
            <a href="" class="page__numbers">98</a>
            <a href="" class="page__numbers">99</a>
            <a href="" class="page__numbers">100</a>
            <a href="" class="page__btn">
              <img
                src="./assets/icons/chevron-right.svg"
                class="material-icons"
                alt="" />
            </a>
          </ul>
        </div>
      </div>
      ${Footer()}
    </div>
  `;
}
export default App;
