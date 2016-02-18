;(function(){

    Array.prototype.indexOf = [].indexOf || function (item) {
        for (var i = 0; i < this.length; i++) {
            if (item == this[i]) {
                return i;
            }
        }
        return -1;
    };

    var Facebook = function(){
        this.pWidth = 720;
        this.width = 708;
        this.pHeight = 288;
        this.dots = [20, 21, 22, 23, 38, 56, 74, 92, 57, 58, 25, 26, 27, 28, 43, 61, 79, 97, 98, 99, 100, 62, 63, 59, 30, 48, 66, 84, 102, 31, 32, 103, 104, 51, 69, 87, 64];
        this.keys = [
            'TB1KIkQKXXXXXaOXpXXXXXXXXXX-450-300.png',
            'TB1T7oPKXXXXXaUXpXXXXXXXXXX-450-300.png',
            'TB104ZSKXXXXXX2XpXXXXXXXXXX-450-300.png',
            'TB1DlArKXXXXXXiaXXXXXXXXXXX-450-300.jpg',
            'TB1mMZOKXXXXXbpXpXXXXXXXXXX-450-300.png',
            'TB1kG3MKXXXXXbUXpXXXXXXXXXX-450-300.png',
            'TB1F3AxKXXXXXX2XVXXXXXXXXXX-450-300.png',
            'TB1WRIEKXXXXXaPXFXXXXXXXXXX-450-300.png',
            'TB1A0ZtKXXXXXccXVXXXXXXXXXX-450-300.png',
            'TB1RvE1KXXXXXaiXXXXXXXXXXXX-450-300.png',
            'TB15ysvKXXXXXayXVXXXXXXXXXX-450-300.png',
            'TB1aegRKXXXXXXZXpXXXXXXXXXX-450-300.png',
            'TB1HxQ0KXXXXXazXXXXXXXXXXXX-450-300.jpg',
            'TB113QCKXXXXXb2XFXXXXXXXXXX-450-300.png',
            'TB1z2ovKXXXXXaVXVXXXXXXXXXX-450-300.jpg',
            'TB1b0sRKXXXXXaAXpXXXXXXXXXX-450-300.png',
            'TB1H4.ZKXXXXXa3XXXXXXXXXXXX-450-300.png',
            'TB1_ks3KXXXXXXeXXXXXXXXXXXX-450-300.png',
            'TB11mZxKXXXXXcKXFXXXXXXXXXX-450-300.png',
            'TB1fE.FKXXXXXX7XFXXXXXXXXXX-450-300.png',
            'TB1_0ZDKXXXXXboXFXXXXXXXXXX-450-300.png',
            'TB1UxgDKXXXXXa1XFXXXXXXXXXX-450-300.png',
            'TB1JXAZKXXXXXa2XXXXXXXXXXXX-450-300.png',
            'TB16.A1KXXXXXXuXXXXXXXXXXXX-450-300.png',
            'TB1oXcPKXXXXXbmXpXXXXXXXXXX-450-300.png',
            'TB1UCkDKXXXXXbCXFXXXXXXXXXX-450-300.png',
            'TB1wC7ZKXXXXXaTXXXXXXXXXXXX-450-300.png',
            'TB1uc7KKXXXXXXbXFXXXXXXXXXX-450-300.png',
            'TB1IioWKXXXXXb_XXXXXXXXXXXX-450-300.png',
            'TB1TogpKXXXXXcZXVXXXXXXXXXX-450-300.png',
            'TB13FU0KXXXXXaLXXXXXXXXXXXX-450-300.png',
            'TB14kcOKXXXXXbtXpXXXXXXXXXX-450-300.png',
            'TB1gyw1KXXXXXXGXXXXXXXXXXXX-450-300.png',
            'TB1kbkxKXXXXXcuXFXXXXXXXXXX-450-300.png',
            'TB1x6ctKXXXXXbLXVXXXXXXXXXX-450-300.png',
            'TB16eMPKXXXXXaYXpXXXXXXXXXX-450-300.png',
            'TB1857NKXXXXXbNXpXXXXXXXXXX-450-300.png',
            'TB1YisSKXXXXXcCXXXXXXXXXXXX-450-300.png',
            'TB1WL3qKXXXXXbBXVXXXXXXXXXX-450-300.png',
            'TB1M1QVKXXXXXcIXXXXXXXXXXXX-450-300.png',
            'TB1MrcxKXXXXXXCXVXXXXXXXXXX-450-300.png',
            'TB1v2ARKXXXXXX8XpXXXXXXXXXX-450-300.png',
            'TB1U.3oKXXXXXbRaXXXXXXXXXXX-450-300.png',
            'TB1WgIwKXXXXXagXVXXXXXXXXXX-450-300.jpg',
            'TB1I8MTKXXXXXXBXpXXXXXXXXXX-450-300.png',
            'TB1DZcrKXXXXXcVXVXXXXXXXXXX-450-300.png',
            'TB1Jn7UKXXXXXcCXXXXXXXXXXXX-450-300.png',
            'TB1EEUYKXXXXXaLXXXXXXXXXXXX-450-300.png',
            'TB1qaEtKXXXXXbMXVXXXXXXXXXX-450-300.png',
            'TB1uZQtKXXXXXcnXVXXXXXXXXXX-450-300.png',
            'TB1t3oSKXXXXXX3XpXXXXXXXXXX-450-300.png',
            'TB1HZEQKXXXXXavXpXXXXXXXXXX-450-300.png',
            'TB18gwGKXXXXXawXFXXXXXXXXXX-450-300.png',
            'TB11KADKXXXXXaBXFXXXXXXXXXX-450-300.png',
            'TB1xusLKXXXXXcmXpXXXXXXXXXX-450-300.png',
            'TB1Y.ErKXXXXXcFXVXXXXXXXXXX-450-300.png',
            'TB14c3ZKXXXXXbdXXXXXXXXXXXX-450-300.png',
            'TB1o3cwKXXXXXapXVXXXXXXXXXX-450-300.png',
            'TB1XEssKXXXXXbVXVXXXXXXXXXX-450-300.png',
            'TB1eFoLKXXXXXcAXpXXXXXXXXXX-450-300.png',
            'TB1VGMPKXXXXXa.XpXXXXXXXXXX-450-300.png',
            'TB17BINKXXXXXbEXpXXXXXXXXXX-450-300.png',
            'TB12uEFKXXXXXaPXFXXXXXXXXXX-450-300.png',
            'TB1C_svKXXXXXaJXVXXXXXXXXXX-450-300.png',
            'TB1zS3JKXXXXXcVXpXXXXXXXXXX-450-300.png',
            'TB1rIsuKXXXXXa5XVXXXXXXXXXX-450-300.png',
            'TB1XiEUKXXXXXcOXXXXXXXXXXXX-450-300.png',
            'TB19hkHKXXXXXXRXFXXXXXXXXXX-450-300.png',
            'TB1i97GKXXXXXavXFXXXXXXXXXX-450-300.png',
            'TB1OhsBKXXXXXcnXFXXXXXXXXXX-450-300.png',
            'TB1NO3OKXXXXXboXpXXXXXXXXXX-450-300.png',
            'TB1gPgQKXXXXXacXpXXXXXXXXXX-450-300.png',
            'TB1p1.2KXXXXXXJXXXXXXXXXXXX-450-300.png',
            'TB1iQ.IKXXXXXXoXFXXXXXXXXXX-450-300.png',
            'TB1YscMKXXXXXcdXpXXXXXXXXXX-450-300.png',
            'TB1WM.UKXXXXXbGXXXXXXXXXXXX-450-300.png',
            'TB1V_IUKXXXXXc8XXXXXXXXXXXX-450-300.png',
            'TB1GkkCKXXXXXb5XFXXXXXXXXXX-450-300.png',
            'TB1xWZOKXXXXXbtXpXXXXXXXXXX-450-300.png',
            'TB1zo7CKXXXXXbBXFXXXXXXXXXX-450-300.png',
            'TB1RrkYKXXXXXX3XXXXXXXXXXXX-450-300.png',
            'TB1UlgDKXXXXXb8XpXXXXXXXXXX-450-300.png',
            'TB1.IMKKXXXXXcZXpXXXXXXXXXX-450-300.png',
            'TB11pIKKXXXXXbiXpXXXXXXXXXX-450-300.png',
            'TB16KgVKXXXXXcaXXXXXXXXXXXX-450-300.png',
            'TB103wwKXXXXXb1XFXXXXXXXXXX-450-300.png',
            'TB1WW.KKXXXXXcNXpXXXXXXXXXX-450-300.png',
            'TB1hLMtKXXXXXb1XVXXXXXXXXXX-450-300.png',
            'TB1UGWTJXXXXXaKaXXXXXXXXXXX-450-300.png',
            'TB1JccxKXXXXXXRXVXXXXXXXXXX-450-300.png',
            'TB1dEwtKXXXXXbxXVXXXXXXXXXX-450-300.png',
            'TB1yZczKXXXXXcZXFXXXXXXXXXX-450-300.png'
        ];
        this.$box = $("#facebook");
        this.init();
    };

    Facebook.prototype.getFaces = function(){
        var len = this.dots.length, ret = [];
        while(len--) {
            var rand = Math.floor(Math.random() * this.keys.length);
            ret.push("http://img.alicdn.com/tps/" + this.keys[rand]);
            this.keys.splice(rand, 1);
        }
        return ret;
    }

    Facebook.prototype.init = function(){
        var self = this;
        self.$box
            .css({
                width: self.width,
                background: "none"
            })
            .append(new Array(18 * 7 + 1).join("<span><img src><i></i></span>"));

        this.bind();
        this.run();

    };

    Facebook.prototype.bind = function(){
        var self = this;

        $(window).on("resize", function(){
            var rate = self.$box.parent().width() / self.pWidth;
            self.$box.css({
                "transform": "scale(" + rate +")",
                "-ms-transform": "scale(" + rate +")",
                "-moz-transform": "scale(" + rate +")",
                "-webkit-transform": "scale(" + rate +")",
                "margin-bottom": self.pHeight * (rate - 1)
            });
        }).trigger("resize");

        // GET `FED` Dot
        // self.$box.find("span").on("click", function(){
        //   var index = $(this).index();
        //   $(this).toggleClass("facebook_on");
        //   if(self.dots.indexOf(index) > -1) {
        //     console.log('1');
        //     self.dots.splice(self.dots.indexOf(index), 1);
        //   } else {
        //     self.dots.push(index);
        //   }
        // });
    };

    Facebook.prototype.run = function(){
        var faces = this.getFaces();
        var $spans = this.$box.find("span");
        var resortDots = [];
        var isMobile = /android|iphone/i.test(navigator.appVersion);
        while(this.dots.length) {
            var rand = Math.floor(Math.random() * this.dots.length);
            resortDots.push(this.dots[rand]);
            this.dots.splice(rand, 1);
        }
        $.each(resortDots, function(index, item){
            var img = faces[index];
            var $span = $($spans.get(item));
            setTimeout(function(){
                $span.css({ backgroundColor: "#ff5f3e"});
            }, index * 30);
            setTimeout(function(){
                $span
                    .css({ backgroundColor: "#FFF" })
                    .find("img")
                    .attr("src", img + (isMobile ? "_40x40.jpg" : "_80x80.jpg"))
                    .fadeIn();
            },(resortDots.length * 2 - index) * 30);
        });

        setTimeout(function(){
            var rand = Math.floor(Math.random() * resortDots.length);
            console.log(rand, $($spans[resortDots[rand]]));
            $($spans[resortDots[rand]]).addClass("facebook_you");
        }, (resortDots.length * 2 + 1) * 30);
    };

    new Facebook();
})();