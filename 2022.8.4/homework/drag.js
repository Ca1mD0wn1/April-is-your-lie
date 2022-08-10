function drag(moveDom, fatherDom) {
    moveDom.onmousedown = function (event) {
        var e = event || window.event;
        if (fatherDom == undefined) {
            fatherDom = body;
        }
        //鼠标位置
        var offsetX = e.offsetX;
        var offsetY = e.offsetY;

        fatherDom.onmousemove = function (event) {
            var e = event || window.event;
            //计算 盒子的位置
            // console.log(offsetX);
            //鼠标距离页面的距离 - 鼠标距离父盒子的距离 - 父盒子距离页面的距离
            var left1 = e.pageX - offsetX - fatherDom.offsetLeft;
            var top1 = e.pageY - offsetY - fatherDom.offsetTop;



            if (left1 < 0) {
                left1 = 0;
            } else if (left1 > (fatherDom.offsetWidth - moveDom.offsetWidth)) {
                left1 = fatherDom.offsetWidth - moveDom.offsetWidth;
            }
            if (top1 < 0) {
                top1 = 0;
            } else if (top1 > (fatherDom.offsetHeight - moveDom.offsetHeight)) {
                top1 = fatherDom.offsetHeight - moveDom.offsetHeight;
            }


            moveDom.style.left = left1 + "px";
            moveDom.style.top = top1 + "px";
        }
    }
    document.onmouseup = function () {

        fatherDom.onmousemove = null;
    }

}