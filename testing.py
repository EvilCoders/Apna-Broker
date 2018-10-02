import numpy as np
import pandas as pd
from flask import Flask, abort, jsonify, request
import json
import requests

url = "http://0.0.0.0:5000/api"

data = json.dumps({"longitude": 77,"latitude": 12,"gym": 0,"lift": 0,"swimming_pool": 0,"property_size": 1000,"bathroom": 1,"floor": 1,"total_floor": 2,"balconies": 0,"building_type_AP": 0,"building_type_GC": 0,"building_type_IF": 1,"building_type_IH": 0, "parking_BOTH": 0,"parking_FOUR_WHEELER": 0,"parking_NONE": 0,"parking_TWO_WHEELER": 0,"type_BHK1": 0, "type_BHK2": 1,"type_BHK3": 0,"type_BHK4": 0,"type_BHK4PLUS": 0,"type_RK1": 0})

r = requests.post(url, data)
print(r.json())