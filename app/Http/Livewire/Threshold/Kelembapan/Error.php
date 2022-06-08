<?php

namespace App\Http\Livewire\Threshold\Kelembapan;

use Exception;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class Error extends Component
{
    public $batasAtasError;
    public $batasBawahError;

    public function  mount()
    {
        $data = DB::table('threshold_error')
            ->where('data', '=', 'kelembapan')
            ->first();
        
        $this->batasBawahError = $data->batas_bawah_error;
        $this->batasAtasError = $data->batas_atas_error;
    }

    public function simpan()
    {
        try {
            DB::table('threshold_error')
                ->where('data', 'kelembapan')
                ->update([
                    'batas_bawah_error' => $this->batasBawahError,
                    'batas_atas_error' => $this->batasAtasError
                ]);
            $this->dispatchBrowserEvent('berhasil-menyimpan');
        } catch (Exception $e) {
            $this->dispatchBrowserEvent('gagal-menyimpan');
        }
    }

    public function render()
    {
        return view('livewire.threshold.kelembapan.error');
    }
}
