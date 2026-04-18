 export default function BuyCard() {
    return(
        <div className="max-w-7x1 mx-auto p-6">

            {/* TOPO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* IMAGENS */}
                <div className="flex flex-col gap-4">
                    <img src="" alt="produto" className="w-full rounded-lg"/>
                </div>

                    {/* MINIATURAS */}
                    <div className="flex gap-2">
                        <div className="w-16 h-16 border"></div>
                        <div className="w-16 h-16 border"></div>
                        <div className="w-16 h-16 border"></div>
                        <div className="w-16 h-16 border"></div>
                        <div className="w-16 h-16 border"></div>
                        <div className="w-16 h-16 border"></div>
                        <div className="w-16 h-16 border"></div>
                        <div className="w-16 h-16 border"></div>
                    </div>

                        {/* INFO */}
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2x1 font-semibold">
                                Placa de Vídeo RX 7600 GAMING OC 8G AMD Radeon Gigabyte, 8GB, GDDR6, 128bits, RGB -  GV-R76GAMING OC-8GD
                            </h1>

                            <span className="text-yellow-500">
                                
                            </span>

                        </div>
        </div>
        </div>
    )
 }