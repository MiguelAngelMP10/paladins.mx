export default function ContactPage() {
    return (
        <div>
            <div className="max-w-4xl w-full mx-auto p-12 rounded-lg shadow-lg shadow-violet-700">
                <h2 className="text-4xl font-bold text-white mb-10">CONTÁCTENOS</h2>
                <p className="my-4 text-white">Lo invitamos a ponerse en contacto con nosotros para ofrecerle una
                    solución
                    acorde a sus necesidades.</p>

                <form action="#" method="post" className="space-y-8">
                    <div>
                        <label className="block text-left text-white font-bold text-xl" htmlFor="name">Nombre</label>
                        <input required
                               className="w-full p-4 border border-violet-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                               id="name" name="name"
                               placeholder="Nombre"
                               type="text"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-left text-white font-bold text-xl">Correo
                            Electrónico</label>
                        <input type="email" id="email" name="email" placeholder="Correo Electrónico"
                               className="w-full p-4 border border-violet-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                               required/>
                    </div>
                    <div>
                        <label htmlFor="message"
                               className="block text-left text-violet font-bold text-xl">Mensaje</label>
                        <textarea id="message" name="message" placeholder="Mensaje"
                                  className="w-full p-4 border border-violet-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
                                  required
                        ></textarea>
                    </div>
                    <button type="submit"
                            className="w-full bg-violet-500 text-white py-4 px-6 rounded-lg hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500">
                        Enviar
                    </button>
                </form>
            </div>

        </div>
    );
}
