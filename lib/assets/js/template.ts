var template = function () {
 return  `
  <div class="window-header">
    <div class="window-header-right">
       <svg class="icon" aria-hidden="true">
          <use class="maximize" xlink:href="#icon-full-screen"></use>
      </svg>
    </div>
  </div>
  <div class="window-body">
    <div class="window-content">
    </div>
  </div>`
}
export default template