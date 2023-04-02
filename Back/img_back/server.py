from flask import *
from werkzeug.utils import secure_filename

app = Flask(__name__)
files = []

# HTTP POST방식으로 전송된 이미지를 저장
@app.route('/ai/check-face', methods=['POST'])
def save_images():
    files.append(request.files['file1'])
    files.append(request.files['file2'])
    files.append(request.files['file3'])
    files.append(request.files['file4'])
    files.append(request.files['file5'])
    for f in files:
        f.save('./save_image/' + secure_filename(f.filename))
    return 'done!'

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9090, debug=True)