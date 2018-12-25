// ie8无getElementsByClassName
window.onload = function () {

    // 兼容ie8
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (className, element) {
            var children = (element || document).getElementsByTagName('*');
            var elements = new Array();
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var classNames = child.className.split(' ');
                for (var j = 0; j < classNames.length; j++) {
                    if (classNames[j] == className) {
                        elements.push(child);
                        break;
                    }
                }
            }
            return elements;
        };
    }
};

// 初始化主页数据
function initData() {

    // 初始化第一部分的tab内容
    $.ajax({
        type: "GET",
        url: "http://192.168.0.108:8003/data/home.json",
        dataType: "json",
        success: function (data) {
            //初始化第一个tab的第一个页签数据
            var str = "";
            $.each(data.main_news_first, function (index, record) {
                // 最多显示6条数据
                // 如果你有足够的时间，可以在服务器安装bable，然后使用es6的语法写下面的代码拼接即可
                if (index < 7) {
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
                }
            })
            $("#main-news-first").html(str);
        },
        error: function (error) {
        }
    });

    // 初始化第二部分的tab内容
    $.ajax({
        type: "GET",
        url: "http://192.168.0.108:8003/data/home_second_section_data.json",
        dataType: "json",
        success: function (data) {
            //初始化第一个tab的第一个页签数据
            var str = "";
            $.each(data.first_tabBar, function (index, record) {
                // 最多显示5条数据
                // 如果你有足够的时间，可以在服务器安装bable，然后使用es6的语法写下面的代码拼接即可
                if (index < 5) {
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
                }
            })
            $("#second-news-first").html(str);
        },
        error: function (error) {
        }
    });

    // 初始化第三部分的tab内容
    $.ajax({
        type: "GET",
        url: "http://192.168.0.108:8003/data/home_third_section_data.json",
        dataType: "json",
        success: function (data) {
            //初始化第一个tab的第一个页签数据
            var str = "";
            $.each(data.first_tabBar, function (index, record) {
                // 最多显示5条数据
                // 如果你有足够的时间，可以在服务器安装bable，然后使用es6的语法写下面的代码拼接即可
                if (index < 5) {
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
                }
            })
            $("#third-news-first").html(str);
        },
        error: function (error) {
        }
    });

    // 初始化第四部分的tab内容
    $.ajax({
        type: "GET",
        url: "http://192.168.0.108:8003/data/home_fourth_section_data.json",
        dataType: "json",
        success: function (data) {
            //初始化第一个tab的第一个页签数据
            var str = "";
            $.each(data.first_tabBar, function (index, record) {
                // 最多显示5条数据
                // 如果你有足够的时间，可以在服务器安装bable，然后使用es6的语法写下面的代码拼接即可
                if (index < 5) {
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
                }
            })
            $("#fourth-news-first").html(str);
        },
        error: function (error) {
        }
    });

}
