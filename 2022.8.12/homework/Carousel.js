class CarouselFade {
    constructor(obj) {
        let defaultObj = {
            box: undefined,
            imgBox: undefined,
            imgDoms: [],
            liDoms: [],
            imgs: [],//图片路径
            urls: [],


            liSize: 10,
            liColor: "pink",
            liHeightColor: "red",
            liIsCircle: true,

            myTimer: undefined,
            timeSpace: 2000,
            currentIndex: 0,
            leftButton: undefined,
            rightButton: undefined,
        }

        for (let key in defaultObj) {
            this[key] = (obj[key] !== undefined) ? obj[key] : defaultObj[key]
        }
        this.render()
        this.autoPlay()
        this.addEvent()
    }


    //动态创建dom
    render() {
        //图片容器
        this.imgBox = document.createElement("div");
        this.imgBox.style.cssText =
            `position: absolute;
            width: 100%;
            height: 100%;
        `
        //图片
        this.imgs.forEach((item, index) => {
            let imgDom = document.createElement("img");
            imgDom.src = item;
            imgDom.style.cssText =
                `
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: ${index == 0 ? 1 : 0};
            `;
            this.imgBox.append(imgDom);
            this.imgDoms.push(imgDom);
        });
        this.box.append(this.imgBox);
        // 分页器
        let ulBox = document.createElement("ul");
        //
        ulBox.style.cssText = `
                position: absolute;
                left: 50%;
                bottom: 20px;
                transform: translateX(-50%);
                width: ${(this.imgs.length * 2 + 1) * this.liSize}px;
                height: ${this.liSize * 3}px;                       
                border-radius: 10px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                z-index: 999;                
        
        `
        this.imgs.forEach((item, index) => {
            let li = document.createElement("li");
            li.style.cssText = `
                width: ${this.liSize}px;
                height: ${this.liSize}px;
                border-radius: ${this.liIsCircle ? 50 : 0}%;
                background-color: ${index == 0 ? this.liHeightColor : this.liColor};
            `
            ulBox.append(li);
            this.liDoms.push(li)
        })
        this.box.append(ulBox);
        let leftButton = document.createElement("div");
        leftButton.innerHTML = "<"
        leftButton.style.cssText = `
        position: absolute;
        width: 50px;
        height: 40px;
        font-size: 30px;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        text-align: center;
        color: white;
        `
        let rightButton = document.createElement("div");
        rightButton.innerHTML = ">";
        rightButton.style.cssText =
            `
        position: absolute;
        width: 50px;
        height: 40px;
        font-size: 30px;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        text-align: center;
        color: white;
        `
        this.box.append(rightButton)
        this.box.append(leftButton);
        this.leftButton = leftButton;
        this.rightButton = rightButton;
    }

    autoPlay() {//自动播放
        this.myTimer = setInterval(() => {
            this.goImg(this.currentIndex + 1);
        }, this.timeSpace)
    }

    goImg(currentIndex) {//计算
        let preIndex = this.currentIndex;
        this.currentIndex = currentIndex;
        if (this.currentIndex > this.imgs.length - 1) {
            this.currentIndex = 0;
        } else if (this.currentIndex < 0) {
            this.currentIndex = this.imgs.length - 1;
        }

        this.fadeInOut(this.imgDoms[this.currentIndex], this.imgDoms[preIndex], 500);


        this.liDoms[this.currentIndex].style.backgroundColor = this.liHeightColor;
        this.liDoms[preIndex].style.backgroundColor = this.liColor;
    }

    addEvent() {
        for (let i = 0; i < this.liDoms.length; i++) {
            this.liDoms[i].onclick = () => {
                this.goImg(i);
            }
        }
        this.box.addEventListener("mouseenter", () => {
            window.clearInterval(this.myTimer);
        })

        this.box.addEventListener("mouseleave", () => {
            this.autoPlay();
        })
        this.imgBox.onclick = () => {
            this.goUrl();
        }
        console.log(this.rightButton);
        this.rightButton.addEventListener("click", () => {
            this.goImg(this.currentIndex + 1);
        })
        this.leftButton.addEventListener("click", () => {
            this.goImg(this.currentIndex - 1);
        })
        // 窗口失去焦点暂停播放
        window.addEventListener("blur", () => {
            window.clearInterval(this.myTimer);
        })

        // 窗口获得焦点继续播放
        window.addEventListener("focus", () => {
            this.autoPlay();
        })
    }
    goUrl() {
        if (this.urls.length > 0) {
            location.href = this.urls[this.currIndex];
        }
    }
    // 两个元素的淡入淡出；
    fadeInOut(domIn, domOut, timeLong) {

        let opacity = 0;
        // 时间间隔
        let timeSpace = 5;//毫秒，时间间隔取尽量小的数，这样会更加平滑
        // 步数
        let stepCount = timeLong / timeSpace;//总时长/时间间隔；
        let step = 1 / stepCount // 距离/步数;    


        let myTimer = setInterval(function () {
            // 1、计算数据
            opacity += step;

            if (opacity >= 1) {
                opacity = 1;
                clearInterval(myTimer);
            }

            // 2、改变外观
            domIn.style.opacity = opacity;
            domOut.style.opacity = 1 - opacity;

        }, timeSpace)
    }


}


