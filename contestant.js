class Player {
    constructor(){
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = "contestant" + contestantCount;
      database.ref(playerIndex).set({
        name:this.name,
        //distance:this.distance,
      });
    }
  
    static getcontestantInfo(){
       var contestantInfoRef=database.ref("contestant");
       contestantInfoRef.on("value",(data)=>{
         allcontestant=data.val();
       })
    }
  
  }