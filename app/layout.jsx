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
                <script async src="https://stage-widget.intelswift.com/script.js?tenantId=bec61ef5-7901-438d-a42a-fc3cd68d5497&botId=67c726f901b3e636a11e5751&uuid=1d17d3f6-dfaf-44a6-a8a1-22b8be395dc9&end=true"></script>
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
