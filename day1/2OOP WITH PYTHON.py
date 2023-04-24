class Player:
    def __init__(self, name, xp):
        self.name=name
        self.xp=xp
    def sayHello(self):
        print(f"Hello my name is {self.name}")
        
mg=Player('mg',1000)
mg.sayHello()