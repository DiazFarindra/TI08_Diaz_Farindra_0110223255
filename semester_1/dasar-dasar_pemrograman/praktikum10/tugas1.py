hasil_akhir = [
    {'nama': 'Reza', 'nilai': 70},
    {'nama': 'Ciut', 'nilai': 63},
    {'nama': 'Dian', 'nilai': 80},
    {'nama': 'Badu', 'nilai': 40}
]

def lulus_aja(data):
    new_list = []

    for item in data:
        if item['nilai'] > 65:
            new_list.append(item['nama'])

    return new_list

print(lulus_aja(hasil_akhir))

