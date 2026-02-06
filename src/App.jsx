import { useEffect, useState } from 'react';
import SuratPernyataan from './pernyataan';
import './App.css';

function App() {
  const [dataWP, setDataWP] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    // Set data dummy untuk testing (bisa dihapus nanti)
    setDataWP({
      nama: "Ahmad Suherman",
      alamat: "Jl. Asia Afrika No. 10, Bandung",
      kontak: "08123456789",
      nopol: "D 1234 ABC",
      tglRencanaBayar: "25 Februari 2026"
    });

    // Atau jika ada id, fetch dari backend
    if (id) {
      // fetch(`api/v1/wp-data/${id}`).then(...)
    }
  }, []);

  if (!dataWP) return <div className="p-10 text-center">Memuat data...</div>;

  return <SuratPernyataan data={dataWP} />;
}

export default App;
