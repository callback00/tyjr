// 初始化主页数据，请根据实际情况修改
function initData() {
    $.ajax({
        type: "GET",
        url: "http://192.168.0.108:8003/data/ztjjPage.json",
        dataType: "json",
        success: function (data) {
            //初始化第一个tab的第一个页签数据
            var str = "";
            $.each(data.first_tabBar, function (index, record) {
                // 最多显示6条数据
                // 如果你有足够的时间，可以在服务器安装bable，然后使用es6的语法写下面的代码拼接即可

                if (index == 0) {
                    str += "<ul>"
                }

                // 一个页面最多只能显示15条数据
                if (index < 15) {
                    str += "<li>"
                    str += "<a href=\"" + record.url + "\">"
                    str += "<span class=\"title\">"
                    str += record.title
                    str += "</span>"
                    str += "</a>"
                    str += "<span class=\"time\">"
                    str += record.publishTime
                    str += "</span>"
                    str += "</li>"

                    if ((index + 1) % 5 == 0) {
                        str += "</ul>"
                        // 另起一个ul
                        if (index + 1 != data.first_tabBar.length && index + 1 < 15) {
                            str += "<ul>"
                        }
                    }

                    if (index + 1 == data.first_tabBar.length) {
                        if ((index + 1) % 5 != 0) {
                            str += "</ul>"
                        }
                    }
                }
            })
            $("#news").html(str);
        },
        error: function (error) {
        }
    });

}