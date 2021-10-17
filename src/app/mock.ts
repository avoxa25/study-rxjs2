export interface IProduct {
    name: string,
    price: number,
    image: string
}

export const productArray: IProduct[] = [
    {
        name: 'iPhone',
        price: 400,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000'
    },
    {
        name: 'Samsung',
        price: 350,
        image: 'https://hotline.ua/img/tx/260/2604053655.jpg'
    },
    {
        name: 'Xiaomi',
        price: 250,
        image: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/XiaomiMi11Ultra.jpg'
    }
]