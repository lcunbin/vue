Vue.component('booklist',{
    props:{
        type:{
            type:String,
            default:"info"
        },
        title:{
            type:String,
            default:'新书速递'
        }
    },
    template:`
<div class="book">
    <div class="book-header">
    <h3 class="h3">{{title}}</h3>
    <a  class="more" href="https://book.douban.com">更多</a>
    </div>
    <div class="book-content">
    <div class="bookdes">
    <slot name="bookcontent">
    <a><img src="./images/1好好学习.jpg" alt="好好学习" /></a>
    </slot>
    </div>
    </div>
    </div>
`,
});
Vue.component('navheader',{
    /*       props:{
     type:{
     type:String,
     default:"info"
     },
     navdata:{
     type:String,
     default:'电影'
     }
     },
     data(){
     return {
     message:["电影","读书","电视","同城","音乐"]
     }
     },*/
    template:`
<ul class="navv">
    <slot name="navv">
    <li class="daolist movie"><a href="./movie.html">电影</a></li>
    <li class="daolist read">读书</li>
    <li class="daolist tv">电视</li>
    <li class="daolist tc">同城</li>
    <li class="daolist music">音乐</li>
    </slot>
    </ul>
`
});
Vue.component('selectbook',{
    props:{
        type:{
            type:String,
            default:"info"
        },
        tit:{
            type:String,
            default:'选图书'
        }
    },
    template:`
      <ul class="slist">
        <slot name="sslist">
        <h3>{{tit}}</h3>
        <a href="https://www.baidu.com/"><li class="selelist gs">故事</li></a>
        <a href="https://www.baidu.com/"><li class="selelist aq">爱情</li></a>
        <a href="https://www.baidu.com/"><li class="selelist ls">历史</li></a>
        <a href="https://www.baidu.com/"><li class="selelist qc">青春</li></a>
        <a href="https://www.baidu.com/"><li class="selelist ll">励志</li></a>
        <a href="https://www.baidu.com/"><li class="selelist sb">随笔</li></a>
        <a href="https://www.baidu.com/"><li class="selelist lx">旅行</li></a>
        <a href="https://www.baidu.com/"><li class="selelist hx">幻想</li></a>
        <a href="https://www.baidu.com/"><li class="selelist kh">科幻</li></a>
        <a href="https://www.baidu.com/"><li class="selelist zj">传记</li></a>
        <a href="https://www.baidu.com/"><li class="selelist tz">童真</li></a>
        </slot>
      </ul>

    `
})
new Vue({
    el:"#book",
    /*  data:{           //数据在根实例里写的是对象，在组件里写的是函数
     message:message
     }*/
})