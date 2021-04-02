function LinksSetcolor(color){
    var i = 0;
    var alist = document.querySelectorAll('a');
    while (i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
    }
}
function BodySetcolor(color){
    document.querySelector('body').style.color = color;
}
function BodySetbackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
}
function nightdayhandler(self){
    var target = document.querySelector('body');
        if(this.value === 'dark'){
            BodySetbackgroundColor('black');
            BodySetcolor('white');
            LinksSetcolor('powderblue');
            this.value = 'bright';
        }
        else {
            BodySetbackgroundColor('white');
            BodySetcolor('black');
            LinksSetcolor('blue');
            this.value = 'dark';
        }
}