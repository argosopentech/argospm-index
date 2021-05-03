#!/usr/bin/env python3

import json

with open('index.json') as index_file:
    index = json.load(index_file)
    index.sort(key=lambda x: x['from_name'] + x['to_name'])
    print(json.dumps(index, indent=4))
