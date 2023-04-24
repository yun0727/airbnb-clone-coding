class Human:
    def __init__(self, name):
        self.name=name
        
    def sayHello(self):
        print(f"Hello my name is {self.name}")

class Player(Human):
    def __init__(self, name, xp):
        super().__init__(name)
        self.xp=xp

class Fan(Human):
    def __init__(self, name, fav_team):
        super().__init__(name)
        self.fav_team=fav_team
        
        
mg=Fan("mg","blue")
mg.sayHello()