import "dotenv/config";

function required(name: string): string {
  // @ts-ignore
  const value = (globalThis as any).process?.env?.[name] || (globalThis as any)[name];
  if (!value && (globalThis as any).process?.env?.NODE_ENV === "production") {
    // No lanzar error aquí en Cloudflare para evitar fallos de inicialización si las variables no están listas
    return "";
  }
  return value ?? "";
}

export const env = {
  appId: required("APP_ID"),
  appSecret: required("APP_SECRET"),
  // @ts-ignore
  isProduction: (globalThis as any).process?.env?.NODE_ENV === "production",
  databaseUrl: required("DATABASE_URL"),
  kimiAuthUrl: required("KIMI_AUTH_URL") || "https://auth.kimi.com",
  kimiOpenUrl: required("KIMI_OPEN_URL") || "https://open.kimi.com",
  // @ts-ignore
  ownerUnionId: (globalThis as any).process?.env?.OWNER_UNION_ID ?? "",
};
