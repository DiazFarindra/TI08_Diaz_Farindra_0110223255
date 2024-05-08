<?php

namespace Config;

use PDO;

class Connection
{
    private static $env = parse_ini_file(__DIR__.'/../.env');

    protected static function make(): PDO
    {
        [$host, $database, $user, $password] = [
            'host' => self::$env['DATABASE_HOST'],
            'database' => self::$env['DATABASE_NAME'],
            'user' => self::$env['DATABASE_USER'],
            'password' => self::$env['DATABASE_PASSWORD'],
        ];

        $dsn = "mysql:host=$host;dbname=$database;charset=utf8mb4";

        $config = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ];

        try {
            return new PDO($dsn, $user, $password, $config);
        } catch (\PDOException $e) {
            echo $e->getMessage();

            die;
        }
    }
}
