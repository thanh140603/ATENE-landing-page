import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../src/assets/images')

async function knockOutDarkBg(inputName, outputName, mode = 'color') {
  const inputPath = path.join(imagesDir, inputName)
  const outputPath = path.join(imagesDir, outputName)

  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true })

  const threshold = 22

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const lum = (r + g + b) / 3

    if (lum <= threshold) {
      data[i + 3] = 0
      continue
    }

    if (mode === 'mono') {
      data[i] = 0
      data[i + 1] = 0
      data[i + 2] = 0
      data[i + 3] = 255
      continue
    }

    const isOrange = r > 150 && g > 50 && b < 120
    if (isOrange) {
      data[i + 3] = 255
      continue
    }

    data[i] = 0
    data[i + 1] = 0
    data[i + 2] = 0
    data[i + 3] = 255
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(outputPath)

  console.log(`Wrote ${outputName}`)
}

await knockOutDarkBg('bbia.png', 'bbia_cutout.png', 'mono')
await knockOutDarkBg('quadthera.png', 'quadthera_cutout.png', 'color')
