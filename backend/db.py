from flask import Flask
from flask_pymongo import pymongo
from app import app
import json

CONNECTION_STRING = "mongodb+srv://sgovindan:diamonds@lengecluster.b86st.mongodb.net/workoutOptions?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.workoutOptions


def insert_data(user):
    data = {'first_name': user.first_name, 'last_name': user.last_name, 'email': user.email, 'password': user.password}
    result = db.emails.insert(data)
    print("success")


def insert_workout(email, the_dict):
    name = email + ' Collection'
    user_collection = db[name]
    result = user_collection.insert_one(the_dict)


def collec_exist(email):
    collist = db.list_collection_names()
    name = email + ' Collection'
    if name in collist:
        return True
    else:
        return False


def get_user(email):
    my_col = db["emails"]
    # print(my_col.find_one()['email'])

    # user_data = json.load(my_col.find())
    # print(user_data['email'])

    for x in my_col.find():
        if email == x['email']:
            return x

    return None
