// cookie 本身是字符串, 系统没有自带的操作cookie的方法
// cookie是会话跟踪技术, 默认浏览器关闭就过期, 也可以设置过期时间
// cookie有作用域, path设置作用路径
// cookie设置子域名, domain
// cookie存储量小, 在2kb-4kb之前, 每次发送http请求, 都会携带cookie信息
// 安全问题


var cookie = {
    set(key, value, day) {
        // 添加/修改cookie
        document.cookie = `${key}=${value}; max-age=${day*24*3600}; path=/`;
    },
    get(key) {
        // 获取cookie
        var str = document.cookie;
        // d=20; age=20; data=111
        var arr = str.split('; ');
        // ['d=20', 'age=20', 'data=111']
        var obj = {};
        arr.forEach(x => {
            var _arr = x.split('=');
            // ['d', 20]
            obj[_arr[0]] = _arr[1];
        })
        return obj[key];
    },
    delete(key) {
        // 删除cookie
        this.set(key, '', -1);
    }
}




