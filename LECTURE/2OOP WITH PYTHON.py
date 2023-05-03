class Dog:
    def __init__(self,name) :
        self.name=name
    def __str__(self):
        return f"Dog : {self.name}"
mg=Dog("mg")
print(mg)
paul=Dog("paul")
print(paul)