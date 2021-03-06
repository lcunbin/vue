window.onload = function() {

    var tab01 = Vue.extend({
        template: `<div class="m">
        <div class="m-left"><span>帮助</span></div>
        <div class="m-center"><span>￥50.00</span></div>
        <div class="m-bottom"><span>零钱</span></div>
    </div>`
    });
    var tab02 = Vue.extend({
        template: `<div class="d">
        <div class="m-left"><span>帮助</span></div>
        <div class="m-center"><span>$50.00</span></div>
        <div class="m-bottom"><span>豆米</span></div>
    </div>`
    });
    var app = new Vue({
        el: "#app",
        data: {
            tab01Text: 'tab01',
            tab02Text: 'tab02',
            currentView: 'tab01'
        },
        components: {
            tab01: tab01,
            tab02: tab02,
            "head-title": {
                template: `<div class="head">
        <div class="img"><img src="images/fanhui.png"> </div>
        <p class="head-text-right">优惠券</p>
        <p class="head-text">我的钱包</p>

         </div>`

            },
            "bottom": {
                template: `<div class="wei">
            <span class="wei-top-w">交易记录</span>
            <span class="wei-center-c">暂时没有交易记录</span>

    </div>`

            }

        },

        methods: {
            tabToggle: function(tabText) {
                this.currentView = tabText
            }

        }
    });
}