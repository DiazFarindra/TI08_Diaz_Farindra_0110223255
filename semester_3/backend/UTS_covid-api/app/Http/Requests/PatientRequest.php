<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'status_id' => ['required', 'integer', 'exists:statuses,id'],
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'regex:/62\d{9,15}$/'],
            'address' => ['required', 'string', 'max:255'],
            'checkin_at' => ['required', 'date', 'date_format:Y-m-d H:i:s'],
            'checkout_at' => ['required', 'date', 'date_format:Y-m-d H:i:s'],
        ];
    }
}
