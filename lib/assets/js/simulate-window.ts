// import isElement from 'h-utils/lib/types/isElement'
import template from './template'
import fullScreen from './full-screen'
/**
 * 模拟窗口
 * @param {swOpts}
 * @return {}
*/
interface swOpts{
  el: Element,
  hooks: {
    afterMaximize? : Function, 
    afterRestore? : Function
  }
}
class SimulateWindow {
  private originalWindowSize: any;
  private el: any;
  private toggle: Boolean = true;
  // hooks
  private afterMaximize: Function;
  private afterRestore: Function;

  constructor (opts: swOpts) {
    if (!(opts.el instanceof HTMLElement)) {
      throw new TypeError('el: must element');
    }
    this.el = opts.el;
    this.afterMaximize = opts.hooks.afterMaximize || function () {};
    this.afterRestore = opts.hooks.afterRestore || function () {};
    this.init();
  }
  // 初始化
  init (): void {
    this.originalWindowSize = {
      width: getComputedStyle(this.el).width || 'auto',
      height: getComputedStyle(this.el).height || 'auto'
    }
    console.log(this.originalWindowSize)
    // this.el.innerHTML = template.call(this);
    let btnMax = this.el.querySelector('.maximize');
    fullScreen(btnMax, this.toggle);
    btnMax.onclick = () => {
      if (this.toggle) {
        this.maximize()
      } else {
        this.restore()
      }
      this.toggle = !this.toggle;
    };
  }
  // 最大化
  maximize (): void  {
    this.el.classList.add('maximize');
    this.el.style.width = window.innerWidth + 'px';
    this.el.style.height = window.innerHeight + 'px';
    this.afterMaximize();
  }
  // 还原
  restore (): void {
    this.el.classList.remove('maximize');
    Object.assign(this.el.style, {
      width: this.originalWindowSize.width,
      height: this.originalWindowSize.height
    });
    this.afterRestore();
  }
}
// export default template
export default SimulateWindow