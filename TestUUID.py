# -*- coding:utf-8 -*-
import uuid


def getUUID1():
    return str(uuid.uuid1())

def getUUID3(name):
    return str(uuid.uuid3(uuid.NAMESPACE_DNS, name))

def getUUID4():
    return str(uuid.uuid4())

def getUUID5(name):
    return str(uuid.uuid5(uuid.NAMESPACE_DNS, name))


if __name__ == '__main__':
    n = 10
    for i in range(0,n):
        print("第" + str(i+1) + "个uuid1：" + getUUID1())
        print("第" + str(i+1) + "个uuid3：" + getUUID3("jing_zhong"))
        print("第" + str(i+1) + "个uuid4：" + getUUID4())
        print("第" + str(i+1) + "个uuid5：" + getUUID5("jing_zhong"))
