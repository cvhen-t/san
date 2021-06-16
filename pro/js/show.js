function ajksfun(obj, resolve) {


    let xhr = new XMLHttpRequest();
    if (obj.type == 'GET') {
        xhr.open("GET", `${obj.url}?${obj.data}`)
        xhr.send()
    } else {

        xhr.open("POST", `${obj.url}`)
        //发送合适的请求头信息
        xhr.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
        );
        xhr.send(obj.data);
        console.log(obj.data)
    }

    xhr.onload = function () {

        resolve(xhr.responseText)


    }


}

function pajks(obj) {
    // console.log(obj);
    return pomise = new Promise(function (resolve, reject) {

        ajksfun(obj, resolve)
    })

}

async function fn() {

    let date = await pajks({
        type: 'GET',
        url: "/api",
        data: `album_id=80396405&limit=24&include_fields=top_comments%2Cis_root%2Csource_link%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Clike_id%2Csender%2Creply_count&start=48&_=1622260922875`
    })
    console.log(JSON.parse(date))
    let data = (JSON.parse(date));
    let datearr = data.data.object_list
    console.log(datearr)

    showHtml(datearr)
    console.log(2)
}



function showHtml(datearr) {


    for (let i = 0; i < datearr.length; i++) {
        // console.log(datearr[i].photo.path)	//图片路径
        const divA = $("<div class=grid__item></div>")
        const aA = $(`<a href="#"></a>`)
        const imgA = $(`<img src="${datearr[i].photo.path}"alt="Some image"  />`)
        imgA.addClass('grid__img')
        imgA.addClass('img2a')
        aA.addClass('grid__link')
        // divA.addClass('grid__item')
        divA.append(aA)
        aA.append(imgA)
        $('.namea').append(divA)
        console.log(999)
    }
}
fn()