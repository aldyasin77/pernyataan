import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Trash2, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

const SuratPernyataan = ({ data }) => {
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();
  const save = () => {
    const imageURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    console.log("Tanda tangan disimpan:", imageURL);
    // Logika kirim ke database/backend di sini
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg border">
      {/* Header Kop Surat */}
      <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-4">
        <img src="/logo-jabar.png" alt="Logo" className="h-16" />
        <div className="text-center font-bold text-sm">
          <p>TIM PEMBINA SAMSAT</p>
          <p>PROVINSI JAWA BARAT</p>
        </div>
        <img src="/logo-samsat.png" alt="Logo" className="h-16" />
      </div>

      <h2 className="text-center font-bold underline mb-4 text-xs md:text-sm">
        SURAT PERNYATAAN PENGUASAAN KENDARAAN DAN KOMITMEN PEMBAYARAN PAJAK
      </h2>

      {/* Isi Surat Dinamis */}
      <div className="text-xs space-y-2 mb-6">
        <p>Yang bertanda tangan di bawah ini, saya:</p>
        <div className="pl-4">
          <p><strong>Nama :</strong> {data.nama}</p>
          <p><strong>Alamat :</strong> {data.alamat}</p>
          <p><strong>Nomor Kontak :</strong> {data.kontak}</p>
        </div>
        
        <p>Dengan ini menyatakan dengan sebenar-benarnya bahwa:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Saya adalah pihak yang menguasai kendaraan dengan Nopol: <strong>{data.nopol}</strong></li>
          <li>Kendaraan tersebut saat ini dikuasai dan digunakan oleh saya.</li>
          <li>Saya berkomitmen melakukan pembayaran paling lambat tanggal: <strong>{data.tglRencanaBayar}</strong></li>
        </ol>
      </div>

      {/* Area Tanda Tangan */}
      <div className="border rounded-lg p-2 bg-gray-50">
        <p className="text-[10px] text-gray-500 mb-1">Tanda tangan di bawah ini:</p>
        <div className="bg-white border-2 border-dashed border-gray-300 rounded">
          <SignatureCanvas 
            ref={sigCanvas}
            penColor='black'
            canvasProps={{width: 500, height: 200, className: 'sigCanvas w-full'}}
          />
        </div>
        
        <div className="flex justify-between mt-2 text-red-500 text-sm">
          <button onClick={clear} className="flex items-center gap-1">
            <Trash2 size={16} /> Hapus
          </button>
        </div>
      </div>

      <button 
        onClick={save}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold transition"
      >
        Simpan Pernyataan
      </button>
    </div>
  );
};

export default SuratPernyataan;