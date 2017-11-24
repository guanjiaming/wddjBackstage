(function (window) {
    $(function () {
        /*渲染数据列表*/
        getTableData(function () {
            /*点击照片查看大图*/
            $('.idPhoto').click(function () {
                //  alert($(this).attr('src'));
                $('#idPhoto .modal-body').html('');
                var bigimg = $('<div></div>');
                bigimg.html(
                    '<img style="width:860px" src="' + $(this).attr('src') + '">'
                );
                $('#idPhoto .modal-body').append(bigimg);
            });

            /*编辑操作功能---通过、拒绝*/
            $('.agree').click(function () {
                //获取身份证id
                var id = $(this).parent().siblings('.Id').text();
                console.log(id);
            });
            $('.refuse').click(function () {
                //获取身份证id
                var id = $(this).parent().siblings('.Id').text();
                console.log(id);
            })
        });


        //container的高度问题
        var bodyH = $("body").height() - 60;
        console.log(bodyH);
        $('body>.container').css({height: bodyH});

        /*搜索功能*/
        $('.search .searchBtn').click(function () {
            var searchNum = $('#Num').val();
            var searchPhone = $('#phone').val();
            var searchName = $('#name').val();
            var searchID = $('#searchID').val();
            console.log('searchNum:  ' + searchNum);
            console.log('searchPhone:  ' + searchPhone);
            console.log('searchName:  ' + searchName);
            console.log('searchID:  ' + searchID);

        });

    });

    function getTableData(callback) {
        var url = 'data/data1.json';
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
    function createTr(ele) {
        var otr = $('<tr></tr>');
        var oBtn;
        if(ele.certificationStatus == '待审核'){
            oBtn = '<button type="button" class="agree btn btn-success btn-xs">通过</button><button type="button" class="refuse btn btn-danger btn-xs">拒绝</button>'
        }else{
            oBtn = ''
        }
        otr.html(
            '<td>'+ ele.num +'</td>' +
            '<td>'+ ele.phone +'</td>' +
            '<td>'+ ele.certificationTime +'</td>' +
            '<td>'+ ele.name +'</td>' +
            '<td class="Id">'+ele.userId+'</td>' +
            '<td>'+ ele.place +'</td>' +
            '<td>' + '<img class="idPhoto" src="'+ ele.frontalPhoto +'" alt="正面照" data-toggle="modal" data-target="#idPhoto">' + '</td>' +
            '<td>' + '<img class="idPhoto" src="'+ele.backPhoto+'" alt="正面照" data-toggle="modal" data-target="#idPhoto">' + '</td>' +
            '<td>' + '<img class="idPhoto" src="'+ ele.handheldPhoto +'" alt="正面照" data-toggle="modal" data-target="#idPhoto">' + '</td>' +
            '<td>'+ ele.certificationStatus +'</td>' +
            '<td>' +oBtn+
            '</td>'
        );

        //插入到dom节点
        $('.tableWrap tbody').append(otr);
    }
})(window);