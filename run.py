from app import create_app,db
from flask_script import Manager, Server
from flask_migrate import MigrateCommand
app = create_app('test')
manager = Manager(app)
manager.add_command('db', MigrateCommand)
manager.add_command('server', Server)




if __name__ == '__main__':
    manager.run()
