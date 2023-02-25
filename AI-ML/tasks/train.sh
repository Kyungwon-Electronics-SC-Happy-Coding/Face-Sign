#!/usr/bin/env bash

python -m training.train -d "$1"
# python -m training.train -d ./data/train_img
# python -m inference.classifier --image-path ./data/test_img/su.jpg --save-dir ./data/result_img/su.jpg