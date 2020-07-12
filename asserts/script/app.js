$(document).ready(function (e) {

    var que_num = 0;

    //输入项目框
    $('.create-pro').on('click', function () {
        $('.new-search').append('<div class="project-name"><input type="text" id="project-name-id" placeholder="请输入项目名称"><input type="button" class="make-sure" value="确认"></div>');
    });

    //创建项目
    $('.make-sure').live('click', function () {
        if ($('#project-name-id').val()) {
            $('.content-box').append('<div class="row test-project-box" id="pro-box">' +
                '<div class="row test-top">' +
                '<div class="col-xs-12 col-sm-6 col-md-6">' + $('#project-name-id').val() + '</div>' +
                '<div class="col-xs-12 col-sm-6 col-md-6 ">' +
                '<div>' +
                '<a href="#" class="createQu">创建问卷</a>' +
                '<a href="#" class="check-pro">查看</a>' +
                '<a href="#" class="edit-pro">编辑</a>' +
                '<a href="#" class="del-pro">删除</a>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>');
            $()
            
        } else {
            alert('请输入项目名称！');
        }
        $('.project-name').remove();
    });

    Date.prototype.Format = function (fmt) { //author: meizz   
        var o = {
            "M+": this.getMonth() + 1, //月份   
            "d+": this.getDate(), //日   
            "H+": this.getHours(), //小时   
            "m+": this.getMinutes(), //分   
            "s+": this.getSeconds(), //秒   
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
            "S": this.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    

    //创建问卷
    $('.createQu').live('click', function () {
        var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");
        $(this).parent().parent().parent().parent().append('<div class="row test-content">' +
            '<div class="row test-info">' +
            '<div class="col-xs-12 col-sm-4 col-md-6 ">问卷</div>' +
            '<div class="col-xs-12 col-sm-8 col-md-6 ">' +
            '<div>' +
            '<span class="iconfont">&#xe63f;未开始</span>' +
            '<span>答卷: '+ que_num++ +'</span>' +
            '<span>' + time2 + '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row test-op">' +
            '<div class="col-xs-12 col-sm-6 col-md-6">' +
            '<a href="#" class="iconfont">&#xe6f5; 设计问卷</a>' +
            '<a href="#" class="iconfont">&#xe734; 发送问卷</a>' +
            '<a href="#" class="iconfont">&#xe638; 分析&下载' +
            '<span class="triangle-op"></span>' +
            '</a>' +
            '</div>' +
            '<div class="col-xs-12 col-sm-6 col-md-6 ">' +
            '<div>' +
            '<a href="#" class="iconfont">&#xe69c; 开启</a>' +
            '<a href="#" class="iconfont">&#xe600; 预览</a>' +
            '<a href="javascript:void(0)" class="iconfont">&#xe63e; 查看</a>' +
            '<a href="#" class="iconfont">&#xe61c; 编辑</a>' +
            '<a href="javascript:void(0)" class="iconfont">&#xe609; 复制</a>' +
            '<a href="javascript:void(0)" class="iconfont del-que">&#xe614; 删除</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    });

    //删除项目
    $('.del-pro').live('click', function () {
        $(this).parent().parent().parent().parent().remove();
    });

    //删除问卷
    $('.del-que').live('click', function () {
        $(this).parent().parent().parent().parent().remove();
    })
    

});