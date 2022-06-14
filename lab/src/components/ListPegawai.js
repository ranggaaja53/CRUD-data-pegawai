import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListPegawai = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://61601920faa03600179fb8d2.mockapi.io/pegawai"
    );
    const data = await response.json();
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    await fetch(`https://61601920faa03600179fb8d2.mockapi.io/pegawai/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetchData();
  };

  return (
    <div>
      <div className="crud shadow-lg p-5 mb-5 mt-5 bg-body rounded">
        <div class="row ">
        
          <div class=" my-3, mx-6 is-full ">
            <h1>
              <b>Data Pegawai</b>
            </h1>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Link to="/add" className="button is-primary">
              Add New
            </Link>
          </div>
        </div>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No.</th>
              <th>Nama </th>
              <th>Provinsi</th>
              <th>Kabupaten/Kota </th>
              <th>Kecamatan </th>
              <th>Kelurahan</th>
              <th>id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.nama}</td>
                <td>{product.provinsi}</td>
                <td>{product.kabupaten}</td>
                <td>{product.kecamatan}</td>
                <td>{product.kelurahan}</td>
                <td>{product.id}</td>
                <td>
                  <Link
                    to={`/edit/${product.id}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPegawai
