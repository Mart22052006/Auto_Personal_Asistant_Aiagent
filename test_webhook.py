import requests

webhook_url = 'https://mirawang.app.n8n.cloud/webhook-test/df1a7d69-bc32-4e22-a6a2-70f5d2d6decb'

# Test with GET request
print("Testing GET request...")
response = requests.get(webhook_url)
print(f"GET Status: {response.status_code}")
print(f"GET Response: {response.text}\n")

# Test with POST request
print("Testing POST request...")
data = {
    "message": "Test message",
    "timestamp": "2025-01-13T16:11:15+08:00",
    "source": "test_script"
}
response = requests.post(webhook_url, json=data)
print(f"POST Status: {response.status_code}")
print(f"POST Response: {response.text}")
