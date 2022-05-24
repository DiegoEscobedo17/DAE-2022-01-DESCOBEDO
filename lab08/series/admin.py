from telnetlib import SE
from django.contrib import admin

# Register your models here.

from .models import Serie

admin.site.register(Serie)