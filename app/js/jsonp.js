function sendJsonp(url, data){
    const $script =document.createElement('script');
    for(let attr in data) {
        url += `&${attr}=${data[attr]}`;
    }
    url += '&_=' + Date.now();
    if(!url.includes('?'))
        url = url.replace('&','?');
        
        $script.src = url;
        document.body.appendChild($script);
}