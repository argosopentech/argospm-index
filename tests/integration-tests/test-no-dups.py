#!/usr/bin/env python3
# Test that there are no duplicate packages for any language in the index

import json

with open("index.json") as index_file:
    index = json.load(index_file)
    tuples = list()
    failed = False
    for metadata in index:
        from_code = metadata["from_code"]
        to_code = metadata["to_code"]
        if (from_code, to_code) in tuples:
            print("Duplicate package: {} -> {}".format(from_code, to_code))
            failed = True
        tuples.append((from_code, to_code))
    if failed:
        exit(1)
    else:
        exit(0)
