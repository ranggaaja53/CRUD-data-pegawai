import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddPegawai = () => {
    const [nama, setNama ]= useState('');
    const [provinsi, setProvinsi] = useState('');
    const [kabupaten, setKabupaten] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [kelurahan, setKelurahan] = useState('');
    const [id, setId] = useState('');
    const history = useHistory();

    const saveProduct = async(e) => {  
        e.preventDefault();
        const product = { nama, provinsi, kabupaten, kecamatan, kelurahan, id  };
        await fetch('https://61601920faa03600179fb8d2.mockapi.io/pegawai',{
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        history.push("/");
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
            <button class="delete"></button>
            <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                    <input className="input" value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Nama" />
                </div>
                </div>

                <div className="field">
                <label className="label">Provinsi</label>
                <div className="control">
                    <input className="input" value={provinsi} onChange={(e) => setProvinsi(e.target.value)} type="text" placeholder="Provinsi" />
                </div>
                </div>

                <div className="field">
                <label className="label">Kabupaten</label>
                <div className="control">
                    <input className="input" value={kabupaten} onChange={(e) => setKabupaten(e.target.value)} type="text" placeholder="Kabupaten" />
                </div>
                </div>

                <div className="field">
                <label className="label">Kecamatan</label>
                <div className="control">
                    <input className="input" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} type="text" placeholder="Kecamatan" />
                </div>
                </div>

                <div className="field">
                <label className="label">Kelurahan</label>
                <div className="control">
                    <input className="input" value={kelurahan} onChange={(e) => setKelurahan(e.target.value)} type="text" placeholder="Kelurahan" />
                </div>
                </div>

                <div className="field">
                <label className="label">ID</label>
                <div className="control">
                    <input className="input" value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder="Id" />
                </div>
                </div>
        
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Save</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default AddPegawai
