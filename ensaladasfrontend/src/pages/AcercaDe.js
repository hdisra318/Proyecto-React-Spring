import Header from "../components/Header";

function AcercaDe() {

    return (
        <>

            <Header />

            <main className="pt-4 pb-4 container">

                <h2 className="display-5 text-center mt-3">Nosotros</h2>

                <div className="d-flex flex-row-reverse align-items-center justify-content-between my-4">

                    <div className="w-100 me-4">
                        <p className="lead">Somos la tienda de ensaladas más famosa de la Facultad de Ciencias</p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit tellus non dolor ultrices, eget tincidunt metus egestas. Phasellus ut enim nisl. Maecenas eu facilisis dui, ut consequat elit. Mauris ornare vestibulum ullamcorper. In pulvinar felis sit amet libero tempor molestie. Duis ac tortor sed purus elementum aliquam sed et libero. Suspendisse nec libero dapibus, cursus dolor non, imperdiet libero. Nam placerat consectetur neque vel feugiat. Aenean fringilla mattis risus, ut hendrerit augue mollis ut. Praesent vel tellus eu mi vestibulum tincidunt et sit amet nulla.
                        </p>
                    </div>

                    <div className="p-5 w-100">
                        <img src="/img/about_1.jpg" alt="ensalada"
                            className="m-0 w-100 rounded make_bigger"
                        />
                    </div>
                </div>

            </main>
        </>
    );
}

export default AcercaDe;