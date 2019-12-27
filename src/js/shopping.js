$(function(){
    $('.header').load('../page/public_module_top.html');
    $('.bottom').load('../page/public_module_bottom.html');

    
    $('.mainjiaj .jia').click(function(){
        sum = $('.mainjiaj input').val();
        sum++;
    })

    $('.mainjiaj .jian').click(function(){
        sum--;
    })
});