function btnshijan(el, url, type) {
  
   
    $(`${el}`).on("click", function (e) {
        console.log(el,'sff');

        ajksfun2({
            type: 'GET',
            url: "/aqyapi",
            data: url,
            name:type
        })
    
        
    })



  

    // let listdate = JSON.parse(data)


    // dataarr2 = listdate.data.rec_child.list
}



function getScrollTop() {
    var scroll = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scroll = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scroll = document.body.scrollTop;
    }
    return scroll;
}