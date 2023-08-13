import json
import csv

# JSON file path
json_file_path = 'flipkart_fashion_products_dataset.json'

# Load JSON data from file
with open(json_file_path, 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# CSV file path
csv_file_path = 'output_data.csv'

# Write JSON data to CSV
with open(csv_file_path, 'w', newline='',encoding='utf-8-sig') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=data[0].keys())
    csv_writer.writeheader()
    csv_writer.writerows(data)

print("CSV file has been created:", csv_file_path)
