import shapes
import calculator


print('----------segitiga----------')
base = int(input('masukan alas : '))
height = int(input('masukan tinggi : '))

s1 = int(input('masukan sisi ke-1 : '))
s2 = int(input('masukan sisi ke-2 : '))
s3 = int(input('masukan sisi ke-3 : '))

print(shapes.triangle(base, height, s1, s2, s3))


print('----------persegi----------')
side = int(input('masukan sisi : '))

print(shapes.square(side))


print('----------persegi panjang----------')
height = int(input('masukan tinggi : '))
width = int(input('masukan lebar : '))

print(shapes.long_square(height, width))


print('----------belah ketupat----------')
d1 = int(input('masukan diagonal-1 : '))
d2 = int(input('masukan diagonal-2 : '))
s = int(input('masukan sisi : '))

print(shapes.rhombus(d1, d2, s))


print('----------jajar genjang----------')
s1 = int(input('masukan sisi-1 : '))
s2 = int(input('masukan sisi-2 : '))
height = int(input('masukan tinggi : '))

print(shapes.parallelogram(s1, s2, height))




text1 = 'masukan angka pertama : '
text2 = 'masukan angka kedua : '
text3 = 'masukan angka : '

print('----------pertambahan----------')
number1 = int(input(text1))
number2 = int(input(text2))

print(calculator.add(number1, number2))


print('----------pengurangan----------')
number1 = int(input(text1))
number2 = int(input(text2))

print(calculator.reduction(number1, number2))


print('----------perpangkatan----------')
number1 = int(input(text1))
number2 = int(input(text2))

print(calculator.power(number1, number2))


print('----------perkalian----------')
number1 = int(input(text1))
number2 = int(input(text2))

print(calculator.multiply(number1, number2))


print('----------perkalian----------')
number1 = int(input(text1))
number2 = int(input(text2))

print(calculator.divide(number1, number2))


print('----------log----------')
number = int(input(text3))

print(calculator.log(number)

)
print('----------log----------')
number = int(input(text3))

print(calculator.sqrt(number)

)
print('----------log----------')
number = int(input(text3))

print(calculator.sin(number)

)
print('----------log----------')
number = int(input(text3))

print(calculator.cos(number)

)
print('----------log----------')
number = int(input(text3))

print(calculator.tan(number)
)
