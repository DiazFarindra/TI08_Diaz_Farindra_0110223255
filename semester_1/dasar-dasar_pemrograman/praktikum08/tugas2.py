def assesment(value):
    if value <= 60:
      return 'gagal'
    elif 61 <= value <= 70:
        return 'baik'
    elif 71 <= value <= 80:
        return 'sangat baik'
    elif 81 <= value <= 100:
        return 'istimewa'
    else:
        return 'oops!'

print(assesment(65))
