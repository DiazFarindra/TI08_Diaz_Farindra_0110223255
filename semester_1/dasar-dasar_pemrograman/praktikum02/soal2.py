def compare(number1: int, number2: int):
    if number1 == number2:
        return f'angka {number1} sama dengan angka {number2}'

    if number1 > number2:
        return f'angka {number1} lebi besar dari angka {number2}'

    if number1 < number2:
        return f'angka {number1} lebih kecil dari angka {number2}'

number1 = int(input('masukan angka pertama : '))
number2 = int(input('masukan angka kedua : '))

print(compare(number1, number2))
