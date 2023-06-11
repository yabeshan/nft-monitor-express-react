import storage from 'node-persist';

const MIN_VERSION = Number(process.env.VERSION) || 1;

await storage.init();
await storage.setItem('version', MIN_VERSION)

export const getVers = async () => {
  const version = await storage.getItem('version')
  return version
}

export const setVers = async (v: any) => {
  await storage.setItem('version', v)
  return v
}
