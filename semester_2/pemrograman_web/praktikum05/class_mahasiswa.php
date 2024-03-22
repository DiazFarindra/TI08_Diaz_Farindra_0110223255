<?php

class Mahasiswa {
    function __construct(
        public int $nim,
        public string $prodi,
        public int $nilai
    ) {}

    public function getNilai(): array
    {
        $data = [];

        foreach ($this->handleNilai() as $handleNilai) {
            if ($this->nilai >= $handleNilai['snilai'] && $this->nilai <= $handleNilai['enilai']) {
                $data['hasil'] = $handleNilai['hasil'];
                $data['grade'] = $handleNilai['grade'];
            }
        }

        return $data;
    }

    private function handleNilai(): array
    {
        return [
            [
                'snilai' => 0,
                'enilai' => 35,
                'hasil' => 'E',
                'grade' => 'tidak lulus',
            ],
            [
                'snilai' => 36,
                'enilai' => 55,
                'hasil' => 'D',
                'grade' => 'tidak lulus',
            ],
            [
                'snilai' => 56,
                'enilai' => 69,
                'hasil' => 'C',
                'grade' => 'lulus',
            ],
            [
                'snilai' => 70,
                'enilai' => 84,
                'hasil' => 'B',
                'grade' => 'lulus',
            ],
            [
                'snilai' => 85,
                'enilai' => 100,
                'hasil' => 'A',
                'grade' => 'lulus',
            ],
        ];
    }

    public static function prodi() : array
    {
        return [
            'sistem_informasi',
            'teknik_informatika',
            'bisnis_digital',
        ];
    }
}
