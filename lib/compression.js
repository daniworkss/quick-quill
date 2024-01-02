export const compressionUrl = process.env.NEXT_PUBLIC_COMPRESSION_URL
// to read image content for compression
export async function readImage(image){
    const res = await fetch(image)
    const data = await res.blob()
    console.log(data)
    return data
}