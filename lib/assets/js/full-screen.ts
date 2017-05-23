/**
 * 全屏
 * @param {Element} 
 * @param {Boolean} 状态
 * @return {void}
*/
var fullScreen = function (el: Element, state: Boolean): void {
    var document: any = window.document;
    var docElm: any = document.documentElement;
    if (!(el)) {
        throw new TypeError('el must Element');
    }
    el.addEventListener("click", function () {
        if (state) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
       state = !state;
    }, false);
}
export default fullScreen