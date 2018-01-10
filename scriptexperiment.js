
var inventory = [];
var founditem;
function treasureitem(id, name, price, rarity, texture){
  this.texture = texture;
  this.name = name;
  this.rarity = rarity;
  this.price = price;
  this.id = id;
  this.display = $("#inventoryhtml").append( "<div onClick="+this.sell+"class=tooltip title="+""+"Price:_"+this.price+"Name:_"+this.name+">"+""+"<img src="+this.texture+" width = 64/>"+"</div>");
  this.index = function(){
    return inventory.indexOf(this.display);
  }
  this.sell = function(){
    if (this.index() >  1){
      inventory.splice(this.index(), 1)
    } else {
      console.log("Sorry, This Cannot Be Sold")
    }
  }
}

var antimatterkatana = new treasureitem("antikatana","Antimatter_Katana",150,"Legendary","images/Anitmatter-Katana.gif");
var dubloon = new treasureitem("coin","Dubloon",10,"Common","images/dubloon256.gif");
var chalice = new treasureitem("goldcup","Chalice",20,"Common","images/chalice.gif");
var goldbar = new treasureitem("goldbar","Bar_Of_Gold",50,"Uncommon","images/goldbar.gif");
var diamond = new treasureitem("diamond","Diamond",45,"Uncommon","images/diamond.gif");
var ruby = new treasureitem("ruby","Ruby",45,"Uncommon","images/ruby.gif");
var emerald = new treasureitem("emerald","Emerald",45,"Uncommon","images/emerald.gif");
var obsidiansphere = new treasureitem("shpereofobsidian","Obsidian_Sphere",600,"Mythical","images/obsidiansphere.gif");
var eyeofoni = new treasureitem("eyeofoni","The_Eye_Of_The_Oni",600,"Mythical","images/eyeofoni.gif");
var arcanecodex = new treasureitem("codex","Arcane_Codex",300,"Legendary","images/codex.gif");
var durasteelkatana = new treasureitem("durasteelkatana","Durasteel_Katana",50,"Uncommon","images/durasteelkatana.gif");
var argoncrystalkatana = new treasureitem("argonkatana","Argon_Crystal_Katana",200,"Very Rare","images/argonkatana.gif");
var heliumcrystalkatana = new treasureitem("heliumkatana","Helium_Crystal_Katana",200,"Very Rare","images/heliumkatana.gif");
var practicekatana = new treasureitem("woodkatana","Practice_Katana",10,"Common","images/practicekatana.gif");
var ironkatana = new treasureitem("ironkatana","Katana",25,"Uncommon","images/ironkatana.gif");
var diamondkatana = new treasureitem("diamondkatana","Diamond_Katana",200,"Very Rare","images/diamondkatana.gif");
var obsidiankatana = new treasureitem("obsidiankatana","Obsidian_Katana",200,"Very Rare","images/obsidiankatana.gif");
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
$("#getmoneybutton").click(function(){
  money += 5;
});
$("#homebutton").click(function(){
  showhomeitems();
});
function animate(){
  requestAnimationFrame(animate);
  $("#moneydisplay").html(money);
}
animate();