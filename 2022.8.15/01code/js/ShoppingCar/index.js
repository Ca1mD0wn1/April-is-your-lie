export default class ShoppingCar {

    constructor(obj) {
        let defaultObj = {
            el: "body",
            data: undefined
        }

        for (let key in defaultObj) {
            this[key] = obj[key] == undefined ? defaultObj[key] : obj[key];
        }

        this.el = typeof this.el == "string" ? document.querySelector(this.el) : this.el;

        // 给每个数据增加属性isChecked(表示当前商品是否被选中)
        this.data.forEach(item=>{
            item.isChecked=false
        })

        // 全选按钮的选中状态
        this.allChecked = false;

        console.log("this.data",this.data);

        this.setStyle();
        this.render();
      
        
    }

    render() {
        let htmlStr = `
                <table>
                    <tr>
                        <th>
                            <input car class="checkall" type="checkbox" ${this.allChecked?`checked="checked"`:``} />
                        </th>
                        <th>
                            商品编号
                        </th>
                        <th>
                            商品名称
                        </th>
                        <th>
                            价格
                        </th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                `;
                let count = 0;
                let totalMoney = 0;
                this.data.forEach(goods => {
                    if(goods.isChecked){
                        count += goods.count;
                        totalMoney += goods.price * goods.count;
                    }
                    htmlStr += `
                    <tr>
                        <td>
                            <input car class="checkbtn" type="checkbox"  ${goods.isChecked?`checked="checked"`:``} >
                        </td>
                        <td>${goods.id}</td>
                        <td>${goods.name}</td>
                        <td>${goods.price}</td>
                        <td>
                            <input car type="button" class="minus" value=" - ">
                            <input type="text" value="${goods.count}">
                            <input car type="button" class="add" value=" + ">
                        </td>
                        <td>${goods.price * goods.count}</td>
                        <td>
                            <input car class="delete" type="button" value="删除">
                        </td>
                    </tr>
                `
                });

                htmlStr += `
                    <tr>
                        <td colspan="7">
                            总数量：<span>${count}</span>
                            总金额：<span>${totalMoney}</span>
                        </td>
                    </tr>
                </table>
            `;

        this.el.innerHTML = htmlStr;

        this.addEvent();

    }

    setStyle(){

    }

    addEvent(){
        // 1、加号
        let addBtns = document.querySelectorAll(".add[car]");
        Array.from(addBtns).forEach((btn,index)=>{
            btn.onclick = ()=>{
                // 一、逻辑（最终是修改数据）
                // 逻辑运算
                let count = this.data[index].count+1;

                // 边界判断
                if( this.data[index].limit && count>this.data[index].limit){
                    return;
                }

                this.data[index].count = count;
                

                //二、 外观呈现
                this.render();
            }
        })


        // 2、减号
        
        let minusBtns = document.querySelectorAll(".minus[car]");
        Array.from(minusBtns).forEach((btn,index)=>{
            btn.onclick = ()=>{
                // 一、逻辑（修改的数据）
                if(this.data[index].count-1<0){
                    return;
                }
                this.data[index].count--;

                // 二、外观呈现
                this.render();
            }
        })

        // 3、删除

        let deleteBtns = document.querySelectorAll(".delete[car]");
        Array.from(deleteBtns).forEach((btn,index)=>{
            btn.onclick = ()=>{
                if(confirm("亲，您真的要删除吗？")){
                    // 一、逻辑（修改的数据）
                    this.data.splice(index,1);
                    // 二、外观呈现
                    this.render();
                }
            }
        })

        // 4、全选
        // 1）、全选按钮
        let checkall = document.querySelector(".checkall[car]");
        checkall.onchange = ()=>{
            
            // 一、逻辑（修改的数据）
            this.allChecked = checkall.checked;
            this.data.forEach(goods=>{
                goods.isChecked = this.allChecked;
            })

            // 二、外观呈现
            this.render();
        }


        // 2）、反向选择
        let allCheckedBtn = document.querySelectorAll(".checkbtn[car]")
        for(let i=0;i<allCheckedBtn.length;i++){
            allCheckedBtn[i].onchange = ()=>{
                
                this.data[i].isChecked = allCheckedBtn[i].checked;

                // 反向判断
                if(this.data.every(item=>item.isChecked)){
                    this.allChecked = true;
                }else{
                    this.allChecked = false;
                }

                this.render();
            }
        }

    }
}
