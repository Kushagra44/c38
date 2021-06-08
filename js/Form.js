class Form{
constructor(){
    this.input= createInput("Name")
    this.button= createButton("PLAY")
    this.greeting= createElement("h3")
}
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}
display(){
    var title=createElement("h2")
    title.html("CAR RACING GAME")
    title.position(450,100)
    
    this.input.position(530,250)
    
    this.button.position(550,300)
    
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()

        player.updateCount(playerCount)
        this.greeting.html("Hello "+player.name)
    this.greeting.position(530,270)
    })
}
}
