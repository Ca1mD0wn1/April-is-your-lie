export default  `

    .carousel-box{
        margin: 100px auto;
        position: relative;
        width: 400px;
        height: 400px;
        border: 1px solid black;
    }

    #imgbox {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    #imgbox img {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    #imgbox img:nth-child(1) {
        opacity: 1;
    }

    #doubox {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        width: 150px;
        height: 30px;
        /* background-color: rgba(135, 207, 235, 0.416);             */
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 999;
    }

    #doubox li {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: pink;
    }

    #doubox li:nth-child(1) {
        background-color: red;
    }                
`