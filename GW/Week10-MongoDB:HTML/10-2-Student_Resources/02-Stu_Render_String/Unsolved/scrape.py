from splinter import Browser
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriveManager

def init_browser():
    executable_path = {'executable_path' : ChromeDriveManager().install()}
    return browser(Chrome, **executable_path, headless = False)

def scape():
    browser = init_browser()
    listing = {}
    url = ""
    browser.visit(url)
    browse.visit(url)
    html = browser.html
    sopu = BeautifulSoup(html, )