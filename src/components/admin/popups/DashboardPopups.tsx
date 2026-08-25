import React, { useEffect, useState } from 'react'

import TabPopups from "../popups/CTabPopups.tsx";
import TabWhatsapp from "../popups/CTabWhatsapp.tsx"; 
import TabEmail from "../popups/CTabEmail.tsx";
import TabProducto from "../popups/TabProducto.tsx";
import PreviewSection from "../popups/CPreviewSection.tsx";

import { initPopupManager } from "src/scripts/admin/popupsManager";




function DashboardPopups() {

  // 1. Definir estados para la navegación principal y las subpestañas
  const [mainTab, setMainTab] = useState<'inicio' | 'producto'>('inicio');
  const [subTab, setSubTab] = useState<'popups' | 'whatsapp' | 'correo'>('popups');

  useEffect(() => {
    initPopupManager();
  }, []);

  return (
    <>
<div
        className="p-0 h-full w-full bg-gray-50 dark:bg-gray-900 overflow-x-hidden"
    >
        <div
            className="bg-teal-500 rounded-t-xl p-4 flex justify-between items-center shadow-lg relative z-10 w-full"
        >
            <div className="flex items-center gap-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                    <h1
                        className="text-2xl font-bold text-white tracking-wide drop-shadow-sm"
                    >
                        Configuración de Pop-ups
                    </h1>
                    <p className="text-teal-100 text-sm">
                        Personaliza el aspecto de tus ventanas emergentes
                    </p>
                </div>
            </div>
        </div>

        {/* <!-- Contenido Principal --> */}
        <div
            className="bg-white dark:bg-gray-800 rounded-b-xl shadow-xl border border-t-0 p-8 border-gray-200 dark:border-gray-700 min-h-[60vh]"
        >
            <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10">
                {/* <!-- Columna Izquierda: Formulario de Opciones --> */}
                <div
                    className="space-y-6 lg:border-r lg:border-gray-200 lg:dark:border-gray-700 lg:pr-8"
                >
                    {/* <!-- Top Level: Inicio / Producto --> */}
                    <div className="flex gap-4 mb-6 pb-2">
                            <button
                                type="button"
                                onClick={() => setMainTab('inicio')}
                                className={`px-6 py-2 rounded-full text-sm font-bold shadow-md 
                                            transition-all active:scale-95 ${
                                mainTab === 'inicio' ? 'bg-teal-600 text-white' : 
                                                        'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                                }`}
                            >
                        
                            Inicio
                        </button>
                        <button
                            type="button"
                            onClick={() => setMainTab('producto')}
                            className={`px-6 py-2 rounded-full text-sm font-bold shadow-md transition-all active:scale-95 ${
                            mainTab === 'producto' ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                            }`}
                        >
                            Producto
                        </button>
                    </div>

                
            <div className="space-y-6">
              {/* Sección Inicio */}
                {mainTab === 'inicio' && (
                    <div className="space-y-6">
                    {/* Botones de Sub-pestañas */}
                    <div className="flex gap-2 mb-6 pb-2">
                        <button
                        type="button"
                        onClick={() => setSubTab('popups')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            subTab === 'popups' ? 'bg-teal-600 text-white' : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400'
                        }`}
                        >
                        Pop-ups
                        </button>
                        <button
                        type="button"
                        onClick={() => setSubTab('whatsapp')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            subTab === 'whatsapp' ? 'bg-teal-600 text-white' : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400'
                        }`}
                        >
                        WhatsApp
                        </button>
                        
                        <button
                        type="button"
                        onClick={() => setSubTab('correo')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                            subTab === 'correo' ? 'bg-teal-600 text-white' : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400'
                        }`}
                        >
                        Correo
                        </button>
                    </div>

                {/* subSecciones Popups , Whasapp y Correo*/}
                {subTab === 'popups' && (
                    <div id="containerPopupsInicio">
                    <TabPopups />
                    </div>
                )}
                {subTab === 'whatsapp' && <TabWhatsapp />}
                {subTab === 'correo' && <TabEmail />}
                </div>

                )}

                {/* Sección Producto */}
                {mainTab === 'producto' && (
                    <div className="space-y-8">
                    <TabProducto />
                    </div>
                )}

                    {/* Botón Guardar */}
                    <div id="sharedSaveFooter" className="mt-8 flex flex-col gap-2">
                          <p
                                id="popupStatus"
                                className="text-sm text-gray-600 dark:text-gray-300"
                                role="status"
                                aria-live="polite"
                            />
                        <div className="flex justify-center lg:justify-end">
                         <button
                                    type="button"
                                    id="btnGuardarPopups"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors disabled:opacity-50"
                                >
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <PreviewSection activeTab={subTab} />
            </div>
        </div>
    </div>


    </>
  )
 

}

export default DashboardPopups