class CarouselSlide {
    constructor(obj) {
        let defaultObj = {
            box: undefined,
            imgBox: undefined,
            imgDoms: [],
            liDoms: [],
            imgs: [],//图片路径
            urls: [],
            imgWidth: undefined,

            liSize: 10,
            liColor: "pink",
            liHeightColor: "red",
            liIsCircle: true,

            myTimer: undefined,
            timeSpace: 2000,
            currentIndex: 0,
            leftButton: undefined,
            rightButton: undefined,
        }

        for (let key in defaultObj) {
            this[key] = (obj[key] !== undefined) ? obj[key] : defaultObj[key]
        }
        this.render()
        this.autoPlay()
        this.addEvent()
    }


    //动态创建dom
    render() {
        this.width = parseInt(window.getComputedStyle(this.box)["width"]);

        //图片容器
        this.imgBox = document.createElement("div");
        this.imgBox.style.cssText =
            `position: absolute;
            width: 100%;
            height: 100%;
`
        //图片
        this.imgs.forEach((item, index) => {
            let imgDom = document.createElement("img");
            imgDom.src = item;
            imgDom.style.cssText =
                `
    position: absolute;
    width: 100%;
    height: 100%;
    left:${index == 0 ? 0 : this.width}px;
    `;
            this.imgBox.append(imgDom);
            this.imgDoms.push(imgDom);
        });
        this.box.append(this.imgBox);
        // 分页器
        let ulBox = document.createElement("ul");
        //
        ulBox.style.cssText = `
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        width: ${(this.imgs.length * 2 + 1) * this.liSize}px;
        height: ${this.liSize * 3}px;                       
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 999;                

`
        this.imgs.forEach((item, index) => {
            let li = document.createElement("li");
            li.style.cssText = `
        width: ${this.liSize}px;
        height: ${this.liSize}px;
        border-radius: ${this.liIsCircle ? 50 : 0}%;
        background-color: ${index == 0 ? this.liHeightColor : this.liColor};
    `
            ulBox.append(li);
            this.liDoms.push(li)
        })
        this.box.append(ulBox);
        let leftButton = document.createElement("div");
        leftButton.innerHTML = "<"
        leftButton.style.cssText = `
        position: absolute;
        width: 50px;
        height: 40px;
        font-size: 30px;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        text-align: center;
        color: white;
        `
        let rightButton = document.createElement("div");
        rightButton.innerHTML = ">";
        rightButton.style.cssText =
            `
            position: absolute;
            width: 50px;
            height: 40px;
            font-size: 30px;
            right: 0px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 999;
            text-align: center;
            color: white;
            `
        this.box.append(rightButton)
        this.box.append(leftButton);
        this.leftButton = leftButton;
        this.rightButton = rightButton;
    }

