function toChinese(num) {
    switch (num) {
        case 0:
            return '星期日';
        case 1:
            return '星期一';
        case 2:
            return '星期二';
        case 3:
            return '星期三';
        case 4:
            return '星期四';
        case 5:
            return '星期五';
        case 6:
            return '星期六';
    }
}

// 获取当前中文日期
function getChineseData() {
    var aDate = new Date();
    var str = '' + aDate.getFullYear() + '年' + (aDate.getMonth() + 1) + '月' + aDate.getDate() + '日' + toChinese(aDate.getDay());

    return str
}

// 跳转页面
function gotoNewUrl() {
    var msg = "您访问的链接即将离开\'广西壮族自治区退役军人事务厅\' \n\n请确认是否离开?";
    if (confirm(msg) == true) {
        return true;
    } else {
        return false;
    }
}