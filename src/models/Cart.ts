class Cart{
    id
    orders: Order[];

    addProductToCart (product: Product,quantite:number = 1 ) {
        let orderLine = this.orders.find((order)=> (order.product.id === product.id) )
        if (orderLine !== null){
            orderLine.quantity = orderLine.quantity + quantite;
        }else{
            this.orders =  [...this.orders, { product, quantity: 1 }]
        }
    };
}