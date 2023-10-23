#!/bin/sh

import json

# Load the JSON data from the file
with open('index.json', 'r') as json_file:
    data = json.load(json_file)

# Sort the data by the concatenated string of "from_name" and "to_name"
sorted_data = sorted(data, key=lambda x: f"{x['from_name']}{x['to_name']}")

# Write the sorted data back to the file
with open('index.json', 'w') as json_file:
    json.dump(sorted_data, json_file, indent=4)

print("Data has been alphabetized and saved to index.json.")
