//登录注册
var username = document.querySelector('.textbox-username');
var password = document.querySelector('.textbox-password');
var btn = document.querySelector('.btn-login');
var h2 = document.querySelector('.Myorder2_tis');

btn.onclick = function(){
    if(password.value == '' || username.value == ''){
        h2.innerHTML = '用户名或密码不能为空';
    }
    if(password.value !== '' || username.value !== ''){
        h2.innerHTML = '';
        location.href = '../page/index.html';
    }


}
