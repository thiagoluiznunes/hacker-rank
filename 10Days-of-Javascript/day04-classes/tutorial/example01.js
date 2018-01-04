'use strict'

function FruitClass(name, kind, color) {
    this.name = name;
    this.kind = kind;
    this.color = color;

    this.getName = () => this.name;
    this.getKind = () => this.kind;
    this.getColor = () => this.color;
}

let orange = new FruitClass('Orange', 'citric', 'orange');

console.log('Name: ', orange.getName());
console.log('Kind: ', orange.getKind());
console.log('Color: ', orange.getColor());