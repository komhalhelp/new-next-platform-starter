import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout() {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="w-screen h-screen flex items-center justify-center">
                {/* Картинка на весь екран */}
                <img
                    src="/images/image.jpg"
                    alt="Full Screen Image"
                    className="w-full h-full object-cover"
                />

                {/* Інтеграція скриптів */}
                <script
                    async
                    src="https://stage-widget.intelswift.com/script.js?tenantId=edd30677-c5a4-4db7-a9e2-d2b7076a3e07&botId=67cbfc9aca1eece27c50ca96&uuid=a82cdc57-4b9c-4806-a29b-392d1d3ddf6d&end=true"
                ></script>

                {/* Вставка JS-коду у JSX через dangerouslySetInnerHTML */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                          window.onload = (event) => {
                              const propsInterval = setInterval(widgetTimer, 1000);

                              function widgetTimer() {
                                  const tenantId = localStorage.getItem("wws-tenant-id");
                                  const botId = localStorage.getItem("wws-bot-id");
                                  const uuid = localStorage.getItem("wws-uuid");
                                  const host = window.location.hostname;
                                  const language = navigator.language || navigator.userLanguage; 

                                  if (
                                      (uuid && uuid !== "undefined") && 
                                      (tenantId && tenantId !== "undefined") && 
                                      (botId && botId !== "undefined") && 
                                      (host && host !== "undefined")
                                  ) {
                                      clearInterval(propsInterval);
                                      document.getElementById("iframeWidgetContainer").contentWindow.postMessage({
                                          tenantId: tenantId,
                                          botId: botId,
                                          uuid: uuid,
                                          host: host,
                                          contact_language: language
                                      }, "*");
                                  }
                              }
                          };
                        `,
                    }}
                />
            </body>
        </html>
    );
}
