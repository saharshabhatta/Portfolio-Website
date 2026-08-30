<?php

test('portfolio pages can be rendered', function (string $route, string $component) {
    $this->withoutVite()
        ->get(route($route))
        ->assertSuccessful()
        ->assertSee('&quot;component&quot;:&quot;'.$component.'&quot;', false);
})->with([
    ['home', 'Home'],
    ['projects', 'Projects'],
    ['experience', 'Experience'],
    ['certificates', 'Certificates'],
    ['contact', 'Contact'],
]);
