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
        document.onmousedown = function(ev) {
        	obj.style.left = ev.clientX - disX + 'px';
        	obj.style.top = ev.clientY - disY + 'px';
        }
    }
}