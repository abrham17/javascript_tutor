const breakfastMenu = ["bread" , 'beso' , 'beso_cebto' , 'frfre' , 'shay']
const mainCourseMenu = ['beyanynet' , 'tebse' , 'gomenbedenech' , 'pasta']
const desserMenu = ['cake' , 'selata' , 'shorba' , 'ise cream']

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) =>  '<p>Item' + (index + 1) + ":" + (item) + '</p>').join(' ');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
function func(){
    let maincourseitem  = '';
    const maincourseitemforeach = mainCourseMenu.forEach((item , index)=>{
        maincourseitem += '<p>Item' + (index+1) + ":" + (item) + "</p>";
    })
    document.getElementById("maincourseMenuItems").innerHTML = maincourseitem; 
}
function func_2(){
    let dessertmenuitem = '';
    for (i = 0; i < desserMenu.length; i++){
        dessertmenuitem += '<p>Item' + (i + 1) + ':' + desserMenu[i] + "</p>";
        document.getElementById('dessertMenuItems').innerHTML= dessertmenuitem;
    }
}