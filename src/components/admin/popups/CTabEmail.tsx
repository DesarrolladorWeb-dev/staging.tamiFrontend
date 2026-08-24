// ---
import EmailEditor from "./EmailEditor.tsx";
import TimePicker from "./TimePicker.tsx";
// ---

import React from 'react'

function CTabEmail() {
  return (
    

<div id="contentCorreo" className="hidden space-y-6">
    {/* <!-- Selector de Correo --> */}
    <div
        className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800/30 flex flex-col sm:flex-row items-center gap-4"
    >
        <div className="flex items-center gap-3 shrink-0">
            <div
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm"
            >

            </div>
            <span className="text-sm font-bold text-blue-900 dark:text-blue-100">Configuración:</span>
        </div>
        <div className="relative flex-1 w-full">
            <select
                id="emailSelector"
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none shadow-sm cursor-pointer transition-all appearance-none"
            >
                <option value="1">📧 Correo 1</option>
                <option value="2">📧 Correo 2</option>
                <option value="3">📧 Correo 3</option>
            </select>
            <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </div>
    </div>

    {/* <!-- Correo 1 --> */}
    <div id="emailBlock1" className="email-message-block space-y-6">
        <div
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm space-y-6"
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <h3
                            id="emailTitleDisplay"
                            className="font-bold text-gray-900 dark:text-gray-100 text-lg"
                        >
                            Correo Electrónico #1
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Configura el título, mensaje, Boton e imagen para
                            los emails.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <input
                        type="hidden"
                        name="delete_emailImage"
                        id="delete_emailImage"
                        value="0"
                    />
                    <input
                        type="file"
                        id="emailImage"
                        accept="image/*"
                        className="hidden"
                    />
                    <button
                        type="button"
                        onClick={() =>document.getElementById('emailImage')?.click()}
                        className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all shadow-md group active:scale-95"
                    >
                        Añadir Imagen Adjunta
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            ></path>
                        </svg>
                    </button>
                    <button
                        type="button"
                        id="clearEmailImage"
                        className="hidden p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Borrar Imagen Correo"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div
                    className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-xl"
                >
                    <span className="font-medium"
                        >Recomendación para la imagen:</span
                    > Usa formato <span
                        className="bg-blue-100 dark:bg-blue-900/50 px-1.5 py-0.5 rounded text-blue-700 dark:text-blue-300 font-medium"
                        >webp, png o jpg</span
                    > y un tamaño sugerido de <span
                        className="bg-blue-100 dark:bg-blue-900/50 px-1.5 py-0.5 rounded text-blue-700 dark:text-blue-300 font-medium"
                        >600x400px</span
                    > o similar para un mejor diseño.
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="emailTitle"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                        >Título / Asunto</label
                    >
                    <input
                        type="text"
                        id="emailTitle"
                        className="block w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                        placeholder="Ej: Información sobre Promoción Exclusiva"
                        value="Solicitud de información - Popup Web"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                        >Mensaje de Correo</label
                    >
                    <EmailEditor />
                </div>

                <div
                    className="space-y-4 pt-6 mt-4 border-t border-gray-100 dark:border-gray-700/50"
                >
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">
                        Configuración del Botón
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label
                                htmlFor="emailBtnText"
                                className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >Texto del Botón</label
                            >
                            <input
                                type="text"
                                id="emailBtnText"
                                className="block w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                placeholder="Ej: Ver Productos"
                                value="Ver Productos"
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="emailBtnLink"
                                className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >Enlace del Botón</label
                            >
                            <input
                                type="url"
                                id="emailBtnLink"
                                className="block w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                                placeholder="Ej: https://tami.com/productos"
                                value="https://tami.com/productos"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                            className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 shadow-sm flex flex-col items-center sm:items-start"
                        >
                            <span
                                className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-3 w-full text-center sm:text-left"
                                >Color de Fondo</span
                            >
                            <div className="flex items-center gap-3">
                                <div
                                    className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-600 shadow-md cursor-pointer hover:scale-105 transition-transform"
                                >
                                    <input
                                        type="color"
                                        id="emailBtnBgColor"
                                        value="#0b1c3c"
                                        className="absolute -top-2 -left-2 w-16 h-16 cursor-pointer"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        className="text-xs font-bold text-gray-500 dark:text-gray-400"
                                        >Seleccionar</span
                                    >
                                    <span className="text-xs text-gray-400"
                                        >fondo</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div
                            className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 shadow-sm flex flex-col items-center sm:items-start"
                        >
                            <span
                                className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-3 w-full text-center sm:text-left"
                                >Color del Texto</span
                            >
                            <div className="flex items-center gap-3">
                                <div
                                    className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-600 shadow-md cursor-pointer hover:scale-105 transition-transform"
                                >
                                    <input
                                        type="color"
                                        id="emailBtnTextColor"
                                        value="#ffffff"
                                        className="absolute -top-2 -left-2 w-16 h-16 cursor-pointer"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        className="text-xs font-bold text-gray-500 dark:text-gray-400"
                                        >Seleccionar</span
                                    >
                                    <span className="text-xs text-gray-400"
                                        >texto</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Tiempo de Envío del Correo --> */}
                <h2
                    className="text-xl font-extrabold text-gray-800 dark:text-gray-100 mt-8 mb-4"
                >
                    Tiempo de Envío
                </h2>

                <div className="grid grid-cols-1 w-full gap-4">
                    <TimePicker
                        id="emailSendDelay"
                        name="emailSendDelay"
                        label="Tiempo de envío"
                        defaultValue={0}
                        
                    />
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Correo 2 (Oculto por defecto) --> */}
    {/* <!-- <div id="emailBlock2" className="email-message-block space-y-6 hidden"> ... duplicar contenido de arriba modificando los IDs (ej: id="EmailTime2") ... </div> --> */}

    {/* <!-- Correo 3 (Oculto por defecto) --> */}
    {/* <!-- <div id="emailBlock3" className="email-message-block space-y-6 hidden"> ... duplicar contenido de arriba modificando los IDs (ej: id="EmailTime3") ... </div> --> */}
</div>

  )
}

export default CTabEmail
