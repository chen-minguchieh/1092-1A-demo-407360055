function goPage(index) {
    const p = document.querySelector(`#section`);
    console.log(`section`,p);
    switch (index) {
        case 1:
            p.innerHTML = `<iframe src="./w01-pokemon/pokemon.html" width="100%" height="700px" > </iframe>`;
            break;
        case 2:
            p.innerHTML = `<iframe src="./w02-imgal/imageGallery.html" width="100%" height="700px" > </iframe>`;
            break;  
        case 3:
            p.innerHTML = `<iframe src="./w05-video/div.html" width="100%" height="700px" > </iframe>`;
            break;       
    }
}

function toggle(){
    const p = document.querySelector(`#section`);
    p.classList.toggle(`invisible`);
}

function changeColor(index) {
    const p = document.querySelector("#section");
    console.log("section", p);

    switch (index) {
        case 1:
            p.style.backgroundColor = 'yellow';
            break; 
        case 2:
            p.style.backgroundColor = 'red';
            break;
        case 3:
            p.style.backgroundColor = 'blue';
      break;    
    }
}
    function colorMenu(){

        console.log(`colorMenu`,p);
        p.innerHTML=`
        <li onclick="changeColor(1)">
                    <a href="#">Link 1</a>
                </li>
                <li onclick="changeColor(2)">
                    <a href="#">Link 2</a>
                </li>
                <li onclick="changeColor(3)">
                    <a href"#">Link 3</a>
                </li>`
    
    }

function changeVideo (index) {
                const player = document.querySelector("#player");
                console.log("player",player);
                switch (index) {
                    case 1:
                        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                        break;
                    case 2:
                        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                        break;
                    case 3:
                        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                        break;
                    case 4:
                        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                        break;
                    case 5:
                        player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                        break;
                }
}

function videoMenu (index) {
        const p = document.querySelector(`aside ul`);
        console.log(`videoMenu`,p);
        p.innerHTML=`
        <li onclick="changeVideo(1)">
        <a href="#">淡江大戲 01</a>
                    </li>
        <li onclick="changeVideo(2)">
        <a href="#">淡江大戲 02</a>
                    </li>
        <li onclick="changeVideo(3)">
                        <a href="#">淡江大戲 03</a>
                    </li>
        <li onclick="changeVideo(4)">
                        <a href="#">淡江大戲 04</a>
                    </li>
        <li onclick="changeVideo(5)">
                        <a href="#">淡江大戲 05</a>
                    </li>`
}