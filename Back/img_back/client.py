import requests

files = open('goooood.png', 'rb')

upload = {'file': files}

res = requests.post('http://127.0.0.1:8080/ai/check-face', files = upload)