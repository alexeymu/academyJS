function HashStorage() {
    this.storage = {};
    this.addValue = function(key, value) {
        this.storage[key] = value;
    };
    this.getValue = function(key) {
        return this.storage[key];
    };
    this.deleteValue = function(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        } else {
            return false;
        }
    };
    this.getKeys = function() {
        return Object.keys(this.storage);
    }
}
var drinkStorage = new HashStorage;

function addValue() {
    var drinkName = prompt("Введите название напитка", " ");
    var alco = confirm("Напиток алкогольный?");
    if (alco) {
        alco = "да";
    } else {
        alco = "нет";
    }
    var recipe = prompt("Введите рецепт напитка", " ");
    drinkStorage.addValue(drinkName, { a: alco, r: recipe });
}

function getValue() {
    var drinkName = prompt("Введите название напитка", " ");
    var info = drinkStorage.getValue(drinkName);
    if (info) {
        alert("Название напитка: " + drinkName + "\n\r " + "Алкогольный: " + info.a + '\n\r ' +
            "Рецепт приготовления: " + info.r);
    } else {
        alert("Напиток не найден!");
    }
}

function deleteValue() {
    var drinkName = prompt("Введите название напитка", " ");
    var del = drinkStorage.deleteValue(drinkName);
    if (del) {
        alert("Информация о напитке " + "'" + drinkName + "'" + " удалена!");
    } else {
        alert("Напиток " + "'" + drinkName + "'" + " в списке отсутствует!")
    }
}

function getKeys() {
    var drinks = drinkStorage.getKeys();
    if (drinks.length > 0) {
        alert(drinks);
    } else {
        alert("Список пуст!")
    }
}