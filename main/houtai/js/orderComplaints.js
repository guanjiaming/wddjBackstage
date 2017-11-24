(function (window) {
    $(function () {
        /*渲染数据列表*/
        getTableData(function () {
            /*编辑操作功能*/
            $('.detailBtn').click(function () {
                //获取身份证id
                var orderNum = $(this).parent().siblings('.orderNum').text();
                console.log(orderNum);
            });
        });

        //container的高度 保证100%
        var bodyH = $("body").height() - 60;
        console.log(bodyH);
        $('body>.container').css({height: bodyH});

        // 订单时间查询插件配置
        $('#searchOrderTime').datetimepicker({
            format: 'YYYY-MM-DD',
            locale: moment.locale('zh-cn')
        });

        /*搜索功能*/
        $('.search .searchBtn').click(function () {
            var searchOrderNum = $('#searchOrderNum').val();
            var searchUserNum = $('#searchUserNum').val();
            var searchOrderStatus = $('#searchOrderStatus').val();
            var searchOrderTime = $('#searchOrderTime input').val();
            console.log('searchOrderNum:  ' + searchOrderNum);
            console.log('searchUserNum:  ' + searchUserNum);
            console.log('searchOrderStatus:  ' + searchOrderStatus);
            console.log('searchOrderTime:  ' + searchOrderTime);
            //
        });
    });

    //下面两个方法：获取后台table数据并添加到dom节点
    function getTableData(callback) {
        var url = 'data/data2.json';
        $.ajax({
            type: "GET",
            url: url,
            success: function (res) {
                var datalist = res.data.list;
                //清空上次的内容
                $('.tableWrap tbody').html('');
                //获取到数组对象
                $.each(datalist, function (index, ele) {
                    //将数据添加界面
                    createTr(ele);
                });
                //请求成功之后要执行的点击操作
                if(callback) callback();
            },
            error: function (err) {
                console.log(err);
            },
        })
    }
    function createTr(item) {
        var otr = $('<tr></tr>');
        otr.html(
            '<td class="orderNum">'+ item.orderNum +'</td>' +
            '<td>'+ item.userNum +'</td>' +
            '<td>'+ item.sendAddress +'</td>' +
            '<td>'+ item.senderNamePhone +'</td>' +
            '<td>'+ item.recipientAddress +'</td>' +
            '<td>'+ item.recipientNamePhone +'</td>' +
            '<td>'+ item.productType +'</td>' +
            '<td>'+ item.reputation +'</td>' +
            '<td>'+ item.weight +'</td>' +
            '<td>'+ item.distance +'</td>' +
            '<td>'+ item.price +'</td>' +
            '<td>'+ item.discount +'</td>' +
            '<td>'+ item.addPrice +'</td>' +
            '<td>'+ item.insured +'</td>' +
            '<td>'+ item.payment +'</td>' +
            '<td>'+ item.payType +'</td>' +
            '<td>'+ item.sendTime +'</td>' +
            '<td>'+ item.pickupTime +'</td>' +
            '<td>'+ item.ordersTime +'</td>' +
            '<td>'+ item.courierNamePhone +'</td>' +
            '<td>'+ item.removeTime +'</td>' +
            '<td>'+ item.deliveryTime +'</td>' +
            '<td>'+ item.complaintTime +'</td>' +
            '<td>'+ item.complaintReason +'</td>' +
            '<td>'+ item.orderStatus +'</td>' +
            '<td>'+ item.processResult +'</td>'+
            '<td><button type="button" class="detailBtn btn btn-primary btn-xs">详情</button></td>'
        );

        //插入到dom节点
        $('.tableWrap tbody').append(otr);
    }

})(window);