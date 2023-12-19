
class Animal:
    def __init__(self, nama, makanan, hidup, berkembang_biak):
        self.nama = nama
        self.makanan = makanan
        self.hidup = hidup
        self.berkembang_biak = berkembang_biak


class Badak(Animal):
    def __init__(self, nama, makanan, hidup, berkembang_biak, cula, berat):
        super().__init__(nama, makanan, hidup, berkembang_biak)
        self.cula = cula
        self.berat = berat

    def informasi(self):
        print('nama\tmakanan\thidup\tberkembang biak\tcula\tberat')
        print(f'{self.nama}\t{self.makanan}\t{self.hidup}\t{self.berkembang_biak}\t{self.cula}\t{self.berat}')

    def ada(self):
        print('ya')


class Ikan(Animal):
    def __init__(self, nama, makanan, hidup, berkembang_biak, jenis, bernafas):
        super().__init__(nama, makanan, hidup, berkembang_biak)
        self.jenis = jenis
        self.bernafas = bernafas

    def informasi(self):
        print('nama\tmakanan\thidup\tberkembang biak\tjenis\tbernafas')
        print(f'{self.nama}\t{self.makanan}\t{self.hidup}\t{self.berkembang_biak}\t{self.jenis}\t{self.bernafas}')

    def ada(self):
        print('ya')


class Ular(Animal):
    def __init__(self, nama, makanan, hidup, berkembang_biak, berbisa, panjang):
        super().__init__(nama, makanan, hidup, berkembang_biak)
        self.berbisa = berbisa
        self.panjang = panjang

    def informasi(self):
        print('nama\tmakanan\thidup\tberkembang biak\tberbisa\tpanjang')
        print(f'{self.nama}\t{self.makanan}\t{self.hidup}\t{self.berkembang_biak}\t{self.berbisa}\t{self.panjang}')

    def ada(self):
        print('ya')


badak = Badak('agus', 'daun', 'darat', 'mamalia', 'satu', '150kg')
ikan = Ikan('amel', 'amuba', 'laut', 'mamalia', 'paus', 'insang')
ular = Ular('ian', 'ayam', 'darat', 'bertelur', 'ya', '100m')

print(badak.informasi())
print(ikan.informasi())
print(ular.informasi())
