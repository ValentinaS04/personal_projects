from selenium import webdriver
import time
#Web scraping de Duolingo con framework Selenium, obtención del título y captura de pantalla.

# Dirección de extensión chromedriver en el local
PATH = "C:/ProgramFiles(x86)/chromedriver.exe"

# Ejecutar la extensión 
driver = webdriver.Chrome()

# Navegar a la Url de la página a la que se le hará scraping
driver.get("https://www.duolingo.com/") 

#Tiempo de espera para que cargue la página
time.sleep(5)

# Obtención del título
titulo = driver.title

# Toma una captura de patalla
filename = "captura.png"  # Nombre del archivo de la captura de pantalla

# Imprimir el título y guardar la captura de pantalla
print('El título de esta página es: '+ titulo)
driver.get_screenshot_as_file(filename)

# Fin de la ejecución y cierra la ventana
driver.quit()