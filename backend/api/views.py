from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
#here we define a simple view that returns a "hello django!" message
def hello (request):
    return HttpResponse("hello django! whts up")