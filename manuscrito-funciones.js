/* manuscrito-funciones.js */

function verificarAcceso() {
    if (localStorage.getItem('clave_guardada') !== CLAVE_ACTUAL) {
        window.location.href = 'login.html';
    }
}

function avanzarA(siguientePaginaBase) {
    const idioma = document.documentElement.lang || 'es';
    let urlDestino = `${siguientePaginaBase}-${idioma}.html`;
    localStorage.setItem('progresoJuego', urlDestino);
    window.location.href = urlDestino;
}

function openMasterModal() {
    const modal = document.getElementById('master-modal');
    if (modal) {
        cargarTextosMaster();
        modal.style.display = 'flex';
    }
}

function closeMasterModal() {
    document.getElementById('master-modal').style.display = 'none';
}

function cargarTextosMaster() {
    // Detectamos el idioma real de la página
    let idioma = document.documentElement.lang || 'es';

    const textos = {
        'es': { t: 'Contacta con el Master', d: 'Si tienes alguna incidencia técnica o duda, contacta conmigo.', b: 'Cerrar' },
        'ca': { t: 'Contacta amb el Màster', d: 'Si tens cap incidència tècnica o dubte, contacta amb mi.', b: 'Tancar' },
        'en': { t: 'Contact the Master', d: 'If you have any technical issues or doubts, contact me.', b: 'Close' }
    };

    const t = textos[idioma] || textos['es'];
    document.getElementById('master-titulo').innerText = t.t;
    document.getElementById('master-descripcion').innerText = t.d;
    document.getElementById('master-cerrar').innerText = t.b;
}