<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class AuthController extends Controller
{
	public function register()
	{
		return view('register');
	}
		
	public function welcome(Request $request)
	{
		$data = [
			'firstName' => $request->input('first-name'),
			'lastName' => $request->input('last-name'),
		];

		return view('welcome', $data);
	}
}
