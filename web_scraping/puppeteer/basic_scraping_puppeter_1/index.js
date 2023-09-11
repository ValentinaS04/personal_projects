// Importar la biblioteca Puppeteer
const puppeteer = require("puppeteer");

// Definir una función asincrónica llamada getDataFromWebPage
async function getDataFromWebPage() {
  // Iniciar una instancia del navegador Puppeteer
  const browser = await puppeteer.launch();

  // Crear una nueva página en el navegador
  const page = await browser.newPage();

  // Navegar a una URL específica en la página
  await page.goto('https://www.freecodecamp.org/learn/scientific-computing-with-python/');

  // Ejecutar un script en el contexto de la página web para extraer datos
  const data = await page.evaluate(() => {
    // Seleccionar el contenido del elemento 'h1' y almacenarlo en la variable 'title'
    let title = document.querySelector('h1').innerText;

    // Seleccionar el contenido del primer elemento 'p' y almacenarlo en 'description'
    let description = document.querySelector('p').innerText;

    // Devolver un objeto con los datos extraídos
    return {
      title,
      description,
    }
  });

  // Imprimir los datos extraídos en la consola
  console.log(data);

  // Cerrar la instancia del navegador
  await browser.close();
}

// Llamar a la función para iniciar el proceso de extracción de datos
getDataFromWebPage();
