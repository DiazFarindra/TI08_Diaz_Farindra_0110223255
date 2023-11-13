def kite(d1: int, d2: int):
    result = 0.5 * d1 * d2

    return result


command = ''

while command.lower() != 'no':
    d1 = int(input('masukan diagonal pertama : '))
    d2 = int(input('masukan diagonal kedua : '))

    print(f'luas layang-layang : {kite(d1, d2)}')

    command = input('ingin menghitung lagi? (yes/no) : ')
