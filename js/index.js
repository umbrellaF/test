window.onload=function () {

    var header=document.querySelector('.header');
    var height=44;

    window.onscroll=function () {
        console.log(111);
        var ttop = document.body.scrollTop  || document.documentElement.scrollTop;

        if(ttop>height){
            header.style.cssText="background:#e43130;"
        }else{
            header.style.cssText="position:relative;"
        }
    }

}