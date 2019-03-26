function sendAjax(url, options) {
    var __DEFAULT = {
        method: 'GET',
        // 约定返回的格式为json字符串
        dataType: 'json',
        data: null,
        // 传进来的值覆盖默认的值
        ...options
    }

    var xhr = new XMLHttpRequest();
    // 拼接url
    __DEFAULT.method = __DEFAULT.method.toUpperCase();
    // {uanme: 'xxx', age: 18, color: 'red'};
    // server.php +  ?uname=xxx + &age=18 + &color=red;
    if(__DEFAULT.method == 'GET') {
        for(var attr in __DEFAULT.data) {
            url += `&${attr}=${__DEFAULT.data[attr]}`;
        }
        // server.php?uname=xxx&age=18&color=red;
        if(!url.includes('?')) {
            // 没有问号的情况
            url = url.replace('&', '?');
        }
        __DEFAULT.data = null;
    } else {
        // 传输格式是json字符串
        __DEFAULT.data = JSON.stringify(__DEFAULT.data);
    }
    xhr.open(__DEFAULT.method, url, true);
    // post请求
    xhr.send(__DEFAULT.data);
    return new Promise((res, rej) =>{
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                var data = xhr.responseText;
                if(xhr.status == 200) {
                    if(__DEFAULT.dataType === 'json') {
                        data = JSON.parse(data);
                    }
                    res(data);
                } else {
                    rej(data);
                }
            }
        }
    })
}