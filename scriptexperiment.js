$( "div" ).click(function() {
  // `this` is the DOM element that was clicked
  var index = $( "div" ).index( this );
  $( "span" ).text( "That was div index #" + index );
});
function treasureitem(id, name, price, rarity, texture){
  this.texture = texture;
  this.name = name;
  this.rarity = rarity;
  this.price = price;
  this.id = id;
  this.findme = document.getElementById(this.id);
  this.inventoryslots = Array.prototype.slice.call(document.getElementById('inventoryhtml').children);
  this.inventoryref = document.getElementById(this.id);
  this.sell = this.inventoryslots.indexOf(this.inventoryref);
  this.sellsell = console.log(this.sell);
  this.display = "<div id="+ this.id +" onClick="+ this.sell+" "+"class=inventory"+" "+"title="+""+"Price:_"+this.price+"Name:_"+this.name+">"+""+"<img onClick="+console.log("OKI THEN")+" src="+this.texture+" width = 64/>"+"</div>";
}
var antimatterkatana = new treasureitem("antikatana","Antimatter_Katana",150,"Legendary","Anitmatter-Katana.gif");
var dubloon = new treasureitem("coin","Dubloon",10,"Common","images/dubloon256.gif");
var chalice = new treasureitem("goldcup","Chalice",20,"Common","chalice.gif");
var goldbar = new treasureitem("goldbar","Bar_Of_Gold",50,"Uncommon","goldbar.gif");
var diamond = new treasureitem("diamond","Diamond",45,"Uncommon","diamond.gif");
var ruby = new treasureitem("ruby","Ruby",45,"Uncommon","ruby.gif");
var emerald = new treasureitem("emerald","Emerald",45,"Uncommon","emerald.gif");
var obsidiansphere = new treasureitem("shpereofobsidian","Obsidian_Sphere",600,"Mythical","obsidiansphere.gif");
var eyeofoni = new treasureitem("eyeofoni","The_Eye_Of_The_Oni",600,"Mythical","eyeofoni.gif");
var arcanecodex = new treasureitem("codex","Arcane_Codex",300,"Legendary","codex.gif");
var durasteelkatana = new treasureitem("durasteelkatana","Durasteel_Katana",50,"Uncommon","durasteelkatana.gif");
var argoncrystalkatana = new treasureitem("argonkatana","Argon_Crystal_Katana",200,"Very Rare","argonkatana.gif");
var heliumcrystalkatana = new treasureitem("heliumkatana","Helium_Crystal_Katana",200,"Very Rare","heliumkatana.gif");
var practicekatana = new treasureitem("woodkatana","Practice_Katana",10,"Common","practicekatana.gif");
var ironkatana = new treasureitem("ironkatana","Katana",25,"Uncommon","ironkatana.gif");
var diamondkatana = new treasureitem("diamondkatana","Diamond_Katana",200,"Very Rare","diamondkatana.gif");
var obsidiankatana = new treasureitem("obsidiankatana","Obsidian_Katana",200,"Very Rare","obsidiankatana.gif");
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
$("#inventoryhtml").append(dubloon.display)
console.log(dubloon.sell)
var money = 100;
$("#getmoneybutton").click(function(){
  money += 5;
});
$("#homebutton").click(function(){
  showhomeitems();
});
alert( $("#inventoryhtml").index(dubloon.findme))
function animate(){
  requestAnimationFrame(animate);
  $("#moneydisplay").html(money);
}
animate();

