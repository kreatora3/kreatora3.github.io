var ImageArray = function(){
    this.imageRoutes = ['images/1.jpg',
        'images/house_1.png',
        'images/house_2.png',
        'images/house_3.png']
}

ImageArray.prototype.addImageRoute = function(img){
    this.imageRoutes.push(img)
}