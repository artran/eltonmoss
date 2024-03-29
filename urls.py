import sys

from django.conf.urls.defaults import *
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # The main site
    (r'^$', 'django.views.generic.simple.redirect_to', {'url': '/articles/'}),
    (r'^articles/', include('eltonmoss.cms.urls')),
)

urlpatterns += patterns('',
    (r'^admin/', include(admin.site.urls)),
)

# Static content
if 'runserver' in sys.argv:
    urlpatterns += patterns('',
        (r'^media/css/(?P<path>.*)$', 'django.views.static.serve', {'document_root': 'media/css'}),
        (r'^media/js/(?P<path>.*)$', 'django.views.static.serve', {'document_root': 'media/js'}),
        (r'^media/images/(?P<path>.*)$', 'django.views.static.serve', {'document_root': 'media/images'}),
        (r'^media/cms_images/(?P<path>.*)$', 'django.views.static.serve', {'document_root': 'media/cms_images'}),
        (r'^media/icons/(?P<path>.*)$', 'django.views.static.serve', {'document_root': 'media/icons'}),
        (r'^media/block-images/(?P<path>.*)$', 'django.views.static.serve', {'document_root': 'media/block-images'}),
    )
