// async function fn(data1, name) {

//     let date = await pajks({
//         type: 'GET',
//         url: "/api",
//         data: data1
//     })

//     let data = (JSON.parse(date));
//     let next_start = data.data.next_start
//     let datearr = data.data.object_list


//     // console.log(next_start,'next_start');
//     showHtml(datearr, name, next_start)

// }




// fn(`album_id=80396405&limit=24&include_fields=top_comments%2Cis_root%2Csource_link%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Clike_id%2Csender%2Creply_count&start=24&_=1622948279033`, 'a')

// let dat

ajksfun2({
    type: 'GET',
    url: "/aqyapi",
    data: 'channel_id=2&data_type=1&mode=24&page_id=2&ret_num=48&session=f7ad986eaafbf0a852ebaf82fdb88396&three_category_id=24063;must',
    name: 'a'
})


function cb2(data, type) {
    // console.log( JSON.parse(data).data.list,'ss');

    // let listdate = JSON.parse(data)


    dataarr2 = JSON.parse(data).data.list



    // for (let i = 0; i < dataarr2.length; i++) {

    //     //    console.log(dataarr2[i].imageUrl) 


    // }
    // sessionStorage.setItem('datalist', JSON.stringify(data))
    

    showHtml(dataarr2, type)



}


// console.log(dat,'eqweqwewqewqeqwewqeqwe')
function showHtml(datearr, name, next_start) {


    for (let i = 0; i < datearr.length; i++) {

        // console.log(datearr[i].people.main_charactor,i)
        let zhu = datearr[i].people.main_charactor
        let  biao = datearr[i].focus

        let Namepian = datearr[i].albumName
        // console.log(biao)
        // console.log(zhu)
        const mvname = $(`<span id="mvname">${Namepian?Namepian:biao}</span>`)
        const mvdata = $(
            `<div id="mvdata">
                <span>${biao?biao :'暂无简介'}</span>
                <ul id="mvul">
                    <li>主演：${zhu?zhu[0].name:'暂无'}</li>
                    <li>上映时间：${datearr[i].period}</li>
                    <li>类型：${datearr[i].categories[0]}</li>
                    <li>简介：${datearr[i].description}</li>
                </ul>
            </div>`)

        const divA = $(`<div class=grid__item ></div>`)
        const aA = $(`<a href="${datearr[i].playUrl}"></a>`)
        const imgA = $(`<img src="${datearr[i].imageUrl}"alt="Some image"  />`)
        imgA.addClass('grid__img')

        imgA.addClass('img2a')
        aA.addClass('grid__link')
        // divA.addClass('grid__item')
        divA.append(aA)
        divA.append(mvname)
        divA.append(mvdata)
        aA.append(imgA)

        mvdata.css({
            'position': 'absolute',
            'top': '150px',
            'right': '-160px'

        })
        // let datalist = JSON.parse(sessionStorage.getItem('datalist'))
        divA.mouseenter(function () {
            mvdata.css('display', 'block')
        })
        divA.mouseleave(function () {
                mvdata.css('display', 'none')
            }


        )

        if (name == 'b') {
            $('.nameb').append(divA)
            $('.btn1').attr('next_start', next_start)
        }
        if (name == 'a') {
            $('.namea').append(divA)
            $('.btn0').attr('next_start', next_start)
        }

        if (name == 'c') {
            $('.namec').append(divA)
        }
        if (name == 'd') {
            $('.named').append(divA)
        }
        if (name == 'e') {
            $('.namee').append(divA)
        }
        if (name == 'f') {
            $('.namef').append(divA)
        }
        if (name == 'g') {
            $('.nameg').append(divA)
        }
        if (name == 'h') {
            $('.nameh').append(divA)
        }
        if (name == 'i') {
            $('.namei').append(divA)
        }

        $('.img2a').on('click', function () {
            window.location.href = 'https://www.mgtv.com/'

        })




    }
    var script1 = document.createElement('script');
    script1.src = 'js/imagesloaded.pkgd.min.js'; //填自己的js路径
    $('body').append(script1);


    var script2 = document.createElement('script');
    script2.src = 'js/masonry.pkgd.min.js'; //填自己的js路径
    $('body').append(script2);

    var script3 = document.createElement('script');
    script3.src = 'js/anime.min.js'; //填自己的js路径
    $('body').append(script3);


    var script4 = document.createElement('script');
    script4.src = 'js/main.js'; //填自己的js路径
    $('body').append(script1).append(script2).append(script3).append(script4);

    if (window.inits) {

        if (name == 'a') {
            window.inits(0)
        }
        if (name == 'b') {
            window.inits(1)
        }
        if (name == 'c') {
            window.inits(2)
        }
        if (name == 'd') {
            window.inits(3)
        }
        if (name == 'e') {
            window.inits(4)
        }
        if (name == 'f') {
            window.inits(5)
        }
        if (name == 'g') {
            window.inits(6)
        }
        if (name == 'h') {
            window.inits(7)
        }
        if (name == 'i') {
            window.inits(8)
        }
    }


}