
// 功能：拖拽
// 参数：
// moveDom:移动的dom
// drageDom: 触发拖拽的dom（dragDom是moveDom的子元素）：可选
// parentDom: 父元素（移动的区域）。可选

// 返回值：无
function drag(moveDom, dragDom, parentDom, isBackPlay) {

    parentDom = parentDom || moveDom.offsetParent;//offsetParent：有定位的父元素（当前元素定位基于的父元素）
    dragDom = dragDom || moveDom;
    var offsetX;
    var offsetY;
    var historys = [];

    var moveFn = function (event) {
        var e = event || window.event;

        // 计算 盒子的left和top
        var left1 = e.pageX - offsetX - parentDom.offsetLeft;
        var top1 = e.pageY - offsetY - parentDom.offsetTop;

        if (left1 < 0) {
            left1 = 0;
        } else if (left1 > (parentDom.offsetWidth - moveDom.offsetWidth)) {
            left1 = parentDom.offsetWidth - moveDom.offsetWidth;
        }
        if (top1 < 0) {
            top1 = 0;
        } else if (top1 > (parentDom.offsetHeight - moveDom.offsetHeight)) {
            top1 = parentDom.offsetHeight - moveDom.offsetHeight;
        }

        isBackPlay && historys.push({
            left: left1,
            top: top1
        })

        // 改变盒子的left和top
        moveDom.style.left = left1 + "px";
        moveDom.style.top = top1 + "px";

    }

    dragDom.addEventListener("mousedown", mousedownFn);
    function mousedownFn(event) {
        var e = event || window.event;
        // 鼠标距离事件源（要拖拽的盒子的距离）
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        parentDom.addEventListener("mousemove", moveFn)
    }

    document.addEventListener("mouseup", function () {
        parentDom.removeEventListener("mousemove", moveFn);
        (isBackPlay && historys.length > 0) && backPlay();
    });


    function backPlay() {
        var index = historys.length - 1;

        var myTimer = setInterval(function () {

            moveDom.style.left = historys[index].left + "px";
            moveDom.style.top = historys[index].top + "px";

            index--;

            if (index < 0) {
                clearInterval(myTimer);
                historys.length = 0;
            }

        }, 10)

    }

}
