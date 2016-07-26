//Veganator 
(function($) {
    
    var self = $.Veganator = new function(){};
    
    $.extend(self, {

        veganatorBackgrounds : [
            'https://uploaddeimagens.com.br/images/000/675/753/original/bg1.png?1469569744',
            'https://uploaddeimagens.com.br/images/000/675/755/original/bg2.png?1469569800',
        ],

        veganatorImgs : [
            'https://uploaddeimagens.com.br/images/000/675/749/original/haha_1024.jpg?1469569417',
            'https://uploaddeimagens.com.br/images/000/675/751/original/dsc_2224.jpg?1469569582',
            'https://uploaddeimagens.com.br/images/000/675/753/original/bg1.png?1469569744',
            'https://uploaddeimagens.com.br/images/000/675/755/original/bg2.png?1469569800',
            'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-9/1464705_183651885169995_1124988593_n.jpg?oh=a702784a9cdb3c5381c2a1fbfd17c451&oe=581F8B81',
            'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-9/12036517_420645584803956_180575408286167612_n.jpg?oh=3e9292e1175fd62f92a82d041103ff00&oe=58323359',
            'https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-9/12119153_427577594110755_5625714791737498639_n.jpg'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
                    var h = $(item).height();
                    var w = $(item).width();
                    
                    //If image loaded
                    if(h > 0 && w > 0)
                    {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
                    }
                    else
                    {
                        //Replace when loaded
                        $(item).load(function(){
                            //Prevent 'infinite' loop
                            if($.inArray($(item).attr('src'), lstImgs) == -1)
                            {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
                )
                .filter(function() {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
            );

            $backgroundImages.each(function(i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.veganatorImgs, 2000);
        self.handleLogo(self.veganatorBackgrounds, 2000);
    });
})(jQuery);
