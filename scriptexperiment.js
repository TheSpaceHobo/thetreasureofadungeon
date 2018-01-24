function treasureitem(id, name, price, rarity, texture){
  this.texture = texture;
   this.name = name;
   this.rarity = rarity;
   this.id = id;
   this.price = price;
   this.amount = 1;
   this.checksell = function(){
   if(this.amount >= 1){
   this.amount -= 1;
   money += this.price;
   console.log("Successfully Sold!")
   } else {
   console.log("Sorry, You have no "+this.name+"s, you have "+this.amount+" of these.");
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
  this.display = "<div class=container><div class="+this.id+" id="+this.id+" ><img src="+this.texture+" width=64px /><div class=itemtext style=font-size:10px >"+this.displayamount()+"</div></div></div>";
  this.addme = $("#inventoryhtml").append(this.display)
}
var antimatterkatana = new treasureitem("antikatana","Antimatter Katana",150,"Legendary","Anitmatter-Katana.gif");
var dubloon = new treasureitem("coin","Dubloon",10,"Common","dubloon256.gif");
var chalice = new treasureitem("goldcup","Chalice",20,"Common","chalice.gif");
var goldbar = new treasureitem("goldbar","Bar Of Gold",50,"Uncommon","goldbar.gif");
var diamond = new treasureitem("diamond","Diamond",45,"Uncommon","diamond.gif");
var ruby = new treasureitem("ruby","Ruby",45,"Uncommon","ruby.gif");
var emerald = new treasureitem("emerald","Emerald",45,"Uncommon","emerald.gif");
var obsidiansphere = new treasureitem("shpereofobsidian","Obsidian Sphere",600,"Mythical","obsidiansphere.gif");
var eyeofoni = new treasureitem("eyeofoni","The Eye Of The Oni",600,"Mythical","eyeofoni.gif");
var arcanecodex = new treasureitem("codex","Arcane Codex",300,"Legendary","codex.gif");
var durasteelkatana = new treasureitem("durasteelkatana","Durasteel Katana",50,"Uncommon","durasteelkatana.gif");
var argoncrystalkatana = new treasureitem("argonkatana","Argon Crystal Katana",200,"Very Rare","argonkatana.gif");
var heliumcrystalkatana = new treasureitem("heliumkatana","Helium Crystal Katana",200,"Very Rare","heliumkatana.gif");
var practicekatana = new treasureitem("woodkatana","Practice Katana",10,"Common","practicekatana.gif");
var ironkatana = new treasureitem("ironkatana","Katana",25,"Uncommon","ironkatana.gif");
var diamondkatana = new treasureitem("diamondkatana","Diamond Katana",200,"Very Rare","diamondkatana.gif");
var obsidiankatana = new treasureitem("obsidiankatana","Obsidian Katana",200,"Very Rare","obsidiankatana.gif");
var alltreasure = [
  antimatterkatana,
  dubloon,
  chalice,
  goldbar,
  diamond,
  ruby,
  emerald,
  obsidiansphere,
  eyeofoni,
  arcanecodex,
  durasteelkatana,
  argoncrystalkatana,
  heliumcrystalkatana,
  practicekatana,
  ironkatana,
  diamondkatana,
  obsidiankatana
];
alltreasure.forEach(function(item){
  $('#'+item.id).click(function(){item.checksell()})
})
ruby.amount = 1;
$("#get").click(function(){
  dubloon.amount += 1;
})
var money = 100;
$("#getmoneybutton").click(function(){
  money += 5;
});
function animate(){
  requestAnimationFrame(animate);
  $("#moneydisplay").html(money);
}
animate();
