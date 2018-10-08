#!/usr/bin env python

import numpy as np
import pandas as pd
from flask import Flask, abort, jsonify, request
import pickle
# from flask_accept import accept
from flask_cors import CORS

with open('model.pkl', 'rb') as model:
    xgb_model = pickle.load(model)


features = ['longitude', 'latitude', 'gym', 'lift', 'swimming_pool',
       'property_size', 'bathroom', 'floor', 'total_floor', 'balconies',
       'building_type_AP', 'building_type_GC', 'building_type_IF',
       'building_type_IH', 'parking_BOTH', 'parking_FOUR_WHEELER',
       'parking_NONE', 'parking_TWO_WHEELER', 'type_BHK1', 'type_BHK2',
       'type_BHK3', 'type_BHK4', 'type_BHK4PLUS', 'type_RK1']

# c = pd.DataFrame([77, 12, 0, 0, 0, 500, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0])
# c = c.transpose()

# c.columns = features

# print(xgb_model.predict(c))

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/api', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    f = open('inputs.txt', 'a+')
    f.write(str(data))
    f.write('\n')
    pred = [data[x] for x in features]
    pred = pd.DataFrame(pred)
    pred = pred.transpose()
    pred.columns = features

    # # make prediction
    y  = xgb_model.predict(pred)
    f.write(str(y))
    f.write('\n')
    f.close()

    return pd.Series(y).to_json(orient='values')

@app.route('/hello', methods=['POST'])
def hello():
    data = request.get_json()
    return jsonify({'you sent': data})


if __name__ == '__main__':
    app.run(host= '0.0.0.0', debug=True)