from Gempa import Gempa

# header
print('lokasi\tskala\tdampak')
print('----\t----\t----')

gempa1 = Gempa('Banten', 1.2).dampak()
gempa1 = Gempa('Palu', 6.1).dampak()
gempa1 = Gempa('Cianjur', 5.6).dampak()
gempa1 = Gempa('Jaya...', 3.3).dampak()
gempa1 = Gempa('Garut', 4.0).dampak()
