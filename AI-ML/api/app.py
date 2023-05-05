import io
import os
import joblib
from PIL import Image
from flask import Flask
from flask_restplus import Api, Resource, fields, abort, inputs
from werkzeug.datastructures import FileStorage
from face_recognition import preprocessing
from werkzeug import secure_filename


face_recogniser = joblib.load('model/face_recogniser.pkl')
preprocess = preprocessing.ExifOrientationNormalize()

IMAGE_KEY = 'image'
INCLUDE_PREDICTIONS_KEY = 'include_predictions'
app = Flask(__name__)
api = Api(app, version='0.1.0', title='Face Recognition API', doc='/docs')

parser = api.parser()
parser.add_argument(IMAGE_KEY, type=FileStorage, location='files', required=True,
                    help='Image on which face recognition will be run.')
parser.add_argument(INCLUDE_PREDICTIONS_KEY, type=inputs.boolean, default=False,
                    help='Whether to include all predictions in response.')

imgparser = api.parser()
imgparser.add_argument(IMAGE_KEY, type=FileStorage, location='files', required=True,
                    help='Image on which face recognition will be run.')

bounding_box = api.model('BoundingBox', {
    'left': fields.Float,
    'top': fields.Float,
    'right': fields.Float,
    'bottom': fields.Float,
})

prediction = api.model('Prediction', {
    'label': fields.String,
    'confidence': fields.Float
})

face_model = api.model('Face', {
    'top_prediction': fields.Nested(prediction),
    'bounding_box': fields.Nested(bounding_box),
    'all_predictions': fields.List(fields.Nested(prediction))
})

response_model = api.model('Response', {
    'faces': fields.List(fields.Nested(face_model))
})

error_model = api.model('ErrorResponse', {
    'message': fields.String
})

def save_image(image):
    image_dir = './images'
    if not os.path.exists(image_dir):
        os.makedirs(image_dir)
    filename = secure_filename(image.filename)
    filepath = os.path.join(image_dir, filename)
    image.save(filepath)
    return filepath


@api.route('/face-recognition')
class FaceRecognition(Resource):
    @api.expect(parser, validate=True)
    @api.marshal_with(response_model)
    @api.response(200, 'Success')
    @api.response(400, 'No image file in request.', error_model)
    def post(self):
        args = parser.parse_args()
        if IMAGE_KEY not in args:
            abort(400, "Image field '{}' doesn't exist in request!".format(IMAGE_KEY))

        img = Image.open(io.BytesIO(args[IMAGE_KEY].read()))
        img = preprocess(img)
        # convert image to RGB (stripping alpha channel if exists)
        img = img.convert('RGB')
        faces = face_recogniser(img)
        return \
            {
                'faces': [
                    {
                        'top_prediction': face.top_prediction._asdict(),
                        'bounding_box': face.bb._asdict(),
                        'all_predictions': [p._asdict() for p in face.all_predictions] if
                        args[INCLUDE_PREDICTIONS_KEY] else None
                    }
                    for face in faces
                ]
            }

@api.route('/save-faceimg')
class SaveFaceImg(Resource):
    @api.expect(imgparser)
    @api.response(200, 'Success')
    @api.response(400, 'No image file in request.', error_model)
    def post(self):
       args = imgparser.parse_args()
       if IMAGE_KEY not in args:
           abort(400, "Image field '{}' doesn't exist in request!".format(IMAGE_KEY))

       img = Image.open(io.BytesIO(args[IMAGE_KEY].read()))
       img = preprocess(img)
       # convert image to RGB (stripping alpha channel if exists)
       img = img.convert('RGB')
       img.save('test.png', 'PNG')
       image_path = save_image(args[IMAGE_KEY])

       return image_path
'''
@api.route('/save-faceimg', methods=['POST'])
def save_images():
    files.append(request.files['file1'])
    files.append(request.files['file2'])
    files.append(request.files['file3'])
    files.append(request.files['file4'])
    files.append(request.files['file5'])
    files.clear()
    try:
        for f in files:
            f.save('./save_image/' + secure_filename(f.filename))
        return \
            {
                'faces': [
                    {
                        'result': True,
                        'message': 'HolyMoly'
                    }
                ]
            }
    except:
        return \
            {
                'faces': [
                    {
                        'result': False,
                        'message': '유감이네요....'
                    }
                ]
            }

@api.route('/training-start', methods=['GET'])
def training():
    # os.system('python -m training.train -d ./data/train_img')
    os.system('python -m training.train -d ./save_image')

    return \
            {
                'faces': [
                    {
                        'message': 'Training start, waiting please'
                    }
                ]
            }
'''

if __name__ == '__main__':
    app.run(host='0.0.0.0')
