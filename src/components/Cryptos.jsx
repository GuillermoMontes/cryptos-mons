import axios from "axios";
import { useEffect, useState } from "react"


const Cryptos = () => {
    const [busqueda, setBusqueda] = useState("");
    const [dataCryptos, setDataCryptos] = useState([]);

    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"

    useEffect(() =>{
        const fetchCryptos = async ()=>{
            try{
                const response = await axios.get(URL)
                //console.log(response.data)
                setDataCryptos(response.data)
            }catch{
                console.error("Algo salio mal",error)
            }
        }

        fetchCryptos()
    },[])

    const buscador = (e)=>{
        setBusqueda(e.target.value)
    }

    const resultados = !busqueda ? dataCryptos : dataCryptos.filter((crypto) => crypto.name.toLowerCase().includes(busqueda.toLocaleLowerCase())) 

  return (
    <>  
        <div className="">

        <input value={busqueda} onChange={buscador} type='text' placeholder='Buscar Crypto...' className='form-control' />

        <table className='table table-dark table-hover mt-3'>
            <thead>
                <tr>
                    <th>Ran</th>
                    <th>Nombre</th>
                    <th>Sim</th>
                    <th>Precio</th>
                    <th>P 24hs</th>
                </tr>
            </thead>
            <tbody className="">
                {resultados.map(crypto=> (
                    <tr key={crypto.id}>
                        <td>#{crypto.market_cap_rank}</td>
                        <td>{<img src={crypto.image} className="img-tamaño m-1"/>}{crypto.name}</td>
                        <td>{crypto.symbol.toUpperCase()}</td>
                        <td>{crypto.current_price.toFixed(2)}</td>
                        <td>
                            {crypto.price_change_percentage_24h < 0 ?
                            <span className="badge bg-danger">{crypto.price_change_percentage_24h}</span> : 
                            <span className="badge bg-success">{crypto.price_change_percentage_24h}</span>
                            }
                        </td>

                        
                    </tr>
                ))}
            </tbody>


        </table>
        </div>
    </>

  )
}

export default Cryptos