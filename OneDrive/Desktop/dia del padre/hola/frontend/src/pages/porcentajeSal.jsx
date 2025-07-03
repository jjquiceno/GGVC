import { useState } from 'react'

import { Header } from '../components/header.jsx' 
import { Anterior } from '../components/Menuh.jsx'
import { TablaSal, TablaAbortos } from '../components/Tablas.jsx'
import './porcentajeSal.css'

function PorcentajeSal() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='sal-page'>
                <div>
                    <Header 
                        nav={<Anterior ruta={"/ganado"}/>} 
                        text="Porcentaje de Sal" 
                        img={"/img/tresVacas.jpg"}
                    />
                </div>
                
                <div className='sal-container'>
                    <div>
                        <TablaSal
                            salIdAnimal="0021"
                            salNomAnimal="Lola"
                            pesok="250"
                            salper="6"
                        />
                        <TablaSal
                            salIdAnimal="0021"
                            salNomAnimal="Lola"
                            pesok="250"
                            salper="6"
                        />
                        <TablaSal
                            salIdAnimal="0021"
                            salNomAnimal="Lola"
                            pesok="250"
                            salper="6"
                        />
                        <TablaSal
                            salIdAnimal="0021"
                            salNomAnimal="Lola"
                            pesok="250"
                            salper="6"
                        />
                    </div>
                    <div>
                        <TablaSal
                            salIdAnimal="0021"
                            salNomAnimal="Lola"
                            pesok="250"
                            salper="6"
                        />
                        <TablaSal
                            salIdAnimal="0021"
                            salNomAnimal="Lola"
                            pesok="250"
                            salper="6"
                        />
                        <TablaSal
                            salIdAnimal="0021"
                            salNomAnimal="Lola"
                            pesok="250"
                            salper="6"
                        />
                        <TablaSal
                            salIdAnimal="0021"
                            salNomAnimal="Lola"
                            pesok="250"
                            salper="6"
                        />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PorcentajeSal;