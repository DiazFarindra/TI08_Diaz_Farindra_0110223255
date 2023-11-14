def kite_area(d1: int, d2: int):
    result = 0.5 * d1 * d2

    return result


def kite_circumference(a: int, b: int):
    result = 2 * (a + b)

    return result


command = ''

while command.lower() != 'no':
    what = input('ingin menghitung layang-layang (luas/keliling) : ')

    if what.lower() == 'luas':
        d1 = int(input('masukan diagonal pertama : '))
        d2 = int(input('masukan diagonal kedua : '))

        print(f'luas layang-layang : {kite_area(d1, d2)}')

    if what.lower() == 'keliling':
        a = int(input('masukan sisi atas : '))
        b = int(input('masukan sisi bawah : '))

        print(f'luas layang-layang : {kite_circumference(a, b)}')

    command = input('ingin menghitung lagi? (yes/no) : ')
