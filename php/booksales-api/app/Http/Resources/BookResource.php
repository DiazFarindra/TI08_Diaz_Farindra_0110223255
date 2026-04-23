<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'price' => $this->price,
            'stock' => $this->stock,
            'cover_photo' => $this->cover_photo,
            'author' => new AuthorResource($this->whenLoaded('author')),
            'genre' => new GenreResource($this->whenLoaded('genre')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
