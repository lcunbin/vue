/**
 * Created by QZ on 2017/4/22.
 */
Vue.component("custom-select", {
    //        data: function () {
    //            return {
    //
    //  val: ""
    //     };
    //  },
    props: ["list"],
    template: `<div class="move-hots">
            <div class="smalltit" >{{list}}</div>
            <div class="more">更多></div>
            <ul class="move-hot">
            <li><img src="images/pic.jpg" alt=""> <div class="pinfen">速度和激情</div></li>
            <li><img src="images/pic.jpg" alt=""> <div class="pinfen">速度和激情</div></li>
            <li><img src="images/pic.jpg" alt=""> <div class="pinfen">速度和激情</div></li>
            <li><img src="images/pic.jpg" alt=""> <div class="pinfen">速度和激情</div></li>
            <li><img src="images/pic.jpg" alt=""> <div class="pinfen">速度和激情</div></li>
            <li><img src="images/pic.jpg" alt=""> <div class="pinfen">速度和激情</div></li>
            <li><img src="images/pic.jpg" alt=""> <div class="pinfen">速度和激情</div></li>
            </ul>
            </div>`
})
new Vue({
    el: "#move",
    data: {
        list1: ["影像热映", "感兴趣"],


    }
})