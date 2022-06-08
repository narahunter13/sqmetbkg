<div>
    <form wire:submit.prevent="simpan">
        <table class="w-full">
            <colgroup>
                <col span="1" class="w-1/2">
                <col span="1" class="w-1/2">
            </colgroup>
            <thead>
                <tr>
                    <th class="text-left p-2">Batas Bawah</th>
                    <th class="text-left p-2">Batas Atas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2">
                        <x-jet-input class="w-full" type="number" wire:model="batasBawahError" />
                    </td>
                    <td class="p-2">
                        <x-jet-input class="w-full" type="number" wire:model="batasAtasError" />
                    </td>
                </tr>
            </tbody>
        </table>
        <x-jet-button class="mt-4" type="submit">Simpan</x-jet-button>
    </form>
</div>