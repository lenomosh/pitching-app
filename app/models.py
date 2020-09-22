from app.db import (
    String,
    Column,
    TIMESTAMP,
    BigInteger,
    Integer,
    Text,
    ForeignKey,
    Model,
    Relationship)
# import sys
# sys.setrecursionlimit(10**5)
from datetime import datetime
from sqlalchemy_serializer import SerializerMixin


class Common(SerializerMixin):
    CREATED_AT = Column(
        TIMESTAMP,
        default=datetime.utcnow()
    )
    UPDATED_AT = Column(
        TIMESTAMP,
        nullable=True
    )


class Category(Common, Model):
    __tablename__ = 'categories'
    id = Column(
        BigInteger,
        primary_key=True
    )
    name = Column(
        String(50),
        nullable=False
    )


class Pitch(Model, Common):
    __tablename__ = 'pitches'
    id = Column(
        BigInteger,
        primary_key=True
    )
    content = Column(
        String(1000),
        nullable=False
    )
    user_id = Column(
        BigInteger,
        ForeignKey('users.id'),
        nullable=False
    )
    category_id = Column(
        BigInteger,
        ForeignKey('categories.id'),
        nullable=False
    )
    author = Relationship(
        'User',
        backref='pitches',
        lazy=True,
        uselist=False
    )
    category = Relationship(
        'Category',
        backref='category_pitches',
        lazy=True,
        uselist=False
    )
    actions = Relationship(
        'Action',
        lazy=True,
    )
    serialize_only = ( 'id','user_id','content','category_id',)


class User(Model, Common):
    __tablename__ = 'users'
    id = Column(
        BigInteger,
        primary_key=True
    )
    name = Column(
        String(50),
        nullable=False
    )
    username = Column(
        String(50),
        nullable=False
    )
    email = Column(
        String(100),
        nullable=False
    )
    password = Column(
        String,
        nullable=False
    )


class Comment(Model, Common):
    __tablename__ = 'comments'
    id = Column(
        BigInteger,
        primary_key=True
    )
    content = Column(
        Text,
        nullable=False
    )
    pitch_id = Column(
        BigInteger,
        ForeignKey('pitches.id'),
        nullable=False
    )
    user_id = Column(
        BigInteger,
        ForeignKey('users.id'),
        nullable=False
    )


class Action(Common, Model):
    __tablename__ = 'actions'
    id = Column(
        BigInteger,
        primary_key=True
    )
    user_id = Column(
        BigInteger,
        ForeignKey('users.id'),
        nullable=False
    )
    pitch_id = Column(
        BigInteger,
        ForeignKey('pitches.id'),
        nullable=False
    )
    action_type = Column(
        Integer,
        nullable=False
    )


class ProfilePicture(Common, Model):
    __tablename__ = 'profile_pictures'
    id = Column(
        BigInteger,
        primary_key=True
    )
    path = Column(
        String(256),
        nullable=False
    )
    user_id = Column(
        BigInteger,
        ForeignKey('users.id'),
        nullable=False
    )