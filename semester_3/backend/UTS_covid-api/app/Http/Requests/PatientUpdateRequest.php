<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PatientUpdateRequest extends FormRequest
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
            'status_id' => ['sometimes', 'integer', 'exists:statuses,id'],
            'name' => ['sometimes', 'string', 'max:255'],
            'phone' => ['sometimes', 'string', 'max:255'],
            'address' => ['sometimes', 'string', 'max:65000'],
            'checkin_at' => ['sometimes', 'date', 'date_format:Y-m-d H:i:s'],
            'checkout_at' => ['sometimes', 'date', 'date_format:Y-m-d H:i:s'],
        ];
    }
}