    autoPlay() {//自动播放
        this.myTimer = setInterval(() => {
            this.goImgLeft(this.currentIndex + 1);
        }, this.timeSpace)
    }

    goImgLeft(currentIndex) {//计算
        let preIndex = this.currentIndex;
        this.currentIndex = currentIndex;
        if (this.currentIndex > this.imgs.length - 1) {
            this.currentIndex = 0;
        } else if (this.currentIndex < 0) {
            this.currentIndex = this.imgs.length - 1;
        }


        this.slideInOutLeft(this.imgDoms[this.currentIndex], this.imgDoms[preIndex], 500, this.width)


        this.liDoms[this.currentIndex].style.backgroundColor = this.liHeightColor;
        this.liDoms[preIndex].style.backgroundColor = this.liColor;
    }
    goImgRight(currentIndex) {//计算
        let preIndex = this.currentIndex;
        this.currentIndex = currentIndex;
        if (this.currentIndex > this.imgs.length - 1) {
            this.currentIndex = 0;
        } else if (this.currentIndex < 0) {
            this.currentIndex = this.imgs.length - 1;
        }


        this.slideInOutRight(this.imgDoms[this.currentIndex], this.imgDoms[preIndex], 500, this.width)


        this.liDoms[this.currentIndex].style.backgroundColor = this.liHeightColor;
        this.liDoms[preIndex].style.backgroundColor = this.liColor;
    }

    addEvent() {
        for (let i = 0; i < this.liDoms.length; i++) {
            this.liDoms[i].onclick = () => {
                this.goImg(i);
            }
        }
        this.box.addEventListener("mouseenter", () => {
            window.clearInterval(this.myTimer);
        })

        this.box.addEventListener("mouseleave", () => {
            this.autoPlay();
        })
        this.imgBox.onclick = () => {
            this.goUrl();
        }

        this.rightButton.addEventListener("click", () => {
            this.goImgRight(this.currentIndex + 1);
        })
        this.leftButton.addEventListener("click", () => {
            this.goImgLeft(this.currentIndex - 1);
        })
        // 窗口失去焦点暂停播放
        window.addEventListener("blur", () => {
            window.clearInterval(this.myTimer);
        })

        // 窗口获得焦点继续播放
        window.addEventListener("focus", () => {
            this.autoPlay();
        })
    }
    goUrl() {
        if (this.urls.length > 0) {
            location.href = this.urls[this.currIndex];
        }
    }
    // 两个元素的淡入淡出；
    slideInOutLeft(domIn, domOut, timeLong, width) {

        let left = 0;
        // 时间间隔
        let timeSpace = 5;//毫秒，时间间隔取尽量小的数，这样会更加平滑
        // 步数
        let stepCount = timeLong / timeSpace;//总时长/时间间隔；
        let step = width / stepCount // 距离/步数;     

        let myTimer = setInterval(function () {
            // 1、计算数据
            left -= step;

            if (left <= -width) {
                left = -width;
                clearInterval(myTimer);
            }
            // 2、改变外观
            domOut.style.left = left + "px";
            domIn.style.left = (left + width) + "px";
        }, timeSpace)
    }

    slideInOutRight(domIn, domOut, timeLong, width) {

        let left = 0;
        // 时间间隔
        let timeSpace = 5;//毫秒，时间间隔取尽量小的数，这样会更加平滑
        // 步数
        let stepCount = timeLong / timeSpace;//总时长/时间间隔；
        let step = width / stepCount // 距离/步数;     

        let myTimer = setInterval(function () {
            // 1、计算数据
            left += step;
            // left 0-400
            if (left >= width) {
                left = width;
                clearInterval(myTimer);
            }

            // 2、改变外观
            domOut.style.left = left + "px";
            domIn.style.left = (left + -width) + "px";


        }, timeSpace)

    }
}
