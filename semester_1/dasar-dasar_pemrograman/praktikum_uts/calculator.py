def calculator(input1: int, input2: int, operator: str):
    result = ''

    match operator:
        case 'tambah':
            result = input1 + input2
        case 'kurang':
            result = input1 - input2
        case 'bagi':
            result = input1 / input2
        case 'kali':
            result = input1 * input2
        case 'pangkat':
            result = input1 ** input2
        case _:
            result = 'opps!'

    return result


command = ''

while command.lower() != 'no':
    input1 = int(input('masukan angka pertama : '))
    input2 = int(input('masukan angka kedua : '))
    operator = input('masukan tipe perhitungan (tambah, kurang, bagi, kali, pangkat) : ')

    print(f'hasil : {calculator(input1, input2, operator)}')

    command = input('ingin menghitung lagi? (yes/no) : ')
