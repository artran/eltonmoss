from django.contrib import admin

from models import *


class ArticleImageInline(admin.StackedInline):
    model = ArticleImage
    prepopulated_fields = {'slug': ('name',)}


class SectionImageInline(admin.StackedInline):
    model = SectionImage
    prepopulated_fields = {'slug': ('name',)}


class LanguageAdmin(admin.ModelAdmin):
    pass
admin.site.register(Language, LanguageAdmin)


class SectionAdmin(admin.ModelAdmin):
    save_on_top = True
    inlines = (SectionImageInline,)
    prepopulated_fields = {'slug': ('name',)}
admin.site.register(Section, SectionAdmin)


class TransSectionAdmin(admin.ModelAdmin):
    list_display = ('trans_name', 'section', 'lang',)
    list_filter = ('lang',)
admin.site.register(TransSection, TransSectionAdmin)


class ArticleAdmin(admin.ModelAdmin):
    save_on_top = True
    list_display = ('title', 'live_from', 'live_to', 'is_live',)
    list_filter = ('section', 'created_by',)
    search_fields = ('title',)
    prepopulated_fields = {'slug': ('title',)}
    filter_horizontal = ('related',)
    inlines = (ArticleImageInline,)
admin.site.register(Article, ArticleAdmin)


class TransArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'article', 'lang',)
    list_filter = ('lang',)
admin.site.register(TransArticle, TransArticleAdmin)
