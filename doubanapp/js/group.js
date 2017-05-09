Vue.component("content-component",{
    props:["list"],
    template:`<div class="contentType">
        <p>{{list}}</p>
        <div class="movieContent">
            <img src="images/vuejs.jpeg">
            <div class="mobieWordContent">
                <div class="movieTitle">Vue.js</div>
                <div class="movieDes">Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。</div>
                <div class="fans">82588人</div>
                <img src="images/select.png">
            </div>
        </div>
        <div class="movieContent">
            <img src="images/vuejs.jpeg">
            <div class="mobieWordContent">
                <div class="movieTitle">Vue.js</div>
                <div class="movieDes">Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。</div>
                <div class="fans">82588人</div>
                <img src="images/select.png">
            </div>
        </div>
        <div class="movieContent">
            <img src="images/vuejs.jpeg">
            <div class="mobieWordContent">
                <div class="movieTitle">Vue.js</div>
                <div class="movieDes">Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。</div>
                <div class="fans">82588人</div>
                <img src="images/select.png" class="select1">
            </div>
        </div>
    </div>`,
});

new Vue({
    el:"#content",
    data: {
        list: ["影音", "读书", "音乐", "同城", "高校", "职场"],
    }
});

var imgObj = document.getElementsByClassName("select");
for (var a = 0; a < imgObj.length; a++) {
    (function (a) {
        imgObj[a].onclick = function () {
            if (imgObj[a].src=="http://localhost:63342/tabbar/images/selected.png") {
                imgObj[a].src = "images/select.png";
            } else{
                imgObj[a].src = "images/selected.png";
            }
        }
    }(a))
}
