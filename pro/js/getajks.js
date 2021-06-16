


function ajksfun(obj,resolve) {

   
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
        // cb(xhr.responseText)

      resolve(xhr.responseText)
     

    }


}

function pajks(obj) {
    // console.log(obj);
    return pomise = new Promise(function (resolve, reject) {

        ajksfun(obj, resolve)
    })

}

// ajksfun(
//     obj = {
//         type: 'POST',
//         url: "./fengzhuan.php",
//         data: "name=cc&age=10",
//         useRes: console.log
//     }

// )
function ajksfun2(obj) {

   
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
        // console.log(obj.data)
    }

    xhr.onload = function () {
        // console.log((xhr.responseText),'213');
        // console.log(xhr.responseText)
        cb2(xhr.responseText,obj.name)

    //   console.log((xhr.responseText),'213');
     

    }


}

function ajksfun3(obj) {

   
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
        // console.log(obj.data)
    }

    xhr.onload = function () {

     

    }


}

function ajksfun4(obj) {

   
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
        // console.log(obj.data)
    }

    xhr.onload = function () {

        sessionStorage.setItem(obj.name, xhr.responseText)

    }


}
