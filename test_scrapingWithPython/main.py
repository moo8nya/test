import requests
from bs4 import BeautifulSoup

url = 'https://***********************'

soup = BeautifulSoup(
        requests.get( url ).content
        , "lxml"
)

for users in soup.find_all( 'p', {'class': 'profileName'} ):
    users.find('script').unwrap()
    users.find('span').unwrap()
    print( users )