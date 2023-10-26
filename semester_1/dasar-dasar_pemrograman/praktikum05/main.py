# soal 1
vehicle = ['B 1 RFS', 'Rubicon', '3600 cc', 'hitam']

# soal 2
vehicle = vehicle + ['1 miliar', '4']
vehicle.insert(2, 'Toyota')
vehicle.insert(3, 'SUV')
print(vehicle)
print(f'jenis kendaraan: {vehicle}')

# soal 3
pilihan = 'persegi'


match pilihan:
    case 'persegi':
        panjang = 10
        lebar = 5
        print(panjang * lebar)
    case 'lingkaran':
        jarijari = 7
        print(22/7 * jarijari**2)
    case 'segitiga':
        alas = 10
        tinggi = 5
        print(0.5 * tinggi * alas)
