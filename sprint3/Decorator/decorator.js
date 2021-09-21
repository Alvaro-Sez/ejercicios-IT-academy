const conversions = require('./currency_conversions.json')

products=[
  {product:'coche',price:'10000',moneda:'cad'},
  {product:'skate',price:'5600',moneda:'jpy'},
  {product:'jamon',price:'125',moneda:'gbp'},
  {product:'thermomix',price:'10000',moneda:'cny'},
  {product:'movil',price:'200',moneda:'usd'},
  {product:'avion',price:'385000',moneda:'chf'},
  ]

class Product {
  constructor(nombre, price, moneda){
    this.nombre = nombre
    this.price = price
    this.moneda = moneda.toUpperCase()
  }
  getCantidad (){
    console.log(`son ${this.price} ${this.nombre}`)
  }
}

/* Decorator que implementa una funcion para que automaticamente se pueda
   retornar el precio en euros del producto */

class ConvertProduct extends Product{
constructor(nombre,price,moneda){
  super(nombre,price,moneda)
}
getInEur(){
  let value
  let key = Object.entries(conversions)
  if(this.moneda == 'EUR'){
  console.log(` ${value}`);
  }else{
  key.forEach(el=>{
      if(el[0].slice(0,3) == this.moneda){
      value = ( el[1] * this.price)
      }
    })
  }
  console.log(`\neste ${this.nombre} vale ${this.price} ${this.moneda} que son: ${value.toFixed(2)} EUR`);
  }
}





function calculatePrices(productos){
  return products.map(el=>{
    let prod = new ConvertProduct(el.product,el.price,el.moneda)
    prod.getInEur()
  })
}

calculatePrices(products)