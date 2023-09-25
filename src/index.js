console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(function(response)
{
    
    return response.json()
})
.then(function(data){
    console.log(data)
    const array=data.message
    console.log(array)
    array.forEach((image) => {
        console.log(image)
        const div=document.createElement('div')
        const img=document.createElement('img')
        const imagePlace=document.getElementById('dog-image-container')
        img.src=image
        imagePlace.append(div)
        div.append(img)
    });
})
const breedUrl = "https://dog.ceo/api/breeds/list/all"
fetch(breedUrl)
.then(function(response)
{
    return response.json()
})
.then(function(data){
    console.log(data)
    const array=Object.keys(data.message)
    console.log(array)
    array.forEach((dog) => {
        console.log(dog)
        const div=document.createElement('div')
        const p=document.createElement('p')
        const ul=document.getElementById('dog-breeds')
        p.innerText=dog
        ul.append(div)
        div.append(p)
    });
})
// object.keys gives an array of object keys and you can call for each on it