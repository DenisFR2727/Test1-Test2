function date_time()
{
        let current_datetime = new Date();
        let day = current_datetime.getDate();
        let month = current_datetime.getMonth();
        let year = current_datetime.getFullYear();
        let hours = current_datetime.getHours();
        let minutes = current_datetime.getMinutes();
    return day+"."+month+"."+year+" "+hours+":"+minutes
}
document.querySelector('.date_1').innerText = date_time()
let imgList = document.querySelector('.img_list').getElementsByTagName('img').length
document.querySelector('.img_length').innerHTML = imgList
// --------------------------------------------------------------------------------------------
 //  modal
document.querySelectorAll('.img_list img').forEach(image =>{
    image.onclick= ()=>{
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal img').src = image.getAttribute('src');
    }
    
})
document.querySelector('.modal span').onclick = ()=>{
    document.querySelector('.modal').style.display = 'none';
}
