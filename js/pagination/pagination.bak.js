! function (window) {
    'use strict';

    var flag = -1; //一般第一次初始化,分页插件不会请求ajax,所以作为判断是否第一次进入页面的标志

    function page(opt) {
        if (!opt.id)
            return false;
        var oDiv = document.getElementById(opt.id);
        var nowPage = opt.nowPage || 1;
        var allPage = opt.allPage || 5;
        var callBack = opt.callBack || function () { };

        if (allPage <= 1) { //如果页数不到2个,则不需要显示分页
            return;
        }

        if (nowPage === 1) { //如果当前页是第一页,则上一页创建不可点击的i标签
            var oi = document.createElement('div');
            oi.innerHTML = '上一页';
            oi.className = "pagination-pre" + " disabled"
            oDiv.appendChild(oi);

        } else { //如果当前页是不是第一页,则上一页创建可点击的a标签
            oA = document.createElement('div');
            oA.href = '#' + (nowPage - 1);
            oA.innerHTML = '上一页';
            oA.className = "pagination-pre"
            oA.flag = 1; //标志,这个不需要onmouseout事件
            oDiv.appendChild(oA);
        }



        if (allPage <= 9) { //如果小等于于9页
            for (var i = 1; i <= allPage; i++) {
                var oA = '';
                if (nowPage == i) { //设置当前页标签和样式
                    oA = document.createElement('i');
                    oA.innerHTML = i;
                    oA.className = "page current"
                } else { //设置其它点击页标签和样式
                    oA = document.createElement('a');
                    oA.href = '#' + i;
                    oA.innerHTML = i;
                }
                oDiv.appendChild(oA);
            }
        } else { //如果所有页大于9页,就会显示省略号...


            if (nowPage - 1 <= 4) { //如果当前页小于6

                var prevPage = ! function () { //生成前8页
                    for (var i = 1; i <= 8; i++) {
                        var oA = '';
                        if (nowPage == i) { //设置当前页标签和样式
                            oA = document.createElement('i');
                            oA.innerHTML = i;
                            oA.className = "page current"
                        } else { //设置其它点击页标签和样式
                            oA = document.createElement('a');
                            oA.href = '#' + i;
                            oA.innerHTML = i;
                        }
                        oDiv.appendChild(oA);

                    }
                }();
                var morePage = ~ function () { //创建...更多
                    var oi = document.createElement('i');
                    oi.innerHTML = '…';
                    oi.className = "page ellipsis"
                    oDiv.appendChild(oi);
                }();

                var lastPage = + function () { //生成最后一页
                    oA = document.createElement('a');
                    oA.href = '#' + allPage;
                    oA.innerHTML = allPage;
                    oDiv.appendChild(oA);

                }();



            } else { //如果所有页数大于9页并且当前页码大于6,则第一页后面会显示...省略号

                var firstPage = - function () {
                    oA = document.createElement('a');
                    oA.href = '#' + 1;
                    oA.innerHTML = 1;
                    oDiv.appendChild(oA);
                }();

                var morePrevPage = ~ function () { //创建...更多
                    var oi = document.createElement('i');
                    oi.innerHTML = '…';
                    oi.className = "page ellipsis"
                    oDiv.appendChild(oi);
                }();


                var centerPage = ! function () { //创建中间的7页
                    if (allPage - nowPage < 5) { //如果总页数减去当前页数小于5,则不显示...省略号
                        for (var i = 1; i <= 8; i++) { //all:14 now:11
                            var oA = '';
                            if (allPage - 8 + i === nowPage) {
                                oA = document.createElement('i');
                                oA.innerHTML = nowPage;
                                oA.className = "page current"

                            } else {
                                oA = document.createElement('a');
                                oA.href = '#' + (allPage + i - 8);
                                oA.innerHTML = allPage + i - 8;
                                oDiv.appendChild(oA);
                            }
                            oDiv.appendChild(oA);

                        }


                    }


                    if (allPage - nowPage >= 5) { //如果总页数减去当前页数大于5,则可以显示中间的6页
                        for (var i = 0; i <= 6; i++) {
                            var oA = '';
                            if (i == 3) { //设置当前页标签和样式
                                oA = document.createElement('i');
                                oA.innerHTML = nowPage;
                                oA.className = "page current"
                            } else { //设置其它点击页标签和样式
                                oA = document.createElement('a');
                                oA.href = '#' + (nowPage + (i - 3));
                                oA.innerHTML = nowPage + (i - 3);
                            }
                            oDiv.appendChild(oA);

                        }
                        var moreNextPage = ~ function () { //创建...更多
                            var oi = document.createElement('i');
                            oi.innerHTML = '…';
                            oi.className = "page ellipsis"
                            oDiv.appendChild(oi);
                        }();

                    }

                }();


                var lastPage = + function () { //生成最后一页
                    if (allPage - nowPage >= 5) { //必须最后所有页数减去当前页大于5才有效果
                        oA = document.createElement('a');
                        oA.href = '#' + allPage;
                        oA.innerHTML = allPage;
                        oDiv.appendChild(oA);
                    }


                }();
            }

        }


        if (nowPage === allPage) { //如果当前页是最后一页
            var oi = document.createElement('div');
            oi.innerHTML = '下一页';
            oi.className = "pagination-next" + " disabled"
            oDiv.appendChild(oi);

        } else {
            oA = document.createElement('div');
            oA.href = '#' + (nowPage + 1);
            oA.innerHTML = '下一页';
            oA.className = "pagination-next"
            oA.flag = 2; //标志,这个不需要onmouseout事件
            oDiv.appendChild(oA);
        }

        // 添加总页数描述
        var totalDesc_div = document.createElement('div');
        totalDesc_div.innerHTML = '共' + opt.allPage + '页';
        totalDesc_div.className = "pagination-desc"
        oDiv.appendChild(totalDesc_div);


        flag++;
        if (flag) {
            callBack(nowPage, allPage);
        }


        var aA = oDiv.getElementsByTagName('a');
        for (var i = 0; i < aA.length; i++) {
            aA[i].onclick = function () {
                var nowPage = parseInt(this.getAttribute('href').substring(1));
                oDiv.innerHTML = '';
                page({

                    id: opt.id,
                    nowPage: nowPage,
                    allPage: allPage,
                    callBack: callBack
                });

                return false;
            }
        }


    }
    window.page = page;



}(window);




page({
    id: 'pageslice',
    nowPage: 1,
    allPage: 10,
    callBack: function (now, all, num) {
        var pageIndex = (now - 1) * num;
    }

});