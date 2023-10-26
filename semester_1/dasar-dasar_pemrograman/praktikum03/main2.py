import math

type = input('mau ngitung apaan (persegi, lingkaran, segitiga) : ')


def box(p: int, l: int):
    print(p * l)


def circle(r: int):
    print(math.floor(math.pi * r**2))

def triangle(a: int, t: int):
    print(0.5 * a * t)


match type:
    case 'persegi':
        p = int(input('panjang : '))
        l = int(input('lebar : '))
        box(p, l)
    case 'lingkaran':
        r = int(input('jari-jari : '))
        circle(r)
    case 'segitiga':
        a = int(input('alas : '))
        t = int(input('tinggi : '))
        triangle(a, t)
    case _:
        'salah milih bos!'
