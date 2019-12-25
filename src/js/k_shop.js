$(function () {

    // 加载数据
    $.ajax({
        url: '../../data/k_shop.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (jsonArr) {
            var results = '';
            $.each(jsonArr, function (index, item) {
                results += `<li class="k_item code=${item.code}">
                    <div class="k_hoto">
                        <div class="k_ren">
                            <img src="../image/" alt="">
                        </div>
                        <a href="javascript:">
                            <img src="${item.urlImg}" alt="" class="k_proImg">
                        </a>
                    </div>
                    <div class="k_proCon">
                        <div class="k_box">
                            <div class="k_boxFo">
                                <p class="k_t">
                                    <a href="javascript:">${item.name}</a>
                                </p>
                                <p class="k_m">
                                    会员价：￥${item.price}
                                    <img src="" alt="">
                                </p>
                                <p>
                                    已售出：${item.sold}
                                    <img src="../image/k_100000117.jpg" alt="" class="k_mido"> 0条
                                </p>
                            </div>
                        </div>
                    </div>
                </li>`;

            });
            $('.k_oV').html(results);
        }
    });

});