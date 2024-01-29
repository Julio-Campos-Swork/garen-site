import imagePad from '@public/productos/pad.webp'
import imagePolicarbonato from '@public/productos/policarbonato.webp'
import imageCanalada from '@public/productos/acanalada.webp'
import imagePolicarboantoCelular from '@public/productos/policarboanto_celular.webp'
import imageAcrilico from '@public/productos/acrilico.webp'
import imagePoliestireno from '@public/productos/poliestireno.webp'
import imageEnvolventes from '@public/productos/envolventes.webp'
import imageManguera from '@public/productos/manguera.webp'
import imageTuboGaren from '@public/productos/tubogaren.webp'

export function getImageProductos(i18n) {
  return [
    {
      src: imagePad,
      altText: 'Pad',
      title: i18n.PRODUCTS.PRODUCT_LIST.PAD,
    },
    {
      src: imagePolicarbonato,
      altText: 'Policarbonato',
      title: i18n.PRODUCTS.PRODUCT_LIST.POLICARBONATO_SOLIDO,
    },
    {
      src: imageCanalada,
      altText: 'Acanalada',
      title: i18n.PRODUCTS.PRODUCT_LIST.LAMINA_ACANALADA,
    },
    {
      src: imagePolicarboantoCelular,
      altText: 'Policarbonato Celular',
      title: i18n.PRODUCTS.PRODUCT_LIST.POLICARBONATO_CELULAR,
    },
    {
      src: imageAcrilico,
      altText: 'Acrilico',
      title: i18n.PRODUCTS.PRODUCT_LIST.ACRILICO,
    },
    {
      src: imagePoliestireno,
      altText: 'Poliestireno',
      title: i18n.PRODUCTS.PRODUCT_LIST.POLIESTIRENO,
    },
    {
      src: imageEnvolventes,
      altText: 'Envolventes',
      title: i18n.PRODUCTS.PRODUCT_LIST.ENVOLVENTES_DIFUSORES_LUZ,
    },
    {
      src: imageManguera,
      altText: 'Manguera',
      title: i18n.PRODUCTS.PRODUCT_LIST.POLIDUCTO_CORRUGADO,
    },
    {
      src: imageTuboGaren,
      altText: 'Tubo Garen',
      title: i18n.PRODUCTS.PRODUCT_LIST.TUBOGAREN,
    },
  ]
}
