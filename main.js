(document.onload = function(){
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    context.canvas.height = innerHeight
    context.canvas.width = innerWidth

    var routes =  new ImageArray
    var renderer = new Renderer(routes.imageRoutes)
    var randomizedArray =  renderer.RandomizeArray()
    renderer.DrawCanvas(randomizedArray, function(images){

        var offsetX = 10
        var offsetY = context.canvas.height - 10

        for (var i = 1; i < images.length+1; i++) {
            offsetY -= images[i-1].height
            context.drawImage(images[i-1], offsetX, offsetY)
            offsetX += images[i-1].width
            offsetY = context.canvas.height - 10
        }
    })

})();