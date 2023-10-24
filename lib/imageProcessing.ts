import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) {
      throw new Error(`Failed to fech image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    console.log(`base64: ${base64}`);

    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
