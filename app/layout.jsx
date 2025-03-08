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
<script async src="https://stage-widget.intelswift.com/script.js?tenantId=f5c6bfd0-895d-4b43-8443-1116f6daea0a&botId=67cbf7abca1eece27c50c7d5&uuid=129fe57c-63d2-4d9a-8b84-0b813e65fda4&end=true"></script>           
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                             window.onload = (event) => {
    const propsInterval = setInterval(widgetTimer, 1000);

    function widgetTimer() {
      const tenantId = localStorage.getItem("wws-tenant-id")
      const botId = localStorage.getItem("wws-bot-id")
      const uuid = localStorage.getItem("wws-uuid")
      const host = window.location.hostname
      const language = navigator.language || navigator.userLanguage; 

      if(
        (uuid && uuid != "undefined") && 
        (tenantId && tenantId != "undefined") && 
        (botId && botId != "undefined") && 
        (host && host != "undefined")
      ){
        clearInterval(propsInterval);
        document.getElementById("iframeWidgetContainer").contentWindow.postMessage( 
        {
          tenantId: tenantId,
          botId: botId,
          uuid: uuid,
          host: host,
          contact_language: language
                                        }, "*"
                                    );
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
