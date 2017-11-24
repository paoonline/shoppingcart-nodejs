module.exports =  function Cart(OldCart) {
    this.items = OldCart.items || {};
    this.totalQty = OldCart.totalQty || 0;
    this.totalPrice = OldCart.totalPrice || 0;

    this.add = function (item, id) {
        var storedItem = this.items[id];
        if(!storedItem){
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price; //storedItem.price จะไม่อิงกับ item  จะ + price ทุกครั้ง
        //storedItem.price ราคาที่ x กับ จำนวน
        //storedItem.item.price ราคาต่อชิ้น
    };

    this.generateArray = function () {
        var arr = [];
        for (var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    };
};