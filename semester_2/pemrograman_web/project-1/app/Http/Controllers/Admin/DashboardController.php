<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Checkup;
use App\Models\Patient;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $patients = Patient::get();
        $checkups = Checkup::get();

        return view('admin.pages.dashboard', compact('patients', 'checkups'));
    }
}
