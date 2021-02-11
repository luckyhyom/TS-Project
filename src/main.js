const menus = document.querySelector('.menus')
const inputWindow = document.querySelector('.inputWindow')
const inputCloseBtn = document.querySelector('.close-input')
const addBtn = document.querySelector('.addBtn')
const titleInput = document.querySelector('.title-input > input')
const URLInput = document.querySelector('.URL-input > input')
const items = document.querySelector('.items')

function listForm(title,url) {

    const needed = url.lastIndexOf('=')
    const needed2 = url.substring(needed+1)
    console.log(needed2)

    const html = `<li class="item">
    <div class="itemL">
        <iframe width="100%" height="200px" src="https://www.youtube.com/embed/${needed2}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="itemR">
        <div class="title">
            ${title}
        </div>
        <div class="contents">
            <span class="content">
                굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿굿
            </span>
            <div class="closeBox">
                <button class="closeBtn"></button>
            </div>
            
        </div>
    </div>
</li>`

return html
}


// Input Window Open and Close
menus.addEventListener('click',(e)=>{
    const target = e.target
    const menu = target.value
    if(!menu){
        return
    }

    inputWindow.style.display = 'block'
})

inputCloseBtn.addEventListener('click',()=>{
    inputWindow.style.display = 'none'
})

// Upload Content
addBtn.addEventListener('click',(e)=>{
    // 원래는 어느 메뉴의 버튼인지 확인해서 처리해야함. 일단 인풋 하나로 재활용

    const title = e.target.parentNode.childNodes[5].childNodes[2].value
    const url = e.target.parentNode.childNodes[7].childNodes[2].value
    items.innerHTML += listForm(title,url)
})
