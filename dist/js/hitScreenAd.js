
    $(document).ready(function () {
        //遮罩层
        var tipOverlay = $("#overlay");
        if (tipOverlay.length> 0) {
            $("span.screenAdClose", tipOverlay).click(function () { closeTipOverlay(); });
            window.setTimeout(function () { closeTipOverlay(); }, 10000);
        }

        var setting = { closeTipOverlay: false };
        var closeTipOverlay = function () {
            tipOverlay.fadeOut();
            //-------vjia浮窗
            if (setting.closeTipOverlay == false && VANCL.www.VjiaFloatad != undefined) {
                setting.closeTipOverlay = true;
                VANCL.www.VjiaFloatad.init();
            }
        }
    });
