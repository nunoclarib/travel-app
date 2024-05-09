<<<<<<< HEAD
class Drink:
    def __init__(self, drink_name: str, alcohol: str, category: str, bac: float):
        self.drink_name = drink_name
        self.alcohol = alcohol
        self.category = category
        self.bac = bac

    @staticmethod
    def load_drinks():
        with open("../repo/drinks.json", "r") as file:
            return json.load(file)

    def store_drinks(self):
        with open("../repo/drinks.json", "w") as file:
            json.dump(file, "w")

    def get_drinks_by_name(self, drink_name: str):
        self.load_drinks()

=======



<<<<<<< HEAD
    @property
    def drinks(self):
        return self._drinks
=======












<<<<<<< HEAD
class User:
    def __init__(self, name, password, age, eatean, email, address, weight, gender, dateOfBirth, emergencyContacts, drinks_consumed, bac):
        self.name = name
        self.password = password
        self.age = age
        self.eatean = eatean
        self.email = email
        self.address = address
        self.weight = weight
        self.gender = gender
        self.dateOfBirth = dateOfBirth
        self.emergencyContacts = emergencyContacts
        self.drinks_consumed = []
        self.bac = 0.0

    def add_drink(self, drink_name, alcohol_percentage):
        self.drinks_consumed.append((drink_name, alcohol_percentage))

    def calculate_bac(self):
        total_alcohol_consumed = 0
        for drink_name, alcohol_percentage in self.drinks_consumed:
            # Convert alcohol percentage to a float
            try:
                alcohol_percentage = float(alcohol_percentage.strip('%'))
            except ValueError:
                print(f"Invalid alcohol percentage for drink {drink_name}. Skipping...")
                continue
            # Calculate alcohol consumed in grams
            alcohol_consumed = (alcohol_percentage / 100) * self.weight * 0.789
            total_alcohol_consumed += alcohol_consumed

        # Calculate BAC
        if self.gender.lower() == 'male':
            r = 0.68
        else:
            r = 0.55
        bac = (total_alcohol_consumed / (self.weight * r)) * 100
        self.bac = bac
=======