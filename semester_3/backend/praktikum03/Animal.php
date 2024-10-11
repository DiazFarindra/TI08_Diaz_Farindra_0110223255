<?php

class Animal {
    public function __construct(
        private string|null $file,
        private array|string|null $animals = [],
    ) {
        if (is_string($file) && file_exists($file)) {
            $file = file_get_contents($file);
            $animals = json_decode($file, true);
        }

        $this->animals = $animals;
    }

    public function index(): void
    {
        $masks = "| %-3s | %-15s |" . PHP_EOL;

        echo '-------------------------' . PHP_EOL;
        printf($masks, 'id', 'name');
        echo '-------------------------' . PHP_EOL;

        foreach ($this->animals as $animal) {
            printf($masks, $animal['id'], $animal['name']);
        }

        echo '-------------------------' . PHP_EOL;
    }

    public function store(string $value): void
    {
        if (empty($this->animals)) {
            $this->animals[] = [
                'id' => 1,
                'name' => $value,
            ];

            return;
        }

        $this->animals[] = [
            'id' => end($this->animals)['id'] + 1,
            'name' => $value,
        ];

        file_put_contents($this->file, json_encode($this->animals));
    }

    public function update(int $id, string $value): void
    {
        $animal = array_column($this->animals, 'id');

        $index = array_search($id, $animal);

        if ($index === false) {
            return;
        }

        $this->animals[$index]['name'] = $value;

        file_put_contents($this->file, json_encode($this->animals));
    }

    public function destroy(int $id): void
    {
        $animal = array_column($this->animals, 'id');

        $index = array_search($id, $animal);

        if ($index === false) {
            return;
        }

        array_splice($this->animals, $index, 1);

        file_put_contents($this->file, json_encode($this->animals));
    }
}

$data = __DIR__ . '/data.json';

$animals = new Animal($data);

echo 'get animals data:' . PHP_EOL;
$animals->index();

echo PHP_EOL;

echo 'add new animal:' . PHP_EOL;
$animals->store('horse');
$animals->index();

echo PHP_EOL;

echo 'update animal:' . PHP_EOL;
$animals->update(2, 'cow');
$animals->index();

echo PHP_EOL;

echo 'delete animal:' . PHP_EOL;
$animals->destroy(4);
$animals->index();
