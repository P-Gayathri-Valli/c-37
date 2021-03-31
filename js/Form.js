class Form{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("GO");
        this.greeting=createElement('h3');
    }

    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title=createElement('h1');
        title.html("WELCOME TO OUR CAR RACING GAME");
        title.position(130,10);
        
        this.input.position(230,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value()
            playerCount+=1;
            player.index=playerCount;
            player.update(player.name);
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(230,160);
        })
       

    }
    
}