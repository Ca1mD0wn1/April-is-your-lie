export default class Utils{
   static setCSS(css){
       var styleSheet=Array.from(document.styleSheets).find(item=>item.id==="custom");
       if(!styleSheet){
         var style=document.createElement("style");
         document.head.appendChild(style);
         style.id="custom";
         styleSheet=document.styleSheets[document.styleSheets.length-1];
       }
        css.split(/(?<=\})/g).forEach(item=>{
            item=item.trim().replace(/\n/g,"");
            if(item.length===0) return;
            styleSheet.insertRule(item,styleSheet.cssRules.length);
        });
    }

    static setStyle(title,cssStr){
        let myStyle = document.createElement("style");
        myStyle.title = title;
        document.head.appendChild(myStyle);
        var myStyleSheet = document.styleSheets[document.styleSheets.length - 1];

        cssStr = cssStr.trim();
        let cssArr = cssStr.split(/\}\s+/);
        console.log("cssArr", cssArr);

        cssArr.forEach(item => {
            myStyleSheet.insertRule(item, myStyleSheet.cssRules.length);  
        });
    }
}

