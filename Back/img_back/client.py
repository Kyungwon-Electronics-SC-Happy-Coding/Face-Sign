import requests

file1 = open('1.png', 'rb')
file2 = open('2.png', 'rb')
file3 = open('3.png', 'rb')
file4 = open('4.png', 'rb')
file5 = open('5.png', 'rb')

upload = {
    'file1': file1,
    'file2': file2,
    'file3': file3,
    'file4': file4,
    'file5': file5
    }

res = requests.post('http://127.0.0.1:9090/ai/check-face', files = upload)