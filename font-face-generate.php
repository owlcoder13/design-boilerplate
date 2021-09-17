<?php

foreach (scandir('./src/fonts') as $f) {
    if ($f[0] == '.') continue;

    list($fontName, $type) = explode('-', $f);

    $weightMap = [
        'bold' => 'bold',
        'black' => 900,
        'medium' => 'bolder',
        'regular' => 'normal',
        'light' => 300,
        'thin' => 100,
    ];

    $type = strtolower($type);
    $weight = 'normal';
    foreach ($weightMap as $key => $value) {
        if (strpos($type, $key) !== false) {
            $weight = $value;
            break;
        }
    }
    $fontStyle = strpos($type, 'italic') !== false ? 'italic' : 'normal';

    $str = <<<TEXT
@font-face {
    font-family: '$fontName';
    src: url('../fonts/{$f}') format('truetype');
    font-weight: {$weight};
    font-style: {$fontStyle};
}
TEXT;

    echo $str . "\n";


}