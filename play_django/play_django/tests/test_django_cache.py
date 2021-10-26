import random
from unittest import case
from django.core.cache import cache
from django.test import TestCase


class TestDjangoCache(TestCase):
    """ 测试django cache """

    def setUp(self) -> None:
        self.cache_content = random.random()
        return super().setUp()

    def test_django_cache(self):
        """ 基础测试 """
        from django.core.cache import cache
        cache.set('myalias', self.cache_content)
        self.assertEqual(self.cache_content, cache.get('myalias', None))

    def test_django_cache_get_none_key(self):
        """ 测试从缓存中取一个不存在的key """
        from django.core.cache import cache
        from django.core.cache.backends.base import InvalidCacheBackendError
        try:
            cache.get(str(random.random()))
        except Exception as err:
            self.assertTrue(isinstance(err, InvalidCacheBackendError))

    def test_django_cache_key_exists(self):
        """ 测试缓存中一个键是否存在 """
        from django.core.cache import cache
        sentinel = object()
        self.assertTrue(cache.get(str(random.random()), sentinel) is sentinel)

    def test_django_cache_incr_and_decr(self):
        """ 测试缓存累加和累减 """
        cache.set('num', 0)
        cache.incr('num')  # 累加
        cache.incr('num')
        self.assertEqual(2, cache.get('num'))
        cache.decr('num', 2)  # 累减
        cache.decr('num')
        self.assertEqual(-1, cache.get('num'))
