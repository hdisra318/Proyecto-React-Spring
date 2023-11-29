import Header from "../components/Header";

import './recetas.css';

export function Receta1() {

    return (
    <>
        <h1>Receta: Ensalada Cesar</h1>

        <div className="mt-5 receta-ingredientes">
            <h2 className="mb-4">Ingredientes</h2>

            <ul className="listado-ingredientes">
            <li>Lechuga tipo romana (Hojas)</li>
            <li>Queso Parmesano al gusto</li>
            <li>Vinagre de manzana 1 cucharada sopera</li>
            <li>Salsa Perrins 1 cucharada sopera</li>
            <li>60ml de Aceite de oliva virgen</li>
            <li>Zumo de limón 1 cucharada sopera</li>
            <li>Picatostes (pan en tacos frito o asado en el horno) al gusto</li>
            <li>1 yema de huevo</li>
            <li>1 diente de ajo</li>
            </ul>
        </div>

        <div className="separacion"></div>

        <div className="receta-pasos mt-5">
            <h2 className="mb-4">Pasos</h2>
            <p>
            Preparamos primero los picatostes caseros. Para ello calentamos el horno a 180º. Mientras se calienta, frotamos el pan con un diente de ajo y lo cortamos en dados. Aliñamos el pan con un poco de aceite de oliva y los horneamos durante 5 minutos hasta que estén dorados.
            </p>
            <p>
            Para hacer el aliño o salsa César, hacemos puré el diente de ajo que habíamos usado para frotar el pan y lo mezclamos con el aceite, la salsa Perrins, el zumo de limón, una cucharada de vinagre y la yema de huevo. Batimos bien hasta emulsionar y lo reservamos. Como puedes ver, en la salsa original, no se utilizan anchoas, pero sí en la salsa de la ensalada Cesar de pollo.
            </p>
            <p>
            Lavamos y secamos las hojas de lechuga romana y las salpimentamos con esmero. Después echamos el aliño o salsa César por encima de las barcas u hojas de lechuga romana. Completamos rellenando las hojas con algunos picatostes y rallamos en el momento el queso parmesano por encima para que sea bien visible.
            </p>
        </div>

        <div className="receta-imagen mt-5">
            <img className="rounded w-50" src="/img/ensalada_cesar.jpeg" alt="imagen de la ensalada cesar" />
        </div>
    </>
    );
}

export function Receta2() {

    return (
        <>
            <h1>Receta: Ensalada Rusa</h1>

            <div className="mt-5 receta-ingredientes">
            <h2 className="mb-4">Ingredientes</h2>

            <ul className="listado-ingredientes">
                <li>4 papas medianas </li>
                <li>2 zanahorias medianas</li>
                <li>1 taza de chicharos frescos</li>
                <li>media taza de mayonesa</li>
                <li>1 cucharada de zumo de limon</li>
                <li>media taza de crema</li>
                <li>1 cucharada de sal</li>
                <li>media cucharada de pimienta negra</li>
                <li>1 diente de ajo</li>
                <li>2 tallos de apio rebanado</li>
                <li>1 cebolla rebanada</li>
            </ul>
            </div>

            <div className="separacion"></div>

            <div className="receta-pasos mt-5">
            <h2 className="mb-4">Pasos</h2>
            <p>
                Cocine las papas y las zanahorias en agua hirviendo con sal en una cacerola grande a fuego medio alto durante 10 minutos o hasta que estén tiernas cuando las pinche con un tenedor. Agregue los chícharos cuando falten 5 minutos para que estén listas. Escurra bien y enfríe levemente.
            </p>
            <p>
                Mezcle la mayonesa, la crema, la sal, el tomillo y la pimienta en un recipiente mediano hasta incorporarlos completamente. Agregue el apio y el cebollín a las verduras cocidas y mezcle bien. Agregue la mayonesa preparada y revuelva suavemente para cubrir bien. Tape.
            </p>
            <p>
                Refrigere la ensalada hasta servir.
            </p>
            </div>

            <div className="receta-imagen mt-5">
                <img className="rounded w-50" src="/img/ensalada_rusa.jpeg" 
                alt="imagen de la ensalada rusa" />
            </div>
        </>
    );
}

export function Receta3() {

    return (
        <>
            <h1>Receta: Ensalada Kartoffelsalat</h1>

            <div className="mt-5 receta-ingredientes">
            <h2 className="mb-4">Ingredientes</h2>

            <ul className="listado-ingredientes">
                <li>1kg de papas</li>
                <li>50g de pepinillos</li>
                <li>8 salchichas alemanas</li>
                <li>1 cucharada de vinagre de vino blanco</li>
                <li>1 cucharada de mostaza Dijon</li>
                <li>1 cucharada de caldo de pollo</li>
                <li>1 cucharada de aceite de oliva</li>
                <li>1 cebollina manojo</li>
                <li>1 lechuga</li>
                <li>pimienta negra molida</li>
                <li>sal al gusto</li>
            </ul>
            </div>

            <div className="separacion"></div>

            <div className="receta-pasos mt-5">
            <h2 className="mb-4">Pasos</h2>
            <p>
                Lavamos la lechuga, secamos y reservamos.
            </p>
            <p>
                Ponemos una olla al fuego con sal para cocer las papas con la piel, las dejaremos cocer hasta que estén tiernas.Reservamos y las dejamos enfriar antes de pelarlas y picamos menudos los pepinillos.
            </p>
            <p>
                Una vez frías las papas, las pelamos y cortamos en rodajas, las reservamos en un plato. Por otra parte calentamos el caldo en un cacito o al microondas. Cuando cueza unos cinco minutos a fuego lento le vamos agregando al mismo tiempo que removemos con unas varillas la mezcla de vinagre, aceite y mostaza o bien las cuatro cucharadas de mayonesa.
            </p>
            <p>
                Volvamos esta mezcla encima de las papas cocidas y los pepinillos picados y removemos para que se integren bien todos los ingredientes. Salpimentamos, picamos menudo el cebollino y dejamos reposar durante una hora en la nevera o la tomamos así caliente según el gusto de cada uno.
            </p>
            </div>

            <div className="receta-imagen mt-5">
                <img className="rounded w-50" src="/img/ensalada_Kartoffelsalat.jpeg" 
                alt="imagen de la ensalada Kartoffelsalat" />
            </div>
        </>
    );
}


export default function Receta({numero}) {

    return (
        <>
            <Header user="Staff" />

            <main className="p-4">
                
                {numero === 1 ? <Receta1 /> : (numero === 2 ? <Receta2 /> : <Receta3 />)}

            </main>
        </>
    );

}