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
                {/* Image */}
                <img
                    src="/images/image.jpg"
                    alt="Full Screen Image"
                    className="w-full h-full object-cover"
                />

                {/* Integration of script  */}


<script async src="https://stage-widget.intelswift.com/script.js?tenantId=f965d825-f413-4e7d-b14e-c81018e3371b&botId=682d99a03b98d464ef31c200&uuid=e48f7162-888b-4125-9e81-8bd8bd0a699f&end=true"></script>
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
        },"*")
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
