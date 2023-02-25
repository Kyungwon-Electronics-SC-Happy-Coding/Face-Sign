## make model
```
python -m training.train -d ./data/train_img
```
## prediction
```
python -m inference.classifier --image-path ./data/test_img/su.jpg --save-dir ./data/result_img/su.jpg
```