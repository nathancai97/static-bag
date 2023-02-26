class Bag {
    static maxKg = 23;
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } else if(weight > Bag.maxKg) {
            throw new Error(`Bag is too heavy!`);
        }
        this.weight = weight
    }
}

module.exports = Bag