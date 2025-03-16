class Processor extends EventEmitter {
    constructor() {
    super()
    this.stock = StockList
    }
    placeOrder (payload) {
    this.emit('PROCESSING_STARTED', payload.orderNumber);
    const items = payload .lineitems;
    if (item && item.length > 0) {
    for (const item of items) {
    const {itemId, quantity} = item;
    const isItemNotAvailable = this.validateItemInStock(itemId, quantity);
    if(isItemNotAvailable) {
    this.emit('PROCESSING_FAILED',
    {orderNumber: payload.orderNumber,
    reason: 'LINEITEMS_EMPTY',
    itemId: itemId
    })
    }
    } else {
    this.emit('PROCESSING_FAILED', {
        orderNumber: payload.orderNumber,
        reason: 'LINEITEMS EMPTY'
    })
    }
    validateItemInStock (itemId, quantity){
        const stock = this.stock.find(i => (i.id itemId && i.stock >= quantity));
        if(!stock) {
        return ({ itemId, quantity })
        }
        return null;
        }
    }
        I
        module.exports = Processor;