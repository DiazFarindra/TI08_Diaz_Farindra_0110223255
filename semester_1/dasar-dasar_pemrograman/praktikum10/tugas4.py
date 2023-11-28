
string = 'nurul fikri'
exclude = ['a', 'i', 'u', 'e', 'o', ' ']

def konsonan(data):
    new_string = ''

    for item in data:
        if item not in exclude:
          new_string += item

    return new_string

print(konsonan(string))
