import '../styles/globals.css';

export const metadata = {
  title: {
    template: '%s | Netlify',
    default: 'Netlify Starter',
  },
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

        {/* Intelswift Messenger */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__INTELSWIFT_MESSENGER_CONFIG__ = {
                customer_language: navigator.language || "en"
              };
            `,
          }}
        />
        <script
async
	src="https://widget.intelswift.com/script.js"
	data-tenant-id="eca1135a-e3cb-46a6-8590-083539a17874"
	data-bot-id="68c553a504fc195af4d4d684"
	data-assistant-id="68c5517404fc195af4d4d62a"
	data-uuid="105fa8c3-7a89-4c85-adb4-f52fc780b5d3"
	data-sandbox="false"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("message", (event) => {
                if (event.data?.type === "messengerReady") {
                  const iframe = document.getElementById("iFrameMessenger");
                  iframe?.contentWindow.postMessage({ type: "verifyOrigin", href: window.location.href }, "*");
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
