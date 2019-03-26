const baidu = (function () {
    let $input, ulBox, box;
    return {
        init(ele) {

            $input = document.querySelector("#skey");
            $inputButton = document.querySelector("#btnHeaderSearch");
            ulBox = document.querySelector(".show");
            this.event();
        },
        event() {
            var self = this;
            $input.onfocus = function () {
                self.show();
            }
            $input.oninput = function () {
                console.log(this.value)
                if (this.value.trim() == '') {
                    self.hidden();
                } else {
                    self.getData(this.value);
                    self.show();
                }
            }
            $input.onclick = function (e) {
                e.stopPropagation();
            }
            document.onclick = function () {
                self.hidden();
            }
            $inputButton.onclick = function () {
                location.href = "html/search.html";
            }
            ulBox.onclick = function (e) {
                if (e.target.nodeName === 'LI') {
                    $input.value = e.target.innerHTML;
                }
            }
        },
        show() {
            if ($input.value.trim() != '')
                ulBox.style.display = "block"
        },
        hidden() {
            ulBox.style.display = "none"
        },
        getData(val) {
            const url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
            const data = {
                wd: val,
                cb: "baidu.insertData"
            }
            sendJsonp(url, data);
        },
        insertData(data) {
            ulBox.innerHTML = '';
            data.s.forEach(x => {
                const li = document.createElement('li');
                li.innerHTML = x;
                ulBox.appendChild(li);

            })
        }
    }
}())
baidu.init();