import math


def tubes(r: int, t: int):
    l = 2 * math.pi * r * (r + t)
    k = 2 * math.pi * r

    return f'luas tabung : {l} cm \n keliling tabung : {k} cm'

try:
    r = int(input('masukan nilai radius tabung (r) centimeter :'))
    t = int(input('masukan nilai tinggi tabung (t) centimeter :'))
except:
    print('format salah! ulangi kembali')
    exit()
    raise

print(tubes(r, t))
