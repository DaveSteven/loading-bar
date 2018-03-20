export default class LoadingBar {

    constructor(loadingEl, numberEl) {
        this.loadingEl = document.getElementById(loadingEl);
        this.numberEl = document.getElementById(numberEl);
        this.timer = '';
        this.loading = 0;
    }

    // 获取某个范围的随机数
    getRangeRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // 开始加载
    start() {
        if (this.loading < 80) {

            this.timer = setTimeout(() => {

                if (this.loading < 60) {
                    this.loading += this.getRangeRandomInt(5, 20);
                } else {
                    this.loading += this.getRangeRandomInt(1, 5);
                }

                this.loadingEl.style.width = `${this.loading}%`;
                this.numberEl.innerHTML = `<span class="num">${this.loading}</span>%`;
                this.start();

            }, this.getRangeRandomInt(100, 2000))

        }
    }

    // 完成加载
    finish() {
        clearTimeout(this.timer);
        this.loadingEl.style.width = '100%';
        this.numberEl.innerHTML = '<span class="num">100</span>%';
    }
    
}