import json

from flask import Flask, request, jsonify
import db
from CardioWorkout import CardioWorkout
from StrengthCard import StrengthCard
from User import User

app = Flask(__name__)


@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"


# adds a user to the database
@app.route("/add_email", methods=['POST'])
def add_user():
    user_data = request.get_json()
    new_user = User(first_name=user_data['first_name'], last_name=user_data['last_name'], email=user_data['email'],
                    password=user_data['password'])
    db.insert_data(new_user)
    return "Connected to the data base and added new_user!"


@app.route('/users:<email>', methods=['GET'])
def get_user(email):
    temp_val = db.get_user(email)
    print(type(temp_val))
    if not temp_val:
        return "No such user with that email exists"
    else:
        temp_val.pop('_id')
        return jsonify(temp_val), "The user indeed exists"


@app.route("/add_workout:<email>", methods=['POST'])
def add_workout(email):
    user_workouts = request.get_json()
    temp_strcard = StrengthCard('Hard')
    temp_strcard.exercise_one = user_workouts['Exercise_One']
    temp_strcard.exercise_two = user_workouts['Exercise_Two']
    temp_strcard.exercise_Three = user_workouts['Exercise_Three']
    this_dict = temp_strcard.make_megadict()
    db.insert_workout(email, this_dict)
    return "Connected to the data base and added new_user!"


@app.route('/email:<email>/difficulty:<difficulty>', methods=['GET'])
def get_workouts(email, difficulty):
    work_one = StrengthCard(difficulty).make_megadict()
    work_two = StrengthCard(difficulty).make_megadict()
    work_three = StrengthCard(difficulty).make_megadict()
    work_four = StrengthCard(difficulty).make_megadict()
    work_five = StrengthCard(difficulty).make_megadict()
    if not db.collec_exist(email):
        card_dict = {"Workout_One": work_one,
                     "Workout_Two:": work_two,
                     "Workout_Three:": work_three,
                     "Workout_Four:": work_four,
                     "Workout_Five:": work_five
                     }
        return jsonify(card_dict), "does not exist"
    else:
        name = email + ' Collection'
        my_col = db[name]

        for workout in my_col.find():
            if work_one == workout or work_two == workout or work_three == workout or work_four == workout \
                    or work_five == workout:
                get_workouts(email, difficulty)
        card_dict = {"Workout_One": work_one,
                     "Workout_Two:": work_two,
                     "Workout_Three:": work_three,
                     "Workout_Four:": work_four,
                     "Workout_Five:": work_five
                     }

    return jsonify(card_dict)


@app.route("/add_cardio:<email>", methods=['POST'])
def add_cardio(email):
    user_cardio = request.get_json()
    temp_val = CardioWorkout('Hard')
    temp_val.exercise = user_cardio['Exercise_One']
    temp_val.exercise_two = user_cardio['Exercise_Two']
    temp_val.exercise_three = user_cardio['Exercise_Three']
    temp_val.circuit_sets = user_cardio['Circuit sets']
    temp_dict = temp_val.make_dict()
    db.insert_workout(email, temp_dict)
    return "Connected to the data base and added new_user!"


@app.route('/cardio:<email>/difficulty:<difficulty>', methods=['GET'])
def get_cardio(email, difficulty):
    cardio_one = CardioWorkout(difficulty).make_dict()
    cardio_two = CardioWorkout(difficulty).make_dict()
    cardio_three = CardioWorkout(difficulty).make_dict()
    cardio_four = CardioWorkout(difficulty).make_dict()
    cardio_five = CardioWorkout(difficulty).make_dict()
    if not db.collec_exist(email):
        cardio_dict = {"Cardio_One": cardio_one,
                       "Cardio Two": cardio_two,
                       "Cardio Three": cardio_three,
                       "Cardio Four": cardio_four,
                       "Cardio Five": cardio_five}
        return jsonify(cardio_dict), "does not exist"
    else:
        name = email + ' Collection'
        my_col = db[name]

        for workout in my_col.find():
            if cardio_one == workout or cardio_two == workout or cardio_three == workout or cardio_four == workout \
                    or cardio_five == workout:
                get_cardio(email, difficulty)
            cardio_dict = {"Cardio_One": cardio_one,
                           "Cardio Two": cardio_two,
                           "Cardio Three": cardio_three,
                           "Cardio Four": cardio_four,
                           "Cardio Five": cardio_five}
            return jsonify(cardio_dict)


if __name__ == '__main__':
    app.run(port=8000)
