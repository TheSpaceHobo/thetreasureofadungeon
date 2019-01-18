function treasureitem(id, name, price, rarity, texture){
  this.texture = texture;
   this.name = name;
   this.rarity = rarity;
   this.id = id;
   this.price = price;
   this.amount = 1;
   this.resetthesellingbutton = function(){
   this.display = "<div class=container><div class=inventoryitem id="+this.id+" title="+this.name+" ><img src="+this.texture+" width=64px class=gmi /><div class=itemtext style=font-size:10px >"+this.displayamount()+"</div></div></div>";
   // resets the display variable, to output the new display
   $("#inventoryhtml").html(''); //clears the inventory div
   alltreasure.forEach(function(item){item.addme()}) // re-adds the items to the inventory div
   alltreasure.forEach(function(item){$('#'+item.id).click(function(){item.checksell()})}) // resets the jquery click function on each of the items
   }
   this.checksell = function(){
   if(this.amount >= 1){
   this.amount -= 1;
   money += this.price;
   
   console.log("Successfully Sold "+this.name+"!")
   } else {
   console.log("Sorry, You have no "+this.name+"s; you have "+this.amount+" of these.");
   }
   }
   this.refreshsell = function(){
   $('#'+this.id).click(function(){
   this.checksell();
   });
   }
   this.displayamount = function(){
   return this.amount;
   }
   this.display = "<div class=container><div class=inventoryitem id=inventoryitem title="+this.name+" ><img src="+this.texture+" width=64px /><div class=itemtext style=font-size:10px >"+this.displayamount()+"</div></div></div>";
   this.addme = function(){$("#inventoryhtml").append(this.display)}
   this.recieve = function(){
      this.amount += 1;
      alltreasure.forEach(function(item){item.resetthesellingbutton()})
   }
   this.save = function(){
     window.localStorage.setItem(this.id,this.amount)
   }
}
var alltreasure = [
   antimatterbroadsword = new treasureitem("antikatana","Antimatter_Broadsword",700,"Legendary","Antimatter-Broadsword.gif"),
   dubloon = new treasureitem("coin","Dubloon",10,"Common","dubloon256.gif"),
   chalice = new treasureitem("goldcup","Chalice",20,"Common","chalice.gif"),
   goldbar = new treasureitem("goldbar","Bar_Of_Gold",50,"Uncommon","goldbar.gif"),
   diamond = new treasureitem("diamond","Diamond",45,"Uncommon","diamond.gif"),
   ruby = new treasureitem("ruby","Ruby",45,"Uncommon","ruby.gif"),
   emerald = new treasureitem("emerald","Emerald",45,"Uncommon","emerald.gif"),
   obsidiansphere = new treasureitem("shpereofobsidian","Obsidian_Sphere",600,"Mythical","obsidiansphere.gif"),
   eyeofoni = new treasureitem("eyeofoni","The_Eye_Of_The_Oni",600,"Mythical","eyeofoni.gif"),
   arcanecodex = new treasureitem("codex","Arcane_Codex",300,"Legendary","codex.gif"),
   durasteelkatana = new treasureitem("durasteelkatana","Durasteel_Katana",50,"Uncommon","durasteelkatana.gif"),
   argoncrystalkatana = new treasureitem("argonkatana","Argon_Crystal_Katana",200,"Very Rare","argonkatana.gif"),
   heliumcrystalkatana = new treasureitem("heliumkatana","Helium_Crystal_Katana",200,"Very Rare","heliumkatana.gif"),
   practicekatana = new treasureitem("woodkatana","Practice_Katana",10,"Common","practicekatana.gif"),
   ironkatana = new treasureitem("ironkatana","Katana",25,"Uncommon","ironkatana.gif"),
   diamondkatana = new treasureitem("diamondkatana","Diamond_Katana",200,"Very Rare","diamondkatana.gif"),
   obsidiankatana = new treasureitem("obsidiankatana","Obsidian_Katana",200,"Very Rare","obsidiankatana.gif"),
   //----------------------------------------------------------------------------------------------------------------------
   swissknife = new treasureitem("swissknife","Swiss_Army_Knife",20,"Common","Swiss-knife.gif"),
   tomahawk = new treasureitem("tomahawk","Tomahawk",40,"Common","tomahawk.gif"),
   bowieknife = new treasureitem("bowieknife","Bowie_Knife",70,"Uncommon","bowie-knife.gif"),
   crimsonkarambit = new treasureitem("crimsonkarambit","Crimson-Karambit",400,"Legendary","Crimson-karambit.gif"),
   karambit = new treasureitem("karambit","Karambit",100,"Epic","Karambit.gif"),
   combatknife = new treasureitem("combatknife","Combat_Knife",50,"Common","Combat-Knife.gif"),
   switchblade = new treasureitem("switchblade","Switchblade",50,"Common","Switchblade.gif"),
   rainbowknife = new treasureitem("rainbowknife","Oxidized_Knife",200,"Epic","Oxidized-knife.gif"),
   bootknife = new treasureitem("bootknife","Boot_Knife",90,"Common","Boot-knife.gif"),
   machete = new treasureitem("machete","Machete",50,"Common","Machete.gif"),
   throwingknife = new treasureitem("throwingknife","Throwing_Knife",5,"Common","Throwing-Knife.gif"),
   arrowheadknife = new treasureitem("arrowheadknife","Arrowhead_knife",60,"Common","Arrow-knife.gif"),
   specialknife = new treasureitem("specialknife","Scourge_Of_Titanium",450,"Legendary","Titanium-knife.gif"),
   // ----------------------------------------------------------------------------------------------------------------------
   deagle = new treasureitem("deagle","Desert_Eagle",100,"Uncommon","Deagle.gif"),
   compact = new treasureitem("compact",".45_Caliber_Compact",100,"Uncommon","45compact.gif"),
   revolver = new treasureitem("revolver","Revolver",150,"Uncommon","revolver.gif"),
   es57 = new treasureitem("es57","ES57",80,"Common","es57.gif"),
   uzi = new treasureitem("uzi","Uzi",120,"Uncommon","uzi.gif"),
   tacticalpistol  = new treasureitem("tacticalpistol",".45_Caliber_Tactical",100,"Uncommon",".gif"),
   glock = new treasureitem("glock","Glock",100,"Uncommon",".gif"),
   phaser = new treasureitem("phaser","Phaser",300,"Rare",".gif"),
   laser = new treasureitem("laser","Laser_pistol",310,"Rare",".gif"),
   taser = new treasureitem("taser","Taser",110,"Uncommon",".gif"),
   electrick = new treasureitem("electrick","Electrick",450,"Legendary",".gif"),
   handcannon = new treasureitem("handcannon","Handcannon",150,"Uncommon",".gif"),
   damagedpistol = new treasureitem("damagedpistol","Rusty_Pistol",10,"Common",".gif"),
   crapgun = new treasureitem("crapgun","Badly_Made_Gun",1,"Common",".gif"),
];
var katanacase = [
  practicekatana,
  antimatterbroadsword
]
var knifecase = [
  swissknife,
  tomahawk,
  bowieknife,
  crimsonkarambit,
  karambit,
  combatknife,
  switchblade,
  rainbowknife,
  bootknife,
  machete,
  throwingknife,
  arrowheadknife,
  specialknife
]
   alltreasure.forEach(function(item){item.addme()})
   alltreasure.forEach(function(item){$('#'+item.id).click(function(){item.checksell()})})
   alltreasure.forEach(function (item) {
     item.amount = parseInt(window.localStorage.getItem(item.id));
     item.resetthesellingbutton();
     if (window.localStorage['money'] === 'NaN'){
       money = 100;
   } else {
       money = parseInt(window.localStorage.getItem('money'));
   }
   })
   alltreasure.forEach(function(item){if(window.localStorage.getItem(item.id) === 'NaN'){item.amount = 0; item.resetthesellingbutton()}})
   if (!window.localStorage){
     money = 100;
     alltreasure.forEach(function(item){
       item.amount = 0;
       item.resetthesellingbutton()
     })
   }
   $(document).ready(function(){
     $("#save").click(function(){
         alltreasure.forEach(function(item){
           item.save(); // sets each item its own storage item and id name
           if(money == 'NaN'){
             money = 100;
           } else {
           localStorage.setItem('money',money);
           }
         })
     })
     $("#homebutton").click(function(){
       $(".inventoryitem").hide()
       $(".cases").hide()
       $(".settings").hide()
     })
     $("#settingsbutton").click(function(){
       $(".inventoryitem").hide()
       $(".cases").hide()
       $(".settings").show()
     })
     $("#inventorybutton").click(function(){
       $(".inventoryitem").show()
       $(".cases").hide()
       $(".settings").hide()
     })
     $("#casebutton").click(function(){
       $(".inventoryitem").hide()
       $(".cases").show()
       $(".settings").hide()
     })
     $("#katanacasebutton").click(function(){
       if (money >= 250){
       katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
      katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
       katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
       katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
        katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
                katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
      katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
       katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
       katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
        katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
                katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
      katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
       katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
       katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
        katanacase[(Math.floor(Math.random()*katanacase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
         money -= 250;
       $(".inventoryitem").hide()
     } else {
       console.log("Not enough money my dude, Sorry.")
     }
     })
     $("#knifecasebutton").click(function(){
       if (money >= 100){
       knifecase[(Math.floor(Math.random()*knifecase.length))].recieve(); // selects a random item from the katana case and adds it to the inventory
       money -= 100;
       $(".inventoryitem").hide()
     } else {
       console.log("Not enough money my dude, Sorry.")
     }
     })
   })
   var money;
$("#getmoneybutton").click(function(){
  money += 5;
});
$(".cases").hide()
    $(".settings").hide()
function animate(){
  requestAnimationFrame(animate);
  $("#moneydisplay").html(money);
}
animate();
