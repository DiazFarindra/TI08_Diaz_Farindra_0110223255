count = 0
result = 0
for index in range(1, 20, 2):
    count = index
    result += index
    print(f'{count} + ', end='')

print(f'= {result}')
