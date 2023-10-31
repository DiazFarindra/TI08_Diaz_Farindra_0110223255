pyramids = int(input('mau berapa bro? '))

# cara 1
for i in range(pyramids):
    print('* '*i)

# cara 2
for i in range(pyramids):
    for j in range(i + 1):
        print('* ',end='')
    print()
