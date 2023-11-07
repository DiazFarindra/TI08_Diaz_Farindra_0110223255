
# data fuel
fuel = {
    'pertalite': {
        'pricePerLiter': 10000,
        'mileageInKM': 12,
    },
    'pertamax': {
        'pricePerLiter': 14000,
        'mileageInKM': 13,
    },
    'pertamax turbo': {
        'pricePerLiter': 17000,
        'mileageInKM': 13.5,
    }
}

# data city distance
cityDistanceInKM = {
    'jakarta': 20,
    'bekasi': 35.7,
    'depok': 5,
    'tangerang': 99,
    'bogor': 120.6
}


def gatau_mau_namain_apaan():
    vehicle = input('jenis kendaraan? (mobil, motor): ')
    fuel_type = input(f'jenis bensin? ({", ".join(list(fuel.keys()))}): ')
    city = input(f'kota yang dituju? ({", ".join(list(cityDistanceInKM.keys()))}): ')

    used_fuel = round(cityDistanceInKM[city] / fuel[fuel_type]['mileageInKM'], 2)
    total_fuel_price = used_fuel * fuel[fuel_type]['pricePerLiter']

    print(f'jenis kendaraan: {vehicle}')
    print(f'jenis bensin: {fuel_type}')
    print(f'kota yang dituju: {city}')
    print(f'pemakaian bensin: {used_fuel}')
    print(f'total harga dari bensin: {total_fuel_price}')


gatau_mau_namain_apaan()
