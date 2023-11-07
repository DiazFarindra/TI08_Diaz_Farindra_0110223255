# foods menu
foods = {
    'nasi goreng': 15000,
    'mie goreng': 12000,
    'ayam geprek': 18000,
}

# drinks menu
drinks = {
    'aneka jus': 15000,
    'soft drink': 10000,
    'sweet ice tea': 5000,
}


def menu_order():
    name = input('masukan nama pembeli? ')
    phone = input('masukan nomor hp? ')
    menu_type = input('pesan menu apa? (makanan atau minuman): ')

    if menu_type == 'makanan':
        for item in foods.items():
            print(item)

        order = input('masukan pesanan: ')
        order_count = input('masukan jumlah pesanan: ')
        price_total = int(foods[order]) * int(order_count)

    if menu_type == 'minuman':
        for item in drinks.items():
            print(item)

        order = input('masukan pesanan: ')
        order_count = input('masukan jumlah pesanan: ')
        price_total = int(drinks[order]) * int(order_count)



    print(f'nama pembeli: {name}')
    print(f'no. hp pembeli: {phone}')
    print(f'menu yang dipesan: {menu_type}')
    print(f'jumlah pesanan: {order_count}')
    print(f'harga yang harus dibayar: {price_total}')


menu_order()
