from django.http import JsonResponse
from ....utils.HTTPServices import Responses
from ...Validators.AdminsRequestValidators import AdminsRequestValidators


class TestController:

    def TestAlotOfStuff(AdminsRequestValidators):
        return JsonResponse({
            "working?": "Idk"
        })
