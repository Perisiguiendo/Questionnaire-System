//项目对象
var Project = {
    pro_num: 0, //项目数量
    que_num: 0, //问卷数量
    ocreatePro: document.getElementsByClassName('create-pro')[0], //创建项目按钮
    ocontentBox: document.getElementsByClassName('content-box')[0],
    oinputProname: document.getElementById('project-name-id'), //项目名称
    oinputProbox: document.getElementsByClassName('project-name')[0], //项目名称输入框出现
    omakeSure: document.getElementsByClassName('make-sure')[0],


    proBox_content: function () {
        return '<div class="row test-top">' +
            '<div class="col-xs-12 col-sm-6 col-md-6 project" id="pro-id' + this.pro_num + '">' +
            '</div>' +
            '<div class="col-xs-12 col-sm-6 col-md-6 ">' +
            '<div>' +
            '<a class="createQu">创建问卷</a>' +
            '<a class="check-pro">查看</a>' +
            '<a class="edit-pro">编辑</a>' +
            '<a class="del-pro">删除</a>' +
            '</div>' +
            '</div>';
    },

    que_content: function () {
        return '<div class="row test-info">' +
            '<div class="col-xs-12 col-sm-4 col-md-6 ">测试问卷三</div>' +
            '<div class="col-xs-12 col-sm-8 col-md-6 ">' +
            '<div>' +
            '<span class="iconfont">&#xe63f;未开始</span>' +
            '<span>答卷: 0</span>' +
            '<span>2018-08-21 09:49:09</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row test-op">' +
            '<div class="col-xs-12 col-sm-6 col-md-6 ">' +
            '<a href="#" class="iconfont">&#xe6f5; 设计问卷</a>' +
            '<a href="#" class="iconfont">&#xe734; 发送问卷</a>' +
            '<a href="#" class="iconfont">&#xe638; 分析&下载' +
            '<span class="triangle-op"></span>' +
            // '<div>' +
            // '<a href="#">分析</a>' +
            // '<a href="#">下载</a>' +
            // '</div> ' +
            '</a>' +
            '</div>' +
            '<div class="col-xs-12 col-sm-6 col-md-6 ">' +
            '<div>' +
            '<a class="iconfont">&#xe69c; 开启</a>' +
            '<a class="iconfont">&#xe600; 预览</a>' +
            '<a class="iconfont">&#xe63e; 查看</a>' +
            '<a class="iconfont">&#xe61c; 编辑</a>' +
            '<a class="iconfont">&#xe609; 复制</a>' +
            '<a class="iconfont">&#xe614; 删除</a>' +
            '</div>' +
            '</div>' +
            '</div>';
    },

    createPro_onclick: function () {
        var div = document.createElement('div');
        div.className = "row test-project-box";
        div.id = 'pro-box' + this.pro_num;

        div.innerHTML = this.proBox_content();
        this.ocontentBox.appendChild(div);
        this.pro_num++;
    },

    showInput: function () {
        this.oinputProbox.style.display = 'flex';
    },

    hidInput: function () {
        this.oinputProbox.style.display = 'none';
        this.oinputProname.value = '';
    },

}

//项目事件
Project.ocreatePro.onclick = function () {
    let temp = 'pro-id' + Project.pro_num; //项目id
    let num = 0;
    Project.showInput(); //显示项目名称输入框
    Project.omakeSure.onclick = function () {
        if (Project.oinputProname.value) { //项目输入框不为空时
            Project.createPro_onclick(); //创建新项目
            var pro_n = document.getElementById(temp); //找到该项目
            pro_n.innerHTML = Project.oinputProname.value.trim(); //命名
            Project.hidInput(); //项目名称输入框隐藏

            var oprojectList = document.getElementsByClassName('test-project-box'); //所有的项目集合
            console.log(oprojectList);
            for (let i = 0; i < Project.pro_num; i++) {
                var creQue = oprojectList[i].getElementsByClassName('createQu')[0]; //创建问卷
                // var viewQue = oprojectList[i].getElementsByClassName('check-pro')[0];
                // var editQue = oprojectList[i].getElementsByClassName('edit-pro')[0];
                var delPro = oprojectList[i].getElementsByClassName('del-pro')[0]; //删除项目

                creQue.onclick = function () {
                    var div = document.createElement('div');
                    div.className = 'row test-content';
                    div.innerHTML = Project.que_content();
                    oprojectList[i].appendChild(div);
                    Project.que_num++;
                }

                delPro.onclick = function () {
                    Project.ocontentBox.removeChild(oprojectList[i]);
                    num++;

                    // Project.pro_num--;
                }
            }

        } else {
            alert("请输入项目名称!");
        }

    };
    // console.log(editObj);
}