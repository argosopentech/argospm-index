#!/usr/bin/env python3

import json


def check_valid(index):
    """Check for duplicates. This function will print and exit(1) if invalid"""
    seen_pairs = set()
    valid = True

    for entry in index:
        from_code = entry["from_code"]
        to_code = entry["to_code"]
        pair = (from_code, to_code)
        reverse_pair = (to_code, from_code)

        # Check for duplicates
        if pair in seen_pairs:
            print(f"Duplicate found! {entry}")
            valid = False
        else:
            seen_pairs.add(pair)

    # Ensure every pair has its reverse
    for pair in seen_pairs:
        if (pair[1], pair[0]) not in seen_pairs:
            print("Missing reverse! {missing_reverse}")
            valid = False

    if not valid:
        print("Invalid index.json")
        exit(1)


with open("index.json") as index_file:
    index = json.load(index_file)
    check_valid(index)
    index.sort(key=lambda x: x["from_name"] + x["to_name"])
    print(json.dumps(index, indent=4))
