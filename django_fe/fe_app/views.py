from django.http import HttpResponse
import requests

def hello(request):
    data = requests.get('http://localhost:8080')
    ret = data.text
    return HttpResponse(f"Django FE presents: {ret}")