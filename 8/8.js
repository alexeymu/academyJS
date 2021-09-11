/* 1. Объявить класс под названием “Laptop”

2. Класс “Laptop”. У каждого нового ноутбука есть “название”, “модель”, ”серийный номер” “год изготовления”,
 “размер ОЗУ”, “размер ПЗУ”, “масса”. Учтите, что сейчас ноутбуки выпускаются без дисководов, и также присутствует вебкамера.
  Есть метод который выводит количество «ОЗУ и ПЗУ». Есть метод, который выводит название и модель.

3. Класс “Ultrabook”. Есть свойства: “название”, “модель ”, “ серийный номер ”, “ год изготовления ”, “размер ОЗУ”, “размер ПЗУ”.
 Учтите, что сейчас ультрабуки выпускаются без дисководов и есть вебкамера. Есть метод который выводит данные о названии, весе и год изготовления. 
 Есть метод который выводит количество «размер ОЗУ и размер ПЗУ»

 */


function Laptop(name, model, serialNumber, year, sizeO, sizeP, weight, dwd, web) {
    this.name = name;
    this.model = model;
    this.serialNumber = serialNumber;
    this.year = year;
    this.sizeO = sizeO;
    this.sizeP = sizeP;
    this.weight = weight;
    this.dwd = dwd;
    this.web = web;

}
Laptop.prototype.getSum = function() {
    return this.sizeO + ', ' + this.sizeP;
}
Laptop.prototype.getNameModel = function() {
    return this.name + ', ' + this.model;
}


function Ultrabook(name, model, serialNumber, year, sizeO, sizeP, weight, dwd, web) {
    Laptop.call(this, name, model, serialNumber, year, sizeO, sizeP, weight, dwd, web);

}

Ultrabook.prototype = Object.create(Laptop.prototype);

Ultrabook.prototype.getData = function() {
    return this.name + ', ' + this.weight + ', ' + this.year;
}

var laptop = new Laptop('Lenovo', 'Air', 002011, 2019, 2400, 1299, '1 кг', 'dwd - нет', 'web - есть')
var ultrabook = new Ultrabook('Asus', 'osAir', 0032131, 2009, 2600, 1400, '2 кг', 'dwd - нет', 'web - есть ');

console.log(laptop.getNameModel());
console.log(laptop.getSum());

console.log(ultrabook.getNameModel());
console.log(ultrabook.getData());