<?php

if (!function_exists('active_class')) {
    function active_class(array $path, string $active = 'active'): string
    {
      return call_user_func_array('Request::is', $path) ? $active : '';
    }
}

