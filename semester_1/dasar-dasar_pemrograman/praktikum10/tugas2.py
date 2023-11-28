
fruits = ['pepaya', 'mangga', 'pisang', 'durian', 'jambu']

def reverse(data):
    new_list = []

    for item in range(len(data)):
        identity = item + 1
        new_list.append(data[-(identity)])

    return new_list

print(reverse(fruits))
