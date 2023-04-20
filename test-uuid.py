# -*- coding:utf-8 -*-
import uuid
print(uuid.uuid1())
print(uuid.uuid3(uuid.NAMESPACE_DNS, 'jing_zhong'))
print(uuid.uuid4())
print(uuid.uuid5(uuid.NAMESPACE_DNS, 'jing_zhong'))