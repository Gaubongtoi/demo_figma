import html from "../js/core.js";
import ResultItem from "./ResultItem.js";

function Body() {
  return html`
    <div class="content-section">
      <div class="wrapper">
        ${Array.from(
            { length: 5 },
            (_, i) => ResultItem()
        )}
      </div>
    </div>
  `;
}
export default Body;
