# 
<simulate-window>
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
    </div>
</simulate-window>

let el = document.querySelector('simulate-window');
new SimulateWindow({
  el: el,
  hooks: {
    afterMaximize () {
      console.log('放大了')
    },
    afterRestore () {
      console.log('恢复了')
    }
  }
});
## Setup

```
$ npm install
```

## Running

```
$ npm start
```

## Build

```
$ npm run build
```

# License

MIT
