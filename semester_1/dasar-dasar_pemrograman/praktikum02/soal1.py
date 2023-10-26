def usia(age: int):
    if age < 18:
      return 'anak-anak'

    if age >= 18 and age <= 65:
        return 'dewasa'

    if age > 65:
        return 'lanjut usia'

age = int(input('umur : '))
print(usia(age))
