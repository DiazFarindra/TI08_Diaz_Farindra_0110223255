
class Gempa:
    lokasi: str = ''
    skala: float = 0

    def __init__(self, lokasi: str, skala: float) -> None:
        self.lokasi = lokasi
        self.skala = skala

    def dampak(self) -> str:
        if self.skala < 2:
            dampak = 'tidak terasa'

            print(f'{self.lokasi}\t{self.skala}\t{dampak}')

        if 2 <= self.skala < 4:
            dampak = 'bangunan retak-retak'

            print(f'{self.lokasi}\t{self.skala}\t{dampak}')

        if 4 <= self.skala < 6:
            dampak = 'bangunan roboh'

            print(f'{self.lokasi}\t{self.skala}\t{dampak}')

        if self.skala >= 6:
            dampak = 'bangunan roboh dan berpotensi sunami'

            print(f'{self.lokasi}\t{self.skala}\t{dampak}')

        print('----\t----\t----')
