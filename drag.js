/**
 * Created by DennyMa on 2017/9/4.
 */
function drag(id) {
    var obj = document.getElementById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function () {
        disX = ev.pageX - obj.offsetLeft;
        disY = ev.pageY - obj.offsetTop;
        document.onmousemove = function() {
        	obj.style.left = ev.pageX - disX + 'px';
        	obj.style.top = ev.pageY - disY + 'px';
        }
    }
}