<?php

use Illuminate\Support\Facades\Route;
use Spear\NovaOrderField\Http\OrderFieldRequestHandler;

Route::post('{resource}', OrderFieldRequestHandler::class);