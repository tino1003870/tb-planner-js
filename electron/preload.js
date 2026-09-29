const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    ping: () => "pong",

    print: () =>
        ipcRenderer.invoke("print"),

    printPreview: todos =>
        ipcRenderer.invoke(
            "print-preview",
            todos
        ),

    printPreviewPdf: () =>
        ipcRenderer.invoke(
            "print-preview-pdf"
        ),

        caldavRequest: (request) =>
        ipcRenderer.invoke("caldav-request", request)
});
