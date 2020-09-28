from app.models import User
from app.db import add, commit
from app.tests.fixtures import flask_app,dbsession


def test_add_entity(flask_app, dbsession):
    with flask_app.app_context():
        user_data = {
            "name": "doe",
            "email": "test@gmail.com",
            "password": "root",
            "username": "john"
        }
        obj = User(**user_data)
        add(obj)
        commit()
        fetched = User.query.filter_by(name='doe').all()
        assert len(fetched) == 1
        assert fetched[0].name == 'doe'
        assert fetched[0].id == 1
        assert fetched[0].username == 'john'
        assert fetched[0].name == 'doe'
