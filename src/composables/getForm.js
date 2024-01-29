export async function handler(req, res) {
  console.log({ req, res })
  try {
    const formData = req.body // Obtiene los datos del formulario desde la solicitud
    // Aquí puedes procesar los datos, enviar correos electrónicos, guardar en una base de datos, etc.

    // Ejemplo de respuesta exitosa
    return res.status(200).json({ message: 'Formulario enviado con éxito' })
  } catch (error) {
    // Manejo de errores
    return res
      .status(500)
      .json({ error: 'Hubo un error al procesar el formulario' })
  }
}
