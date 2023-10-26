def ideal_weight(sex: str, height: int):
    if sex == 'pria' or sex == 'p':
        differ = 0.1
    elif sex == 'wanita' or sex == 'w':
        differ = 0.15

    scale = height - 100
    percent = scale * differ
    ideal = scale - percent

    return ideal


sex = str(input('jenis kelamin kamu (pria/p) / (wanita/w) :'))

if sex != 'pria' and sex != 'p' and sex != 'wanita' and sex != 'w':
    print('format salah! ulangi kembali')
    exit()

try:
    height = int(input('tinggi badan kamu (sentimeter) :'))
except:
    print('format salah! ulangi kembali')
    exit()
    raise

print(f'berat badan idealnya adalah : {ideal_weight(sex, height)}')
