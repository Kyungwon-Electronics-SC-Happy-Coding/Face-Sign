import io
import os
import joblib
from PIL import Image
from flask import Flask
from flask_restplus import Api, Resource, fields, abort, inputs
from werkzeug.datastructures import FileStorage
from face_recognition import preprocessing
from werkzeug import secure_filename



preprocess = preprocessing.ExifOrientationNormalize()

IMAGE_KEY = 'image'
INCLUDE_PREDICTIONS_KEY = 'include_predictions'
app = Flask(__name__)
api = Api(app, version='0.1.0', title='Face Recognition API', doc='/docs')

parser = api.parser()
parser.add_argument(f'kiosk_id', type=int, required=True,
                    help='write you kiosk_id.')
parser.add_argument(IMAGE_KEY, type=FileStorage, location='files', required=True,
                    help='Image on which face recognition will be run.')
parser.add_argument(INCLUDE_PREDICTIONS_KEY, type=inputs.boolean, default=False,
                    help='Whether to include all predictions in response.')

imgparser = api.parser()
imgparser.add_argument(f'kiosk_id', type=str,  required=True,
                    help='write you kiosk_id.')
imgparser.add_argument(f'name', type=str,  required=True,
                    help='user name please.')
imgparser.add_argument(f'0', type=FileStorage, location='files', required=True,
                    help='Image on which face recognition will be run.')
imgparser.add_argument(f'1', type=FileStorage, location='files', required=True,
                    help='Image on which face recognition will be run.')
imgparser.add_argument(f'2', type=FileStorage, location='files', required=True,
                    help='Image on which face recognition will be run.')
imgparser.add_argument(f'3', type=FileStorage, location='files', required=True,
                    help='Image on which face recognition will be run.')
imgparser.add_argument(f'4', type=FileStorage, location='files', required=True,
                    help='Image on which face recognition will be run.')

trainparser = api.parser()
trainparser.add_argument(f'kiosk_id', type=str,  required=True,
                    help='write you kiosk_id.')

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

def save_image(kiosk_id, image, filename):
    image_dir = './' + kiosk_id + '/images/' + filename
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

        model_path = './model/' + str(args['kiosk_id']) + '/face_recogniser.pkl'
        face_recogniser = joblib.load(model_path)

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
       img_path = []
       for i in range(5):
        image_path = save_image(args['kiosk_id'], args[str(i)], args['name'])
        img_path.append(image_path)
       return img_path
    

# import subprocess

@api.route('/run-python-file')
class RunPythonFile(Resource):
    @api.expect(trainparser)
    @api.response(200, 'Success')
    @api.response(400, 'No file specified.', error_model)
    def get(self):
        args = trainparser.parse_args()
        training_str = 'python -m training.train -d ./' + args['kiosk_id']+ '/images -k ' + args['kiosk_id']
#         os.system('python -m training.train -d ./images')
        os.system(training_str)

        return 'training is finish'

if __name__ == '__main__':
    app.run(host='0.0.0.0')
