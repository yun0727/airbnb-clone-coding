class Human:
    def __init__(self, name):
        self.name=name
        
    def sayHello(self):
        print(f"Hello my name is {self.name}")

class Player(Human):
    def __init__(self, name, xp):
        self.xp=xp

class Fan(Human):
    def __init__(self, name, fav_team):
        self.fav_team=fav_team
        
        
mg_player=Player("mg",10)
mg_player.sayHello()
mg_fan=Fan("mg_fan","dont know")
mg_fan.sayHello()