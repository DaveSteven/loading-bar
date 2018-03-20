export default class LoadingBar {

    constructor(loadingEl, numberEl) {
        this.loadingEl = document.getElementById(loadingEl);
        this.numberEl = document.getElementById(numberEl);
        this.timer = null;
        this.process = 0;
    }

    // 获取某个范围的随机数
    getRangeRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // 开始加载
    start() {
        if (this.process < 80) {

            // 随机时间，或快或慢
            let randomTime = this.getRangeRandomInt(100, 2000); 

            // 定时器
            this.timer = setTimeout(() => {

                if (this.process < 60) {
                    // 默认增长速度
                    this.process += this.getRangeRandomInt(5, 20);
                } else {
                    // 减慢增长速度
                    this.process += this.getRangeRandomInt(1, 5);
                }

                this.loadingEl.style.width = `${this.process}%`;
                this.numberEl.innerHTML = `<span class="num">${this.process}</span>%`;
                this.start();

            }, randomTime)

        }
    }

    // 完成加载
    finish() {
        clearTimeout(this.timer);
        this.loadingEl.style.width = '100%';
        this.numberEl.innerHTML = '<span class="num">100</span>%';
    }
    
}