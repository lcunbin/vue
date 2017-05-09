// 轮播图
Vue.component("swip", {
    data: function() {
        return {
            swipList: ["03a9580dbea5043_02.jpg", "3e6ddfae363ac2e_02.jpg", "a11c9de4be701d6_02.jpg", "a19fe074b049164_02.jpg"]
        };
    }, //data以函数形式传入
    template: `<div class="swip">
            <ul class="swip-con">
                <li v-for="item of swipList" class="swip-item">
                    <a href="#">
                        <img :src='"images/"+item' alt="">
                    </a>
                </li>
            </ul>
            <ul class="swip-point">
                <li class="on"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>`
})

new Vue({
    el: "#app",
    data: {
        hotList: [{
                title: "爹和摄影，波比娃娃、iPhone和黄金",
                description: "小时候我真希望妈妈说：你是不是喜欢波比娃娃，给你买一个吧？",
                icon: "icon1"
            },
            {
                title: "今晚我有空|如此欢脱的惊悚片，竟成了北美..",
                description: "惊悚片《逃出绝命镇》突破类型，创下今年小成本高票房的口碑佳作。",
                icon: "icon2"
            },
            {
                title: "爹和摄影，波比娃娃、iPhone和黄金",
                description: "小时候我真希望妈妈说：你是不是喜欢波比娃娃，给你买一个吧？",
                icon: "icon3"
            }
        ],
        timeList: [{
                topP1: "常江和非主流电影人们",
                topP2: "青年评论家，学者，邪典电影",
                mainH3: "邪典电影本纪",
                mainP1: "情色暴力的视觉冲击外，探索Cult亚文化的精神内核",
                mainH4: "高智商电影问祖邪典片"
            },
            {
                topP1: "杨照",
                topP2: "作家、文学评论家，华文世界著作",
                mainH3: "古今：杨照史记百讲",
                mainP1: "经典“摆渡人”杨照通过解读《史记》，带你领略中国的大理石，先民的大智慧",
                mainH4: "太平世里的战争奇才"
            },
            {
                topP1: "北岛和朋友",
                topP2: "当代著名诗人、译者及学者们",
                mainH3: "醒来——北岛和朋友们的",
                mainP1: "北岛和朋友们为你讲述诗人传奇故事，解读文化历史背景，细析诗句幽微妙处",
                mainH4: "敬文东|何其芳《欢乐》（下）"
            }
        ]
    }
})
$(document).ready(function() {
    var swip = $('.swip');
    swiper(swip, true, 4);

})

function swiper(selector, autoplay, number) { //轮播函数
    var i = 0;
    var imgList = selector.find('ul').eq(0);
    var dotList = selector.find('ul').eq(1);
    var size = imgList.find('li').length; //获取imgList中图片的数量
    var width = imgList.find('li').width();
    var button = selector.find('div');
    var clone = imgList.find('li').eq(0).clone(); //复制第一张图片
    imgList.append(clone); //将复制的第一张图片加到最后一张图片后，以实现无缝轮播	
    if (autoplay == true) { //如果autoplay==true，设置定时器
        var timer = setInterval(function() {
            i++;
            move();
        }, 2000);
    }

    function move() { //图片移动的通用函数
        if (i == size + 1) { //当移动到最后一张图片时，若再向右移，通过改变css将图片移动至第一张图片的位置，即left：0
            imgList.css({
                left: 0
            });
            i = 1;
        };
        imgList.stop().animate({
            left: -width * i
        }, 500); //图片移动的动画
        if (i == size) {
            dotList.find('li').eq(0).addClass("on").siblings().removeClass("on"); //移动到最后一张图片的时候，让第一个索引条处于on的状态
        } else {
            dotList.find('li').eq(i).addClass("on").siblings().removeClass("on");
        }
    }
}