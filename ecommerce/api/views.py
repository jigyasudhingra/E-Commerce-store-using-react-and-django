from django.http import JsonResponse

# Create your views here.


def home(request):
    return JsonResponse({'info': 'Ecommerce Store Using React And Django', 'name': "Jigyasu Dhingra"})
