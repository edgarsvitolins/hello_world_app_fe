from django.http import HttpResponse
import requests
import os

def hello(request):
    data = requests.get(os.environ['REACT_APP_BE_URI'])
    ret = data.text
    return HttpResponse(f"Django FE presents: {ret}")