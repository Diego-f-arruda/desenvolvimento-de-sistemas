from selenium import webdriver;
import time;
from selenium.webdriver.common.by import By

navegador = webdriver.Chrome();
time.sleep(5);
navegador.maximize_window()
navegador.get("https://www.facebook.com/")
time.sleep(5)
navegador.find_element(By.NAME, "email").send_keys("nome@gmail.com")
navegador.find_element(By.NAME, "pass").send_keys("123456789")
time.sleep(5)

botaoVerde = navegador.find_element(By.NAME, "login")
botaoVerde.click()
time.sleep(5)