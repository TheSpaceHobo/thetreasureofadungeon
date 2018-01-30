var inventory = [];
var founditem;
function treasureitem(id, name, price, rarity, texture){
  this.texture = texture;
  this.name = name;
  this.rarity = rarity;
  this.price = price;
  this.id = id;
  this.display = "<p onClick="+this.sell+">" + "<img src="+this.texture+" width = 64/>" +"Name: "+ this.name + ", Value: "+ this.price +", Rarity: "+this.rarity+ "</p>"+"<br />";
  this.index = function(){
    return inventory.indexOf(this.display);
  }
  this.sell = function(){
    if (this.index() > -1){
      inventory.splice(this.index(), 1)
    } else {
      console.log("Sorry, This Cannot Be Sold")
    }
  }
  this.inventorydisplay = function(){
    document.write(this.display)
  }
}

var antimatterkatana = new treasureitem("antikatana", "Antimatter Katana",150,"Legendary","images/Anitmatter-Katana.gif");
var dubloon = new treasureitem("coin","Dubloon",10,"Common","images/dubloon256.gif");
var chalice = new treasureitem("goldcup","Chalice",20,"Common","images/chalice.gif");
var goldbar = new treasureitem("goldbar","Bar Of Gold",50,"Uncommon","images/goldbar.gif");
var diamond = new treasureitem("diamond","Diamond",45,"Uncommon","images/diamond.gif");
var ruby = new treasureitem("ruby","Ruby",45,"Uncommon","images/ruby.gif");
var emerald = new treasureitem("emerald","Emerald",45,"Uncommon","images/emerald.gif");
var obsidiansphere = new treasureitem("shpereofobsidian","Obsidian Sphere",600,"Mythical","images/obsidiansphere.gif");
var eyeofoni = new treasureitem("eyeofoni","The Eye Of The Oni",600,"Mythical","images/eyeofoni.gif");
var arcanecodex = new treasureitem("codex","Arcane Codex",300,"Legendary","images/codex.gif");
var durasteelkatana = new treasureitem("durasteelkatana","Durasteel Katana",50,"Uncommon","images/durasteelkatana.gif");
var argoncrystalkatana = new treasureitem("argonkatana","Argon Crystal Katana",200,"Very Rare","images/argonkatana.gif");
var heliumcrystalkatana = new treasureitem("heliumkatana","Helium Crystal Katana",200,"Very Rare","images/heliumkatana.gif");
var practicekatana = new treasureitem("woodkatana","Practice Katana",10,"Common","images/practicekatana.gif");
var ironkatana = new treasureitem("ironkatana","Katana",25,"Uncommon","images/ironkatana.gif");
var diamondkatana = new treasureitem("diamondkatana","Diamond Katana",200,"Very Rare","images/diamondkatana.gif");
var obsidiankatana = new treasureitem("obsidiankatana","Obsidian Katana",200,"Very Rare","images/obsidiankatana.gif");
function inventorycreate(display){
  document.getElementById("inventoryhtml").innerHTML = document.getElementById("inventoryhtml").innerHTML + this.display;
}
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
var money = 100;
function give(){
  inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
	inventory.push(alltreasure[Math.floor(Math.random()*alltreasure.length)+1].display);
  }
inventory.push(dubloon.display);
$("#getmoneybutton").click(function(){
  money += 5;
});
$("#homebutton").click(function(){
  showhomeitems();
});
function animate(){
  requestAnimationFrame(animate);
  $("#inventoryhtml").html("")
  $("#moneydisplay").html(money);
  $("#inventoryhtml").html(inventory)
}
animate();
