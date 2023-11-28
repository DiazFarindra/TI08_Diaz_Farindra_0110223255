fruits = ['pepaya', 'mangga', 'pisang', 'durian', 'jambu']

def duplicate(data):
    new_list = []

    for item in data:
        new_list.append(item)
        new_list.append(item)

    return new_list

print(duplicate(fruits))
