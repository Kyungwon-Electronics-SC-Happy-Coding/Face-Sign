from flask import *
from werkzeug.utils import secure_filename

app = Flask(__name__)

# HTTP POST방식으로 전송된 이미지를 저장
@app.route('/', methods=['POST'])
def save_image():
    f = request.files['file']
    f.save('./save_image/' + secure_filename(f.filename))
    return 'done!'

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9090, debug=True)