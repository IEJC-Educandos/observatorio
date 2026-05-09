// Configuração Firebase - valores injetados em tempo de build
// NÃO commitar este arquivo com valores reais em um repositório público!

export const getFirebaseConfig = () => {
  // Tenta ler as variáveis de ambiente durante o build
  // Fallback para valores vazios se não encontrar
  return {
    apiKey: import.meta.env.VITE_FB_API_KEY || "",
    authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN || "",
    projectId: import.meta.env.VITE_FB_PROJECT_ID || "",
    storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET || "",
    messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID || "",
    appId: import.meta.env.VITE_FB_APP_ID || ""
  };
};
