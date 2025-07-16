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
	data-tenant-id="094f2d86-c31e-4a4c-b5b5-c890ee26399a"
	data-bot-id="687790274afbca04b27b16c6"
	data-assistant-id="687790184afbca04b27b16a1"
	data-uuid="4d7999ee-6b16-4391-9ab0-eac99281c0dd"
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
