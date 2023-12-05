
def triangle(base: int, height: int, s1: int, s2: int, s3: int):
    area = (base * height) / 2
    around = s1 + s2 + s3

    return f'luas segitiga : {area} \n keliling segitiga : {around}'


def square(side: int):
    area = side * side
    around = side * 4

    return f'luas persegi : {area} \n keliling persegi : {around}'


def long_square(height: int, width: int):
    area = height * width
    around = (height * 2) + (width * 2)

    return f'luas persegi panjang : {area} \n keliling persegi panjang : {around}'


def rhombus(d1: int, d2: int, s: int):
    area = (d1 * d2) / 2
    around = s * 4

    return f'luas belah ketupat : {area} \n keliling belah ketupat : {around}'


def parallelogram(s1: int, s2: int, height: int):
    area = s2 * height
    around = 2 * (s1 + s2)

    return f'luas jajar genjang : {area} \n keliling jajar genjang : {around}'
