def convert_celcius_to_fahrenheit(celcius: int):
    result = (9/5 * celcius) + 32

    return result


try:
    celcius = int(input('convert celcius ke fahrenheit :'))
except:
    print('format salah! ulangi kembali')
    exit()
    raise

print(f'C = {celcius} F = {convert_celcius_to_fahrenheit(celcius)}')
