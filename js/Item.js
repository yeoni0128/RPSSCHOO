class Item{
    constructor(){
        this.type = null
        this.positionX = 0
        this.positionY = 0
        this.side = 0
    }


    addItem() {
        var itemIndex = "Items/item" + itemNo;
    
        if (this.side === 1) {
          this.positionX = p1.x;
          this.positionY = p1.y
        } else {
          this.positionX = p2.x;
          this.positionY = p2.y
        }
  
        database.ref(itemIndex).set({
          type: this.type,
          positionX: this.positionX,
          positionY: this.positionY,
          side :this.side
        });
      }
    
}

