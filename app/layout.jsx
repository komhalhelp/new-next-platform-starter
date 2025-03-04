import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>

                
<script async src="https://stage-widget.intelswift.com/script.js?tenantId=835c3375-8bff-4f6b-94d0-dbbd537f5303&botId=67c6f37e01b3e636a11e4eed&uuid=70907f9c-aaec-43dc-a0d4-7d82108c376a&end=true"></script>
<script
    dangerouslySetInnerHTML={{
        __html: `
            window.onload = function(event) {
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
