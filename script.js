url='https://api.unsplash.com/photos/?client_id=BGO8vkQA86LQcU3BvsiGfi-dI-TqCYeQaooGsO_L5JM&page=1'
url='https://api.unsplash.com/search/photos?client_id=BGO8vkQA86LQcU3BvsiGfi-dI-TqCYeQaooGsO_L5JM&query=nature&per_page=20&page=1 '


var page =1

var form_check=document.querySelector('.Search')
form_check.addEventListener('submit',(e)=>{
    e.preventDefault()
    var parent = document.querySelector('.front_end')
    parent.innerHTML=''
    var search = document.querySelector('[placeholder="Enter what you like to see"]')
    var data = search.value 
    api(page,data)
  
})





var data = 'nature'

async function api(page_value,data){
    v= fetch(`https://api.unsplash.com/search/photos?client_id=BGO8vkQA86LQcU3BvsiGfi-dI-TqCYeQaooGsO_L5JM&query=${data}&per_page=20&page=${page_value}`)
    out1 = await v
    prom = out1.json()
    out2 = await prom
    console.log(out2.results)
    var parent = document.querySelector('.front_end')
    for(let i of out2.results){
        var image_ele=document.createElement('img')
        image_ele.setAttribute('src',i.urls.thumb)
       console.log(i.urls.thumb)
       parent.append(image_ele)
    }
     
}
 api(page,data)


 window.addEventListener('scroll',()=>{
   if((window.scrollY+window.innerHeight)>
   document.querySelector('body').offsetHeight){
          page++
          var search = document.querySelector('[placeholder="Enter what you like to see"]')
          var data = search.value 
          api(page,data)
          console.log(page)
         

   }
 })