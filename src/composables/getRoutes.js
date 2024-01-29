import { LOCALES_LINKS } from '@data/Locales'
export function getLocalizedPath(locale, path) {
  const currentLocalePaths = LOCALES_LINKS[locale]
  const pathInLocale = Object.keys(currentLocalePaths).find(
    (key) => currentLocalePaths[key] === path
  )

  if (!pathInLocale) {
    return path // Si no se encuentra la ruta en el idioma actual, devolvemos la ruta original
  }

  const newPath = LOCALES_LINKS[locale][pathInLocale]
  return newPath
}
