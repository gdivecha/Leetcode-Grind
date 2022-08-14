class MyHashMap(object):

    def __init__(self):
        self.myMap = {}
        

    def put(self, key, value):
        (self.myMap)[key] = value

    def get(self, key):
        if(key in (self.myMap).keys()):
            return (self.myMap).get(key)
        else:
            return -1

    def remove(self, key):
        if(key in (self.myMap).keys()):
            (self.myMap).pop(key)


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)